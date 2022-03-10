<template>
	<div class="header-container">
		<!-- web端导航栏 -->
		<div class="nav-box-web flex-box flex-h-between flex-v-center">
			<div class="flex-box flex-v-center">
				<img class="logo" src="/src/assets/images/logo.png" title="首页" @click="linkTo('/')" />
				<div class="nav-list flex-box">
					<div
						:class="{
							'nav-item': true,
							'nav-item-active': routerPath == '/collection',
							'nav-item-en': language == 'en'
						}"
						@click="linkTo('/collection')"
					>
						<span class="nav-item-txt">{{ $t('header.collection') }}</span>
					</div>
					<div
						:class="{ 'nav-item': true, 'nav-item-active': routerPath == '/explore' }"
						@click="linkTo('/explore')"
					>
						<span class="nav-item-txt">{{ $t('header.explore') }}</span>
					</div>
					<div
						:class="{
							'nav-item': true,
							'nav-item-active': routerPath == '/about'
						}"
						@mouseover="showSubNav"
						@mouseout="hideSubNav"
					>
						<span class="nav-item-txt">{{ $t('header.about') }}</span>
					</div>
				</div>
			</div>
			<div :title="language == 'cn' ? '切换语言' : 'switch language'" class="change-language-btn flex-box">
				<span
					class="btn flex-item-1"
					:class="[language == 'cn' ? 'selected-btn' : '']"
					@click="switchLanguage('cn')"
					>中</span
				>
				<span
					class="btn flex-item-1"
					:class="[language == 'en' ? 'selected-btn' : '']"
					@click="switchLanguage('en')"
					>EN</span
				>
			</div>
		</div>
		<!-- web端子导航栏 -->
		<div
			:class="{
				'sub-nav-box flex-box-column': true,
				'show-sub-nav-box': isShowSubNav,
				'sub-nav-box-cn': language == 'cn'
			}"
			@mouseover="showSubNav"
			@mouseout="hideSubNav"
		>
			<div class="sub-nav-item">
				<span class="sub-nav-item-txt" @click="linkTo('/about/siteinfo')">{{ $t('header.siteInfo') }}</span>
			</div>
			<div class="sub-nav-item">
				<span class="sub-nav-item-txt" @click="linkTo('/about/friends')">{{ $t('header.friends') }}</span>
			</div>
		</div>

		<!-- wap端导航栏 -->
		<div class="nav-box-wap flex-box flex-h-between flex-v-center">
			<div class="nav-list-response" @click="showWapNavPop = true">☰</div>
			<img class="logo" src="/src/assets/images/logo.png" title="首页" @click="linkTo('/')" />
			<div :title="language == 'cn' ? '切换语言' : 'switch language'" class="change-language-btn flex-box">
				<span
					class="btn flex-item-1"
					:class="[language == 'cn' ? 'selected-btn' : '']"
					@click="switchLanguage('cn')"
					>中</span
				>
				<span
					class="btn flex-item-1"
					:class="[language == 'en' ? 'selected-btn' : '']"
					@click="switchLanguage('en')"
					>EN</span
				>
			</div>
		</div>

		<!-- wap端弹出式导航栏 -->
		<div class="nav-box-wap-pop" v-if="showWapNavPop" @touchmove.prevent>
			<div class="flex-box flex-h-end">
				<img
					class="close-icon"
					src="/src/assets/images/close.png"
					title="关闭"
					@click="showWapNavPop = false"
				/>
			</div>
			<div>
				<div class="nav-item-wap" @click="linkTo('/collection')">{{ $t('header.collection') }}</div>
				<div class="nav-item-wap" @click="linkTo('/explore')">{{ $t('header.explore') }}</div>
				<div class="nav-item-wap">{{ $t('header.about') }}</div>
				<div class="sub-nav">
					<div class="sub-nav-item-wap" @click="linkTo('/story/siteinfo')">- {{ $t('header.siteInfo') }}</div>
					<div class="sub-nav-item-wap" @click="linkTo('/story/friends')">- {{ $t('header.friends') }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Header',
	data() {
		return {
			isShowSubNav: false,
			timer: null,
			showWapNavPop: false
		};
	},
	computed: {
		routerPath() {
			return this.$route.path;
		},
		language() {
			return this.$i18n.locale;
		}
	},
	methods: {
		linkTo(router) {
			this.showWapNavPop = false;
			this.$router.push(router);
		},

		switchLanguage(locale) {
			//设置中英文模式
			this.$i18n.locale = locale;
			//将用户设置存储到localStorage以便用户下次打开时使用此设置
			localStorage.setItem('langSet', this.$i18n.locale);
		},
		showSubNav() {
			clearTimeout(this.timer);
			this.isShowSubNav = true;
		},

		hideSubNav() {
			this.timer = setTimeout(() => {
				this.isShowSubNav = false;
			}, 50);
		}
	}
};
</script>

