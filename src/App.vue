<template>
  <div id="app">
    <!-- keep-alive 首次会被加载数据，并且存缓存中 
      exclude：排出页面缓存
    -->
    <!-- <keep-alive 
      exclude="Detail"> -->
      <router-view />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
</style>
