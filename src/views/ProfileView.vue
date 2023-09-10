<template>
  <div
    class="container d-flex"
    v-if="user"
    :key="user.userID"
    :user="user"
  >
    <div class="col-6 m-3">
      <img
        :src="user.userID"
        :alt="user.firstName .lastName"
        class="top-picks-img"
      />
    </div>
    <div class="col-6 mt-5">
      <h1 class="text-start uppercase">{{ user.firstName }}</h1>
      <h3 class="text-start uppercase">{{ user.userRole }}</h3>
      <br />
    </div>
  </div>
  <div v-else class="text-white">Error</div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    id() {
      return this.$route.params.id;
    },
    // userData() {
    //   return this.$store.state.userData;
    // },
  },
  // mounted() {
  //   this.$store.dispatch("getProduct", this.$route.params.id);
  // },
  mounted() {
    this.$store.dispatch("getUser", this.id);
  },
  methods: {

  },
};
</script>

<style scoped>
.desc {
  font-size: 19px;
}

h6 {
  color: rgb(196, 196, 196) !important;
}
button {
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge var(--secondary-color);
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  margin: 14px;
}
.top-picks-img {
  width: 600px;
  height: 600px;
}
h3 {
  text-transform: uppercase !important;
  font-size: 50px;
}
h1 {
  text-transform: uppercase !important;
  font-size: 100px;
}
</style>
