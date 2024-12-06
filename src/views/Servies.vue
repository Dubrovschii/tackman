<script setup>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import Slider from "@/components/Slider/Slider.vue";
import { ref, onMounted } from "vue";
import Skipas from "@/components/Skipas/Skipas.vue";
import { useApiStore } from "@/stores/ApiStore";

import img1 from "@/assets/bg/servies/slider-1/servies-01.webp";
import img2 from "@/assets/bg/servies/slider-1/servies-02.webp";
import img3 from "@/assets/bg/servies/slider-1/servies-03.webp";
import img4 from "@/assets/bg/servies/slider-1/servies-04.webp";
import img5 from "@/assets/bg/servies/slider-1/servies-05.webp";
import img6 from "@/assets/bg/servies/slider-1/servies-06.webp";

import img7 from "@/assets/bg/servies/slider-1.5/stolovaia-01.webp";
import img8 from "@/assets/bg/servies/slider-2/for-rent-01.webp";
import img9 from "@/assets/bg/servies/slider-1.5/stolovaia-02.webp";

import img10 from "@/assets/bg/servies/slider-2/for-rent-02.webp";
import img11 from "@/assets/bg/servies/slider-2/for-rent-03.webp";
import img12 from "@/assets/bg/servies/slider-2/for-rent-04.webp";
import img13 from "@/assets/bg/servies/slider-2/for-rent-05.webp";
import img14 from "@/assets/bg/servies/slider-2/for-rent-06.webp";

import img15 from "@/assets/bg/servies/slider-3/snowbing-01.webp";
import img16 from "@/assets/bg/servies/slider-3/snowbing-02.webp";
import img17 from "@/assets/bg/servies/slider-3/snowbing-03.webp";
import img18 from "@/assets/bg/servies/slider-3/snowbing-04.webp";
import img19 from "@/assets/bg/servies/slider-3/snowbing-05.webp";

const apiStore = useApiStore();

const toggleDialog1 = () => {
  apiStore.dialog = true;
};
const toggleDialog = (dialog) => {
  toggleDialog1(dialog);
};
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
  {
    src: img6,
  },
];
const slides2 = [
  {
    src: img7,
    title: "Столовая",
    text: "Большая столовая с невероятными панорамным видом!",
  },
  {
    src: img8,
    title: "Velvet burgers + Red cup",
    text: "Весь спектр услуг от проката инвентаря до катанияна снегоходах!",
  },
  {
    src: img9,
    title: "Velvet coffee",
    text: "Пиццерия и кофейня с панорамным видом прямо на склон!",
  },
];
const slides3 = [
  {
    src: img10,
  },
  {
    src: img11,
  },
  {
    src: img12,
  },
  {
    src: img13,
  },
  {
    src: img14,
  },
];
const slides4 = [
  {
    src: img15,
  },
  {
    src: img16,
  },
  {
    src: img17,
  },
  {
    src: img18,
  },
  {
    src: img19,
  },
];
</script>

<template>
  <Header />
  <section class="servies">
    <video
      src="@/assets/video/video-home.mp4"
      autoplay
      loop
      muted
      class="servies__video"
    ></video>

    <div class="container__big">
      <div class="content servies__content">
        <h2 class="title servies__title">Множество сервисов и услуг!</h2>
        <div class="descr servies__descr">
          <span
            >Не нравятся лыжи или сноуборд? На «Такмане» вы сможете попробовать
            другие виды зимнего отдыха.
          </span>
        </div>
      </div>
    </div>
  </section>
  <section class="coach" id="content">
    <div class="container__big">
      <div class="start coach__start">
        <h2 class="second-title">Инструкторы</h2>
        <div class="second-descr">
          Весь спектр услуг от проката инвентаря до катанияна снегоходах!
        </div>
        <v-btn class="btn" color="#fff">Забронировать</v-btn>
      </div>
      <Slider
        :slides="slides"
        :options="swiperOptions"
        :slides-per-view="2.2"
        :space-between="0"
      />
    </div>
    <div class="bg"></div>
  </section>
  <section class="kitchen">
    <div class="container__big">
      <div class="start">
        <h2 class="second-title">Питание</h2>
      </div>
      <Slider
        :slides="slides2"
        :options="swiperOptions"
        :slides-per-view="1.4"
        :space-between="0"
        :pagination="{ clickable: true }"
      />
    </div>
  </section>
  <section class="rent">
    <div class="container__big">
      <div class="start">
        <h2 class="second-title">Прокат инвентаря</h2>
        <div class="second-descr">
          Крупнейший в Пермском Крае! 800 пар инвентаря!
          <br />
          2 категорий, премиум и комфорт!
        </div>
      </div>
      <Slider
        :slides="slides3"
        :options="swiperOptions"
        :slides-per-view="2.2"
        :space-between="0"
        :pagination="{ clickable: true }"
      />
    </div>
  </section>
  <section class="snowtubing">
    <div class="container__big">
      <div class="start">
        <h2 class="second-title">Сноутюбинг</h2>
        <div class="second-descr">Крупнейший в Пермском Крае!</div>
      </div>
      <Slider
        :slides="slides4"
        :options="swiperOptions"
        :slides-per-view="1.4"
        :space-between="0"
        :pagination="{ clickable: true }"
      />
    </div>
  </section>
  <section class="sky-pass">
    <div class="container__big">
      <div class="start">
        <h2 class="second-title">Ски-пасс на весь сезон</h2>
        <div class="second-descr">
          Если покупать ски-пасс сразу на весь сезон, можно здорово сэкономить!
        </div>
        <v-btn @click="toggleDialog()" variant="flat" class="btn" color="#fff"
          >Купить/Пополнить</v-btn
        >
        <Skipas />
      </div>
    </div>
  </section>
  <section class="snowhod">
    <video
      src="@/assets/video/video-snowhod.mp4"
      autoplay
      loop
      muted
      class="servies__video"
    ></video>
  </section>
  <Footer />
