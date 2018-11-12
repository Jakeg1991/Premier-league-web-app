<template>
<div class="container">
<div class="appWrapper">
<MatchesBox/>
</div>
<FooterBox/>
</div>
</template>

<script>
import FooterBox from '@/components/FooterBox.vue'
import MatchesBox from '@/components/MatchesBox.vue'

export default {
  name: 'Table',
  components: {
    FooterBox, MatchesBox},
}

</script>

<style scoped>
.container {
  position: fixed;
  padding: 15px;
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
  background-color: rgba(255, 0, 0, 0.212);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>