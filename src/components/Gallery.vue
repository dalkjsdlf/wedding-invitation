<template>
  <div class="gallery">
    <img src="~@/assets/images/wildgoose.png" class="wildgoose" />
    <div class="header">
      소중한 날의 모든 순간
    </div>

    <div class="gallery-container" ref="gal">
      <div class="gallery-inner">
        <div class="gallery-item" v-for="n in 9" :key="n">
          <div class="image">
           
            <img
            :src="`/gallery/${n}.jpg`"
            :style="{
              //transform: `translateX(${(scrollX - width * 2500)}px)`,
              transform: `translateX(0px)`
            }"
          />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WdGallery",
  data() {
    return {
      scrollX: 0,
      width: this.width,
    };
  },
  mounted() {
    this.$refs.gal.addEventListener("scroll", (event) => {
      this.scrollX = event.target.scrollLeft;
    });
    this.width = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    //this.$refs.gal.scrollLeft = 3500;
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  //padding-top: 32px;
  padding-bottom: 50px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #000000;
  overflow: hidden;
  .wildgoose {
    width: 80px;
    margin-bottom: 5px;
  }
  .description {
    font-size: 12px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }

  .header{
    font-family: "WandohopeR";
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 6px;
    margin-bottom: 30px;
    color: #295238;
  }
  .gallery-container {
    padding-left: 10px;
    padding-right: 10px;
    margin-left: -22px;
    margin-right: -22px;
    overflow-x: auto;
    .gallery-inner {
      display: flex;
      //width: 3370px;
      width: 1000px;
      .gallery-item {
        flex-flow: row wrap;
        //flex: 0 0 content;
        //justify-content: space-around;
        position: relative;
        width: auto;
        height: 360px;
        display: block;
        margin-right: 260px;
        &:before {
          position: absolute;
          top: 0;
          left: -1px;
          display: block;
          content: "";
          
          background-color: #fffdf9;
          z-index: auto;
        }
        &:after {
          position: absolute;
          top: 0;
          right: -1px;
          display: block;
          content: "";
         
          background-color: #fffdf9;
          z-index:auto;
        }
        .arch {
          position: absolute;
          top: 0;
          left: 0;
          width: 120px;
          height: 360px;
          //background-image: url("~@/assets/images/arch.png");
          background-repeat: no-repeat;
          background-size: 120px auto;
          background-position: top left;
          z-index: 10;
        }
        .image {
          position: absolute;
         
          overflow: hidden;
          max-height: initial;
          margin-top: -5%;
          margin: auto;
          //object-fit: cover;
          img {
            border: 5px solid #ffffff;
            transition:  3.6s;
            //width: 296px;
            //width: 100%;
            height: 360px;
            //object-fit: cover;
          }
        }
      }
    }
  }
}
</style>
