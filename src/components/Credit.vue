<template>
  <div class="credit">
    <h3 class="h2">
      만든 사람들
    </h3>
      <div class="profile-list">
        <div class="profile">
          <div class="thumbnail ssoo"></div>
          <div class="name">김유경</div>
          <div class="role">디자인</div>
        </div>
        <div class="profile">
          <div class="thumbnail dorris"></div>
          <div class="name">최연호</div>
          <div class="role">개발</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "WdCredit",
};
</script>

<style lang="scss" scoped>
.credit {
  padding-top: 24px;
  padding-bottom: 80px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #202121;
  background-color: #f0f1f1;
  .h2 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 38px;
    color: #295238;
  }
  .profile-list {
    display: flex;
    justify-content: center;
    width: 264px;
    margin: 0 auto;
    flex-wrap: wrap;
    margin-bottom: 14px;
    .profile {
      padding: 0 20px 24px 20px;
      a {
        color: inherit;
        text-decoration: none;
      }
      .thumbnail {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: black;
        margin-bottom: 6px;
        margin-right:1px;
        margin-left:1px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
         &.ssoo {
           background-image: url(/public/img/credit/ssoo.jpg);
         }
         &.dorris { 
           background-image: url(/public/img/credit/dorris.jpg);
         }
        // &.jane {
        //   background-image: url(/wedding/img/credit/jane.jpg);
        // }
        // &.anna {
        //   background-image: url(/wedding/img/credit/anna.jpg);
        // }
        // &.chichi {
        //   background-image: url(/wedding/img/credit/chichi.jpg);
        // }
        // &.brown {
        //   background-image: url(/wedding/img/credit/brown.jpg);
        // }
      }
      .name {
        font-size: 14px;
        margin-bottom: 3px;
      }
      .role {
        font-size: 10px;
        line-height: 1.6;
      }
    }
  }
  .description {
    font-size: 12px;
    margin-bottom: 16px;
    color: #295238;
  }
  .recruit {
    display: block;
    width: 184px;
    height: 44px;
    line-height: 44px;
    background-color: #ffb22c;
    color: #202121;
    text-decoration: none;
    font-size: 16px;
    margin: 0 auto;
  }
  .link {
    display: inline-block;
    margin-top: 24px;
    color: #295238;
  }
}
</style>
