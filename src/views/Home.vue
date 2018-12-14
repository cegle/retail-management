<template>
	<div class="container">
		<header>
			<div class="logo">LOGO</div>
			<div class="nav">
				<div
					@click="getMenu(item.childs)"
					class="nav-item"
					v-for="(item,index) in nav"
					:key="index"
				>{{item.name}}</div>
			</div>
			<div class="flex-1">
				<div class="user">
					<i class="icon-yonghu2"></i>
					<span>admin</span>
				</div>
				<i class="icon-shouye">
					<router-link to="/"></router-link>
				</i>
				<i class="icon-yujing"></i>
				<i class="icon-exit"></i>
			</div>
		</header>
		<div class="main">
			<div class="aside">
				<el-menu
					background-color="#eaedf1"
					text-color="#666666"
					active-text-color="rgba(26, 188, 156, 0.8)"
					router
				>
					<el-menu-item-group>
						<template slot="title">系统首页</template>
						<el-menu-item
							v-for="(item,index) in menuList"
							:key="index"
							:index="item.path"
						>{{'• '+item.name}}</el-menu-item>
					</el-menu-item-group>
				</el-menu>
			</div>
			<div class="content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nav: [
					{
						name: "首页",
						childs: [
							{ name: "系统首页", path: "/home/homepage" },
							{ name: "账户设置", path: "/home/acount" },
							{ name: "系统信息", path: "/home/system" },
							{ name: "登陆日志", path: "/home/logs" }
						]
					},
					{ name: "商品", childs: [] },
					{ name: "订单", childs: [] },
					{ name: "库存", childs: [] },
					{ name: "用户", childs: [] },
					{ name: "促销", childs: [] },
					{ name: "运营", childs: [] },
					{ name: "统计", childs: [] },
					{ name: "财务", childs: [] },
					{ name: "设置", childs: [] },
					{ name: "权限", childs: [] }
				],
				menuList: [
					{ name: "系统首页", path: "/home/homepage" },
					{ name: "账户设置", path: "/home/acount" },
					{ name: "系统信息", path: "/home/system" },
					{ name: "登陆日志", path: "/home/logs" }
				]
			};
		},
		methods: {
			getMenu(arr) {
				console.log(this.$route);
				this.menuList = arr;
			}
		}
	};
</script>

<style lang="scss" scoped>
$header-bg-color: rgba(70, 76, 91, 0.898039215686275);
$aside-bg-color: rgba(234, 237, 241, 1);
header {
	min-width: 1240px;
	width: 100%;
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
			margin: 10px 40px 0;
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
.main {
	width: 100%;
	padding-top: 50px;
	display: flex;
	.aside {
		width: 180px;
		position: absolute;
		top: 50px;
		bottom: 0;
		background-color: $aside-bg-color;
		text-align: center;
	}
	.content {
		width: 100%;
		padding-left: 180px;
		display: flex;
		justify-content: center;
	}
}
</style>
<style lang="scss">
.main {
	.aside {
		.el-menu {
			.el-menu-item-group {
				ul {
					.el-menu-item {
						height: 40px;
						line-height: 40px;
						font-size: 14px;
						border-top: 1px solid rgba(228, 228, 228, 1);
						padding-left: 30px;
					}
					.el-menu-item:hover,
					.el-menu-item:focus {
						// background-color: red;
					}
				}
				.el-menu-item-group__title {
					padding: 0 20px;
					font-size: 16px;
					height: 50px;
					line-height: 50px;
					background-color: rgba(242, 242, 242, 1);
				}
			}
		}
	}
}
</style>