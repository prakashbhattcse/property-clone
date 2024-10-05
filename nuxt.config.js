export default {
  // Global page headers
  head: {
    title: "property-clone",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS
  css: [],

  // Plugins to run before rendering page
  plugins: [],

  // Auto import components
  components: true,

  // Modules for dev and build (recommended)
  buildModules: [],

  // Nuxt.js modules
  modules: [
    // Axios module for HTTP requests
    "@nuxtjs/axios",
  ],

  // Axios module configuration
  axios: {
    baseURL: process.env.API_BASE_URL || "http://localhost:3000/",
    credentials: true, // Allows passing cookies with requests, if needed
  },

  // Build configuration
  build: {},

  // Environment variables
  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.API_BASE_URL || "http://localhost:3000/",
    },
  },
};
