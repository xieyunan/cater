<template>
    <div class="login">
        <h2>登录猫耳FM</h2>
            <p class="loginWay">
                <span :class="loginWay?'on':''" @click="loginWay = !loginWay">短信登录</span>
                <span :class="{on: !loginWay}" @click="loginWay = !loginWay">密码登录</span>
            </p>
        <div  v-show="loginWay">
            <span class="phone">
                <input type="text" placeholder="请输入手机号" v-model="phone" maxlength="11">
                <button disabled="!rightPhone" class="code" :class="{right_phone:rightPhone}" @click.prevent="getCode">{{compoteTime>0?`已发送(${compoteTime})s`:'获取验证码'}}</button>
            </span>
            <input type="text" placeholder="验证码">
            <button class="caozuo goLogin" >登录</button>
        </div>
       <div v-show="loginWay ==false">
           <div v-if="register">
               <input type="text" placeholder="手机/邮箱/用户名" maxlength="11" v-model="phone">
                <input type="password" placeholder="密码" v-model="password">
                <input type="text" placeholder="验证码">
                <button class="caozuo goLogin" @click="login">登录</button>
                <button class="caozuo goZuce" v-show="loginWay ==false" @click="register = false">注册</button>
           </div>
            <div v-else>
                <input type="text" placeholder="手机/邮箱/用户名" v-model="phone">
                <input type="password" placeholder="密码" v-model="password">
                <input type="password" placeholder="确认密码" v-model="repeat">
                <input type="text" placeholder="验证码">
                <button class="caozuo zhuce goLogin" @click="addUser()">确定</button>
                <button class="caozuo zhuce goZuce" @click="cancel()">取消</button>
            </div>
            
       </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            loginWay:true, //true短信登录
            register:true, //注册
            phone:'',
            password:'',
            repeat:'', //确认密码
            compoteTime:0 //计时
        }
    },
    computed:{
        rightPhone(){
            return /^1\d{10}$/.test(this.phone)
        }
    },
    methods:{
        login(){
            if(localStorage.getItem("phone") === this.name&&localStorage.getItem(password) === this.password){
                alert("登录成功")
                this.phone = ''
                this.password = ''
            }else{
                alert("用户名/密码输入不正确")
            }
        },
        addUser(){
            if(this.password == this.repeat){
               localStorage.setItem('phone',this.phone);
                localStorage.setItem('password',this.password); 
                this.phone = ''
                this.password = ''
                this.repeat = ''
                this.register = true
            }else{
                alert("两次输入不一致")
            }
        },
        getCode(){
            debugger;
            //倒计时
            //点击一次启动一次计时器
            if(!compoteTime){
                this.compoteTime = 30
                setInterval(function(){
                    this.compoteTime --
                    if(this.compoteTime<= 0){
                        //  this.compoteTime = 30
                        clearInterval()
                    }
                },1000)
                //发送请求（向指定手机号发送验证码）
            }
            
        }
    }
}
</script>

<style scoped>
.login{
    /* margin-top:10px;  */
    padding: 25px 35px;
    text-align: center;
}
h2{font-size: 18px;font-weight: normal;}
.loginWay{line-height: 38px;margin: 10px 0;}
.loginWay span{display: inline-block;padding: 0 8px;}
.on{color: #c14a3f;border-bottom: 1px solid #c14a3f;}
input{display: block;width: 290px; height: 40px;margin: 0 auto 10px; border: 1px solid #ccc;border-radius: 3px;padding-left: 5px;box-sizing: border-box;}
.phone{display:block;position: relative;}
.code{position: absolute;top: 10px;right: 15px;color: #ccc;border: 0;outline: none;background: #fff;}
.right_phone{color: #333;}
.caozuo{width: 290px; height: 40px;margin: 0 auto 10px; border: 1px solid #ccc;border-radius: 3px;box-sizing: border-box;font-size: 16px;}
.zhuce{width: 100px;}
.goLogin{background: #c14a3f;color: #fff;}
.goZuce{background: #fff;}
</style>