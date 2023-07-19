<template>
    <div>
        首页
        <a-button type="primary">666</a-button>
    </div>
</template>

<script setup lang="ts">
import {userHi} from '@/api/user'

function sayHi() {
    const data = userHi()
    console.log(data)
}
sayHi()
</script>