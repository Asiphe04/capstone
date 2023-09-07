<template>
  <div class="cards">
    <div
      class="top-picks-items pro-container col-3 container add {product.category}"
      id="top"
    >
      <img
        :src="product.prodURL"
        :alt="product.prodName"
        class="top-picks-img"
      />

      <h4 class="price">
        {{ product.prodName }} <br />
        R{{ product.amount }}
      </h4>
      <button @click="addToCart(product)" class="btn-add-to-cart btn m-2">
        Add to cart
      </button>

      <router-link :to="{ name: 'product', params: { id: product.prodID } }">
        <button class="btn-see-more btn">See more</button></router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
  methods: {
    addToCart(product) {
      // Check if the addToCart method is being called
      console.log("Adding to cart:", product);

      // Dispatch the addToCart action
       this.$store.dispatch('addToCart', { userId: this.user.userID, productId: product.prodID });
    },
    // ... other methods
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: white;
}
.top-picks-img {
  height: 186px;
  padding: 5px;
  border-radius: 5% !important;
}
.top-picks-items {
  border: 1px solid white;
  margin: 5px;
  padding: 5px;
  text-align: center;
  border-radius: 5%;
  width: 85%;
}

.top-picks-items:hover {
  background: var(--secondary-color);
}
.btn-see-more {
  background: var(--tertiary-color) !important;

  color: white !important;
  border-radius: 7% !important;
  width: 8em;

  border-style: none;
}
.btn-add-to-cart {
  background: #578299;
  color: white !important;
  border-radius: 7% !important;
  width: 8em;

  border-style: none;
}
</style>
