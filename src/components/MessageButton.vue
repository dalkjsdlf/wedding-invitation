<template>
  <div class="message-box" @click="handlePopMsgBox">
    <h2 class="h2">
      여기를 눌러 메시지를 전해주세요!!
    </h2>
  </div>
</template>

<script>
export default {
  name: "MesssageButton",

  methods:{
    handlePopMsgBox(){
      console.log("click!!!");
      this.$emit("click",true);
    }
  }
};
</script>

<style lang="scss" scoped>
.message-box {
  font-family: 'Gaegu', cursive;
  
  padding-top: 48px;
  padding-bottom: 72px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  .h2 {
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 24px;
    color: #295138;
  }
}

</style>
