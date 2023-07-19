import Axios from 'axios'

import type {InternalAxiosRequestConfig} from 'axios'
import { message } from 'ant-design-vue'

export const axios = Axios.create({
    baseURL:'/api'
})

console.log(import.meta.env.VITE_API_HEADER)
axios.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
    config.headers.apiKey = import.meta.env.VITE_API_HEADER //请求头信息
    return config
})

axios.interceptors.response.use((res)=>{
    const {data} = res
    console.log(data)
    if(data.code === 0) {

    }else {
        console.log(message)
        message.warning(data.message)
        return Promise.reject(data.message)
    }
})