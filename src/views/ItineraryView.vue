<template>
  <section class="page-card">
    <h2 class="page-title">{{ lang === 'ja' ? '毎日の旅程（タップして詳細）' : '每日行程(點進去看更多)' }}</h2>
    <ul class="trip-list itinerary-grid">
      <li>
        <RouterLink to="/itinerary/day1" class="day-link">
          <strong>Day 1 5/15(금)</strong>
          <span>{{ lang === 'ja' ? 'セレクトショップ、熟成焼肉ディナー' : '選品店, 熟成到烤肉晚餐' }}</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/itinerary/day2" class="day-link">
          <strong>Day 2 5/16(토)</strong>
          <span>{{ lang === 'ja' ? '9.81カート、うどん、射撃、緑茶博物館、カフェ、市場' : '9.81滑車, 烏龍麵午餐, 實彈射擊, 綠茶博物館, 橘花閣樓, 白帶魚晚餐, 西歸浦市場' }}</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/itinerary/day3" class="day-link">
          <strong>Day 3 5/17(일)</strong>
          <span>{{ lang === 'ja' ? 'ヘジャンクク、牛島、ピーナッツアイス、東門市場' : '解酒湯早餐, 牛島, 花生冰淇淋, 東門市場, bhc炸雞' }}</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/itinerary/day4" class="day-link">
          <strong>Day 4 5/18(월)</strong>
          <span>{{ lang === 'ja' ? 'ガーリックパン、海辺、刺身、スヌーピーガーデン' : '大蒜麵包, 海邊, 生魚片午餐, 史努比樂園, 姊妹湯麵' }}</span>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { inject } from 'vue'

const lang = inject('lang')
</script>
