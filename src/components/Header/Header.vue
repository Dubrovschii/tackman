<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";
import { useApiStore } from "@/stores/ApiStore";

const route = useRoute();
const mobmenu = ref(false);

const apiStore = useApiStore();
const emit = defineEmits();

const toggleDialog1 = () => {
  apiStore.dialog = true;
};
const toggleDialog = (dialog) => {
  toggleDialog1(dialog);
};
const openMenu = () => {
  mobmenu.value = !mobmenu.value;
  const menuElement = document.getElementById("mobmenu");
  if (mobmenu.value === true) {
    menuElement.classList.remove("dn");
  } else {
    menuElement.classList.add("dn");
  }
};

if (document.querySelector("body")) {
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      header.classList.add("boxshadow");
    } else {
      header.classList.remove("boxshadow");
    }
  });
}
const links = [
  { path: "/boarding", name: "Катание" },
  { path: "/accomandation", name: "Проживание" },
  { path: "/servies", name: "Услуги" },
  { path: "/prices", name: "Цены" },
  { path: "/roading", name: "Как добраться" },
  { path: "/information", name: "Информация" },
  {
    path: "/summer",
    name: "Лето",
    // src: "https://www.takman.ru/assets/img/sun.svg",
  },
];
const isActive = (path) => {
  return route.path === path;
};
</script>

<template>
  <div class="overlay" id="overlay"></div>
  <header class="header">
    <div class="container__big">
      <div class="header__wrap">
        <div class="header__logo">
          <RouterLink to="/">
            <img src="../../assets/icons/logo.svg" alt="" />
          </RouterLink>
        </div>
        <div class="header__link_wrap">
          <div
            class="header__link"
            v-for="link in links"
            :key="link.path"
            :class="{ pageactive: isActive(link.path) }"
          >
            <RouterLink :to="link.path"
              >{{ link.name }}
              <span v-if="link.src"> <img :src="link.src" alt="" /> </span
            ></RouterLink>
          </div>
        </div>
        <div class="header__social">
          <a href="">
            <img src="../../assets/icons/social/vk-icon-white.svg" alt="" />
          </a>
          <a href="">
            <img
              src="../../assets/icons/social/whatsapp-icon-white.svg"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="../../assets/icons/social/instagram-icon-white.svg"
              alt=""
            />
          </a>
        </div>
        <div class="header__btn">
          <v-btn
            variant="outlined"
            color="#fff"
            height="52px"
            width="177px"
            @click="toggleDialog()"
          >
            Купить онлайн
          </v-btn>
        </div>
        <div class="burger" id="burger" @click="openMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
  <section class="box box-mobmenu mobmenu dn" id="mobmenu" :model="mobmenu">
    <div class="mobmenu__mobile-menu">
      <div class="mobmenu__header">
        <button class="mobmenu__header_btn" @click="openMenu()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"
              fill="#f3f3f3"
            />
          </svg>
        </button>

        <div class="header__link">
          <RouterLink to="/boarding">Катание</RouterLink>
        </div>
        <div class="header__link">
          <RouterLink to="/accomandation">Проживание</RouterLink>
        </div>
        <div class="header__link">
          <RouterLink to="/servies">Услуги</RouterLink>
        </div>
        <div class="header__link">
          <RouterLink to="/prices">Цены</RouterLink>
        </div>
        <div class="header__link">
          <RouterLink to="/roading">Как добраться </RouterLink>
        </div>
        <div class="header__link">
          <RouterLink to="/information">Информация</RouterLink>
        </div>
        <div class="header__link">
          <RouterLink to="/summer"
            >Лето
            <span><img src="../../assets/icons/sun-icon.svg" alt="" /></span
          ></RouterLink>
        </div>
      </div>
      <div class="mobmenu__social">
        <a href="">
          <img src="../../assets/icons/social/vk-icon-white.svg" alt="" />
        </a>
        <a href="">
          <img src="../../assets/icons/social/whatsapp-icon-white.svg" alt="" />
        </a>
        <a href="">
          <img
            src="../../assets/icons/social/instagram-icon-white.svg"
            alt=""
          />
        </a>
      </div>
      <div class="mobmenu__btn">
        <v-btn variant="outlined" color="#fff" height="52px" width="177px">
          Купить онлайн
        </v-btn>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
