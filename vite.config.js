import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	base: process.env.NODE_ENV === 'production' ? '/official-website/' : '/',
	plugins: [vue()],
	server: {
		host: '0.0.0.0'
	},
	build: {
		outDir: 'dist'
	}
});
