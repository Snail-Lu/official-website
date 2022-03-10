<template>
	<div class="explore-campaign-container flex-box-column flex-v-center">
		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 mr-17">
				<img
					class="explore-img"
					src="https://cdn-usa.skypixel.com/uploads/usa_files/photo/image/2616016f-409f-4213-b5c7-0bbbf77fef84.jpeg@!1920"
				/>
			</div>

			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center">
				<div class="title">赛里木湖</div>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center mr-17">
				<div class="title">可可托海地质公园</div>
			</div>
			<div class="flex-item-1">
				<img
					class="explore-img"
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/a79525f8-2f2c-421f-ad09-b98a4fec7cac.jpg@!1920"
				/>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 mr-17">
				<img
					class="explore-img"
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/078d193c-4589-43c2-9fa4-bf7be803e551.jpg@!1920"
				/>
			</div>
			<div class="flex-item-1">
				<img
					class="explore-img"
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/e098984a-b6a7-4307-bd10-60085e312dc9.jpg@!1920"
				/>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center mr-17">
				<div class="title">尉犁县</div>
			</div>
			<div class="flex-item-1">
				<img
					class="explore-img"
					src="https://cdn-usa.skypixel.com/uploads/usa_files/photo/image/964fdf0a-38fd-429d-8c3c-54c61411276a.jpeg@!1920"
				/>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 mr-17">
				<img
					class="explore-img"
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/07fd204a-f69c-4e46-9320-e11ee6e92d07.jpeg@!1920"
				/>
			</div>

			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center">
				<div class="title">南山</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'exploreDetail',
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
