<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld/>
  <FooterBox/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FooterBox from '@/components/FooterBox.vue'

export default {
  name: 'matches-components',
  components: {
    FooterBox,
    HelloWorld
  }
}
</script>
