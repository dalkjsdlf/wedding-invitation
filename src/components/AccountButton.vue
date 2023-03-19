<template>
  <div class="account-box" @click="handlePopMsgBox">
    <p class="header">신랑 & 신부에게 마음전하기</p>
    <br><br>

    <h2 class="h2">
      계좌번호 보기
    </h2>
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
  font-family: 'WandohopeR';
  font-size: 20px;
  margin-bottom: 10px;
  line-height: 24px;
  
  &.header {
    font-size: 16px;
    font-weight: bold;
    color: #295238;
  }
}

.account-box {
  font-family: "WandohopeR";
  
  padding-top: 48px;
  padding-bottom: 10px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  
  .h2 {
    font-size: 20px;
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
}

</style>
