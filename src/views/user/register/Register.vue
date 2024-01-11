<template>
    <BackButton></BackButton>
    <p>欢迎加入小众盒</p>
    <div>
        <p>Email</p>
        <input type="text" v-model="email">
        <button @click="sendRegisterCodeClick">发送</button>
    </div>
    <div>
        <p>Code</p>
        <input type="text" v-model="code">
    </div>
    <div>
        <p>Password</p>
        <input type="text" v-model="pwd">
    </div>
    <button @click="sendRegisterClick">注册</button>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from "@/store/user";
import { useVerificationCodeStore } from '@/store/verification_code.js';
import BackButton from '@components/button/BackButton.vue';

const router = useRouter()
const email = ref('')
const code = ref('')
const pwd = ref('')

function sendRegisterCodeClick() {
    const verificationCodeStore = useVerificationCodeStore()
    verificationCodeStore.sendRegisterCode(email.value).then(() => {
            
        }).catch(err => {
        alert(err.message)
    })
}

function sendRegisterClick() {
    const userStore = useUserStore()
    userStore.register(email.value, pwd.value, code.value).then((login_success) => {
        if (login_success) {
            router.push({ name: 'Home' })
        } else {
            alert("登录失败，前往登录页面")
            router.push({ name: 'login' })
        }
        }).catch(err => {
            alert(err.message)
    })
}
</script>
    
<style>

</style>