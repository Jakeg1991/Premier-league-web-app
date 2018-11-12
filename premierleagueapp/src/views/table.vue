<template>
<div class="container">
<div class="appWrapper">
<TableBox/>
</div>
<FooterBox/>
</div>
</template>

<script>
import FooterBox from '@/components/FooterBox.vue'
import TableBox from '@/components/TableBox.vue'

export default {
  name: 'Table',
  components: {
    FooterBox, TableBox},
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