<template>
    <div @click="aaddadd()">
        登录{{ a }}
    </div>
</template>

<script setup lang="ts">
let a:Ref<number> = ref<number>(0)
function aaddadd() {
    a.value++
}
</script>