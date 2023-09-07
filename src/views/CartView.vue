<template>
  <div>
    <h1>YOUR ITEMS</h1>
    <div v-if="cart && cart.length > 0">
      <div v-for="(item, index) in cart" :key="index">
        <h1>{{ item.prodName }}</h1>
        <img :src="item.prodURL" alt="" class="w-25" />
        <h2>Quantity: {{ item.quantity }}</h2>
        <h3>Price: R{{ item.amount }}</h3>

</table>
</template>

<script>
   export default {
    Name: 'setCart',
    computed: {
      getCart() {
        console.log(this.$store.state.cart);
        return this.$store.state.cart
      },
      user(){
        return this.$store.state.userData
      }
    },
  },
};
</script>
