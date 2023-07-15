<template>
    <h1>{{ x }}</h1>,
    <h1>{{ y }}</h1>
</template>

<script setup lang="ts">
import {useMouse} from './mouse'
const {x,y} = useMouse()
</script>