<template>
    <div>
        <swipter></swipter>
        <div class="sound">
            <div class="top">
                <p><i class="iconfont icon-wodexinshi left"></i>人气M音</p>
                <p class="more"> 排行榜 <i class="iconfont icon-right"></i></p>
            </div>
            <ul>
                <li  class="soundList" v-for="(items,index) in soundList" :key="index">
                    <img v-lazy="items.front_cover" alt="">
                    <p class="soundstr">{{items.soundstr}}</p>
                    <p class="count">
                        <span><i class="iconfont icon-shipinbofangyingpian2 bofang"></i>{{items.view_count}}</span>
                        <span><i class="iconfont icon-paihangbang"></i>{{items.comment_count}}</span>
                    </p>
                </li>
            </ul>
        </div>
        <div class="channel">
            <div class="top">
                <p><i class="iconfont icon-more2 left"></i>频道</p>
                <p class="more"> 更多 <i class="iconfont icon-right"></i></p>
            </div>
            <ul >
                <li class="channelList" v-for="(item,index) in channelList" :key="index">
                    <img v-lazy="item.smallpic" alt="">
                    <p>{{item.name}}</p>
                    <div class="follow_num"><i class="iconfont icon-people"></i>{{item.follow_num}}</div>
                </li>
            </ul>
        </div>
        <div class="sound manhua">
            <div class="top">
                <p><i class="iconfont icon-hi left"></i>有声漫画</p>
                <p class="more"> 更多 <i class="iconfont icon-right"></i></p>
            </div>
            <ul>
                <li  class="soundList" v-for="(items,index) in soundListone" :key="index">
                    <img v-lazy="items.cover_image" alt="">
                    <p class="soundstr">{{items.soundstr}}</p>
                    <p class="count">
                        <span><i class="iconfont icon-shipinbofangyingpian2 bofang"></i>{{items.view_count}}</span>
                        <span><i class="iconfont icon-paihangbang"></i>{{items.sub_comments_count}}</span>
                    </p>
                </li>
            </ul>
        </div>
        <div class="sound guangbo">
            <div class="top">
                <p><i class="iconfont icon-tv left"></i>广播剧</p>
                <p class="more"> 更多 <i class="iconfont icon-right"></i></p>
            </div>
            <ul>
                <li  class="soundList" v-for="(items,index) in guangboList" :key="index">
                    <img v-lazy="items.cover_image" alt="">
                    <p class="soundstr">{{items.soundstr}}</p>
                    <p class="count">
                        <span><i class="iconfont icon-shipinbofangyingpian2 bofang"></i>{{items.view_count}}</span>
                        <span><i class="iconfont icon-paihangbang"></i>{{items.sub_comments_count}}</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            soundList:[],
            channelList:[],
            soundListone:[],
            guangboList:[]
        }
    },
    mounted() {
        let url = "/static/data/people.json"
        Axios.get(url).then(res => {
            this.soundList = res.data.info.sound
            this.channelList = res.data.info.channel
        }).catch(); 
        let url1 = "/static/data/list.json"
        Axios.get(url1).then(res => {
            // console.log(res)
            this.soundListone = res.data.music.objects_sound
            this.guangboList = res.data.music.objects_gangbo
            console.log(this.guangboList)
        }).catch(); 
    }
}
</script>

<style scoped>
.sound{margin: 0 2%;}
.sound ul{display: flex;justify-content: space-evenly;}
.soundList{width: 106px;height: 173px;}
.soundList img{width: 100%;height: 60%;}
.soundstr{ 
    height: 38px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    }
.count{display: flex;justify-content: space-between;font-size: 12px;color: #bdbdbd;}
.count .iconfont{color: #ccc;margin-right: 4px;font-size: 12px;}

.channel{margin: 0 2%;}
.top{height: 40px;display: flex;justify-content: space-between;align-items: center;font-size: 16px;}
.top .more{color: #666;font-size: 14px;}
.top .iconfont.left{color: #333;margin-right: 8px;}
.icon-right{width: 20px;height: 20px;background: #ccc;border-radius: 50%;line-height: 20px;text-align: center;margin-left: 3px;}
.channel ul{display: flex;flex-wrap:wrap;}
.channelList{ width: 160px;height: 150px;position: relative;margin: 8px;}
.channelList img{width: 100%;height: 88%;border-radius: 5px;}
.follow_num{padding: 2px 3px;background: rgba(0,0,0,0.3);position: absolute;top: 0;right: 0;border-radius: 2px;color: #fff;font-size: 12px;}
.icon-people{font-size: 10px;}
</style>