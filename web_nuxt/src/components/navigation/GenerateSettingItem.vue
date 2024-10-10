<template>
	<Clickable class="generateSettingItem" :class="classes" v-bind="{ disabled }">
		<Center v-if="!isSet">
			<Typography subheadline bold center unselectable>
				{{ name }}
			</Typography>
		</Center>
		<div v-if="isSet && useSlots().default" class="generateSettingItem-content">
			<slot />
		</div>
	</Clickable>
</template>

<script setup lang="ts">
import Clickable from '~/components/elements/Clickable.vue'

// Props ------------------
const props = defineProps({
	name: { type: String, default: '' },
	current: { type: Boolean, default: false },
	disabled: { type: Boolean, default: false },
	isSet: { type: Boolean, default: false }
})

// Computed ------------------
const classes = computed(() => {
	return {
		_current: props.current,
		_hasSlot: props.isSet && useSlots().default
	}
})
</script>

<style lang="scss">
$cn: '.generateSettingItem'; // コンポーネントセレクタ名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =='base' {
		position: relative;
		width: 100%;
		height: 100%;
		padding: func.get-size(8);
		border-radius: func.get-size(10);
		transition: var.$transition-base;
		opacity: .3;

		&:hover,
		&._current,
		&._hasSlot {
			background-color: var.$dark-05;
			opacity: 1;
		}

		&._hasSlot {
			background-color: transparent;
		}

		&-content {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	@if $mode =='darkmode' {}

	@if $mode =='auto' {}
}
</style>
