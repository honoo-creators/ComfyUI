/**
 * @brief アプリ全体の初期化処理を行うストア
 * @description このストアはアプリ起動時に必ず初期化される
 */

import { defineStore } from "pinia";

export const useAppFrontStore = defineStore({
	id: "appFront",
	state: () => ({
		pending: true, // 準備中フラグ
	}),
	actions: {
		/**
		 * アプリ全体の初期化処理
		 */
		async init() {
			// 準備中
			this.pending = true;

			// Composables 初期化

			/**
			 * ルートトラッカー で止まっているため、一旦コメントアウト
			 */
			// useRouteTracker().init();
			// console.log('route tracker init')

			useScroll().init();
			useViewport().init(); // ビューポート
			useEnvironment().init(); // アクセス環境
			useWebFonts().init({
				jaAdjust: Number(useCss().getVariable("fontJaSizeAdjust")),
				exLocation: [""],
				exOS: ["Macintosh"],
			}); // WEBフォント
			useMode().init(); // モード
			useMediaQuery().init(); // メディアクエリ
			useRuntimeConfig().public.DEV_ENABLED && useDev().init(); // 開発メニュー

			// 準備中解除
			this.pending = false;
		},
	},
});
