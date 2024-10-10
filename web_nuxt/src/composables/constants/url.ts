/**
 * URL 定数
 */

// リダイレクト先のキー
const REDIRECT_KEY = 'redirect_url'

export const useConstantsUrl = () => {
	// HONOO URL
	const HONOO_URL = useRuntimeConfig().public.HONOO_URL

	return {
		STRIPE_OFFICIAL: 'https://stripe.com', // Stripeの公式WEBサイト
		HONOO: HONOO_URL,
		HONOO_PRIVACY_POLICY: `${HONOO_URL}/privacypolicy`,
		HONOO_TERMS_OF_USE: `${HONOO_URL}/termsofuse`,
		HONOO_SPECIFIED_COMMERCIAL_TRANSACTIONS: `${HONOO_URL}/specified`,
		HONOO_COMPANY: `${HONOO_URL}/company`,
		ANIME_JOB_URL: useRuntimeConfig().public.ANIME_JOB_URL,
		CHANGE_ANIME_URL: useRuntimeConfig().public.CHANGE_ANIME_URL,

		/**
		 * ログインURLを返す
		 * @param {string} redirect - リダイレクト先のURL	
		 * @returns {string} ログインURL
		 */
		login: (redirect: string = ''): string => {
			const redirectUrl = redirect ? `?${REDIRECT_KEY}=${redirect}` : ''
			return `${HONOO_URL}/login${redirectUrl}`
		},

		/**
		 * ログアウトURLを返す
		 * @param {string} redirect - リダイレクト先のURL
		 * @returns {string} ログアウトURL
		 */
		logout: (redirect: string = ''): string => {
			const redirectUrl = redirect ? `?${REDIRECT_KEY}=${redirect}` : ''
			return `${HONOO_URL}/logout${redirectUrl}`
		},

		/**
		 * サインアップURLを返す
		 * @note クリエイターアカウント・招待コードなしのサインアップURL
		 * @param {string} redirect - リダイレクト先のURL
		 * @returns {string} サインアップURL
		 */
		singup: (redirect: string = ''): string => {
			const configQuery = `role_status=2&invite_code=skip`
			const query = redirect ? `?${REDIRECT_KEY}=${redirect}&${configQuery}` : `?${configQuery}`
			return `${HONOO_URL}/signup${query}`
		},
	}
}
