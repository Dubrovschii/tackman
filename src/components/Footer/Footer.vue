<script setup>
import Map from "@/components/Map/Map.vue";
</script>
<template>
  <section class="contant col-sm-12">
    <div class="w100 container__big">
      <div class="col-md-6 col-sm-12 col-white">
        <div class="item">
          <h2 class="item__title">Как добраться</h2>
          <div class="item__descr">
            Скорый электропоезд "Ласточка" довезет Вас до Чусового,где
            производится пересадка на автобусный трансфер до Горнолыжного
            курорта "Такман".
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12 col-black">
        <div class="item">
          <h2 class="item__title">График работы</h2>
          <div class="item__descr col-sm-12">
            <div class="col-sm-6">
              <div class="small-title">Администрация</div>
              <div class="small-descr">Ежедневно с 9:00 до 23:00</div>
            </div>
            <div class="col-sm-6">
              <div class="small-title">Прокат</div>
              <div class="small-descr">Ежедневно с 9:00 до 23:00</div>
            </div>
            <div class="col-sm-6">
              <div class="small-title">Кафе</div>
              <div class="small-descr">Ежедневно с 9:00 до 23:00</div>
            </div>
            <div class="col-sm-6">
              <div class="small-title">Инструкторы</div>
              <div class="small-descr">Ежедневно с 9:00 до 23:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="map-wr">
    <Map />
  </section>
  <section class="contact-invers col-sm-12">
    <div class="w100 container__big">
      <div class="col-md-6 col-sm-12 col-black">
        <div class="item">
          <RouterLink to="/">
            <img src="../assets/icons/logo.svg" alt="" />
          </RouterLink>
          <div class="item__descr">
            Правила пользования услугами курорта Политика в отношении обработки
            персональных данных <br />
            © ООО «Движение» 2023. Все права защищены.
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12 col-white">
        <div class="item">
          <h2 class="item__title">График работы</h2>
          <div class="item__descr">
            <div class="adress">
              618206, Пермский край, г. Чусовой, ул. Мира, 17, оф. 401
            </div>
            <a href="malito:takman59@mail.ru"> takman59@mail.ru </a>

            <a href="tel:+7 (342) 256-95-83">+7 (342) 256-95-83</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.contant {
  display: flex;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(24, 31, 38, 1) 50%,
    rgba(24, 31, 38, 1) 100%
  );
  .col-white,
  .col-black {
    flex: 1;
    padding-top: 80px;
    min-height: 366px;
    .item {
      width: 100%;
      display: flex;
      flex-flow: column;
      margin: 0 auto;
    }
  }

  .col-white {
    .item {
      &__title {
        color: var(--color-third);
      }
      &__descr {
        max-width: 624px;
        width: 100%;
        margin-top: 40px;
        color: var(--color-third);
      }
    }
  }

  .col-black {
    .item {
      padding-left: 80px;
      &__title {
        margin-bottom: 10px;
      }
      .small-title {
        font-size: 18px;
        font-weight: bold;
        line-height: 24px;
        color: var(--color-main);
        margin-top: 10px;
      }
      .small-descr {
        font-size: 18px;
        font-weight: normal;
        line-height: 24px;
        color: var(--color-main);
      }
    }
  }
}

// .yandex-container {
//   height: 500px;
// }
.contact-invers {
  background: linear-gradient(
    90deg,
    rgba(24, 31, 38, 1) 0%,
    rgba(24, 31, 38, 1) 50%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
  .col-white,
  .col-black {
    flex: 1;
    padding-top: 80px;
    min-height: 366px;
    .item {
      width: 100%;
      display: flex;
      flex-flow: column;
      margin: 0 auto;
    }
  }
  .col-white {
    padding-left: 80px;
    .item {
      &__title {
        color: var(--color-third);
      }
      &__descr {
        max-width: 624px;
        width: 100%;
        margin-top: 40px;
        color: var(--color-third);
        display: flex;
        flex-flow: column;
        font-weight: 600;
      }
    }
  }

  .col-black {
    .item {
      &__title {
        margin-bottom: 10px;
      }
      &__descr {
        max-width: 624px;
        width: 100%;
        margin-top: 40px;
        color: var(--color-main);
      }
    }
  }
}
@media (max-width: 1400px) {
  .contant .col-white,
  .contant .col-black {
    padding: 35px 0;
  }
  .contact-invers .col-white,
  .contact-invers .col-black {
    padding: 35px 0;
  }
  .contant .col-black .item {
    padding-left: 25px;
  }
}
@media (max-width: 959px) {
  .contant {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(24, 31, 38, 1) 50%,
      rgba(24, 31, 38, 1) 100%
    );
  }
  .contact-invers {
    background: linear-gradient(
      180deg,
      rgba(24, 31, 38, 1) 0%,
      rgba(24, 31, 38, 1) 50%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 1) 100%
    );
  }
  .contant .col-black .item {
    padding-left: 0px;
  }
  .contact-invers .col-white {
    padding-left: 0;
  }
  .map {
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 0;
  }
}
@media (max-width: 450px) {
  // .contant .col-white,
  // .contant .col-black {
  //   padding: 35px 0;
  // }
}
</style>
