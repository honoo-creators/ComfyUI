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

export const useComfyUI = () => {
	return {
		checkInit,
		isInit,
	};
};

/**
 * 初期化チェック
 */
const checkInit = () => {
	if (isInit.value || typeof window === "undefined" || !window.comfyAPI) {
		return;
	}

	// CHECK_INTERVAL ごとにチェック
	const checkFlag = async () => {
		const clientId = window.comfyAPI?.api?.api?.clientId;
		if (typeof clientId === 'string' && clientId !== '') {
			isInit.value = true;
		} else {
			await useUtils().wait(CHECK_INTERVAL);
			checkFlag();
		}
	};

	checkFlag();
};
