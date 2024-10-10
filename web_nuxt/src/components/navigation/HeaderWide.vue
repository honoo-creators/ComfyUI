<template>
	<Row tag="header" class="wideHeader" align="center" nowrap>
		<Container v-resize="(rect: DOMRectReadOnly) => maxWidth = rect.width" class="wideHeader-inner" wide>
			<Row justify="between" align="center" nowrap fit>
				<!-- Left UI -->
				<Box v-resize="(rect: DOMRectReadOnly) => leftWidth = rect.width" :w="sideWidth" :min-w="sideWidth" mr="auto">
					<template v-if="leftUI">
						<template v-if="leftUI === 'logo'">
							<BasicLink :to="DASHBOARD">
								<Logo size="44" />
							</BasicLink>
						</template>
					</template>
				</Box>

				<!-- Center UI -->
				<Box v-resize="(rect: DOMRectReadOnly) => centerWidth = rect.width" :w="isOverflow ? '60%' : '100%'" h="100%">
					<Container fit>
						<Box w="100%" h="100%" relative>
							<TransitionPopover x="40">
								<template v-if="centerLeftUI === 'back'">
									<div class="wideHeader-inner-centerLeftUI">
										<IconMenu v-resize="(rect: DOMRectReadOnly) => centerLeftUIWidth = rect.width" icon="arrowLeft"
											size="22" @click="handleBack" />
									</div>
								</template>
							</TransitionPopover>
							<Box v-resize="(rect: DOMRectReadOnly) => centerLeftTeleportWidth = rect.width"
								class="wideHeader-inner-centerLeftInfo" :max-w="centerMaxWidth" h="100%">
								<Row align="center" nowrap fit>
									<div id="headerWideLeft" />
								</Row>
							</Box>
							<template v-if="centerUI === 'title'">
								<div class="wideHeader-inner-title">
									<Row justify="center" align="center" nowrap fit>
										<Typography caption1 bold center>
											{{ props.title }}
										</Typography>
									</Row>
								</div>
							</template>
							<TransitionPopover x="40">
								<template v-if="centerRightUI === 'menu'">
									<div class="wideHeader-inner-centerRightUI">
										<IconMenu
											v-resize="(rect: DOMRectReadOnly) => centerRightUIWidth = rect.width + (menuNotice ? 16 : 0)"
											icon="menu" size="22" @click="handleMenu" />
										<template v-if="menuNotice">
											<Box r="circle" color="primary" w="6" h="6" absolute bottom="46%" left="8%" />
										</template>
									</div>
								</template>
								<template v-if="centerRightUI === 'close'">
									<IconMenu v-resize="(rect: DOMRectReadOnly) => centerRightUIWidth = rect.width"
										class="wideHeader-inner-centerRightUI" icon="cross" size="22" @click="handleClose" />
								</template>
							</TransitionPopover>
							<Box v-resize="(rect: DOMRectReadOnly) => centerRightTeleportWidth = rect.width"
								class="wideHeader-centerRight">
								<Row justify="end" align="center" fit>
									<div id="headerWideRight" />
								</Row>
							</Box>
						</Box>
					</Container>
				</Box>

				<!-- Right UI -->
				<Box v-resize="(rect: DOMRectReadOnly) => rightWidth = rect.width" :w="sideWidth" :min-w="sideWidth" ml="auto">
					<Row justify="end" align="center" gap="40" nowrap>
						<template v-if="rightUIs.includes('avatar')">
							<!-- ログイン済み -->
							<template v-if="loggedIn">
								<BasicLink :to="DASHBOARD">
									<Avatar :src="face" size="28" />
								</BasicLink>
							</template>
						</template>
					</Row>
				</Box>
			</Row>
		</Container>
	</Row>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMeStore } from '~/stores/me'

// Constants --------------------------------------------------
const sideWidth = 110 // サイドUIの横幅 ※ PCなどブラウザ幅が広いもの

// Stores & Composables --------------------------------------------------
const { isPureNumber } = useNumber()
const { replace, go } = useRouter()
const { DASHBOARD } = useConstantsPath()
const { loggedIn } = useAuth()
const { face } = storeToRefs(useMeStore())

// Props --------------------------------------------------
const props = defineProps({
	back: { type: [String, Number], default: 1 }, // 戻るボタンクリック時の戻すページ遷移数。パスを指定すると router.replace する。 非表示は 0。
	close: { type: [String, Number], default: 1 }, // 閉じる時に戻すページ遷移数。パスを指定すると router.replace する。 非表示は 0。
	title: { type: String, default: '' }, // タイトル
	logo: { type: Boolean, default: false }, // ロゴ表示
	globalMenu: { type: Boolean, default: false }, // グローバルメニュー表示
	menu: { type: [Boolean, Function], default: false }, // メニューボタン表示
	menuNotice: { type: Boolean, default: false }, // メニューボタンの通知表示
	avatar: { type: Boolean, default: false }, // アバターボタン表示
})

// Data --------------------------------------------------------
const leftWidth = ref(0)
const centerWidth = ref(0)
const rightWidth = ref(0)
const centerLeftTeleportWidth = ref(0)
const centerRightTeleportWidth = ref(0)
const centerLeftUIWidth = ref(0)
const centerRightUIWidth = ref(0)
const maxWidth = ref(0)

