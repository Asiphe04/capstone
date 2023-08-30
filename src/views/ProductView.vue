<template>
  <div class="container d-flex" v-if="product">
    <div class="col-6">
      <img
        :src="product.prodURL"
        :alt="product.prodName"
        class="top-picks-img"
      />
    </div>
    <div class="col-6 mt-5">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        eveniet est molestias, nulla dolorum aperiam nesciunt hic labore natus
        totam sint suscipit nihil, porro, dignissimos illo pariatur ex. Enim,
        perspiciatis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quis
        nobis, fugiat vel iste eveniet, perferendis, ullam amet minus nesciunt
        earum neque quasi voluptas consectetur blanditiis pariatur accusantium
        iure ducimus.
      </p>
    </div>
  </div>
  <!-- <div v-if="product" class="employee-details">
    <div class="img-container">
      <img
        :src="product.prodURL"
        :alt="product.prodName"
        class="top-picks-img"
      />
    </div>

    <h1 class="text-white">
      {{ product.prodName }}<br />R{{ product.amount }}
    </h1>
    <p class="text-white">{{ product.description }}</p>
  </div> -->
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
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
};
</script>
