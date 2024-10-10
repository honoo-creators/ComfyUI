<template>
	<div class="pageDevComfyUIIndex">
		<Column justify="stretch" gap="8">
			<Button @click="toggleComfyUI">
				Show Toggle ComfyUI
			</Button>
			<Row justify="stretch" gap="8">
				<Button @click="loadGraph">
					Load Graph
				</Button>
				<Button @click="queueStart">
					Queue Start
				</Button>
			</Row>
		</Column>
	</div>
</template>

<script setup lang="ts">
import test001 from '~/../workflows/test001.json';

// Methods ------------------
const toggleComfyUI = () => {
	document.querySelector('body > .comfy-menu')?.classList.toggle('_show');
}

const loadGraph = () => {
	useComfyUI().loadGraph(JSON.stringify(test001));
}

const queueStart = () => {
	useComfyUI().queueStart();
}
</script>

<style lang="scss"></style>
