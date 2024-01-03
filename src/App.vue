<script setup>
</script>

<template>
  <div id="app" :draggable="false">
    <router-view ></router-view>
  </div>
</template>

<style scoped>
#app{
  /* text-align: center; */
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
