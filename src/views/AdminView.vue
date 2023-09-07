<template>
  <div class="container">
    <h1 class="text-white">Products</h1>
    <button class="btn-add">
      <router-link to="/prod/add" class="text-white text-decoration-none">
        Add Product
      </router-link>
    </button>
    <table>
      <thead class="table-header">
        <tr>
          <th class="text-white">ID</th>
          <th class="text-white">Name</th>
          <th class="text-white">Quantity</th>
          <th class="text-white">Price</th>
          <th class="text-white">Category</th>
          <th class="text-white">Image</th>
          <th class="text-white">Description</th>
          <th class="text-white">Actions</th>
        </tr>
      </thead>
      <tbody class="table-body" v-if="products">
        <AdminComp
          v-for="product of products"
          :key="product.prodID"
          :product="product"
        />
      </tbody>

      <SpinnerComp v-else />
    </table>
  </div>
  <div class="container">
    <h1 class="text-white">Users</h1>
    <button class="btn-add">
      <router-link to="/users/add" class="text-white text-decoration-none">
        Add User
      </router-link>
    </button>
    <table>
      <thead class="table-header">
        <tr>
          <th class="text-white">ID</th>
          <th class="text-white">Name</th>
          <th class="text-white">Surname</th>
          <th class="text-white">Age</th>
          <!-- <th class="text-white">Gender</th> -->
          <th class="text-white">Role</th>
          <th class="text-white">Email</th>
          <th class="text-white password">Password</th>
          <!-- <th class="text-white">Image</th> -->
          <th class="text-white">Actions</th>
        </tr>
      </thead>
      <tbody class="table-body" v-if="users">
        <UserAdminComp v-for="user of users" :key="user.userID" :user="user" />
      </tbody>

      <SpinnerComp v-else />
    </table>
  </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
import UserAdminComp from "@/components/UserAdminComp.vue";
import AdminComp from "@/components/ProdAdminComp.vue";

export default {
  components: {
    AdminComp,
    UserAdminComp,
    SpinnerComp,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getUsers");
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 5px;
}

.btn-add {
  margin: 5px;
  margin-left: auto;
  background-color: skyblue;
  border: 1px solid #000000;
  text-align: center;
  border-radius: 0.25rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #000000;
}

.table-header th {
  font-size: 1rem;
  border-bottom: 2px solid #000000;
}

.table-body td {
  padding: 1rem 0;
  font-size: 1.5rem;
  border-bottom: 1px solid #000000;
}

.table-body tr:last-child td {
  border-bottom: none;
}

@media screen and (max-width: 700px) {
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  table {
    width: 100% Vh !important;
    border-collapse: collapse;
    /* border: 2px solid white; */
  }
  .table-header th {
    width: 50px !important;
    font-size: 1rem;
    border-bottom: 2px solid #000000;
  }
  .container {
    display: flex;
    flex-direction: column;
    margin: 5px;
  }
}
</style>
