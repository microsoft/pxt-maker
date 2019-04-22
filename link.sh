npm install
rm -R node_modules/pxt-core
rm -R node_modules/pxt-common-packages
rm -R node_modules/@jacdac/jacdac-ts
pxt link ../pxt
pxt link ../pxt-common-packages
pxt link ../jacdac-ts
