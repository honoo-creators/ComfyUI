<template>
	<Container class="pageDashboard" narrow>
		<Column gap="28">
			<Clickable @click="useSheet().open({ name: 'usageTypeSelect' })">
				<UsageType :data="activeUsageType" />
			</Clickable>
			<Button :to="useConstantsPath().GENERATE_LOOKSTYLE">
				背景美術生成を開始する
			</Button>
		</Column>
	</Container>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUsageTypeStore } from "~/stores/usage-type";
import UsageType from "~/components/elements/UsageType.vue";
import Clickable from "~/components/elements/Clickable.vue";
import { useGenerateStore } from "~/stores/generate";

// Page Settings ------------------
definePageMeta({
	page: {
		type: "center",
		header: {
			back: 0,
			title: "ダッシュボード",
			menu: true,
			logo: true,
			avatar: true,
		},
	},
});

// Stores ------------------
const { active: activeUsageType } = storeToRefs(useUsageTypeStore());

// Lifecycle Hooks ------------------
onMounted(() => {
	// 生成ストアを初期化する
	useGenerateStore().init();
});
</script>

<style lang="scss">
$cn: ".pageDashboard"; // コンポーネントクラス名

@include mix.component-styles($cn) using ($mode) {
	@if $mode == "base" {
	}

	@if $mode == "darkmode" {
	}

	@if $mode == "auto" {
	}
}
</style>
