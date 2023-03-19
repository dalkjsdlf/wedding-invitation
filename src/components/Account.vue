<template>
  <div class="account">
    
    <button @click="openPopup()">계좌번호</button>

    <transition name="fade" appear>
      <div class="overlay" v-show="isPopOpen" @click="closePopup()" />
    </transition>

    <transition name="slide" appear>
      <div class="bank-popup" v-show="isPopOpen">
        <a href @click.prevent="closePopup()">닫기</a>
        <div>
          <ul>
            <li> 최연호 </li>
            <li> 최연호 </li>
          </ul>
        </div>
      </div>
    </transition>



    <!-- <div class="black-bg" v-if="isPopOpen == true">
      <div class="bank-popup">
        <a href @click.prevent="closePopup()">닫기</a>
        <div>
          <ul>
            <li> 최연호 </li>
            <li> 최연호 </li>
          </ul>
        </div>
      </div>
    </div> -->
  </div>
  
</template>

<script>

export default {
  name: "WbAccount",
  data() {
    return {
      isPopOpen:false,
      
    };
  },
  mounted() {
    
  },
  methods: {
    openPopup(){
      this.isPopOpen = true;
    
    }
    ,
    closePopup(){
      this.isPopOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: all 0.28s ease-in-out;
}
.slide-leave-active {
  transition: all 0.28s ease-in-out;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}

.navi-apps {
  align-content: center;
  position: relative;
  font-size: 13px;

  .ico_comm img {
    vertical-align: middle;
    width: 40px
  }

  div {
    text-align: center;
    padding-top: 10px;
  }

  a{
    text-decoration: none;
  }
}

.cover {
  display: flex;
  justify-content: space-between;
  margin: 22px 10% 22px 10%;
}

.link {
  color: #295238;
}
.overlay {
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 999;
}
.black-bg{
  width:100%;
  height:100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.bank-popup{
  width:300px;
  height:200px;
  background: white;
  border-radius: 5px;
  padding:20px;
  //box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%);
  position : fixed;
  top:50%;
  left:50%;
  box-sizing: border-box;
  
  text-align: right;
  a {
    color:grey;
    text-decoration: none;
  }
}
.account {
  padding-top: 38px;
  padding-bottom: 18px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  background-color: #F6F6F6;
  
  .hands {
    width: 75px;
    margin-bottom: 16px;
  }
  p {
    font-family: 'WandohopeR';
    font-size: 20px;
    margin-bottom: 10px;
    line-height: 24px;
    
    &.header {
      font-size: 16px;
      font-weight: bold;
      color: #295238;
    }

    &.description {
      font-size: 14px;
      padding-top: 20px;    
      color: #000000;
      line-height: 1.6em;
      text-align: left;
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
