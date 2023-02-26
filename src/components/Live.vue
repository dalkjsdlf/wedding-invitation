<template>
  <div class="live">
    <!--
    <p class = "desc">
      위 애니메이션은 꼭 소리를 켜고 봐주세요!
    </p>
    
      <img src="~@/assets/images/hands.png" class="hands" />
    -->
      <div>
        <p class = "header">
          23년 5월 20일 토요일<br />
        </p>
        <p class = "header">
          오후 3시<br />
        </p>
        <p class = "header2">
          롯데월드 전통혼례장<br />
        </p>

        <br/>
        
      <p class = "header2">
        백년가약<br />
        백 년을 두고 하는 아름다운 언약
      </p>

      <br/>   
      <br/>
      </div>
      <div>
      <p>
        곁에 있을 때 가장 나다운 모습이 되게 하는 한 사람<br />
        꿈을 펼칠 수 있도록 서로에게 날개가 되어줄 한 사람<br />
        그 사람과 아름다운 삶의 여행을 함께 시작하려 합니다.<br />
        저희 여행의 출발점에 여러분을 초대하오니<br />
        오셔서 많이 축복해 주시면 큰 기쁨이겠습니다.
      </p>
      <br>
      
   

    </div>
    <Button @click="attendance">라이브로 참석하기</Button>
  </div>
</template>

<script>
export default {
  name: "WdLive",
  methods: {
    attendance() {
      window.open("https://youtu.be/yU9UULnBt0w");
    },
  },
};
</script>

<style lang="scss" scoped>
.live {
  padding-top: 4px;
  padding-bottom: 68px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  .hands {
    width: 75px;
    margin-bottom: 16px;
  }
  p {
    font-family: 'Gaegu', cursive;
    font-size: 20px;
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
      color: #000000;
    }

    &.header2 {
      font-size: 24px;
      font-weight: bold;
      color: #000000;
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
