# Support for Blue Pill boards

Only 128k version supported.

See https://wiki.stm32duino.com/index.php?title=Blue_Pill

Current size info:
* bootloader is around 12k, but we reserve 16k (eg for adding WebUSB)
* basic application is around 80k, this includes:
* 15k JACDAC
* 2.5k UTF8
* 18k+ of STM32 HAL
* adding trig and other advanced math functions adds 17k
