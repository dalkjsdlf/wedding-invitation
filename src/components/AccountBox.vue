<template>
  <div>
    <transition name="fade" appear>
      <div class="overlay" v-show="isOpen" @click="handleClose" />
    </transition>

    <transition name="slide" appear>
      <div class="bottom-sheet-container" v-show="isOpen">
        <div class="bottom-sheet">
          <div class="form-container">
            <div class="bank-div">
              <div class="bank-account">
                <ul v-for="(item,index) in accounts" :key="index">
                  <li> {{item.name}} </li>
                  <li> {{item.bank}} {{item.disp}} </li>
                  <li> <a href @click.prevent="copyAcct(item)">복사하기</a></li>
                </ul>
              </div>
              <div class="button-div">
                <button class="button-bottom"
                @click="handleClick"
                >
                닫기
                </button>
  
                
              </div>
            </div>
            
          </div>
        </div>
        
      </div>

    </transition>
  </div>
</template>

<script>

export default {
  name: "AccountBox",
  components:{
    
  },
  data() {
    return {
      accounts: [
        {role:"신랑",name:"최연호", bank:"새마을금고", acct:"9002141866581", disp:"9002-1418-6658-1"},
        {role:"신부", name:"김유경", bank:"신한은행", acct:"9002141866581", disp:"9002-1418-6658-1"}
      ]
      
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
    present: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
   
  },
  mounted() {
    
  },
  created(){

  },

  methods: {
 
    handleClose() {
      this.$emit("close");
    },
    isNull(psVal)
    {
      if(psVal == undefined || psVal == "" || psVal.length == 0){
        return true;
      }
      return false;
    }
    ,
    copyAcct(item){
      const copyStr = item.bank + " " + item.acct;
      document.execCommand(copyStr);
      alert(copyStr + "복사됨");
    }
  },
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

.overlay {
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 999;
}

.bottom-sheet-container {
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  position: fixed;
  z-index: 999;
  margin-top: 50px;
  background-color: #F6F6F6;

  .bottom-sheet {
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: white;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .bottom-sheet-header {
      position: relative;
      width: 100%;
      height: 100vw;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      overflow: hidden;
      flex: 10 1;
      .image {
        width: 100%;
        object-fit: cover;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      .icon-close {
        position: absolute;
        right: 0;
        top: 0;
        padding: 16px;
      }
    }

    .form-title{
        font-family  : 'WandohopeR';  
        font-size: 14px;
        font-weight: bold;
        padding-top: 10px;
        padding-bottom: 10px;
        color: #AB8065;
        text-align: center;
    }
    .form-container {
      display: flex;
      flex: 1 1 230px;
      flex-direction: column;
      padding: 16px 16px 8px 16px;
      background-color: #faf9f9;
      .form-header {
        display: flex;
        line-height: 30px;
        height: 60px;

        .title {
          color: #202121;
          flex: 1;
          word-break: keep-all;
          overflow: hidden;
        }

        .price-container {
          width: 130px;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          color: #999999;

          .price {
            text-align: right;
          }
        }
      }
      .form-list{
        padding-top: 30px;
        padding-left: 20px;
        padding-right: 20px;
      
        .user-header{  
          
          align-items: center;
          padding-left: 0px;
          padding-right: 0px;
          font-family  : 'WandohopeR';
          font-size    : 14px;
          
          .user-id {
            display: inline-block;
            font-size: 16px;
            margin: 10px 10px 10px 10px;
            width: 200px;
            color:#4a3737
          }

          .write-date {
            margin-left: 10px;
            font-size: 6px;
            //transform: translate(0%, 70%);
          }

          .coment-delete {
            position: absolute;
            right:20px;
            margin-right: 30px;
            margin-top: 5px;
            font-size: 24px;
            text-decoration: none;
            color: #333;
            //transform: translate(-20%, -60%);
          }
        }
        .list-card{
          background-color: rgb(240, 240, 240);
          padding-top:10px;
          padding-left:10px;
          padding-right:10px;
          height:100px;
        }
        .user-comment {
          display: block;
          margin-bottom: 10px;
          //border-bottom: 1px solid #c1bcba;
          padding: 10px;
          //font-weight: 700;
          box-sizing: border-box;
          font-family  : 'WandohopeR';
          font-size    : 18px;
        }

      }
      .form-body {
        padding-top: 24px;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 0 0 0;
        align-items: flex-end;
        .input {

          padding-left: 20px;
          padding-right: 20px;
          border-radius: 2px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;

          background-color: #faf9f9;
          border-bottom: 1px solid #c1bcba;
          box-sizing: border-box;
          &.name {
            width: 100%;
            height: 25px;
            display: inline-block;
            margin-bottom: 12px;
          }
          &.passwd {
            display: inline-block;
            height: 25px;
            margin-bottom: 12px;
            -webkit-text-security: disc;    
            width: 100%;
          }

          &.message {
            width: 100%;
            margin-bottom: 16px;
            height: 50px;
            min-height: 50px;
            vertical-align: to-upper-case($string: "");
            resize: none;
          }
        }

        .description {
          color: #999999;
          font-size: 12px;
        }
      }
    }

    .button-div{
      padding-left: 20px;
      padding-right: 20px;
      .button-bottom {
        flex: 0 0 54px;
        cursor: default;
        font-family  : 'WandohopeR';
        font-size    : 24px;
        width: 100%;
        height:45px;
        margin-bottom: constant(safe-area-inset-bottom);
        margin-bottom: env(safe-area-inset-bottom);
        cursor: pointer;
        background-color: #484848;
        color: #ffffff;
      }
    }
    .passwd-div{
      
      padding-top: 20px;
      
      .input {
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 2px;
        border: solid 1px #999999;
        &.passwd {
          display: inline-block;
          width: 100%;
          height: 43px;
          margin-bottom: 12px;
          -webkit-text-security: disc;    
        }
      }
    }

    .button-delete{
      padding-left: 20px;
      padding-right: 20px;
      
      flex: 0 0 54px;
      cursor: default;
      font-family  : 'WandohopeR';
      font-size    : 24px;
      width: 100%;
      height:45px;
      margin-bottom: constant(safe-area-inset-bottom);
      margin-bottom: env(safe-area-inset-bottom);
      background-color: #004fa4;
      color: #ffffff;
    }
    .black-bg{
      width:100%;
      height:100%;
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      padding: 20px;
    }
    .passwd-popup{
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
    
  }
}

.bank-div{
  width:90%;
  height:500px;
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
.bank-account{
  width:90%;
  height:400px;
}
</style>
