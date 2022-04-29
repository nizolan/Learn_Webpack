<template>
	<h2>Hello World组件</h2>
	<p>{{ message }}</p>
</template>

<script>
	export default {
		data() {
			return {
				message: "我是hello world组件的内容",
			};
		},
	};
</script>
