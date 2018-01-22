# Add a new board

This is the process needed to add a new board to this editor. Don't hesitate to ping us if you need help getting started.

## Step 1: UF2 bootloader

UF2 is an [open source file format](https://github.com/microsoft/uf2) optimized to transfer files to microcontrollers via USB. All boards in this editor support UF2.

If your board does not support UF2 yet, 

* readd UF2 specification: https://github.com/microsoft/uf2
* if your board is SAMD21-based, start from https://github.com/microsoft/uf2-samd21

## Step 2: Add a new project

* Add a new project under lib named after your board. Start by copying adafruit-trinket-m0 and mofify all relevant parts:
    * update ``pxt.json`` with the proper metadata
    * update ``board.svg`` with a simplified image of your board. Use [SVGO](https://jakearchibald.github.io/svgomg/) to keep it small.
    * update the pin mapping in ``config.ts`` and ``device.d.ts``.

* update the bundled-dirs array in ``pxtarget.json`` and your new folder
* add a code card in ``/docs/boards.md`` and a new markdown file under ``/docs/board/YOUBOARDNAME.md`` with an example that loads your board
* run the local server to test your changes by launching ``pxt serve`` (make sure to run ``npm install``)

More info at [Multi-board](/multiboard).

## Step 3: Send us a Pull Request!!!