<template>
	<Column class="pageDevElementsUsageType" gap="40">
		<UsageType :data="activeUsageType" />
		<UsageTypeRadio v-bind="{ list }" v-model:active="activeIndex" />
	</Column>
</template>

<script setup lang="ts">
import UsageType from '~/components/elements/UsageType.vue'
import UsageTypeRadio from '~/components/elements/UsageTypeRadio.vue'
import { useUsageTypeStore } from '~/stores/usage-type'

// Data ------------------
const list = ref([...useUsageTypeStore().list])
const activeIndex = ref(0)

// Computed ------------------
const activeUsageType = computed(() => list.value[activeIndex.value])
</script>

<style lang="scss"></style>
