<template>
	<div class="explore-campaign-container flex-box-column flex-v-center">
		<!-- 单张横图 -->
		<div class="block-1 flex-box-column">
			<img
				class="explore-img"
				src="https://cdn-usa.skypixel.com/uploads/usa_files/storynode/image/214c3e7a-767d-41b3-9dcc-c43df9b2e5fd.jpg@!1200"
			/>
			<div>
				Reynisfjara黑沙滩
				<span class="desc">冰岛最著名的黑沙滩，入选多个媒体评选的“世界最佳X个沙滩”的评选中</span>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 mr-17">
				<img
					class="explore-img"
					src="https://cdn-usa.skypixel.com/uploads/usa_files/storynode/image/6c23f676-d22d-4103-a230-40247a9e08a4.jpg@!1200"
				/>
			</div>

			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center">
				<div class="title">黄金瀑布</div>
				<div class="sub-title">冰岛黄金圈的大瀑布</div>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center mr-17">
				<div class="title">一号公路</div>
				<div class="sub-title">冰岛环岛一号公路，通往冰岛各个景点</div>
			</div>
			<div class="flex-item-1">
				<img
					class="explore-img"
					src="https://cdn-usa.skypixel.com/uploads/usa_files/storynode/image/cef44a9d-67dc-4c89-8daa-f58ce81d9e99.jpg@!1200"
				/>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 mr-17">
				<img
					class="explore-img"
					src="https://cdn-usa.skypixel.com/uploads/usa_files/storynode/image/9ed78457-e30b-4196-a06a-5abb7cc90f08.jpg@!1200"
				/>
			</div>

			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center">
				<div class="title">Gljufrafoss</div>
				<div class="sub-title">
					在著名的塞里雅兰瀑布以北几百米，这个瀑布处在半封闭的空间中，非常神奇，值得一去
				</div>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center mr-17">
				<div class="title">塞里雅兰瀑布</div>
				<div class="sub-title">
					冰岛的地标型瀑布之一，从60米高的断崖上倾泻而下，后面人们可以走过去，冰川运动的杰作
				</div>
			</div>
			<div class="flex-item-1">
				<img
					class="explore-img"
					src="https://cdn-usa.skypixel.com/uploads/usa_files/storynode/image/6e044548-5158-4235-82cf-be6dc40e1ef2.jpg@!1200"
				/>
			</div>
		</div>

		<!-- 双列图 -->
		<div class="block-2 flex-box">
			<div class="flex-item-1 mr-17">
				<img
					class="explore-img"
					src="https://cdn-usa.skypixel.com/uploads/usa_files/storynode/image/83007411-17f9-4b80-ae17-a184546e7a58.jpg@!1200"
				/>
			</div>

			<div class="flex-item-1 flex-box-column flex-h-center flex-v-center">
				<div class="title">斯科加瀑布</div>
				<div class="sub-title">冰岛又一个地标型的瀑布</div>
			</div>
		</div>

		<!-- 单张横图 -->
		<div class="block-1 flex-box-column">
			<img
				class="explore-img"
				src="https://cdn-usa.skypixel.com/uploads/usa_files/storynode/image/d0757160-7931-4d58-b63b-2298b204ad72.jpg@!1200"
			/>
			<div>
				众神瀑布
				<span class="desc">可能是冰岛最美的瀑布</span>
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
		// font-size: 0;
		margin-bottom: 30px;
	}

	.desc {
		font-size: 14px;
		color: #777;
	}

	.block-2 {
		width: 80%;
		padding: 0 10%;
		margin-bottom: 35px;

		.title {
			font-weight: 400;
			font-size: 14px;
			color: #333;
		}

		.sub-title {
			color: #333;
			font-size: 12px;
			margin-top: 14px;
			text-align: center;
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
			}
		}
	}
}
</style>
