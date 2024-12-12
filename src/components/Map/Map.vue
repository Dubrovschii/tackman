<script setup>
import { ref, onMounted } from "vue";

function loadYMaps() {
  return new Promise((resolve, reject) => {
    if (typeof ymaps !== "undefined") {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=48903a31-52d3-427c-abf7-68fcf31270b9";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

onMounted(async () => {
  await loadYMaps();
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map(
      "map",
      {
        center: [58.352873, 57.77389],
        zoom: 9,
        controls: [],
      },
      {
        searchControlProvider: "yandex#search",
      }
    );

    // Текущая метка
    var placemark = new ymaps.Placemark(myMap.getCenter(), {
      balloonContentHeader:
        '<a href = "#">Горнолыжный курорт</a><br>' +
        '<span class="description">"Такман"</span>',
      balloonContentBody:
        '<a href="tel:+7-960-***-**-**">+7 (960) ***-**-**</a><br/>',
      //  +
      // "<b>Ближайшие сеансы</b> <br/> Сеансов нет.",
      balloonContentFooter:
        'Информация предоставлена:<br/>OOO "Горнолыжный курорт" "Такман"',
      hintContent: "Такман",
    });

    myMap.geoObjects.add(placemark);
    placemark.balloon.open();

    // Новая метка для ЖД вокзала Перми
    var permStationCoordinates = [58.000179, 56.232574]; // координаты ЖД вокзала Перми
    var permStationPlacemark = new ymaps.Placemark(permStationCoordinates, {
      balloonContent: "Железнодорожный вокзал Пермь",
      hintContent: "ЖД Вокзал Пермь",
    });

    myMap.geoObjects.add(permStationPlacemark);

    // Прокладываем маршрут
    var multiRoute = new ymaps.multiRouter.MultiRoute({
      referencePoints: [
        myMap.getCenter(), // текущая позиция
        permStationCoordinates, // координаты ЖД вокзала Перми
      ],
      params: {
        routingMode: "auto", // можно выбрать 'auto', 'masstransit', 'pedestrian'
      },
    });

    myMap.geoObjects.add(multiRoute);
  }
});
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  width: 100%;
  height: 500px;
  /* margin-top: 365px; */
  display: flex;
}
.yandex-balloon {
  height: 200px;
  width: 200px;
}
@media (max-width: 800px) {
  #map {
    width: 100%;
    /* height: auto; */
    display: flex;
    margin-top: 0;
  }
}
.ymaps-2-1-79-map {
  width: 100%;
  height: 100%;
}
</style>
