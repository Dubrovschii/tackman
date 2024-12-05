import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue';
import Boarding from '@/views/Boarding.vue';
import Servies from '@/views/Servies.vue';
import Event from '@/views/Event.vue';
import Accomandation from '@/views/Accomandation.vue';
import Prices from '@/views/Prices.vue'
import Roading from '@/views/Roading.vue'
import Information from '@/views/Information.vue'
import Summer from '@/views/Summer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/boarding",
      name: "boarding",
      component: Boarding,
    },
    {
      path: "/accomandation",
      name: "accomandation",
      component: Accomandation,
    },
    {
      path: "/servies",
      name: "servies",
      component: Servies,
    },
    {
      path: "/prices",
      name: "prices",
      component: Prices,
    },
    {
      path: "/roading",
      name: "roading",
      component: Roading,
    },
    {
      path: "/information",
      name: "information",
      component: Information,
    },
    {
      path: '/summer',
      name: 'summer',
      component: Summer
    },
    {
      path: "/event",
      name: "event",
      component: Event,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router
