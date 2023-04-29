# Command Line Interface

## Dev server

### `vite`

ແລ່ນ Vite dev server ໃນ directory ປັດຈຸບັນ.

#### ການນຳໃຊ້

```bash
vite [root]
```

#### ຕົວເລືອກ

| ຕົວເລືອກ                  |                                                                   |
| ------------------------ | ----------------------------------------------------------------- |
| `--host [host]`          | ລະບຸ hostname (`string`)                                       |
| `--port <port>`          | ລະບຸ port (`number`)                                           |
| `--https`                | ໃຊ້ TLS + HTTP/2 (`boolean`)                                      |
| `--open [path]`          | ເປີດ browser ຕອນເລີ່ມຕົ້ນ (`boolean \| string`)                     |
| `--cors`                 | ເປີດໃຊ້ CORS (`boolean`)                                           |
| `--strictPort`           | ອອກຖ້າ port ທີ່ລະບຸ ກຳລັງຖືກໃຊ້ງານ (`boolean`)              |
| `--force`                | ບັງຄັບໃຫ້ opimizer ບໍ່ສົນ cache ແລະ re-bundle (`boolean`) |
| `-c, --config <file>`    | ໃຊ້ຟາຍ config (`string`)                              |
| `--base <path>`          | Public base path (ຄ່າເລີ່ມຕົ້ນ: `/`) (`string`)                        |
| `-l, --logLevel <level>` | Info \| warn \| error \| silent (`string`)                        |
| `--clearScreen`          | ອະນຸຍາດ/ບໍ່ອະນຸຍາດ clear screen ຕອນ logging (`boolean`)               |
| `-d, --debug [feat]`     | ສະແດງ debug logs (`string \| boolean`)                             |
| `-f, --filter <filter>`  | Filter debug logs (`string`)                                      |
| `-m, --mode <mode>`      | ຕັ້ງ env mode (`string`)                                           |
| `-h, --help`             | ສະແດງຕົວເລືອກ CLI ທີ່ສາມາດໃຊ້ງານໄດ້                                     |
| `-v, --version`          | ສະແດງເລກເວີຊັ່ນ                                            |

## Build

### `vite build`

Build ສຳລັບ production.

#### ການນຳໃຊ້

```bash
vite build [root]
```

#### ຕົວເລືອກ

| ຕົວເລືອກ                        |                                                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `--target <target>`            | ເປົ້າໝາຍ Transpile(ຄ່າເລີ່ມຕົ້ນ: `"modules"`) (`string`)                                                                  |
| `--outDir <dir>`               | Output directory (ຄ່າເລີ່ມຕົ້ນ: `dist`) (`string`)                                                                       |
| `--assetsDir <dir>`            | Directory under outDir to place assets in (ຄ່າເລີ່ມຕົ້ນ: `"assets"`) (`string`)                                          |
| `--assetsInlineLimit <number>` | Static asset base64 inline ມີຄ່າເປັນ bytes (ຄ່າເລີ່ມຕົ້ນ: `4096`) (`number`)                                          |
| `--ssr [entry]`                | Build entry ເຈາະຈົງສຳລັບ server-side rendering (`string`)                                                          |
| `--sourcemap [output]`         | Output source maps ສຳລັບ build (ຄ່າເລີ່ມຕົ້ນ: `false`) (`boolean \| "inline" \| "hidden"`)                                 |
| `--minify [minifier]`          | ເປີດ/ປິດ minification, ຫຼື ລະບຸ minifier ທີ່ຈະໃຊ້ (ຄ່າເລີ່ມຕົ້ນ: `"esbuild"`) (`boolean \| "terser" \| "esbuild"`) |
| `--manifest [name]`            | Emit build manifest json (`boolean \| string`)                                                                      |
| `--ssrManifest [name]`         | Emit ssr manifest json (`boolean \| string`)                                                                        |
| `--force`                      | ບັງຄັບໃຫ້ opimizer ບໍ່ສົນ cache ແລະ re-bundle (experimental)(`boolean`)                                     |
| `--emptyOutDir`                | ບັງຄັບໃຫ້ outDir ວ່າງເປົ່າ ຕອນຢູ່ນອກ root (`boolean`)                                                            |
| `-w, --watch`                  | Rebuilds ຕອນ modules ມີການປ່ຽນແປງໃນ disk (`boolean`)                                                              |
| `-c, --config <file>`          | ໃຊ້ຟາຍ config (`string`)                                                                                |
| `--base <path>`                | Public base path (ຄ່າເລີ່ມຕົ້ນ: `/`) (`string`)                                                                          |
| `-l, --logLevel <level>`       | Info \| warn \| error \| silent (`string`)                                                                          |
| `--clearScreen`                | ອະນຸຍາດ/ບໍ່ອະນຸຍາດ clear screen ຕອນ logging (`boolean`)                                                                 |
| `-d, --debug [feat]`           | ສະແດງ debug logs (`string \| boolean`)                                                                               |
| `-f, --filter <filter>`        | Filter debug logs (`string`)                                                                                        |
| `-m, --mode <mode>`            | ຕັ້ງ env mode (`string`)                                                                                             |
| `-h, --help`                   | ສະແດງຕົວເລືອກ CLI ທີ່ສາມາດໃຊ້ງານໄດ້                                                                                       |

