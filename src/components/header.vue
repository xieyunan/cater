<template>
  <div class="header">
      <div class="header_top">
        <div class="h_top_left" @click="gohome">
            <img src="../assets/image/logo.jpg" alt="">
        </div>
        <div class="h_top_rig">
          <i class="iconfont icon-buoumaotubiao13"></i>
          <i class="iconfont icon-more1"></i>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    gohome(){
      this.$router.push('../views/index.vue')
    }
  }
}
</script>

<style scoped>
.header_top{
  width: 100%;
  height: 40px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3%;
}
.h_top_rig i{
  font-size: 20px;
}
.h_top_rig .icon-buoumaotubiao13{
  margin-right: 10px;
}
.h_top_rig .icon-more1{
  font-size: 22px;
}

</style>
