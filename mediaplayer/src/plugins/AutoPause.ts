import MediaPlayer from "../MediaPlayer";

class AutoPause {
  private threshold: number;
  player: MediaPlayer;

  constructor() {
    this.threshold = 0.25;
    this.handlerInterseccion = this.handlerInterseccion.bind(this);
    this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
  }

  run(player) {
    this.player = player;

    const observer = new IntersectionObserver(this.handlerInterseccion, {
      threshold: this.threshold,

    });

    observer.observe(this.player.media);

    document.addEventListener('visibilitychange', this.handlerVisibilityChange)
  }
  
  private handlerInterseccion(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    // console.log(entry)
    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  private handlerVisibilityChange() {
      const isVisible = document.visibilityState === 'visible'
      if(isVisible) {
          this.player.play()
      } else {
          this.player.pause()
      }
  }
}

export default AutoPause;
