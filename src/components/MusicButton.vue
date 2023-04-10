<template>
  <div class="right-fixed">
    <div>🎵&nbsp;</div>
    <input type="checkbox" id="toggle" v-model="isChk" hidden @change="toggleMusic()">
    <label for="toggle" class="toggleSwitch">
    <span class="toggleButton"></span>
    </label>
    <audio>
      <source src="~@/assets/100days_memory.mp3">
    </audio>
  </div>
</template>

<script>
import musicPath from "../assets/100days_memory.mp3";
export default {   
  name: "MisicButton",
  data(){
    return{
      isChk:true,
      audio:null
    }
  },
  created(){
    this.audio = new Audio(musicPath);
    this.audio.play();
  },
  mounted(){
    this.isChk = false;
  },
  
  methods:{
    handlePopMsgBox(){
      this.$emit("click",true);
    },

    toggleMusic(){
      if(this.isChk)
      {
        console.log("끄기");
        this.audio.pause();
      }
      else
      {
        console.log("켜기");
        this.audio.play();
      }
      
    }
  }
};
</script>

<style lang="scss" scoped>


.right-fixed {
  display: flex;
  position: fixed;
  right: 0px;
  bottom: 20px;
  z-index: 100px;
  
}
.toggleSwitch {
  width: 35px;
  height: 20px;
  display: block;
  position: relative;
  border-radius: 13px;
  background-color: #fff;
  box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
  cursor: pointer;
  margin-top: 0px;
  margin-right: 10px;
}

.toggleSwitch .toggleButton {
  font-family: Arial;
  position:absolute;
  right: 0px;
  bottom: 18px;
  color: #666;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: #4BD865;
}

#toggle:checked ~ .toggleSwitch {
 background: #666;
}

#toggle:checked ~ .toggleSwitch .toggleButton {
  left: calc(100% - 17px);
  background: #fff;
  
}

.toggleSwitch, .toggleButton {
  transition: all 0.2s ease-in;
}


</style>
