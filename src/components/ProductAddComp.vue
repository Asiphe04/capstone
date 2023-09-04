<template>
  <div>
    <div class="container flex-container">
      <label>Name</label>
      <input
        type="text"
        autocomplete="off"
        required
        name="prodName"
        v-model="prodName"
      />
      <label>Quantity</label>
      <input
        type="text"
        autocomplete="off"
        required
        name="quantity"
        v-model="quantity"
      />
      <label>Price</label>
      <input
        type="number"
        autocomplete="off"
        required
        name="amount"
        v-model="amount"
      />
      <label>Category</label>
      <input
        type="text"
        autocomplete="off"
        required
        name="category"
        v-model="category"
      />
      <label>Image</label>
      <input
        type="text"
        autocomplete="off"
        required
        name="prodURL"
        v-model="prodURL"
      />
      <label>Description</label>

      <input
        type="text"
        autocomplete="off"
        required
        name="description"
        v-model="description"
      />

      <button @click="addProduct" class="btn-submit">Submit</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      prodName: "",
      quantity: "",
      amount: "",
      category: "",
      prodURL: "",
      description: "",
    };
  },
  methods: {
    async addProduct() {
      try {
        await axios.post("https://capstone-2z3t.onrender.com/products/", {
          prodName: this.prodName,
          quantity: this.quantity,
          amount: this.amount,
          category: this.category,
          prodURL: this.prodURL,
          description: this.description,
        });

        this.productName = "";
        this.quantity = "";
        this.amount = "";
        this.category = "";
        this.prodURL = "";
        this.description = "";

        this.$router.push("/admin");
        alert("Product has been created");
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>

<style scoped>
label {
  color: white;
}
.container {
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
}

label {
  font-size: 1.5rem;
  margin-top: 2.5rem;
}

input {
  font-size: 1.25rem;
  padding: 0.5rem 0 0.5rem 1rem;
}

.btn-submit {
  margin-top: 2rem;
  margin-left: auto;
  padding: 0.5rem 1rem;
  background-color: #09ff00;
  color: #ffffff;
  text-align: center;
  width: fit-content;
  border-radius: 0.2rem;
  font-size: 1.5rem;
}
</style>
