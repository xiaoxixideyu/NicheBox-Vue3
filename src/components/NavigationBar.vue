<script setup>

</script>

<template>
    <header class="nav van-hairline--bottom">
		<div class="nav-list">
			<div class="nav-list-item">
				<span>推荐</span>
			</div>
			<div class="nav-list-item">
				<span>关注</span>
			</div>
			<div class="nav-list-item">
				<span>视频</span>
			</div>
			<div class="nav-list-item">
				<span>晒图</span>
			</div>
			<router-link class="nav-list-item" to="search">
				<span>搜索</span>
			</router-link>
		</div>
	</header>
</template>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 40px;
		z-index: 10000;
		line-height: 40px;
		padding: 0 10px;
		.nav-list {
			display: flex;
			width: 100%;
			flex-direction: row;
			padding: 0;
			.nav-list-item {
				width: 20%;
				/* display: flex; */
				/* flex: 1; */
				/* flex-direction: column; */
				text-align: center;
				color: blanchedalmond;
				font-size: 20px;
			}
			
		}
	}
</style>