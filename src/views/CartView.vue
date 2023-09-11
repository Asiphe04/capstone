<template>
  <div class="container">
    <h1>YOUR ITEMS</h1>
    <table v-if="products && products.length > 0">
      <tr>
        <td colspan="4">Your cart is empty.</td>
      </tr>
    </table>
    <table v-else>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in getCart" :key="product.prodID">
          <td><img :src="product.prodUrl" alt="" class="w-25" /></td>
          <td>{{ product.prodName }}</td>
          <td>R{{ product.amount }}</td>
          <td>{{ product.quantity }}</td>
          <td>
            <button @click="removeFromCart(product.cartID)">Remove</button>
          </td>
        </tr>
      </tbody>

      <button>
        <router-link to="/checkout" class="text-white text-decoration-none"
          >Checkout</router-link
        >
      </button>
    </table>
  </div>
</template>

<script>
export default {
  Name: "setCart",
  computed: {
    getCart() {
      console.log(this.$store.state.cart);
      return this.$store.state.cart;
    },
    user() {
      return this.$store.state.userData;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },

  mounted() {
    this.$store.dispatch("getCart", this.user.userID);
  },
  methods: {
    removeFromCart(cartID) {
      const userID = this.user.userID;

      this.$store
        .dispatch("removeFromCart", { userID, cartID })
        .then(() => {})
        .catch((error) => {
          console.error("Error removing item from cart:", error);
        });
    },
  },
};
</script>
<style scoped>
.container {
  height: 80vh;
}
th {
  color: white;
}
td {
  color: white;
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
</style>
