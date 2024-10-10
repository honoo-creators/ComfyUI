/**
 * User インターフェース
 */

import type { Response } from './response'
import type { AccountProfile } from './account'
import type { ThanksCard } from './thanks-card'

// -----------------------------------------------
// 基本的なデータの定義
// -----------------------------------------------
// 作品データ
export interface Work {
	id: number
	user_id: number
	project_id?: number // プロジェクトの場合のみ
	title: string
	thumbnail_path: string
	thumbnail_width: number
	thumbnail_height: number
	description: string
	headline: string
	text_content: string
	url: string
	uri: string
	images: WorkImages
	transcode_status: string
	is_transcode: number
	duration: number
	published_at: string
	closed_at: string
	media_type: number
	category_id: number
	pickup: number
	created_at: string
	updated_at: string
	tags: Record<string, string>
	creator: AccountProfile
	support: number
	supporters: AccountProfile[] | AccountProfile[]
	supportersNum: number
	supportedCount: number // コメント数？
	relatedUsers: AccountProfile[]
	is_like: number // いいね済みかどうか
	like_count: number // いいね数
	liked_users: AccountProfile[] // いいねしたユーザー
	thanks_cards: ThanksCard[]
	project_thanks_cards?: ThanksCard[]
}
// 画像データ
// { [key: string]: string } は、key が string で value が string の 「 連想配列 」 を表す
export interface WorkImages {
	[key: string]: string
}
// コメントデータ
export interface WorkComment extends AccountProfile {
	amount: number // 応援金額（円）
	support_id: number // 応援ID
	message: string // コメント本文
	supported_at: string // コメントした日時
	priority_display_datetime: string
	is_priority_display: number
	is_like_comment: number // コメントにいいねがついているかどうか
	work_comments: WorkCommentCreatorReply[]
}
// 作品コメントへのクリエイター返信データ
export interface WorkCommentCreatorReply {
	id: number
	work_id: number
	support_id: number
	reply_to: number | null
	user_id: number
	body: string
	created_at: string
	updated_at: string
	user_profile: AccountProfile
}

// -----------------------------------------------
// レスポンス定義
// -----------------------------------------------
// 作品詳細
export interface ResponseWorkDetail extends Response {
	work: Work
}
// 作品一覧
export interface ResponseWorkList extends Response {
	works: Work[]
}
// コメント一覧
export interface ResponseWorkComments extends Response {
	supports: WorkComment[]
}
// クリエイターのユーザID指定による全投稿一覧
export interface ResponseWorkCreator extends Response {
	works: Work[]
}
