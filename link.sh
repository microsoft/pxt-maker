npm install
rm -R node_modules/@jacdac/jacdac-ts
rm -R node_modules/pxt-core
rm -R node_modules/pxt-common-packages
pxt link ../jacdac-ts
pxt link ../pxt
pxt link ../pxt-common-packages
