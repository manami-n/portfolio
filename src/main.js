import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createI18n } from "vue-i18n";
import en from "./i18n/en.json";
import { useRouter } from 'vue-router';
//import ja from "./i18n/ja.json";

// Detect language
//const userLang = navigator.language.startsWith("ja") ? "ja" : "en";
const userLang = "en"; //temporary everyone sees in English


export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: userLang,
  fallbackLocale: "en",
  messages: {
    en//, ja
  },
  warnHtmlMessage: false // to hide v-html known warning
});

createApp(App).use(i18n).use(router).mount('#app')
