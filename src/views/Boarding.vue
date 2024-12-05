<script setup>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

import Skipas from "@/components/Skipas/Skipas.vue";
import { useApiStore } from "@/stores/ApiStore";

const apiStore = useApiStore();

const toggleDialog1 = () => {
  apiStore.dialog = true;
};
const toggleDialog = (dialog) => {
  toggleDialog1(dialog);
};
</script>
<template>
  <Header />
  <section class="boarding">
    <div class="container__big">
      <div class="content boarding__content">
        <h1 class="title boarding__title">11 горнолыжных трасс</h1>
        <div class="descr boarding__descr">
          <span>Наши мероприятия.</span>
          <br />
          <span
            >Наш горнолыжный курорт оснащен современными подъемниками, которые,
            по словам посетителей, всегда работают стабильно и без
            нареканий.</span
          >
        </div>
      </div>
    </div>
  </section>
  <section class="freeridezone">
    <div class="container__big">
      <div class="content">
        <h1 class="title boarding__title">4 фрирайд зоны</h1>
        <div class="descr boarding__descr">
          <span>Наши мероприятия.</span>
          <br />
          <span
            >Наш горнолыжный курорт оснащен современными подъемниками, которые,
            по словам посетителей, всегда работают стабильно и без
            нареканий.</span
          >
        </div>
      </div>
    </div>
  </section>
  <section class="ski-pas">
    <div class="container__big">
      <div class="start ski-pas__start">
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
  <section class="snowpark">
    <div class="container__big">
      <div class="content">
        <h1 class="title boarding__title">
          Крупнейший сноупарк в Пермском крае
        </h1>
        <div class="descr boarding__descr">
          <span>Наши мероприятия.</span>
          <br />
          <span
            >Именно поэтому любители экстремального спорта и катания на
            сноуборде приезжают сюда очень часто.</span
          >
        </div>
      </div>
    </div>
  </section>
  <section class="boarding-map"></section>
  <section class="boarding-afisha">
    <div class="container__big">
      <div class="content">
        <h1 class="title boarding__title">Мероприятия каждые выходные</h1>
        <div class="descr boarding__descr">
          <span
            >Горнолыжный курорт «Такман» — место отдыха, которое идеально
            подходит для выходных в компании друзей или семьи.</span
          >
        </div>
        <v-btn class="btn" color="#fff">
          <RouterLink to="/event">Афиша</RouterLink>
        </v-btn>
      </div>
    </div>
  </section>
  <Footer />
</template>
<style lang="scss">
.boarding {
  background: url("../assets/bg/boarding01.png");
  background-size: cover;
  background-position: 70%;
  min-height: 100vh;
  display: flex;
}
.freeridezone {
  background: url("../assets/bg/boarding02.png");
  background-size: cover;
  background-position: 70%;
  min-height: 100vh;
  display: flex;
}
.ski-pas {
  background: var(--color-second);
}
.snowpark {
  background: url("../assets/bg/boarding03.png");
  background-size: cover;
  background-position: 70%;
  min-height: 100vh;
  display: flex;
}
.boarding-map {
  background: url("../assets/bg/boarding-map.png");
  background-size: cover;
  background-position: 70%;
  min-height: 100vh;
  display: flex;
}
.boarding-afisha {
  background: url("../assets/bg/boarding04.png");
  background-size: cover;
  background-position: 70%;
  min-height: 100vh;
  display: flex;
}
@media (max-width: 600px) {
  .boarding {
    min-height: 600px;
    height: 100%;
  }
  .freeridezone,
  .snowpark,
  .boarding-map,
  .boarding-afisha {
    min-height: 468px;
    height: 100%;
  }
}
</style>
