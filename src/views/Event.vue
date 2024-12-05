<script setup>
import { ref } from "vue";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>

<template>
  <Header />
  <section class="event">
    <div class="container__big">
      <div class="content event__content">
        <h1 class="title event__title">Горнолыжный курорт «Такман»</h1>
        <div class="descr event__descr">
          <span>Наши мероприятия.</span>
          <br />
          <span>Каждые выходные — события! Приходите, будет интересно!</span>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
<style lang="scss">
.event {
  background: url("../assets/bg/event-bg.png");
  background-size: cover;
  background-position: 70%;
  min-height: 100vh;
  display: flex;
}
@media (max-width: 600px) {
  .event {
    min-height: 600px;
    height: 100%;
  }
}
</style>
