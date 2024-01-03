<template>
    <div class="draggable">
        <p>this is search 2</p>
        <button @click="back">返回</button>
        <input><button @click="searchButtonClick" class="search-button">搜索</button>
        <SearchListHistory></SearchListHistory>
        <SearchListGuess></SearchListGuess>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import SearchListHistory from './SearchListHistory.vue'
import SearchListGuess from './SearchListGuess.vue'

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
