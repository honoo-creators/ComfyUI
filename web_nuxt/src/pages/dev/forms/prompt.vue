<template>
	<Container class="pageDevFormsPrompt">
		<PromptInput v-model:selects="selects" name="promptA" placeholder="快晴の空に飛行機雲が一筋" v-bind="{ list }" />
	</Container>
</template>

<script setup lang="ts">
import PromptInput from '~/components/forms/PromptInput.vue'

const list = [
	'快晴の空に飛行機雲が一筋',
	'夕焼けの空に飛行機雲が一筋',
	'雨の空に飛行機雲が一筋',
	'雪の空に飛行機雲が一筋',
	'雷の空に飛行機雲が一筋',
	'風の空に飛行機雲が一筋',
	'光の空に飛行機雲が一筋',
	'影の空に飛行機雲が一筋',
	'雲の空に飛行機雲が一筋',
]

// Data ------------------
const selects = ref<string[]>([])
</script>

<style lang="scss">
$cn: ".pageGeneratePromptA"; // コンポーネントクラス名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =="base" {}

	@if $mode =="darkmode" {}

	@if $mode =="auto" {}
}
</style>
