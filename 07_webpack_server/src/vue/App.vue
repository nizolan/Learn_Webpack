<template>
	<h2>{{ title }}</h2>
	<p>{{ content }}</p>
</template>

<script>
	export default {
		data() {
			return {
				title: "我是APP标题",
				content: "我是APP内容哈哈哈哈",
			};
		},
	};
</script>

<style scoped>
	h2 {
		color: red;
	}
	p {
		color: blue;
	}
</style>

