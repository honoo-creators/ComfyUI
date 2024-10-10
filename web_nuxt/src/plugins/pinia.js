import { createPinia } from 'pinia'
import { defineNuxtPlugin } from '#app'
import { debounce } from 'ts-debounce'
import { PiniaDebounce } from '@pinia/plugin-debounce'

export default defineNuxtPlugin((nuxtApp) => {
	const pinia = createPinia()
	pinia.use(PiniaDebounce(debounce))
	nuxtApp.vueApp.use(pinia)
})
