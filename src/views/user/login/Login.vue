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
import { useUserStore } from "@/store/user";
import BackButton from '@components/button/BackButton.vue';

const router = useRouter()
const email = ref('')
const pwd = ref('')

const loginClick = () => {
    const userStore = useUserStore()
    userStore.login(email.value, pwd.value).then(() => {
        router.back()
    }).catch(err => {
        alert(err.message)
    })
}

</script>


<style scoped>
.container {
    display: flex;
    justify-content: space-between;
}

</style>