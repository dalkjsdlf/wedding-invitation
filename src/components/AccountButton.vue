<template>
  
  <div class="account-box">
    
    <p class="header">신랑 & 신부에게 마음전하기</p>
    <br>
    <div class="form-container">
      <table>
          <tr>
            <td ><p class="name">신랑측 </p></td>
            <td ><p class="name">신부측 </p></td>
          </tr>  
          <tr>
            <td ><pre class="position">신랑     <span class="name"> 최연호</span></pre></td>
            <td ><pre class="position">신부     <span class="name"> 김유경</span></pre></td>
          </tr>
          
                 
          <tr>
            <td ><pre><a href="tel:01043007176"><img class="image" src="~@/assets/images/phone_blue.png"></a>   <a href="sms:01043007176"><img class="image" src="~@/assets/images/sms_blue.png"></a></pre></td>
            <td ><pre><a href="tel:01022780049"><img class="image" src="~@/assets/images/phone_red.png"></a>   <a href="sms:01022780049"><img class="image" src="~@/assets/images/sms_red.png"></a></pre></td>
          </tr>
          <tr>
            <td><button @click="openPopup(1)" class="message-box">계좌번호</button></td>
            <td><button @click="openPopup(2)" class="bride-message-box">계좌번호</button></td>
          </tr>
          <!------------------------------------------------------------------------------------------->
          <tr>
            <P class="space"></P>
          </tr>
                  <tr>
            <td ><pre class="position">신랑 아버지  <span class="name"> 최혁진</span></pre></td>
            <td ><pre class="position">신부 어머니  <span class="name"> 양미희</span></pre></td>
          </tr>
                 
          <tr>
            <td ><pre><a href="tel:01054709293"><img class="image" src="~@/assets/images/phone_blue.png"></a>   <a href="sms:01054709293"><img class="image" src="~@/assets/images/sms_blue.png"></a></pre></td>
            <td ><pre><a href="tel:01083730049"><img class="image" src="~@/assets/images/phone_red.png"></a>   <a href="sms:01083730049"><img class="image" src="~@/assets/images/sms_red.png"></a></pre></td>
          </tr>
          <tr>
            <td><button @click="openPopup(3)" class="message-box">계좌번호</button></td>
            <td><button @click="openPopup(5)" class="bride-message-box">계좌번호</button></td>
          </tr>
        
        <tr>
          <P class="space"></P>
        </tr>
   
        <tr>
          <td ><pre class="position">신랑 어머니  <span class="name"> 우경심</span></pre></td>
          
        </tr>
               
        <tr>
          <td ><pre><a href="tel:01054719293"><img class="image" src="~@/assets/images/phone_blue.png"></a>   <a href="sms:01054719293"><img class="image" src="~@/assets/images/sms_blue.png"></a></pre></td>
         
        </tr>
        <tr>
          <td><button @click="openPopup(4)" class="message-box">계좌번호</button></td>
          
        </tr>
        <tr>
          <P class="space"></P>
        </tr>
       </table>
    </div>

    <!-- <h2 class="h2">
      계좌번호 보기
    </h2> -->
   

    <div class="dim-layer" v-if="isModalOpen == true">
        <div class="dimBg"></div>
        <div class="account-popup">
          <a href @click.prevent="closePopup()">닫기</a>
          <div class="account-div"> 
            <table>
              <tr>
                <td>
                  {{accountInfo.bank}}
                </td>
                <td>
                  {{accountInfo.no}}
                </td>
              </tr>
            </table>
          </div>
          <button class="button-copy" @click.prevent="copyAcct()">계좌 복사하기</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MesssageButton",
  data(){
    return{
      isModalOpen:false,
      accountInfo:{
        no:"",
        bank:""
      }
    }
  },
  methods:{
    handlePopMsgBox(){
      this.$emit("click",true);
    }
    ,
    closePopup(){
      this.isModalOpen = false;
    },
    openPopup(personType){
      this.isModalOpen = true;
      let acctNo="";
      let bank="";
      console.log("percontype >>> " + personType);
      switch(personType)
      {
        //신랑
        case 1:
        acctNo = "9002-1418-6658-1";
        bank   = "새마을 금고"; 
        break;
        //신부
        case 2:
        acctNo = "110-292-268670";
        bank   = "신한은행"; 
        break;
        //신랑아버지
        case 3:
        break;
        //신랑어머니
        case 4:
        break;
        //신부어머니
        case 5:
        acctNo = "1000-23-52-269572";
        bank   = "농협은행"; 
        break;
        //신랑
        default:
        break;
      }
        this.accountInfo.no   = acctNo;
        this.accountInfo.bank = bank; 
    },
    copyAcct(){
      const nodash = this.accountInfo.no.replaceAll("-","");
      const acctNo = this.accountInfo.bank.replaceAll(" ","");
      const copyStr = acctNo + " " + nodash;
      document.execCommand(copyStr);
      alert(copyStr + "복사됨");
    }


  }
};
</script>

<style lang="scss" scoped>

p {
  font-family: 'SeoulHangangM';
  font-size: 20px;
  margin-bottom: 10px;
  line-height: 30px;
  
  &.header {
    font-size: 16px;
    font-weight: bold;
    color: #295238;
  }

  
  
}
.position {
  font-size: 12px;
  font-weight: bold;
  color: #292525;
}
.name{
  font-size: 16px;
  font-weight: bold;
  color: #292525;
}
.account-box {
  font-family: "SeoulHangangM";
  padding-top: 30px;
  padding-bottom: 10px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  background-color: #F6F6F6;
  //background-color: #252838;
  .h2 {
    font-size: 15px;
    font-weight: normal;
    height:50px;
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 24px;
    padding-top: 15px;
    padding-bottom: 10px;
    background-color: #d4d4d4;
    color: #000000;
   // border-radius: 20px 20px 20px;
  }
  .space {
   
    height:35px;
  
  }
  
}
.form-container {
  display: flex;
  flex: 1 1 230px;
  flex-direction: column;
  padding: 16px 16px 8px 16px;
  background-color: #ffffff;
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
}
.image {
  position: relative;
  top: 5px;
  padding-bottom: 3px;
  width: 35px;
  height: 40px;
  color: #999999;

}
table{
  width: 100%;
}
.message-box {
  font-family: "SeoulHangangM";
  font-size: 11px;
  top:20px;
  width: 100px;
  height: 22px;
  //padding-bottom: 15;
  background-color: #5993CA;
  //background-color: #013257;
  color: #ffffff;
  text-align: center;
  border-radius: 5px 5px 5px;
}
.bride-message-box {
  font-family: "SeoulHangangM";
  font-size: 11px;
  top:20px;
  width: 100px;
  height: 22px;
  //padding-bottom: 15;
  background-color: #F25654;
  //background-color: #bb2929;
  //background-color: #295238;
  
  color: #ffffff;
  text-align: center;
  border-radius: 5px 5px 5px;
}

.black-bg{
      width:100%;
      height:100%;
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      padding: 20px;
    }
  .dim-layer {
  position: fixed;
  _position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

.dim-layer .dimBg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: .5;
  filter: alpha(opacity=50);
}
    .account-popup{
      width:300px;
      height:150px;
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

    .account-div{
      margin-top:20px;
      display:flex;
      
      td{
        color: #AB8065;
        font-size: 16px;
        text-align: center;
        border: solid 1px;
        padding: 8px;
        border-block-color: #AB8065;
        margin-right : 10px;
      }
    }

    .button-copy{
      margin-top : 10px;
      border-radius: 5px;
      padding:10px;
      background-color: #fbe7e7;
      color:#AB8065;
      text-align: center;
    }
</style>
