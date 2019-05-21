const PCA9632_I2C_ADDRESS           = 0x62  //I2C address of the PCA9632
const PCA9632_AUTO_INCREMENT        = 0x80
const PCA9632_PWMALL                = 0xFF

const PCA9632_MODE1 = 0x00
const PCA9632_MODE2 = 0x01
const PCA9632_PWM0 = 0x02
const PCA9632_PWM1 = 0x03
const PCA9632_PWM2 = 0x04
const PCA9632_PWM3 = 0x05
const PCA9632_GRPPWM = 0x06
const PCA9632_GRPFREQ= 0x07
const PCA9632_LEDOUT = 0x08
const PCA9632_SUBADR1 = 0x09
const PCA9632_SUBADR2 = 0x0A
const PCA9632_SUBADR3 = 0x0B
const PCA9632_ALLCALLADDR = 0x0C

const PCA9632_NO_AUTOINC = 0x00
const PCA9632_AUTO_ALL = 0x80
const PCA9632_AUTO_IND = 0xA0
const PCA9632_AUTOGLO = 0xC0
const PCA9632_AUTOGI = 0xE0

const LED_OFF = 0x00
const LED_ON = 0x01
const LED_PWM = 0x02

namespace RegisterHelper {

    /**
     * Write register of the address location
     */
    export function writeRegister(addr: number, reg: number, dat: number): void {
        let _registerBuffer = pins.createBuffer(2);
        _registerBuffer[0] = reg;
        _registerBuffer[1] = dat;
        pins.i2cWriteBuffer(addr, _registerBuffer);
    }

    /**
     * Read a 8-byte register of the address location
     */
    export function readRegister8(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
    }

    /**
     * Read a (UInt16) 16-byte register of the address location
     */
    export function readRegisterUInt16(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(addr, NumberFormat.UInt16LE);
    }

    /**
     * Read a (Int16) 16-byte register of the address location
     */
    export function readRegisterInt16(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(addr, NumberFormat.Int16LE);

    }

}

namespace PCA9632 {

    let PCA9632_I2C_ADDR = PCA9632_I2C_ADDRESS;
    export let inited = false;

    export enum ServoNumber{
        One = PCA9632_PWM0,
        Two = PCA9632_PWM1,
        Three = PCA9632_PWM2,
        Four = PCA9632_PWM3
    }

    export function initSensor()
    {
        // if (!inited) {
            // inited = true;
            RegisterHelper.writeRegister(PCA9632_I2C_ADDR,PCA9632_MODE1,0x01); // ALL CALL?
            RegisterHelper.writeRegister(PCA9632_I2C_ADDR,PCA9632_MODE2,0x24); // TOTEM!
            RegisterHelper.writeRegister(PCA9632_I2C_ADDR,PCA9632_LEDOUT,0xFF);
            // RegisterHelper.writeRegister(PCA9632_I2C_ADDR,PCA9632_GRPFREQ,0);
            // RegisterHelper.writeRegister(PCA9632_I2C_ADDR,PCA9632_GRPPWM,18);
            RegisterHelper.writeRegister(PCA9632_I2C_ADDR,PCA9632_GRPFREQ,5);
            RegisterHelper.writeRegister(PCA9632_I2C_ADDR,PCA9632_GRPPWM,1);

            RegisterHelper.writeRegister(PCA9632_I2C_ADDR,PCA9632_PWM0,0);
            RegisterHelper.writeRegister(PCA9632_I2C_ADDR,PCA9632_PWM1,0xff);
            RegisterHelper.writeRegister(PCA9632_I2C_ADDR,PCA9632_PWM2,128);
            RegisterHelper.writeRegister(PCA9632_I2C_ADDR,PCA9632_PWM3,1);
        // }
    }

    export function start()
    {
        if(!inited)
            initSensor();
    }


    export function setServo(servo: ServoNumber, rotation:number)
    {

    }
}
