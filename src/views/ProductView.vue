<template>
  <div
    class="container d-flex"
    v-if="product"
    :key="product.prodID"
    :product="product"
  >
    <div class="col-6 m-3">
      <img
        :src="product.prodURL"
        :alt="product.prodName"
        class="top-picks-img"
      />
    </div>
    <div class="col-6 mt-5">
      <h1 class="text-start uppercase">{{ product.prodName }}</h1>
      <h3 class="text-start uppercase">{{ product.category }}</h3>
      <br />
      <p class="desc text-start">
        {{ product.description }}
      </p>
      <h4 class="text-start">R{{ product.amount }}</h4>
      <h5 class="text-end">SIZE GUIDE:</h5>
      <h6 class="text-end">NB: ONLY THIS SIZE IS AVAILABLE</h6>

      <div class="buttons text-start">
        <button @click="addToCart(id)">Add to Cart</button>
        <!-- <button @click="addToCart(product.prodID)">Add to Cart</button> -->
        <button>Back</button>
      </div>
    </div>
  </div>
  <div v-else class="text-white">Error</div>
</template>
<script>
export default {
  computed: {
    product() {
      return this.$store.state.product;
    },
    id() {
      return this.$route.params.id;
    },
    userData() {
      return this.$store.state.userData;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  methods: {
    addToCart(prodID) {
      // Ensure the user is logged in
      if (this.userData && this.userData.userID) {
        // Call the addToCart action with userID and prodID
        this.$store.dispatch("addToCart", {
          userID: this.userData.userID,
          prodID,
        });
      } else {
        // Handle the case where the user is not logged in, prompt for login, etc.
      }
    },
  },
};
</script>

<style scoped>
.desc {
  font-size: 19px;
}

h6 {
  color: #ff4c4c !important;
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
