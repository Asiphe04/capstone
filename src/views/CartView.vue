<template>
<table v-for="product in getCart" :key="product.id">

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
    mounted() {
      this.$store.dispatch('getCart', this.user.userID)
    }
}
</script>
<style scoped>

</style>
