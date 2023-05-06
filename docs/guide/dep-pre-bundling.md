# Dependency Pre-Bundling

ເມື່ອທ່ານແລ່ນ `vite` ໃນຄັ້ງທຳອິດ, Vite prebundles project dependencies ຂອງທ່ານກ່ອນຈະໂຫຼດໜ້າເວັບຂອງທ່ານໃນເຄື່ອງ. ໂດຍອັດຕະໂນມັດ ແລະ ໂປ່ງໃສໃນຄ່າເລີ່ມຕົ້ນ.

## ເປັນຫຍັງ

ນີ້ແມ່ນ Vite ທີ່ສະແດງສິ່ງທີ່ເຮົາເອີ້ນວ່າ "dependency pre-bundling". ຂະບວນການນີ້ມີ 2 ຈຸດປະສົງ:

1. **ຄວາມເຂົ້າກັນໄດ້ຂອງ CommonJS ແລະ UMD:** ໃນລະຫວ່າງການພັດທະນາ, ນັກພັດທະນາ Vite ແລ່ນ code ທັງໝົດເປັນ native ESM. ດັ່ງນັ້ນ, Vite ຕ້ອງແປງ dependencies ທີ່ຖືກ shipped ເປັນ CommonJS ຫຼື UMD ເປັນ ESM ກ່ອນ.

   ເມືອແປງ CommonJS dependencies, Vite ດຳເນີນການວິເຄາະການ import ຢ່າງສະຫຼາດເພື່ອໃຫ້ named imports ໄປຍັງ CommonJS modules ຈະເຮັດວຽກໄດ້ຕາມທີ່ຄິດໄວ້ເຖິງວ່າການ exports ຈະຖືກກຳນົດແບບ dynamic (ເຊັ່ນ React):

   ```js
   // ເຮັດວຽກໄດ້ຕາມທີ່ຄາດຄິດ
   import React, { useState } from 'react'
   ```

