// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-icons"],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "UTF-8",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/apple.svg",
        },
      ],
      title: "Apple iPhone",
    },
  },

  image: {
    format: ["webp"],
  },

  css: ["~/assets/scss/index.scss"],

  tailwindcss: {
    cssPath: "~/assets/scss/index.scss",
    configPath: "tailwind.config",
    exposeConfig: false,
    viewer: false,
  },

  build: {
    transpile: ["gsap"],
  },

  compatibilityDate: "2024-08-09",
});