@keyframes slide-in {
  from {
    transform: translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}
.boxshadow {
  background: #181f26;
  backdrop-filter: blur(20px);
  transition: 0.6s;
  box-shadow: -2px 1px 10px 1px rgba(0, 0, 0, 0.1);
}
.header {
  position: fixed;
  z-index: 6;
  width: 100%;

  &__wrap {
    display: flex;
    align-items: center;
    padding: 16px 0px;
    justify-content: space-between;
  }
  &__link_wrap {
    display: flex;
    align-items: center;

    margin-left: 60px;
  }
  &__start {
    display: flex;
    align-items: center;
  }
  &__logo {
    width: 175px;
    height: 64px;
    a {
      width: 100%;
    }
  }
  &__link {
    color: var(--color-main);
    font-size: clamp(15px, 1vw, 18px);
    font-weight: 400;
    line-height: 24px;
    padding: 0 20px;
    position: relative;
  }
  &__link {
    a:hover {
      margin-bottom: -2px;
      transition: 0.4s all;
      transition: 0.4s all;
      transform: translateX(-50%);
    }
    a::after {
      content: "";
      display: block;
      border-bottom: 1px solid #fff;
      margin-top: 2px;
      transform: translateX(-70%);
      opacity: 0;
      transition: transform 0.3s ease, opacity 0.3s ease;
      width: 75%;
    }

    a:hover::after {
      transform: translateX(0%);
      opacity: 1;
      animation: slide-in 0.3s forwards;
    }
  }
  &__social {
    // margin-left: 135px;
    max-width: 170px;
    width: 100%;
    display: flex;
    align-items: center;
    a {
      width: 36px;
      height: 36px;
      margin: 0 17px;
      display: block;
      position: relative;
      img {
        position: absolute;
      }
    }
  }
  &__btn {
    margin-left: 63px;
  }
}

.burger {
  display: block;
  padding: 5px;
}

.mobmenu__header_btn {
  cursor: pointer;
  border: none;
  background: none;
  svg {
    width: 25px;
    height: 25px;
  }
}
.dn {
  display: none;
}
.pageactive {
  color: #808080;
  border: 1px solid #f5f5f5;
  border-radius: 8px;
  background: #f3f3f3;
}
@media (max-width: 1300px) {
  .header__btn button {
    width: 160px !important;
  }
  .header__link {
    padding: 0 8px;
  }
  .header__social {
    max-width: 110px;
  }
  .header__social a {
    width: 25px;
    height: 25px;
    margin: 0 5px;
    img {
      width: 100%;
    }
  }
  .header__btn {
    margin-left: 4px !important;
  }
}
@media (min-width: 1201px) {
  .mobmenu {
    display: none;
  }
  .burger {
    display: none;
  }
}
@media (max-width: 1650px) {
  .header__link_wrap {
    margin-left: 15px;
  }
  .header__btn {
    margin-left: 20px;
  }
  .header__link {
    padding: 0 10px;
  }
}
@media (max-width: 1200px) {
  .header__link_wrap {
    display: none;
  }
  .header__wrap {
    justify-content: space-between;
  }
  .burger:hover {
    cursor: pointer;
  }
  .burger span {
    content: "";
    width: 30px;
    height: 2px;
    display: block;
    background-color: var(--color-main);
    margin-bottom: 5px;
    transition: 0.4s ease-in-out all;
  }
  .burger span:last-child {
    margin-bottom: 0;
  }
  .mobmenu {
    &__mobile-menu {
      display: block;
      position: fixed;
      background: var(--color-second);
      max-width: 50vw;
      width: 100%;
      top: 0px;
      right: 0px;
      z-index: 100;
      max-height: 100%;
      box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
        0 30px 60px -30px rgba(0, 0, 0, 0.3);
      animation: mobmenuin 0.3s;
      max-height: 100vh;
      height: 100%;
      z-index: 300;
      @keyframes mobmenuin {
        0% {
          transform: translateX(500px);
        }
        25% {
          transform: translateX(250px);
        }
        50% {
          transform: translateX(125px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }
    &__header {
      margin-top: 100px;
      &_btn {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 20;
      }
    }

    &__list {
      display: flex;
      flex-flow: column;
      align-items: center;
      max-width: 100%;
      margin-left: 20px;
      height: 100%;
    }
  }
  .header__btn {
    position: absolute;
    right: 80px;
  }
  .header__social {
    position: absolute;
    right: 280px;
  }
}
@media (min-width: 601px) {
  .mobmenu__mobile-menu .mobmenu__social {
    display: none;
  }
  .mobmenu__mobile-menu .mobmenu__btn {
    display: none;
  }
}
@media (max-width: 600px) {
  .header .header__social {
    display: none;
  }
  .header .header__btn {
    display: none;
  }
  .mobmenu__social {
    margin-top: 25px;
    padding-left: 15px;
    a {
      padding: 0 5px;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  .mobmenu__mobile-menu {
    max-width: 90%;
  }
  .mobmenu__btn {
    padding-left: 15px;
    margin-top: 20px;
  }
  .header__link {
    padding-left: 15px;
    margin-top: 10px;
  }
}
</style>
