<template>
  <div id="app">
    <!-- keep-alive 首次会被加载数据，并且存缓存中 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
</style>
