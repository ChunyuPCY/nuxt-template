// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    apiSecret: '123'
  },
  typescript: {
    strict: true
  },
  vite: {
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    }
  },
  vue: {
    propsDestructure: true
  },
  modules: [
    '@vue-macros/nuxt',
    '@vueuse/nuxt',
    '@tresjs/nuxt',
    'nuxt-radash',
    '@unocss/nuxt',
    '@ant-design-vue/nuxt'
  ],
  macros: {
    'defineOptions': true,
    'defineSlots': true
  },
  css: ['~/assets/css/main.css']
})
