<template>
	<div class="container">
		<header>
			<div class="logo">LOGO</div>
			<div class="nav">
				<div class="nav-item" v-for="(item,index) in nav" :key="index">{{item.name}}</div>
			</div>
			<div class="flex-1">
				<div class="user">
					<i class="icon-yonghu2"></i>
					<span>admin</span>
				</div>
				<i class="icon-shouye">
					<router-link to="/home"></router-link>
				</i>
				<i class="icon-yujing"></i>
				<i class="icon-exit"></i>
			</div>
		</header>
		<div class="main">
			<div class="aside"></div>
			<div class="content"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nav: [
					{ name: "首页", path: "/home" },
					{ name: "商品", path: "/goods" },
					{ name: "订单", path: "/orders" },
					{ name: "库存", path: "/stock" },
					{ name: "用户", path: "/user" },
					{ name: "促销", path: "/promo" },
					{ name: "运营", path: "/business" },
					{ name: "统计", path: "/tongji" },
					{ name: "财务", path: "/finance" },
					{ name: "设置", path: "/sets" },
					{ name: "权限", path: "/auth" }
				]
			};
		}
	};
</script>

<style lang="scss" scoped>
$header-bg-color: rgba(70, 76, 91, 0.898039215686275);
$aside-bg-color: rgba(234, 237, 241, 1);
header {
	min-width: 1920px;
	background-color: $header-bg-color;
	height: 50px;
	color: white;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	.logo {
		font-size: 36px;
		margin-left: 168px;
		margin-top: 4px;
	}
	.nav {
		display: flex;
		margin-left: 59px;
		.nav-item {
			width: 60px;
			line-height: 50px;
			text-align: center;
			cursor: pointer;
		}
		.nav-item:hover {
			color: #ccc;
		}
	}
	.flex-1 {
		display: flex;
		margin-left: 200px;
		i {
			font-size: 29px;
		}
		.user {
			display: flex;
			margin-right: 30px;
			.icon-yonghu2 {
				display: inline-block;
				width: 30px;
				height: 30px;
				border: 2px solid white;
				border-radius: 50%;
				margin-right: 20px;
				margin-top: 7px;
			}
			span {
				margin-top: 15px;
			}
		}
		.icon-shouye,
		.icon-yujing {
			margin: 10px 60px 0;
		}
		.icon-shouye {
			cursor: pointer;
		}
		.icon-exit {
			width: 30px;
			height: 30px;
			background-image: url("../assets/header/icon-exit.png");
			background-repeat: no-repeat;
			margin-top: 10px;
			margin-left: 30px;
			cursor: pointer;
		}
	}
}
.aside {
	width: 180px;
	position: absolute;
	top: 50px;
	bottom: 0;
	background-color: $aside-bg-color;
}
</style>