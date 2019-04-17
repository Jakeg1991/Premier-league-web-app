// THIS FILE IS THE ROOT COMPONENT- ALL SUBCOMPONENTS ARE NESTED WITHIN 

<template>
<v-app>
  <div class="body">
        <router-view />
        <navBar/>
  </div>
  </v-app>
</template>

<script>
import navBar from '@/components/navBar.vue';
export default {
  name: 'app',
  components: {
    navBar
  }
}
</script>


<style>

.spacerBottom {
  width: 100%;
  height:50px;
}
.spacerTop {
  width: 100%;
  height:47px;
}

.body {
  width: 100vw;
  height: 100vh;
  display: flex;
  max-width: 100%;
  overflow-x: hidden;
  background-color: rgba(211, 211, 211, 0.699);
  background-image: url("../src/assets/premierLeagueLogo.png"),url("../src/assets/background.jpg");
  background-position:center; 
  background-repeat:no-repeat;
  background-size: 80%, cover;

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
