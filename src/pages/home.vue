<template>
    <div>
        首页
        <a-button type="primary">666</a-button>
    </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue';
fetch('/api/user/hi',{
    headers:{
        apikey:import.meta.env.VITE_API_HEADER
    }
})
.then(res=>res.json()
.then(result=>{
    message.info(result.data.message)
}))
</script>