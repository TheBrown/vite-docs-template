# ການໃຊ້ Plugins

Vite ສາມາດຂະຫຍາຍໄດ້ໂດຍການໃຊ້ plugin, ຊື່ງໃຊ້ interface ທີ່ຖືກອອກແບບມາເປັນຢ່າງດີຂອງ Rollup ພ້ອມໂຕເລືອກພິເສດສະເພາະຂອງ Vite ສອງສາມໂຕ. ໝາຍຄວາມວ່າຜູ້ໃຊ້ Vite ສາມາດອາໄສລະບົບນິເວດຂອງ Rollup plugins, ໃນຂະນະດຽວກັນກໍສາມາດຂະຫຍາຍ dev server ແລະ SSR functionality ໄດ້ຕາມຕ້ອງການ.

## ການເພີ່ມ Plugin

ຈະໃຊ້ plugin, ມັນຕ້ອງໄດ້ເພີ່ມເຂົ້າໃນ `devDependencies` ຂອງ project ແລະ ຮ່ວມໄວ້ໃນ array ຂອງ `plugins` ໃນຟາຍ config. ຕົວຢ່າງ, ເພື່ອໃຫ້ການສະໜັບສະໜູບ browser ລຸ້ນເກົ່າ. ສາມາດໃຊ້ ່[@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) ທີ່ເປັນທາງການໄດ້.

```
$ npm add -D @vitejs/plugin-legacy
```

```js
// vite.config.js
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
})
```
`plugins` ຍັງຍອມຮັບຄ່າທີ່ຕັ້ງໄວ້ລ່ວງໜ້າລວມເຖິງ plugin ຫຼາຍໂຕທີ່ລວມເປັນໂຕດຽວ. ນີ້ເປັນປະໂຫຍດສຳລັບ feature ທີ່ຊັບຊ້ອນ (ເຊັ່ນ framework integration) ທີ່ໃຊ້ງານໂດຍ plugin ຫຼາຍອັນ. Array ຈະຖືກປັບໃຫ້ນ້ອຍລົງພາຍໃນ.

plugin ປອມຈະຖືກ ignore, ຊື່ງສາມາດໃຊ້ເພື່ອການເປີດໃຊ້ງານ ຫຼື  ການປິດໃຊ້ງານ plugin ໄດ້ຢ່າງງ່າຍດາຍ.

## ຄົ້ນຫາ Plugin

:::tip ໝາຍເຫດ
Vite ມີເປົ້າໝາຍເພື່ອສະໜັບສະໜູນນອກກອບສຳລັບຮູບແບບການພັດທະນາເວັບທົ່ວໄປ. ກ່ອນຄົ້ນຫາ Vite ຫຼື Rollup plugin ທີ່ເຂົ້າກັນໄດ້, ເບິ່ງທີ່ [ຄູ່ມື Feature](../guide/features.md). ຫຼາຍໆກໍລະນີຕ້ອງໄດ້ໃຊ້ plugin ໃນ Rollup project ທີ່ໄດ້ຄອບຄຸມໄວ້ແລ້ວໃນ Vite.
:::

ເບິ່ງທີ່ [ຫົວຂໍ້ Plugins](../plugins/) ສຳລັບຂໍ້ມູນ plugin ທີ່ເປັນທາງການ. Community plugins ແມ່ນຢູ່ໃນ [awesome-vite](https://github.com/vitejs/awesome-vite#plugins). ສຳລັບ Rollup plugins ທີ່ສາມາດເຂົ້າກັນໄດ້, ເບິ່ງທີ່ [Vite Rollup Plugins](https://vite-rollup-plugins.patak.dev) ເພື່ອເບິ່ງລາຍການ plugin ຢ່າງເປັນທາງການທີ່ສາມາດເຂົ້າກັນໄດ້ພ້ອມຄຳແນະນຳການໃຊ້ງານ ຫຼື [ຫົວຂໍ້ Rollup Plugin Compatibility](../guide/api-plugin#rollup-plugin-compatibility) ໃນກໍລະນີທີ່ບໍ່ໄດ້ຢູ່ໃນລາຍການ.

ທ່ານສາມາດຄົ້ນຫາ plugin ທີ່ເປັນໄປຕາມ [ຂໍ້ກຳນົດທີ່ແນະນຳ](./api-plugin.md#conventions) ໂດຍໃຊ້ [npm ຄົ້ນຫາສຳລັບ vite-plugin](https://www.npmjs.com/search?q=vite-plugin&ranking=popularity) ສຳລັບ Vite plugin ຫຼື [npm ຄົ້ນຫາສຳລັບ rollup-plugin](https://www.npmjs.com/search?q=rollup-plugin&ranking=popularity) ສຳລັບ Rollup plugin.

## ບັງຄັບການໃຊ້ Plugin

ສຳລັບຄວາມເຂົ້າກັນໄດ້ຂອງ Rollup plugin, ອາດຈຳເປັນຕ້ອງບັງຄັບໃຊ້ຄຳສັ່ງຂອງ plugin ຫຼື ໃຊ້ສະເພາະຕອນສ້າງເທົ່ານັ້ນ. ນີ້ຄວນເປັນລາຍລະອຽດການໃຊ້ງານສຳລັບ Vite plugin. ທ່ານສາມາດບັງຄັບໃຊ້ຕຳແໜ່ງຂອງ plugin ດ້ວຍ `enforce` modifier:

- `pre`: ເອີ້ນໃຊ້ plugin ກ່ອນ Vite core plugins
- default: ເອີ້ນໃຊ້ plugin ຫຼັງ Vite core plugins
- `post`: ເອີ້ນໃຊ້ plugin ຫຼັງ Vite build plugins

```js
// vite.config.js
import image from '@rollup/plugin-image'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      ...image(),
      enforce: 'pre',
    },
  ],
})
```

ເບິ່ງທີ [ຄູ່ມື Plugins API](./api-plugin.md#plugin-ordering) ສຳລັບຂໍ້ມູນລາຍລະອຽດ, ແລະ ເບິ່ງຫາຄຳວ່າ `enforce` ແລະ ຄຳແນະນຳການໃຊ້ງານສຳລັບ plugin ຍອດນິຍົມທີ່ສາມາດໃຊ້ນຳກັນໄດ້ຂອງ [Vite Rollup Plugins](https://vite-rollup-plugins.patak.dev)

## ແອັບພິເຄຊັ່ນທີ່ມີເງື່ອນໄຂ

ໂດຍຄ່າເລີ່ມຕົ້ນ, plugin ສາມາດຖືກເອີ້ນໃຊ້ໄດ້ໃນຕອນ serve ແລະ build. ໃນກໍລະນີທີ່ຈຳເປັນຕ້ອງໄດ້ໃຊ້ plugin ຢ່າງມີເງື່ອນໄຂສະເພາະລະຫວ່າງຕອນ serve ຫຼຶ build, ນຳໃຊ້ `apply` property ສຳລັບເອີ້ນໃຊ້ສະເພາະ `'build'` ຫຼື `'serve'`:

```js
// vite.config.js
import typescript2 from 'rollup-plugin-typescript2'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      ...typescript2(),
      apply: 'build',
    },
  ],
})
```

## ສ້າງ Plugin

ເບິ່ງທີ່ [ຄູ່ມື Plugins API](./api-plugin.md) ສຳລັບເອກະສານກ່ຽວກັບການສ້າງ plugin.