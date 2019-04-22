npm install
rm -Rf node_modules/pxt-core
rm -Rf node_modules/pxt-common-packages
rm -Rf node_modules/@jacdac/jacdac-ts
pxt link ../pxt
pxt link ../pxt-common-packages
pxt link ../jacdac-ts
