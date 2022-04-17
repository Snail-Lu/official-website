<template>
	<div class="collection-detail-container">
		<div class="header" v-if="data">{{ $t('collection.collection') }} > {{ data.category }}</div>

		<div class="image-box">
			<div class="preview-box">
				<div class="prev-btn" @click="onPrev">
					<img class="btn-img" src="/src/assets/images/look-pre.png" />
				</div>
				<div class="preview-content flex-box-column flex-v-center" v-if="data">
					<div class="title">{{ data.category }}</div>
					<img class="preview-img" :src="data.detailImageList[currentSliderIndex].url" />
					<div class="indicator">{{ currentSliderIndex + 1 }}/{{ data.detailImageList.length }}</div>
				</div>

				<div class="next-btn" @click="onNext">
					<img class="btn-img" src="/src/assets/images/look-next.png" />
				</div>
			</div>
			<div class="image-list-box">
				<div class="prev-btn flex-box flex-h-center flex-v-center" @click="onPrev">
					<img src="/src/assets/images/look-up.png" />
				</div>
				<div class="scroll-box-wrapper">
					<div class="scroll-box" :style="{ top }">
						<div
							class="scroll-item flex-shrink-0"
							v-for="(item, index) in data.detailImageList"
							:key="index"
							@click="onSelectImage(index)"
						>
							<img class="scroll-img" :src="item.thumbnailUrl" />
							<img class="scroll-img-wap" :src="item.url" />
							<div class="scroll-mask" v-if="currentSliderIndex != index"></div>
						</div>
					</div>
				</div>

				<div class="next-btn flex-box flex-h-center flex-v-center" @click="onNext">
					<img src="/src/assets/images/look-down.png" />
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { computed, reactive, ref } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { onMounted } from '@vue/runtime-core';
import list from '../../assets/config/collection';

const currentSliderIndex = ref(0);
const currentScrollIndex = ref(0);
const dataList = reactive(list);
const dataId = ref(1);
const route = useRoute();

onMounted(() => {
	const { id } = route.query;
	dataId.value = id;
});

// 获取当前数据
const data = computed(() => {
	if (dataId.value) {
		return dataList.find((item) => item.id == dataId.value);
	}
	return {};
});

const top = computed(() => {
	return -currentScrollIndex.value * 138 + 'px';
});

// 前翻
const onPrev = () => {
	if (currentScrollIndex.value > 0) {
		currentScrollIndex.value--;
		currentSliderIndex.value--;
	} else if (currentSliderIndex.value > 0) {
		currentSliderIndex.value--;
	}
};

// 后翻
const onNext = () => {
	if (currentScrollIndex.value < data.value.detailImageList.length - 3) {
		currentScrollIndex.value++;
		currentSliderIndex.value++;
	} else if (currentSliderIndex.value < data.value.detailImageList.length - 1) {
		currentSliderIndex.value++;
	}
};

const onSelectImage = (index) => {
	currentSliderIndex.value = index;
};
</script>

