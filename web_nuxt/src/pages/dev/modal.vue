<template>
	<div class="pageDevIndex">
		<Button
			@click="useModal().open({ name: 'imagePreview', options: { list: ['https://cdn.pixabay.com/photo/2024/06/01/01/33/anime-8801333_1280.png', 'https://cdn.pixabay.com/photo/2024/01/10/13/13/ai-generated-8499585_1280.png', 'https://cdn.pixabay.com/photo/2024/05/09/08/07/ai-generated-8750158_1280.jpg'], index: 2 } })">
			ImagePreview
		</Button>
	</div>
</template>

<script setup lang="ts">
</script>

<style lang="scss"></style>
