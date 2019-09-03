import Vue from 'vue';
import axios from 'axios';

let apiUrl = '';
// 根据 process.env.NODE_ENV 的值判断当前是什么环境
// production 生产环境
if (process.env.NODE_ENV === 'production') {
    /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
    if (process.env.VUE_APP_FLAG === 'pro') {
        //production 生产环境
        apiUrlL = '/api';
    } else {
        //test 测试环境
        apiUrl = '/api';
    }
} else {
    //dev 开发环境
    apiUrl = '/api';
}

axios.defaults.baseURL = apiUrl;
function ajax(options){
    // axios配置
    let method = options.method || 'POST';
    // 参数组织
    params = options.data || {};
    // axios配置
    config = {
        method: method,
        url: options.url,
        withCredentials:true,
        timeout: 8000,
        headers: {'Content-Type':'application/json'}
    };
    // 不同方式请求传参不同
    if (method.toUpperCase() === 'GET'){
        // 防止get请求被IE缓存，添加个随机数
        params.randomTime = new Date().getTime();
        config.params = params;
    }else{
        config.data = params;
    }
    //发起请求
    axios(config).then(res => {
        if(res.status == 200){
            resolve(res.data);
        }
    }).catch(error => {
        console.log(error)
    })
}


export {ajax};