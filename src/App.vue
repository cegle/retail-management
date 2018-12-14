<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "App",
		components: {}
	};
</script>

<style lang="scss">
body {
	margin: 0;
	padding: 0;
	font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
		Microsoft YaHei, SimSun, sans-serif;
	font-size: 14px;
	color: #666666;
	-webkit-font-smoothing: antialiased;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
	margin: 0;
	padding: 0;
}
ul,
li {
	margin: 0;
	padding: 0;
	list-style: none;
}
</style>