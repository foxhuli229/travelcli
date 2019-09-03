<template>
  <div>
      <deatil-banner></deatil-banner>
      <deatil-header></deatil-header>
       <div class="conent"></div>
  </div>
</template>

<script>
import DeatilBanner from './components/Banner'
import DeatilHeader from './components/Header'
export default {
    name: 'Detail',
    components: {
        deatilBanner: DeatilBanner,
        DeatilHeader: DeatilHeader
    }
}
</script>

<style lang="stylus" scoped>
.conent {
  height 50rem;
}

</style>