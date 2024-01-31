<template>
    <h1>me</h1>
    <button @click="loginClick" v-show="!userStore.loggedIn">登录</button>
    <button @click="logoutClick" v-show="userStore.loggedIn">注销</button>
    <button @click="getinfoClick">拿数据</button>
    <button @click="registerClick" v-show="!userStore.loggedIn">注册</button>
    <div>
        <img :src="userStore.avatarWebp" alt="头像" />
        <button @click="uploadAvatar" v-show="userStore.loggedIn">上传头像</button>
        <p>uid: {{ userStore.uid }}</p>
        <p>用户名: {{ userStore.username }}</p>
        <p>简介: {{ userStore.introduction }}</p>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';

const router = useRouter()
const userStore = useUserStore()

const loginClick = () => {
    router.push({ name: 'login' })
}

const registerClick = () => {
    router.push({ name: 'register' })
}

const logoutClick = () => {
    userStore.logout()
}

const getinfoClick = () => {
    userStore.getMyBaseInfo().then(() => {
        console.log('拿数据成功')
        userStore.getAvatar(userStore.uid).then(res => {
            userStore.setAvatarUrl(res.data.origin_url, res.data.webp_url)
        })
    }).catch(() => {
        console.log('拿数据失败')
    })
}

const uploadAvatar = () => {
    router.push({ name: 'uploadAvatar' })
}

onMounted(() => {
    console.log('my is now mounted')
})

</script>

<style></style>