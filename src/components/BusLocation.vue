<template>
  <div class="map">
    <div>
      <p class="header">전세버스 타는 곳</p>
      <p class="header2">멀리서 오시는 분들을 위해<br> 전세버스를 준비했습니다.</p>
      <!-- <p class="description">
       타는 장소: 마산역 성산빌딩 앞 <br/>(구 아리랑호텔)<br/>
       출발 시간: 오전 8시<br/>
       차량 번호: 경남 76바 1266
      </p> -->
      <br><br>
      <p class="description"><span style="text-decoration: underline;">마산역</span> 성산빌딩 앞 (구 아리랑호텔) <br><span style="text-decoration: underline;">오전 8시 출발</span><br>경남 76바 1266</p>
     
    </div>

    <div class="map-container" ref="gal">
      <vue-daum-map
          :appKey="appKey"
          :center.sync="center"
          :level.sync="level"
          :mapTypeId="mapTypeId"
          :libraries="libraries"
          @load="onLoad"
          style="height:240px;"/>
    </div>
    <div class="cover">
      <div class="navi-apps">
        <a v-bind:href="tmapUrl">
          <div class="ico_comm ico_tmap"><img src="~@/assets/images/icons/tmap.png"/></div>
          <div class="link">T맵</div>
        </a>
      </div>
      <div class="navi-apps">
        <a v-bind:href="kakaoTaxiUrl">
          <div class="ico_comm ico_taxi"><img src="~@/assets/images/icons/kakaot.png"/></div>
          <div class="link">카카오택시</div>
        </a>
      </div>
      <div class="navi-apps">
        <a v-bind:href="navermapUrl">
          <div class="ico_comm ico_navermap"><img src="~@/assets/images/icons/navermap.png"/></div>
          <div class="link">네이버맵</div>
        </a>
      </div>
      <div class="navi-apps">
        <a v-bind:href="kakaomapUrl">
          <div class="ico_comm ico_kakaomap"><img src="~@/assets/images/icons/kakaomap.png"/></div>
          <div class="link">카카오맵</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import VueDaumMap from 'vue-daum-map'

export default {
  name: "WdMap",
  components: {VueDaumMap},
  data() {
    return {
      scrollX: 0,
      width: 320,
      appKey: '91264db4f7c373850f2fb2a84ca8f496', // 테스트용 appkey
      center: {lat: 35.234651607715094, lng: 128.57771537571222}, // 지도의 중심 좌표
      level: 3, // 지도의 레벨(확대, 축소 정도),
      mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
      libraries: ["drawing"], // 추가로 불러올 라이브러리
      map: null, // 지도 객체. 지도가 로드되면 할당됨.
      daum: null, // 다음 API 객체. 지도가 로드되면 할당됨.
      //////////////
      tmapUrl: "",
      kakaoTaxiUrl: "",
      navermapUrl: "",
      kakaomapUrl: ""
    };
  },
  mounted() {
    this.makeUrls()
  },
  methods: {
    // 지도가 로드 완료되면 load 이벤트 발생
    onLoad(map, daum) {
      this.map = map;
      this.daum = daum;

      // 지도를 클릭한 위치에 표출할 마커입니다
      var marker = new kakao.maps.Marker({
        // 지도 중심좌표에 마커를 생성합니다
        
        position: map.getCenter()
      });
      // 지도에 마커를 표시합니다
      marker.setMap(map);
    },
    makeUrls() {
      // 장소데이터의 이름정보 불러온 뒤
      const locationName = "마산역"
      this.tmapUrl = "tmap://search?name=" + locationName
      this.kakaoTaxiUrl = "https://t.kakao.com/launch?type=taxi&amp;dest_lat=37.49878007763176&amp;dest_lng=127.03170076652506&amp;ref=localweb"
      this.navermapUrl = "nmap://search?query=" + locationName + "&appname=kimyoon21.github.io/wedding"
      this.kakaomapUrl = "kakaomap://search?q=" + locationName
    }
  }
};
</script>

<style lang="scss" scoped>

.map {
  margin-top: 18px;
  margin-bottom: 18px;
}

.navi-apps {
  align-content: center;
  position: relative;

  .ico_comm img {
    vertical-align: middle;
    width: 40px
  }

  div {
    text-align: center;
    padding-top: 10px;
  }

  a{
    text-decoration: none;
  }
}

.cover {
  display: flex;
  justify-content: space-between;
  margin: 22px 10% 22px 10%;
}

.link {
  color: #295238;
}

.map {
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  .hands {
    width: 75px;
    margin-bottom: 16px;
  }
  p {
    font-family: 'WandohopeR';
    font-size: 20px;
    margin-bottom: 16px;
    line-height: 24px;
    &.desc {
      color: #295238;
      opacity: 0.6;
      margin-bottom: 36px;
    }

    &.header {
      font-size: 16px;
      font-weight: bold;
      color: #295238;
    }

    &.header2 {
      font-size: 14px;
      padding-top: 5px;
      color: #000000;
      
    }

    &.description {
      font-size: 14px;
      padding-top: 10px;    
      color: #000000;
      line-height: 1.6em;
      text-align: left;
    }

    &.h{
      font-size: 20px;
      font-weight: 500;
      color: #000000;
    }

    &:last-child {
      margin-bottom: 40px;
    }
  }
}
</style>
