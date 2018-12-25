<template>
<div class="appWrapper">
  <StandingsFilter/>
  <div v-if="!loggedIn">
    <div class="pleaseLogin">
      <div class="welcomeMessage">
        <p class="chatWelcomeText">Welcome to the chat application. Please Login with a Google account to continue.</p>
        <hr>
        <div class="buttonWrapper">
          <button v-on:click="login()" class="btn btn-info"> Login </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="chatArea">
      <div class="spacerTop" />
      <div class="logoutButton">
        <button v-on:click="logout()" class="btn btn-warning"> Logout </button> </div>
      <div class="chatBox">
        <div v-for="(msg, index) in messages" :key="index" class="chatBlockContainer">
          <div class="chatBlock" v-bind:class="{
             chatBlockUser: userMessage(msg.name)}">
            <p class="chatName">{{msg.name}} : </p>
            <p class="chatBody">{{msg.body}}</p>
            <p class="chatDate">{{msg.date}}</p>
          </div>
        </div>
        <div class="spacerBottom" />
      </div>
      <div class="messageArea">
        <input type="text" v-model="msg" class="textArea">
        <button v-on:click="writeNewPost()" class="btn btn-secondary">Send</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import StandingsFilter from "@/components/StandingsFilter.vue";
export default {
  name: "home",
  components: {StandingsFilter},
  data() {
    return {
      msg: "",
      user: null,
      messages: [],
      loggedIn: false,
    };
  },
  methods: {
    login() {
      console.log("in login");
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          var token = result.credential.accessToken;
          var user = result.user;
          this.user = user;
          console.log(user);
          console.log(user.displayName);
          console.log(user.email);
          this.loggedIn = true
          this.getPosts()
        })
        .catch(function (error) {
          alert("error" + error.message);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Sign-out successful.");
          this.loggedIn = false;
        })
        .catch(function (error) {
          alert("alert logout");
        });
    },

    writeNewPost() {
      console.log(this.user.displayName);
      console.log(this.msg);
      if($.trim(this.msg) == "")
      {console.log("Text is empty");
      alert("Please write message in chat box, unable to send empty messages")}
      else
      {console.log("Text is not empty")
      const post = {
        name: this.user.displayName,
        body: this.msg,
        date: new Date().toLocaleString("en-US")
      };
      const newPostKey = firebase
        .database()
        .ref()
        .child("mainChat")
        .push().key;
      const updates = {};
      updates[newPostKey] = post;
      firebase
        .database()
        .ref("mainChat")
        .update(updates);
      this.msg = null;
      this.getPosts();
    }},

    getPosts() {
      firebase
        .database()
        .ref("mainChat")
        .on("value", data => {
          this.messages = data.val();
        });
    },
    userMessage(name) {
      return this.user.displayName !== name
    }
  }
};
</script><style scoped>

.chatWelcomeText {
  margin: 10px;
}

.logoutButton {
  position: fixed;
  top: 8px;
  right: 10px;
}

.spacerBottom {
  height: 95px;
  width: 100vw;
}

.spacerTop {
  height: 80px;
  width: 100vw;
}

.chatArea {
  width: 100vw;
  height: 100vh;
}


.textArea {
  height: 37px;
  width: 280px;
  background-color: rgb(255, 255, 255);
  border-style: solid;
  border-color: black;
  border-width: 1px
}

.messageArea {
  display: flex;
  align-items: center;
  bottom: 55px;
  position: fixed;
  height: 41px;
  width: 100vw;
  z-index: 2;
  margin: 5px;
  justify-content: center
}

.chatBody {
  word-wrap: break-word;
}
.chatName {
  color: rgb(56, 56, 56);
  font-size: 1.5em;
  word-wrap: break-word;
}

chatDate {
  font-size: 0.1em;
  bottom: 5px;
  text-align: right
}

.chatBlock {
  border: 2px;
  margin: 5px;
  padding: 5px;
  background-color: rgba(213, 213, 255, 0.698)
}

.chatBlockContainer {

  background-color: rgba(213, 213, 255, 0)
}

.chatBlockUser {
  border: 2px;
  margin: 5px;
  padding: 5px;
  background-color: rgba(255, 213, 213, 0.698)
}


.buttonWrapper {
  width: 100%;
  left: 500px;
}

.welcomeMessage {
  display: flex;
  border-radius: 20px 20px 20px 20px;
  justify-content: center;
  color: aliceblue;
  background-color: rgba(0, 0, 0, 0.527);
  height: 150px;
  width: 280px;
  padding: 15px;
  flex-direction: column;
  z-index: -1
  
}

.pleaseLogin {
  display: flex;
  position: fixed;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

}

.chatBox {
  height: calc("100vh - 20px");
  width: 100vw;
  background-color: rgba(240, 248, 255, 0);
  padding: 2px;
}

.btn {
  height: 35px;
}

.container {
  position: fixed;
  width: 100%;
  height: 93%;
  left: 0px;
  top: 50px;
  display: flex;
}

.appWrapper {
  top: 10px;
  width: 100%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.btn-danger {
  float: right
}
</style>