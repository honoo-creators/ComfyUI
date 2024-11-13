// エンタープライズプロフィール
export interface UsageType {
	type: 'personal' | 'enterprise'
	id: number
	profile: EnterpriseProfile | null // プロフィール。 personal の場合は null
	ticket: number | typeof Infinity // チケット。 Enterprise の場合は Infinity
}

// エンタープライズプロフィール
export interface EnterpriseProfile {
	name: string
	face: string
}