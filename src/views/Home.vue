<script setup>
import Header from "@/components/Header/Header.vue";
import Slider from "@/components/Slider/Slider.vue";
import Footer from "@/components/Footer/Footer.vue";
import { gsap } from "gsap";
import { ref, defineEmits, onMounted } from "vue";
import { useApiStore } from "@/stores/ApiStore";
import { RouterLink } from "vue-router";

import { EffectFlip, Pagination, Navigation } from "swiper/modules";

import Skipas from "@/components/Skipas/Skipas.vue";

const apiStore = useApiStore();
const modules = [Navigation, EffectFlip];
const emit = defineEmits();
const props = defineProps({
  slides: {
    type: Array,
  },
});

const toggleDialog1 = () => {
  apiStore.dialog = true;
};
const toggleDialog = (dialog) => {
  toggleDialog1(dialog);
};
const swiperOptions = {
  navigation: true,
};

const slides = [
  {
    src: "src/assets/image/Slider1/img1.png",
    title: "Аренда инструктора",
    text: "Весь спектр услуг от проката инвентаря до катанияна снегоходах!",
  },
  {
    src: "src/assets/image/Slider1/img2.png",
    title: "Прокат снаряжения",
    text: "Весь спектр услуг от проката инвентаря до катанияна снегоходах!",
  },
  {
    src: "src/assets/image/Slider1/img3.png",
    title: "Сноутюбинг",
    text: "Весь спектр услуг от проката инвентаря до катанияна снегоходах!",
  },
];
const slidesAfisha = [
  { src: "src/assets/image/SliderPoster/1 901.png" },
  { src: "src/assets/image/SliderPoster/IMG_0235 1.png" },
  { src: "src/assets/image/SliderPoster/IMG_7209 1.png" },
];
const spaceBetween = ref(50);
const slidesPerView = ref(2);
const spaceBetweenAfisha = ref(0);
const slidesPerViewAfisha = ref(2.2);
const updateSpaceBetween = () => {
  if (window.innerWidth < 600) {
    spaceBetween.value = 20;
    slidesPerView.value = 1;
  } else if (window.innerWidth < 1200) {
    spaceBetween.value = 30;
    slidesPerView.value = 1.5;
  } else {
    spaceBetween.value = 50;
    slidesPerView.value = 2;
  }
};
const updateSpaceBetweenAfisha = () => {
  if (window.innerWidth < 600) {
    spaceBetweenAfisha.value = 20;
    slidesPerViewAfisha.value = 1.2;
  } else if (window.innerWidth < 1200) {
    spaceBetweenAfisha.value = 0;
    slidesPerViewAfisha.value = 1.5;
  } else {
    spaceBetweenAfisha.value = 0;
    slidesPerViewAfisha.value = 2.2;
  }
};
updateSpaceBetween();
updateSpaceBetweenAfisha();

onMounted(() => {
  gsap.fromTo(
    "#description",
    {
      opacity: 0,
      x: "-100%",
    },
    {
      duration: 1.5,
      opacity: 1,
      x: 0,
      ease: "power3.inOut",
      delay: 0.5,
    }
  );
});
</script>

<template>
  <Header />
  <section class="promo">
    <video
      src="../assets/video/video-promo-home.mp4"
      autoplay
      loop
      muted
      class="promo__video"
    ></video>
    <div class="container__big">
      <div class="content promo__content">
        <h1 class="title promo__title">Горнолыжный курорт «Такман»</h1>
        <div class="descr promo__descr" id="description">
          <span
            >Горнолыжный курорт «Такман», расположенный рядом с городом Чусовой
            в Пермском крае, является одним из наиболее популярных в регионе. И
            это неудивительно — здесь оборудовано более 11 трасс как для
            профессиональных лыжников, так и для новичков в этом деле.</span
          >
          <br />
          <span
            >Кроме того, курорт обладает туристической инфраструктурой и всеми
            условиями, необходимыми для отдыха — развлечениями, гостиницами, а
            также всеми другими необходимыми деталями.</span
          >
        </div>
      </div>
    </div>
  </section>
  <section class="uslugi">
    <div class="container__big">
      <div class="start uslugi__start">
        <h2 class="second-title">Наши услуги</h2>
        <div class="second-descr">
          Весь спектр услуг от проката инвентаря до катания на снегоходах!
        </div>
        <v-btn class="btn" color="#fff">
          <RouterLink to="/servies">Подробнее</RouterLink>
        </v-btn>
      </div>
      <Slider
        :slides="slides"
        :options="swiperOptions"
        :slides-per-view="slidesPerView"
        :space-between="spaceBetween"
      />
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

  <section class="afisha">
    <div class="container__big">
      <div class="start start__black">
        <h2 class="second-title title__black">Афиша</h2>
        <div class="second-descr descr__black">
          Каждые выходные мы проводим интересные мероприятия
        </div>

        <v-btn class="btn" color="#181f26">
          <RouterLink to="/event">Подробнее</RouterLink>
        </v-btn>
      </div>
      <Slider
        id="photo"
        :slides="slidesAfisha"
        class="afisha__slider"
        :options="swiperOptions"
        :slides-per-view="slidesPerViewAfisha"
        :space-between="spaceBetweenAfisha"
      />
    </div>
  </section>

  <section class="accomandation">
    <div class="container__big">
      <div class="content">
        <h1 class="title">Проживание на «Такмане»</h1>
        <div class="descr">
          Вашему выбору 5 коттеджей и SkiMotel. Цены от 1000₽
        </div>

        <v-btn class="btn" color="#fff">
          <RouterLink to="/accomandation">Подробнее</RouterLink>
        </v-btn>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style lang="scss">
