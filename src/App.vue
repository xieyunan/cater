<template>
  <div id="app">
    <Header></Header>
    <Container></Container>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";
import Container from "./views/container";
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    Header,
    Container,
    Footer
  }
}
</script>
<style>
@import '//at.alicdn.com/t/font_1005023_f8x0g7s1am.css';

</style>
