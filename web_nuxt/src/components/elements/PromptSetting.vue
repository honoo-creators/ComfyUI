<template>
	<div class="promptSetting">
		<Typography class="promptSetting-label" caption3 bold unselectable>
			{{ name }}
		</Typography>
		<div class="promptSetting-list">
			<div v-for="(item, index) in list" :key="`promptSetting-list-item-${index}`" class="promptSetting-list-item">
				<Typography caption3 bold unselectable color="light">
					{{ item }}
				</Typography>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

// Props ------------------
const props = defineProps({
	name: { type: String, default: '', required: true },
	data: { type: Array<string>, default: [], required: true }
})

// Computed ------------------
const list = computed(() => props.data)
</script>

<style lang="scss">
$cn: '.promptSetting'; // コンポーネントセレクタ名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =='base' {
		position: relative;
		z-index: 0;
		width: 100%;
		height: 100%;
		border-radius: func.get-size(8, $mode !='auto');
		background-color: var.$dark-05;
		overflow: hidden;

		&-label {
			position: absolute;
			top: func.get-size(6, $mode !='auto');
			left: func.get-size(8, $mode !='auto');
			z-index: 1;
		}

		&-list {
			display: flex;
			flex-wrap: wrap;
			gap: func.get-size(4, $mode !='auto');
			padding-top: func.get-size(28, $mode !='auto');
			padding-left: func.get-size(8, $mode !='auto');
			padding-bottom: func.get-size(8, $mode !='auto');
			padding-right: func.get-size(8, $mode !='auto');

			&-item {
				padding: func.get-size(1, $mode !='auto') func.get-size(4, $mode !='auto') func.get-size(2, $mode !='auto');
				background-color: var.$dark;
				border-radius: func.get-size(4, $mode !='auto');
			}
		}
	}

	@if $mode =='darkmode' {}
}
</style>
