<template>
	<div class="pageDevComfyUIIndex">
		<Column justify="stretch" gap="8">
			<Typography title2>
				<Input v-model="count" name="devComfyUIBatchCount" type="number" />
			</Typography>
			<Typography>
				Status: {{ state }}, Queue: {{ queueRemaining }}, Progress: {{ progress }}
			</Typography>
			<Row justify="stretch" gap="8">
				<Button @click="loadGraph">
					Load Graph
				</Button>
				<Button @click="queuePrompt">
					Queue Start
				</Button>
			</Row>
			<Ratio v-for="path in output" :key="path">
				<Image :src="path" />
			</Ratio>
		</Column>
	</div>
</template>

<script setup lang="ts">
import test001 from '~/../workflows/test001.json';

// Composables ------------------
const { state, queueRemaining, progress, output } = useComfyUI();

// Data ------------------
const count = ref<string>('1');

const loadGraph = () => {
	useComfyUI().loadGraph(JSON.stringify(test001));
}

const queuePrompt = () => {
	// ToDo: 進捗状況や出力ファイルのパスを取得する
	useComfyUI().queuePrompt({ json: JSON.stringify(test001), batchCount: parseInt(count.value) });
}
</script>

<style lang="scss"></style>
