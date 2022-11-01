<template>
  <section class="home-container">
    我是 HOME 页
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {

  },

  created: function() {
   console.log('init home page');
  }
};
</script>

<style lang="scss" scoped>
.home-container{
  background-color: antiquewhite;
}
</style>