</template>
<style lang="scss">
.servies {
  min-height: 100vh;
  height: 100vh;
  &__video {
    height: 100vh;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    object-fit: cover;
    width: 100%;
  }
  &__content {
    top: 75%;
    z-index: 5;
  }
}
.coach {
  background: var(--color-second);
}
.kitchen {
  background: var(--color-second);
  position: relative;
  .swiper-wrapper {
    max-height: 700px;
    height: 100%;
    .swiper-slide {
      max-height: 700px;
      height: 100%;
      img {
        object-fit: cover;
        max-height: 700px;
      }
    }
    .mySwiper__slide .slide__text {
      bottom: 80px;
      top: auto;
    }
    .mySwiper__slide h3 {
      max-width: 50%;
    }
    .mySwiper__slide p {
      max-width: 50%;
      font-size: 15px;
    }
  }
}
.rent {
  background: var(--color-second);
  position: relative;
  .swiper-wrapper {
    max-height: 700px;
    height: 100%;
    .swiper-slide {
      max-height: 700px;
      height: 100%;
      img {
        object-fit: cover;
        max-height: 700px;
      }
    }
    .mySwiper__slide .slide__text {
      bottom: 80px;
      top: auto;
    }
    .mySwiper__slide h3 {
      max-width: 50%;
    }
    .mySwiper__slide p {
      max-width: 50%;
      font-size: 15px;
    }
  }
}
.snowtubing {
  background: var(--color-second);
  position: relative;
  .swiper-wrapper {
    max-height: 700px;
    height: 100%;
    .swiper-slide {
      max-height: 700px;
      height: 100%;
      img {
        object-fit: cover;
        max-height: 700px;
      }
    }
    .mySwiper__slide .slide__text {
      bottom: 80px;
      top: auto;
    }
    .mySwiper__slide h3 {
      max-width: 50%;
    }
    .mySwiper__slide p {
      max-width: 50%;
      font-size: 15px;
    }
  }
}
.sky-pass {
  background: var(--color-second);
}
.snowhod {
  background: var(--color-second);
  position: relative;
  height: 100vh;
  width: 100vw;
}
@media (max-width: 1200px) {
  .kitchen .swiper-wrapper .mySwiper__slide .slide__text {
    bottom: 20px;
    left: 10px;
  }
  .kitchen .swiper-wrapper .mySwiper__slide p {
    line-height: 140%;
    font-size: 15px;
  }
  .kitchen .swiper-wrapper .mySwiper__slide h3,
  .kitchen .swiper-wrapper .mySwiper__slide p {
    max-width: 80%;
  }
  .kitchen .mySwiper__slide h3 {
    font-size: 25px;
    line-height: 140%;
  }
}
@media (max-width: 600px) {
  .servies {
    min-height: 600px;
    height: 100%;
  }
  .servies__video {
    height: 100%;
    aspect-ratio: 0.9;
  }
  .freeridezone,
  .snowpark,
  .boarding-map,
  .boarding-afisha {
    min-height: 468px;
    height: 100%;
  }
  .kitchen .swiper-wrapper .mySwiper__slide .slide__text {
    bottom: 20px;
    left: 10px;
  }
  .kitchen .swiper-wrapper .mySwiper__slide p {
    line-height: 130%;

    font-size: 14px;
  }
  .kitchen .swiper-wrapper .mySwiper__slide h3,
  .kitchen .swiper-wrapper .mySwiper__slide p {
    max-width: 100%;
  }
  .kitchen .mySwiper__slide h3 {
    font-size: 20px;
    line-height: 130%;
  }
}
</style>
