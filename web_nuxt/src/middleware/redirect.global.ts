/**
 * Redirect middleware
 * @brief グローバルリダイレクトミドルウェア
 * @description サーバサイドで実行するリダイレクトを指定できます。ルートが変更されるたびに自動的に実行されます。
 * 転送期間を 「一時的」 とする場合は以下に注意してください。
 * 利用シーン - メンテナンスページへの誘導など。
 * 検索結果 - 転送元のページが表示されます。
 * ページランク - 損失しません。
 * @note 転送期間のデフォルトは 「永続的」 です。
 * @see https://www.xserver.ne.jp/bizhp/about-redirect/?gad_source=1&gclid=CjwKCAiA7t6sBhAiEiwAsaieYtY0xXAoxrSolhMQPojdZG0tOMy2vDtM-opTNIC5sCfaXsIJUpdCKRoChm4QAvD_BwE#%E3%83%AA%E3%83%80%E3%82%A4%E3%83%AC%E3%82%AF%E3%83%88%E3%81%AE%E7%A8%AE%E9%A1%9E%EF%BC%88301%E3%81%A8302%EF%BC%89%E3%82%84SEO%E3%81%A8%E3%81%AE%E9%96%A2%E4%BF%82%E6%80%A7
 * @version 0.0.1
 */

/**
 * 転送期間
 */
const PERMANENT = 301; // 永続的
const TEMPORARY = 302; // 一時的

/**
 * @brief リダイレクト設定
 * @description path で指定したパスから to で指定したパスへリダイレクトします。
 * @param {string} path - リダイレクト元のパス
 * @param {string} to - リダイレクト先のパス
 * @param {number} [code=301] - リダイレクト時のHTTPステータスコード
 */
type Redirect = {
	path: string;
	to: string;
	code: typeof PERMANENT | typeof TEMPORARY | ""; // 301 or 302
};

export default defineNuxtRouteMiddleware((to) => {
	/**
	 * @brief リダイレクトのリスト
	 * @description リダイレクトのリストを定義します。各リダイレクトは、fromで指定したパスからtoで指定したパスへリダイレクトします。
	 */
	const list: Redirect[] = [
		// トップ - ダッシュボード
		// { path: useConstantsPath().ROOT, to: useConstantsPath().DASHBOARD, code: PERMANENT }, // ※ルートディレクトリで ComfyUI の初期化を待つため、ここではリダイレクトしない。
	];

	// リダイレクトの実行
	const match = list.find((r) => r.path === to.path);
	if (match) {
		return match.code
			? navigateTo(match.to, { redirectCode: match.code })
			: navigateTo(match.to);
	}
});