.promo {
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
    z-index: 5;
  }
}
.uslugi {
  background: var(--color-second);
}
.second-descr {
  margin-top: 20px;
}
.btn {
  margin-top: 40px !important;
  height: 52px !important;
}
.start__black {
  background: #fff;
}
.title__black,
.descr__black {
  color: var(--color-third);
}
.afisha__slider {
  max-height: 900px;
  height: auto;
  img {
    max-height: 888px;
    height: 100%;
    max-width: 710px;
    width: 100%;
    object-fit: cover;
  }
  .mySwiper__slide {
    max-width: 710px;
  }
}
.accomandation {
  background: url("../assets/bg/accomandation/accomodation.png");
  background-size: cover;
  background-position: 70%;
  min-height: 100vh;
  display: flex;
}
.btn-close {
  position: absolute;
  top: 10px;
  right: 20px;
}
@media (max-width: 1200px) {
  .uslugi .slide__text {
    left: 10px !important;
  }
  .uslugi .slide__text h3 {
    font-size: 40px;
    line-height: 45px;
  }
  .uslugi .slide__text p {
    font-size: 15px;
  }
}
@media (max-width: 882px) {
  .content {
    max-width: 650px;
  }
  h1 {
    font-size: 58px;
    line-height: 65px;
  }
  h2 {
    font-size: 52px;
    line-height: 60px;
  }
  .descr {
    font-size: 15px;
  }
  .promo__title {
    max-width: 550px;
  }
  .promo__descr {
    max-width: 500px;
  }
}
@media (max-width: 700px) {
  .content {
    max-width: 500px;
  }
  h1 {
    font-size: 45px;
    line-height: 55px;
  }
  .descr {
    font-size: 14px;
  }
  .uslugi .mySwiper__slide .slide__text {
    top: 10px !important;
  }
  .uslugi .slide__text h3 {
    font-size: 25px;
    line-height: 35px;
  }
  .uslugi .slide__text p {
    font-size: 14px;
    line-height: 16px;
  }
  .custom-next,
  .custom-prev {
    width: 35px !important;
    height: 35px !important;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
@media (max-width: 550px) {
  .container__big {
    padding: 0 15px;
  }
  .content {
    max-width: 320px;
  }
  h1 {
    font-size: 35px;
    line-height: 45px;
  }
  .promo__title {
    max-width: 400px;
  }
  .promo__descr {
    max-width: 400px;
  }
  .uslugi .slide__text {
    top: 20px;
  }
  .uslugi .slide__text h3 {
    font-size: 18px;
    line-height: 20px;
  }
  h2 {
    font-size: 35px;
    line-height: 40px;
  }
}
@media (max-width: 350px) {
  .content {
    max-width: 280px;
  }
  h1 {
    font-size: 28px;
    line-height: 35px;
  }
  .promo__title {
    max-width: 280px;
  }
  .promo__descr {
    max-width: 280px;
  }
}

.person-select .v-input__input {
  height: 38px !important;
}
.v-field__input {
  padding: 5px 15px;
  min-height: 38px;
  height: 38px !important;
  opacity: inherit;
}
.v-field::focus {
  border: none;
}
.v-field {
  color: #1d1d1d;
}
.dp__pointer {
  color: #1d1d1d;
}
.v-field__field {
  height: 36px !important;
}
.person-select .v-input__details {
  display: none;
}
.pay-icon {
  display: flex;
  padding-right: 24px;
  .icons {
    padding: 0 5px;
  }
  .icons:last-child {
    padding-right: 0;
  }
}
@media (max-width: 600px) {
  .promo {
    min-height: 600px;
    height: 100%;
  }

  .promo__video {
    height: 100%;
  }
  .accomandation {
    min-height: 468px;
  }
}
</style>
