<template>
	<div class="collection-container">
		<div class="slider-box-wrapper" :style="{ height: sliderHeight + 'px' }">
			<div class="slider-box flex-box flex-h-between flex-nowrap" :style="{ left }">
				<div
					class="slider-item flex-shrink-0"
					v-for="(item, index) in dataList"
					:key="index"
					@click="linkTo(item.id)"
				>
					<img ref="slider" class="slider-img" :src="item.mainImageUrl" @load="getImageHeight" />
					<div class="title">{{ item.category }}</div>
				</div>
			</div>

			<div class="prev-btn" @click="onPrev">
				<img src="/src/assets/images/arrowleft.png" />
			</div>
			<div class="next-btn" @click="onNext">
				<img src="/src/assets/images/arrowright.png" />
			</div>
		</div>

		<div class="slider-box-wrapper-wap" :style="{ height: wapSliderHeight + 'px' }">
			<div class="slider-box flex-box flex-h-between flex-nowrap" :style="{ left: wapLeft }">
				<div
					class="slider-item flex-shrink-0"
					v-for="(item, index) in dataList"
					:key="index"
					@click="linkTo(item.id)"
				>
					<img ref="wapSlider" class="slider-img" :src="item.mainImageUrl" @load="getWapImageHeight" />
					<div class="title">{{ item.category }}</div>
				</div>
			</div>
		</div>

		<div class="prev-btn-wap" @click="onPrevWap">
			<img class="btn-img" src="/src/assets/images/look-pre.png" />
		</div>
		<div class="next-btn-wap" @click="onNextWap">
			<img class="btn-img" src="/src/assets/images/look-next.png" />
		</div>
	</div>
</template>
<script>
import dataList from '../../assets/config/collection';
export default {
	name: 'Collection',
	data() {
		return {
			currentIndex: 0,
			sliderHeight: 0, // 轮播高度
			wapSliderHeight: 0,
			dataList
		};
	},
	computed: {
		left() {
			return -this.currentIndex * 25 + '%';
		},
		wapLeft() {
			return -this.currentIndex * 100 + '%';
		}
	},
	methods: {
		// 前翻
		onPrev() {
			const { currentIndex } = this;
			if (currentIndex > 0) {
				this.currentIndex = currentIndex - 1;
			}
		},

		// 后翻
		onNext() {
			const { currentIndex, dataList } = this;
			if (currentIndex < dataList.length - 4) {
				this.currentIndex = currentIndex + 1;
			}
		},

		// 前翻
		onPrevWap() {
			const { currentIndex } = this;
			if (currentIndex > 0) {
				this.currentIndex = currentIndex - 1;
			}
		},

		// 后翻
		onNextWap() {
			const { currentIndex, dataList } = this;
			if (currentIndex < dataList.length - 1) {
				this.currentIndex = currentIndex + 1;
			}
		},

		// 获取图片高度
		getImageHeight(e) {
			if (!this.sliderHeight) {
				const height = this.$refs['slider'].offsetHeight;
				this.sliderHeight = height ? height : 0;
			}
		},

		// 获取图片高度
		getWapImageHeight(e) {
			if (!this.sliderHeight) {
				const height = this.$refs['wapSlider'].offsetHeight;
				this.wapSliderHeight = height ? height : 0;
			}
		},

		// 跳转详情
		linkTo(id) {
			this.$router.push({ path: '/collection/detail', query: { id } });
		}
	}
};
</script>

<style scoped lang="scss">
// @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
// 	.title {
// 		font-size: 15px !important;
// 	}
// }
.collection-container {
	font-size: 15px;
	color: #000;
	font-weight: 400;
	padding-left: 8px;
	position: relative;

	.slider-box-wrapper-wap {
		display: none;
		margin-top: 30px;
	}

	.slider-box-wrapper {
		overflow: hidden;
		position: relative;
		// height: auto;
		box-sizing: border-box;
		width: 100%;
		background-color: #fff;
		margin-top: 30px;
	}

	.slider-box {
		// height: 900px;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transition: left 0.5s;
	}

	.slider-item {
		width: 25%;
		box-sizing: border-box;
		padding-right: 10px;
		position: relative;

		.title {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 24px;
			font-weight: 400;
			color: #fff;
			z-index: 100;
			white-space: nowrap;
		}

		&::after {
			content: '';
			display: block;
			position: absolute;
			width: calc(100% - 10px);
			height: 100%;
			top: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.4);
		}

		&:hover {
			&::after {
				background: none;
			}

			.title {
				display: none;
			}
		}

		.slider-img {
			width: 100%;
			display: block;
			height: auto;
			position: relative;
		}
	}

	.prev-btn-wap,
	.next-btn-wap {
		display: none;
	}

	.prev-btn {
		position: absolute;
		top: 50%;
		left: 0;
		background-color: rgba(0, 0, 0, 0.2);
		width: 62px;
		height: 62px;
		transform: translateY(-50%);
		cursor: pointer;
	}
	.next-btn {
		position: absolute;
		top: 50%;
		right: 10px;
		background-color: rgba(0, 0, 0, 0.2);
		width: 62px;
		height: 62px;
		transform: translateY(-50%);
		cursor: pointer;
	}
}

@media screen and (max-width: 768px) {
	.collection-container {
		.slider-box-wrapper {
			display: none;
		}

		.slider-box-wrapper-wap {
			display: block;
			overflow: hidden;
			position: relative;
			box-sizing: border-box;
			width: 75%;
			margin-left: 12.5%;
			background-color: #fff;
		}

		.slider-box {
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			transition: left 0.5s;
		}

		.slider-item {
			width: 100%;
			box-sizing: border-box;
			padding-right: 0;
			position: relative;

			&::after {
				content: '';
				position: absolute;
				width: calc(100% - 10px);
				height: 100%;
				top: 0;
				left: 0;
				background: rgba(0, 0, 0, 0.4);
			}

			.title {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				font-size: 18px;
				font-weight: 400;
				color: #fff;
				z-index: 100;
				white-space: nowrap;
			}

			&::after {
				content: '';
				display: block;
				position: absolute;
				width: calc(100%);
				height: 100%;
				top: 0;
				left: 0;
				background: rgba(0, 0, 0, 0.4);
			}

			.slider-img {
				width: 100%;
				display: block;
				height: auto;
				position: relative;
			}
		}

		.prev-btn,
		.next-btn {
			display: none;
		}

		.prev-btn-wap {
			display: block;
			position: absolute;
			top: 50%;
			left: 0;
			width: 40px;
			height: 40px;
			transform: translateY(-50%);
			background-color: transparent;
		}
		.next-btn-wap {
			display: block;
			position: absolute;
			top: 50%;
			right: 0;
			width: 40px;
			height: 40px;
			transform: translateY(-50%);
			background-color: transparent;
		}
		.btn-img {
			width: 40px;
			height: 40px;
		}
	}
}
</style>
