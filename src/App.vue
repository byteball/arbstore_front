<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />

  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  created(){
    this.$store.dispatch('getProductsAction')
    this.$store.dispatch('getLanguages')
    this.$store.dispatch('getTags')
  },

};
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;

  background: #131519;
  font-family: 'Formular',sans-serif;
  max-width: 1920px;
  margin: 0 auto;
  color: #F4FBFF;
}

</style>