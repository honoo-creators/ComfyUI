<template>
	<Column class="pageGenerateLookstyle" gap="28">
		<Container>
			<PageIntro icon="shapes" title="背景美術スタイルを選択してください" body="事前に設定されたルックスタイルがある場合は<br />該当するスタイルを選んでください。" />
		</Container>
		<Container wide>
			<Row justify="center" gap="16">
				<Clickable v-for="item in list" :key="item.id" class="pageGenerateLookstyle-item" @click="handleClick(item.id)">
					<LookStyle :data="item" :current="item.id === lookStyle?.id" />
				</Clickable>
			</Row>
		</Container>
	</Column>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGenerateStore } from '~/stores/generate'
import PageIntro from '~/components/elements/PageIntro.vue'
import Clickable from '~/components/elements/Clickable.vue'
import LookStyle from '~/components/elements/LookStyle.vue'
import type { LookStyle as LookStyleType } from '~/interfaces/look-style'

// Contants ------------------
// ダミーの選択リスト
const list: LookStyleType[] = [
	{
		name: 'Metro City',
		id: 1,
		thumbnail_path: 'https://cdn.pixabay.com/photo/2024/05/26/15/27/anime-8788959_1280.jpg'
	},
	{
		name: 'Ruins',
		id: 2,
		thumbnail_path: 'https://cdn.pixabay.com/photo/2023/12/22/20/38/anime-8464339_1280.jpg'
	},
	{
		name: 'Wilderness',
		id: 3,
		thumbnail_path: 'https://cdn.pixabay.com/photo/2023/02/20/20/45/ai-generated-7803075_1280.jpg'
	},
	{
		name: 'Nostalgic',
		id: 4,
		thumbnail_path: 'https://cdn.pixabay.com/photo/2022/10/19/14/53/sunset-7532726_1280.jpg'
	},
	{
		name: 'Neo Nippon',
		id: 5,
		thumbnail_path: 'https://cdn.pixabay.com/photo/2024/06/24/14/39/castle-8850345_1280.jpg'
	},
	{
		name: 'Fantasy',
		id: 6,
		thumbnail_path: 'https://cdn.pixabay.com/photo/2024/05/29/04/00/sky-8795092_1280.jpg'
	}
]

// Stores ------------------
const store = useGenerateStore()
const { lookStyle } = storeToRefs(store)

// Methods ------------------
const handleClick = (id: number) => {
	const lookStyle = list.find(item => item.id === id) as LookStyleType | undefined
	if (!lookStyle) return
	store.setLookStyle(lookStyle)
	useRouter().push(useConstantsPath().GENERATE_UPLOAD)
}
</script>

<style lang="scss">
$cn: ".pageGenerateLookstyle"; // コンポーネントクラス名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =="base" {
		&-item {
			flex-basis: calc(50% - #{func.get-size(16)});
		}
	}

	@if $mode =="darkmode" {}

	@if $mode =="auto" {}
}
</style>
