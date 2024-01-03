<template>
    <button @click="handleClick" class="search-list-content">
        {{ props.buttonText }}
    </button>
</template>

<script setup>
// import { ref } from 'vue'
const props = defineProps(['buttonText'])

function handleClick() {

}
</script>

<style>
.search-list-content {
  background-color: #f0f0f0; /* 灰色背景 */
  color: black;
  border: none;
  border-radius: 4px; /* 圆角 */
  padding: 8px 16px; /* 内边距，可以根据需要调整 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  /* 根据文字长度动态调整按钮宽度 */
  width: auto;
  /* 根据文字高度动态调整按钮高度，这里假设文字高度是按钮高度的一半 */
  height: calc(16px * 2);
  /* 避免文字换行 */
  white-space: nowrap;
  /* 过渡效果，当鼠标悬停时改变背景色 */
  /* transition: background-color 0.3s ease-in-out; */
  /* 当鼠标悬停在按钮上时，改变背景色 */
  /* &:hover { */
    /* background-color: #e0e0e0; 悬停时的灰色 */
  /* } */
}
</style>