// Computed --------------------------------------------------------
const isRightTeleport = computed(() => centerRightTeleportWidth.value > 0)
const isOverflow = computed(() => {
	const betweenSpace = 240 * 2 // 中央UIと左右のスペース
	const contentWidth = sideWidth * 2 + Number(useCss().getVariable('maxWidth', 'wide')) - betweenSpace // コンテンツの横幅
	return useViewport().width.value <= contentWidth
})
const centerMaxWidth = computed(() => {
	return `calc(100% - ${useCss().getSize(centerLeftUIWidth.value + (centerRightUIWidth.value || centerRightTeleportWidth.value))})`
})

/**
 * ウィンドウ幅が広い場合の左UIの表示
 * @note メニュー(props.back) と ロゴ(props.logo） に従う
 * @return {string} 'back' or 'logo' or ''
 */
const leftUI = computed(() => {
	let str = ''
	// センターに「戻る」が表示されていない かつ props.back: true は戻る表示
	if (!centerLeftUI.value && props.back) {
		str = 'back'
	} else {
		str = 'logo'
	}
	return str
})

/**
 * ウィンドウ幅が広い場合の右UIの表示
 * @note 探索(props.search) に従う
 * @return {string[]} ['search'] or []
 */
const rightUIs = computed(() => {
	const arr: string[] = []

	// 戻る UI がある時以外で表示する。（戻る UI がある = 下層 の場合。）
	if (!props.back) {
		props.avatar && arr.push('avatar')
	}

	return arr
})

/**
 * 中央UIの表示
 * @note メニュー(props.back) と ロゴ(props.logo） と タイトル(props.title) に従う
 * @return {string} 'menu' or 'logo' or 'title' or ''
 */
const centerUI = computed(() => {
	let str = ''
	if (props.title) {
		str = 'title'
	}
	else {
		// 戻る UI がある時以外で表示する。（戻る UI がある = 下層 の場合。）
		if (!props.back) {
			if (props.globalMenu) {
				str = 'globalMenu'
			}
		}
	}
	return str
})

/**
 * 中央 - 左UI の表示
 * @note ウィンドウ幅が大きい場合のみ、メニュー(props.back) の設定に従う
 * @return {string} 'back' or ''
 */
const centerLeftUI = computed(() => {
	let str = ''
	if (props.back) {
		str = 'back'
	}
	return str
})

/**
 * 中央 - 未美UI の表示
 * @note ウィンドウ幅が大きい場合のみ、マイページ or 閉じる(props.close) の設定に従う
 * @return {string} 'menu' or 'close' or ''
 */
const centerRightUI = computed(() => {
	let str = ''
	if (isRightTeleport.value) {
		str = 'button'
	} else if (props.menu) {
		str = 'menu'
	} else if (props.close) {
		str = 'close'
	}
	return str
})


const backMethod = computed(() => {
	let str = ''
	if (isPureNumber(String(props.back))) {
		if (parseInt(String(props.back)) > 0) {
			str = 'go'
		}
	} else if (String(props.back)) {
		str = 'replace'
	}
	return str
})
const closeMethod = computed(() => {
	let str = ''
	if (isPureNumber(String(props.close))) {
		if (parseInt(String(props.close)) > 0) {
			str = 'go'
		}
	} else if (String(props.close)) {
		str = 'replace'
	}
	return str
})

// Methods --------------------------------------------------------
const handleBack = () => {
	if (useRouteTracker().isPrevRoute) {
		switch (backMethod.value) {
			case 'go':
				go(-1 * parseInt(String(props.back)))
				break
			case 'replace':
				replace(String(props.back))
				break
		}
	} else {
		replace(DASHBOARD.value)
	}
}
const handleClose = () => {
	switch (closeMethod.value) {
		case 'go':
			go(-1 * parseInt(String(props.close)))
			break
		case 'replace':
			replace(String(props.close))
			break
	}
}
const handleMenu = () => {
	if (typeof props.menu === 'function') {
		props.menu()
	} else {
		useDrawer().open({ name: 'myMenu', from: 'right' })
	}
}
</script>

<style lang="scss">
$cn: '.wideHeader'; // コンポーネントセレクタ名

$transition-base: var.$transition-base;
$min-scale: 0.92;
$center-side-btn-size: 64;

@include mix.component-styles($cn) using ($mode) {
	@if $mode =='base' {
		min-height: func.get-size(var.$header-height-l);
		height: func.get-size(var.$header-height-l);
		transition: var.$transition-base;
		backdrop-filter: var.$backdrop-filter;
		background-color: var.$light-90;

		&-inner {
			height: 100%;

			&-centerLeftUI {
				position: absolute;
				top: 0;
				bottom: 0;
				left: func.get-size(-22);
				z-index: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				width: func.get-size($center-side-btn-size);
				height: func.get-size($center-side-btn-size);
				margin: auto;
				transform: translateX(func.get-size(0));
			}

			&-centerLeftInfo {
				margin-left: func.get-size(32);
			}

			&-globalMenu {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				z-index: 0;
				width: 100%;
				height: 100%;
				margin: auto;
			}

			&-title {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				z-index: 0;
				margin: auto;
			}

			&-centerRightUI {
				position: absolute;
				top: 0;
				bottom: 0;
				right: func.get-size(-20);
				z-index: 1;
				width: func.get-size($center-side-btn-size);
				height: func.get-size($center-side-btn-size);
				margin: auto;
				transform: translateX(func.get-size(0));
			}
		}

		&-centerRight {
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			height: func.get-size($center-side-btn-size);
			margin: auto;
			transform: translateX(func.get-size(0));
		}
	}

	@if $mode =='darkmode' {
		background-color: var.$dark-black-90;
	}
}
</style>
