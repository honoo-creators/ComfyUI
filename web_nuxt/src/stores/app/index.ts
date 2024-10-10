import { defineStore } from 'pinia'
import { useAppFrontStore } from './front'
import { useAppBackStore } from './back'

export const useAppStore = defineStore({
	id: 'app',
	actions: {
		/**
		 * アプリ全体の初期化処理
		 */
		init() {
			useAppFrontStore().init() // フロントストア
			useAppBackStore().init() // バックストア

			// ブラウザタブがアクティブになるたびにバージョンを確認
			document.addEventListener('visibilitychange', () => {
				if (document.visibilityState === 'visible') {
					this.checkVersion()
				}
			})
			// ブラウザがフォーカスされるたびにバージョンを確認
			window.addEventListener('focus', () => {
				this.checkVersion()
			})
		},

		/**
		 * バージョン確認
		 */
		async checkVersion() {
			const jsonFilePath = `${useRuntimeConfig().public.BASE_URL}/version.json?t=${Date.now()}`;
			try {
				const response = await fetch(jsonFilePath);
				if (!response.ok) {
					throw new Error('ネットワーク応答が正常ではありません');
				}
				const { version } = await response.json();
				if (version !== useRuntimeConfig().public.VERSION) {
					// バージョンが異なる場合、ページをリロード
					window.location.reload();
				}
			} catch (error) {
				// eslint-disable-next-line no-console
				console.error('バージョンチェック中にエラーが発生しました:', error);
			}
		}
	},
})
