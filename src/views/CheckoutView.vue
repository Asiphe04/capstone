<template>
  <div class="container d-flex">
    <div class="col-6 payment">
      <h1 class="heading">CONFIRM YOUR PAYMENT</h1>
      <div class="first-row">
        <div class="owner">
          <h3>Owner</h3>
          <div class="input-field">
            <input type="text" required ref="ownerInput" />
          </div>
        </div>
        <div class="cvv">
          <h3>CVV</h3>
          <div class="input-field">
            <input type="password" required ref="cvvInput" />
          </div>
        </div>
      </div>
      <div class="second-row">
        <div class="card-number">
          <h3>Card Number</h3>
          <div class="input-field">
            <input type="number" required ref="cardNumberInput" />
          </div>
        </div>
      </div>
      <div class="third-row mb-2">
        <h3>Expiry Date</h3>
        <div class="selection">
          <div class="date">
            <select name="months" id="months">
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="Jun">Jun</option>
              <option value="Jul">Jul</option>
              <option value="Aug">Aug</option>
              <option value="Sep">Sep</option>
              <option value="Oct">Oct</option>
              <option value="Nov">Nov</option>
              <option value="Dec">Dec</option>
            </select>
            <select name="years" id="years">
              <option value="2020">2029</option>
              <option value="2019">2028</option>
              <option value="2018">2027</option>
              <option value="2017">2026</option>
              <option value="2016">2025</option>
              <option value="2015">2024</option>
            </select>
          </div>
         
        </div>
      </div>

      <button @click="checkout" class="m-2" type="submit">Pay Now</button>
      <h5>Or</h5>
      <button class="m-2" @click="paycash">Pay on delivery</button>
    </div>
    <div class="col-6 cart-iems">
      <h1>YOUR ITEMS</h1>
      <table v-if="products && products.length > 0">
        <tr>
          <td colspan="4">Your cart is empty.</td>
        </tr>
      </table>
      <table v-else>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
         
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in getCart" :key="product.prodID">
            <td><img :src="product.prodUrl" alt="" class="w-25" /></td>
            <td class="w-50">{{ product.prodName }}</td>
            <td>R{{ product.amount }}</td>
            <!-- <td>{{ product.quantity }}</td> -->
          </tr>
        </tbody>
      </table>
      <div class="text-white">
        <h1 class ="total-price">Total Price: R {{ cartTotalPrice }}</h1>
      </div>
      <router-link to="/cart">
        <button>Edit Items</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
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
    async paycash() {
      const userID = this.user.userID;

      try {
        await this.$store.dispatch("clearCart", { userID });

        // Show a SweetAlert for a successful purchase
        Swal.fire({
          title: "Thank you for your purchase!",
          text: "Please be ready with your cash when the diver arrives in 3-4 working days",
          background: "#86bbd8",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          // Redirect to the login page after clicking OK
          this.$router.push("/cart");
        });
      } catch (error) {
        console.error("Error clearing cart:", error);
      }
    },
    async checkout() {
      const ownerInput = this.$refs.ownerInput.value;
      const cvvInput = this.$refs.cvvInput.value;
      const cardNumberInput = this.$refs.cardNumberInput.value;

      // Perform custom validation
      if (!ownerInput || !cvvInput || !cardNumberInput) {
        // Display a SweetAlert error message
        Swal.fire({
          background: "#33658a",
          color: "white",
          icon: "error",
          title: "Error",
          text: "Please fill in all required fields before proceeding.",
        });
        return; // Prevent form submission
      }

      const userID = this.user.userID;

      try {
        await this.$store.dispatch("clearCart", { userID });

        // Show a SweetAlert for a successful purchase
        Swal.fire({
          title: "Thank you for your purchase!",
          color: "white",
          text: "Your delivery will arrive in 3-4 working days",
          background: "#86bbd8",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          // Redirect to the login page after clicking OK
          this.$router.push("/cart");
        });
      } catch (error) {
        console.error("Error clearing cart:", error);
      }
    },
    removeFromCart(cartID) {
      const userID = this.user.userID;

      this.$store
        .dispatch("removeFromCart", { userID, cartID })
        .then(() => {})
        .catch((error) => {
          console.error("Error removing item from cart:", error);
        });
    },
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .heading{
    font-size: 23px !important;
  }
  .cards{
    display: none;
  }
  .total-price{
    font-size: 18px !important;
  }
   .col-6 {
    width: 100%;
    }
  .container{
    flex-direction: column;
  }
.cart-iems{
 order: 1;
}
.payment{
order: 2;
}
}

th,
td {
  color: white;
}
.container {
  
  display: flex;

  padding: 40px;
  justify-content: space-around;
}

.container h1 {
  text-align: center;
}

.first-row {
  display: flex;
}

.owner {
  width: 100%;
  margin-right: 40px;
}

.input-field {
  border: 1px solid #999;
}

.input-field input {
  width: 100%;
  border: none;
  outline: none;
  padding: 10px;
}

.selection {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.selection select {
  padding: 10px 20px;
}

button {
  border-radius: 0.3em;
  border: none;
  background-color: var(--tertiary-color);
  color: white;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px;
  font-size: 18px;
  transition: 0.5s;
}

button:hover {
  background-color: var(--secondary-color);
}

.cards img {
  width: 100px;
}
</style>
