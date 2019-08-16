<template>
    <div>
        <swiper :options="swiperOption" class="swiper-wrap"  ref="mySwiper" v-if="banner.length!=0">
        <swiper-slide v-for="(item,index) in banner" :key="index" >
            <img :src="item.pic" alt="" @click="lookBook(item.url)"/>
        </swiper-slide>
        <!-- 常见的小圆点 -->
        <div class="swiper-pagination rode"  v-for="(item,index) in banner" :key="index" slot="pagination" ></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");
export default {
    data(){
        const that = this;
        return {
            "banner": [
                {url: "https://www.missevan.com/sound/1318731",
                pic: "http://static.missevan.com/mimages/201908/15/861fa9ddaae8bf4a92af267b83a754a8180942.jpg"},
                {url: "https://www.missevan.com/sound/1317908",
                pic: "http://static.missevan.com/mimages/201908/15/2d8954a608fa1a00da9f616bae9d3789182746.jpg"},
            
                {pic: "http://static.missevan.com/mimages/201908/15/5d99fef63de9284d51ef3ad91152f6b8111626.jpg",
                url: "https://www.missevan.com/sound/1317932"},
            
                {pic: "http://static.missevan.com/mimages/201908/15/f1c07bc8814f77ac1268f0b1c38b4448103318.jpg",
                url: "https://www.missevan.com/sound/1317900"},
            
                {pic: "http://static.missevan.com/mimages/201907/24/8df2e7fff597e2d4b83d6b69ee968c8c115036.jpg",
                url: "https://www.missevan.com/sound/1316974"}
            ],
            imgIndex: 1,
            swiperOption: {
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                //循环
                loop: true,
                //设定初始化时slide的索引
                initialSlide: 0,
                //自动播放
                autoplay: {
                delay: 1500,
                stopOnLastSlide: false,
                /* 触摸滑动后是否继续轮播 */
                disableOnInteraction: false
                },
                //滑动速度
                speed: 800,
                //滑动方向
                direction: "horizontal",
                //小手掌抓取滑动
                grabCursor: true,
                on: {
                //滑动之后回调函数
                    slideChangeTransitionStart: function() {
                        /* realIndex为滚动到当前的slide索引值 */
                        that.imgIndex= this.realIndex - 1;
                    },
                },
                 //分页器设置
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    type: "bullets",
                }
            }
        };
    },
    components: {
        swiper,
        swiperSlide
    },
    methods:{
        lookBook(url){
             window.location.href = url
        }
    }
}
</script>

<style scoped>
.swiper-wrap img{
    width: 100%;
}

</style>