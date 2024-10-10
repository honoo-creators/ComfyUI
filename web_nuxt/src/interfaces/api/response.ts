/**
 * レスポンスインターフェース
 */
// 共通で帰ってくるもの
export interface Response {
	now_date: string
}

// 画像
export interface ResponseImage {
	'Content-Type': string
	image: Buffer | Blob
}

// APIからのBlob関連のレスポンスの型を定義
export type ResponseBlob = string | {} | undefined | null
