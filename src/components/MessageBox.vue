<template>
  <div>
    <transition name="fade" appear>
      <div class="overlay" v-show="isOpen" @click="handleClose" />
    </transition>

    <transition name="slide" appear>
      <div class="bottom-sheet-container" v-show="isOpen">
        <div class="bottom-sheet">
          <div class="form-container">
            <div class="form-list" >
              <ul>
                <li v-for="(item,index) in messageList" :key="{index}">
                  {{item.name}} || {{item.message}}
                </li>
              </ul>
            </div>
            <div class="form-body">
              <input
                class="input name"
                type="text"
                placeholder="고마운 당신의 이름은?"
                v-model="senderName"
              />
              <textarea
                v-model="message"
                class="input message"
                type="textarea"
                placeholder="전하고 싶은 메시지를 남겨주세요."
              />
            </div>

          </div>

          <button
            :class="['button-bottom', { active: isValid }]"
            @click="handleClick"
          >
            메시지 남기기
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
//import firebase from "firebase";

export default {
  name: "BottomSheet",
  data() {
    return {
      senderName: null,
      message: null,
      messageList:[{name:"sadfas",message:"sdfasefsaefasef"}]
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
    present: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isValid() {
      return !!this.senderName && !!this.message;
    },
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleClick() {
      if (!this.isValid) {
        alert("이름과 메시지를 입력해주세요.");
        return;
      }

      const isConfirmed = confirm(
        `정말 ${this.present.name} 선물을 하시겠어요? 확인해주시면 선물 완료로 표시됩니다.`
      );

      if (!isConfirmed) {
        return;
      }

      // firebase
      //   .database()
      //   .ref("presents/" + this.present.id)
      //   .set(
      //     {
      //       ...this.present,
      //       isSoldout: true,
      //       senderName: this.senderName,
      //       message: this.message,
      //     },
      //     (error) => {
      //       if (error) {
      //         console.error(error.message);
      //         return;
      //       }

      //       this.copyAddress();
      //       window.open(this.present.link);
      //       this.handleClose();
      //       this.senderName = null;
      //       this.message = null;
      //     }
      //   );
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: all 0.28s ease-in-out;
}
.slide-leave-active {
  transition: all 0.28s ease-in-out;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}

.overlay {
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 999;
}

.bottom-sheet-container {
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  position: fixed;
  z-index: 999;
  margin-top: 50px;

  .bottom-sheet {
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: white;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .bottom-sheet-header {
      position: relative;
      width: 100%;
      height: 100vw;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      overflow: hidden;
      flex: 10 1;
      .image {
        width: 100%;
        object-fit: cover;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      .icon-close {
        position: absolute;
        right: 0;
        top: 0;
        padding: 16px;
      }
    }

    .form-container {
      display: flex;
      flex: 1 1 230px;
      flex-direction: column;
      padding: 16px 16px 8px 16px;
      // min-height: 280px;

      .form-header {
        display: flex;
        font-size: 18px;
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

      .form-body {
        padding-top: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 0 0 0;
        
        align-items: flex-end;
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 2px;
          border: solid 1px #999999;

          &.name {
            height: 43px;
            margin-bottom: 12px;
          }

          &.message {
            margin-bottom: 16px;
            height: 50px;
            min-height: 50px;
            vertical-align: to-upper-case($string: "");
            resize: none;
          }
        }

        .description {
          color: #999999;
          font-size: 12px;
        }
      }
    }

    .button-bottom {
      flex: 0 0 54px;
      cursor: default;
      width: 100%;
      margin-bottom: constant(safe-area-inset-bottom);
      margin-bottom: env(safe-area-inset-bottom);
      background-color: #eaeaea;
      color: #999999;
      &.active {
        cursor: pointer;
        background-color: #ffb22c;
        color: #202121;
      }
    }
  }
}
</style>
