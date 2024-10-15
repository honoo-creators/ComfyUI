<template>
	<div class="imagePreviewModal">
		<Box r="12" color="darkblack" w="100%" h="100%" relative overflow>
			<div class="imagePreviewModal-background" :style="{ backgroundImage: `url(${src})` }" />
			<Column align="between" fit>
				<SlotHeader v-resize="(rect: DOMRectReadOnly) => headerHeight = rect.height">
					<template #right>
						<Button link @click="close">
							<Icon name="cross" color="light" size="20" />
						</Button>
					</template>
				</SlotHeader>
				<Box class="imagePreviewModal-inner" w="100%"
					:h="`calc(100% - ${getSize(headerHeight)} - ${getSize(footerHeight)})`">
					<Row justify="center" align="center" fit>
						<Image class="imagePreviewModal-inner-image" v-bind="{ src }" contain />
					</Row>
				</Box>
				<Box v-resize="(rect: DOMRectReadOnly) => footerHeight = rect.height" class="imagePreviewModal-footer" h="72"
					min-h="72">
					<Center>
						<Button info @click="download">
							<Icon name="download" color="primary" size="20" />ダウンロード
						</Button>
					</Center>
				</Box>
			</Column>
			<Button v-if="isPrev" class="imagePreviewModal-prev" link @click="prev">
				<Icon name="arrowLeft" color="light" size="22" />
			</Button>
			<Button v-if="isNext" class="imagePreviewModal-next" link @click="next">
				<Icon name="arrowRight" color="light" size="22" />
			</Button>
		</Box>
	</div>
</template>

<script setup lang="ts">
// Composables ---------------------------
const { close, options } = useModal()
const { getSize } = useCss()

// Data ---------------------------
const index = ref(0)
const list = ref([])
const headerHeight = ref(0)
const footerHeight = ref(0)

// Computed ---------------------------
const src = computed(() => {
	return list.value[index.value]
})
const isPrev = computed(() => {
	return index.value > 0
})
const isNext = computed(() => {
	return index.value < list.value.length - 1
})

// Methods ---------------------------
const prev = () => {
	index.value = index.value - 1
}
const next = () => {
	index.value = index.value + 1
}
const download = () => {
	useImage().download(src.value)
}

// LifeCycle Hooks ---------------------------
onMounted(() => {
	index.value = options.value.index
	list.value = options.value.list
})
</script>

<style lang="scss">
$cn: '.imagePreviewModal'; // コンポーネントセレクタ名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =='base' {
		position: relative;
		z-index: 0;
		width: 100vw;
		height: 100vh;
		padding: func.get-size(28, $mode !='auto') func.get-size(36, $mode !='auto');

		&-inner {
			position: relative;
			z-index: 1;
			flex: 1;

			&-image {
				height: 100%;
			}
		}

		&-prev {
			position: absolute;
			z-index: 2;
			top: 50%;
			left: func.get-size(8, $mode !='auto');
		}

		&-next {
			position: absolute;
			z-index: 2;
			top: 50%;
			right: func.get-size(8, $mode !='auto');
		}

		&-background {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 0;
			width: 100%;
			height: 100%;
			background-size: cover;
			background-position: center;
			filter: blur(40px);
			opacity: 0.2;
			pointer-events: none;
		}
	}

	@if $mode =='darkmode' {}

	@if $mode =='auto' {}
}
</style>