<style scoped lang="scss">
.header-container {
	position: sticky;
	top: 0;
	left: 0;
	background-color: #fff;
	border-bottom: 1px solid #d8d8d8;
	z-index: 999;
	width: 100%;
}

.logo {
	cursor: pointer;
	width: 50px;
	height: 50px;
	margin-right: 30px;
}
.nav-box-web {
	padding: 18px 80px;
	font-size: 16px;
	margin: 0 auto;

	.nav-item {
		width: 120px;
		text-align: center;
		cursor: pointer;
		position: relative;

		&-txt {
			height: 25px;
			line-height: 25px;
			&:hover {
				box-sizing: border-box;
				border-bottom: 1px solid #000;
			}
		}

		&-en {
			width: 150px;
		}
	}
}

.change-language-btn {
	cursor: pointer;
	user-select: none;
	font-size: 14px;
	border: 1px solid #ccc;
	width: 80px;
	color: #888;
	background-color: #ccc;

	.btn {
		width: 40px;
		text-align: center;
	}
}

.selected-btn {
	color: #000;
	background-color: #fff;
}

.sub-nav-box {
	transition: height 0.2s;
	overflow: hidden;
	position: absolute;
	top: 86px;
	left: 0;
	width: 100%;
	background-color: #fff;
	text-align: center;
	box-sizing: border-box;
	height: 0;
	padding-left: 429px;

	&-cn {
		padding-left: 402px;
	}

	.sub-nav-item {
		width: 120px;
		font-size: 12px;
		color: #333;
		// margin-bottom: 15px;
		cursor: pointer;
		height: 26px;
		line-height: 26px;
		position: relative;
		&:first-child {
			margin-top: 20px;
		}

		&-txt {
			white-space: nowrap;
			&:hover {
				box-sizing: border-box;
				border-bottom: 1px solid #000;
			}
		}
		&-txt-offset {
			margin-left: -35%;
		}
	}

	.story-img {
		width: 163px;
		height: 208px;
		background-color: #ccc;
		position: absolute;
		top: 28px;
		left: 900px;
	}
}
.show-sub-nav-box {
	height: 100px;
	border-bottom: 1px solid #d8d8d8;
}

.nav-list-response {
	display: none;
}
.nav-box-wap-pop {
	display: none;
}
.nav-box-wap {
	display: none;
}
@media screen and (max-width: 768px) {
	.nav-box-web {
		display: none;
	}
	.nav-box-wap {
		display: flex;
		padding: 28px 20px;
	}
	.nav-list {
		display: none;
	}

	.nav-list-response {
		display: block;
		font-size: 2rem;
	}

	.logo {
		margin-right: 0;
	}

	.nav-box-wap-pop {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		opacity: 0.9;
		width: 100vw;
		height: 100vh;
		background: #ffffff;
		box-sizing: border-box;

		.nav-item-wap {
			font-size: 17px;
			font-weight: 600;
			padding-left: 50px;
			margin-bottom: 38px;
			letter-spacing: 2px;

			&:nth-child(3) {
				margin-bottom: 2.3rem;
			}
		}

		.sub-nav-item-wap {
			font-size: 15px;
			font-weight: 400;
			padding-left: 50px;
			margin-bottom: 28px;
		}
	}

	.close-icon {
		width: 1.4rem;
		margin: 4rem 3rem;
	}
}
</style>
