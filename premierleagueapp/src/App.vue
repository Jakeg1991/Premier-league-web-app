<template>
  <!-- <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </div> -->
<div class="body">
  <div class="row, navbar">
    <div class="col-4">Matches</div>
    <div class="col-4">Table</div>
    <div class="col-4">Chat</div>
  </div>
  <div class="appContainer">
    <div class="appPlaceholder">
      <p>VUE APP GOES HERE</p>
    </div>
  </div>
  <div class="footer">
    <div class="row">
    <div class="col-3"></div>
    <div class="col-6"><img src="./assets/premierLeagueLogo.png" alt="Premier League Logo" class="logo"></div>
    <div class="col-3"></div>
    </div>
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
