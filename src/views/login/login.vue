<template>
    <div class="login">
        <ul>
            <li class="login_top" @click="$router.push('./clickLogin')">
                <img src="https://static.missevan.com/assets/images/home/default-icon.jpg" alt="" class="default_icon">
                <span>点击登录</span>
                <i class="iconfont icon-right"></i>
            </li>
            <li>
                <i class="iconfont icon-erji left"></i>
                M-主站
                <i class="iconfont icon-right"></i>
            </li>
            <li>
                <i class="iconfont icon-huatong1 left"></i>
                M-直播
                <i class="iconfont icon-right"></i>
            </li>
            <li>
                <i class="iconfont icon-money left"></i>
                M-钱包
                <i class="iconfont icon-right"></i>
            </li>
        </ul>
        <!-- <transition name="slide-fade"  v-else>
            <clickLogin ></clickLogin>
        </transition> -->
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.login{
    height: 94vh;
}
ul{height: 100%;background: #000;}
.login_top{height: 100px; line-height: 100px; margin-bottom: 10px;background: rgba(255,255,255,0.26);padding-left: 30px;}
.login_top span{position: relative;top: -25px;left: 15px;}
li{line-height: 38px;background: rgba(255,255,255,0.26);margin-bottom: 1px; color: #fff;padding-left: 10px;box-sizing: border-box;font-size: 16px;}
.iconfont.left{color: red;font-size: 18px;}
.icon-right{float: right;margin-right: 5px;}
.default_icon{width: 70px;height: 70px;border-radius: 70px;margin-top: 15px;}

</style>