/**
 * ComfyUI
 */

import { ref } from "vue";

// Window インターフェースを拡張
declare global {
	interface Window {
		comfyAPI?: any; // 'any' 型を使用するか、適切な型を指定
	}
}
// 100ミリ秒ごとにチェック
const CHECK_INTERVAL = 100;
const OUTPUT_PATH_URL = `http://127.0.0.1:8188/api/view?filename={filename}&subfolder={subfolder}&type={type}`

// Data ------------------
const isInit = ref(false);
const state = ref<'' | 'start' | 'executing' | 'executed' | 'error'>(''); // ステータス
const queueRemaining = ref(0); // キューの残数
const progress = ref(0); // 進捗 0 - 1
const output = ref<string[]>([]); // 出力ファイルパス

// ComfyUI ------------------
let app: any = null;
let api: any = null;

export const useComfyUI = () => {
	return {
		checkInit,
		isInit,
		state,
		queueRemaining,
		progress,
		output,
		loadGraph,
		queuePrompt,
	};
};

/**
 * 初期化チェック
 */
const checkInit = async () => {
	if (isInit.value) {
		return;
	}

	return new Promise<void>((resolve) => {
		const checkFlag = () => {
			let flag = false

			if (typeof window !== "undefined" && window.comfyAPI) {
				const clientId = window.comfyAPI?.api?.api?.clientId;
				if (typeof clientId === 'string' && clientId !== '') {
					isInit.value = true;
					app = window.comfyAPI?.app?.app;
					api = window.comfyAPI?.api?.api;

					/**	
					 * 進捗状況を取得する
					 * @see https://docs.comfy.org/essentials/comms_messages#built-in-message-types
					 */
					api.addEventListener('execution_start', () => {
						state.value = 'start'
					})
					api.addEventListener('execution_error', () => {
						state.value = 'error'
					})
					api.addEventListener('execution_interrupted', () => {
						state.value = 'error'
					})
					api.addEventListener('execution_cached', () => {
						state.value = 'start'
					})
					api.addEventListener('executing', () => {
						state.value = 'executing'
					})
					api.addEventListener('executed', (evt) => {
						state.value = 'executed'
						output.value.push(evt.detail.output.images.map((image: { filename: string, subfolder: string, type: string }) => {
							return OUTPUT_PATH_URL.replace('{filename}', image.filename).replace('{subfolder}', image.subfolder).replace('{type}', image.type);
						})[0]);
					})
					api.addEventListener('progress', (evt: any) => { progress.value = evt.detail.value / evt.detail.max })
					api.addEventListener('status', (evt: any) => { queueRemaining.value = evt.detail.exec_info.queue_remaining })

					flag = true
					resolve();
				}
			}

			if (!flag) {
				setTimeout(checkFlag, CHECK_INTERVAL);
			}
		};

		checkFlag();
	});
};

/**
 * グラフを読み込む
 * @param {string} json - グラフJSON
 */
const loadGraph = (json: string) => {
	if (!isInit.value || !app) return;
	app.loadGraphData(JSON.parse(json));
}

/**
 * キューを開始
 * @param {string} json - グラフJSON
 * @param {number} batchCount - 実行回数
 */
const queuePrompt = async ({ json = '', batchCount = 1 }: { json?: string, batchCount?: number } = {}) => {
	if (!isInit.value || !app) return;
	state.value = '';
	queueRemaining.value = 0;
	progress.value = 0;
	output.value = [];
	if (json !== '') {
		loadGraph(json);
	}
	app.queuePrompt(0, batchCount);
}