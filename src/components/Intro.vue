<template>
  <div class="intro-movie">
    <div class="image-name">
      <img src="~@/assets/images/intro-image-name.png" />
    </div>
    <div class="image">
      <img src="~@/assets/images/intro-image.png" />
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
  </div>
</template>

<script>
export default {
  name: "IntroMovie",
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
  max-height: 680px;
  background-color: #ffffff;
  font-size: 0;
  .image {
    display: flex;
    flex: 1;
    padding-left: $padding-vertical;
    padding-right: $padding-vertical;
    justify-content: center;
    align-items: flex-start;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .image-name {
    display: flex;
    flex: 1;
    height:auto;
    padding-left: $padding-vertical;
    padding-right: $padding-vertical;
    justify-content: center;
    align-items: flex-end;
    img {
      max-width: 100%;
      max-height: 100%;
    }
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
}
</style>
