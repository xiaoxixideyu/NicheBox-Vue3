<template>
    <BackButton></BackButton>
    <p>这是登录界面</p>
    <div>
        <p>Email</p>
        <input type="text" v-model="email">
    </div>
    <div>
        <p>Password</p>
        <input type="text" v-model="pwd">
    </div>
    <button @click="loginClick">登录</button>
</template>

<script setup>
import { ref } from 'vue';
import { login } from '@/apis/user'
import { setAccessToken, setRefreshToken } from '@/config/storage'
import BackButton from '@components/button/BackButton.vue'

const email = ref('');
const pwd = ref('');

const loginClick = () => {
    console.log("email: ", email.value)
    console.log("pwd: ", pwd.value)
    login(email.value, pwd.value).then(res => {
        console.log('登录成功')
        console.log(res)
        setAccessToken(res.data.token)
        setRefreshToken(res.data.refresh_token)
    })
}

</script>


<style scoped>
.container {
    display: flex;
    justify-content: space-between;
}

</style>