<template>
  <div>
      <div class="bottom-sheet-container">
        
        <div class="bottom-sheet">
          <div class="form-container">
            <div class="form-title">
              축하 인사 전하기
            </div>
            <div class="form-body">
              <input
                class="input name"
                type="text"
                placeholder="고마운 당신의 이름은?"
                v-model="name"
                />
                <input
                class="input passwd"
                type="text"
                placeholder="비밀번호(숫자 4자리)"
                maxlength="4"
                v-model="passwd"
                />
              <textarea
                v-model="message"
                class="input message"
                type="textarea"
                placeholder="전하고 싶은 메시지를 남겨주세요."
              />
            </div>
            <div class="button-div">
              <button
              :class="['button-bottom', { active: isValid }]"
              @click="handleClick"
              >
              메시지 남기기
              </button>
            </div>
            <div class="form-list" >
              <ul>
                <li v-for="(item,index) in comments" :key="index">
                  <div class="list-card">
                    <div class="user-header">
                      <div class="user-id">{{item.name}}</div>
                      <a href class="coment-delete" @click.prevent="openPopup(item)">&times;</a>
                      <div class="write-date">{{item.date}}</div>
                    </div>
                    <span class="user-comment">{{item.message}}</span>
                  </div> 
                </li>
                <!--<infinite-loading v-if="hasMore" :identifier="infiniteId" @infinite="onScroll"></infinite-loading>-->
              </ul>
            </div>            
          </div>
          <div class="button-append-div">
              <button class="button-append-bottom" @click="readAppend()">더보기</button>
          </div>
          
          <div class="dim-layer" v-if="isModalOpen == true">
            <div class="dimBg"></div>
            <div class="passwd-popup">
              <a href @click.prevent="closePopup()">닫기</a>
              <div class="passwd-div">
                <div>
                  <input
                  class="input passwd"
                  type="text"
                  placeholder="비밀번호(숫자 4자리)"
                  maxlength="4"
                  v-model="chkpasswd"
                  />
                </div>
                <button class="button-delete" @click.prevent="deleteMessage()">확인</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {db} from "../firebaseconfig";
import {addDoc, collection, doc, getDocs,deleteDoc, onSnapshot,query, orderBy, limit, startAfter} from "firebase/firestore";
import InfiniteLoading from 'vue-infinite-loading';
//import bcrypt from 'bcrypt'

const commentsCollectionRef = collection(db, "comments");

// const docRef = doc(db, "cities", "SF");
// /* cities라는 문서에 SF라는 필드의 주소값을 담기 */
// const docSnap = await getDoc(docRef);
// /* SF라는 필드의 데이터를 담기 */

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }

