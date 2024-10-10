<template>
	<div class="theDevMenuItem">
		<Row
			class="theDevMenuItem-header"
			justify="between"
			align="center"
			gap="8"
			@click="toggleOpen"
		>
			<Typography class="theDevMenuItem-header-txt" body bold lineclamp="1">
				{{ name }}
			</Typography>
			<Icon
				v-if="hasChildren"
				class="theDevMenuItem-header-icon"
				:name="isOpen ? 'arrowUp' : 'arrowDown'"
				size="10"
			/>
		</Row>
		<Box :h="childrenHeight">
			<TransitionAcordion>
				<Box
					v-if="hasChildren"
					v-show="isOpen"
					v-resize="(rect: DOMRectReadOnly) => childrenHeight = rect.height"
					class="theDevMenuItem-children"
				>
					<template
						v-for="(child, i) in children"
						:key="`theDevMenuItem-children-item-${i}`"
					>
						<TheDevMenuItem v-if="isMenuParent(child)" v-bind="child" />
						<BasicLink
							v-else
							class="theDevMenuItem-children-item"
							active-class="_current"
							:to="{ name: child.page }"
						>
							<Typography caption1 bold lineclamp="1">
								{{ child.name }}
							</Typography>
						</BasicLink>
					</template>
				</Box>
			</TransitionAcordion>
		</Box>
	</div>
</template>

<script setup lang="ts">
import type { MenuChild, MenuParent } from "./interfaces";

// Props ---------------------------------------------------------
const props = defineProps({
	name: { type: String, default: "" },
	open: { type: Boolean, default: false },
	children: {
		type: Array as PropType<(MenuChild | MenuParent)[]>,
		default: () => [],
	},
});

// Data ----------------------------------------------------------
const isOpen = ref(props.open);
const childrenHeight = ref(0);

const hasChildren = computed(() => props.children.length > 0);

// Methods -------------------------------------------------------
const toggleOpen = () => {
	if (hasChildren.value) {
		isOpen.value = !isOpen.value;
	}
};

const isMenuParent = (item: MenuChild | MenuParent): item is MenuParent => {
	return "children" in item;
};
</script>

<style lang="scss">
$cn: ".theDevMenuItem"; // コンポーネントクラス名

$side-space: 16;
$item-height: 36;

@include mix.component-styles($cn) using ($mode) {
	@if $mode == "base" {
		padding-left: func.get-size($side-space, true);
		padding-right: func.get-size($side-space, true);

		& & {
			margin-left: func.get-size(-$side-space, true);
			margin-right: func.get-size(-$side-space, true);
		}

		&-header {
			height: func.get-size($item-height, true);
			cursor: pointer;
		}

		&-children {
			padding-left: func.get-size($side-space, true);

			&-item {
				display: flex;
				align-items: center;
				height: func.get-size($item-height, true);
				opacity: 0.6;

				&:hover {
					opacity: 1;
				}

				&._current {
					opacity: 1;
				}
			}
		}
	}

	@if $mode == "darkmode" {
	}

	@if $mode == "auto" {
		padding-left: func.get-size($side-space, false);
		padding-right: func.get-size($side-space, false);

		& & {
			margin-left: func.get-size(-$side-space, false);
			margin-right: func.get-size(-$side-space, false);
		}

		&-header {
			height: func.get-size($item-height, false);
		}

		&-children {
			padding-left: func.get-size($side-space, false);

			&-item {
				height: func.get-size($item-height, false);
			}
		}
	}
}
</style>
