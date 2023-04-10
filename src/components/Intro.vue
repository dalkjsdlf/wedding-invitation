<template>
  <div class="intro-movie">
    

    <div class="image">
      <img src="~@/assets/images/intro-image.png" />
    </div>
    <div class="image-main">
      <img src="~@/assets/images/intro-image-character.png" />
    </div>
        
    <!-- <div class="movie">
      <video
        poster="/wedding/img/video-thumbnail.jpg"
        :autoplay="getOS() !== 'iOS'"
        controls
      >
        <source src="/wedding/intro.mp4" type="video/mp4" />
      </video>
    </div> -->
    <!-- <p class="header2">
      <span >
        유경
      </span>
      <span style="font-size:15px">
        그리고
      </span>
      <span>
        연호
      </span>
    </p> -->
    <!-- <div class="image-name">
      <img src="~@/assets/images/intro-image-name.png" />
    </div> -->
    <div class="day-wrap">
      <img src="~@/assets/images/intro-image-name.png" />
      <div class="day-text">
        <p style="display:float">혼롓날까지 {{d_day}}일</p>
      </div>
    </div>
    <p class = "header2">
      23년 5월 20일 토요일 오후 3시<br />
      롯데월드 전통혼례장<br />
    </p>
 
    
  </div>

</template>

<script>
export default {
  name: "IntroMovie",
  data() {
    return {
      d_day : 0
    }
  },
  mounted() {
    const today = new Date();
    const weddingDay = new Date("2023-05-20");
    const diff = weddingDay - today;
    const diffDay =Math.floor(diff/(1000*60*60*24));
    this.d_day = diffDay + 1;
  },
  methods: {
    getOS() {
      var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
        windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
        iosPlatforms = ["iPhone", "iPad", "iPod"],
        os = null;

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = "Mac OS";
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = "iOS";
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = "Windows";
      } else if (/Android/.test(userAgent)) {
        os = "Android";
      } else if (!os && /Linux/.test(platform)) {
        os = "Linux";
      }

      return os;
    },
  },
};
</script>

<style lang="scss" scoped>
.intro-movie {
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 680px;
  background-color: #ffffff;
  //font-size: 0;
  .image {
    display: flex;
    flex: 1;
    //padding-top: 25px;
    padding-left: $padding-vertical;
    padding-right: $padding-vertical;
    justify-content: center;
    align-items: flex-start;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .image-main{
    display: flex;
    flex: 1;
    padding-left: $padding-vertical;
    padding-right: $padding-vertical;
    //padding-bottom: 10px;
    justify-content: center;
    align-items: flex-start;
    height: 320px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .day-wrap { 
    padding-left: $padding-vertical;
    padding-right: $padding-vertical;
    height: 150px;
    margin: 10px auto;
    position: relative;
    //justify-content: center;
    img{
      max-width: 100%;
      max-height: 100%;
      vertical-align: middle;
    }
    
  }

  .day-text{
    position: absolute;
    top: 15%;
    left: 50%;
    width: 100%;
    transform: translate( -50%, 50% );
    font-size: 15px;
    font-family: 'WandohopeR';
    text-align: center;
  }

  .movie {
    display: flex;
    justify-content: center;
    video {
      width: 100vw;
      height: 100vw;
      max-width: 460px;
      max-height: 460px;
    }
  }

  
  p {
    font-family: 'WandohopeR';
    //font-weight: normal;
    font-style: normal;
    padding-left: $padding-vertical;
    padding-right: $padding-vertical;
    display: inline;
    text-align: center;
    //margin-top: 10px;
    margin-bottom: 10px;
    line-height: 24px;
    &.desc {
      color: #295238;
      opacity: 0.6;
      margin-bottom: 36px;
    }
    &.header {
      font-size: 18px;
      font-weight: bold;
      padding-top: 100px;
      line-height: 1.5em;
      color: #000000;
    }

    &.header2 {
      font-size: 18px;
      //font-weight: bold;
      color: #000000;
    }
    &.header3 {
      font-size: 18px;
      font-weight: bold;
      padding-top: px;
      color: #000000;
    }
    &.contents {
      font-size: 16px;
      line-height: 2.0em;
      //display: block;
      //white-space : nowrap; 
      //word-break : nowrap;
      color: #000000;
    }


    &.h{
      font-size: 24px;
      font-weight: 500;
      color: #000000;
    }

    &:last-child {
      margin-bottom: 40px;
    }
  }
}

</style>