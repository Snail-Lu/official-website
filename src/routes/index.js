import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
const routes = [
	{
		path: '',
		component: Home
	},
	{
		path: '/',
		component: () => import('../components/Layout.vue'),
		children: [
			{
				path: 'collection',
				name: 'collection',
				component: () => import('../views/collection/index.vue')
			},
			{
				path: '/collection/detail',
				name: 'collectionDetail',
				component: () => import('../views/collection/detail.vue')
			},
			{
				path: '/about/siteinfo',
				name: 'history',
				component: () => import('../views/about/siteInfo.vue')
			},
			{
				path: '/about/friends',
				name: 'friends',
				component: () => import('../views/about/Friends.vue')
			},
			{
				path: '/explore',
				name: 'explore',
				component: () => import('../views/explore/index.vue')
			},
			{
				path: '/explore/iceland',
				name: 'iceland',
				component: () => import('../views/explore/campaign/iceland.vue')
			},
			{
				path: '/explore/shanghai',
				name: 'shanghai',
				component: () => import('../views/explore/campaign/shanghai.vue')
			},
			{
				path: '/explore/tibet',
				name: 'tibet',
				component: () => import('../views/explore/campaign/tibet.vue')
			},
			{
				path: '/explore/xinjiang',
				name: 'xinjiang',
				component: () => import('../views/explore/campaign/xinjiang.vue')
			},
			{
				path: '/explore/australia',
				name: 'australia',
				component: () => import('../views/explore/campaign/australia.vue')
			}
		]
	}
];

export default createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.path === '/explore' && savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	}
});
