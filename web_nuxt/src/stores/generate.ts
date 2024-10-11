/**
 * @brief 背景美術スタイルを管理するストア
 */

import { defineStore } from 'pinia'
import type { LookStyle } from '~/interfaces/look-style'
import promptMetroCity from '~/assets/prompts/metro-city.json'
import promptRuins from '~/assets/prompts/ruins.json'
import promptWilderness from '~/assets/prompts/wilderness.json'
import promptNostalgic from '~/assets/prompts/nostalgic.json'
import promptNeoNippon from '~/assets/prompts/neo-nippon.json'
import promptFantasy from '~/assets/prompts/fantasy.json'
import workflow from '~/../workflows/test001.json';

const THEMES = {
	'Metro City': promptMetroCity,
	'Ruins': promptRuins,
	'Wilderness': promptWilderness,
	'Nostalgic': promptNostalgic,
	'Neo Nippon': promptNeoNippon,
	'Fantasy': promptFantasy,
}

export const useGenerateStore = defineStore({
	id: 'generate',
	state: () => ({
		lookStyle: null as LookStyle | null,
		base64: '' as string,
		promptA: [] as string[],
		promptB: [] as string[],
		promptC: [] as string[],
		promptD: [] as string[],
		workflow,
	}),
	getters: {
		promptASuggests: (state) => THEMES[state.lookStyle?.name as keyof typeof THEMES]?.whatToDraw ?? [],
		promptBSuggests: (state) => THEMES[state.lookStyle?.name as keyof typeof THEMES]?.environment ?? [],
		promptCSuggests: (state) => THEMES[state.lookStyle?.name as keyof typeof THEMES]?.colorMood ?? [],
		promptDSuggests: (state) => THEMES[state.lookStyle?.name as keyof typeof THEMES]?.lighting ?? [],
	},
	actions: {
		/**
		 * 背景美術スタイルを選択する
		 * @param {LookStyle} lookStyle - 背景美術スタイル
		 */
		async setLookStyle(lookStyle: LookStyle) {
			this.lookStyle = lookStyle
		},

		/**
		 * 画像を選択する
		 * @param {string} base64 - 画像のバイナリデータ
		 */
		async setBase64(base64: string) {
			this.base64 = base64
		},

		/**
		 * プロンプトを設定する
		 * @param {string[]} value - プロンプト
		 */
		setPromptA(value: string[]) {
			this.promptA = value
		},
		setPromptB(value: string[]) {
			this.promptB = value
		},
		setPromptC(value: string[]) {
			this.promptC = value
		},
		setPromptD(value: string[]) {
			this.promptD = value
		},

		/**
		 * カスタム Workflow を設定する
		 * @param {string} json - Workflow の JSON 文字列
		 */
		setWorkflow(json: string) {
			this.workflow = JSON.parse(json)
		},

		/**
		 * 初期化する
		 */
		async init() {
			this.$reset()
		},
	},
})
