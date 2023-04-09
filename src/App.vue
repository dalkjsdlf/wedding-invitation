<template>
  <div id="app">
    <FlowerRain />
    <Intro />
    <MainContents/>
    <!-- <AccountButton @click="openAccountPop"/> -->
    <AccountBox
    :is-open="isAccountOpen"
    @close="closeAccountPop"
    v-scroll-lock="isAccountOpen"/>
    <WdDivider />
    
    <Gallery />
    <WdDivider />
    <Location />
    <!-- <WdDivider /> -->
    <BusLocation/>
    <div style="display: none">
    </div>
    
    <!-- <MessageButton @click="handleClick"/> -->
    <!-- <MessageBox
    :is-open="isOpen"
    @close="handleClose"
    v-scroll-lock="isOpen"
    /> -->

    <MessageBox>
    </MessageBox>
    <!-- <div>    
      <audio autoplay>
        <source src="./assets/100days_memory.mp3">
      </audio>
    </div> -->
    <Credit></Credit>
  </div>
  
</template>

<script>
import FlowerRain from "./components/FlowerRain.vue";
import Intro from "./components/Intro.vue";
import MainContents from "./components/MainContents.vue";
import MessageButton from "./components/MessageButton.vue";
import WdDivider from './components/WdDivider.vue';
import Gallery from "./components/Gallery.vue";
import AccountButton from "./components/AccountButton.vue";
import AccountBox from "./components/AccountBox.vue";
import Location from "./components/Location.vue";

import MessageBox from "./components/MessageBox.vue";
import BusLocation from "./components/BusLocation.vue";
import Credit from "./components/Credit.vue";
//import firebase from "firebase/app";
//import Funding from "./components/Funding.vue";
//import Celebrate from "./components/Celebrate.vue";

export default { 
  name: 'App',
  components: {
    WdDivider,
    Intro,
    MainContents,
    Gallery,
    AccountBox,
    AccountButton,
    MessageBox,
    
    FlowerRain,
    Location,
    BusLocation,
    MessageButton,
    Credit
},

data() {
    return {
      isOpen: false,
      isAccountOpen:false,
      presents: [],
      selectedPresent: {},
    };
  },
  created() {
   // this.loadPresents();
  },
  methods: {
    // loadPresents() {
    //   const presentsRef = firebase.database().ref("presents");
    //   presentsRef.on("value", (snapshot) => {
    //     const presents = snapshot.val();
    //     this.presents = presents.map((present, index) => {
    //       return {
    //         ...present,
    //         id: index,
    //       };
    //     });
    //   });
    // },
    openAccountPop()
    {
      this.isAccountOpen = true;
    },
    closeAccountPop()
    {
      this.isAccountOpen = false;
    }
    ,
    // handleClick(present) {
    //   this.isOpen = true;
    //   this.selectedPresent = present;
    // },
    handleClose() {
      this.isOpen = false;
    },
  },
}
</script>

<style>
@font-face {
  /*font-family: "Cafe24Oneprettynight";
 src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff")
    format("woff");*/

    font-family: 'WandohopeR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/WandohopeR.woff') format('woff');
    font-weight: normal;
    font-style: normal;


}
@font-face {
    font-family: 'SeoulHangangM';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/SeoulHangangM.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
button {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  font: inherit;
}
* {
  box-sizing: border-box;
}
#kyong {
  font-family: "Cafe24Oneprettynight", sans-serif;
  max-width: 460px;
  margin: 0 auto;
  font-size: 15px;
  color: #202121;
  background-color: #fffdf9;
}


</style>
