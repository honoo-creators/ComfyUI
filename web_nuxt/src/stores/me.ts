import { defineStore } from 'pinia'
import type { AccountProfile, Status, ProjectInfo, User } from '~/interfaces/api/account'

// State --------------------------
interface State {
	user: User | null
	profile: AccountProfile | null // プロフィール
	status: Status | null // ステータス
	project: ProjectInfo | null
	pending: boolean // ペンディング
	pollingIntervalId: number | null, // ポーリングのための setInterval の ID
	chatsUnreadCount: number // チャット未読数
	nowDate: string // 通信取得日時
	ticket: number // 残チケット
}

export const useMeStore = defineStore({
	id: 'me',
	state: (): State => ({
		user: null,
		profile: null,
		status: null,
		project: null,
		pending: true,
		pollingIntervalId: null,
		chatsUnreadCount: 0,
		ticket: 0,
		nowDate: '',
	}),
	getters: {
		/**
		 * ユーザーID
		 * @returns {number}
		 */
		id(state) {
			let num = 0
			if (state.profile) {
				num = state.profile.user_id
			}
			return num
		},

		/**
		 * 自分のユーザーIDかどうか
		 * @param {number} userId - ユーザーID
		 * @returns {boolean} - 自分のユーザーIDかどうか
		 */
		myId: (state) => (userId: number) => {
			return state.profile?.user_id === userId
		},

		/**
		 * フェイス画像パス
		 * @returns {string}
		 */
		face(state) {
			return state.profile ? state.profile.face_image_path : ''
		},

		/**
		 * 名前
		 * @returns {string}
		 */
		name(state) {
			return state.profile ? state.profile.name : ''
		},

		/**
		 * 所属
		 * @returns {string}
		 */
		organization(state) {
			return state.profile ? state.profile.organization_name : ''
		},
	},
	actions: {
		/**
		 * 初期化処理。
		 */
		async init() {
			this.$reset()
			// プロフィール更新
			await this.profileUpdate()
			this.pending = false
		},

		/**
		 * プロフィールを更新する
		 */
		async profileUpdate() {
			const res = await useApiMe().info()
			this.user = res.user
			this.profile = res.profile
			this.status = res.status[0]
			this.project = res.project
			this.nowDate = res.now_date
		},

		/**
		 * 最終処理
		 */
		final() {
			this.$reset()
		},
	},
})
