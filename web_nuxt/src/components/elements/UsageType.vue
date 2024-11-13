<template>
	<Box class="usageType" w="100%" h="80" r="12" color="dark03" pt="20" pb="20" pl="24" pr="24">
		<Row align="center" gap="12" nowrap fit>
			<Avatar size="32" :src="face" />
			<Column gap="2" style="flex-grow: 1;">
				<Typography class="usageType-name" subheadline bold unselectable line-height="1.2">
					{{ name }}
				</Typography>
				<template v-if="!enterprise">
					<Typography footnote bold unselectable>
						{{ ticket }}チケット
					</Typography>
				</template>
			</Column>
			<template v-if="!useSlots().default">
				<Icon name="arrowDown" size="12" />
			</template>
			<template v-else>
				<slot />
			</template>
		</Row>
	</Box>
</template>

<script setup lang="ts">
import { useMeStore } from '~/stores/me'
import type { UsageType } from '~/interfaces/usage-type'

// Props ------------------
const props = defineProps({
	data: { type: Object as () => UsageType, default: () => ({}) }
})

// Computed ------------------
const name = computed(() => props.data.profile ? props.data.profile.name : useMeStore().name)
const face = computed(() => props.data.profile ? props.data.profile.face : useMeStore().face)
const ticket = computed(() => props.data.ticket)
const enterprise = computed(() => props.data.type === 'enterprise')
</script>

<style lang="scss">
$cn: '.usageType'; // コンポーネントセレクタ名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =='base' {
		&-name {
			margin-top: func.get-size(-1);
		}
	}

	@if $mode =='darkmode' {}

	@if $mode =='auto' {}
}
</style>
