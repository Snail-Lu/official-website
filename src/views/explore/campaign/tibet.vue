<template>
	<div class="explore-campaign-container flex-box-column flex-v-center">
		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 mr-17">
				<img
					class="explore-img"
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/93893d02-455b-43f3-83a5-f62048fb7c7d.jpg@!1920"
				/>
			</div>

			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center">
				<div class="title">年楚河</div>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center mr-17">
				<div class="title">双湖县·普若岗日冰川</div>
			</div>
			<div class="flex-item-1">
				<img
					class="explore-img"
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/abb1238a-fdf1-42cb-be99-a58becb958f5.jpg@!1920"
				/>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 mr-17">
				<img
					class="explore-img"
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/f1b7e8ca-5732-4969-9505-574bbdba5e33.jpg@!1920"
				/>
			</div>
			<div class="flex-item-1">
				<img
					class="explore-img"
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/1efe1647-7266-48d0-a819-ce6cf9e0c9d1.jpg@!1920"
				/>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center mr-17">
				<div class="title">迫龙沟大桥</div>
			</div>
			<div class="flex-item-1">
				<img
					class="explore-img"
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/297fe6c1-4abf-4a90-9de3-8d5442a21cd2.jpg@!1920"
				/>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 mr-17">
				<img
					class="explore-img"
					src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/023a20c7-24e0-4d8a-b0f0-74808a690776.jpg@!1920"
				/>
			</div>

			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center">
				<div class="title">穹窿银城遗址</div>
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
