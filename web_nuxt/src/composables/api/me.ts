import type { ApiOptions } from '@honoo-creators/ui/dist/runtime/composables/api'
import type { Response } from '~/interfaces/api/response'
import type { User, AccountProfile, Status, ProjectInfo } from '~/interfaces/api/account'

/**
 * Responses
 */
interface ResponseMeInfo extends Response {
	user: User
	profile: AccountProfile
	status: Array<Status>
	project: ProjectInfo
	chats_unread_count: number
}

export const useApiMe = () => {
	return {
		info
	}
}

/**
 * 自分情報取得
 * @param {ApiOptions} [options] - API の設定
 * @see https://github.com/honoo-creators/honoo-api/wiki/API-me
 */
const info = async (options?: ApiOptions): Promise<ResponseMeInfo> => {
	return await useApi().get('/me', {}, options)
}
