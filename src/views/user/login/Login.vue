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
import { useRouter } from 'vue-router';
import { login } from '@/http/apis/user'
import { useUserStore } from "@/store/user";
import BackButton from '@components/button/BackButton.vue'

const router = useRouter()
const email = ref('')
const pwd = ref('')

const loginClick = () => {
    const userStore = useUserStore()
    login(email.value, pwd.value).then(res => {
        console.log('登录成功')
        userStore.accessToken = res.data.token
        userStore.refreshToken = res.data.refresh_token
        router.back()
    }).catch(error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400: 
                    alert('登录失败')
                    break
                default:
                    alert('发生未知错误')
            }
        }
    })
}

</script>


<style scoped>
.container {
    display: flex;
    justify-content: space-between;
}

</style>