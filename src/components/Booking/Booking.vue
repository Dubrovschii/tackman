<script setup>
import { ref, defineEmits, onMounted, shallowRef } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ru } from "date-fns/locale";
import { useRoute } from "vue-router";
const route = useRoute();
const dateIn = ref();
const dateOut = ref();
const emit = defineEmits();
const persona = ref(["1", "2", "3", "4", "5", "6"]);
const selectedPerson = ref(null);
const dialogNotification = ref(false);
const dialogBooking = ref(false);
const loading = shallowRef(false);

const test = () => {
  if (!selectedPerson.value || !dateIn.value || !dateOut.value) {
    dialogNotification.value = true;
  } else {
    dialogBooking.value = true;
  }

  // Emit an event with the data
  emit("search", {
    dateIn: dateIn.value,
    dateOut: dateOut.value,
    selectedPerson: selectedPerson.value,
  });
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
const headers = ref([
  { title: "Картинка", key: "src", align: "center" },
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
  { title: "Забронировать", key: "btn", align: "center" },
]);
const places = [
  {
    src: "https://www.takman.ru/images/temp/170564489765aa13612abab.jpg",
    name: "Медвежий холл.21 место",
    perperson: "Двухместный",
    qperson: "3 номера",
    priceday: "3 000",
    priceallcotageday: "25 000 /24 000При брони на двое суток",
    priceholiday: "4 000",
    priceallcotageholiday: "33 000",
    btn: "Забронировать",
  },
  {
    src: "https://www.takman.ru/images/temp/170564489765aa13612abab.jpg",
    name: "Медвежий холл.21 место",
    perperson: "Трехместный",
    qperson: "5 номеров",
    priceday: "3 500",
    priceallcotageday: "25 000 /24 000При брони на двое суток",
    priceholiday: "4 500",
    priceallcotageholiday: "33 000",
    btn: "Забронировать",
  },
  {
    src: "https://www.takman.ru/images/temp/170564487665aa134c752cd.jpg",
    name: "Белая белка.20 мест",
    perperson: "Трехместный",
    qperson: "4 номера",
    priceday: "3 500",
    priceallcotageday: "22 000",
    priceholiday: "4 500",
    priceallcotageholiday: "28 000",
    btn: "Забронировать",
  },
  {
    src: "https://www.takman.ru/images/temp/170564487665aa134c752cd.jpg",
    name: "Белая белка.20 мест",
    perperson: "Четырехместный",
    qperson: "2 номеров",
    priceday: "4 500",
    priceallcotageday: "22 000",
    priceholiday: "5 500",
    priceallcotageholiday: "28 000",
    btn: "Забронировать",
  },
  {
    src: "https://www.takman.ru/images/temp/170564494165aa138d7aafd.jpg",
    name: "Лисья нора.6 мест",
    perperson: "Двухместный",
    qperson: "3 номера",
    priceday: "3 700",
    priceallcotageday: "10 000",
    priceholiday: "4 000",
    priceallcotageholiday: "33 000",
  },
  {
    src: "https://www.takman.ru/images/temp/17032166676585061b9e429.jpg",
    name: "Сова.8 мест",
    perperson: "Двухместный",
    qperson: "4 номера",
    priceday: "3 700",
    priceallcotageday: "14 000",
    priceholiday: "4 700",
    priceallcotageholiday: "18 000",
    btn: "Забронировать",
  },
  {
    src: "https://www.takman.ru/images/temp/170564489765aa13612abab.jpg",
    name: "Олений ручей.8 мест",
    perperson: "Двухместный",
    qperson: "6 номеров",
    priceday: "4 500",
    priceallcotageday: "25 500",
    priceholiday: "5 500",
    priceallcotageholiday: "34 000",
    btn: "Забронировать",
  },
  {
    src: "https://www.takman.ru/images/temp/1702796174657e9b8e69ab2.jpg",
    name: "Ski Motel.96 мест",
    perperson: "Двухместный",
    qperson: "12 номеров",
    priceday: "1 900 (800 место)",
    priceallcotageday: "-",
    priceholiday: "2 500 (1 000 место)",
    priceallcotageholiday: "-",
    btn: "Забронировать",
  },
  {
    src: "https://www.takman.ru/images/temp/1702796174657e9b8e69ab2.jpg",
    name: "Ski Motel.96 мест",
    perperson: "Трехместный",
    qperson: "13 номеров",
    priceday: "2 500 (800 место)",
    priceallcotageday: "-",
    priceholiday: "3 000 (1 000 место)",
    priceallcotageholiday: "-",
    btn: "Забронировать",
  },
  {
    src: "https://www.takman.ru/images/temp/1702796174657e9b8e69ab2.jpg",
    name: "Ski Motel.96 мест",
    perperson: "Четырехместный",
    qperson: "6 номеров",
    priceday: "3 000 (800 место)",
    priceallcotageday: "-",
    priceholiday: "3 500 (1 000 место)",
    priceallcotageholiday: "-",
    btn: "Забронировать",
  },
];
</script>

<template>
  <div class="booking__form">
    <VueDatePicker
      v-model="dateIn"
      :format-locale="ru"
      placeholder="Заезд"
      :enable-time-picker="false"
    ></VueDatePicker>
    <VueDatePicker
      v-model="dateOut"
      :format-locale="ru"
      placeholder="Выезд"
      :enable-time-picker="false"
    ></VueDatePicker>
    <v-select
      class="person-select"
      placeholder="Коль-во человек"
      variant="solo-filled"
      height="38"
      :clearable="true"
      :items="persona"
      v-model="selectedPerson"
      color="#fff"
      :focused="false"
    ></v-select>
    <v-btn class="btn booking__btn" @click="test()">Найти</v-btn>
  </div>

  <v-dialog v-model="dialogNotification" width="auto">
    <v-card
      max-width="400"
      text="Пожалуйста, заполните все поля. Это необходимо для правильной обработки вашей заявки. Спасибо!"
      color="red"
    >
      <template v-slot:actions>
        <v-btn
          class="ms-auto"
          text="Ok"
          @click="dialogNotification = false"
        ></v-btn>
      </template>
    </v-card>
  </v-dialog>
  <v-dialog v-model="dialogBooking" width="auto">
    <v-data-table-virtual
      :items="places"
      :headers="headers"
      :loading="loading"
      height="80vh"
      :disabled="loading"
      item-value="name"
      theme="dark"
    >
      <template v-slot:loading>
        <v-skeleton-loader type="table-row@14 "></v-skeleton-loader>
      </template>
      <template v-slot:item.src="{ item }">
        <v-img
          :src="item.src"
          aspect-ratio="1"
          max-height="100"
          loading="lazy"
        ></v-img>
      </template>
      <template v-slot:item.btn="{ item }">
        <!-- <v-img
          :btn="item.btn"
          aspect-ratio="1"
          max-height="100"
          loading="lazy"
        ></v-img> -->
        <v-btn class="" color="#f4f4f4" dark :btn="item.btn"
          >Забронировать
        </v-btn>
      </template>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Бронирование</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ props }">
              <v-btn
                class=""
                color="#f4f4f4"
                dark
                v-bind="props"
                @click="dialogBooking = !dialogBooking"
              >
                Закрыть
              </v-btn>
            </template>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:actions>
        <v-btn
          class="ms-auto"
          text="Ok"
          @click="dialogBooking = !dialogBooking"
        ></v-btn>
      </template>
    </v-data-table-virtual>
  </v-dialog>
