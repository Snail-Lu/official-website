<template>
	<div class="explore-container flex-box-column flex-v-center">
		<div class="block-1">
			<lazy-load-img
				src="http://cdn-usa.skypixel.com/uploads/usa_files/photo/image/1afd6068-be1f-47a6-8380-20f8eddb0b81.jpg@!1920"
			/>
		</div>

		<div class="block-2">
			<div class="title">四季</div>
			<div class="flex-box flex-h-center flex-v-center">
				<div class="flex-item-1 mr">
					<lazy-load-img
						src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/19ace05e-28f3-42e9-9e25-feea37d66281.jpg@!1920"
					/>
				</div>
				<div class="flex-item-1">
					<lazy-load-img
						src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/b186bff1-f641-48fb-a10c-65ca92bd23f9.jpg@!1920"
					/>
				</div>
			</div>
			<div v-if="showMore.season" style="margin-top: 16px">
				<div class="flex-box flex-h-center flex-v-center">
					<div class="flex-item-1 mr">
						<lazy-load-img
							src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/3400a904-b881-498f-8e19-22c8ccb10b62.jpg@!1920"
						/>
					</div>
					<div class="flex-item-1">
						<lazy-load-img
							src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/508c967c-58b6-4faa-9163-bdba87ac5839.jpg@!1920"
						/>
					</div>
				</div>
			</div>

			<div class="more-btn flex-box flex-h-center flex-v-center" @click="learnMore('season')">
				{{ showMore.season ? $t('explore.retract') : $t('explore.learnmore') }}
				<img class="retract-icon" src="/src/assets/images/retract.png" v-if="showMore.season" />
			</div>
		</div>

		<div class="block-3">
			<div class="title">旅行</div>
			<div class="flex-box flex-h-center">
				<div class="flex-item-1 mr">
					<lazy-load-img
						src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/8a03c0d3-39eb-4dd2-b651-b0a2db187e00.jpg@!1920"
					/>
				</div>
				<div class="flex-item-1 mr">
					<lazy-load-img
						src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/19c5c7e5-e614-4631-8436-2ad374f1d708.jpg@!1920"
					/>
				</div>
				<div class="flex-item-1">
					<lazy-load-img
						src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/dbc171b3-3e81-4ad3-a215-88bff12dd7ca.JPG@!1920"
					/>
				</div>
			</div>
		</div>

		<div class="block-4" style="margin-bottom: 70px">
			<div class="title">天空</div>
			<div class="flex-box flex-h-center">
				<div class="flex-item-2 mr">
					<lazy-load-img
						src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/6c3f83f7-fdf4-47a6-8091-d5e6e1e24f7c.jpg@!1920"
					/>
				</div>
				<div class="flex-item-1">
					<lazy-load-img
						src="https://cdn-hz.skypixel.com/uploads/cn_files/photo/image/646dff26-ed62-48db-ab64-a0e28b0d47f8.jpg@!1920"
					/>
				</div>
			</div>
		</div>

		<div class="block-3">
			<div class="title">山峰</div>
			<div class="flex-box flex-h-center">
				<div class="flex-item-1 mr">
					<lazy-load-img
						src="https://cdn-usa.skypixel.com/uploads/usa_files/photo/image/14363376-027b-435a-857a-5be4e3520212.jpg@!1920"
					/>
				</div>
				<div class="flex-item-1 mr">
					<lazy-load-img
						src="https://cdn-usa.skypixel.com/uploads/usa_files/photo/image/fd767ed6-30bb-4396-9c26-97f6b88ebd20.jpg@!1920"
					/>
				</div>
				<div class="flex-item-1">
					<lazy-load-img
						src="https://cdn-usa.skypixel.com/uploads/usa_files/photo/image/0259d2d9-e6f3-45c7-bcbf-ab477b1deb25.jpg@!1920"
					/>
				</div>
			</div>
		</div>

		<div class="block-4">
			<div class="title">日出日落</div>
			<div class="flex-box flex-h-center">
				<div class="flex-item-1 mr">
					<lazy-load-img
						src="https://cdn-usa.skypixel.com/uploads/usa_files/photo/image/50c7b1c8-55d8-450c-8465-adbcc98aaeb6.jpg@!1920"
					/>
				</div>
				<div class="flex-item-1">
					<lazy-load-img
						src="https://cdn-usa.skypixel.com/uploads/usa_files/photo/image/7b14cb1c-5604-4fa1-b4b0-93612eafa37a.JPG@!1920"
					/>
				</div>
			</div>
			<div v-if="showMore.sun" style="margin-top: 16px">
				<div class="flex-box flex-h-center">
					<div class="flex-item-1 mr">
						<lazy-load-img
							src="https://cdn-usa.skypixel.com/uploads/usa_files/photo/image/be6d281f-100c-4510-9133-535500e7df6b.jpg@!1920"
						/>
					</div>
					<div class="flex-item-1">
						<lazy-load-img
							src="https://cdn-usa.skypixel.com/uploads/usa_files/photo/image/14cb6ffc-888f-488c-9c82-5fc7a31d52b3.jpg@!1920"
						/>
					</div>
				</div>
			</div>
			<div class="more-btn flex-box flex-h-center flex-v-center" @click="learnMore('sun')">
				{{ showMore.sun ? $t('explore.retract') : $t('explore.learnmore') }}
				<img class="retract-icon" src="/src/assets/images/retract.png" v-if="showMore.sun" />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'explore',
	data() {
		return {
			showMore: {
				season: false,
				sun: false
			}
		};
	},
	methods: {
		linkTo(router) {
			this.$router.push(router);
		},
		learnMore(key) {
			const { showMore } = this;
			this.showMore[key] = showMore[key] ? false : true;
		}
	}
};
</script>

