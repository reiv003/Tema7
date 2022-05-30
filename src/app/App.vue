<template>
  <Header/>
  <Sidebar/>
  <RouterView />
</template>

<script>
  import Header from '../components/Header.vue';
  import Sidebar from '../components/Sidebar.vue';

  export default {
	  components: {
      Header, Sidebar
    }
  };
</script>

<style>
  @import "../styles/reset.css";
  @import "../styles/variables.css";
  @import "../styles/fonts.css";
  @import "../styles/style.css";
</style>