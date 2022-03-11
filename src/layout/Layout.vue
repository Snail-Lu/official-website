<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Main from './Main.vue';
import BackToTop from './BackToTop.vue';
export default {
	name: 'Layout',
	components: {
		Header,
		Footer,
		Main,
		BackToTop
	}
};
</script>

<template>
	<Header></Header>
	<Main></Main>
	<slot></slot>
	<Footer></Footer>
	<back-to-top />
</template>

<style scoped></style>
