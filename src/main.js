import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index';
import { createI18n } from 'vue-i18n';
import cn from './assets/i18n/cn';
import en from './assets/i18n/en';

const i18n = createI18n({
	locale: localStorage.getItem('langSet') || 'cn', //缓存获取用户中英文选择，没有则默认中文
	messages: {
		cn, // 中文语言包
		en // 英文语言包
	}
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');
