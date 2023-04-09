<template>
  <div class="live">
      <div>
      <p class="header2">
        百&nbsp; 年&nbsp; 佳&nbsp; 約 <br/>
        백 | 년 | 가 | 약

      </p>
      <p class = "header3">
        백 년을 두고 하는 아름다운 언약
      </p>

      <br/>   
      <br/>
      </div>
      <div>
      <p class = "contents">
        <!--곁에 있을 때<br />-->가장 나다운 모습이 되게 하는 한 사람<br />
        <!--꿈을 펼칠 수 있도록 <br />-->서로에게 날개가 되어줄 한 사람<br />
        그 사람과 아름다운 삶의 여행을<br /> 함께 시작하려 합니다.<br />
        저희 여행의 출발점에 여러분을 초대하오니<br />
        오셔서 많이 축복해 주시면 큰 기쁨이겠습니다.
      </p>
      <br>
    </div>
    <Button class="btn_live" @click="attendance">라이브로 참석하기</Button>
  </div>
</template>

<script>
export default {
  name: "WdLive",
  methods: {
    attendance() {
    const today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let hour = today.getHours(); // 시간
    if(year == "2023" 
    && month == "5" 
    && date  == "20"
    && hour == "3"){

      window.open("https://youtu.be/iRM888aIHCs");
    }
    else{
      alert("5월 20일 혼례식 당일 접속 가능합니다.");
    }
    },
  },
};
</script>

<style lang="scss" scoped>
.live {
  padding-top: 20px;
  padding-bottom: 68px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  background-color: #FEF7EF;
  max-height: 680px;
  text-align: center;
  .hands {
    width: 75px;
    margin-bottom: 16px;
  }
  .btn_live{
    font-family  : 'WandohopeR';
    margin-top: 50px;
    font-size    : 20px;
    font-weight: normal;
    height:50px;
    width:80%;
    margin-bottom: 24px;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #8e6a54;
    background-color: #f5e5d6;
    border-radius: 20px 20px 20px;
  }

  p {
    font-family: 'WandohopeR';
    font-weight: normal;
    font-style: normal;

    /*font-family: 'Gaegu', cursive;*/
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 24px;
    &.desc {
      color: #295238;
      opacity: 0.6;
      margin-bottom: 36px;
    }
    &.header {
      font-size: 35px;
      font-weight: bold;
      padding-top: 20px;
      line-height: 1.5em;
      color: #AB8065;
    }

    &.header2 {
      font-size: 18px;
      font-weight: bold;
      padding-top: 10px;
      color: #AB8065;
    }
    &.header3 {
      font-size: 17px;
      //font-weight: bold;
      padding-top: px;
      color: #AB8065;
    }
    &.contents {
      font-size: 14px;
      //padding-top: 30px;
      line-height: 2.2em;
      //display: block;
      //white-space : nowrap; 
      //word-break : nowrap;
      color: #404040;
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
