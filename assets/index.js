import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'


const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });
const button = document.querySelector('button')
const button2 = document.getElementById('muteUnmute');
button.onclick = () => player.toggle();
button2.onclick = () => player.muteOrMute()