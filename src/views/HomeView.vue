<template>
  <section class="page-card">
    <h2 class="page-title">{{ lang === 'ja' ? '済州旅行' : '濟洲旅行' }}</h2>
    <p class="page-subtitle">2026/05/20 - 2026/05/23</p>

    <h3 class="section-title">{{ lang === 'ja' ? '旅程スタート' : '開始行程' }}</h3>
    <ul class="trip-list">
      <li>
        <strong>Day 1</strong>
        <span>抵達濟州、龍頭岩、東門市場晚餐</span>
      </li>
      <li>
        <strong>Day 2</strong>
        <span>城山日出峰、涉地可支、海邊咖啡廳</span>
      </li>
      <li>
        <strong>Day 3</strong>
        <span>漢拏山輕健行、黑豬肉晚餐</span>
      </li>
      <li>
        <strong>Day 4</strong>
        <span>涯月海岸散步、伴手禮採買、返程</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { inject } from 'vue'

const lang = inject('lang')
</script>
