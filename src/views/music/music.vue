<template>
    <div style="padding:0 4%;">
        <div class="top">
            <div>
                <span class="allmore"></span>
                <p class="all">全部音单</p>
            </div>
           <p class="classify">
               <span>类型</span>
               <i class="iconfont icon-right"></i>
           </p>
        </div>
        
        <ul>
            <li v-for="(item,index) in musicList" :key="index" class="list">
                <div class="bg">
                <img :src="item.front_cover" alt="" class="imgs">
                </div>
                <p class="title">{{item.title}}</p>
                <p class="music_count">
                    <i class="iconfont icon-music1"></i>
                    {{item.music_count}}
                </p>
            </li>
            
        </ul>
    </div>
</template>
<script>

export default {
    data(){
        return{
            musicList:[]
        }
    },
    mounted(){
        this.$http.get('tagalbum.json').then((res)=>{
            // console.log(res)
            this.musicList = res.data.albums;
        })
    }
}
</script>
<style scoped>
.top{display: flex;justify-content: space-between;line-height: 50px;}
.allmore{display: inline-block;width: 3px;height: 22px; background: #000;position: relative;top: 5px;}
.all{font-size: 16px;display: inline-block;margin-left: 5px;}
.classify{padding:0 3px 0 8px; height: 24px;border-radius: 10px;border: 1px solid #ccc;margin-top: 13px;line-height: 24px;box-sizing: border-box;background: #fff;}
.iconfont{color: #999;font-size: 14px;}
ul{display: flex;flex-wrap: wrap;justify-content: space-between;}
.list{width: 164px;margin-bottom: 10px;position: relative;}
.bg{
    width: 164px;
    background: url('http://static.missevan.com/assets/m/images/build/album-cover.efe70663.png')no-repeat;
    background-size: contain;
    margin-bottom: 5px;
}
.imgs{
    width: 146px;
    height: 146px;
    border-radius: 5px;
    
}
.music_count{width: 146px;height: 28px;background: linear-gradient(180deg,transparent,rgba(0,0,0,.26)); position: absolute;bottom: 48px;right: 18px;border-radius: 2px;color: #fff;text-align: right;padding-right: 6px;line-height: 34px;font-size: 12px;box-sizing: border-box;}
.icon-music1{font-size: 12px;color: #fff}
</style>