<template>
	<div class="explore-campaign-container flex-box-column flex-v-center">
		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 mr-17">
				<lazy-load-img
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/b84ea69b-5518-4e20-8736-dda0a7e46ebe.jpg@!1920"
				/>
			</div>

			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center">
				<div class="title">上海中心</div>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center mr-17">
				<div class="title">陆家嘴</div>
			</div>
			<div class="flex-item-1">
				<lazy-load-img
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/6e3a73fa-99cf-41b5-a93b-7662171848d8.jpg@!1920"
				/>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 mr-17">
				<lazy-load-img
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/c98e012c-17f3-4b50-b3a0-889561c791b1.JPG@!1920"
				/>
			</div>
			<div class="flex-item-1">
				<lazy-load-img
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/e1bb5deb-5410-4622-9b03-329242196946.JPG@!1920"
				/>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center mr-17"></div>
			<div class="flex-item-1">
				<lazy-load-img
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/9cd4d14f-d038-4535-8728-dedae7ececf6.jpeg@!1920"
				/>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 mr-17">
				<lazy-load-img
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/8d563140-d702-43dd-b755-c954ba7858f4.jpg@!1920"
				/>
			</div>

			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center">
				<div class="title">前滩东方体育中心</div>
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
