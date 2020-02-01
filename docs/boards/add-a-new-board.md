# Add a new board

This is the process needed to add a new board to this editor. Don't hesitate to ping us if you need help getting started.

## Step 1: UF2 bootloader

UF2 is an [open source file format](https://github.com/microsoft/uf2) optimized to transfer files to microcontrollers via USB. All boards in this editor support UF2.

If your board does not support UF2 yet, 

* read UF2 specification: https://github.com/microsoft/uf2
* if your board is SAMD21/SAMD51 based, start from https://github.com/microsoft/uf2-samdx1
* if your board is STM32 based, start from https://github.com/mmoskal/uf2-stm32f

## Step 2: Add a new project

* Add a new project under lib named after your board. Start by copying **adafruit-trinket-m0** and modify all relevant parts:

* update ``pxt.json`` with the title, name, description
* update the ``compilerServiceVariant`` in ``pxt.json`` to match your board chipset
* update ``boardhd.svg`` with a simplified image of your board. See step below.
* update the ``bundled-dirs`` array in ``pxtarget.json`` (root of respository) and add your new folder
* add a code card in ``/docs/boards.md`` and a new markdown file under ``/docs/board/YOUBOARDNAME.md`` with an example that loads your board
* run the local server to test your changes by launching 

    pxt serve --rebundle

### ~ hint

Got any questions? Ping us on the [MakeCode Discord](https://aka.ms/makecodecommunity). More info at [Multi-board](/multiboard).

### ~

## Step 3: boardhd.svg, config.ts and board.json

The board that gets rendered in the simulator must be stored as a SVG in the project.

* use https://maker.makecode.com/board-designer to generate the ``board.json``, ``config.ts`` file. This is a good start but you'll probably need to update it by hand as well.
* try to reduce the complexity of the SVG to reduce the file size
* use a pin id (e.g. ``D11``) or ``connectedname`` (from Fritzing) as names for the pin SVG element

## Step 4: minifiy board.svg

Run

    svgo --config=svgo.yml libs/YOUR_BOARD_NAME/boardhd.svg -o libs/YOUR_BOARD_NAME/board.svg

to generate a minified version of ``boardhd.svg``.

## Step 4: Send us a Pull Request!!!
