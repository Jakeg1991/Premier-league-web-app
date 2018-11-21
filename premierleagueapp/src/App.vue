// THIS FILE IS THE ROOT COMPONENT- ALL SUBCOMPONENTS ARE NESTED WITHIN 

<template>
  <div class="body">
        <router-view />
        <div class="fixed">
        <NavBar/>
        </div>
  </div>
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
.body {
  width: 100vw;
  height: 100vh;
  display: flex;
    max-width: 100%;
    overflow-x: hidden;
}

.fixed {
  position: fixed;
  bottom: 0px;
  width: 100vw;

}

.AppBox {
margin: 5px;
    max-width: 100%;
    overflow-x: hidden;
}
  
</style>
