<script setup>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import { ref } from "vue";
import { useApiStore } from "@/stores/ApiStore";
import Skipas from "@/components/Skipas/Skipas.vue";
const apiStore = useApiStore();
</script>
<template>
  <Header />
  <section class="roading-promo">
    <div class="container__big">
      <div class="content roading-promo__content">
        <h1 class="title roading-promo__title">Туры на «Такмане»</h1>
        <div class="descr roading-promo__descr">
          <span>Добраться на Такман легко из любой точки России!</span>
        </div>
      </div>
    </div>
  </section>
  <section class="parnters">
    <div class="container__big">
      <h2 class="parnters__title">Туры на «Такман»</h2>
      <div class="col-sm-12">
        <div class="space-row-20 parnters__space">
          <div class="col-lg-4 col-md-6 col-sm-12 df">
            <div class="parnters__item">
              <div class="parnters__item_start">
                <div class="parnters__item_title">
                  Электропоезд из Перми компанией ППК
                </div>
                <div class="parnters__logo">
                  <img src="../assets/logogettotak/rjd.svg" alt="" />
                </div>
              </div>
              <div class="parnters__item_subtitle">
                ТАКМАН ЭКСПРЕСС ⛷️🏂
                <b> Курсирует по выходным и праздничным дням</b>
              </div>
              <div class="parnters__item_descr">
                🏂Цена билета электропоезд+автобус от 312 руб. Стоимость проезда
                на городском маршруте №22 - 30 рублей, на специальном рейсовом
                автобусе - 75 рублей. На каждый вид транспорта билет
                приобретается по отдельности. <br />
                ⏰Время в пути экспресса: 2 часа 24 минуты 🔥Дополнительные
                бонусы для наших пассажиров (при предъявлении билета
                электропоезда на кассе курорта) Подъемник - 1000 руб Прокат -
                800 руб скидка 15% на услуги проживания <br />
                🎿Снаряжение везем бесплатно в чехлах! <br />
                Купить билет можно: • Прямо в вагоне у проводников по банковской
                карте • <br />
                На сайте продаж АО «ППК» -
                <a href="ppk59.ru">ppk59.ru</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 df">
            <div class="parnters__item">
              <div class="parnters__item_start">
                <div class="parnters__item_title">
                  Тур из Перми компанией А-ТУР
                </div>
                <div class="parnters__logo">
                  <img src="../assets/logogettotak/atur.svg" alt="" />
                </div>
              </div>

              <div class="parnters__item_subtitle">
                <b> Информация о ценах, маршруте и бонусах </b>
              </div>
              <div class="parnters__item_descr">
                Место посадки / высадки пассажиров Такман экспресса
                <br />
                <a href="http://vk.com/transfer_na_takman">
                  http://vk.com/transfer_na_takman
                </a>
                <br />
                Написать в WhatsApp <br />
                Написать в Viber <br />
                +7 (992) 203-38-39
              </div>
              <v-btn>Купить билет</v-btn>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 df">
            <div class="parnters__item">
              <div class="parnters__item_start">
                <div class="parnters__item_title">
                  Тур из Кирова компанией КАТАЕМ.РФ
                </div>
                <div class="parnters__logo">
                  <img src="../assets/logogettotak/kataem.png" alt="" />
                </div>
              </div>
              <div class="parnters__item_subtitle">
                <a href="https://КАТАЕМ.РФ"><b>КАТАЕМ.РФ</b></a> - наш партнер,
                с которым вы можете добраться к нам из Кирова.
              </div>
              <div class="parnters__item_descr">
                <a href="https://vk.com/kataemrf">vk.com/kataemrf</a> <br />
                <a href="https://instagram.com/kataemrf"
                  >instagram.com/kataemrf</a
                >
                <br />
                <a href="tel:7(922)668-74-01">+7 (922) 668-74-01</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 df">
            <div class="parnters__item">
              <div class="parnters__item_start">
                <div class="parnters__item_title">
                  Тур из Березников компанией Кудыкина гора
                </div>
                <div class="parnters__logo">
                  <img src="../assets/logogettotak/kudikina.png" alt="" />
                </div>
              </div>
              <div class="parnters__item_subtitle">
                «КУДЫКИНА ГОРА» наш партнер по трансферу из г. Березники
              </div>
              <div class="parnters__item_descr">
                <a href="https://vk.com/kydukina_gora">vk.com/kydukina_gora</a>
                <a href="tel:7 (919) 466-51-11">+7 (919) 466-51-11</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 df">
            <div class="parnters__item">
              <div class="parnters__item_start">
                <div class="parnters__item_title">
                  Тур из Казани компанией РЮКЗАК TOUR
                </div>
                <div class="parnters__logo">
                  <img src="../assets/logogettotak/rukzak.png" alt="" />
                </div>
              </div>

              <div class="parnters__item_subtitle">
                РЮКЗАК TOUR - наш партнер, с которым вы можете добраться к нам
                из Казани.
              </div>
              <div class="parnters__item_descr">
                <a href="http://vk.com/backpacktour16">
                  http://vk.com/backpacktour16
                </a>
                <br />
                <a href="http://instagram.com/backpacktour16">
                  http://instagram.com/backpacktour16
                </a>
                <br />
                <a href="tel:7 (992) 203-38-39"> +7 (992) 203-38-39</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 df">
            <div class="parnters__item">
              <div class="parnters__item_start">
                <div class="parnters__item_title">
                  Тур из Тюмени компанией SUSANIN TRIP
                </div>
                <div class="parnters__logo">
                  <img src="../assets/logogettotak/susanin.png" alt="" />
                </div>
              </div>
              <div class="parnters__item_subtitle">
                Добраться из г. Тюмень вы можете с нашим партнером Туристический
                клуб «Susanin trip»
              </div>
              <div class="parnters__item_descr">
                <a href="tel:7(345)270-45-04">+7 (345) 270-45-04</a>
                <br />
                <a href="tel:7(952)680-45-04">+7 (952) 680-45-04</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Skipas />
  <Footer />
