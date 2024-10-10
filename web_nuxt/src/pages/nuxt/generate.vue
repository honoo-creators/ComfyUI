<template>
	<div class="pageGenerate">
		<NuxtPage />
	</div>
</template>

<script setup lang="ts">
// Page Settings ------------------
definePageMeta({
	middleware: 'generate',
	page: {
		type: 'center',
		isGenerateSetting: true,
		header: { back: 1, title: '背景美術生成', close: 0, menu: false, logo: true, avatar: false }
	}
})
</script>

<style lang="scss">
$cn: ".pageGenerate"; // コンポーネントクラス名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =="base" {
		position: relative;

		&-header {
			position: absolute;
			top: 0;
		}
	}

	@if $mode =="darkmode" {}

	@if $mode =="auto" {}
}
</style>
