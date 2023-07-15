<template>
    <div>
        视频{{ id }}
    </div>
</template>

<script setup lang="ts">
import { useRoute,useRouter } from 'vue-router';

const router = useRouter()

const routes = useRoute()
const id = routes.params.id
</script>