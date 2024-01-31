<template>
    <BackButton></BackButton>
    <el-upload
        action=""
        :http-request="handleRequest"
        :show-file-list="false"
    >
    <i class="el-icon-plus avatar-uploader-icon"></i>
    <div class="el-upload__text">点击上传头像</div>
    </el-upload>
</template>

<script setup>
import BackButton from '@components/button/BackButton.vue'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

const handleRequest = (e) => {
    console.log('上传头像')
    let formData = new FormData()
    if (e.file.type != 'image/png' && e.file.type != 'image/jpeg' && e.file.type != 'image/gif') {
        alert('只能上传jpeg、png、gif格式的图片')
        return
    }
    if (e.file.size / 1024 / 1024 > 2) {
        alert('只能上传小于2M的图片')
        return
    }
    formData.append('avatar', e.file)
    userStore.uploadAvatar(formData).then(res => {
        alert('上传成功')
    }).catch(err => {
        alert('上传失败')
    })
}
</script>

<style>
</style>