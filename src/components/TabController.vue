<script setup>

</script>

<template>
    <footer>
        <div class="tab">
            <div class="tab-list">
                <router-link class="tab-list-item" :to="{name:'Home'}">
                    <span>首页</span>
				</router-link>
                <router-link class="tab-list-item" :to="{name:'Box'}">
                    <span>盒子</span>
                </router-link>
                <router-link class="tab-list-item" :to="{name:'Publish'}">
                    <span>(+)</span>
                </router-link>
                <router-link class="tab-list-item" :to="{name:'Message'}">
                    <span>消息</span>
                </router-link>
                <router-link class="tab-list-item" :to="{name:'Me'}">
                    <span>我</span>
                </router-link>
            </div>
        </div>
    </footer>
</template>

<style>
    .tab {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 70px;
		z-index: 10000;
		line-height: 70px;
		padding: 0 10px;
		.tab-list {
			display: flex;
			width: 100%;
			flex-direction: row;
			padding: 0;
			.tab-list-item {
				width: 20%;
				/* display: flex; */
				/* flex: 1; */
				/* flex-direction: column; */
				text-align: center;
				color: rgb(234, 160, 152);
				font-size: 26px;
			}
			
		}
	}
</style>