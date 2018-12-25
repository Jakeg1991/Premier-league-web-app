// THIS FILE IS THE ROOT COMPONENT- ALL SUBCOMPONENTS ARE NESTED WITHIN 

<template>
<v-app>
  <div class="body">
        <router-view />
        <div class="fixed">
        <NavBar/>
        </div>
  </div>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>


<style>
.spacerBottom {
  width: 100%;
  height:65px;
}
.spacerTop {
  width: 100%;
  height:52px;
}

.spinContainer {
  position:relative;
  width: 100vw;
  top: 20%;
}

.spin {
  display: block;
  margin-left: 25vw;
  margin-top: 25vw;
  width: 50%;
}

.body {
  width: 100vw;
  height: 100vh;
  display: flex;
  max-width: 100%;
  overflow-x: hidden;
  background-color: rgba(211, 211, 211, 0.699);
  background-image: url("../src/assets/premierLeagueLogo.png");
  background-position: center; 
  background-size: 80%;

}

.fixed {
  position: fixed;
  bottom: 0px;
  width: 100vw;

}
.upper {
display: flex;
top: -13px;
left: 0px;
position: fixed;
width:100vw; 
position:fixed;
display: flex;
height: 7px;
z-index: 1;
border-width: 1px;
border-style: dotted;
}
</style>
