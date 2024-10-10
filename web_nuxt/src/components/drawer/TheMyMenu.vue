<template>
	<Drawer name="myMenu" class="theMyMenu">
		<Container v-resize="(rect: DOMRectReadOnly) => headerHeight = rect.height" full>
			<SlotHeader>
				<template #left>
					<IconMenu icon="arrowRight" @click="closeOne('myMenu')" />
				</template>
			</SlotHeader>
		</Container>
		<Scroll :style="{ height: `calc(100vh - ${getSize(headerHeight)})` }">
			<Column gap="36" align="between" fit>
				<Box pl="26" pr="16">
					<Menu v-for="(item, index) in menus" :key="`theMyMenu-menu-creator-${index}`"
						v-bind="{ ...item, disabled: !item.to }" />
					<Menu v-for="(item, index) in accountMenus" :key="`theMyMenu-menu-account-${index}`"
						v-bind="{ ...item, disabled: !item.to }" />
					<Box pt="8">
						<Row :gap="[16, 8]">
							<BasicLink v-for="(item, index) in policies" :key="`theMyMenu-policy-${index}`" class="theMyMenu-policy"
								:to="item.path || item.url" :blank="!!item.url" no-hover-style>
								<Typography caption2 center>
									{{ item.name }}
								</Typography>
							</BasicLink>
						</Row>
					</Box>
				</Box>
				<Box pl="26" pr="16" pb="12">
					<Menu v-for="(item, index) in services" :key="`theMyMenu-menu-service-${index}`"
						v-bind="{ ...item, disabled: !item.to }" />
				</Box>
			</Column>
		</Scroll>
	</Drawer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMeStore } from '~/stores/me'

// Stores ------------------
const { face } = storeToRefs(useMeStore())
const url = useConstantsUrl()

// Composables ------------------
const { closeOne } = useDrawer()
const { getSize } = useCss()

// Data ------------------
const headerHeight = ref(0)


// Consntants -----------------------------------------------------------------------
const menus = computed(() => [
	{ name: 'Honoo マイページ', to: '', face: face.value },
	{ name: 'チケット追加', to: '', icon: 'plus' },
	{ name: '支払いカード', to: '', icon: 'creditCard' },
	{ name: 'エンタープライズコード', to: '', icon: 'code' },
])
const accountMenus = computed(() => [
	{ name: 'ログアウト', to: url.logout(useRuntimeConfig().public.BASE_URL), icon: 'logout' },
])
const policies = computed(() => [
	{ name: 'Honoo', path: url.HONOO, url: '' },
	{ name: 'Terms of use', path: url.HONOO_TERMS_OF_USE, url: '' },
	{ name: 'Privacy policy', path: url.HONOO_PRIVACY_POLICY, url: '' },
	{ name: 'Act on specified commercial transactions', path: url.HONOO_SPECIFIED_COMMERCIAL_TRANSACTIONS, url: '' },
	{ name: 'Company', path: url.HONOO_COMPANY, url: '' },
])
const services = computed(() => [
	{ name: 'HONOO', to: url.HONOO, icon: 'honoo' },
	{ name: 'ANIMEJOB', to: url.ANIME_JOB_URL, icon: 'shakehands' },
	{ name: 'ChangeAnime', to: url.CHANGE_ANIME_URL, icon: 'hash' },
])
</script>

<style lang="scss">
$cn: '.theMyMenu'; // コンポーネントセレクタ名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =='base' {
		&-policy {
			opacity: .6;

			&:hover {
				opacity: 1;
			}
		}
	}

	@if $mode =='darkmode' {}

	@if $mode =='auto' {}
}
</style>