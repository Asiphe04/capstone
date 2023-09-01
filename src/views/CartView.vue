<template>
  <div>
    <h1>This is a cart</h1>
    <div v-if="cart && cart.length > 0">
      <ul>
        <li v-for="(item, index) in cart" :key="index">
          <p>{{ item.prodName }}</p>
          <p>Quantity: {{ item.quantity }}</p>
          <p>Price: R{{ item.amount }}</p>
          <!-- Add a button to remove item from cart -->
          <button @click="removeFromCart(index)">Remove</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Your cart is empty</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    removeFromCart(index) {
      // Ensure that index is within the valid range
      if (index >= 0 && index < this.cart.length) {
        // Remove the item at the specified index from the cart
        this.$store.commit("removeItemFromCart", index);
      }
    },
  },
};
</script>
