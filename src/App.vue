<template>
  <div id="app">
    <div v-if="$route.path !== '/search'">
      <Header></Header>
    </div>
    <!-- <Container></Container> -->
    <router-view></router-view>
    <div v-if="$route.path !== '/login'">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";
// import Container from "./views/container";
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    Header,
    // Container,
    Footer
  }
}
</script>
<style>
@import '//at.alicdn.com/t/font_1005023_0jqzqtx0okd.css';

</style>
