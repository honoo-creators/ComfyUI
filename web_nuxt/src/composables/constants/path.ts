/**
 * サービス内パス定数
 */

export const useConstantsPath = () => {
	return {
		DEV: "/dev",
		ROOT: "/",
		DASHBOARD: "/nuxt/dashboard",

		// Generate
		GENERATE_LOOKSTYLE: "/nuxt/generate/lookstyle",
		GENERATE_UPLOAD: "/nuxt/generate/upload",
		GENERATE_PROMPT_A: "/nuxt/generate/prompt/a",
		GENERATE_PROMPT_B: "/nuxt/generate/prompt/b",
		GENERATE_PROMPT_C: "/nuxt/generate/prompt/c",
		GENERATE_PROMPT_D: "/nuxt/generate/prompt/d",
		// Generate confirm
		GENERATE_CONFIRM: "/nuxt/generate-confirm",
	};
};
