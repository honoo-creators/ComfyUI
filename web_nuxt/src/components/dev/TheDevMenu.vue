<template>
	<Row class="theDevMenu" justify="center" align="center">
		<Row
			class="theDevMenu-title"
			gap="8"
			justify="center"
			align="center"
			@click="isMenuShow = !isMenuShow"
		>
			<Typography body bold>
				{{ pageName }}
				<Icon name="arrowDown" size="10" />
			</Typography>
		</Row>
		<!-- <IconButton class="theDevMenu-close" link xsmall icon="cross" @click="emit(EMIT_CLOSE)" /> -->
		<TransitionFade>
			<Backdrop
				v-show="isMenuShow"
				class="theDevMenu-overlay"
				soft
				@click="isMenuShow = false"
			/>
		</TransitionFade>
		<TransitionPopover y="-20">
			<!-- <Scroll v-show="isMenuShow" class="theDevMenu-menus"> -->
			<div v-show="isMenuShow" class="theDevMenu-menus">
				<Column class="theDevMenu-menus-inner">
					<div class="theDevMenu-menus-inner-list">
						<TheDevMenuItem
							v-for="(item, index) in menus"
							:key="`global-${index}`"
							class="theDevMenu-menus-inner-list-item"
							v-bind="item"
						/>
					</div>
					<Column class="theDevMenu-menus-inner-mode" gap="8">
						<Row justify="between" align="center" nowrap>
							<Typography body bold> Darkmode </Typography>
							<div>
								<Switch v-model="isDarkmode" name="devDarkmode" />
							</div>
						</Row>
						<Row justify="between" align="center" nowrap>
							<Typography body bold> SizeType Auto </Typography>
							<div>
								<Switch v-model="isSizeAuto" name="devSizetype" />
							</div>
						</Row>
					</Column>
				</Column>
			</div>
			<!-- </Scroll> -->
		</TransitionPopover>
	</Row>
</template>

<script setup lang="ts">
import TheDevMenuItem from "./TheDevMenuItem.vue";
import type { MenuParent, MenuChild } from "./interfaces";

const route = useRoute();

// Emits ---------------------
const EMIT_DARKMODE = "darkmode";
const EMIT_SIZE_AUTO = "sizeAuto";
const emit = defineEmits<{
	close: [];
	darkmode: [boolean];
	sizeAuto: [boolean];
}>();

// Data ----------------------
const isMenuShow = ref(false);
const isDarkmode = ref(false);
const isSizeAuto = ref(false);
const pageName = ref("");
const routes = useRouter().getRoutes();
// const menus = ref<MenuParent[]>([])

const menus = ref<MenuParent[]>([]);

// Methods ------------------
const generateMenus = () => {
	const devRoutes = routes;
	const menuTree: MenuParent = { name: "Dev", children: [], open: false };

	devRoutes.forEach((route) => {
		const parts = route.path.split("/").slice(1); // '/dev' を除外しない
		let currentLevel = menuTree;

		parts.forEach((part, index) => {
			if (index === parts.length - 1) {
				// 最後の部分はページ名
				currentLevel.children.push({
					name: part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, " "),
					page: route.name as string,
				});
			} else {
				// 中間の部分はサブカテゴリー
				let subCategory = currentLevel.children.find(
					(child) => "children" in child && child.name.toLowerCase() === part
				) as MenuParent | undefined;

				if (!subCategory) {
					subCategory = {
						name: part.charAt(0).toUpperCase() + part.slice(1),
						children: [],
						open: false,
					};
					currentLevel.children.push(subCategory);
				}

				currentLevel = subCategory;
			}
		});
	});

	menus.value = menuTree.children.filter((child): child is MenuParent => {
		// 'page' プロパティが存在しないことを確認するために型ガードを追加
		return (
			"children" in child && "open" in child && !(("page" in child) as any)
		);
	});
};

// Watch --------------------
watchEffect(() => {
	const name = route.name;
	for (const menu of menus.value) {
		for (const child of menu.children) {
			if (child.page === name) {
				menu.open = true;
				pageName.value = child.name;
			}
		}
	}
});
// ページ遷移したらメニューを閉じる
watch(
	() => route.path,
	(newVal: string) => {
		isMenuShow.value = false;
	},
	{ immediate: true }
);
// ダークモードスイッチ監視
watch(
	() => isDarkmode.value,
	(newVal: boolean) => {
		useMode().setDarkmode(newVal);
		emit(EMIT_DARKMODE, newVal);
	}
);
// サイズタイプスイッチ監視
watch(
	() => isSizeAuto.value,
	(newVal: boolean) => {
		newVal ? useMode().setSizeType("auto") : useMode().setSizeType("px");
		emit(EMIT_SIZE_AUTO, newVal);
	}
);

