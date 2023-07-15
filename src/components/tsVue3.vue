<template>
    <div>
        <div class="a">{{ title }}</div>
        <div @click="add">添加</div>
        <ul>
            <li v-for="item in course">
              {{ item.name }}
            </li>
        </ul>

        <input ref="input"  v-model="val">
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
// interface Iprops {
//     title?:string
// }

// withDefaults(defineProps<Iprops>(),{
//     title:'默认标题'
// })

defineProps({
    title:{
        type:String,
        default:'666'
    }
})

interface Course  {
    name:string,
    age:number
}
let val = ref('')
let num = ref(499)
let course = ref<Course[]>([])

let input = ref<HTMLInputElement | null>(null)

onMounted(()=>{
    input.value?.focus()
})


function add(event:Event) {
    course.value.push({
        name:'张三',
        age:num.value
    })
    num.value++
}
</script>