<template>
  <div
    class="parent-div container d-flex"
    v-if="product"
    :key="product.prodID"
    :product="product"
  >
    <div class="img-div col-6 m-3">
      <img
        :src="product.prodURL"
        :alt="product.prodName"
        class="top-picks-img"
      />
    </div>
    <div class="col-6 mt-5">
      <h1 class="text-start uppercase prodName">{{ product.prodName }}</h1>
      <h3 class="text-start uppercase category">{{ product.category }}</h3>
      <br />
      <p class="desc text-start">
        {{ product.description }}
      </p>
      <h4 class="text-start">R{{ product.amount }}</h4>
      <h5 class="text-end">SIZE GUIDE:</h5>
      <h6 class="text-end">NB: ONLY THIS SIZE IS AVAILABLE</h6>

      <div class="buttons text-start">
        <button @click="addToCart(id)">Add to Cart</button>

        <router-link to="/products">
          <button>Back</button>
        </router-link>
      </div>
    </div>
  </div>
  <SpinnerComp v-else />
</template>
<script>
import Swal from "sweetalert2";
import SpinnerComp from "@/components/SpinnerComp.vue";
export default {
  components: { SpinnerComp },
  computed: {
    product() {
      return this.$store.state.product;
    },
    id() {
      return this.$route.params.id;
    },
    userData() {
      return this.$store.state.userData;
    },
  },

  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  methods: {
    addToCart(prodID) {
     
      if (this.userData && this.userData.userID) {

        this.$store.dispatch("addToCart", {
          userID: this.userData.userID,
          prodID,
        });

        Swal.fire({
          icon: "success",
          background: "#86bbd8",
          color: "white",
          title: "Item Added to Cart",
          text: "The product has been added to your cart.",
          showConfirmButton: false,
          timer: 1500, 
        });
      } else {
        Swal.fire({
          background: "#86bbd8",
          color: "white",
          icon: "error",
          title: "Not Logged In",
          text: "Please log in to add items to your cart.",
        });
      }
    },
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .parent-div {
    flex-direction: column;
  }
  .top-picks-img {
    width: 100% !important;
    height: 250px !important;
  }
  .img-div {
    margin: 0% !important;
    width: 100% !important;
  }
  .prodName {
    font-size: 45px !important;
  }
  h3 {
    font-size: 25px !important;
  }
  .buttons {
    text-align: center !important;
  }

  .col-6 {
    margin-top: 0% !important;
    width: 100%;
  }
}
@media screen and (max-width: 720px) {
  .top-picks-img {
    margin: 0% !important;
    width: 100% !important;
    height: 450px !important;
  }
}
.category {
  color: var(--secondary-color) !important;
}
.desc {
  font-size: 19px;
}

h6 {
  color: rgb(196, 196, 196) !important;
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
button:hover {
  background-color: var(--tertiary-color);
}
.top-picks-img {
  width: 600px;
  height: 600px;
}
h3 {
  text-transform: uppercase !important;
  font-size: 50px;
}
h1 {
  text-transform: uppercase !important;
  font-size: 100px;
}
</style>
