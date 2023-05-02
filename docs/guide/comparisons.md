# ການປຽບທຽບ

## WMR

[WMR](https://github.com/preactjs/wmr) ໂດຍ Preact team ມີຊຸດ feature ທີ່ຄ້າຍກັນ ແລະ ການສະໜັບສະໜູນ interface plugin ຂອງ Rollup ຂອງ Vite 2.0 ໄດ້ຮັບແຮງບັນດານໃຈມາຈາກຊຸດດັ່ງກ່າວ.

WMR ໄດ້ຮັບການອອກແບບມາສຳລັບ project [Preact](https://preactjs.com/) ເປັນຫຼັກ ແລະ ນຳສະເໜີລັກສະນະປະສົມປະສານຫຼາຍຂຶ້ນເຊັ່ນ: pre-rendering. ໃນແງ່ຂອງຂອບເຂດ, ມັນໃກ້ຄຽງກັບ Preact meta framework, ໂດຍເນັ້ນໄປທີ່ຂະໜາດທີ່ກະທັດຮັດເຊັ່ນດຽວກັບ Preact. ຫາກທ່ານໃຊ້ Preact, WMR ມີແນວໂນວທີ່ຈະມອບປະສົບການທີ່ປັບແຕ່ງໄດ້ລະອຽດຂຶ້ນ. 

## @web/dev-server

[@web/dev-server](https://modern-web.dev/docs/dev-server/overview/) (ກ່ອນໜ້ານີ້ແມ່ນ `es-dev-server`) ເປັນ project ທີ່ດີຫຼາຍ ແລະ ການຕັ້ງຄ່າ server ທີ່ໃຊ້ Koa ຂອງ Vite 1.0 ໄດ້ຮັບແຮງບັນດານໃຈມາຈາກ project ນີ້.

`@web/dev-server` ຢູ່ໃນລະດັບຕໍ່າກວ່າໜ້ອຍໜຶ່ງໃນມຸມມອງຂອງຂອບເຂດ. ບໍ່ມີການລວມ framework ຢ່າງເປັນທາງການ ແລະ ຈຳເປັນຕ້ອງໄດ້ຕັ້ງຄ່າ Rollup configuration ດ້ວຍຕົນເອງສຳລັບ production build.

ໂດຍລວມແລ້ວ, Vite ເປັນເຄື່ອງມືທີ່ມີຄວາມຄິດເຫັນ/ລະດັບທີ່ສູງກວ່າ ເຊີ່ງມີຈຸດປະສົງເພື່ອໃຫ້ເຮັດວຽກນອກກອບຫຼາຍຂຶ້ນ. ດັ່ງທີ່ເວົ້າວ່າ, project `@web` umbrella ມີເຄື່ອງມືທີ່ດີຫຼາຍອື່ນໆທີ່ອາດເປັນປະໂຫຍດຕໍ່ຜູ້ໃຊ້ Vite ເຊັ່ນດຽວກັນ.

## Snowpack

[Snowpack](https://www.snowpack.dev/) ຍັງເປັນ native ESM dev server ບໍ່ມີ bundle ຊື່ງຄ້າຍກັບ Vite ຫຼາຍ. Project ນີ້ບໍ່ໄດ້ຮັບການເບິ່ງແຍງອີກຕໍ່ໄປ. Snowpack team ກຳລັງພັດທະນາ [Astro](https://astro.build/), ເຄື່ອງມືສ້າງ static site ທີ່ຂັບເຄື່ອນໂດຍ Vite. Astro team ເປັນຜູ້ກະຕືລືລົ້ນໃນ ecosystem, ແລະ ພວກເຂົາໄດ້ຊ່ວຍໃນການປັບປຸງ Vite.

ນອກເໜືອຈາກລາຍລະອຽດການໃຊ້ງານທີ່ແຕກຕ່າງກັນແລ້ວ, ທັງສອງ project ມີຂໍ້ໄດ້ປຽບທາງເຕັກນິກຮ່ວມກັນເປັນຢ່າງຫຼາຍເມື່ອທຽບກັບເຄື່ອງມືແບບດັ້ງເດີມ. Vite's dependency pre-bundling ນັ້ນມີແຮງບັນດານໃຈມາຈາກ Snowpack v1 (ດຽວນີ້ [`esinstall`](https://github.com/snowpackjs/snowpack/tree/main/esinstall)). ຄວາມແຕກຕ່າງຫຼັກບາງປະການຂອງສອງ project ສະແດງໃນ [ຄູ່ມືການປຽບທຽບ v2](https://v2.vitejs.dev/guide/comparisons).