export default {
  name: "MessageBox",
  components:{
    InfiniteLoading,
  },
  data() {
    return {
      // hasMore: this.comments.length > 0 ? true : false,
      // infiniteId: +new Date(),
      // page: this.$route.query.page,
      newMessage:{
        name: "",
        comment: "",
        date: "",
        passwd:"",
      },
      name :"",
      message:"",
      date:"",
      passwd:"",
      comments:[],
      cur_comment:{},
      chkpasswd:"",
      isModalOpen:false,
      lastVisible:0
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
      return !!this.name && !!this.message && !!this.passwd;
    },
  },
  watch:{
		chkpasswd : function(){
			return this.chkpasswd = this.chkpasswd.replace(/[^0-9]/g, '');  //정규식 사용
		},
    passwd : function(){
      return this.passwd = this.passwd.replace(/[^0-9]/g, '');  //정규식 사용
    }
	},
  mounted() {
    this.readMessage(); 
  },
  created(){

    // const unsubscribe = onSnapshot(collection(db, "comments"), (snapshot) => {
    //   snapshot
    //   this.readMessage();
    // });
    


    // collection('comments').onSnapshot((snapshotChange) => {
    //   this.comments = [];
    //   snapshotChange.forEach((doc) => {
    //     this.comments.push({
    //       key: doc.id,
    //       name : doc.data().name,
    //       message: doc.data().message,
    //       date: doc.data().date
    //     })
    //   })
    // })
  },

  methods: {
    
    passwdchk(event){
      const val = event.target.value;
      console.log(val);
      if(val.length > 4){
        alert("비밀번호는 4자리만 허용합니다.");
        return false;
      }

      if(event.target.key === '.' 
     || event.target.key === '-'
     || event.target.key >= 0 && event.target.key <= 9) {
        return true;
      }
      else{
        alert("숫자만 입력 가능합니다.");
        return false;
      }

    }
    ,
    async readAppend(){
      // Get the last visible document

      const q = query(commentsCollectionRef,
        orderBy("date","desc"),
        startAfter(this.lastVisible),
        limit(5)
        );

      const documentSnapshots = await getDocs(q);

      const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
      console.log("last", lastVisible);
      this.lastVisible = lastVisible;
      
      documentSnapshots.forEach((doc) => {
      let dateObj = doc.data().date.toDate()
      let newComment = {
        id:"",
        name:"",
        message:"",
        date:""
      }
      console.log("cur comment >> " + this.comments.length);
      newComment.id       = doc.id;
      newComment.name     = doc.data().name;
      newComment.message  = doc.data().message;
      newComment.date     = this.getWriteDate(dateObj);
      newComment.passwd     = doc.data().passwd;
      //console.log(`ID : ${newComment.id} 이름 : ${newComment.name}  메시지 : ${newComment.message} 날짜 : ${newComment.date} 비밀번호 : ${newComment.passwd}`);
      this.comments.push(newComment);
      });
    },

    readMessage(){
      const q = query(commentsCollectionRef,orderBy("date","desc"),limit(5));
      
      onSnapshot(q, (querySnapshot) => {
        this.comments = [];  
        
        this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        console.log("lastVisible >>> " + this.lastVisible);
        querySnapshot.forEach((doc) => {
        
        let dateObj = doc.data().date.toDate();
        
        let newComment = {
          id:"",
          name:"",
          message:"",
          date:""
        }

        newComment.id       = doc.id;
        newComment.name     = doc.data().name;
        newComment.message  = doc.data().message;
        newComment.date     = this.getWriteDate(dateObj);
        newComment.passwd     = doc.data().passwd;
        console.log(`ID : ${newComment.id} 이름 : ${newComment.name}  메시지 : ${newComment.message} 날짜 : ${newComment.date} 비밀번호 : ${newComment.passwd}`);
        this.comments.push(newComment);
        });
      });
     },

    passwdValidate(){

    }
    // ,
    // async crypt(plainText){
    //   return bcrypt.hash(plainText,10);
    // }
    ,
    async addMessage(comment){
      try {
        alert("축하해 주셔서 감사합니다!");

        this.name = "";
        this.message = "";
        this.date = "";
        this.passwd = "";

        const ref = await addDoc(commentsCollectionRef,comment);
        console.log(ref);
        
        
        this.readMessage();
      } catch (e) {
        console.log(e);
      }
     },
     
    async deleteMessage(){

      const id = this.cur_comment.id;
      const passwd = this.cur_comment.passwd;

      if(this.isNull(this.chkpasswd))
      {
        alert("비밀번호가 입력되지 않았습니다.");
        return;
      }

      if(this.chkpasswd.length != 4)
      {
        alert("비밀번호는 4자리만 가능합니다.");
        return;
      }

      if(passwd == this.chkpasswd){
        if(window.confirm("정말로 삭제하시겠습니까?")){
        this.closePopup();
        await deleteDoc(doc(commentsCollectionRef,id));
        }
      }
      else{
        alert("비밀번호가 올바르지 않습니다.");
        return false;
      }
    },
    openPopup(item){
      this.isModalOpen = true;
      console.log("this.isModalOpen >>> " + this.isModalOpen)
      this.cur_comment = {
        id:item.id,
        name:item.name,
        message:item.message,
        passwd:item.passwd
      }
      this.cur_comment = item;
    }
    ,
    closePopup(){
      this.isModalOpen = false;
      this.cur_comment = {};
      this.chkpasswd = "";
    }
    ,
    writeMessage(comment) {
      //this.messageList.push(this.newComment);
      db.collection('comments').add(comment).then(() => {
        alert("메시지가 성공적으로 입력됨");
        this.name = "";
        this.message = "";
        this.date = "";
      })
      .catch((error) => {
        console.log(error);
      })
      this.newComment = {}; 
    },

    getWriteDate(psDate){
      
      let date;
      if(psDate == undefined || psDate == null || psDate == ""){
        date = new Date();
      }else{
        date = psDate;
      }
      console.log(date)
      const year = date.getFullYear();
      const month =
        date.getMonth() + 1 > 10
          ? date.getMonth() + 1
          : `0${date.getMonth() + 1}`;
      const day = date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`;
      return `${year}-${month}-${day}`;
    },

    checkByte(e) {
      if (e.target.value.length <= this.maxComent) {
        this.coment = e.target.value;
        this.wordCount = e.target.value.length;
      } else e.target.value = this.coment;
    },

    handleClose() {
      this.$emit("close");
    },
    isNull(psVal)
    {
      if(psVal == undefined || psVal == "" || psVal.length == 0){
        return true;
      }
      return false;
    }
    ,

    handleClick() {
      if (this.isNull(this.name)){
        alert("이름를 입력해주세요.");
        return false;
      }

      if (this.isNull(this.message)){
        alert("메시지를 입력해주세요.");
        return false;
      }

      if(this.message.length >= 40){
        alert("메시지는 40자리 까지만 가능합니다.");
        return false;
      }

      if (this.isNull(this.passwd)){
        alert("비밀번호를 입력해주세요.");
        return false;
      }
      
      if(this.passwd.length != 4){
        alert("비밀번호는 4자리만 가능합니다.");
        return false;
      }

      let comment = {
        name: "",
        message:"",
        date:"",
        passwd:""
      };

      comment.name    = this.name;
      comment.message = this.message;
      comment.date    = new Date();//this.getWriteDate();
      comment.passwd  = this.passwd;

      // console.log("comment name    >>>> " + comment.name   );
      // console.log("comment message >>>> " + comment.message);
      // console.log("comment date    >>>> " + comment.date   );

      this.addMessage(comment);
     
    },
  },
};
</script>

<style lang="scss" scoped>

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
  //position: fixed;
  //z-index: 999;
  margin-top: 50px;
  background-color: #F6F6F6;

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

    .form-title{
        font-family  : 'SeoulHangangM';  
        font-size: 14px;
        font-weight: bold;
        padding-top: 10px;
        padding-bottom: 10px;
        color: #AB8065;
        text-align: center;
    }
    .form-container {
      display: flex;
      flex: 1 1 230px;
      flex-direction: column;
      padding: 16px 16px 8px 16px;
      background-color: #faf9f9;
      .form-header {
        display: flex;
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
      .form-list{
        padding-top: 30px;
        padding-left: 20px;
        padding-right: 20px;
      
        .user-header{  
          
          align-items: center;
          padding-left: 0px;
          padding-right: 0px;
          font-family  : 'SeoulHangangM';
          font-size    : 14px;
          
          .user-id {
            display: inline-block;
            font-size: 14px;
            margin: 10px 10px 10px 10px;
            width: 200px;
            color:#4a3737
          }

          .write-date {
            margin-left: 10px;
            font-size: 6px;
            //transform: translate(0%, 70%);
          }

          .coment-delete {
            position: absolute;
            right:20px;
            margin-right: 30px;
            margin-top: 5px;
            font-size: 24px;
            text-decoration: none;
            color: #333;
            //transform: translate(-20%, -60%);
          }
        }
        .list-card{
          background-color: #faf2f2;
          margin-top : 10px;
          margin-bottom : 10px;
          padding-top:10px;
          padding-left:10px;
          padding-right:10px;
          height:100px;
        }
        .user-comment {
          display: block;
          margin-bottom: 10px;
          //border-bottom: 1px solid #c1bcba;
          padding: 10px;
          //font-weight: 700;
          box-sizing: border-box;
          font-family  : 'WandohopeR';
          font-size    : 12px;
        }

      }
      .form-body {
        padding-top: 24px;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 0 0 0;
        align-items: flex-end;
        .input {

          padding-left: 20px;
          padding-right: 20px;
          border-radius: 2px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;

          background-color: #faf9f9;
          border-bottom: 1px solid #c1bcba;
          box-sizing: border-box;
          &.name {
            width: 100%;
            height: 25px;
            display: inline-block;
            margin-bottom: 12px;
          }
          &.passwd {
            display: inline-block;
            height: 25px;
            margin-bottom: 12px;
            -webkit-text-security: disc;    
            width: 100%;
          }

          &.message {
            width: 100%;
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

    .button-div{
      padding-left: 20px;
      padding-right: 20px;
      .button-bottom {
        flex: 0 0 54px;
        cursor: default;
        font-family  : 'SeoulHangangM';
        font-size    : 18px;
        width: 100%;
        height:45px;
        margin-bottom: constant(safe-area-inset-bottom);
        margin-bottom: env(safe-area-inset-bottom);
        
        background-color: #8f8f8f;
          color: #ffffff;
        &.active {
          cursor: pointer;
          background-color: #013257;
        color: #e9e8e8;
        }
      }
    }

    .button-append-div{
      padding-left: 20px;
      padding-right: 20px;
      margin-bottom: 20px;
      .button-append-bottom {
        flex: 0 0 54px;
        cursor: default;
        font-family  : 'SeoulHangangM';
        font-size    : 18px;
        width: 100%;
        height:45px;
        margin-bottom: constant(safe-area-inset-bottom);
        margin-bottom: env(safe-area-inset-bottom);
        
        background-color: #fbe7e7;
          color: #4a3737;
      }
    }
    .passwd-div{
      
      padding-top: 20px;
      
      .input {
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 2px;
        border: solid 1px #999999;
        &.passwd {
          display: inline-block;
          width: 100%;
          height: 43px;
          margin-bottom: 12px;
          -webkit-text-security: disc;    
        }
      }
    }

    .button-delete{
      padding-left: 20px;
      padding-right: 20px;
      
      flex: 0 0 54px;
      cursor: default;
      font-family  : 'SeoulHangangM';
      font-size    : 24px;
      width: 100%;
      height:45px;
      margin-bottom: constant(safe-area-inset-bottom);
      margin-bottom: env(safe-area-inset-bottom);
      background-color: #004fa4;
      color: #ffffff;
    }
    .dim-layer {
  position: fixed;
  _position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

.dim-layer .dimBg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: .5;
  filter: alpha(opacity=50);
}
    .passwd-popup{
      width:300px;
      height:200px;
      background: white;
      border-radius: 5px;
      padding:20px;
      //box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
      transform: translate(-50%, -50%);
      position : fixed;
      top:50%;
      left:50%;
      box-sizing: border-box;
      
      text-align: right;
      a {
        color:grey;
        text-decoration: none;
      }
    }
    
  }
}
</style>
