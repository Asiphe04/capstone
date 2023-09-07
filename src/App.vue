<template>
  <NavBarComp />
  <router-view />
  <FooterComp />
</template>

<script>
import NavBarComp from "./components/NavBarComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  components: { NavBarComp, FooterComp },
  created() {
    const userData = localStorage.getItem("userData");
    if (userData) {
      this.$store.commit("setUserData", JSON.parse(userData));
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sarabun&display=swap");

:root {
  --primary-color: #33658a;
  --secondary-color: #86bbd8;
  --tertiary-color: #2f4858;
  --bgblack: #121212;
  --bgwhite: #ffffff;
  --bggrey: #d9d9d9;
}
::-webkit-scrollbar {
  display: none;
}
#app {
  -o-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  font-family: Sarabun, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  
  text-align: center;
  background-color: var(--primary-color);
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
label {
  color: var(--bgwhite) !important;
}
</style>
