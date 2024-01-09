<template>
    <button @click="buttonClick">返回</button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const buttonClick = () => {
    router.back()
}
</script>

<style scoped>
</style>