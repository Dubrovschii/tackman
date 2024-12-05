<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";

import arrowPrev from "../../assets/icons/arrowPrev.svg";
import arrowNext from "../../assets/icons/arrowNext.svg";

import "swiper/css/navigation";

const modules = [Navigation];

const swiperOptions = {
  navigation: true,
  // Другие параметры Swiper
};
const props = defineProps({
  slides: {
    type: Array,
  },
});
</script>

<template>
  <swiper
    :modules="modules"
    :options="swiperOptions"
    class="mySwiper"
    :navigation="{
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    }"
  >
    <SwiperSlide v-for="slide in slides" class="mySwiper__slide">
      <img :src="slide.src" alt="" />
      <div class="slide__text">
        <h3>{{ slide.title }}</h3>
        <p>{{ slide.text }}</p>
      </div>
    </SwiperSlide>
    <div class="custom-next"><img :src="arrowNext" alt="" /></div>
    <div class="custom-prev"><img :src="arrowPrev" alt="" /></div>
  </swiper>
</template>

<style scoped lang="scss">
.mySwiper {
  &__slide {
    display: flex;
    flex-flow: column;
    box-sizing: content-box;
    align-items: center;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      padding-bottom: 40px;
    }
    .slide__text {
      position: absolute;
      top: 80px;
      left: 50px;
    }
    h3 {
      text-align: left;
      max-width: 580px;
      width: 100%;
    }
    p {
      color: var(--color-main);
      max-width: 470px;
      width: 100%;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 25.2px */
      letter-spacing: 0.9px;
      text-transform: uppercase;
      text-align: left;
      margin-top: 20px;
    }
  }
}
.custom-next,
.custom-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 18px;
  z-index: 100;
  font-weight: bold;
}

.custom-next {
  right: 0;
}

.custom-prev {
  left: 0;
}
</style>