// Lifecycle Hooks ------
onMounted(() => {
	// updateDarkMode()
	generateMenus();
});
// onUpdated(updateDarkMode)
</script>

<style lang="scss">
$cn: ".theDevMenu"; // コンポーネントクラス名

$height: 56;

$padding-left: 16;
$padding-right: 16;

$menu-top-space: 12;
$menu-bottom-space: 12;
$menu-max-width: 480;

$menu-padding-top: 6;
$menu-padding-bottom: 6;
$menu-padding-h: $padding-left;

@include mix.component-styles($cn) using ($mode) {
	@if $mode == "base" {
		position: relative;
		z-index: 0;
		width: 100%;
		min-height: func.get-size($height);
		height: func.get-size($height);
		padding-left: func.get-size($padding-left);
		padding-right: func.get-size($padding-right);
		background-color: var.$light;
		border-bottom: 0.5px solid var.$dark-20;
		overflow: visible;

		&-title {
			cursor: pointer;

			&:hover {
				opacity: 0.6;
			}
		}

		&-close {
			position: absolute;
			top: 0;
			right: func.get-size($padding-right);
			bottom: 0;
			margin: auto;
			z-index: 1;
		}

		&-overlay {
			position: absolute;
			z-index: 1;
			top: 0;
			left: 0;
			right: 0;
			height: 100vh;
		}

		&-menus {
			position: absolute;
			z-index: 10;
			top: func.get-size($height + $menu-top-space);
			left: func.get-size($menu-padding-h);
			right: func.get-size($menu-padding-h);
			max-width: func.get-size($menu-max-width);
			width: calc(100vw - #{func.get-size($menu-padding-h * 2)});
			height: calc(
				100vh - #{func.get-size($height + $menu-top-space + $menu-bottom-space)}
			);
			padding-top: func.get-size($menu-padding-top);
			padding-bottom: func.get-size($menu-padding-bottom);
			margin: auto;
			background-color: var.$light;

			&-inner {
				min-height: 100%;

				&-list {
					flex-grow: 1;
					width: 100%;

					&-item {
						width: 100%;
					}
				}

				&-mode {
					position: sticky;
					bottom: func.get-size(-$menu-padding-bottom);
					width: 100%;
					background-color: var.$light;
					padding-top: func.get-size(12);
					padding-bottom: func.get-size(12);
					padding-left: func.get-size(16);
					padding-right: func.get-size(16);
					border-top: solid var.$dark-20 0.5px;
				}
			}
		}
	}

	@if $mode == "darkmode" {
		background-color: var.$dark-black;
		border-bottom-color: var.$light-20;

		&-menus {
			background-color: var.$dark;

			&-inner {
				&-mode {
					background-color: var.$dark;
					border-top-color: var.$light-20;
				}
			}
		}
	}

	@if $mode == "auto" {
		min-height: func.get-size($height, false);
		height: func.get-size($height, false);
		padding-left: func.get-size($padding-left, false);
		padding-right: func.get-size($padding-right, false);

		&-close {
			right: func.get-size($padding-right, false);
		}

		&-menus {
			top: func.get-size($height + $menu-top-space, false);
			left: func.get-size($menu-padding-h, false);
			right: func.get-size($menu-padding-h, false);
			max-width: func.get-size($menu-max-width);
			width: calc(100vw - #{func.get-size($menu-padding-h * 2, false)});
			height: calc(
				100vh -
					#{func.get-size(
						$height + $menu-top-space + $menu-bottom-space,
						false
					)}
			);
			padding-top: func.get-size($menu-padding-top, false);
			padding-bottom: func.get-size($menu-padding-bottom, false);

			&-inner {
				&-mode {
					bottom: func.get-size(-$menu-padding-bottom, false);
					padding-top: func.get-size(12, false);
					padding-bottom: func.get-size(12, false);
					padding-left: func.get-size(16, false);
					padding-right: func.get-size(16, false);
				}
			}
		}
	}
}
</style>
