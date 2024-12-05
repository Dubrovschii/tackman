<script setup>
import { ref, watch } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ru } from "date-fns/locale";
import { useApiStore } from "@/stores/ApiStore";

const apiStore = useApiStore();

const dateIn = ref();

const checkCard = () => {
  apiStore.dialogCheckCard = true;
  apiStore.dialog = false;
  apiStore.dialogBuy = false;
};
</script>

<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="apiStore.dialog" max-width="600" v>
      <v-card title="">
        <v-card-actions>
          <v-btn
            @click="
              (apiStore.dialog = true),
                (apiStore.dialogBuy = false),
                (apiStore.dialogCheckCard = false)
            "
            ><b>Пополнение</b>
          </v-btn>
          /
          <v-btn
            @click="
              (apiStore.dialog = false),
                (apiStore.dialogBuy = true),
                (apiStore.dialogCheckCard = false)
            "
            >Покупка
          </v-btn>
          /
          <v-btn @click="checkCard()">Проверить ски-пасс </v-btn>
        </v-card-actions>
        <v-btn
          class="btn-close"
          icon="mdi-close-circle-outline"
          variant="plain"
          @click="apiStore.dialog = false"
        ></v-btn>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12">
              Дата катания

              <VueDatePicker
                v-model="dateIn"
                :format-locale="ru"
                placeholder="Заезд"
                theme="dark"
                :enable-time-picker="false"
                multi-dates
              ></VueDatePicker>
            </v-col>
            <v-col cols="12" sm="12">
              Тариф
              <v-select
                :items="['Будни', 'Выходные']"
                required
                variant="outlined"
                hide-details
              ></v-select>
            </v-col>
            <v-col cols="12" sm="12">
              Возраст
              <v-select
                :items="['Взрослый', 'Детский', 'Льготный', 'Пенсионный 70+']"
                variant="outlined"
                hide-details
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="12">
              Телефон
              <v-text-field
                type="number"
                required
                variant="outlined"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="12">
              Email*
              <v-text-field
                variant="outlined"
                required
                hide-details
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="12">
              Номер карты ски-пасса
              <v-text-field
                required
                variant="outlined"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="12">
              Пополнить на
              <v-text-field
                variant="outlined"
                required
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis"
            >*Подтверждение на обработку данных</small
          >
          <v-checkbox
            label="Согласен(а) с правилами приобретения и использования сертификата"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <div class="pay-icon">
            <div class="icons">
              <img src="@/assets/icons/pay/image 16.png" alt="" />
            </div>
            <div class="icons">
              <img src="@/assets/icons/pay/image 17.png" alt="" />
            </div>
            <div class="icons">
              <img src="@/assets/icons/pay/image 18.png" alt="" />
            </div>
            <div class="icons">
              <img src="@/assets/icons/pay/image 19.png" alt="" />
            </div>
          </div>
        </v-card-actions>

        <v-btn
          color="green"
          text="Оплатить"
          variant="tonal"
          @click="apiStore.dialog = false"
          width="50%"
          class="mx-auto"
        ></v-btn>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
    <v-dialog v-model="apiStore.dialogBuy" max-width="600">
      <v-card title="">
        <v-card-actions>
          <v-btn
            @click="
              (apiStore.dialog = true),
                (apiStore.dialogBuy = false),
                (apiStore.dialogCheckCard = false)
            "
            >Пополнение
          </v-btn>
          /
          <v-btn
            @click="
              (apiStore.dialog = false),
                (apiStore.dialogBuy = true),
                (apiStore.dialogCheckCard = false)
            "
            ><b>Покупка</b>
          </v-btn>
          /
          <v-btn @click="checkCard()">Проверить ски-пасс </v-btn>
        </v-card-actions>
        <v-btn
          class="btn-close"
          variant="plain"
          icon="mdi-close-circle-outline"
          @click="apiStore.dialogBuy = false"
        ></v-btn>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12">
              Дата катания

              <VueDatePicker
                v-model="dateIn"
                :format-locale="ru"
                placeholder="Заезд"
                theme="dark"
                :enable-time-picker="false"
                multi-dates
              ></VueDatePicker>
            </v-col>
            <v-col cols="12" sm="12">
              Тариф
              <v-select
                :items="['Будни', 'Выходные']"
                required
                variant="outlined"
                hide-details
              ></v-select>
            </v-col>
            <v-col cols="12" sm="12">
              Возраст
              <v-select
                :items="['Взрослый', 'Детский', 'Льготный', 'Пенсионный 70+']"
                variant="outlined"
                hide-details
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="12">
              Телефон
              <v-text-field
                type="number"
                required
                variant="outlined"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="12">
              Email*
              <v-text-field
                variant="outlined"
                required
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              ФИО*
              <v-text-field
                variant="outlined"
                required
                hide-details
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="12">
              Пополнить на
              <v-text-field
                variant="outlined"
                required
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis"
            >*Подтверждение на обработку данных</small
          >
          <v-checkbox
            label="Согласен(а) с правилами приобретения и использования сертификата"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <!-- <v-spacer></v-spacer> -->
          <div class="pay-icon">
            <div class="icons">
              <img src="@/assets/icons/pay/image 16.png" alt="" />
            </div>
            <div class="icons">
              <img src="@/assets/icons/pay/image 17.png" alt="" />
            </div>
            <div class="icons">
              <img src="@/assets/icons/pay/image 18.png" alt="" />
            </div>
            <div class="icons">
              <img src="@/assets/icons/pay/image 19.png" alt="" />
            </div>
          </div>
        </v-card-actions>
        <!-- <v-divider></v-divider> -->
        <v-btn
          color="green"
          text="Оплатить"
          variant="tonal"
          @click="apiStore.dialog = false"
          width="50%"
          class="mx-auto"
        ></v-btn>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
    <v-dialog v-model="apiStore.dialogCheckCard" max-width="600">
      <v-card title="">
        <v-card-actions>
          <v-btn
            @click="
              (apiStore.dialog = true),
                (apiStore.dialogBuy = false),
                (apiStore.dialogCheckCard = false)
            "
            >Пополнение
          </v-btn>
          /
          <v-btn @click="apiStore.dialogBuy = true">Покупка </v-btn>
          /
          <v-btn><b>Проверить ски-пасс</b> </v-btn>
        </v-card-actions>
        <v-btn
          class="btn-close"
          variant="plain"
          icon="mdi-close-circle-outline"
          @click="apiStore.dialogCheckCard = false"
        ></v-btn>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12">
              Номер карты ски-пасса
              <v-text-field
                required
                variant="outlined"
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis"
            >*Подтверждение на обработку данных</small
          >
        </v-card-text>

        <v-btn
          color="green"
          text="Проверить"
          variant="tonal"
          @click="apiStore.dialog = false"
          width="50%"
          class="mx-auto"
        ></v-btn>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="scss">
.v-dialog > .v-overlay__content > .v-card > .v-card-actions,
.v-dialog > .v-overlay__content > form > .v-card > .v-card-actions {
  justify-content: center;
}
@media (max-width: 700px) {
  .v-card-actions {
    flex-flow: column;
  }
}
</style>
