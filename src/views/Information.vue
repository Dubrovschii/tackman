<script setup>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import { ref } from "vue";
import Skipas from "@/components/Skipas/Skipas.vue";
import { useApiStore } from "@/stores/ApiStore";
import { RouterLink } from "vue-router";
const apiStore = useApiStore();

const toggleDialog1 = () => {
  apiStore.dialog = true;
};
const toggleDialog = (dialog) => {
  toggleDialog1(dialog);
};
const links = [
  {
    path: "https://www.takman.ru/images/temp/1700737592655f3238e5c29.pdf",
    name: "Правила проката",
    src: "https://www.takman.ru/assets/img/pdf.svg",
  },
  {
    path: "https://www.takman.ru/images/temp/1700737583655f322f7f766.pdf",
    name: "Правила поведения на территории горнолыжного курорта «Такман»",
    src: "https://www.takman.ru/assets/img/pdf.svg",
  },
  {
    path: "https://www.takman.ru/images/temp/1700737583655f322f7f766.pdf",
    name: "Правила поведения на горнолыжных трассах ГК «Такман»",
    src: "https://www.takman.ru/assets/img/pdf.svg",
  },
  {
    path: "https://www.takman.ru/images/temp/1700737583655f322f7f766.pdf",
    name: "Правила оказания услуг инструкторов",
    src: "https://www.takman.ru/assets/img/pdf.svg",
  },
  {
    path: "https://www.takman.ru/images/temp/1700737583655f322f7f766.pdf",
    name: "Правила пользования SKI-PASS",
    src: "https://www.takman.ru/assets/img/pdf.svg",
  },
  {
    path: "https://www.takman.ru/images/temp/1700737583655f322f7f766.pdf",
    name: "Правила приобретения сезонного SKI-PASS",
    src: "https://www.takman.ru/assets/img/pdf.svg",
  },
  {
    path: "https://www.takman.ru/images/temp/1700737583655f322f7f766.pdf",
    name: "Правила пользования пассажирской канатной дорогой",
    src: "https://www.takman.ru/assets/img/pdf.svg",
  },

  {
    path: "https://www.takman.ru/images/temp/1700737583655f322f7f766.pdf",
    name: "Правила пользования услугами сноу-тюбинга",
    src: "https://www.takman.ru/assets/img/pdf.svg",
  },
];
const isExternalLink = (path) => {
  return /^(http|https):\/\//.test(path);
};
</script>
<template>
  <Header />
  <section class="info-promo">
    <div class="container__big">
      <div class="content info-promo__content">
        <h1 class="title info-promo__title">Информация о курорте</h1>
        <div class="descr info-promo__descr">
          <span
            >Добраться к нам можно несколькими способами: автобусом, электричкой
            и на личном транспорте. Из Перми или других городов — не
            важно!</span
          >
        </div>
      </div>
    </div>
  </section>
  <section class="ski">
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
  <section class="regular">
    <div class="container__big">
      <div class="regular__content">
        <h2 class="regular__title">Правила пользования услугами курорта</h2>
        <div class="regular__linkwr">
          <div class="regular__link" v-for="link in links" :key="link.path">
            <template v-if="isExternalLink(link.path)">
              <a :href="link.path" target="_blank">
                <span v-if="link.src">
                  <img :src="link.src" alt="" />
                </span>
                {{ link.name }}
              </a>
            </template>
            <template v-else>
              <RouterLink :to="link.path">
                <span v-if="link.src">
                  <img :src="link.src" alt="" />
                </span>
                {{ link.name }}
              </RouterLink>
            </template>
          </div>
        </div>
      </div>
      <div class="regular__content2">
        <h2 class="">Правила пользования SKI-PASS</h2>
        <div class="regular__linkwr">
          1. Карта Ски-Пасс (далее – Карта) – это многоразовая пластиковая карта
          с чипом, на которую зачисляются услуги по подъему Клиента на склоны
          гор с использованием канатных дорог (разовые подъемы и - почасовые
          проходы) на территории Курорта, а так же иные услуги. 2. Пользование
          услугами канатной дороги возможно при наличии у Клиента действующей
          Карты. <br />
          3. Получение Карты Клиентом производятся в официальных точках продаж
          Курорта: кассах, расположенных в Центральном здании, в домике
          инструкторской службы. <br />
          4. Получение Карты осуществляется Клиентом одновременно с
          приобретением права пользования услугами Курорта. <br />
          5. Оплата услуг, получаемых Клиентом посредством Карты, производится
          через кассы Курорта наличными денежными средствами или безналичным
          расчетом с использованием банковских карт, а юридическими лицами так
          же путем безналичного перечисления денежных средств на расчетный счет
          ГК «Такман». <br />
          6. Оплата услуг осуществляется с применением контрольно-кассовой
          техники. При оплате услуг необходимо сохранять кассовые чеки до
          завершения использования услуг. <br />
          7. Карта используется многократно, до тех пор, пока она соответствует
          условиям работы бесконтактной системы платного контроля доступа,
          используемой на Курорте. В случае, если Курорт изменит или обновит
          систему платного контроля доступа, Клиенту необходимо заменить
          имеющуюся Карту на новую Карту, соответствующую системе ГК
          «Такман».<br />
          8. Во время катания Карту необходимо хранить в закрытом кармане
          верхней одежды, во избежание потери, не сгибать карту.<br />
          9. Списание услуг и начало отсчета часовых проходов по Карте
          начинается после активации часового абонемента на турнекетах канатных
          дорог. <br />10.Порядок возврата денежных средств при получении травмы
          на территории Курорта: Клиент предъявляет исправно работающую Карту;
          Кассовый чек о зачислении услуг на данную Карту; Документ,
          удостоверяющий личность (паспорт); Клиентом заполняется утвержденная
          форма заявления о возврате денежных средств с указанием причины и
          отметкой медпункта Курорта.
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<style lang="scss">
.info-promo {
  background: url("../assets/bg/informationbg.png");
  background-size: cover;
  background-position: 70%;
  min-height: 100vh;
  display: flex;
}
.ski {
  background: var(--color-third);
}
.regular {
  background: var(--color-third);
  &__content {
    color: var(--color-main);
    padding-top: 40px;
  }
  &__linkwr {
    margin-top: 40px;
    display: flex;
    flex-flow: column;
  }
  &__link {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    span {
      padding-right: 15px;
    }
  }
  &__content2 {
    color: var(--color-main);
    padding-top: 40px;
  }
}
@media (max-width: 600px) {
  .info-promo {
    min-height: 600px;
    height: 100%;
  }
}
</style>