</template>
<style lang="scss" scoped>
.roading-promo {
  background: url("../assets/bg/howtoget.png");
  background-size: cover;
  background-position: 70%;
  min-height: 100vh;
  display: flex;
}
.parnters {
  height: 100%;
  display: flex;
  &__title {
    color: var(--color-third);
    margin-top: 40px;
  }
  &__space {
    display: flex;
    flex-wrap: wrap;
    box-sizing: content-box;
    margin-top: 50px;
  }
  &__item {
    position: relative;
    width: 100%;
    padding: 35px 25px;
    display: flex;
    flex-flow: column;
    border-radius: 16px;
    box-shadow: 0 0 25px 5px #e4e9ea;
    &_start {
      display: flex;
      align-items: center;
    }
    &_title {
      margin-top: 20px;
    }
    &_subtitle {
      margin-top: 15px;
      display: flex;
      flex-flow: column;
    }
  }
  &__logo {
    max-width: 75px;
    width: 100%;

    float: right; /* Обтекание текста вокруг изображения */
    margin-left: 15px; /* Отступ справа от изображения */
    img {
      width: 100%;
      height: auto;
    }
  }
}
.df {
  display: flex;
  min-height: 1px;
  margin-bottom: 20px;
}
@media (max-width: 959px) {
  .parnters__item_start {
    justify-content: space-between;
  }
}
@media (max-width: 600px) {
  .roading-promo {
    min-height: 600px;
    height: 100%;
  }
  .parnters__item_descr a {
    font-size: 14px;
  }
}
@media (max-width: 375px) {
  .parnters__space {
    padding: 0;
    margin: 0;
  }
  .parnters__item {
    padding: 25px 15px;
  }
  .parnters__item_descr a {
    font-size: 13px;
  }
  .space-row-20 > [class^="col-"] {
    padding: 0;
  }
}
</style>
