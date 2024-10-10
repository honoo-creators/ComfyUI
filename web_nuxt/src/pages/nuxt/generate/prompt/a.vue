<template>
	<Container class="pageGeneratePromptA">
		<Column gap="28">
			<PageIntro icon="edit" title="何を描くかのプロンプト" />
			<PromptInput v-model:selects="selects" name="promptA" v-bind="{ placeholder, list }" />
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
const { promptASuggests: list } = storeToRefs(useGenerateStore())

// Data ------------------
const selects = ref<string[]>([...useGenerateStore().promptA])

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
	useGenerateStore().setPromptA(selects.value)
	// 次のページへ遷移する
	useRouter().push(useConstantsPath().GENERATE_PROMPT_B)
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
