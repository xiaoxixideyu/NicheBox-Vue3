<template>
    <h1>me</h1>
    <button @click="loginClick">登录</button>
    <button @click="getinfoClick">拿数据</button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';

const router = useRouter()
const userStore = useUserStore()

const loginClick = () => {
    router.push({ name: 'login' })
}

const getinfoClick = () => {
    userStore.getMyBaseInfo().then(() => {
        console.log('拿数据成功')
    }).catch(() => {
        console.log('拿数据失败')
    })
}

onMounted(() => {
    console.log('my is now mounted')

})

</script>

<style></style>