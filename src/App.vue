<template>
  <div >
    <HeaderComponent ></HeaderComponent>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from './components/Header';

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
};
</script>
<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>
