<template>
	<div class="footer-container">
		<div class="flex-box flex-h-between">
			<!-- 信息 -->
			<div>
				<div class="title">{{ $t('footer.information') }}</div>
				<div class="info flex-box">
					<div class="nav-link" @click="linkTo('/about/siteinfo')">{{ $t('header.siteInfo') }}</div>
					<div class="nav-link" @click="linkTo('/about/friends')">{{ $t('header.friends') }}</div>
				</div>
			</div>
			<div>
				<div class="title" style="text-align: right">{{ $t('footer.follow') }}</div>
				<div class="flex-box flex-v-center">
					<div class="wx-btn" @click="showPopup(1)"></div>
					<a href="https://weibo.com/login.php" target="_blank" class="wb-btn"> </a>
					<!-- <a href="https://www.tmall.com/" target="_blank" class="tm-btn"> </a> -->
					<!-- <div class="rb-btn" @click="showPopup(2)"></div> -->
				</div>
			</div>
		</div>

		<div class="flex-box flex-h-center">
			<img class="footer-logo" src="/src/assets/images/logo.png" />
		</div>

		<transition name="fade" mode="in-out">
			<div class="mask" v-if="isShowPopup" @click="isShowPopup = false" @touchmove.prevent>
				<div class="popup-box flex-box-column flex-h-center flex-v-center" @click.stop="">
					<div class="title">{{ showType == 1 ? $t('footer.wechat') : $t('footer.redbook') }}</div>
					<div class="code"></div>
				</div>
			</div>
		</transition>
	</div>
	<div class="copyright flex-box flex-h-center">
		<a class="copyright-g" href="http://beian.miit.gov.cn" target="_blank">工信部备案：xxxxx号-x</a>
		<div class="copyright-c">©2013-2022 xxxx有限公司</div>
	</div>
</template>
<script>
export default {
	name: 'Footer',
	data() {
		return {
			isShowPopup: false,
			showType: 1 // 1 wechat 2 red book
		};
	},
	methods: {
		linkTo(router) {
			this.$router.push(router);
			window.scrollTo(0, 0);
		},
		showPopup(showType = 1) {
			const { isShowPopup } = this;
			this.showType = showType;

			this.isShowPopup = !isShowPopup;
		}
	}
};
</script>

<style scoped lang="scss">
.footer-container {
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	padding: 38px 70px 0 70px;
	color: #333;
	font-size: 12px;
	font-weight: 400;
	position: relative;

	.title {
		font-weight: bold;
		margin-bottom: 19px;
	}

	.nav-link {
		width: 80px;
		height: 36px;
		line-height: 36px;
		cursor: pointer;
	}

	.wx-btn {
		width: 34px;
		height: 34px;
		background-image: url('../assets/images/wx.png');
		margin-left: 28px;
		&:hover {
			background-image: url('../assets/images/wx-active.png');
		}
	}
	.wb-btn {
		width: 34px;
		height: 34px;
		background-image: url('../assets/images/wb.png');
		background-size: 34px 34px;
		margin-left: 28px;
		&:hover {
			background-image: url('../assets/images/wb-active.png');
		}
	}
	.tm-btn {
		width: 34px;
		height: 34px;
		background-image: url('../assets/images/tm.png');
		margin-left: 28px;
		&:hover {
			background-image: url('../assets/images/tm-active.png');
		}
	}
	.rb-btn {
		width: 34px;
		height: 34px;
		background-image: url('../assets/images/rb.png');
		margin-left: 28px;
		&:hover {
			background-image: url('../assets/images/rb-active.png');
		}
	}

	.footer-logo {
		width: 50px;
		height: 50px;
		margin: 42px auto;
	}

	.mask {
		width: 95vw;
		height: 100vh;
		position: absolute;
		bottom: 0;
		left: 0;
	}

	.popup-box {
		width: 592px;
		height: 380px;
		background: #ffffff;
		box-shadow: 0px 0px 14px 0px #bcbcbc;
		transform: translateX(-50%);
		position: absolute;
		bottom: 38px;
		left: 50%;

		.close-icon {
			position: absolute;
			top: 0;
			right: 0;
			font-size: 20px;
			line-height: 1;
			padding: 5px 10px;
			cursor: pointer;
		}

		.title {
			font-size: 16px;
			font-weight: bold;
			margin-bottom: 20px;
		}

		.code {
			width: 150px;
			height: 150px;
			background: #d8d8d8;
			margin-bottom: 20px;
		}

		.contact-us {
			width: 100%;
			padding-top: 30px;
			font-size: 14px;
			font-weight: bold;
			text-align: center;
			border-top: 1px solid #d4d4d4;
			margin-bottom: 15px;
		}

		.open-hours {
			margin: 13px 0 10px;
		}
	}
}

.copyright {
	color: #333;
	font-size: 12px;
	font-weight: 400;
	padding: 12px 0 19px 70px;
}

.copyright-c {
	margin-left: 20px;
}

a {
	color: #000;
	text-decoration: none;

	&:visited {
		color: #000;
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

@media screen and (max-width: 768px) {
	.copyright {
		padding: 7px 0 12px;
		flex-direction: column;
		align-items: center;
		font-size: 1rem;
		color: #999;
	}

	.copyright-c {
		margin-left: 0;
	}

	.copyright-g {
		color: #999;
	}

	.info {
		flex-direction: column;
	}

	.footer-container {
		padding: 30px 20px 0 20px;
		margin-top: 90px;
		border-top: none;
		.wb-btn {
			width: 25px;
			height: 25px;
			background-image: url('../assets/images/wb-wap.png');
			background-size: 25px 25px;
			margin-left: 7px;
		}

		.wx-btn {
			width: 25px;
			height: 25px;
			background-image: url('../assets/images/wx-wap.png');
			background-size: 25px 25px;
			margin-left: 7px;
		}

		.tm-btn {
			width: 25px;
			height: 25px;
			background-image: url('../assets/images/tm-wap.png');
			background-size: 25px 25px;
			margin-left: 7px;
		}
		.rb-btn {
			width: 25px;
			height: 25px;
			background-image: url('../assets/images/rb-wap.png');
			background-size: 25px 25px;
			margin-left: 7px;
		}

		.mask {
			width: 100%;
			height: 100%;
			position: fixed;
			bottom: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.5);
			z-index: 1000;
		}

		.popup-box {
			width: 90%;
			height: 380px;
			background: #ffffff;
			box-shadow: 0px 0px 14px 0px #bcbcbc;
			transform: translate(-50%, -50%);
			position: absolute;
			top: 50%;
			left: 50%;
		}
	}
}
</style>
