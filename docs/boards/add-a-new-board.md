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
    * update ``board.svg`` with a simplified image of your board. Use [SVGO](https://jakearchibald.github.io/svgomg/) to keep it small. (see board.svg section)
    * update the pin mapping in ``config.ts`` and ``device.d.ts``.

* update the bundled-dirs array in ``pxtarget.json`` and your new folder
* add a code card in ``/docs/boards.md`` and a new markdown file under ``/docs/board/YOUBOARDNAME.md`` with an example that loads your board
* run the local server to test your changes by launching ``pxt serve`` (make sure to run ``npm install``)

More info at [Multi-board](/multiboard).

## Step 3: board.svg and board.json

The board that gets rendered in the simulator must be stored as a SVG in the project.

* scale the SVG so that a pin header is exactly ``15px`` wide.
* try to reduce the complexity of the SVG to reduce the file size
* use a pin id (e.g. ``D11``) or ``connectedname`` (from Fritzing) as names for the pin SVG element
* use https://maker.makecode.com/board-designer to generate the ``board.json`` file. This is a good start but you'll probably need to update it by hand as well.
* create a printer friendly version of ``board.svg``, as ``boardwireframe.svg``.

## Step 4: Send us a Pull Request!!!