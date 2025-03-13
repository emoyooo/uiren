import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import CreatorReg from "@/views/CreatorReg.vue";
import UserReg from "@/views/UserReg.vue";
import Map from "@/views/Map.vue";
import Categories from "@/views/Categories.vue";
import SkillTest from "@/views/SkillTest.vue";

const routes = [{ path: "/skill-test", component: SkillTest }];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/map",
      name: "Map",
      component: Map,
    },
    {
      path: "/profile/:id",
      name: "Profile",
      component: ProfilePage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/register",
      component: RegisterPage,
    },
    {
      path: "/creatorRegister",
      component: CreatorReg,
    },
    {
      path: "/userRegister",
      component: UserReg,
    },
    {
      path: "/categories",
      component: Categories,
    },
    {
      path: "/skill-test",
      component: SkillTest,
    },
  ],
});

router.afterEach((to, from) => {
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach((tab) => {
    if (tab.getAttribute("href") === to.path) {
      tab.classList.add("active-tab");
    } else {
      tab.classList.remove("active-tab");
    }
  });
});

export default router;
