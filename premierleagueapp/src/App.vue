// THIS FILE IS THE ROOT COMPONENT- ALL SUBCOMPONENTS ARE NESTED WITHIN 

<template>
  <div class="body">
    <div class="row navbar">

      <router-link to="/">Matches</router-link> |
      <router-link to="/table">Table</router-link> |
      <router-link to="/chatLogin">Chat</router-link>
      

    </div>
    <router-view />
  </div>
</template>

<style>
.appBox {
  border-style: dotted;
  border-width: 2px;
  width: 100%;
  height: 100%;}

.logo {
  width: 100%}

.body {
  background-color: blueviolet;
  background-image: url('/assets/premierLeagueLogo.png');
  width: 100vw;
  height: 100vh;
  overflow: hidden;}

.navbar {
  background-color: aliceblue;
  height: 7vh;
}


.footer {
  background-color: rgb(109, 54, 160);
  height: 15vh;
}

@media (orientation:landscape) {
.container {
  height: 100%;
  width: 100%
}
  .appContainer {
    height: 90vh;
  }

  .navbar {
    height: 10vh;
  }
}
</style>
