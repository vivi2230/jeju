<script setup>
import { computed } from 'vue'
import { inject } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const lang = inject('lang')

const details = {
  day1: {
    dayLabel: 'Day 1',
    dateLabel: '5/15(금)',
    items: [
      { schedule: '12:30 Yee&Vivi 飛機起飛', note: '自助辦理登機哦' },
      { schedule: '13:35 抵達濟州機場', note: ''},
      { schedule: '15:55 其他人飛機起飛', note: ''},
      { schedule: '17:10 抵達濟州機場', note: '' },
      { schedule: '17:40 搭接駁車去樂天租車', note: '集合!!', mapUrl: 'https://map.naver.com/p/entry/place/11704744?placePath=%2Fhome' },
      { schedule: '18:00 귤귤스토어 選品店', note: '開車8分鐘', mapUrl: 'https://naver.me/xOxH7fNW' },
      { schedule: '19:00 晚餐 熟成到烤肉숙성도', note: '開車14分鐘', mapUrl: 'https://naver.me/53lKwzKI' },
      { schedule: '20:30 飯店 팜파스 호텔 PAMPAS HOTEL', note: '大家早點睡', mapUrl: 'https://naver.me/F0z6kCqQ' },
    ],
    attractions: [
      {
        name: '귤귤스토어',
        intro: '濟州熱門選品小店，可買手作小物與特色文創。 ',
        image:
          '../src/assets/gu.jpg',
      },
  
    ],
  },
  day2: {
    dayLabel: 'Day 2',
    dateLabel: '5/16(토)',
    items: [
      { schedule: '10:00 飯店出發', note: ''},
      {
        schedule: '11:00 實彈射擊體驗 대유ATV수렵사격랜드',
        note: '可先買, 要帶護照, 開車40分鐘',
        mapUrl: 'https://naver.me/xyTGzI5N',
        links: [
          {
            text: 'trip.com',
            url: 'https://tw.trip.com/travel-guide/attraction/seogwipo/daeyoo-land-35822292?poiType=66&curr=TWD&locale=zh-TW&scene=basic',
          },
          {
            text: 'kkday',
            url: 'https://www.kkday.com/zh-tw/product/22165-jeju-island-daeyoo-atv-hunting-and-shooting-land-south-korea?cid=4904&ud1=detail-share&ud2=mobile-web',
          },
        ],
      },
      { schedule: '12:00 午餐 烏龍麵 중문우동한그릇', note: '開車8分鐘', mapUrl: 'https://naver.me/xNLZUrDg' },
      { schedule: '14:00 綠茶博物館 오설록 티 뮤지엄', note: '開車15分鐘', mapUrl: 'https://naver.me/5uIYATBA' },
      { schedule: '16:00 橘花閣樓咖啡 카페 귤꽃다락', note: '開車31分鐘 18:00最後訂單 18:40關門', mapUrl: 'https://naver.me/5Q37nTIS' },
      { schedule: '18:00 晚餐 白帶魚 올레왕갈치', note: '開車10分鐘', mapUrl: 'https://naver.me/Fr7pDD9P' },
      { schedule: '20:00 西歸浦每日偶來市場市場逛逛', note: '我想吃橘子大福🍊', mapUrl: 'https://naver.me/GvfdJwlK' },
    ],
    attractions: [
      {
        name: '西歸浦每日偶來市場 서귀포매일올레시장',
        intro: '西歸浦每日偶來市場是韓國濟州島南部西歸浦市規模最大的傳統市場，始於1960年代初期。它結合在地生活與旅遊體驗，成為遊客探索濟州庶民文化與品嚐當地美食的重要據點。 攤位販售農水畜產品、乾貨與日用品，也匯集各式小吃，如辣炒年糕、黑豬肉可樂餅、魚板湯、龍蝦起司燒等。濟州特產如漢拏峰柑橘、牛島花生與橘子巧克力是人氣伴手禮。市場中央設有座位區與小水道，方便遊客即買即食並休憩。',
        image:
          '../src/assets/market2.png',
      },
      {
        name: 'Osulloc 綠茶博物館 오설록 티 뮤지엄',
        intro: '位於韓國濟州島西歸浦市的 Osulloc Tea Museum 是韓國首座以茶文化為主題的博物館。結合傳統與現代美學，展示韓國茶的歷史、製作工藝與文化意涵，並與周圍廣闊的有機茶園融為一體，成為濟州最受歡迎的文化景點之一。館內設有茶文化展廳、茶具藝廊與互動媒體展，呈現韓國茶從古至今的演變。遊客可於館內咖啡館品嘗飲品與甜點，如綠茶冰淇淋、橘子茶與抹茶蛋糕。旁邊的茶園步道可供拍照、散步並體驗採茶活動。',
        image:
          '../src/assets/museum.jpg',
      },
    ],
  },
  day3: {
    dayLabel: 'Day 3',
    dateLabel: '5/17(일)',
    items: [
      { schedule: '08:00 早餐 解酒湯 우진해장국', note: '', mapUrl: 'https://map.naver.com/p/entry/place/13418405?placePath=%2Fhome' },
      { schedule: '09:00 送Claire到機場', note: '10:50飛機', mapUrl: 'https://naver.me/5TiWH09m' },
      { schedule: '09:00 出發성산항', note: '開車1小時', mapUrl: 'https://naver.me/FlZkAFCt' },
      { schedule: '10:30 搭船前往牛島 到達下牛木洞港하우목동항', note: '時間15分鐘 來回$11,000/人 ', mapUrl: '' },
      { schedule: '11:00 午餐 海女之家 우도물들이 해녀의집', note: '騎腳踏車環島一圈', mapUrl: 'https://naver.me/5fIp4N4B' },
      { schedule: '12:00 花生冰淇淋 우도샌드', note: '', mapUrl: 'https://naver.me/5oE5iYyo' },
      { schedule: '13:00 咖啡廳 블랑로쉐', note: '備案咖啡廳 하고야카페', mapUrl: 'https://naver.me/GFB1lGsK' },
      { schedule: '15:00 黑沙灘 김멀레해수욕장', note: '', mapUrl: 'https://naver.me/5UEcWoAp' },
      { schedule: '16:00 海水浴場 산호해수욕장', note: '', mapUrl: 'https://naver.me/F9N4pDyj' },
      { schedule: '17:00 港口搭船', note: '', mapUrl: 'https://naver.me/FpxldAxy' },
      { schedule: '18:00 東門市場', note: '買伴手禮', mapUrl: 'https://naver.me/GG7tKGwS' },
      { schedule: '19:00 우무布丁 東門市場店', note: '', mapUrl: 'https://naver.me/5iTd9wys' },
      { schedule: '19:30 宵夜 BHC炸雞', note: '제주탑동점', mapUrl: 'https://naver.me/GOP1oC3f' },
    ],
    attractions: [
      {
        name: '牛島',
        intro: '牛島是位於韓國濟州島東北方、城山日出峰對外海約3.8公里處的一座小島。島名因其外形似臥牛而得名，以潔白沙灘、碧藍海水與獨特火山地貌聞名，是濟州特別自治道最受歡迎的離島旅遊地之一。搭乘渡輪約15分鐘即可抵達。 活動:多選擇租電動單車或電動三輪車遊覽全島。牛島燈塔、下古水洞與黑沙子海水浴場等地。美食：鮑魚粥、黑豬肉、漢拿山炒飯、花生製成的冰淇淋、牛島餅乾。',
        image:
          '../src/assets/udo.jpg',
      },
      {
        name: '東門市場',
        intro: '東門市場是濟州島歷史最悠久、規模最大的傳統市場之一。它不僅是當地居民採買生鮮與民生用品的核心地點，也是遊客體驗濟州飲食文化與夜市風情的熱門景點。 必吃：晚上8號門夜市區必排黑豬肉五花肉卷、烤鮑魚、辣炒年糕等海鮮小吃。白天則推薦SOLBRE鹽麵包冰淇淋、Abebe Bakery奶油麵包、傳統糖餅，以及現切的新鮮白帶魚生魚片，並可採買橘子相關伴手禮。',
        image:
          '../src/assets/market.png',
      },
    ],
  },
  day4: {
    dayLabel: 'Day 4',
    dateLabel: '5/18(월)',
    items: [
      { schedule: '09:00 送Airi&Koharu 去機場', note: '10:50飛機' },
      { schedule: '10:00 早餐 大蒜麵包 오드랑베이커리 倫敦貝果', note: '開車38分鐘', mapUrl: 'https://naver.me/FIfsKrin' },
      { schedule: '10:40 海邊散步 신흥해수욕장', note: '開車8分鐘', mapUrl: 'https://naver.me/F9N4lniC' },
      { schedule: '12:00 午餐 生魚片 회심', note: '開車30分鐘', mapUrl: 'https://naver.me/5JpUAAr8' },
      {
        schedule: '13:30 史努比樂園 스누피가든',
        note: '可先買(比較便宜), 開車30分鐘',
        mapUrl: 'https://naver.me/GgWkCg0m',
        links: [
          {
            text: 'trip.com',
            url: 'https://tw.trip.com/travel-guide/attraction/jeju-city/snoopy-garden-134029217/?locale=zh-TW&curr=TWD',
          },
        ],
      },
      { schedule: '15:00 姊妹湯麵 자매국수', note: '開車50分鐘', mapUrl: 'https://naver.me/G9r5jq2E' },
      { schedule: '16:00 還車', note: '', mapUrl: 'https://map.naver.com/p/entry/place/11704744?placePath=%2Fhome' },
      { schedule: '16:30 去機場', note: '17:50飛機' },
      { schedule: '18:55 抵達大邱 回宿舍!', note: '' },
    ],
    attractions: [
      {
        name: '史努比樂園 스누피가든',
        intro: '位於韓國濟州島,是一座以《花生漫畫》角色為主題的自然體驗型公園。園區結合濟州的自然風光與史努比及其朋友的溫馨世界觀，成為島上熱門的家庭與文化觀光景點。Garden House 共設五個展廳，主題分別為「關係」、「日常」、「幸福」、「夢想」與「休憩」。館內設有早午餐、甜點及商店。戶外共有 11 個主題區，重現經典漫畫場景。園區四季植栽更隨氣候變化呈現不同景致。',
        image:
          '../src/assets/snoopy.jpg',
      },
      {
        name: '新興海水浴場',
        intro: '海岸線平緩、景色安靜，適合旅程最後一天放鬆。',
        image:
          '../src/assets/bada.png',
      },
    ],
  },
}

