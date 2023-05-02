
<!-- You can remove the following notice from your fork -->
## Repo ນີ້ແມ່ນ template ສຳລັບ [ການແປເອກະສານ Vite.js repository](https://github.com/vitejs?q=docs). ເບິ່ງ [ຄູ່ມື](/.github/CONTRIBUTING.md).

---

<p align="center">
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://vitejs.dev/logo.svg" alt="Vite logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vite.svg" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatibility"></a>
  <a href="https://github.com/vitejs/vite/actions/workflows/ci.yml"><img src="https://github.com/vitejs/vite/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
  <a href="https://chat.vitejs.dev"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
</p>
<br/>

# Vite ⚡

> ເຄື່ອງມື Frontend ລຸ້ນຕໍ່ໄປ

- 💡 ເລີ່ມເຊີເວີທັນທີ
- ⚡️ HMR ໄວຟ້າຜ່າ
- 🛠️ ຄຸນສົມບັດຄົບຄັນ
- 📦 Optimized Build
- 🔩 Universal Plugin Interface
- 🔑 Typed APIs ທີ່ຄົບຖ້ວນ

Vite (ໃນພາສາຝຣັ່ງຄຳວ່າ "ດ່ວນ", ອ່ານວ່າ `/vit/`, ຄືກັນກັບ "veet") ແມ່ນ build tool ທີ່ມີຈຸດປະສົງເພື່ອສະໜອງປະສົບການ ການພັດທະນາທີ່ວ່ອງໄວ ແລະ ຄ່ອງໂຕສຳລັບ modern web project. ມັນປະກອບດ້ວຍ 2 ສ່ວນໃຫຍ່ໆຄື:

- dev server ທີ່ສະໜອງ [ການປັບປຸງຄຸນລັກສະນະທີ່ຫຼາກຫຼາຍ](./features) ເໜືອ [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), ຕົວຢ່າງເຊັ່ນ: ໄວຫຼາຍ [Hot Module Replacement (HMR)](./features#hot-module-replacement).

- build command ທີ່ bundle code ຂອງທ່ານດ້ວຍ [Rollup](https://rollupjs.org), ການ pre-configured ເພື່ອໃຫ້ຜົນລັບທີ່ໄດ້ static assets ທີ່ຜ່ານການ optimize ເປັນຢ່າງສູງ ແລະ ພ້ອມສຳລັບ production.

Vite ແມ່ນມີຄວາມຄິດເຫັນ ແລະ ມາພ້ອມກັບການຕັ້ງຄ່າເລີ່ມຕົ້ນທີ່ສົມເຫດສົມຜົນ ແຕ່ຍັງສາມາດຂະຫຍາຍໄດ້ສູງຜ່ານ [Plugin API](./api-plugin) ແລະ [JavaScript API](./api-javascript) ຂອງມັນເອງ ດ້ວຍການຮອງຮັບ typing ຢ່າງເຕັມຮູບແບບ

[ອ່ານເອກະສານເພື່ອຮຽນຮູ້ເພີ່ມເຕີມ](https://vitejs.dev).

## Packages

| Package                                           | Version (ຄິກເພື່ອເບິ່ງບັນທຶກການປ່ຽນແປງ)                                                                                                       |
| ------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [vite](packages/vite)                             | [![vite version](https://img.shields.io/npm/v/vite.svg?label=%20)](packages/vite/CHANGELOG.md)                                       |
| [@vitejs/plugin-vue](packages/plugin-vue)         | [![plugin-vue version](https://img.shields.io/npm/v/@vitejs/plugin-vue.svg?label=%20)](packages/plugin-vue/CHANGELOG.md)             |
| [@vitejs/plugin-vue-jsx](packages/plugin-vue-jsx) | [![plugin-vue-jsx version](https://img.shields.io/npm/v/@vitejs/plugin-vue-jsx.svg?label=%20)](packages/plugin-vue-jsx/CHANGELOG.md) |
| [@vitejs/plugin-react](packages/plugin-react)     | [![plugin-react version](https://img.shields.io/npm/v/@vitejs/plugin-react.svg?label=%20)](packages/plugin-react/CHANGELOG.md)       |
| [@vitejs/plugin-legacy](packages/plugin-legacy)   | [![plugin-legacy version](https://img.shields.io/npm/v/@vitejs/plugin-legacy.svg?label=%20)](packages/plugin-legacy/CHANGELOG.md)    |
| [create-vite](packages/create-vite)               | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)                  |

## ປະກອບສ່ວນ

ເບິ່ງ [ຄູ່ມືການປະກອບສ່ວນ](https://github.com/vitejs/vite/blob/main/CONTRIBUTING.md).

## ໃບອະນຸຍາດ

MIT

## ຜູ້ສະໜັບສະໜູນ

<p align="center">
  <a target="_blank" href="https://github.com/sponsors/yyx990803">
    <img alt="sponsors" src="https://sponsors.vuejs.org/vite.svg">
  </a>
</p>
