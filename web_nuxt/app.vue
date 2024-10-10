<template>
	<div>
		<button @click="loadGraph">Load Graph</button>
		<button @click="queue">Queue</button>
	</div>
</template>

<script setup>
import test001 from "./workflows/test001.json"; // 森さんから最初にもらったプレーンなグラフ
import test002 from "./workflows/test002.json"; // 森さんから最後にもらったグラフ

const loadGraph = () => {
	console.log("loadGraph", test001);
	window.comfyAPI.app.app.loadGraphData(test001);
};

const queue = () => {
	console.log("queue");
	window.comfyAPI.app.app.queuePrompt();
};
</script>
