<template>
	<Sheet class="sheetLoginRequired" close title="ログイン" @close="close">
		<SheetContainer>
			<Column justify="center" align="end" gap="16">
				<Icon name="avatar" size="40" />
				<Typography title2 extrabold center>
					HONOOアカウントをお持ちですか？
				</Typography>
				<Box mt="-4" mb="8">
					<Typography caption1 bold center>
						本サービスをご利用いただくにはHONOOのアカウントが必要です
					</Typography>
				</Box>
				<Column justify="stretch" gap="24">
					<Button w="100%" :to="singup(redirectPath)">
						アカウントの新規作成
					</Button>
					<Row justify="center" gap="2">
						<Typography caption1 bold>
							アカウントをお持ちの方は
						</Typography>
						<Box mt="1">
							<Button info no-padding :to="login(redirectPath)">
								ここからログイン
							</Button>
						</Box>
					</Row>
					<Box mt="4">
						<Line />
					</Box>
					<Box mt="4" mb="-12">
						<Row justify="center" gap="2">
							<Button minimal no-padding :to="HONOO">
								<Typography caption1 bold baseline-height>
									HONOOについて詳しく知る
								</Typography>
								<Icon name="arrowRight" size="12" />
							</Button>
						</Row>
					</Box>
				</Column>
			</Column>
		</SheetContainer>
	</Sheet>
</template>

<script setup lang="ts">


// Stores & Composables ---------------------------
const { close } = useSheet()
const { HONOO, login, singup } = useConstantsUrl()

// Computed ---------------------------
const redirectPath = computed(() => {
	return `${useRuntimeConfig().public.BASE_URL}${useRoute().fullPath}`
})
</script>

<style lang="scss">
$cn: '.sheetLoginRequired'; // コンポーネントセレクタ名

@include mix.component-styles($cn) using ($mode) {
	@if $mode =='base' {}

	@if $mode =='darkmode' {}

	@if $mode =='auto' {}
}
</style>
