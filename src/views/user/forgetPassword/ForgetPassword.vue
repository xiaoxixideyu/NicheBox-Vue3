<template>
    <BackButton></BackButton>
    <p>重设密码</p>
    <div>
        <p>Email</p>
        <input type="text" v-model="email">
        <button @click="sendForgetPasswordCodeClick">发送</button>
    </div>
    <div>
        <p>Code</p>
        <input type="text" v-model="code">
    </div>
    <div>
        <p>Password</p>
        <input type="text" v-model="newPwd">
    </div>
    <button @click="sendForgetPasswordClick">确定</button>
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
const newPwd = ref('')
const userStore = useUserStore()
const verificationCodeStore = useVerificationCodeStore()

function sendForgetPasswordCodeClick() {
    userStore.checkEmailExists(email.value).then((exists) => {
        if (!exists) {
            alert('此邮箱未注册')
            return
        }
        verificationCodeStore.sendForgetPasswordCode(email.value).then(() => {
            
        }).catch(err => {
            alert(err.message)
        })
        
        }).catch(err => {
        alert(err.message)
    })
    
}

function sendForgetPasswordClick() {
    
    userStore.forgetPassword(email.value, newPwd.value, code.value).then(() => {
        alert("修改成功！")
        router.push({ name: 'login' })
        
        }).catch(err => {
        alert(err.message)
    })
}
</script>
    
<style>

</style>