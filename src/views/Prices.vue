<script setup>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import { ref } from "vue";
import { useApiStore } from "@/stores/ApiStore";
import Skipas from "@/components/Skipas/Skipas.vue";
const apiStore = useApiStore();
const headers = ref([
  { title: "Гостиница", key: "name", align: "center" },
  { title: "Тип номера", key: "perperson", align: "center" },
  { title: "Количество номеров", key: "qperson", align: "center" },
  { title: "Будни/Цена за номер, ₽", key: "priceday", align: "center" },
  {
    title: "Цена за весь коттедж, ₽",
    key: "priceallcotageday",
    align: "center",
  },
  { title: "Выходные/Цена за номер, ₽", key: "priceholiday", align: "center" },
  {
    title: "Цена за весь коттедж, ₽",
    key: "priceallcotageholiday",
    align: "center",
  },
]);
const places = [
  {
    name: "Медвежий холл.21 место",
    perperson: "Двухместный",
    qperson: "3 номера",
    priceday: "3 000",
    priceallcotageday: "25 000 /24 000При брони на двое суток",
    priceholiday: "4 000",
    priceallcotageholiday: "33 000",
  },
  {
    name: "Медвежий холл.21 место",
    perperson: "Трехместный",
    qperson: "5 номеров",
    priceday: "3 500",
    priceallcotageday: "25 000 /24 000При брони на двое суток",
    priceholiday: "4 500",
    priceallcotageholiday: "33 000",
  },
  {
    name: "Белая белка.20 мест",
    perperson: "Трехместный",
    qperson: "4 номера",
    priceday: "3 500",
    priceallcotageday: "22 000",
    priceholiday: "4 500",
    priceallcotageholiday: "28 000",
  },
  {
    name: "Белая белка.20 мест",
    perperson: "Четырехместный",
    qperson: "2 номеров",
    priceday: "4 500",
    priceallcotageday: "22 000",
    priceholiday: "5 500",
    priceallcotageholiday: "28 000",
  },
  {
    name: "Лисья нора.6 мест",
    perperson: "Двухместный",
    qperson: "3 номера",
    priceday: "3 700",
    priceallcotageday: "10 000",
    priceholiday: "4 000",
    priceallcotageholiday: "33 000",
  },
  {
    name: "Сова.8 мест",
    perperson: "Двухместный",
    qperson: "4 номера",
    priceday: "3 700",
    priceallcotageday: "14 000",
    priceholiday: "4 700",
    priceallcotageholiday: "18 000",
  },
  {
    name: "Олений ручей.8 мест",
    perperson: "Двухместный",
    qperson: "6 номеров",
    priceday: "4 500",
    priceallcotageday: "25 500",
    priceholiday: "5 500",
    priceallcotageholiday: "34 000",
  },
  {
    name: "Ski Motel.96 мест",
    perperson: "Двухместный",
    qperson: "12 номеров",
    priceday: "1 900 (800 место)",
    priceallcotageday: "-",
    priceholiday: "2 500 (1 000 место)",
    priceallcotageholiday: "-",
  },
  {
    name: "Ski Motel.96 мест",
    perperson: "Трехместный",
    qperson: "13 номеров",
    priceday: "2 500 (800 место)",
    priceallcotageday: "-",
    priceholiday: "3 000 (1 000 место)",
    priceallcotageholiday: "-",
  },
  {
    name: "Ski Motel.96 мест",
    perperson: "Четырехместный",
    qperson: "6 номеров",
    priceday: "3 000 (800 место)",
    priceallcotageday: "-",
    priceholiday: "3 500 (1 000 место)",
    priceallcotageholiday: "-",
  },
];
const headersup = ref([
  { title: "Подъемник", key: "name", align: "center" },
  { title: "Будни(Взрозлый)", key: "adultevery", align: "center" },
  { title: "Выходные/праздники(Взрозлый)", key: "adulthol", align: "center" },
  { title: "Будни(Детский)", key: "childrevery", align: "center" },
  {
    title: "Выходные/праздники(Детский)",
    key: "childrhol",
    align: "center",
  },
  { title: "Сноутюбинг", key: "snowtubing", align: "center" },
  { title: "Снегоход)", key: "snowhod", align: "center" },
  { title: "Индивидуальное(1ч/1чел)", key: "oneperson", align: "center" },
  { title: "Груповое(2ч/1чел)", key: "twoperson", align: "center" },
  { title: "Груповое(3ч/1чел)", key: "threeperson", align: "center" },
]);
const detailsup = [
  {
    name: "Разовый подъем",
    adultevery: "150",
    adulthol: "170",
    childrevery: "100",
    childrhol: "130",
    oneperson: "1700",
    twoperson: "3000",
    threeperson: "4500",
    snowtubing: "70/подъем",
    snowhod: "6500/час",
  },
  {
    name: "3 часа",
    adultevery: "900",
    adulthol: "1100",
    childrevery: "650",
    childrhol: "850",
    oneperson: "1700",
    twoperson: "3000",
    threeperson: "4500",
    snowtubing: "70/подъем",
    snowhod: "6500/час",
  },
  {
    name: "2 часа.Вечер",
    adultevery: "550",
    adulthol: "700",
    childrevery: "450",
    childrhol: "550",
    oneperson: "1700",
    twoperson: "3000",
    threeperson: "4500",
    snowtubing: "70/подъем",
    snowhod: "6500/час",
  },
  {
    name: "1 день",
    adultevery: "1200",
    adulthol: "1700",
    childrevery: "800",
    childrhol: "1100",
    oneperson: "1700",
    twoperson: "3000",
    threeperson: "4500",
    snowtubing: "70/подъем",
    snowhod: "6500/час",
  },
  {
    name: "50 подъемов",
    adultevery: "7000",
    adulthol: "7000",
    childrevery: "5000",
    childrhol: "5000",
    oneperson: "1700",
    twoperson: "3000",
    threeperson: "4500",
    snowtubing: "70/подъем",
    snowhod: "6500/час",
  },
  {
    name: "100 подъемов",
    adultevery: "12000",
    adulthol: "12000",
    childrevery: "9000",
    childrhol: "9000",
    oneperson: "1700",
    twoperson: "3000",
    threeperson: "4500",
    snowtubing: "70/подъем",
    snowhod: "6500/час",
  },
  {
    name: "200 подъемов",
    adultevery: "20000",
    adulthol: "20000",
    childrevery: "16000",
    childrhol: "16000",
    oneperson: "1700",
    twoperson: "3000",
    threeperson: "4500",
    snowtubing: "70/подъем",
    snowhod: "6500/час",
  },
];

