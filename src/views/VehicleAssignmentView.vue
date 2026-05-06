<template>
  <section class="page-card">
    <h2 class="page-title">{{ lang === 'ja' ? '車両分配' : '車輛分配' }}</h2>
    <div class="vehicle-layout">
      <section class="hotel-panel">
        <a href="https://naver.me/5oE5y0S5" target="_blank">
          <p class="hotel-name">롯데렌트카 樂天租車</p>
          <img
            class="vehicle-map"
            src="../assets/rentcar.png"
            alt="租車地圖位置"
          />
        </a>
      </section>
      <section class="assignment-panel">
        <ul class="trip-list car-list">
          <li>
            <strong>🚗 1 號</strong>
            <P>駕駛：<span>Cindy</span>｜副駕：<span>Clair</span></p>

            <p>後座：<span>Airi、Koharu</span></p>
          </li>
          <li>
            <strong>🚗 2 號</strong>
            <P>駕駛：<span>尚白</span>｜副駕：<span>Vivi</span></p>

            <p>後座：<span>小美、Yee</span></p>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue'

const lang = inject('lang')
</script>
