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
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap");

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
  font-family: "Inter", sans-serif, bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--primary-color);
}
h1,
h2,
h3,
h4,
h5,
h6,
label {
  color: var(--bgwhite) !important;
}

/* 
nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
