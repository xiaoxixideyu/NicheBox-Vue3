<template>
    <div>
        <p>this is search 2</p>
        <BackButton></BackButton>
        <input><button @click="searchButtonClick" class="search-button">搜索</button>
        <SearchListHistory></SearchListHistory>
        <SearchListGuess></SearchListGuess>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import SearchListHistory from './SearchListHistory.vue'
import SearchListGuess from './SearchListGuess.vue'
import BackButton from '@components/button/BackButton.vue'

const router = useRouter()

function back() {
    router.go(-1)
}

function searchButtonClick() {

}
</script>

<style scoped>
.search-button{

}
</style>