<style scoped lang="scss">
.collection-detail-container {
	font-size: 18px;
	color: #000;
	font-weight: 400;
	padding: 0 0 30px 8px;

	.header {
		height: 50px;
		border-bottom: 1px solid #d8d8d8;
		line-height: 50px;
		padding-left: 50px;
		font-size: 12px;
		color: #333;
	}

	.image-box {
		display: flex;
		justify-content: center;
	}

	.preview-box {
		position: relative;
		.preview-content {
			min-width: 400px;
		}
		.title {
			text-align: center;
			height: 80px;
			line-height: 80px;
		}
		.preview-img {
			width: 800px;
			height: 550px;
			object-fit: cover;
		}

		.indicator {
			font-size: 14px;
			color: #333;
			text-align: center;
			margin-top: 10px;
		}

		.prev-btn {
			position: absolute;
			top: 50%;
			left: -100px;
			width: 62px;
			height: 62px;
			transform: translateY(-50%);
			cursor: pointer;
		}
		.next-btn {
			position: absolute;
			top: 50%;
			right: -100px;
			width: 62px;
			height: 62px;
			transform: translateY(-50%);
			cursor: pointer;
		}
	}

	.image-list-box {
		height: 530px;
		width: 160px;
		margin: 100px 0 0 200px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.prev-btn {
			background-color: rgba(0, 0, 0, 0.4);
			width: 160px;
			height: 46px;
			cursor: pointer;
			user-select: none;
		}
		.next-btn {
			background-color: rgba(0, 0, 0, 0.4);
			width: 160px;
			height: 46px;
			cursor: pointer;
			user-select: none;
		}

		.scroll-box-wrapper {
			position: relative;
			box-sizing: border-box;
			margin: 23px 0;
			background-color: #fff;
			overflow: hidden;
			flex: 1;
		}

		.scroll-box {
			position: absolute;
			top: 0;
			left: 0;
			transition: top 0.5s;
		}

		.scroll-item {
			box-sizing: border-box;
			margin-bottom: 24px;
			width: 160px;
			height: 114px;
			overflow: hidden;
			position: relative;
			cursor: pointer;

			.scroll-img {
				width: 100%;
				height: auto;
				// object-fit: fill;
			}

			.scroll-img-wap {
				display: none;
			}
			.scroll-mask {
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.4);
				position: absolute;
				top: 0;
				left: 0;
			}
		}
	}
}

@media screen and (max-width: 768px) {
	.collection-detail-container {
		padding-left: 0;
		.header {
			display: none;
		}

		.image-box {
			width: 100%;
			flex-direction: column;
		}

		.preview-box {
			position: relative;
			display: flex;
			justify-content: center;

			.preview-content {
				min-width: 0;
				width: 75%;
			}
			.title {
				text-align: center;
				height: 60px;
				line-height: 60px;
				font-size: 14px;
			}
			.preview-img {
				width: 100%;
				// height: 670px;
				height: auto;
				object-fit: cover;
			}

			.indicator {
				font-size: 12px;
				color: #333;
				text-align: center;
				margin-top: 10px;
			}
			.prev-btn {
				position: absolute;
				top: 50%;
				left: 0;
				width: 40px;
				height: 40px;
				transform: translateY(-50%);
				cursor: pointer;
			}
			.next-btn {
				position: absolute;
				top: 50%;
				right: 0;
				width: 40px;
				height: 40px;
				transform: translateY(-50%);
				cursor: pointer;
			}

			.btn-img {
				width: 40px;
				height: 40px;
			}
		}

		.image-list-box {
			height: auto;
			// height: 50px;
			width: 75%;
			margin: 0;
			margin-left: 12.5%;
			flex-direction: row;

			.prev-btn {
				background-color: rgba(0, 0, 0, 0.4);
				width: 160px;
				height: 46px;
				cursor: pointer;
				user-select: none;
				display: none;
			}
			.next-btn {
				background-color: rgba(0, 0, 0, 0.4);
				width: 160px;
				height: 46px;
				cursor: pointer;
				user-select: none;
				display: none;
			}

			.scroll-box-wrapper {
				position: relative;
				box-sizing: border-box;
				margin: 0;
				background-color: #fff;
				overflow: hidden;
				margin-top: 25px;
			}

			.scroll-box {
				position: static;
				display: flex;
				overflow-x: scroll;
			}

			.scroll-item {
				box-sizing: border-box;
				margin: 0 10px 0 0;
				width: 55px;
				height: auto;
				overflow: hidden;
				position: relative;
				cursor: pointer;

				.scroll-img {
					width: 100%;
					height: auto;
					display: none;
					// object-fit: fill;
				}

				.scroll-img-wap {
					display: block;
					width: 100%;
					height: 83px;
				}
				.scroll-mask {
					width: 56px;
					height: 100%;
					background: rgba(0, 0, 0, 0.4);
					position: absolute;
					top: 0;
					left: 0;
				}
			}
		}
	}
}
</style>
