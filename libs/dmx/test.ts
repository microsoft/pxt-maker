const buf = control.createBuffer(8)
for (let i = 0; i < buf.length; ++i)
    buf[i] = 1 << i;

while (true)
    dmx.sendBuffer(pins.D13, buf);