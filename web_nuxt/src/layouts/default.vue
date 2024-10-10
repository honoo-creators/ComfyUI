<template>
	<div class="layoutDefault">
		<Box v-resize="(rect: DOMRectReadOnly) => headerHeight = rect.height" class="layoutDefault-header">
			<HeaderWide v-if="isShowHeader" v-bind="header" />
			<Container v-if="isGenerateSetting" wide :no-padding="isScreenSizeAbove('l')">
				<GenerateSettingList />
			</Container>
		</Box>
		<Page class="layoutDefault-page" :top-space="pageTopSpace" :center="pageType === 'center'" bottom-space="80">
			<NuxtPage />
		</Page>
	</div>
</template>

<script setup lang="ts">
import HeaderWide from '~/components/navigation/HeaderWide.vue'
import GenerateSettingList from '~/components/navigation/GenerateSettingList.vue'

// Types --------------------------------------------------
export type PageMeta = {
	type?: 'center' | ''
	isGenerateSetting?: boolean
	header?: Header
}
type Header = {
	title?: string
	back?: number | string
	close?: number | string
	logo?: boolean
	menu?: boolean | (() => void)
	menuNotice?: boolean
	globalMenu?: boolean
	search?: boolean
	avatar?: boolean
}

// Composables --------------------------------------------------
const { isScreenSizeAbove } = useMediaQuery()

// Data -----------------------------------------------------
const headerHeight = ref(0)

// Computed -----------------------------------------------------
const pageMeta = computed<PageMeta>(() => {
	return useRoute().meta.page as PageMeta
})
const pageType = computed(() => {
	return pageMeta.value?.type || "";
})
const isGenerateSetting = computed(() => {
	return pageMeta.value?.isGenerateSetting || false;
})
const header = computed<Header>(() => {
	return pageMeta.value?.header as Header || {}
})
const isShowHeader = computed(() => {
	return header.value.title || header.value.back || header.value.close || header.value.logo || header.value.menu
})
const pageTopSpace = computed(() => {
	return headerHeight.value + 40
})
</script>

<style lang="scss">
$cn: ".layoutDefault"; // コンポーネントクラス名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =="base" {
		position: relative;
		width: 100%;

		&-header {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			z-index: 1;
		}

		&-page {
			position: relative;
			z-index: 0;
		}
	}

	@if $mode =="darkmode" {}

	@if $mode =="auto" {}
}
</style>
