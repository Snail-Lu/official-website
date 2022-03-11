<template>
	<div class="explore-campaign-container flex-box-column flex-v-center">
		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 mr-17">
				<lazy-load-img
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/6be1e416-a937-405c-9183-0ab5dfd1d1f2.jpg@!1920"
				/>
			</div>

			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center">
				<div class="title">大洋路</div>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center mr-17">
				<div class="title">凯恩斯</div>
			</div>
			<div class="flex-item-1">
				<lazy-load-img
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/4fadafb9-594d-4cf5-a3e4-d27058696dbe.jpg@!1920"
				/>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 mr-17">
				<lazy-load-img
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/99a7e69f-5132-49b7-b984-2aea7b5a71c3.jpg@!1920"
				/>
			</div>
			<div class="flex-item-1">
				<lazy-load-img
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/b8222ae8-837b-464a-bb9a-411c1a791948.jpg@!1920"
				/>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center mr-17">
				<div class="title">海边小镇KIAMA</div>
			</div>
			<div class="flex-item-1">
				<lazy-load-img
					src="https://cdn-usa.skypixel.com/uploads/usa_files/photo/image/9611eb71-f6bf-49e4-8f0b-e4287d7ce132.JPG@!1920"
				/>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 mr-17">
				<lazy-load-img
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/954de55b-0aa2-4fbb-af0e-617a72d26c69.jpg@!1920"
				/>
			</div>

			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center">
				<div class="title">悉尼歌剧院</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	}
};
</script>

<style scoped lang="scss">
.explore-campaign-container {
	font-size: 18px;
	color: #000;
	font-weight: 400;

	.block-1 {
		width: 80%;
		font-size: 0;
		margin-bottom: 30px;
	}

	.block-2 {
		width: 80%;
		padding: 0 10%;
		margin-bottom: 35px;

		.title {
			font-weight: bold;
			font-size: 14px;
			color: #333;
		}

		.sub-title {
			color: #333;
			font-size: 12px;
			margin-top: 14px;
		}
	}

	.explore-img {
		width: 100%;
		display: block;
	}

	.mr-17 {
		margin-right: 17px;
	}
}

@media screen and (max-width: 768px) {
	.explore-campaign-container {
		font-size: 13px;
		.mr-17 {
			margin-right: 5px;
		}

		.block-1 {
			width: 95%;
			margin-bottom: 15px;
		}

		.block-2 {
			width: 95%;
			padding: 0 2.5%;
			margin-bottom: 15px;

			.title {
				font-weight: 400;
				font-size: 13px;
				color: #333;
			}

			.sub-title {
				width: 90%;
				color: #333;
				font-size: 20px;
				margin-top: 10px;
				zoom: 0.5;
				text-align: center;
			}
		}
	}
}
</style>
