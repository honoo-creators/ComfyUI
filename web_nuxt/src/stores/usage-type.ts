/**
 * @brief 利用タイプを管理するストア
 * @description personal または enterprise を管理する
 */

import { defineStore } from 'pinia'
import { useMeStore } from '~/stores/me'
import type { UsageType, EnterpriseProfile } from '~/interfaces/usage-type'

// ダミーの選択リスト
const DUMMY_LIST: UsageType[] = [
	{
		type: 'personal',
		id: 0,
		profile: { name: 'Yuichi Ishihara', face: 'face/0/1/QOhA9dRVSPSltUty.png' } as EnterpriseProfile, // 自分のプロフィールを使用する
		ticket: 3,
	},
	{
		type: 'enterprise',
		id: 1,
		profile: { name: 'Honoo Anime Creators & Studios', face: 'face/0/13/22FHbkc3FHOgkLjHYKmtlyY8v6fI6krIxjkeAgnc.jpg' } as EnterpriseProfile,
		ticket: Infinity,
	}
]

export const useUsageTypeStore = defineStore({
	id: 'usageType',
	state: () => ({
		active: DUMMY_LIST[0] as UsageType
	}),
	getters: {
		list: () => DUMMY_LIST,
		face: (state) => state.active.profile?.face ?? '',
		name: (state) => state.active.profile?.name ?? '',
		ticket: (state) => state.active.ticket,
	},
	actions: {
		/**
		 * 利用タイプを選択する
		 * @param {'personal' | 'enterprise'} type - 利用タイプ
		 * @param {number} [id] - エンタープライズID
		 */
		async select(id: number = 0) {
			this.active = DUMMY_LIST.find(item => item.id === id) || DUMMY_LIST[0]
		},
	},
})
