let fs = require("fs")

if (!process.argv[2]) {
    console.log("USAGE: node genpinmask.js PWM|ADC path/to/PeripheralPins.c")
    process.exit(1)
}

let inIt = false
let pins = {}
for (let line of fs.readFileSync(process.argv[3], "utf8").split(/\r?\n/)) {
    if (line.indexOf("PinMap_" + process.argv[2]) > 0) { inIt = true }
    if (/^\s*}/.test(line)) { inIt = false }
    if (inIt) {
        let m = /^\s*{\s*P([A-K])_(\d+)/.exec(line)
            if (m) {
                let id = (m[1].charCodeAt(0) - 'A'.charCodeAt(0))*16+parseInt(m[2])
                pins[id]=1
            }
    }
}

let s = "0b"
for (let i = 63; i >= 0; --i) {
    if (pins[i]) s += "1"
    else s += "0"
}

console.log(s + "LL")

