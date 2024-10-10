<template>
	<Column class="pageGenerateConfirm" gap="28">
		<Container>
			<PageIntro icon="document" title="設定内容の確認" body="設定内容をご確認ください" />
		</Container>
		<Container>
			<Column justify="stretch" gap="32">
				<Column justify="stretch" gap="8">
					<LookStyleSetting v-if="lookStyle" class="pageGenerateConfirm-lookstyle" :data="lookStyle" />
					<ImageSetting v-if="base64" :data="base64" />
					<PromptSetting v-if="promptA" :data="promptA" name="何を描くか" />
					<PromptSetting v-if="promptB" :data="promptB" name="周りの環境" />
					<PromptSetting v-if="promptC" :data="promptC" name="色調・ムード" />
					<PromptSetting v-if="promptD" :data="promptD" name="ライティング" />
				</Column>
				<Typography title3 center>
					上記の設定で背景美術を生成します。
				</Typography>
				<Column justify="center" gap="8">
					<Avatar :src="face" size="72" />
					<Typography headline extrabold center>
						{{ name }}
					</Typography>
				</Column>
				<Button @click="useRouter().push(useConstantsPath().OUTPUT)">
					生成する
				</Button>
			</Column>
		</Container>
	</Column>
</template>

<script setup lang="ts">
import PageIntro from '~/components/elements/PageIntro.vue'
import LookStyleSetting from '~/components/elements/LookStyleSetting.vue'
import ImageSetting from '~/components/elements/ImageSetting.vue'
import PromptSetting from '~/components/elements/PromptSetting.vue'
import { useGenerateStore } from '~/stores/generate'
import { useUsageTypeStore } from '~/stores/usage-type'

// Page Settings ------------------
definePageMeta({
	middleware: 'generate',
	page: {
		type: 'center',
		isGenerateSetting: false,
		header: { back: 1, title: '背景美術生成', close: 0, menu: false, logo: true, avatar: false }
	}
})

// Stores ------------------
const { lookStyle, base64, promptA, promptB, promptC, promptD } = useGenerateStore()
const { face, name } = useUsageTypeStore()
</script>

<style lang="scss">
$cn: ".pageGenerateConfirm"; // コンポーネントクラス名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =="base" {
		&-lookstyle {
			.lookStyleSetting-name .typography {
				font-size: func.get-size(32, $mode !='auto');
			}
		}
	}

	@if $mode =="darkmode" {}

	@if $mode =="auto" {}
}
</style>
