// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // === DEVTOOLS ===
  devtools: { enabled: true },

  // === MODULES ===

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-icons"],

  // === APP CONFIGURATION ===

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
          href: "/apple.ico",
        },
      ],
      title: "Apple iPhone",
    },
  },

  // === IMAGE CONFIGURATION ===

  image: {
    format: ["webp"],
  },

  // === CSS CONFIGURATION ===

  css: ["~/assets/scss/index.scss"],

  // === TAILWINDCSS CONFIGURATION ===

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
