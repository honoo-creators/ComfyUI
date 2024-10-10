/**
 * Thanks Contents インターフェース
 */
// お礼イラスト情報
export interface ThanksCard {
	id: number
	project_id?: number // プロジェクトの場合のみ
	user_id: number
	image_path: string
	thumbnail_path: string
	title: string
	caption: string
	support_value: number
	max_number: number
	current_number: number
	is_active: number
	is_force_deleted: number
	is_suspended: number // 販売状態 1:一時停止 0:一時停止を解除
	force_deleted_status: number
	created_at: string
	updated_at: string
	thanks_card_current_numbers: { [key: string]: ThanksCardCurrentNumber }
	project_thanks_card_current_numbers?: { [key: string]: ThanksCardCurrentNumber } // プロジェクトの場合のみ
}
// ファンカードの販売済み番号
export interface ThanksCardCurrentNumber {
	current_number: number // 販売済み番号。 +1 すると次に販売される番号になる。
	is_sold_out: boolean // 売り切れフラグ
}
