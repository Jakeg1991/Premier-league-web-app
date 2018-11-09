// THIS FILE IS THE ROOT COMPONENT- ALL SUBCOMPONENTS ARE NESTED WITHIN 

<template>
  <div class="body">
    <div class="row, navbar">

      <router-link to="/">Matches</router-link> |
      <router-link to="/table">Table</router-link> |
      <router-link to="/chatLogin">Chat</router-link>
      <router-view />

    </div>

  </div>
</template>

<style>.logo {
  width: 100%
}

.body {
  background-color: blueviolet;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.navbar {
  background-color: aliceblue;
  height: 7vh;
}

.appContainer {
 background-color: rgb(109, 54, 160);
  height: 78vh;
  padding: 10px
}

.appPlaceholder {
  background-color: rgba(0, 255, 255, 0.219);
  height: 100%;
  width: 100%;

}

.footer {
  background-color: rgb(109, 54, 160);
  height: 15vh;
}

@media (orientation:landscape) {
  .footer {
    display: none;
  }

  .appContainer {
    height: 90vh;
  }

  .navbar {
    height: 10vh;
  }
}
</style>
