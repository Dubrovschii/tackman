<script setup>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

import Booking from "@/components/Booking/Booking.vue";
import { ref, onMounted } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ru } from "date-fns/locale";
import { useApiStore } from "@/stores/ApiStore";
import Skipas from "@/components/Skipas/Skipas.vue";
const apiStore = useApiStore();
const emit = defineEmits();
const toggleDialog1 = () => {
  apiStore.dialog = true;
};
const toggleDialog = (dialog) => {
  toggleDialog1(dialog);
};
const handleSearch = (data) => {
  console.log("Received search data:", data);
  // Process the received data here
};
</script>
<template>
  <Header />
  <section class="accomandation">
    <div class="container__big">
      <div class="content accomandation__content">
        <h1 class="title accomandation__title">Проживание на «Такмане»</h1>
        <Skipas />  
        <div class="descr accomandation__descr">
          <span
            >Горнолыжный курорт «Такман» — место отдыха, которое идеально
            подходит для выходных в компании друзей или семьи. Здесь есть все
            условия, необходимые для комфортного отдыха — оборудованные
            горнолыжные склоны, спортивный инвентарь, бани, развлекательные
            комнаты и панорамное кафе.
          </span>
        </div>
      </div>
    </div>
  </section>
  <section class="booking">
    <div class="container__big">
      <div class="start booking__start">
        <h3 class="second-title">
          Бронирование <br />
          коттеджа
        </h3>
        <div class="booking__wrap">
          <Booking />
        </div>
      </div>
    </div>
  </section>
  <section class="bear">
    <div class="container__big">
      <div class="content event__content">
        <h1 class="title event__title">Медвежий холл</h1>
        <div class="descr event__descr">
          <span>21 место, от 1700₽ за сутки</span>
        </div>
        <v-btn class="btn" color="#fff">
          <RouterLink to="/">Подробнее</RouterLink>
        </v-btn>
      </div>
    </div>
  </section>
  <section class="squirrel">
    <div class="container__big">
      <div class="content squirrel__content">
        <h1 class="title squirrel__title">Белая белка</h1>
        <div class="descr squirrel__descr">
          <span>20 место, от 1700₽ за сутки</span>
        </div>
        <v-btn class="btn" color="#fff">
          <RouterLink to="/">Подробнее</RouterLink>
        </v-btn>
      </div>
    </div>
  </section>
  <section class="owl">
    <div class="container__big">
      <div class="content owl__content">
        <h1 class="title owl__title">Сова</h1>
        <div class="descr owl__descr">
          <span>6 место, от 2300₽ за сутки</span>
        </div>
        <v-btn class="btn" color="#fff">
          <RouterLink to="/">Подробнее</RouterLink>
        </v-btn>
      </div>
    </div>
  </section>
  <section class="fox">
    <div class="container__big">
      <div class="content fox__content">
        <h1 class="title fox__title">Лисья нора</h1>
        <div class="descr fox__descr">
          <span>6 место, от 2300₽ за сутки</span>
        </div>
        <v-btn class="btn" color="#fff">
          <RouterLink to="/">Подробнее</RouterLink>
        </v-btn>
      </div>
    </div>
  </section>
  <section class="deer">
    <div class="container__big">
      <div class="content deer__content">
        <h1 class="title deer__title">Олений ручей</h1>
        <div class="descr deer__descr">
          <span>12 место, от 2300₽ за сутки</span>
        </div>
        <v-btn class="btn" color="#fff">
          <RouterLink to="/">Подробнее</RouterLink>
        </v-btn>
      </div>
    </div>
  </section>
  <section class="booking">
    <div class="container__big">
      <div class="start booking__start">
        <h3 class="second-title">
          Бронирование <br />
          номера в Ski Motel
        </h3>
        <div class="booking__wrap">
          <Booking />
        </div>
      </div>
    </div>
  </section>
  <section class="motel">
    <div class="container__big">
      <div class="content motel__content">
        <h1 class="title motel__title">Олений ручей</h1>
        <div class="descr motel__descr">
          <span>12 место, от 2300₽ за сутки</span>
        </div>
        <v-btn class="btn" color="#fff">
          <RouterLink to="/">Подробнее</RouterLink>
        </v-btn>
      </div>
    </div>
  </section>
  <Footer />
</template>

<style lang="scss" scoped>
.accomandation {
  background: url("../assets/bg/accomandation/accomodation.png");
  background-size: cover;
  background-position: 70%;
  min-height: 100vh;
  display: flex;
}
.booking {
  background: var(--color-second);
  &__wrap {
    display: flex;
    align-items: center;
    margin-top: 60px;
  }
}

.bear {
  background: url("../assets/bg/accomandation/01.png");
  background-size: cover;
  background-position: 70%;
  min-height: 100vh;
  display: flex;
}
.squirrel {
  background: url("../assets/bg/accomandation/cottage-02.png");
  background-size: cover;
  background-position: 50%;
  min-height: 100vh;
  display: flex;
}
.owl {
  background: url("../assets/bg/accomandation/cottage-03.png");
  background-size: cover;
  background-position: 70%;
  min-height: 100vh;
  display: flex;
}
.fox {
  background: url("../assets/bg/accomandation/cottage-04.png");
  background-size: cover;
  background-position: 70%;
  min-height: 100vh;
  display: flex;
}
.deer {
  background: url("../assets/bg/accomandation/cottage-05.png");
  background-size: cover;
  background-position: 70%;
  min-height: 100vh;
  display: flex;
}
.motel {
  background: url("../assets/bg/accomandation/motel.png");
  background-size: cover;
  background-position: 70%;
  min-height: 100vh;
  display: flex;
}

@media (max-width: 600px) {
  .accomandation {
    min-height: 600px;
    height: 100%;
  }
  .bear,
  .squirrel,
  .owl,
  .fox,
  .deer,
  .motel {
    min-height: 468px;
    height: 100%;
  }
  .second-title {
    line-height: 35px;
  }
}
</style>
