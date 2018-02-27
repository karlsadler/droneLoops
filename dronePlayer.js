var player = new Tone.Player("https://github.com/karlsadler/droneLoops/blob/master/drone1.wav").toMaster();
//play as soon as the buffer is loaded
player.autostart = true;
