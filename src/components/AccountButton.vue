<template>
  
  <div class="account-box" @click="handlePopMsgBox">
    
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
            <td ><pre><img class="image" src="~@/assets/images/phone_blue.png">   <img class="image" src="~@/assets/images/sms_blue.png"></pre></td>
            <td ><pre><img class="image" src="~@/assets/images/phone_red.png">   <img class="image" src="~@/assets/images/sms_red.png"></pre></td>
          </tr>
          <tr>
            <td><button class="message-box">계좌번호</button></td>
            <td><button class="bride-message-box">계좌번호</button></td>
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
            <td ><pre><img class="image" src="~@/assets/images/phone_blue.png">   <img class="image" src="~@/assets/images/sms_blue.png"></pre></td>
            <td ><pre><img class="image" src="~@/assets/images/phone_red.png">   <img class="image" src="~@/assets/images/sms_red.png"></pre></td>
          </tr>
          <tr>
            <td><button class="message-box">계좌번호</button></td>
            <td><button class="bride-message-box">계좌번호</button></td>
          </tr>
        
        <tr>
          <P class="space"></P>
        </tr>
   
        <tr>
          <td ><pre class="position">신랑 어머니  <span class="name"> 우경심</span></pre></td>
          
        </tr>
               
        <tr>
          <td ><pre><img class="image" src="~@/assets/images/phone_blue.png">   <img class="image" src="~@/assets/images/sms_blue.png"></pre></td>
         
        </tr>
        <tr>
          <td><button class="message-box">계좌번호</button></td>
          
        </tr>
        <tr>
          <P class="space"></P>
        </tr>
       </table>




    </div>

    <!-- <h2 class="h2">
      계좌번호 보기
    </h2> -->
  </div>
</template>

<script>
export default {
  name: "MesssageButton",

  methods:{
    handlePopMsgBox(){
      this.$emit("click",true);
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

</style>
