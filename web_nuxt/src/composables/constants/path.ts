/**
 * サービス内パス定数
 */

const PREFIX = "/nuxt";

export const useConstantsPath = () => {
	return {
		// Development
		DEV: `/dev`,

		// Root
		ROOT: "/",

		// Dashboard
		DASHBOARD: `${PREFIX}/dashboard`,

		// Generate
		GENERATE_LOOKSTYLE: `${PREFIX}/generate/lookstyle`,
		GENERATE_UPLOAD: `${PREFIX}/generate/upload`,
		GENERATE_PROMPT_A: `${PREFIX}/generate/prompt/a`,
		GENERATE_PROMPT_B: `${PREFIX}/generate/prompt/b`,
		GENERATE_PROMPT_C: `${PREFIX}/generate/prompt/c`,
		GENERATE_PROMPT_D: `${PREFIX}/generate/prompt/d`,
		// Generate confirm
		GENERATE_CONFIRM: `${PREFIX}/generate-confirm`,

		// Output
		OUTPUT: `${PREFIX}/output`
	};
};
