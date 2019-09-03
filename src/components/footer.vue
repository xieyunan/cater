<template>
    <div class="footer">
        <div class="footer_top">
            <p>客户端</p>
            <img src="@/assets/image/footer_bg.jpg" alt="" class="footer_bg">
            <p>返回顶部</p>
        </div> 
        <p>MissEvan弹幕音频网 京ICP备:14055174号-1</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.footer{
    width: 100%;
    text-align: center;
    margin: 20px 0;
    /* position: fixed; */
    /* bottom: 20px; */
}
.footer_bg{
    width: 14px;
    height: 16px;
}
.footer_top{
    display: flex;
    justify-content: space-evenly;
    height: 25px;
}
</style>