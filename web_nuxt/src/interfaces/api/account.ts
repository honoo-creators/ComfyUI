/**
 * User インターフェース
 */

import type { Response } from './response'
import type { Work } from './original'

// -----------------------------------------------
// 基本的なデータの定義
// -----------------------------------------------
// ユーザー
export interface User {
	id: number
	name: string | null
	email: string
}

// プロフィール
export interface AccountProfile {
	user_id: number
	name: string
	screen_name: string
	last_name: string
	first_name: string
	organization_name: string
	position_name: string
	date_of_birth: string
	face_image_path: string
	introduction: string
	comment: string
	role_policy: number
	role_status: number
	update_frequency: number
	is_complete_tutorial: number
	last_login_at: string
	support: string
	positions: Positions
	skills: Skills
	tools: Tools
	awards: Award[]
	participation_works: ParticipationWork[]
	careers: Career[]
	sns_info?: SnsInfo
	mail_setting?: MailSetting // 自分の場合のみ
	is_follow?: number // フォローしているかどうか。自分以外の場合のみ
	is_followed?: number // フォローされているかどうか。自分以外の場合のみ
}
export interface RelatedAccount extends AccountProfile {
	unread_work_count: number // 未読作品数
}
export interface RelatedAccountFollower extends AccountProfile {
	count: number // フォロワー数
}

// クリエイター情報
export interface StatsCreator {
	profile: AccountProfile // クリエイターのプロフィール
	invitee: AccountProfile // このクリエイターを招待したユーザのプロフィール
	support: number // 応援された総額(クリエイターに対する応援額 + クリエイターの作品に対する応援額)
	followers: AccountProfile[] | AccountProfile[] // クリエイターのフォロワー
	follower_count: number // フォロワー数
	relatedUsers: AccountProfile[] // クリエイターをサポートしている関連ユーザのプロフィール
	works: Work[] // クリエイターの作品
	work_count: number // 公開作品件数
	thanks_card_count: number // 公開ファンカード数
	timeline_post_count: number // タイムライン投稿数

	// 以下 2項目は自分（クリエイター自身）の場合のみ
	my_work_count?: number // 登録作品件数 （削除／非公開数含めた全体数）
	my_thanks_card_count?: number // 登録ファンカード数 （削除／非公開数含めた全体数）

	// ToDo 以下のプロパティの定義を追加する
	supported_messages: [] // 応援時のメッセージの一覧。最新順で最大20件まで。
	ranking: [] // 直近1年の応援者を応援金額が多い順にしたもの
}

// サポーター情報
export interface StatsSupporter {
	profile: AccountProfile
	invitee: AccountProfile
	is_following: number // フォローしているかどうか
	followers: AccountProfile[]
	followersNum: number
	followings: AccountProfile[]
	followingsNum: number
	supportings: AccountProfile[]
	collection: [] // Todo: コレクションを定義する
	subscriptionNum: number
	subscriptionCreators: AccountProfile[]
	support_total_amount_for_creators: number
}

// 肩書き
export interface Position {
	sort_order: number
	ja: string
	en: string
	text?: string // このプロパティは、API からのレスポンスには含まれない。アプリ内でのみ使用する。
}
export interface Positions {
	[key: string]: Position
}

// スキル
export interface Skill {
	ja: string | null
	en: string
}
export interface Skills {
	[key: string]: Skill
}

// ツール
export interface Tool {
	ja: string | null
	en: string
}
export interface Tools {
	[key: string]: Tool
}

// 受賞歴
export interface Award {
	id: number
	user_id: number
	year: number
	award_detail: string
	sort_order: number
}

// 参加作品
export interface ParticipationWork {
	id: number
	user_id: number
	year: number
	work_name: string
	work_performed: string
	sort_order: number
}

// 経歴
export interface Career {
	id: number
	user_id: number
	year: string
	career_detail: string
	sort_order: number
}

// ステータス
export interface Status {
	user_id: number
	follow_count: number
	follower_count: number
	support_count: number
	supporter_count: number
	work_count: number
	collection_count: number
}

// Sns
export interface SnsInfo {
	[key: string]: string
}

// メール通知設定
export interface MailSetting {
	summary: 1 | 0 // ユーザーからのアクションサマリー
	chat: 1 | 0 // チャットメンション
	project: 1 | 0 // プロジェクトチャットメンション
}

// プロジェクト情報
export interface ProjectInfo {
	channel_unread_count: number // マイプロジェクトチャット未読件数
	timeline_unread_count: number // フォロープロジェクトタイムライン未読件数
}

// -----------------------------------------------
// レスポンス定義
// -----------------------------------------------
// クリエイター情報
export interface ResponseStatsCreator extends StatsCreator, Response { }

// サポーター情報
export interface ResponseStatsSupporter extends StatsSupporter, Response { }
