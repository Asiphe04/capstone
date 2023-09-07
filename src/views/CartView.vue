//cart view

<template>
  <div>
     <h1>YOUR ITEMS</h1>
    <div v-if="products && products.length > 0" >Your cart is empty.</div>
    <div v-else>
      <div v-for="product in getCart" :key="product.prodID">
      
       
        <img :src="product.prodUrl" alt="" class="w-25" />
        <h4>Name: {{ product.prodName }}</h4>
        <p>Price: R{{ product.amount }}</p>
        <p>Quantity: {{ product.quantity }}</p>
        <!-- <h6>Total Price: R{{ cartTotalPrice }}</h6> -->
      <!-- <button @click="removeFromCart(product)">Debug Product</button> -->
      <!-- <button @click="console.log(product)">Debug Product</button> -->
      <button @click="removeFromCart(product)">Remove</button>

    <!-- <button @click="removeFromCart({ prodID: product.prodID, userID: user.userID })">Remove</button> -->






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
removeFromCart(product) {
  console.log("Product:", product);
  console.log("Product's prodID:", product.prodID);
    this.$store.dispatch('removeFromCart', { prodID: product.prodID, userID: this.user.userID });
  },

    checkout() {
      // Redirect to the login page
      this.$router.push("/login");
    },

  },
};
</script>
<style scoped>
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
