<template>
	<div class="back-to-top flex-box-column flex-h-center flex-v-center" @click="backToTop" v-show="show">
		<img src="/src/assets/images/backToTop.png" />
	</div>
</template>
<script>
export default {
	name: 'BackToTop',
	data() {
		return {
			show: false
		};
	},
	created() {
		window.addEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll() {
			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if (scrollTop > 800) {
				this.show = true;
			} else {
				this.show = false;
			}
		},
		backToTop() {
			let top = document.documentElement.scrollTop || document.body.scrollTop;
			// 实现滚动效果
			const timeTop = setInterval(() => {
				document.body.scrollTop = document.documentElement.scrollTop = top -= 400;
				if (top <= 0) {
					clearInterval(timeTop);
				}
			}, 10);
		}
	}
};
</script>

<style scoped lang="scss">
.back-to-top {
	position: fixed;
	right: 10px;
	bottom: 100px;
	font-size: 12px;
	background-color: rgba(255, 255, 255, 0.5);
	width: 40px;
	height: 40px;
	border-radius: 100%;
	color: #333;
	cursor: pointer;
	border: 1px solid #ccc;
}
@media screen and (max-width: 768px) {
	.back-to-top {
		display: none;
	}
}
</style>
