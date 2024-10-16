<template>
	<div class="pageDev">
		<DevHeader v-if="!route.path.includes('login')" v-resize="(rect: DOMRectReadOnly) => headerHeight = rect.height"
			class="pageDev-menu" close @close="close">
			<template #footer>
				<Row justify="between" align="center" nowrap>
					<Typography body bold>
						Show ComfyUI
					</Typography>
					<div>
						<Switch v-model="showComfyUI" name="showComfyUI" />
					</div>
				</Row>
			</template>
		</DevHeader>
		<Page class="pageDev-pages" :class="{ '_hide': showComfyUI }" center :top-space="headerHeight" bottom-space="50">
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
const showComfyUI = ref(false);

// Methods ------------------
const close = () => {
	useRouter().push(useConstantsPath().DASHBOARD)
}
const toggleComfyUI = () => {
	document.querySelector('body > .comfy-menu')?.classList.toggle('_show');
	document.querySelector('body > .graph-canvas-container')?.classList.toggle('_show');
	document.querySelector('body > .pysssss-image-feed')?.classList.toggle('_show');
	document.querySelector('body > .p-toast')?.classList.toggle('_show');
	document.querySelector('body > #vue-app')?.classList.toggle('_show');
}

// Watch ------------------
watch(() => showComfyUI.value, () => {
	toggleComfyUI()
})
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

		&-pages {
			&._hide {
				display: none;
			}
		}
	}

	@if $mode =="darkmode" {}

	@if $mode =="auto" {}
}
</style>
