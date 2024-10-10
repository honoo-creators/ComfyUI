<template>
	<div class="promptInput">
		<Column gap="0">
			<Typography body bold>
				<InputTag v-model="selects" name="promptA" v-bind="{ placeholder }" max="10" gap="4" focus />
			</Typography>
			<FieldFooter />
		</Column>
		<Scroll class="promptInput-tags">
			<Row gap="4">
				<Clickable v-for="(text, index) in list" :key="`promptInput-tags-item-${index}`"
					:class="`promptInput-tags-item${selects?.includes(text) ? ' _selected' : ''}`"
					:disabled="selects?.includes(text)" @click="select(text)">
					<Typography caption2 bold>
						{{ text }}
					</Typography>
				</Clickable>
			</Row>
		</Scroll>
	</div>
</template>

<script setup lang="ts">
import Clickable from '~/components/elements/Clickable.vue'

// Models ------------------
const selects = defineModel<string[]>('selects')

// Props ------------------
const props = defineProps({
	name: { type: String, required: true },
	placeholder: { type: String, required: true },
	list: { type: Array as () => string[], default: () => [] }
})

// Methods ------------------
const select = (text: string) => {
	selects.value?.push(text)
}
</script>

<style lang="scss">
$cn: '.promptInput';

$tag-padding-top: 7;
$tag-padding-right: 16;
$tag-padding-bottom: 7;
$tag-padding-left: 16;

@include mix.component-styles($cn) using ($mode) {
	@if $mode =='base' {
		&-tags {
			margin-top: func.get-size(20);

			&-item {
				padding-top: func.get-size($tag-padding-top, $mode !='auto');
				padding-right: func.get-size($tag-padding-right, $mode !='auto');
				padding-bottom: func.get-size($tag-padding-bottom, $mode !='auto');
				padding-left: func.get-size($tag-padding-left, $mode !='auto');
				background-color: var.$dark-05;
				border-radius: func.get-size(2, $mode !='auto');
				transition: var.$transition-base;
				cursor: pointer;

				&._selected {
					cursor: default;
					opacity: 0.3;
				}
			}
		}
	}
}
</style>
