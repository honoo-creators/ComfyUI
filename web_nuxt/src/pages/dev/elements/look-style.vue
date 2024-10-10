<template>
	<Column class="pageDevElementsLookStyle" gap="40">
		<Container>
			<Column gap="16">
				<LookStyle v-bind="{ data }" />
				<Ratio golden>
					<LookStyleSetting v-bind="{ data }" />
				</Ratio>
			</Column>
		</Container>
	</Column>
</template>

<script setup lang="ts">
import LookStyle from '~/components/elements/LookStyle.vue'
import LookStyleSetting from '~/components/elements/LookStyleSetting.vue'
import type { LookStyle as LookStyleType } from '~/interfaces/look-style'

// Data ------------------
const data = ref<LookStyleType>({
	name: 'Test',
	id: 0,
	thumbnail_path: 'https://cdn.pixabay.com/photo/2024/05/26/15/27/anime-8788959_1280.jpg'
})
</script>

<style lang="scss"></style>
