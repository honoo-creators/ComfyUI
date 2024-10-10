<template>
	<div class="imageSetting">
		<Typography class="imageSetting-label" caption3 bold unselectable color="light">
			原図データ
		</Typography>
		<div class="imageSetting-image">
			<Image v-if="fit" v-bind="{ src }" cover />
			<Ratio v-else :per="ratio * 100">
				<Image v-bind="{ src }" cover />
			</Ratio>
		</div>
		<div class="imageSetting-overlay" />
	</div>
</template>

<script setup lang="ts">

// Props ------------------
const props = defineProps({
	fit: { type: Boolean, default: false },
	data: { type: String, default: '', required: true }
})

// Data ------------------
const ratio = ref(1)

// Computed ------------------
const src = computed(() => props.data)

// Lifecycle Hooks ------------------
onMounted(() => {
	if (!props.fit) {
		const img = new Image();
		img.src = props.data;
		img.onload = () => {
			const width = img.width;
			const height = img.height;
			ratio.value = height / width
		};
	}
})
</script>

<style lang="scss">
$cn: '.imageSetting'; // コンポーネントセレクタ名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =='base' {
		position: relative;
		z-index: 0;
		width: 100%;
		height: 100%;
		border-radius: func.get-size(8);
		overflow: hidden;

		&-label {
			position: absolute;
			top: func.get-size(6);
			left: func.get-size(8);
			z-index: 2;
			filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.5));
		}

		&-image {
			position: relative;
			z-index: 0;
			width: 100%;
			height: 100%;
		}

		&-overlay {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			width: 100%;
			height: 100%;
			background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
		}
	}

	@if $mode =='darkmode' {}

	@if $mode =='auto' {}
}
</style>
