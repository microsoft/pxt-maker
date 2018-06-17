# MakeCode for Electronic Cats Meow Meow 


This repo contains the editor hosted at http://makercode.electroniccats.com/.

## Local Dev setup

These instructions assume familiarity with dev tools and languages.

* install [Node.js 8+](https://nodejs.org/en/download/)
* (optional) install [Visual Studio Code](https://code.visualstudio.com/)

In a common folder,

* clone https://github.com/Microsoft/pxt to ``pxt`` folder
* clone https://github.com/Microsoft/pxt-common-packages to ``pxt-common-packages`` folder
* clone https://github.com/ElectronicCats/pxt-maker to ``pxt-maker`` folder
* go to ``pxt`` and run

```
npm install
npm run build
```

* go to ``pxt-common-packages`` and run

```
npm install
npm link ../pxt
```

* go to ``pxt-maker`` and run

```
npm install
npm link ../pxt
npm link ../pxt-common-packages
```

## to run the local server

From root github folder,

```
cd pxt-maker
pxt serve --cloud
```

## to build and deploy a single package via command line

```
cd libs/core
pxt deploy
```

## License
MIT

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
