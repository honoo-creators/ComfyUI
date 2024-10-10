<template>
	<Sheet class="usageTypeSelectSheet" narrow close title="利用方法の選択" @close="close">
		<SheetContainer>
			<UsageTypeRadio v-bind="{ list }" v-model:active="activeIndex" />
		</SheetContainer>
	</Sheet>
</template>

<script setup lang="ts">
import UsageTypeRadio from '~/components/elements/UsageTypeRadio.vue'
import { useUsageTypeStore } from '~/stores/usage-type'

// Composables ------------------
const { close } = useSheet()

// Data ------------------
const list = ref([...useUsageTypeStore().list])
const activeIndex = ref(0)

// Lifecycle Hooks ------------------
onMounted(() => {
	// 初期値を設定
	activeIndex.value = list.value.findIndex((item) => item.id === useUsageTypeStore().active.id)
	// 選択したら、少し待ってから閉じる
	watch(() => activeIndex.value, async () => {
		await useUtils().wait(500)
		close()
	})
})
onBeforeUnmount(() => {
	// シートが非表示になってから、選択した利用方法を保存
	useUsageTypeStore().select(list.value[activeIndex.value].id)
})
</script>

<style lang="scss">
$cn: '.usageTypeSelectSheet'; // コンポーネントセレクタ名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =='base' {}

	@if $mode =='darkmode' {}

	@if $mode =='auto' {}
}
</style>
