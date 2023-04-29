# ເລີ່ມຕົ້ນໃຊ້ງານ

<audio id="vite-audio">
  <source src="/vite.mp3" type="audio/mpeg">
</audio>

## ພາບລວມ

Vite (ໃນພາສາຝຣັ່ງຄຳວ່າ "ດ່ວນ", ອ່ານວ່າ `/vit/`<button style="border:none;padding:3px;border-radius:4px;vertical-align:bottom" id="play-vite-audio" onclick="document.getElementById('vite-audio').play();"><svg style="height:2em;width:2em"><use href="/voice.svg#voice" /></svg></button>, ຄືກັນກັບ "veet") ແມ່ນ build tool ທີ່ມີຈຸດປະສົງເພື່ອສະໜອງປະສົບການ ການພັດທະນາທີ່ວ່ອງໄວ ແລະ ຄ່ອງໂຕສຳລັບ modern web project. ມັນປະກອບດ້ວຍ 2 ສ່ວນໃຫຍ່ໆຄື:

- dev server ທີ່ສະໜອງ [ການປັບປຸງຄຸນລັກສະນະທີ່ຫຼາກຫຼາຍ](./features) ເໜືອ [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), ຕົວຢ່າງເຊັ່ນ: ໄວຫຼາຍ [Hot Module Replacement (HMR)](./features#hot-module-replacement).

- build command ທີ່ bundle code ຂອງທ່ານດ້ວຍ [Rollup](https://rollupjs.org), ການ pre-configured ເພື່ອໃຫ້ຜົນລັບທີ່ໄດ້ static assets ທີ່ຜ່ານການ optimize ເປັນຢ່າງສູງ ແລະ ພ້ອມສຳລັບ production.

Vite ແມ່ນມີຄວາມຄິດເຫັນ ແລະ ມາພ້ອມກັບການຕັ້ງຄ່າເລີ່ມຕົ້ນທີ່ສົມເຫດສົມຜົນ ແຕ່ຍັງສາມາດຂະຫຍາຍໄດ້ສູງຜ່ານ [Plugin API](./api-plugin) ແລະ [JavaScript API](./api-javascript) ຂອງມັນເອງ ດ້ວຍການຮອງຮັບ typing ຢ່າງເຕັມຮູບແບບ.

ທ່ານສາມາດຮຽນຮູ້ເພີ່ມເຕີມກ່ຽວກັບຈຸດປະສົງທີ່ຢູ່ເບື້ອງຫຼັງຂອງໂຄງການໄດ້ໃນຫົວຂໍ້ [ເປັນຫຍັງຕ້ອງເປັນ Vite](./why).

## ການສະໜັບສະໜູນ Browser

ເປົ້າໝາຍ build ຂອງ Browser ເລີ່ມຕົ້ນທີ່ຮອງຮັບ [native ES Modules](https://caniuse.com/es6-module), [native ESM dynamic import](https://caniuse.com/es6-module-dynamic-import), ແລະ [`import.meta`](https://caniuse.com/mdn-javascript_operators_import_meta). Browser ລຸ້ນເກົ່າສາມາດຮອງຮັບໄດ້ຜ່ານ [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) - ເບິ່ງຫົວຂໍ້ [Building for Production](./build) ສຳລັບລາຍລະອຽດເພີ່ມເຕີມ.

## ລອງໃຊ້ Vite Online

ທ່ານສາມາດລອງໃຊ້ Vite online ໄດ້ທີ່ [StackBlitz](https://vite.new/). ມັນຈະແລ່ນການຕັ້ງຄ່າ Vite-based build ໂດຍກົງໃນ browser, ສະນັ້ນມັນເກືອບຈະຄືກັນກັບການຕັ້ງຄ່າແບບ local ແຕ່ມັນບໍ່ໄດ້ຕ້ອງການໃຫ້ຕິດຕັ້ງຫຍັງໃນເຄື່ອງຂອງທ່ານ. ທ່ານສາມາດໄປທີ່ `vite.new/{template}` ແລ້ວເລືອກ framework ທີ່ຕ້ອງການໃຊ້.

ແມ່ແບບ preset ທີ່ຮອງຮັບມີຄື:

|             ສຳລັບ JavaScript              |                ສຳລັບ TypeScript                 |
| :---------------------------------: | :---------------------------------------: |
| [vanilla](https://vite.new/vanilla) | [vanilla-ts](https://vite.new/vanilla-ts) |
|     [vue](https://vite.new/vue)     |     [vue-ts](https://vite.new/vue-ts)     |
|   [react](https://vite.new/react)   |   [react-ts](https://vite.new/react-ts)   |
|  [preact](https://vite.new/preact)  |  [preact-ts](https://vite.new/preact-ts)  |
|     [lit](https://vite.new/lit)     |     [lit-ts](https://vite.new/lit-ts)     |
|  [svelte](https://vite.new/svelte)  |  [svelte-ts](https://vite.new/svelte-ts)  |

## ສ້າງໂປເຈັກ Vite ທຳອິດຂອງທ່ານ

::: tip ໝາຍເຫດ ກ່ຽວກັບຄວາມເຂົ້າກັນໄດ້
Vite ຕ້ອງການ [Node.js](https://nodejs.org/en/) version 14.18+, 16+. ເຖິງຢ່າງໃດກໍ່ຕາມ, ບາງ template ຕ້ອງການ Node.js version ທີ່ສູງກວ່າຈິງຈະສາມາດເຮັດວຽກໄດ້, ກະລຸນາອັບເກດ package manager ຂອງທ່ານຫາກມັນມີການແຈ້ງເຕືອນກ່ຽວກັບບັນຫາດັ່ງກ່າວ.
:::

ດ້ວຍ NPM:

```bash
$ npm create vite@latest
```

ດ້ວຍ Yarn:

```bash
$ yarn create vite
```

ດ້ວຍ PNPM:

```bash
$ pnpm create vite
```

ຈາກນັ້ນປະຕິບັດຕາມຄຳແນະນຳ!

ທ່ານຍັງສາມາດລະບຸຊື່ project ແລະ template ທີ່ທ່ານຕ້ອງການນຳໃຊ້ຜ່ານຕົວເລືອກ command line. ຕົວຢ່າງ, ຈະສ້າງ Vite + Vue project, ແລ່ນ:

```bash
# npm 6.x
npm create vite@latest my-vue-app --template vue

# npm 7+, ເຄື່ອງໝາຍ -- ທີ່ເກີນ ແມ່ນຕ້ອງໄດ້ໃສ່:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue
```

ເບິ່ງ [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) ສຳລັບລາຍລະອຽດເພີ່ມເຕີມໃນແຕ່ລະ template ທີ່ support ເຊັ່ນ: `vanilla`, `vanilla-ts`, `vue`, `vue-ts`, `react`, `react-ts`, `react-swc`, `react-swc-ts`, `preact`, `preact-ts`, `lit`, `lit-ts`, `svelte`, `svelte-ts`.

## Template ຈາກຊຸມຊົນ

create-vite ເປັນເຄື່ອງມືທີ່ໃຊ້ສ້າງ project ທີ່ໄວ ຈາກ template ເລີ່ມຕົ້ນ ສຳລັບ framework ທີ່ໄດ້ຮັບຄວາມນິຍົມ. ເບິ່ງ Awesome Vite ສຳລັບ [templates ທີ່ເບິ່ງແຍງໂດຍຊຸມຊົນ](https://github.com/vitejs/awesome-vite#templates) ທີ່ຮວບຮ່ວມເຄື່ອງມືອື່ນໆ ຫຼື target framework ທີ່ແຕກຕ່າງກັນ. ທ່ານສາມາດໃຊ້ເຄື່ອງມືຢ່າງ [degit](https://github.com/Rich-Harris/degit) ເພື່ອສ້າງ project ຂອງທ່ານດ້ວຍໜຶ່ງໃນ template.

```bash
npx degit user/project my-project
cd my-project

npm install
npm run dev
```

ຖ້າ project ໃຊ້ `main` ເປັນ default branch, ໃຫ້ຕໍ່ທ້າຍ project repo ດ້ວຍ `#main`

```bash
npx degit user/project#main my-project
```

## `index.html` ແລະ Project Root

ໜຶ່ງສິ່ງທີ່ທ່ານອາດຈະສັງເກດເຫັນໃນ project Vite ແມ່ນ, `index.html` ຈະຢູ່ໃນດ້ານໜ້າ ແລະ ທາງກາງ ແທນທີ່ຈະຢູ່ໃນໂຟເດີ `public`. ນີ້ແມ່ນຄວາມຕັ້ງໃຈ: ໃນລະຫວ່າງການພັດທະນາ Vite ແມ່ນ server, ແລະ `index.html` ເປັນບ່ອນທຳອິດໄປຍັງແອັບພິເຄຊັ່ນຂອງທ່ານ.

Vite treats `index.html` as source code and part of the module graph. It resolves `<script type="module" src="...">` that references your JavaScript source code. Even inline `<script type="module">` and CSS referenced via `<link href>` also enjoy Vite-specific features. In addition, URLs inside `index.html` are automatically rebased so there's no need for special `%PUBLIC_URL%` placeholders.

ຄ້າຍຄືກັນກັບ static http server, Vite ມີແນວຄວາມຄິດຂອງ "root directory" ທີ່ແລ່ນຟາຍຂອງທ່ານ. ທ່ານຈະເຫັນວ່າມັນອ້າງອີງເປັນ `<root>` ໂດຍທັງໝົດຂອງເອກະສານ. Absolute URL ໃນ source code ຂອງທ່ານຈະຖືກເຫັນໄດ້ຈາກ project root ທີ່ເປັນຈຸດເລີ່ມຕົ້ນ, ສະນັ້ນທ່ານຈິງສາມາດຂຽນ code ໄດ້ຄືກັນກັບວ່າທ່ານກຳລັງເຮັດວຽກກັບ static file server ທົ່ວໄປ (ຍົກເວັ້ນວິທີການທີ່ມີປະສິດທິພາບຫຼາຍກວ່າ!). Vite ຍັງສາມາດຈັດການກັບ dependency ທີ່ບໍ່ໄດ້ຢູ່ໃນ root file system, ເຊິ່ງເຮັດໃຫ້ສາມາດເຮັດວຽກໄດ້ແມ້ແຕ່ການຕັ້ງຄ່າແບບ monorepo-based.

Vite ຍັງຮອງຮັບ [multi-page apps](./build#multi-page-app) ທີ່ມີຈຸດເຂົ້າໃຊ້ `.html` ຫຼາຍຈຸດ.

#### ການລະບຸ Alternative Root

ການເອີ້ນໃຊ້ `vite` ຈະແລ່ນ dev server ໂດຍໃຊ້ directory ທີ່ກຳລັງເຮັດວຽກປັດຈຸບັນໃຫ້ເປັນ root. ທ່ານສາມາດລະບຸ root ອື່ນດ້ວຍ `vite serve some/sub/dir`.

## Command Line Interface

ໃນ project ທີ່ຕິດຕັ້ງ Vite, ທ່ານສາມາດໃຊ້ `vite` binary ໃນ script npm ຂອງທ່ານ, ຫຼື ແລ່ນມັນໂດຍກົງດ້ວຍ `npx vite`. ນີ້ແມ່ນ script npm ເລີ່ມຕົ້ນໃນການສ້າງ project Vite:

<!-- prettier-ignore -->
```json
{
  "scripts": {
    "dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`
    "build": "vite build", // build for production
    "preview": "vite preview" // locally preview production build
  }
}
```

ທ່ານສາມາດລະບຸຕົວເລືອກ CLI ເພີ່ມເຕີມເຊັ່ນ `--port` ຫຼື `--https`. ສຳລັບລາຍການຕົວເລືອກທັງໝົດຂອງ CLI, ແລ່ນ `npx vite --help` ໃນ project ຂອງທ່ານ.

ຮຽນຮູ້ເພີ່ມເຕີມກ່ຽວກັບ [Command Line Interface](./cli.md)

## ການໃຊ້ Commit ທີ່ຍັງບໍ່ທັນ release

ຖ້າທ່ານບໍ່ສາມາດລໍຖ້າ release ໃໝ່ ເພື່ອ test ຄຸນສົມບັດຫຼ້າສຸດ, ທ່ານຕ້ອງໄດ້ clone [vite repo](https://github.com/vitejs/vite) ລົງໃນເຄື່ອງຂອງທ່ານ ຈາກນັ້ນ build ແລະ link ມັນດ້ວຍໂຕທ່ານເອງ ([pnpm](https://pnpm.io/) ແມ່ນຕ້ອງການ):

```bash
git clone https://github.com/vitejs/vite.git
cd vite
pnpm install
cd packages/vite
pnpm run build
pnpm link --global # use your preferred package manager for this step
```

ຈາກນັ້ນໄປທີ່ project Vite ຂອງທ່ານ ແລະ ແລ່ນ `pnpm link --global vite` (ຫຼຶ package manager ທີ່ທ່ານໃຊ້ເພື່ອ link `vite` ໝົດເຄື່ອງ). ຕອນນີ້ທຳການ restart development server ເພື່ອພັດທະນາເອງຢ່າງອິດສະຫຼະ!

## ຊຸມຊົນ

ຖ້າທ່ານມີຄຳຖາມ ຫຼື ຕ້ອງການຄວາມຊ່ວຍເຫຼືອ, ກະລຸນາຕິດຕໍ່ຫາຊຸມຊົນ [Discord](https://chat.vitejs.dev) ແລະ [GitHub Discussions](https://github.com/vitejs/vite/discussions).