## ອື່ນໆ

### `vite optimize`

Pre-bundle dependencies.

#### ການນຳໃຊ້

```bash
vite optimize [root]
```

#### ຕົວເລືອກ

| ຕົວເລືອກ                  |                                                                   |
| ------------------------ | ----------------------------------------------------------------- |
| `--force`                | ບັງຄັບໃຫ້ opimizer ບໍ່ສົນ cache ແລະ re-bundle (`boolean`) |
| `-c, --config <file>`    | ໃຊ້ຟາຍ config (`string`)                              |
| `--base <path>`          | Public base path (ຄ່າເລີ່ມຕົ້ນ: `/`) (`string`)                        |
| `-l, --logLevel <level>` | Info \| warn \| error \| silent (`string`)                        |
| `--clearScreen`          | ອະນຸຍາດ/ບໍ່ອະນຸຍາດ clear screen ຕອນ logging (`boolean`)               |
| `-d, --debug [feat]`     | ສະແດງ debug logs (`string \| boolean`)                             |
| `-f, --filter <filter>`  | Filter debug logs (`string`)                                      |
| `-m, --mode <mode>`      | ຕັ້ງ env mode (`string`)                                           |
| `-h, --help`             | ສະແດງຕົວເລືອກ CLI ທີ່ສາມາດໃຊ້ງານໄດ້                                     |

### `vite preview`

ສະແດງຕົວຢ່າງ production build ໃນເຄື່ອງ.

#### ການນຳໃຊ້

```bash
vite preview [root]
```

#### ຕົວເລືອກ

| ຕົວເລືອກ                  |                                                      |
| ------------------------ | ---------------------------------------------------- |
| `--host [host]`          | ລະບຸ hostname (`string`)                          |
| `--port <port>`          | ລະບຸ port (`number`)                              |
| `--strictPort`           | ອອກຖ້າ port ທີ່ລະບຸ ກຳລັງຖືກໃຊ້ງານ  (`boolean`) |
| `--https`                | ໃຊ້ TLS + HTTP/2 (`boolean`)                         |
| `--open [path]`          | ເປີດ browser ຕອນເລີ່ມຕົ້ນ (`boolean \| string`)        |
| `--outDir <dir>`         | Output directory (ຄ່າເລີ່ມຕົ້ນ: `dist`)(`string`)         |
| `-c, --config <file>`    | ໃຊ້ຟາຍ config (`string`)                 |
| `--base <path>`          | Public base path (ຄ່າເລີ່ມຕົ້ນ: `/`) (`string`)           |
| `-l, --logLevel <level>` | Info \| warn \| error \| silent (`string`)           |
| `--clearScreen`          | ອະນຸຍາດ/ບໍ່ອະນຸຍາດ clear screen ຕອນ logging (`boolean`)  |
| `-d, --debug [feat]`     | ສະແດງ debug logs (`string \| boolean`)                |
| `-f, --filter <filter>`  | Filter debug logs (`string`)                         |
| `-m, --mode <mode>`      | ຕັ້ງ env mode (`string`)                              |
| `-h, --help`             | ສະແດງຕົວເລືອກ CLI ທີ່ສາມາດໃຊ້ງານໄດ້                        |
