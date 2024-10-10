<template>
	<div class="pageOutput">
		<PageIntro icon="shine" v-bind="{ title }" />
	</div>
</template>

<script setup lang="ts">
import PageIntro from '~/components/elements/PageIntro.vue';
import test001 from '~/../workflows/test001.json';

// Page Settings ------------------
definePageMeta({
	middleware: 'generate',
	page: {
		type: 'center',
		isGenerateSetting: false,
		header: { back: 1, title: '背景美術生成', close: 0, menu: false, logo: true, avatar: false }
	}
})

// Computed ----------------------
const title = computed(() => {
	return `0/0 生成`
})

// Lifecycle Hooks ------------------
onMounted(async () => {
	useProcessing().open({ progress: true });
	await useComfyUI().loadGraph(JSON.stringify(test001));
	useComfyUI().queueStart();
	useProcessing().close();
})
</script>

<style lang="scss">
$cn: ".pageOutput"; // コンポーネントクラス名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =="base" {}

	@if $mode =="darkmode" {}

	@if $mode =="auto" {}
}
</style>
