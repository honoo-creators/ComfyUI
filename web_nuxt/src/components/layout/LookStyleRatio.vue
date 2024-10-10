<template>
	<Ratio :per="240 / 530 * 100" class="lookStyleRatio">
		<slot />
	</Ratio>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
$cn: '.lookStyleRatio'; // コンポーネントセレクタ名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =='base' {}

	@if $mode =='darkmode' {}

	@if $mode =='auto' {}
}
</style>
