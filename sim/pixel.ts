namespace pxsim.pixel {
    export const defaultPin = light.defaultPin;
    export function sendBuffer(data: RefBuffer) {
        light.sendBuffer((board() as DalBoard).neopixelPin as any, 1, data)
    }
}