<template>
	<div class="pageDev">
		<DevHeader v-if="!route.path.includes('login')" v-resize="(rect: DOMRectReadOnly) => headerHeight = rect.height"
			class="pageDev-menu" close @close="close" />
		<Page center :top-space="headerHeight" bottom-space="50">
			<NuxtPage />
		</Page>
	</div>
</template>

<script setup lang="ts">
// Page Settings ------------------
definePageMeta({
	layout: false
})

// Composables ------------------
const route = useRoute();

// Data ------------------
const headerHeight = ref(0);

// Methods ------------------
const close = () => {
	useRouter().push('/')
}
</script>

<style lang="scss">
$cn: ".pageDev"; // コンポーネントクラス名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =="base" {
		position: relative;
		z-index: 0;
		width: 100%;
		height: auto;

		&-menu {
			position: fixed;
			top: 0;
			z-index: 10;
			width: 100%;
		}
	}

	@if $mode =="darkmode" {}

	@if $mode =="auto" {}
}
</style>
