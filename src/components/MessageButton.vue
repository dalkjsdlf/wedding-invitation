<template>
  <div class="message-box" @click="handlePopMsgBox">
    <h2 class="h2">
      축하말 남기기
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
.message-box {
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
    margin-bottom: 24px;
    padding-top: 15px;
    padding-bottom: 10px;
    color: #e9e8e8;
    background-color: #013257;
    border-radius: 20px 20px 20px;
  }
}

</style>
