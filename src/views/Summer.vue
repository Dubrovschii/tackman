<script setup>
import Header from "@/components/Header/Header.vue";
import Slider from "@/components/Slider/Slider.vue";
import Footer from "@/components/Footer/Footer.vue";
import { useApiStore } from "@/stores/ApiStore";
import Skipas from "@/components/Skipas/Skipas.vue";
const apiStore = useApiStore();
const slides = [
  {
    src: "src/assets/image/summer01/summer-01.webp",
  },
  {
    src: "src/assets/image/summer01/summer-02.webp",
  },
  {
    src: "src/assets/image/summer01/summer-03.webp",
  },
  {
    src: "src/assets/image/summer01/summer-04.webp",
  },
  {
    src: "src/assets/image/summer01/summer-05.webp",
  },
];
const slides2 = [
  {
    src: "src/assets/image/summer02/summer02-01.webp",
  },
  {
    src: "src/assets/image/summer02/summer02-02.webp",
  },
  {
    src: "src/assets/image/summer02/summer02-03.webp",
  },
  {
    src: "src/assets/image/summer02/summer02-04.webp",
  },
];
</script>
<template>
  <Header />
  <section class="summer">
    <Slider
      :slides="slides"
      :options="swiperOptions"
      :slides-per-view="1"
      :space-between="0"
    />
    <div class="container__big">
      <div class="content summer__content">
        <h1 class="title summer__title">Лето на «Такмане»</h1>
        <div class="descr summer__descr">
          <span
            >Яркое солнце и свежий воздух! Не упустите возможность провести
            выходные в активном и увлекательном формате!</span
          >
        </div>
      </div>
    </div>
  </section>
  <section class="summer-slider">
    <Slider
      :slides="slides2"
      :options="swiperOptions"
      :slides-per-view="1"
      :space-between="0"
    />
    <div class="container__big">
      <div class="content summer-slider__content">
        <h1 class="title summer-slider__title">Sup-cплавы»</h1>
        <div class="descr summer-slider__descr">
          <span>Сплавы на sup-бордах по 2 рекам</span>
        </div>
      </div>
    </div>
  </section>
  <Skipas />
  <Footer />
</template>
<style lang="scss">
.summer {
  background-size: cover;
  background-position: 100%;
  min-height: 100vh;
  .swiper {
    height: 100vh;
  }
  &__content {
    top: 80%;
  }
}
.summer-slider {
  background: var(--color-third);
  background-size: cover;
  background-position: 100%;
  min-height: 100vh;
  &__content {
    top: 80%;
  }
  .swiper {
    height: 100vh;
  }
}
.mySwiper__slide img {
  padding-bottom: 0 !important;
}
.pa-4 {
  display: none;
}
@media (max-width: 600px) {
  .summer,
  .summer-slider {
    max-height: 400px;
    min-height: 400px;
    height: 100%;
  }
  .summer-slider .swiper,
  .summer .swiper {
    height: 400px;
  }
  .summer .mySwiper__slide img[data-v-12cdb6ac] {
    object-fit: cover;
  }
}
</style>
