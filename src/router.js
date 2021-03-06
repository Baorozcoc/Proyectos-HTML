import Vue from "vue";
import Router from "vue-router";
import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SignUpForm";
import Login from "./views/Login";
import Home from "./views/Home";
import SmallGoals from "@/components/SmallGoals";
import UserInfo from "./views/UserInfo";
import Plan from "@/components/Plan";
import Sprints from "@/components/Sprints";
import Activities from "@/components/Activities";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/loginform",
    },
    {
      path: "/login",
      alias: "/iniciar-sesion",
      name: "login",
      component: Login,
      children: [
        {
          path: "/loginform",
          name: "loginform",
          component: LoginForm,
        },
        {
          path: "/signup",
          name: "signupform",
          component: SignUpForm,
        },
      ],
    },
    {
      path: "/principal",
      name: "home",
      component: Home,
      children: [
        {
          path: "/Activities",
          name: "Activities",
          component: Activities,
        },
        {
          path: "/Plan",
          name: "Plan",
          component: Plan,
        },
        {
          path: "/smallgoals",
          name: "smallgoals",
          component: SmallGoals,
        },

        {
          path: "/Sprints",
          name: "sprints",
          component: Sprints,
        },
      ],
    },
    {
      path: "/settings",
      name: "settings",
      component: UserInfo,
    },
  ],
});
