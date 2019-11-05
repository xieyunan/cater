<template>
    <div class="search">
        <div class="search_header">
            <div  class="h_top_left">
                <i class="iconfont icon-buoumaotubiao13 tag1"></i>
                <input type="text" class="searchInput" v-model="keywords"/>
                <span class="delete" v-show="keywords" @click="del">x</span>
            </div>
            <span style="color:#fff;" @click="cancle">取消</span>
            <router-link :to="{ path: '/login'}">
                <i class="iconfont icon-more1"></i>
            </router-link>
        </div>
        <div style="padding:0 2%;">
            <div v-show="tag">
                <p class="hot">热门搜索</p>
                <ul>
                    <li class="hotlist" v-for="(item,index) in hotList" :key="index" @click="godetail(item.url)">{{item.name}}</li>
                </ul>
            </div>
            <!-- 搜索中 -->
            <div v-show="!tag">
                <p>搜索：<span style="color:red;">"{{keywords}}"</span></p>
                <ul>
                    <li class="keywordList" v-for="(items,index) in search(keywords)" :key="index" @click="godetail(items.url)">
                        <i class="iconfont icon-buoumaotubiao13 tag2"></i>
                        {{items.name}}
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            keywords:'',
            tag:true,
            hotList:[
                {name:"魔道祖师",url:"http://www.baidu.com"},
                {name:"天官赐福",url:"http://www.baidu.com"},
                {name:"撒野",url:"http://www.baidu.com"},
                {name:"伪装学渣",url:"http://www.baidu.com"},
                {name:"破云",url:"http://www.baidu.com"},
                {name:"杀破狼",url:"http://www.baidu.com"},
                ]
        }
    },
    watch:{
        keywords(val,oldVal){
            // console.log(val,oldVal)
            if(val != ''){
                this.tag = false
                // console.log(this.tag)
                return true
                
            }else{
                this.tag = true
                return false
            }
        }
    },
    methods:{
        search(keywords){
            return  this.hotList.filter(item=>{
                if(item.name.indexOf(keywords) !=-1){
                   return item 
                }
                
                // else{
                //     return '暂无数据'
                // }
            })
        },
        del(){
            this.keywords = ''
        },
        godetail(url){
             window.location.href = url
        },
        cancle(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.search{
    min-height: 85vh;
}
.search_header{height: 48px;background: #000;display: flex;align-items: center;justify-content: space-between;padding: 0 3%;}
.h_top_left{position: relative;}
.icon-more1{font-size: 22px;}
.searchInput{width: 250px;height: 33px;border-radius: 3px;margin-top: 10px;border: 1px solid #ccc;padding-left: 30px;box-sizing: border-box;margin-top: 0px;}
.icon-buoumaotubiao13.tag1{position: absolute;top: 10px;left:8px;color: #333;transform: rotateY(180deg);font-size: 14px;}
.delete{position: absolute;top: 5px;left: 230px;color: #999;font-size: 16px;}
.hot{border-bottom: 1px solid #ccc;line-height: 38px;margin-bottom: 10px;}
.hotlist{display: inline-block; padding: 2px 10px;border: 1px solid #ccc;border-radius:15px;margin: 6px 5px;}
.keywordList{line-height: 40px;}
.tag2{color: #ccc;transform: rotateY(180deg);margin-right: 5px;display: inline-block;font-size: 14px;}
</style>