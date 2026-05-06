<template>
  <div class="app-shell">
    <img
      class="top-banner-image"
      src="./assets/jeju.jpg"
      alt="濟州島"
    />

    <header class="app-header">
      <Navbar :lang="lang" @toggle-lang="toggleLang" />
      <h3>{{ lang === 'ja' ? '済州旅行' : '濟州旅行' }}</h3>
      <p>2026.05.15~05.18</p>
    </header>

    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

const lang = ref('zh')

const toggleLang = () => {
  lang.value = lang.value === 'zh' ? 'ja' : 'zh'
}

provide('lang', lang)
</script>
