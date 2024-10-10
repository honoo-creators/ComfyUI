/**
 * Generate middleware
 * @brief 背景美術生成ミドルウェア
 * @description 背景美術生成ページにアクセスした際に、必要なデータが揃っていなければ背景美術生成ページにリダイレクトします。
 */

import { storeToRefs } from 'pinia'
import { useGenerateStore } from '~/stores/generate'

export default defineNuxtRouteMiddleware((to) => {
	if (to.path !== useConstantsPath().GENERATE_LOOKSTYLE) {
		const { lookStyle, base64, promptA, promptB, promptC, promptD } = storeToRefs(useGenerateStore())
		if (!lookStyle.value && !base64.value && !promptA.value.length && !promptB.value.length && !promptC.value.length && !promptD.value.length) {
			return navigateTo(useConstantsPath().DASHBOARD)
		}
	}
})