<style scoped lang="scss">
.explore-container {
	font-size: 18px;
	color: #000;
	font-weight: 400;

	.title {
		margin: 33px 0 41px;
	}

	.sub-title {
		font-size: 14px;
		color: #333;
		margin: 29px 0 33px;
	}

	.mr {
		margin-right: 16px;
	}

	.more-btn {
		width: 269px;
		height: 58px;
		line-height: 58px;
		border: 1px solid #aaa;
		font-size: 18px;
		text-align: center;
		margin: 30px auto 30px;
		cursor: pointer;
		border-radius: 8px;
		color: #999;
		user-select: none;

		&:hover {
			border-color: #333;
			color: #333;
			// background-color: #000;
			// color: #fff;
		}

		.retract-icon {
			margin-left: 10px;
		}
	}

	.block-1 {
		width: 100%;
		font-size: 0;
		margin-bottom: 84px;
	}

	.block-2,
	.block-6 {
		width: 80%;
		padding: 0 10%;
	}

	.block-3,
	.block-4,
	.block-5,
	.block-7 {
		width: 80%;
	}

	.block-4,
	.block-7 {
		margin-top: 70px;
	}

	.block-5 {
		padding-bottom: 60px;
	}

	.explore-img {
		width: 100%;
		display: block;
		cursor: pointer;
	}
}

@media screen and (max-width: 768px) {
	.explore-container {
		.title {
			margin: 14px 0 9px;
			font-size: 14px;
		}

		.sub-title {
			font-size: 11px;
			margin: 9px 0 15px;
		}

		.mr {
			margin-right: 5px;
		}

		.more-btn {
			border: none;
			font-size: 12px;
			text-align: center;
			margin: 16px auto;
			text-decoration: underline;

			&:hover {
				background-color: transparent;
				color: #000;
			}

			.retract-icon {
				display: none;
			}
		}

		.block-1 {
			margin-bottom: 15px;
		}

		.block-2,
		.block-6 {
			width: 95%;
			padding: 0 2.5%;
		}

		.block-3,
		.block-4,
		.block-5,
		.block-7 {
			width: 95%;
		}
	}
}
</style>
