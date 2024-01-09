<template>
    <h1>me</h1>
    <button @click="loginClick" v-show="!userStore.loggedIn">登录</button>
    <button @click="logoutClick" v-show="userStore.loggedIn">注销</button>
    <button @click="getinfoClick">拿数据</button>
    <div>
        <p>uid: {{ userStore.uid }}</p>
        <p>用户名: {{ userStore.username }}</p>
        <p>简介: {{ userStore.introduction }}</p>
    </div>
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

const logoutClick = () => {
    userStore.logout()
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