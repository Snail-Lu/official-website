<template>
	<div class="about-container flex-box-column flex-h-center flex-v-center">
		<div class="title">{{ $t('header.friends') }}</div>
		<div class="sub-title">
			<a href="https://snail-lu.github.io" target="_blank" class="link-btn">个人博客</a>
			<a href="https://snail-lu.github.io/portfolio-vue" target="_blank" class="link-btn">作品集</a>
		</div>
		<img
			src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/203a32f2-5313-4d86-a2b3-3567c295d2ea.jpg@!1920"
			style="width: 100%"
		/>
	</div>
</template>
<script>
export default {};
</script>

<style scoped lang="scss">
.about-container {
	width: 80%;
	margin: 0 auto;

	.title {
		font-size: 18px;
		color: #333;
		margin-top: 44px;
	}

	.sub-title {
		font-size: 12px;
		color: #333;
		margin: 25px 0;
		text-align: center;
	}
	.link-btn {
		cursor: pointer;
		margin-right: 20px;
		&:last-child {
			margin-right: 0;
		}
	}
}

@media screen and (max-width: 768px) {
	.about-container {
		width: 100%;
		.title {
			font-size: 14px;
			color: #333;
			margin-top: 20px;
		}

		.sub-title {
			width: 92%;
			font-size: 22px;
			color: #333;
			margin: 25px 0;
			zoom: 0.5;
		}
	}
}
</style>
