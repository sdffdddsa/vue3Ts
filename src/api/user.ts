import {axios} from '@/utils/axios'

export function userHi(){
    return axios.get('/user/hi')
}