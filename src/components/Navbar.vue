<template>
  <nav class="navbar">
    <div class="nav-controls">
      <button class="menu-button" type="button" @click.stop="isOpen = !isOpen">☰</button>
      <button class="lang-button" type="button" @click="$emit('toggle-lang')">
        {{ lang === 'ja' ? '中文' : '日本語' }}
      </button>
    </div>
    <div v-if="isOpen" class="menu-panel">
      <RouterLink to="/itinerary" class="nav-link" @click="isOpen = false">{{ lang === 'ja' ? '旅程' : '行程' }}</RouterLink>
      <RouterLink to="/vehicles" class="nav-link" @click="isOpen = false">{{ lang === 'ja' ? '車両分配' : '車輛分配' }}</RouterLink>
      <RouterLink to="/rooms" class="nav-link" @click="isOpen = false">{{ lang === 'ja' ? '部屋割り' : '房間分配' }}</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps({
  lang: {
    type: String,
    default: 'zh',
  },
})

defineEmits(['toggle-lang'])

const isOpen = ref(false)

const handleOutsideClick = (event) => {
  if (!event.target.closest('.navbar')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
})
</script>
