# MakeCode Maker 

[![Build Status](https://travis-ci.org/Microsoft/pxt-maker.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-maker)
[![Community Discord](https://img.shields.io/discord/448979533891371018.svg)](https://aka.ms/makecodecommunity)

This is an experimental code editor for maker boards - try it at https://maker.makecode.com.

* [Read the docs](https://maker.makecode.com/about)

## Who is this for?

This editor is meant for micro-controllers that are friendly to breadboarding. The editor is based on [Microsoft MakeCode](https://makecode.com).

## Local Dev Server

The local server lets you to run the editor and serve the documentation from your own computer.

### Setup

1. Install [Node.js](https://nodejs.org/) 8.9.4 or higher.
2. Install [Docker](https://www.docker.com/) if you are going to edit any `.cpp` files.
3. Clone the pxt repository.
```
git clone https://github.com/microsoft/pxt
cd pxt
```
4. Install the dependencies of ``Microsoft/pxt`` and build it
```
npm install
npm run build
cd ..
```
5. Clone the ``Microsoft/pxt-common-packages`` repository
```
git clone https://github.com/microsoft/pxt-common-packages
cd pxt-common-packages
npm install
cd ..
```
6. Clone the ``Microsoft/pxt-maker`` repository
```
git clone https://github.com/microsoft/pxt-maker
cd pxt-maker
```
7. Install the PXT command line (add `sudo` for Mac/Linux shells).
```
npm install -g pxt
```
8. Install the pxt-maker dependencies.
```
npm install
```
8. Link pxt-maker back to base pxt repo (add `sudo` for Mac/Linux shells).
```
npm link ../pxt
npm link ../pxt-common-packages
```
Note the above command assumes the folder structure of   
```
       maker.makecode.com
          |
  ----------------------------------
  |       |                        |
 pxt      pxt-common-packages  pxt-maker
 ```

### Running

Run this command from inside pxt-maker to open a local web server
```
pxt serve
```
If the local server opens in the wrong browser, make sure to copy the URL containing the local token. 
Otherwise, the editor will not be able to load the projects.

If you need to modify the `.cpp` files (and have installed yotta), enable yotta compilation using the `--localbuild` flag:
```
pxt serve --localbuild
```

### Updates

Make sure to pull changes from all repos regularly. More instructions are at https://github.com/Microsoft/pxt#running-a-target-from-localhost

## Repos 

The pxt-microbit target depends on several other repos. The main ones are:
- https://github.com/Microsoft/pxt, the PXT framework
- https://github.com/Microsoft/pxt-commmon-packages, common APIs accross various MakeCode editors
- https://github.com/lancaster-university/code-core, CODAL core project
- https://github.com/lancaster-university/codal-mbed, mbed layer
- https://github.com/lancaster-university/codal-samd21, CODAL SAMD21 layer
- https://github.com/lancaster-university/codal-circuit-playground, Adafruit CPX layer

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