</template>

<style lang="scss">
.booking__form {
  width: 100%;
  display: flex;
  align-items: center;
}
.booking__btn {
  margin-top: 0 !important;
  height: 38px !important;
  margin-left: 30px;
}

.booking__form .dp__pointer {
  background: var(--color-main);
  border: 1px solid #fff;
}
.booking__form .v-field {
  background: var(--color-main);
  border: 1px solid #fff;
}
.booking__form .dp-input {
  padding: 5px 15px !important;
}
.booking__form .v-input__control {
  height: 38px;
}
.booking__form .dp__main {
  max-width: 200px;
  width: 100%;
  margin-right: 25px;
}
.booking__form .dp__input_wrap {
  max-width: 200px;
  width: 100%;
  background: #fff;
  border-radius: 8px;
}
.person-select {
  max-width: 200px !important;
  width: 100%;
}
.person-select .v-input__input {
  height: 38px !important;
}
.v-field__input {
  padding: 6px 15px;
  min-height: 38px;
  height: 38px !important;
  opacity: inherit;
}

.v-field__field {
  height: 38px !important;
}
.person-select .v-input__details {
  display: none;
}
.v-select .v-field .v-field__input > input {
  top: 50%;
  transform: translateY(-50%);
}
.person-select .v-field--active .v-list-item .v-list-item--active {
  background: #1d1d1d !important;
}
.v-list-item .v-list-item-title {
  color: #1d1d1d !important;
}
.v-overlay__scrim {
  display: none;
}
@media (max-width: 600px) {
  .booking__form {
    flex-flow: column;
    margin-top: 20px;
  }
  .person-select {
    max-width: 100% !important;
    margin-top: 15px;
  }

  .booking__form .dp__main {
    max-width: 100%;
    margin-top: 0px;
    margin-right: 0;
  }
  .booking__form .dp__input_wrap {
    max-width: 100%;
    margin-top: 15px;
  }
  .booking__btn {
    width: 100%;
    margin-left: 0;
    margin-top: 15px !important;
  }
}
</style>
