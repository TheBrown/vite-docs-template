# ການເຊື່ອມຕໍ່ Backend

:::tip ໝາຍເຫດ
ຖ້າທ່ານຕ້ອງການ serve HTML ໂດຍໃຊ້ backend ແບບດັ່ງເດີມ (ຕົວຢ່າງ Rails, Laravel) ແຕ່ໃຊ້ Vite ສຳລັບສະແດງ assets, ກວດສອບການ Integration ທີ່ມີຢູ່ໃນ [Awesome Vite](https://github.com/vitejs/awesome-vite#integrations-with-backends).

ຖ້າທ່ານຕ້ອງການການ integration ແບບກຳນົດເອງ, ທ່ານສາມາດເຮັດຕາມຂັ້ນຕອນໃນຄູ່ມືນີ້ເພື່ອກຳນົດຄ່າດ້ວຍຕົນເອງ.
:::

1. ໃນ Vite config, ໃຫ້ກຳນົດຄ່າລາຍການ ແລະ ເປີດໃຊ້ງານ build manifest:

   ```js
   // vite.config.js
   export default defineConfig({
     build: {
       // generate manifest.json ໃນ outDir
       manifest: true,
       rollupOptions: {
         // ຂຽນທັບ default .html ເລີ່ມຕົ້ນ
         input: '/path/to/main.js',
       },
     },
   })
   ```

   ຖ້າທ່ານບໍ່ໄດ້ເປີດໃຊ້ງານ [module preload polyfill](/config/build-options.md#build-polyfillmodulepreload), ທ່ານຕ້ອງໄດ້ import  polyfill ໃນລາຍການຂອງທ່ານນຳ

   ```js
   // add the beginning of your app entry
   import 'vite/modulepreload-polyfill'
   ```

2. ສຳລັບການພັດທະນາ, ໃສ່ສິ່ງຕໍ່ໄປນີ້ໃນ template HTML ຂອງ server ທ່ານ (ແທນທີ່ `http://localhost:5173` ດ້ວຍ local URL  ທີ່ Vite ກຳລັງແລ່ນຢູ່):

   ```html
   <!-- if development -->
   <script type="module" src="http://localhost:5173/@vite/client"></script>
   <script type="module" src="http://localhost:5173/main.js"></script>
   ```

   ໃນການສະແດງ assets ຢ່າງເໝາະສົມ, ທ່ານມີ 2 ທາງເລືອກ:

   - ກວດສອບໃຫ້ແນ່ໃຈວ່າ server ໄດ້ຮັບການກຳນົດຄ່າໃຫ້ static proxy ຮ້ອງຂໍ asset ໄປຍັງ Vite server 
   - ຕັ້ງ [`server.origin`](/config/server-options.md#server-origin) ເພື່ອໃຫ້ URL ເນື້ອຫາທີ່ສ້າງຂຶ້ນໄດ້ຮັບການແກ້ໄຂໂດຍໃຊ້ URL back-end server ແທນ relative path 

   ສິ່ງນີ້ຈຳເປັນສຳລັບ asset. ຕົວຢ່າງ image ເພື່ອໃຫ້ໂຫຼດໄດ້ຢ່າງຖືກຕ້ອງ.

   ໃຫ້ຮູ້ວ່າຫາກທ່ານໃຊ້ React ກັບ `@vitejs/plugin-react`, ທ່ານຈະຕ້ອງເພີ່ມສິ່ງນີ້ກ່ອນ script ທາງເທິງ, ເນື່ອງຈາກ plugin ບໍ່ສາມາດແກ້ໄຂ HTML ທີ່ທ່ານກຳລັງໃຫ້ບໍລິການຢຸ່:

   ```html
   <script type="module">
     import RefreshRuntime from 'http://localhost:5173/@react-refresh'
     RefreshRuntime.injectIntoGlobalHook(window)
     window.$RefreshReg$ = () => {}
     window.$RefreshSig$ = () => (type) => type
     window.__vite_plugin_react_preamble_installed__ = true
   </script>
   ```

3. ສຳລັບ production: ຫຼັງຈາກແລ່ນ `vite build`,  ຟາຍ `manifest.json` ກໍຈະຖືກສ້າງຂຶ້ນພ້ອມຟາຍ asset ອື່ນ. ຕົວຢ່າງ ຟາຍ manifest ແມ່ນປະມານນີ້:

   ```json
   {
     "main.js": {
       "file": "assets/main.4889e940.js",
       "src": "main.js",
       "isEntry": true,
       "dynamicImports": ["views/foo.js"],
       "css": ["assets/main.b82dbe22.css"],
       "assets": ["assets/asset.0ab0f9cd.png"]
     },
     "views/foo.js": {
       "file": "assets/foo.869aea0d.js",
       "src": "views/foo.js",
       "isDynamicEntry": true,
       "imports": ["_shared.83069a53.js"]
     },
     "_shared.83069a53.js": {
       "file": "assets/shared.83069a53.js"
     }
   }
   ```

   - Manifest ມີໂຄ່ງສ້າງ `Record<name, chunk>`
   - ສຳລັບລາຍການ ຫຼື ລາຍການແບບ dynamic, key ຄື relative src path ຈາກ project root.
   - ສຳລັບລາຍການທີ່ບໍ່ໄດ້ລະບຸ, key ແມ່ນຊື່ຖານຂອງຟາຍທີ່ສ້າງຂຶ້ນເຊິ່ງນຳດ້ວຍ `_`.   
   - Chunk ຈະມີຂໍ້ມູນກ່ຽວກັບການນຳເຂົ້າແບບ static ແລະ dynamic (ທັງສອງແມ່ນ key ທີ່ map ກັບ chunk ທີ່ສອດຄອງໃນ manifest), ແລະ ຍັງສອດຄອງກັບ CSS ແລະ ຟາຍ asset (ຖ້າມີ).
   
   ທ່ານສາມາດໃຊ້ຟາຍນີ້ເພື່ອ render links ຫຼື preload directives ດ້ວຍ hashed filenames (ໝາຍເຫດ: syntax ໃນທີ່ນີ້ແມ່ນເພື່ອການອະທິບາຍເທົ່ານັ້ນ, ປ່ຽນແທນດ້ວຍ server templating language ຂອງທ່ານ):

   ```html
   <!-- if production -->
   <link rel="stylesheet" href="/assets/{{ manifest['main.js'].css }}" />
   <script type="module" src="/assets/{{ manifest['main.js'].file }}"></script>
   ```
