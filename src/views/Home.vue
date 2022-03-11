<template>
	<layout>
		<div class="home-container">
			<div class="block-1">
				<lazy-load-img
					src="https://cdn-usa.skypixel.com/uploads/usa_files/story/bg_image/28fc146f-aad3-473b-b1d3-677e41a0711e.jpg@!story-bg"
					height="300px"
					wrapperClass="cursor-pointer"
					@click="linkTo('/explore/iceland')"
				/>
				<div class="title">冰岛</div>
			</div>

			<div class="block-2">
				<div class="flex-box flex-h-center">
					<div class="flex-item-1 first-img-box">
						<lazy-load-img
							wrapperClass="cursor-pointer"
							src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/6d3caf67-d498-4d49-a819-d82bac344b9b.jpg@!1920"
							@click="linkTo('/explore/shanghai')"
						/>
					</div>
					<div class="flex-item-1 flex-box-column flex-h-center flex-v-center">上海</div>
				</div>
			</div>

			<div class="block-2">
				<div class="flex-box flex-h-center">
					<div class="flex-item-1 flex-box-column flex-h-center flex-v-center">西藏</div>
					<div class="flex-item-1">
						<lazy-load-img
							wrapperClass="cursor-pointer"
							src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/1b32a36b-59bd-4b7d-8ba3-5ce702c3786e.jpg@!1920"
							@click="linkTo('/explore/tibet')"
						/>
					</div>
				</div>
			</div>

			<div class="block-2">
				<div class="flex-box flex-h-center">
					<div class="flex-item-1 first-img-box">
						<lazy-load-img
							wrapperClass="cursor-pointer"
							src="https://cdn-hz.skypixel.com/uploads/cn_files/storynode/image/d7b24793-fcb9-4c87-94be-232d78fe0e1b.jpg@!1200"
							@click="linkTo('/explore/australia')"
						/>
					</div>
					<div class="flex-item-1 flex-box-column flex-h-center flex-v-center">澳大利亚</div>
				</div>
			</div>

			<div class="block-2">
				<div class="flex-box flex-h-center">
					<div class="flex-item-1 flex-box-column flex-h-center flex-v-center">新疆</div>
					<div class="flex-item-1">
						<lazy-load-img
							wrapperClass="cursor-pointer"
							src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/adcb401e-e025-4d79-a361-7c4227fa26cf.jpg@!1920"
							@click="linkTo('/explore/xinjiang')"
						/>
					</div>
				</div>
			</div>
		</div>
	</layout>
</template>

<script>
import Layout from '../layout/Layout.vue';
export default {
	name: 'Home',
	components: {
		Layout
	},
	methods: {
		linkTo(router) {
			this.$router.push(router);
		}
	}
};
</script>

<style scoped lang="scss">
.home-container {
	font-size: 18px;
	color: #000;
	font-weight: 400;
	// width: 100%;

	.title {
		margin: 33px 0 40px;
		text-align: center;
	}

	.block-2 {
		padding: 0 28px 0 27px;
		margin-bottom: 20px;
	}

	.first-img-box {
		margin-right: 21px;
	}
}

@media screen and (max-width: 768px) {
	.home-container {
		.title {
			font-size: 14px;
			margin: 17px 0;
		}

		.block-2 {
			padding: 0 10px;
			margin-bottom: 20px;
		}

		.first-img-box {
			margin-right: 10px;
		}
	}
}
</style>
