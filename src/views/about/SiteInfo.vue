<template>
	<div class="about-container flex-box-column flex-h-center flex-v-center">
		<div class="title">{{ $t('header.siteInfo') }}</div>
		<div class="sub-title">{{ $t('header.siteDesc') }}</div>
		<lazy-load-img
			src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