const dayData = computed(() => details[route.params.day] ?? details.day1)
</script>

<template>
  <section class="page-card">
    <RouterLink to="/itinerary" class="back-link">← {{ lang === 'ja' ? '戻る' : '' }}</RouterLink>
    <h2 class="page-title">
      {{ dayData.dayLabel }}
      <span class="date-text">{{ dayData.dateLabel }}</span>
      {{ lang === 'ja' ? ' 詳細タイムテーブル' : ' 詳細時間表' }}
    </h2>

    <ul class="trip-list timeline-list">
      <li v-for="item in dayData.items" :key="item.schedule">
        <div class="timeline-grid">
          <a
            v-if="item.mapUrl"
            class="schedule-link schedule-title"
            :href="item.mapUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ item.schedule }}
          </a>
          <span v-else class="schedule-text schedule-title">{{ item.schedule }}</span>
          <span class="timeline-note">
            <template v-if="item.links">
              <a
                v-for="(link, index) in item.links"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.text }}<span v-if="index < item.links.length - 1"> / </span>
              </a>
              <span v-if="item.note"> | </span>
            </template>
            <span v-if="item.note"> {{ item.note }}</span>
          </span>
        </div>
      </li>
    </ul>

    <section class="attraction-section">
      <h3 class="section-title">{{ lang === 'ja' ? 'スポット紹介' : '景點介紹' }}</h3>
      <div class="attraction-grid">
        <article
          v-for="spot in dayData.attractions"
          :key="spot.name"
          class="attraction-card"
        >
          <img :src="spot.image" :alt="spot.name" class="attraction-image" />
          <div class="attraction-content">
            <h4>{{ spot.name }}</h4>
            <p>{{ spot.intro }}</p>
          </div>
        </article>
      </div>
    </section>
  </section>
</template>
