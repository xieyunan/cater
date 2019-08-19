<template>
    <div class="container">
      <div class="nav">
        <ul>
          <li v-for="(item,index) in list" :key="index" :class="item.flag?'active':''" @click="detail(index)">{{item.name}}</li>
        </ul>
      </div>
      <Music v-if="tab == 0"></Music>
      <Recommend v-if="tab == 1"></Recommend>
      <Classify v-if="tab == 2"></Classify>
    </div>
</template>

<script>
import Music from './music/music.vue'
import Recommend from './recommend/recommend.vue'
import Classify from './classify/classify.vue'
export default {
    data () {
        return {
          tab:1,
            list:[
              {id:1,name:"音单",flag:false},
              {id:2,name:"推荐",flag:true},
              {id:3,name:"分类",flag:false},
              ],
            
        }
    },
    components:{
      Music,
      Recommend,
      Classify
    },
    methods:{
      detail(id){
        //forEach遍历---filter过滤，返回符合条件的数组
        this.list.forEach(el=>{
          el.flag = false;
        })
          this.list[id].flag = !this.list[id].flag
          this.tab = id
          // console.log(this.tab)
      }
    }
    
}
</script>

<style scoped>

.nav ul{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 40px;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.nav li{
  width: 27%;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.nav .active{
  height: 38px;
  border-bottom: 2px solid #333;
}
</style>