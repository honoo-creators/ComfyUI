/**
 * @brief サーバーデータの初期化処理を行うストア
 * @description このストアはページ初期時に実行される
 */

import { defineStore } from 'pinia'
import { useMeStore } from '~/stores/me'

export const useAppBackStore = defineStore({
	id: 'appBack',
	state: () => ({
		pending: true, // 準備中フラグ
	}),
	actions: {
		/**
		 * アプリ全体の初期化処理
		 */
		init() {
			// 既に初期化済みであれば何もしない
			if (!this.pending) return

			this.pending = true

			// ログイン済みであれば
			if (useAuth().loggedIn.value) {
				// ログインユーザーの情報を取得
				useMeStore().init()
			}
			this.pending = false
		},
	},
})
