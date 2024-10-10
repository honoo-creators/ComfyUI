<template>
	<Column class="usageTypeRadio" justify="stretch" gap="12">
		<Clickable v-for="(data, index) in list" :key="`usageTypeRadio-${index}`" @click="select(index)">
			<UsageType v-bind="{ data }">
				<div class="usageTypeRadio-icon" :class="{ _active: active === index }" />
			</UsageType>
		</Clickable>
	</Column>
</template>

<script setup lang="ts">
import Clickable from '~/components/elements/Clickable.vue'
import UsageType from '~/components/elements/UsageType.vue'
import type { UsageType as UsageTypeData } from '~/interfaces/usage-type'

// Models ---------------------------
const active = defineModel<number>('active')

// Props ---------------------------
defineProps({
	list: { type: Array as () => UsageTypeData[], default: () => [] }
})

// Methods ---------------------------
const select = (index: number) => {
	active.value = index
}
</script>

<style lang="scss">
$cn: '.usageTypeRadio'; // コンポーネントセレクタ名

$icon-size: 18;

@include mix.component-styles($cn) using ($mode) {
	@if $mode =='base' {
		&-name {
			margin-top: func.get-size(-2);
		}

		&-icon {
			width: func.get-size($icon-size);
			height: func.get-size($icon-size);
			min-width: func.get-size($icon-size);
			min-height: func.get-size($icon-size);
			margin-right: func.get-size(-4);
			border-radius: 100%;
			overflow: hidden;

			&:after {
				content: '';
				display: block;
				width: 100%;
				height: 100%;
				margin: auto;
				border-radius: 100%;
				border: func.get-size(2) solid var.$dark-30;
			}

			&._active {
				padding: func.get-size(6);
				background-color: var.$dark;

				&:after {
					background-color: var.$light;
					border: none;
				}
			}
		}
	}

	@if $mode =='darkmode' {}

	@if $mode =='auto' {}
}
</style>
