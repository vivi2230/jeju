<template>
  <section class="page-card">
    <h2 class="page-title">{{ lang === 'ja' ? '部屋割り' : '房間分配' }}</h2>
    <div class="room-layout">
      <section class="hotel-panel">
        <a href="https://naver.me/GxkeMr68" target="_blank">
          <p class="hotel-name">팜파스 호텔 PAMPAS HOTEL</p>
          <img
          class="hotel-map"
          src="../assets/pampas.png"
          alt="飯店地圖位置"
        />
        </a>
       
      </section>

      <section class="assignment-panel">
        <h3 class="section-title">{{ lang === 'ja' ? '部屋リスト' : '房間分配' }}</h3>
        <ul class="trip-list">
          <li>
            <strong>🛖房間 1 號</strong>
            <span>Cindy、尚白、小美</span>
          </li>
          <li>
            <strong>🛖房間 2 號</strong>
            <span>Claire、Vivi、Yee</span>
          </li>
          <li>
            <strong>🛖房間 3 號</strong>
            <span>Airi、Koharu</span>
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
