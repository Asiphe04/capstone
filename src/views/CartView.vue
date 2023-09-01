<template>
  <div>
    <h1>YOUR ITEMS</h1>
    <div v-if="cart && cart.length > 0">
     
      <div v-for="(item, index) in cart" :key="index">
        <h1>{{ item.prodName }}</h1>
        <img :src="item.prodURL" alt="" class="w-25" />
        <h2>Quantity: {{ item.quantity }}</h2>
        <h3>Price: R{{ item.amount }}</h3>

        <button @click="removeFromCart(index)">Remove</button>
      </div>
    
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
      if (index >= 0 && index < this.cart.length) {
        this.$store.commit("removeItemFromCart", index);
      }
    },
  },
};
</script>
