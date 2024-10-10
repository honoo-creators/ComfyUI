/**
 * メニューのデータ型
 */
export interface MenuParent {
	name: string // 名前、表示名
	children: MenuChild[] // 子メニュー
	open: boolean // メニューを開く
}
export interface MenuChild {
	name: string // 名前、表示名
	page: string // router ページ名
	disabled?: boolean // メニューを無効にする
}
