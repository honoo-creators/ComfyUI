// エンタープライズプロフィール
export interface UsageType {
	type: 'personal' | 'enterprise'
	id: number
	profile: EnterpriseProfile | null // プロフィール。 personal の場合は null
}

// エンタープライズプロフィール
export interface EnterpriseProfile {
	name: string
	face: string
}