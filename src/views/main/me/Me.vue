<template>
    <h1>me</h1>
    <button @click="loginClick">登录</button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const loginClick = () => {
    router.push({ name: 'login' })
}

</script>

<style></style>