const headersrent = ref([
  { title: "Прокат", key: "name", align: "center" },
  { title: "1 час(Взрозлый)", key: "adulthour", align: "center" },
  { title: "День(Взрозлый)", key: "adultday", align: "center" },
  { title: "1 час(Детский)", key: "childhour", align: "center" },
  {
    title: "День(Детский)",
    key: "childrday",
    align: "center",
  },
]);
const detailsrent = [
  {
    name: "Горные лыжи(COMFORT)(Палки,лыжи,ботинки)",
    adulthour: "600/>1часа: 500руб.",
    adultday: "1200",
    childhour: "600/>1часа: 500руб.",
    childrday: "900",
  },
  {
    name: "Сноуборд(COMFORT)(Палки,лыжи,ботинки)",
    adulthour: "600/>1часа: 500руб.",
    adultday: "1200",
    childhour: "500/>1часа: 400руб.",
    childrday: "900",
  },
  {
    name: "Горные лыжи(PREMIUM)(Палки,лыжи,ботинки)",
    adulthour: "800/>1часа: 600руб.",
    adultday: "1500",
    childhour: "-",
    childrday: "-",
  },
  {
    name: "Лыжи/Сноуборд(COMFORT)",
    adulthour: "500",
    adultday: "800",
    childhour: "400",
    childrday: "600",
  },
  {
    name: "Ботинки(COMFORT)",
    adulthour: "500",
    adultday: "800",
    childhour: "400",
    childrday: "600",
  },
  {
    name: "Лыжи/Сноуборд(PREMIUM)",
    adulthour: "600",
    adultday: "1000",
    childhour: "-",
    childrday: "-",
  },
  {
    name: "Ботинки(PREMIUM)",
    adulthour: "500",
    adultday: "900",
    childhour: "-",
    childrday: "-",
  },
  {
    name: "Палки",
    adulthour: "200",
    adultday: "300",
    childhour: "90",
    childrday: "200",
  },
  {
    name: "Очки/маска",
    adulthour: "300",
    adultday: "400",
    childhour: "-",
    childrday: "-",
  },
  {
    name: "Шлем",
    adulthour: "300",
    adultday: "400",
    childhour: "-",
    childrday: "-",
  },
];
const headersrentever = ref([
  { title: "Прокат", key: "name", align: "center" },
  { title: "1 час(Взрозлый)", key: "adulthour", align: "center" },
  { title: "День(Взрозлый)", key: "adultday", align: "center" },
  { title: "1 час(Детский)", key: "childhour", align: "center" },
  {
    title: "День(Детский)",
    key: "childrday",
    align: "center",
  },
]);
const detailsrentever = [
  {
    name: "Горные лыжи(COMFORT)(Палки,лыжи,ботинки)",
    adulthour: "300/>1часа: 250руб.",
    adultday: "700",
    childhour: "250/>1часа: 200руб.",
    childrday: "500",
  },
  {
    name: "Сноуборд(COMFORT)(Палки,лыжи,ботинки)",
    adulthour: "300/>1часа: 250руб.",
    adultday: "700",
    childhour: "250/>1часа: 200руб.",
    childrday: "500",
  },
  {
    name: "Горные лыжи(PREMIUM)(Палки,лыжи,ботинки)",
    adulthour: "400/>1часа: 300руб.",
    adultday: "900",
    childhour: "-",
    childrday: "-",
  },
  {
    name: "Лыжи/Сноуборд(COMFORT)",
    adulthour: "250",
    adultday: "500",
    childhour: "150",
    childrday: "350",
  },
  {
    name: "Ботинки(COMFORT)",
    adulthour: "250",
    adultday: "400",
    childhour: "150",
    childrday: "300",
  },
  {
    name: "Лыжи/Сноуборд(PREMIUM)",
    adulthour: "350",
    adultday: "700",
    childhour: "-",
    childrday: "-",
  },
  {
    name: "Ботинки(PREMIUM)",
    adulthour: "350",
    adultday: "600",
    childhour: "-",
    childrday: "-",
  },
  {
    name: "Палки",
    adulthour: "100",
    adultday: "200",
    childhour: "50",
    childrday: "100",
  },
  {
    name: "Очки/маска",
    adulthour: "150",
    adultday: "300",
    childhour: "-",
    childrday: "-",
  },
  {
    name: "Шлем",
    adulthour: "150",
    adultday: "300",
    childhour: "-",
    childrday: "-",
  },
];
const headerssales = ref([
  { title: "Пакет", key: "name", align: "center" },
  { title: "Будни", key: "day", align: "center" },
  { title: "Выходные", key: "holiday", align: "center" },
]);
const detailssales = [
  {
    name: "Именниники(Неделя до и после дня рождения)",
    day: "Подъемник:900р-день / Прокат: 650р-день",
    holiday: "Подъемник:1000р-день / Прокат: 750р-день",
  },
  {
    name: "Пенсионерам и ветеранам",
    day: "Подъемник:800р-день / Прокат: 650р-день",
    holiday: "Подъемник:1000р-день / Прокат: 750р-день",
  },
  {
    name: "Пенсионерам старше 70 лет",
    day: "Услуги предоставляются бесплатно",
    holiday: "Услуги предоставляются бесплатно",
  },
  {
    name: "Многодетным семьям",
    day: "Подъемник:900р-день / Прокат: 650р-день",
    holiday: "Подъемник:1000р-день / Прокат: 750р-день",
  },
];
</script>
<template>
  <Header />
  <section class="prices-promo">
    <div class="container__big">
      <div class="content prices-promo__content">
        <h1 class="title prices-promo__title">Прайс на «Такмане»</h1>
        <div class="descr prices-promo__descr">
          <span>Вашему выбору 5 коттеджей и SkiMotel. Цены от 1000₽ </span>
        </div>
      </div>
    </div>
  </section>
  <section class="prices-table">
    <div class="container__big">
      <h2 class="title prices-table__title">Прайс на проживание 2023</h2>
      <div class="prices-table__wrap">
        <v-data-table-virtual
          :items="places"
          :headers="headers"
          :loading="loading"
          item-value="name"
          theme="dark"
        ></v-data-table-virtual>

        <ul class="prices-table__descr">
          Примечания:
          <li>
            1. Гостиница предоставляет Гостям номера для временного проживания.
          </li>
          <li>
            2. Режим работы гостиницы – круглосуточный. Время заезда - с 15.00
            часов местного времени, время отъезда до 14.00 (в зимний период),
            время заезда - с 14.00 часов местного времени, время отъезда до
            13.00 часов местного времени (в летний период).
          </li>
          <li>
            3. При заселении Гостю необходимо иметь при себе документ,
            удостоверяющий личность, заполнить и подписать анкету,
            установленного образца, сдать анкету администратору По окончанию
            периода проживания Гостю необходимо уведомить администратора о
            выезде из номера и сдать ключи.
          </li>
          <li>
            4. В целях соблюдения правил пожарной безопасности гостям,
            проживающим в гостиницах, запрещается: - Пользоваться в номерах
            нештатными электронагревательными приборами, удлинителями,
            переходниками и т.д. Микроволновой печью и чайником можно
            воспользоваться в специальной кухонной зоне. - Хранить и приносить в
            номера огнеопасные и легковоспламеняющиеся материалы, ядовитые
            вещества. - Не оставляйте в гостинице ценные предметы. - Уходя из
            номера, оставлять включенными электроприборы. - Курить в номерах на
            территории гостиниц. Основание- закон №15-ФЗ «Об охране здоровья
            граждан от воздействия окружающего табачного дыма и последствий
            потребления табака». - Пользоваться в номерах и общественных зонах -
            кальяном. - Оставлять посторонних лиц в номере в своё отсутствие. -
            Находиться посторонним лицам в гостиничном номере с 23-00 до
            наступления расчетного часа без предъявления документа,
            удостоверяющего его личность. При несоблюдении правил пребывание в
            гостинице может быть ограничено или прервано. - Нарушать покой
            проживающих после 23.00. - Нарушать санитарные нормы и требования в
            гостиничном номере. - Выбрасывать мусор, бутылки и другие предметы
            из окон гостиниц. - Выносить белье, полотенца и инвентарь из номера.
            - Размещение животных в гостиницах категорически запрещено.
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="prices-table price-table-up">
    <div class="container__big">
      <h2 class="title prices-table__title">Прайс на подъемник</h2>
      <div class="prices-table__wrap">
        <v-data-table-virtual
          :items="detailsup"
          :headers="headersup"
          :loading="loading"
          item-value="name"
          theme="dark"
        ></v-data-table-virtual>

        <ul class="prices-table__descr">
          Примечания:
          <li>
            1. <b>Карта SKI-PASS</b>
            <span>
              пропуск на подъемники, бессрочная, многоразовогопользования</span
            >
          </li>
          <li>
            2. Оплата за карту взымается 1 раз при покупке,в размере 100
            рублей.Карта возврату и обмену не подлежит.
          </li>
          <li>
            3. Сохраняйте карту для следующих визитов в горнолыжный комплекс
            «Такман»
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="prices-table price-table-rent">
    <div class="container__big">
      <h2 class="title prices-table__title">
        Прайс на прокат. <span>Выходные</span>
      </h2>
      <div class="prices-table__wrap">
        <v-data-table-virtual
          :items="detailsrent"
          :headers="headersrent"
          :loading="loading"
          item-value="name"
          theme="dark"
        ></v-data-table-virtual>
      </div>
    </div>
  </section>
  <section class="prices-table price-table-rentevery">
    <div class="container__big">
      <h2 class="title prices-table__title">
        Прайс на прокат. <span>Будни</span>
      </h2>
      <div class="prices-table__wrap">
        <v-data-table-virtual
          :items="detailsrentever"
          :headers="headersrentever"
          :loading="loading"
          item-value="name"
          theme="dark"
        ></v-data-table-virtual>
      </div>
    </div>
  </section>

  <section class="prices-table price-table-sales">
    <div class="container__big">
      <h2 class="title prices-table__title">Система скидок</h2>
      <div class="prices-table__wrap">
        <v-data-table-virtual
          :items="detailssales"
          :headers="headerssales"
          :loading="loading"
          item-value="name"
          theme="dark"
        ></v-data-table-virtual>
      </div>
    </div>
  </section>
  <Skipas />
  <Footer />
</template>
<style lang="scss">
.prices-promo {
  background: url("../assets/bg/home-promo.png");
  background-size: cover;
  background-position: 70%;
  min-height: 100vh;
  display: flex;
}
.prices-table__wrap {
  padding-bottom: 50px;
}
.prices-table {
  background: var(--color-second);
  &__title {
    padding: 40px 0;
    span {
      color: red;
    }
  }
  &__wrap {
    background: var(--color-second);
  }
  &__descr {
    margin-top: 30px;
    color: var(--color-main);
    max-width: 50%;
    width: 100%;
    // display: flex;
    // flex-flow: column;
  }
}

@media (max-width: 1024px) {
  .prices-table__descr {
    width: 100%;
    max-width: 100%;
  }
}
@media (max-width: 600px) {
  .prices-promo {
    min-height: 600px;
    height: 100%;
  }
}
</style>
