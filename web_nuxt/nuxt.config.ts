import { defineNuxtConfig } from "nuxt/config";
import dotenv from "dotenv";
import path from "path"; // SSLで必要
import fs from "fs"; // SSLで必要

// .env ファイルのパスを指定して読み込み
dotenv.config({ path: path.resolve(__dirname, "./env/.env") });

// pachage.json の version を取得する
const packageJsonPath = path.resolve(process.cwd(), "package.json"); // package.json のパスを取得
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8")); // package.json を読み込む
const version = pkg.version; // package.json の version を取得

// 環境変数を取得
const env = process.env;

// 環境変数の変数を取得
const domain = env.DOMAIN;
const tokenKey = env.TOKEN_KEY;
const baseUrl = env.BASE_URL;
const apiUrl = env.API_URL;
const storageUrl = env.STORAGE_URL;
const honooUrl = env.HONOO_URL;
const animeJobUrl = env.ANIME_JOB_URL;
const changeAnimeUrl = env.CHANGE_ANIME_URL;
const googleClientId = env.GOOGLE_CLIENT_ID;
const googleClientSecret = env.GOOGLE_CLIENT_SECRET;
const googleClientRedirectUri = env.GOOGLE_CLIENT_REDIRECT_URI;
const googleClientScope = env.GOOGLE_CLIENT_SCOPE;
const googleTagManagerContainerId = env.GOOGLE_TAG_MANAGER_CONTAINER_ID;
const devEnabled = env.DEV_ENABLED === "true";
const basicAuthEnabled = env.BASIC_AUTH_ENABLED === "true";
const environment = env.ENVIRONMENT;

// Stripeのキーなど
const stripeTestMode = env.STRIPE_TEST_MODE === "true";
const stripePublisableKeyTest = env.STRIPE_PUBLISHABLE_KEY_TEST;
const stripePublisableKeyLive = env.STRIPE_PUBLISHABLE_KEY_LIVE;
const stripeSecretKeyTest = env.STRIPE_SECRET_KEY_TEST;
const stripeSecretKeyLive = env.STRIPE_SECRET_KEY_LIVE;
const stripeAccount = env.STRIPE_ACCOUNT;
const stripeApiVersion = env.STRIPE_API_VERSION;
const stripeLocale = env.STRIPE_LOCALE;

// 環境変数をオブジェクトにまとめる
const config = {
	// 全体設定
	VERSION: version,
	DOMAIN: domain,
	TOKEN_KEY: tokenKey,
	BASE_URL: baseUrl,
	STORAGE_URL: storageUrl,
	HONOO_URL: honooUrl,
	ANIME_JOB_URL: animeJobUrl,
	CHANGE_ANIME_URL: changeAnimeUrl,
	GOOGLE_CLIENT_ID: googleClientId,
	// GOOGLE_CLIENT_SECRET: googleClientSecret, // クライアント側で使用しないので削除
	GOOGLE_CLIENT_REDIRECT_URI: googleClientRedirectUri,
	GOOGLE_CLIENT_SCOPE: googleClientScope,
	GOOGLE_TAG_MANAGER_CONTAINER_ID: googleTagManagerContainerId,
	API_URL: apiUrl,
	DEV_ENABLED: devEnabled,
	BASIC_AUTH_ENABLED: basicAuthEnabled,
	ENVIRONMENT: environment,

	// Stripe 設定
	STRIPE: {
		TEST_MODE: stripeTestMode,
		PUBLISHABLE_KEY: stripeTestMode
			? stripePublisableKeyTest
			: stripePublisableKeyLive,
		ACCOUNT: stripeAccount,
		API_VERSION: stripeApiVersion,
		LOCALE: stripeLocale,
	},
};

// https://nuxt.com/docs/api/configuration/nuxt-confighonoo
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",

	alias: {
		"@honoo-creators/ui": path.resolve(
			__dirname,
			"node_modules/@honoo-creators/ui"
		),
	},

	// If you have enabled Take Over Mode or installed the TypeScript Vue Plugin (Volar), you can disable generating the shim
	typescript: {
		shim: false,
	},

	devtools: { enabled: true },

	// コンポーネントなどソースコードの置き場所を変更
	srcDir: "src/",

	// Server Side Rendering を無効化
	ssr: false,

	// コンポーネントディレクトリの再設定
	// components: [],

	// ビルドで無視するファイルを追加指定する。
	// 主に、本番環境ではビルドしないファイルを指定する。
	ignore: !devEnabled
		? [
			// 開発ページ関連
			"src/components/dev/**",
			"src/pages/dev/**",
			"src/pages/dev.vue",
		]
		: [],

	imports: {
		dirs: [
			// Scan top-level modules
			'composables',
			// ... or scan modules nested one level deep with a specific name and file extension
			'composables/*/index.{ts,js,mjs,mts}',
			// ... or scan all modules within given directory
			'composables/**'
		],
	},

	// 使用する SCSS ファイルを配列で指定
	css: [
		"~/../node_modules/normalize.css/normalize.css", // 初期化用の CSS ファイル
		"@/assets/scss/style.scss",
	],

	// プラグインの設定
	plugins: [
		"~/plugins/pinia.js", // 状態管理
	],

	modules: [
		"@nuxt/eslint", // ESLint
		"@honoo-creators/ui", // Honoo UI
	],



	app: {
		// ページのタイトルを設定
		head: {
			title: 'Honoo Technologies',
			htmlAttrs: {
				lang: 'ja',
			},
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: `/favicon.ico?v=${version}` },
			],
		},
	},

	vite: {
		server: {
			watch: {
				usePolling: true,
			},
			open: "local.honoo.tokyo:3000",
		},
		css: {
			preprocessorOptions: {
				scss: {
					/**
					 * 以下のWARNに対応するため、apiオプションを設定しています。
					 * @note WARN  Deprecation [legacy-js-api]: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
					 */
					api: "modern-compiler", // or "modern"

					/**
					 * Honoo UI の scss 変数と mixin をインポートするための設定。
					 * @note 変数は `var` mixin は `mix` で使用できます。
					 */
					additionalData: `
          @use "sass:math";
          @use "sass:color";
          @use "sass:list";
          @use "sass:map";
          @use "sass:meta";
          @use "sass:selector";
          @use "sass:string";
					@use "@honoo-creators/ui/src/runtime/scss/_variables" as var;
					@use "@honoo-creators/ui/src/runtime/scss/_mixins" as mix;
					@use "@honoo-creators/ui/src/runtime/scss/_functions" as func;`,
				},
			},
		},
	},

	runtimeConfig: {
		...config, //このオブジェクトの値は $config を使ってサーバーからアクセスできます。
		GOOGLE_CLIENT_SECRET: googleClientSecret, // シークレットはサーバーのみ
		STRIPE: {
			...config.STRIPE,
			SECRET_KEY: stripeTestMode ? stripeSecretKeyTest : stripeSecretKeyLive, // シークレットキーはサーバーのみ
		},

		// クライアントで使用可能な環境変数を設定
		public: {
			...config, //このオブジェクトの値は $config を使ってクライアントとサーバー両方からアクセスできます。
		},
	},
});
