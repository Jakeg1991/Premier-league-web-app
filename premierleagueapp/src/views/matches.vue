<template>
    <div class="appWrapper">
      <MatchesBox />
    </div>
</template>

<script>
import MatchesBox from '@/components/MatchesBox.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Table',
  components: {
MatchesBox, NavBar},
}

</script>

<style scoped>
.appWrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>