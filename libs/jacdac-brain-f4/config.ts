namespace config {
  // some bootloaders have R and G swapped
  export const PIN_LED_R = DAL.PB_0 | DAL.CFG_PIN_CONFIG_ACTIVE_LO;
  export const PIN_LED_G = DAL.PA_7 | DAL.CFG_PIN_CONFIG_ACTIVE_LO;
  export const PIN_LED_B = DAL.PA_6 | DAL.CFG_PIN_CONFIG_ACTIVE_LO;

  // defined in bootloader as well - this takes priority!
  export const PIN_JACK_TX = DAL.PA_2;

  // missing from bootloader
  export const PIN_JDPWR_OVERLOAD_LED = PIN_LED_R
  export const PIN_JDPWR_ENABLE = DAL.PA_10 | DAL.CFG_PIN_CONFIG_ACTIVE_LO // ILIM_ENABLE
  export const PIN_JDPWR_FAULT = DAL.PA_1 // ILIM_FAULT
}
