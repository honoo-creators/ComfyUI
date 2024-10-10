import withNuxt from "./.nuxt/eslint.config.mjs";
const INLINE_ELEMENTS = ["a", "abbr", "audio", "b", "bdi", "bdo", "canvas", "cite", "code", "data", "del", "dfn", "em", "i", "iframe", "ins", "kbd", "label", "map", "mark", "noscript", "object", "output", "picture", "q", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "svg", "time", "u", "var", "video"];

export default withNuxt(
	{
		files: ["**/*.vue", "**/*.ts"],
		rules: {
			"no-console": "error",
			"@typescript-eslint/no-explicit-any": "error",
		},
	},
	{
		files: ["**/*.vue"],
		rules: {
			"vue/no-multiple-template-root": "error",
			// "vue/multi-word-component-names": "error",
			"vue/require-v-for-key": "error",
			"vue/no-use-v-if-with-v-for": "error",
			"vue/singleline-html-element-content-newline": ["error", {
				"ignoreWhenNoAttributes": true,
				"ignoreWhenEmpty": true,
				"ignores": ["pre", "textarea", ...INLINE_ELEMENTS],
				"externalIgnores": []
			}],
			"vue/multiline-html-element-content-newline": ["error", {
				"ignoreWhenEmpty": true,
				"ignores": ["pre", "textarea", ...INLINE_ELEMENTS],
				"allowEmptyLines": false,
			}],
			"vue/first-attribute-linebreak": "off", // 無効化: コンポーネントの属性は改行後にする。 理由: 保存時の整形ルールと違うため。
			"vue/multi-word-component-names": "off", // 無効化: コンポーネント名は1単語でもOK。 理由: シンプルな名前にしたい、かつ、問題が起こっていないため。
		},
	},
);