2. **ປະສິດທິພາບ:** Vite ແປງ ESM dependencies ດ້ວຍ modules ພາຍໃນຈຳນວນຫຼາຍໃຫ້ເປັນ module ດຽວເພື່ອປັບປຸງປະສິດທິພາບການໂຫຼດໜ້າເວັບ.

   ບາງ packages ໄດ້ ship ES modules ຂອງພວກເຂົາໂດຍສ້າງຟາຍແຍກກັນເປັນຈຳນວນຫຼາຍທີ່ນຳເຂົ້າອີກຟາຍໜື່ງ. ຕົວຢ່າງ, [`lodash-es` ມີຫຼາຍກວ່າ 600 modules ພາຍໃນ](https://unpkg.com/browse/lodash-es/)! ເມື່ອເຮົາ `import { debounce } from 'lodash-es'`, ບາວເຊີເລີ່ມຂໍ 600+ HTTP requests ໃນເວລາດຽວກັນ! ເຖິງວ່າເຊີເວີຈະບໍ່ມີບັນຫາໃນການຈັດການມັນ, ແຕ່ request ຈຳນວນຫຼາຍສ້າງຄວາມແອອັດຂອງ network ພາຍໃນບາວເຊີ, ເຮັດໃຫ້ໂຫຼດໜ້າເວັບຊ້າລົງຢ່າງເຫັນໄດ້ຊັດເຈນ.

   ໂດຍການ pre-bundling `lodash-es` ມາເປັນ single module, ພວກເຮົາຕ້ອງການພຽງ 1 HTTPS request ແທນ!

::: tip ໝາຍເຫດ
Dependency pre-bundling ແມ່ນໃຊ້ໄດ້ສະເພາະໃນ development mode ເທົ່ານັ້ນ, ແລະ ໃຊ້ `esbuild` ເພື່ອແປງ dependencies ເປັນ ESM. ໃນ production builds, ໃຊ້ `@rollup/plugin-commonjs` ແທນ .
:::

## ການຫາ Dependency ໂດຍອັດຕະໂນມັດ

ຖ້າບໍ່ພົບ cache ທີ່ມີຢູ່, Vite ຈະລວມ source code ແລະ ກວດ dependency ທີ່ import ໂດຍອັດຕະໂນມັດ (ເຊັ່ນ: "bare imports" ທີ່ຄາດວ່າຈະໄດ້ຮັບການແກ້ໄຂຈາກ `node_modules`) ແລະ ໃຊ້ການ import ທີ່ພົບເຫັນເຫຼົ່ານີ້ເປັນຈຸດເລີ່ມຕົ້ນສຳລັບ pre-bundle. ການ pre-bundle ແມ່ນດຳເນີນການດ້ວຍ `esbuild` ດັ່ງນັ້ນໂດຍທົ່ວໄປແລ້ວມັນຈະໄວຫຼາຍ.

ຫຼັງຈາກເຊີເວີເລີ່ມເຮັດວຽກແລ້ວ, ຫາກພົບ import dependency ທີ່ບໍ່ໄດ້ຢູ່ໃນ cache, Vite ຈະ re-run deb bundling ອີກຄັ້ງ ແລະ ໂຫຼດໜ້າແມ່ນຫາກມັນຕ້ອງການ.

## Monorepos ແລະ Linked Dependencies

ໃນການຕັ້ງຄ່າ monorepo, Dependency ອາດ linked package ຈາກ repo ດຽວກັນ. Vite  ຈະພົບ dependencies ທີ່ບໍ່ຢູ່ໃນ `node_modules` ໂດຍອັດຕະໂນມັດ ແລະ ຖືວ່າ linked dep ເປັນ source code. ມັນຈະບໍ່ພະຍາຍາມ bundle linked dep, ແຕ່ຈະວິເຄາະ dependency ຂອງ linked dep ແທນ.

ເຖິງຢ່າງໃດກໍ່ຕາມ, ນີ້ຕ້ອງການ linked dep ເພື່ອ exported ເປັນ ESM. ຖ້າບໍ່, ທ່ານສາມາດເພີ່ມ dependency ໃນ [`optimizeDeps.include`](/config/dep-optimization-options.md#optimizedeps-include) ແລະ [`build.commonjsOptions.include`](/config/build-options.md#build-commonjsoptions) ໃນ config ຂອງທ່ານ. 

```js
export default defineConfig({
  optimizeDeps: {
    include: ['linked-dep'],
  },
  build: {
    commonjsOptions: {
      include: [/linked-dep/, /node_modules/],
    },
  },
})
```

ເມື່ອມີການປ່ຽນແປງຂອງ linked dep, restart dev server ຕໍ່ດ້ວຍ `--force` ເພື່ອໃຫ້ການປ່ຽນແປງມີຜົນ .

::: warning ໝາຍເຫດ
ເນື່ອງຈາກຄວາມແຕກຕ່າງໃນການແກ້ໄຂ linked dependency, transitive dependencies ສາມາດຊໍ້າກັນຢ່າງບໍ່ຖືກຕ້ອງ, ເຮັດໃຫ້ເກີດບັນຫາຕອນ runtime. ຖ້າທ່ານຕິດຂັດກັບບັນຫານີ້ ໃຫ້ໃຊ້ `npm pack` ທີ່ linked dependency ເພື່ອແກ້ໄຂບັນຫາ.
:::

## ປັບແຕ່ງພຶດຕິກຳ

heuristics ການຄົ້ນພົບ dependency ທີ່ເປັນຄ່າເລີ່ມຕົ້ນອາດບໍ່ເປັນທີ່ຕ້ອງການສະເໝີໄປ. ໃນກໍລະນີທີ່ທ່ານຕ້ອງການລວມ/ບໍ່ລວມ dependencies ຈາກລາຍການ, ໃຊ້ [`optimizeDeps` config options](/config/dep-optimization-options.md).

ກໍລະນີການໃຊ້ງານທົ່ວໄປສຳລັບ `optimizeDeps.include` ຫຼື `optimizeDeps.exclude` ຄືເມື່ອທ່ານໄດ້ import ທີ່ບໍ່ສາມາດຄົ້ນພົບໄດ້ໃນ source code. ຕົວຢ່າງ, ອາດມີການ import ຈາກຜົນລັບຂອງການແປງ plugin. ໝາຍຄວາມວ່າ Vite ຈະບໍ່ສາມາດຄົ້ນຫາ import ໄດ້ໃນການສະແກນຄັ້ງທຳອິດ - ແຕ່ຈະຄົ້ນພົບໄດ້ຫຼັງຈາກບາວເຊີ request ແລະ ແປງຟາຍເທົ່ານັ້ນ. ເຊິ່ງຈະເຮັດໃຫ້ເຊີເວີ re-bundle ທັນທີ່ຫຼັງຈາກ restart.

ສາມາດໃຊ້ທັງ `include` ແລະ `exclude` ເພື່ອຈັດການກັບສິ່ງນີ້. ຖ້າ dependency ໃຫຍ່ (ມີ module ພາຍໃນຫຼາຍໂຕ) ຫຼື ແມ່ນ CommonJS, ທ່ານຄວນລວມມັນໄວ້ນຳ; ຖ້າ dependency ນ້ອຍ ແລະ ເປັນ ESM ທີ່ຖືກຕ້ອງຢູ່ແລ້ວ, ທ່ານສາມາດເອົາມັນອອກ ແລະ ໃຫ້ບາວເຊີໂຫຼດໂດຍກົງເລີຍ.

ທ່ານສາມາດປັບແຕ່ esbuild ໄດ້ຄືກັນດ້ວຍ [`optimizeDeps.esbuildOptions` option](/config/dep-optimization-options.md#optimizedeps-esbuildoptions). ຕົວຢ່າງ, ເພີ່ມ esbuild plugin ເພື່ອ handle ຟາຍພິເສດໃນ dependencies.

## Caching

### File System Cache

Vite caches pre-bundled dependencies ໃນ `node_modules/.vite`. ມັນກຳນົດວ່າຈຳເປັນຕ້ອງເອີ້ນເພື່ອ re-run ຂັ້ນຕອນ pre-bundling ອີງຕາມບໍ່ເທົ່າໃດ sources:

- Package manager lockfile content, ຕົວຢ່າງ `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml` ຫຼື `bun.lockb`.
- ແກ້ໄຂເວລາແກ້ໄຂໂຟເດີ.
- Field ທີ່ກ່ຽວຂ້ອງໃນ `vite.config.js`,ຫາກມີ.
- ຄ່າ `NODE_ENV`.

ຂັ້ນຕອນ pre-bundling ຈະຕ້ອງ re-run ເມື່ອມີການປ່ຽນແປງຂໍ້ໃດໜຶ່ງຂ້າງຕົ້ນເທົ່ານັ້ນ.

ຫາກທ່ານຕ້ອງການບັງຄັບໃຫ້ Vite ເພື່ອ re-bundle deps, ທ່ານສາມາດເລີ່ມເຊີເວີ dev ດ້ວຍຕົວເລືອກ `--force` ຫຼື ລຶບ directory cache `node_modules/.vite` ດ້ວຍຕົນເອງ.

### Browser Cache

Dependency requests ທີ່ແກ້ໄຂແລ້ວຈະຖືກ cached ຢ່າງເຂັ້ມງວດດ້ວຍ HTTP headers `max-age=31536000,immutable` ເພື່ອປັບປຸງປະສິດທິພາບການໂຫຼດໜ້າໃໝ່ໃນລະຫວ່າງການພັດທະນາ. ເມື່ອ cache ແລ້ວ, Request ເຫຼົ່ານີ້ຈະບໍ່ສົ່ງເຖິງເຊີເວີອີກຄັ້ງ. ມັນຈະບໍ່ຖືກຕ້ອງໂດຍອັດຕະໂນມັດໂດຍການສືບຄົ້ນເວີຊັນຕໍ່ທ້າຍຫາກຕິດຕັ້ງເວີຊັນອື່ນ (ດັ່ງທີ່ສະແດງໃນ package manager lockfile ຂອງທ່ານ). ຖ້າທ່ານຕ້ອງການ debug dependencies ໂດຍການແປງຢູ່ local, ທ່ານສາມາດເຮັດໄດ້:

1. ປິດໃຊ້ງານ cache ຊົ່ວຄາວຜ່ານແຖບ Network ຂອງ devtools ໃນບາວເຊີທ່ານ;
2. Restart Vite dev server ພ້ອມ `--force` flag ເພື່ອ re-bundle deps;
3. ໂຫຼດ page ຄືນໃໝ່.
