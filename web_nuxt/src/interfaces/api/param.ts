// リスト取得
export interface ParamsList {
	page?: number
	limit?: number
	sort_order?: number
}
// 画像取得
export interface ParamsImage {
	thumbnail?: number
	download?: number
	filename?: string
	sortOrder?: number | string // 画像の並び順
}
