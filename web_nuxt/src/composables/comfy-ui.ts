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

const isInit = ref(false);
let app: any = null;
let api: any = null;

export const useComfyUI = () => {
	return {
		checkInit,
		isInit,
		loadGraph,
		queueStart,
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
 */
const loadGraph = (json: string) => {
	if (!isInit.value || !app) return;
	app.loadGraphData(JSON.parse(json));
}

/**
 * キューを開始
 */
const queueStart = () => {
	if (!isInit.value || !app) return;
	app.queuePrompt();
}