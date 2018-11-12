<template>
<div class="FooterBox">


</div>
</template>

<script>
</script>

<style scoped>
.FooterBox {
  display: flex;
  background-color: blueviolet;
  position: absolute;
  left: 0%;
  bottom: -5%;
  border-style: dotted;
  border-width: 2px;
  width: 100vw;
  height: 15%;
  align-self: flex-end;
  z-index: 0;
}

@media (orientation:landscape) {
  .FooterBox {
    display: none;
  }}
</style>


