<template>
    <div>
        <router-link to="/">首页</router-link>
        <router-link to="/login">登录</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/video/1">视频1</router-link>
        <router-link to="/video/2">视频2</router-link>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts"></script>