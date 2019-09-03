<template>
    <transition>
        <div class="login">
            <div v-if="success">
                <h2>登录猫耳FM</h2>
                <p class="loginWay">
                    <span :class="{on: !loginWay}" @click="loginWay = !loginWay">短信登录</span>
                    <span :class="loginWay?'on':''" @click="loginWay = !loginWay">密码登录</span>
                </p>
                <!-- 短信登录 -->
                <div  v-show="loginWay ==false">
                    <span class="phone">
                        <input type="text" placeholder="请输入手机号" v-model="phone" maxlength="11">
                        <button :disabled="!rightPhone" class="code" :class="{right_phone:rightPhone}" @click.prevent="getCode">{{computeTime>0?`已发送(${computeTime})s`:'获取验证码'}}</button>
                    </span>
                    <input type="text" placeholder="验证码" v-model="code">
                    <button class="caozuo goLogin" @click="login">登录</button>
                </div>
                <!-- 密码登录 -->
                <div v-show="loginWay">
                    <div v-if="register">
                        <input type="text" placeholder="手机/邮箱/用户名" maxlength="11" v-model="phone">
                            <input type="password" placeholder="密码" v-model="password">
                            <input type="text" placeholder="验证码">
                            <button class="caozuo goLogin" @click="login">登录</button>
                            <button class="caozuo goZuce" v-show="loginWay" @click="register = false">注册</button>
                    </div>
                    <!-- 注册 -->
                        <div v-else>
                            <input type="text" placeholder="手机/邮箱/用户名" v-model="phone" maxlength="11">
                            <input type="password" placeholder="密码" v-model="password">
                            <input type="password" placeholder="确认密码" v-model="repeat">
                            <input type="text" placeholder="验证码">
                            <button class="caozuo zhuce goLogin" @click="addUser()">确定</button>
                            <button class="caozuo zhuce goZuce" @click="cancel()">取消</button>
                        </div>
                </div>
            </div>
            
            <div v-else>登录成功，自动跳转至首页</div>
        </div>
    </transition>
    
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
            code:'',
            computeTime:0 ,//计时
            success:true
        }
    },
    computed:{
        rightPhone(){
            return /^1\d{10}$/.test(this.phone)
        }
    },
    methods:{
        login(){
            if(!this.loginWay){
                // const{phone,code} = this
                // if(!this.rightPhone){
                //     //手机号不正确
                // }else if(!/^\d{6}$/.test(code)){
                //     // 验证码必须是六位数字
                // }
                 if( this.phone == ''&& this.password == ''){
                    alert("请输入手机号码")
                    return
                }else if(this.code == ''){
                    alert("请输入验证码")
                    return
                }else if(this.code != '123456'){
                    alert("验证码错误")
                    return
                }else{
                    this.success = false
                    setTimeout(()=>{
                        this.$router.push('./')
                    },1000)
                }
            }else{
                // const{name,pwd,captcha} = this
                // if(!this.rightPhone){
                //     //请输入用户名
                // }else if(!/^\d{6}$/.test(code)){
                //     // 验证码必须是六位数字
                // }
                if( this.phone == ''&& this.password == ''){
                    alert("请输入用户名")
                    return
                }
                if(this.password == ''){
                    alert("请输入密码")
                    return
                }
                if( this.phone == ''&& this.code == ''){
                    alert("请输入手机号")
                    return
                }
                if(localStorage.getItem("phone") === this.phone && localStorage.getItem("password") === this.password){
                    // alert("登录成功")
                    this.success = false
                    setTimeout(()=>{
                        this.$router.push('./')
                    },1000)
                }else{
                    alert("用户名/密码输入不正确")
                }
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
            //倒计时
            //点击一次启动一次计时器
            if(!this.computeTime){
                this.computeTime = 10
                const timer = setInterval(()=>{
                    this.computeTime --
                    if(this.computeTime<= 0){
                        //  this.computeTime = 30
                        clearInterval(timer)
                        this.code = '123456'
                    }
                },1000)
                
                //发送请求（向指定手机号发送验证码）
            }
        },
        cancel(){
            this.register = true
        }
        
    }
}
</script>

<style scoped>
.login{
    height: 80vh;
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