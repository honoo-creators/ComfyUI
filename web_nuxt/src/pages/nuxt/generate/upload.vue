<template>
	<Container class="pageGenerateUpload">
		<Column justify="center" gap="28">
			<template v-if="!base64">
				<PageIntro icon="upload" title="原図データをアップロード" body="幅5000px・高さ5000px<br />20Mb以内の png・jpg ファイル" />
				<Button w="360" @click="imageSelect">
					データを選択
				</Button>
			</template>
			<template v-else>
				<Image :src="base64" />
				<Column gap="12">
					<Button @click="next">
						次へ
					</Button>
					<Button tertiary @click="imageSelect">
						変更する
					</Button>
				</Column>
			</template>
		</Column>
	</Container>
</template>

<script setup lang="ts">
import PageIntro from '~/components/elements/PageIntro.vue'
import { useGenerateStore } from '~/stores/generate'

// Composables ------------------
const file = useFile()

// Stores ------------------
const store = useGenerateStore()

// Data ------------------
const base64 = ref(store.base64)

// Methods ------------------
const imageSelect = async () => {
	const selectFile = await file.select(['image'])
	base64.value = await file.encode(selectFile.file as string)
}
const next = () => {
	store.setBase64(base64.value)
	useRouter().push(useConstantsPath().GENERATE_PROMPT_A)
}
</script>

<style lang="scss">
$cn: ".pageGenerateUpload"; // コンポーネントクラス名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =="base" {}

	@if $mode =="darkmode" {}

	@if $mode =="auto" {}
}
</style>
