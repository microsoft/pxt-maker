const VL53L0X_SYSRANGE_START = 0x00
const VL53L0X_REG_SYSRANGE_MODE_BACKTOBACK = 0x0002
const VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS = 0x29

const VL53L0X_REG_RESULT_RANGE_STATUS = 0x0014;

const VL53L0X_REG_IDENTIFICATION_MODEL_ID = 0x00c0;
const VL53L0X_REG_IDENTIFICATION_REVISION_ID = 0x00c2;
const VL53L0X_REG_PRE_RANGE_CONFIG_VCSEL_PERIOD = 0x0050;
const VL53L0X_REG_FINAL_RANGE_CONFIG_VCSEL_PERIOD = 0x0070;
const VL53L0X_REG_SYSRANGE_START = 0x0000;


class VL53L0X {
    constructor() {

    }

    init() {
        // hoccus pokus!
        pins.i2cWriteRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 0x88, 0x00);
        pins.i2cWriteRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 0x80, 0x01);
        pins.i2cWriteRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 0xFF, 0x01);
        pins.i2cWriteRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 0x00, 0x00);
        pins.i2cReadRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 0x91);
        pins.i2cWriteRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 0x91, 0x3c);
        pins.i2cWriteRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 0x00, 0x01);
        pins.i2cWriteRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 0xFF, 0x00);
        pins.i2cWriteRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 0x80, 0x00);

        // abra cadabra!
        pins.i2cWriteRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 0x80, 0x01);
        pins.i2cWriteRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 0xFF, 0x01);
        pins.i2cWriteRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 0x00, 0x00);
        pins.i2cWriteRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 0x91, 0x3c);
        pins.i2cWriteRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 0x00, 0x01);
        pins.i2cWriteRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 0xFF, 0x00);
        pins.i2cWriteRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 0x80, 0x00);

        // alakazam! (continuous mode)
        pins.i2cWriteRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, VL53L0X_SYSRANGE_START, VL53L0X_REG_SYSRANGE_MODE_BACKTOBACK);
    }

    printModelRevision() {
        const rev = pins.i2cReadRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, VL53L0X_REG_IDENTIFICATION_REVISION_ID)
        const model = pins.i2cReadRegister(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, VL53L0X_REG_IDENTIFICATION_MODEL_ID)

        control.dmesg("REV: ");
        control.dmesg(rev.toString());
        control.dmesg("model: ");
        control.dmesg(model.toString());
    }

    get distance(): number {
        pins.i2cWriteNumber(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, VL53L0X_REG_RESULT_RANGE_STATUS, NumberFormat.UInt8LE)
        const b = pins.i2cReadBuffer(VL53L0X_REG_I2C_SLAVE_DEVICE_ADDRESS, 12);
        return ((b[10] & 0xFF) << 8) | (b[11] & 0xFF);
    }
}