<template>
    <div class="classify">
        <ul>
            <li v-for="(item,index) in datalist" :key="index" class="list">
                <img v-lazy="item.pic" alt="">
                <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            datalist:[]
        }
    },
     mounted(){
        this.$http.get('classify.json').then((res)=>{
            this.datalist = res.data.listTest;
        })
    }
}
</script>
<style scoped>
.classify{
    padding: 0 2%;
    margin: 0 auto;
    min-height: 73vh;
}
.classify ul{
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin-bottom: 10px;
}
.classify .list{
    width: 109px;
    padding: 15px 0px;
    background: #fff;
    margin: 4px;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.2);
}
.list img{
    width: 50px;height: 50px;
}
</style>