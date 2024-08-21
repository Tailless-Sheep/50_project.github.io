import { createRouter, createWebHashHistory } from "vue-router";

const routers = createRouter({
  history: createWebHashHistory(), // 使用HTML5 History模式，可以去掉URL中的#,
  routes: [
    {
      name: "404",
      path: "/404",
      component: () => import("../components/yang/empty.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
    {
      name: "home",
      path: "/",
      component: () => import("../pages/homePage.vue"),
    },
    {
      name: "P1",
      path: "/P1",
      component: () => import("../components/yang/Project1.vue"),
    },
    {
      name: "P2",
      path: "/P2",
      component: () => import("../components/yang/Project2.vue"),
    },
    {
      name: "P3",
      path: "/P3",
      component: () => import("../components/yang/Project3.vue"),
    },
    {
      name: "P4",
      path: "/P4",
      component: () => import("../components/yang/Project4.vue"),
    },
    {
      name: "P5",
      path: "/P5",
      component: () => import("../components/yang/Project5.vue"),
    },
    {
      name: "P6",
      path: "/P6",
      component: () => import("../components/yang/Project6.vue"),
    },
    {
      name: "P7",
      path: "/P7",
      component: () => import("../components/yang/Project7.vue"),
    },
    {
      name: "P8",
      path: "/P8",
      redirect: "/404",
      component: () => import("../components/yang/Project8.vue"),
    },
    {
      name: "P9",
      path: "/P9",
      // redirect: "/404",
      component: () => import("../components/yang/Project9.vue"),
    },
    {
      name: "P10",
      path: "/P10",
      redirect: "/404",
      component: () => import("../components/yang/Project10.vue"),
    },
    {
      name: "P11",
      path: "/P11",
      redirect: "/404",
      component: () => import("../components/yang/Project11.vue"),
    },
    {
      name: "P",
      path: "/P",
      component: () => import("../components/yang/Project10.vue"),
    },
    {
      name: "P",
      path: "/P",
      component: () => import("../components/yang/Project10.vue"),
    },

    // SGMM's
    {
      name: "ExpandingCards",
      path: "/maoP1",
      component: () => import("../components/mao/1.ExpandingCards.vue"),
    },
    {
      name: "ProcessStep",
      path: "/maoP2",
      component: () => import("../components/mao/2.ProcessStep.vue"),
    },
    {
      name: "RotatingNavigation",
      path: "/maoP3",
      component: () => import("../components/mao/3.RotatingNavigation.vue"),
    },
    {
      name: "HiddenSearch",
      path: "/maoP4",
      component: () => import("../components/mao/4.HiddenSearch.vue"),
    },
    {
      name: "BlurryLoading",
      path: "/maoP5",
      component: () => import("../components/mao/5.BlurryLoading.vue"),
    },
    {
      name: "ScrollAnimation",
      path: "/maoP6",
      component: () => import("../components/mao/6.ScrollAnimation.vue"),
    },
    {
      name: "SplitLandingPage",
      path: "/maoP7",
      component: () => import("../components/mao/7.SplitLandingPage.vue"),
    },
  ],
});

export default routers;
