<template>
	<div class="lookStyleSetting">
		<Typography class="lookStyleSetting-label" caption3 bold unselectable color="light">
			背景美術スタイル
		</Typography>
		<div class="lookStyleSetting-image">
			<Image v-if="fit" v-bind="{ src }" cover />
			<LookStyleRatio v-else>
				<Image v-bind="{ src }" cover />
			</LookStyleRatio>
		</div>
		<div class="lookStyleSetting-name">
			<Center>
				<Typography title3 extrabold center unselectable line-height="1" color="light">
					{{ name }}
				</Typography>
			</Center>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { LookStyle } from '~/interfaces/look-style'
import LookStyleRatio from '~/components/layout/LookStyleRatio.vue'

// Props ------------------
const props = defineProps({
	fit: { type: Boolean, default: false },
	data: { type: Object as () => LookStyle, default: () => ({}) }
})

// Computed ------------------
const name = computed(() => props.data.name)
const src = computed(() => props.data.thumbnail_path)
</script>

<style lang="scss">
$cn: '.lookStyleSetting'; // コンポーネントセレクタ名

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
		}

		&-image {
			position: relative;
			z-index: 1;
			width: 100%;
			height: 100%;
		}

		&-name {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.2);
			padding: func.get-size(8);
			z-index: 1;
		}
	}

	@if $mode =='darkmode' {}

	@if $mode =='auto' {}
}
</style>
