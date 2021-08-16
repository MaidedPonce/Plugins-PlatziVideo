import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] });
const button: HTMLMediaElement = document.querySelector('#button')
const button2: HTMLMediaElement = document.querySelector('#muteUnmute');
button.onclick = () => player.toggle();
button2.onclick = () => player.muteOrMute()


if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}
