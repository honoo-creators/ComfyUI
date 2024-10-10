<template>
	<div class="generateSettingList">
		<GenerateSettingItem name="背景美術スタイル" :current="currentIndex === 0" :is-set="lookStyle !== null"
			@click="currentIndex = 0">
			<LookStyleSetting v-if="lookStyle !== null" :data="lookStyle" fit />
		</GenerateSettingItem>
		<GenerateSettingItem name="原図データ" :current="currentIndex === 1" :is-set="base64 !== ''" :disabled="!lookStyle"
			@click="currentIndex = 1">
			<ImageSetting v-if="base64 !== ''" :data="base64" fit />
		</GenerateSettingItem>
		<GenerateSettingItem name="何を描くか" :current="currentIndex === 2" :is-set="promptA.length > 0" :disabled="!base64"
			@click="currentIndex = 2">
			<PromptSetting v-if="promptA.length > 0" name="何を描くか" :data="promptA" />
		</GenerateSettingItem>
		<GenerateSettingItem name="周りの環境" :current="currentIndex === 3" :is-set="promptB.length > 0"
			:disabled="!promptA.length" @click="currentIndex = 3">
			<PromptSetting v-if="promptB.length > 0" name="周りの環境" :data="promptB" />
		</GenerateSettingItem>
		<GenerateSettingItem name="色調・ムード" :current="currentIndex === 4" :is-set="promptC.length > 0"
			:disabled="!promptB.length" @click="currentIndex = 4">
			<PromptSetting v-if="promptC.length > 0" name="色調・ムード" :data="promptC" />
		</GenerateSettingItem>
		<GenerateSettingItem name="ライティング" :current="currentIndex === 5" :is-set="promptD.length > 0"
			:disabled="!promptC.length" @click="currentIndex = 5">
			<PromptSetting v-if="promptD.length > 0" name="ライティング" :data="promptD" />
		</GenerateSettingItem>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGenerateStore } from '~/stores/generate'
import GenerateSettingItem from './GenerateSettingItem.vue'
import LookStyleSetting from '~/components/elements/LookStyleSetting.vue'
import ImageSetting from '~/components/elements/ImageSetting.vue'
import PromptSetting from '~/components/elements/PromptSetting.vue'

// Stores ------------------
const { lookStyle, base64, promptA, promptB, promptC, promptD } = storeToRefs(useGenerateStore())

// Data ------------------
const currentIndex = ref(0)

// Watch ------------------
watch(() => currentIndex.value, (newVal) => {
	let path = ''
	switch (newVal) {
		case 0:
			path = useConstantsPath().GENERATE_LOOKSTYLE
			break
		case 1:
			path = useConstantsPath().GENERATE_UPLOAD
			break
		case 2:
			path = useConstantsPath().GENERATE_PROMPT_A
			break
		case 3:
			path = useConstantsPath().GENERATE_PROMPT_B
			break
		case 4:
			path = useConstantsPath().GENERATE_PROMPT_C
			break
		case 5:
			path = useConstantsPath().GENERATE_PROMPT_D
			break
	}
	useRouter().push(path)
})
watch(() => useRoute().path, (newVal) => {
	switch (newVal) {
		case useConstantsPath().GENERATE_LOOKSTYLE:
			currentIndex.value = 0
			break
		case useConstantsPath().GENERATE_UPLOAD:
			currentIndex.value = 1
			break
		case useConstantsPath().GENERATE_PROMPT_A:
			currentIndex.value = 2
			break
		case useConstantsPath().GENERATE_PROMPT_B:
			currentIndex.value = 3
			break
		case useConstantsPath().GENERATE_PROMPT_C:
			currentIndex.value = 4
			break
		case useConstantsPath().GENERATE_PROMPT_D:
			currentIndex.value = 5
			break
	}
})
</script>

<style lang="scss">
$cn: '.generateSettingList'; // コンポーネントセレクタ名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =='base' {
		display: flex;
		justify-content: center;
		gap: func.get-size(8);
		height: func.get-size(112);
		padding: func.get-size(8);
		border-radius: func.get-size(16);
		border: 1px solid var.$dark-20;
		backdrop-filter: var.$backdrop-filter;
		background-color: var.$light-90;

		&-item {
			flex: 1;
		}
	}

	@if $mode =='darkmode' {}

	@if $mode =='auto' {}
}
</style>
