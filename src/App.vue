<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useI18n } from 'vue-i18n'


const { locale } = useI18n()

function setLanguage(lang) {
  locale.value = lang
}
</script>

<template>
  <Header />
  <router-view/>
  <Footer />
</template>
