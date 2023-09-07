//cart view

<template>
  <div>
    <!-- Display cart contents and total price -->
    <div v-if="products && products.length > 0">Your cart is empty.</div>
    <div v-else>
      <div v-for="product in getCart" :key="product.prodID">
        Name: {{ product.prodName }} - Price: {{ product.amount }} - Quantity:
        {{ product.quantity }}
        <button @click="removeFromCart(product.prodID)">Remove</button>
        <div>Total Price: R{{ cartTotalPrice }}</div>
        <button @click="checkout">Checkout</button>
        <!-- Total Price: ${{ cartTotalPrice }} -->
        <!-- Total Price: ${{ calculateTotalPrice() }} -->
      </div>
    </div>
  </div>
  <!-- </div> -->
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
    checkout() {
      // Redirect to the login page
      this.$router.push("/login");
    },
    removeFromCart(prodID) {
      // Ensure the user is logged in
      if (this.userData && this.userData.userID) {
        // Call the removeFromCart action with userID and prodID
        this.$store.dispatch("removeFromCart", {
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
