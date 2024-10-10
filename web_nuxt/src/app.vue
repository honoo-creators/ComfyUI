<template>
	<div class="app">
		<NuxtLayout>
			<template v-if="!pending">
				<NuxtPage />
			</template>
		</NuxtLayout>
		<div class="app-layers" style="z-index: 2">
			<DrawerLayer style="z-index: 1">
				<TheMyMenu v-if="drawer('myMenu')" />
			</DrawerLayer>
			<SheetLayer style="z-index: 2">
				<SheetMessage v-if="sheetName === 'message'" />
				<LoginRequiredSheet v-if="sheetName === 'loginRequired'" />
				<UsageTypeSelectSheet v-if="sheetName === 'usageTypeSelect'" />
			</SheetLayer>
			<ProcessingLayer style="z-index: 3" />
			<DialogLayer style="z-index: 4" />
		</div>
	</div>
</template>

<script setup>
import { useAppStore } from "~/stores/app";
import TheMyMenu from "~/components/drawer/TheMyMenu.vue";
import LoginRequiredSheet from "~/components/sheet/LoginRequiredSheet.vue";
import UsageTypeSelectSheet from "~/components/sheet/UsageTypeSelectSheet.vue";

// Composables ------------------
const { name: sheetName } = useSheet();

// Data ------------------
const pending = ref(true);

// Computed ------------------
const drawer = computed(() => (name) => {
	if (useDrawer().lefts.value.some((item) => item.name === name)) {
		return true;
	}
	if (useDrawer().rights.value.some((item) => item.name === name)) {
		return true;
	}
	return false;
});

onMounted(() => {
	useAppStore().init();

	// if (!useAuth().loggedIn.value) {
	// 	useSheet().open({ name: 'loginRequired' })
	// }

	// 準備完了
	pending.value = false;
});
</script>

<style lang="scss"></style>
