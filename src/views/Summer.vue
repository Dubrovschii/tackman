<script setup>
import Header from "@/components/Header/Header.vue";
import Slider from "@/components/Slider/Slider.vue";
import Footer from "@/components/Footer/Footer.vue";
import { useApiStore } from "@/stores/ApiStore";
import Skipas from "@/components/Skipas/Skipas.vue";

import img1 from "@/assets/imagesliders/summer01/summer-01.webp";
import img2 from "@/assets/imagesliders/summer01/summer-02.webp";
import img3 from "@/assets/imagesliders/summer01/summer-03.webp";
import img4 from "@/assets/imagesliders/summer01/summer-04.webp";
import img5 from "@/assets/imagesliders/summer01/summer-05.webp";

import img6 from "@/assets/imagesliders/summer02/summer02-01.webp";
import img7 from "@/assets/imagesliders/summer02/summer02-02.webp";
import img8 from "@/assets/imagesliders/summer02/summer02-03.webp";
import img9 from "@/assets/imagesliders/summer02/summer02-04.webp";
const apiStore = useApiStore();

const slides = [
  {
    src: img1,
  },
  {
    src: img2,
  },
  {
    src: img3,
  },
  {
    src: img4,
  },
  {
    src: img5,
  },
];
const slides2 = [
  {
    src: img6,
  },
  {
    src: img7,
  },
  {
    src: img8,
  },
  {
    src: img9,
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
