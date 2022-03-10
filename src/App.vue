<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
	<router-view></router-view>
</template>

<style>
@import '../src/assets/css/media.css';
@import '../src/assets/css/font.css';
body {
	margin: 0;
	-webkit-tap-highlight-color: transparent;
}

#app {
	font-family: myfont;
}

.overflow-hidden {
	overflow: hidden;
}

/*公共css */
.flex-box {
	display: flex;
}
.flex-h-between {
	justify-content: space-between;
}
.flex-h-center {
	justify-content: center;
}
.flex-h-around {
	justify-content: space-around;
}
.flex-h-end {
	justify-content: flex-end;
}
.flex-box-v {
	display: flex;
	flex-direction: column;
}
.flex-v-center {
	align-items: center;
}
.flex-v-end {
	align-items: flex-end;
}

.flex-wrap {
	flex-wrap: wrap;
}

.flex-nowrap {
	flex-wrap: nowrap;
}
.flex-item-1 {
	flex: 1;
}
.flex-item-2 {
	flex: 2;
}
.flex-item-3 {
	flex: 3;
}
.flex-item-4 {
	flex: 4;
}
.flex-item-5 {
	flex: 5;
}
.flex-shrink-0 {
	flex-shrink: 0;
}
.flex-box-column {
	display: flex;
	flex-direction: column;
}
/* 单行文本，超出省略 */
.singleline-text {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.cursor-pointer {
	cursor: pointer;
}
</style>
