<template>
	<Container class="pageGeneratePromptC">
		<Column gap="28">
			<PageIntro icon="edit" title="色調・ムード" />
			<PromptInput v-model:selects="selects" name="promptC" v-bind="{ placeholder, list }" />
			<Button :disabled="!selects.length" @click="next">
				次へ
			</Button>
		</Column>
	</Container>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import PageIntro from '~/components/elements/PageIntro.vue'
import PromptInput from '~/components/forms/PromptInput.vue'
import { useGenerateStore } from '~/stores/generate'

// Stores ------------------
const { promptCSuggests: list } = storeToRefs(useGenerateStore())

// Data ------------------
const selects = ref<string[]>([...useGenerateStore().promptC])

// Computed ------------------
const placeholder = computed(() => {
	let str = ''
	if (list.value.length > 0) {
		str = useArray().shuffle([...list.value])[0]
	}
	return str
})

// Methods ------------------
const next = () => {
	// プロンプトを設定する
	useGenerateStore().setPromptC(selects.value)
	// 次のページへ遷移する
	useRouter().push(useConstantsPath().GENERATE_PROMPT_D)
}
</script>

<style lang="scss">
$cn: ".pageGeneratePromptA"; // コンポーネントクラス名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =="base" {}

	@if $mode =="darkmode" {}

	@if $mode =="auto" {}
}
</style>
