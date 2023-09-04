<template>
  <br />
  <br />
  <br />
  <UserEditComp :id="product.prodID" />
</template>

<script>
import UserEditComp from "@/components/UserEditComp.vue";

export default {
  components: {
    UserEditComp,
  },
};
</script>
