<template>
	<Column class="pageIntro" justify="center" gap="24">
		<template v-if="spinner">
			<LoaderIcon :size="iconSize" />
		</template>
		<template v-else-if="icon">
			<Icon :name="icon" :size="iconSize" />
		</template>
		<Typography v-if="title" class="pageIntro-title" title2 extrabold center>
			<span v-html="title" />
		</Typography>
		<Typography v-if="body" class="pageIntro-body" caption1 bold center>
			<span v-html="body" />
		</Typography>
	</Column>
</template>

<script setup lang="ts">
// Props ------------------
defineProps({
	spinner: { type: Boolean, default: false },
	icon: { type: String, default: '' },
	iconSize: { type: Number, default: 40 },
	title: { type: String, default: '' },
	body: { type: String, default: '' }
})
</script>

<style lang="scss">
$cn: '.pageIntro'; // コンポーネントセレクタ名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =='base' {
		&-title {
			margin-top: func.get-size(-6);
		}

		&-body {
			margin-top: func.get-size(-8);
		}
	}

	@if $mode =='darkmode' {}

	@if $mode =='auto' {}
}
</style>
