import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'http://localhost:3000',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        Vue.prototype.$http.interceptors.request.use(config => {
            if(config.method === 'post'){
                if(config.data.id !== null){
                    config.method = 'put'
                    config.url = `${config.url}/${config.data.id}`
                }
            }

            return config;
        })
    }
})