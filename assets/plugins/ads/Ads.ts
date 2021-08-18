export interface Ad {
  imageUrl: string;
  title: string;
  body: string;
  url: string;
}

const ALL_ADS: Ad[] = [
  {
    imageUrl:
      'https://i1.wp.com/polvora.com.mx/wp-content/uploads/2021/03/28184775-B7B0-41C7-9DF8-70F333FEA5C4.jpeg?resize=696%2C464&ssl=1',
    title: 'Black Veil Brides',
    body:
      'Escucha ahora: Torch',
    url: 'https://www.youtube.com/watch?v=qyhJ7MRBOyo',
  },

  {
    imageUrl:
      'https://i2.wp.com/polvora.com.mx/wp-content/uploads/2018/09/palaye_royale.jpg?resize=696%2C449&ssl=1',
    title: 'Palaye Royale',
    body:
      'Escucha ahora: No Love In LA',
    url: 'https://www.youtube.com/watch?v=qePhiiz7dtc',
  },

  {
    imageUrl:
      'https://www.thebackstage.net/wp-content/uploads/2021/06/Sleeping-With-Sirens-1160x695.jpg',
    title: 'Sleeping With Sirens',
    body:
      'Escucha ahora: Bloody Knuckles',
    url: 'https://www.youtube.com/watch?v=Dr93IjkUatI',
  },
  {
    imageUrl:
      'https://photos.bandsintown.com/thumb/11373202.jpeg',
    title: 'Motionless In White',
    body:
      'Escucha ahora: Thoughts And Prayers',
    url: 'https://www.youtube.com/watch?v=yPe180bxVuE',
  },
];

class Ads {
  private static instance: Ads;
  private ads: Ad[];

  private constructor() {
    this.initAds();
  }

  static getInstance() {
    if (!Ads.instance) {
      Ads.instance = new Ads();
    }

    return Ads.instance;
  }

  private initAds() {
    this.ads = [...ALL_ADS];
  }

  getAd() {
    if (this.ads.length === 0) {
      this.initAds();
    }

    return this.ads.pop();
  }
}

export default Ads;