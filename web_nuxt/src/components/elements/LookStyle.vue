<template>
	<div class="lookStyle" :class="{ _current: current }">
		<div class="lookStyle-image">
			<Image v-bind="{ src }" cover />
		</div>
		<div class="lookStyle-name">
			<LookStyleRatio>
				<Typography title1 extrabold center unselectable color="light">
					{{ name }}
				</Typography>
			</LookStyleRatio>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { LookStyle } from '~/interfaces/look-style'
import LookStyleRatio from '~/components/layout/LookStyleRatio.vue'

// Props ------------------
const props = defineProps({
	data: { type: Object as () => LookStyle, default: () => ({}) },
	current: { type: Boolean, default: false }
})

// Computed ------------------
const name = computed(() => props.data.name)
const src = computed(() => props.data.thumbnail_path)
</script>

<style lang="scss">
$cn: '.lookStyle'; // コンポーネントセレクタ名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =='base' {
		position: relative;
		z-index: 0;
		width: 100%;
		border-radius: func.get-size(8);
		overflow: hidden;

		&._current {
			opacity: 0.6;
		}

		&-image {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
		}

		&-name {
			width: 100%;
			background-color: rgba(0, 0, 0, 0.2);
		}
	}

	@if $mode =='darkmode' {}

	@if $mode =='auto' {}
}
</style>
