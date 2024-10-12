<template>
	<Column class="pageOutput" gap="36">
		<PageIntro v-bind="{ title, body }" :spinner="isQueue" :icon="!isQueue ? 'shine' : ''" />
		<Container wide>
			<Row gap="2" :split="SPLIT">
				<Ratio v-for="index in BATCH_COUNT" :key="`pageOutput-item-${index}`">
					<Image v-if="output[index - 1]" :src="output[index - 1]" cover />
					<LoaderRect v-else w="100%" h="100%" animation :delay="index / SPLIT * 150" />
				</Ratio>
			</Row>
		</Container>
		<Column v-if="output.length > 0 && !isQueue" justify="center" gap="40">
			<PageIntro icon="checkCircleLine" body="生成画像は以上です" />
			<Container>
				<Column justify="stretch" gap="20">
					<Button @click="handleEditSetting">
						設定を変更してやり直す
					</Button>
					<Button info @click="handleNewGenerate">
						新しい背景美術を生成する
					</Button>
				</Column>
			</Container>
		</Column>
	</Column>
</template>

<script setup lang="ts">
import PageIntro from '~/components/elements/PageIntro.vue';
import { useGenerateStore } from '~/stores/generate';

// Composables ------------------
const { isQueue, queueRemaining, output, estimatedTime } = useComfyUI();

// Stores ------------------
const store = useGenerateStore();

// Page Settings ------------------
definePageMeta({
	middleware: 'generate',
	page: {
		// type: 'center',
		isGenerateSetting: false,
		header: { back: 1, title: '背景美術生成', close: 0, menu: false, logo: true, avatar: false }
	}
})

// Constants ------------------	
const SPLIT = 3;
const BATCH_COUNT = 9;

// Data ------------------
const remainingTime = ref(0);


// Computed ----------------------
const title = computed(() => {
	return `${BATCH_COUNT - queueRemaining.value}/${BATCH_COUNT}`
})
const body = computed(() => {
	if (!isQueue.value) return '背景美術を生成しました。'

	const hours = Math.floor(remainingTime.value / 3600000);
	const minutes = Math.floor((remainingTime.value % 3600000) / 60000);
	const seconds = Math.floor((remainingTime.value % 60000) / 1000);

	let timeString = '';
	if (hours > 0) timeString += `${hours}時間`;
	if (minutes > 0) timeString += `${minutes}分`;
	timeString += `${seconds}秒`;

	if (isQueue.value && remainingTime.value <= 0) return '...'
	else return `あと ${timeString}`
})

// Methods ------------------
const handleEditSetting = () => {
	navigateTo(useConstantsPath().GENERATE_LOOKSTYLE)
}
const handleNewGenerate = () => {
	store.init()
	navigateTo(useConstantsPath().GENERATE_LOOKSTYLE)
}
const countDown = async () => {
	console.log('countDown', remainingTime.value)
	const time = 1000
	await useUtils().wait(time)
	remainingTime.value -= time
	if (remainingTime.value >= 0) countDown()
	else remainingTime.value = 0
}

// Watch ------------------
watch(
	() => estimatedTime.value,
	(newVal) => {
		if (newVal > 0 && remainingTime.value <= 0) countDown()
		remainingTime.value = newVal
	}
)

// Lifecycle Hooks ------------------
onMounted(() => {
	useComfyUI().queuePrompt({ json: JSON.stringify(store.workflow), batchCount: BATCH_COUNT })
})
</script>

<style lang="scss">
$cn: ".pageOutput"; // コンポーネントクラス名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =="base" {}

	@if $mode =="darkmode" {}

	@if $mode =="auto" {}
}
</style>
