<template>
  <tr class="table-row">
    <th class="table-head text-white">{{ user.userID }}</th>
    <td class="text-white">{{ user.firstName }}</td>
    <td class="text-white">{{ user.lastName }}</td>
    <td class="text-white">{{ user.userAge }}</td>
    <!-- <td class="text-white">{{ user.Gender }}</td> -->
    <td class="text-white">{{ user.userRole }}</td>
    <td class="text-white emailAdd">{{ user.emailAdd }}</td>
    <td class="text-white password text-start w-25">{{ user.userPass }}</td>
    <!-- <td><img :src="user.userProfile" alt="" class="prodImg" /></td> -->

    <td class="second-table-data">
      <div class="action">
     <router-link :to="{ name: 'user profile', params: { id: user.userID } }"> 
 <button class="btn-edit text-white" >
          <i class="fa fa-eye" aria-hidden="true"></i>
        </button>
     </router-link>
     
        <!-- <button class="btn-delete text-white" @click="deleteUser(user.userID)">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button> -->
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["user"],
  mounted() {
    this.$store.dispatch("getUsers");
  },
  methods: {
    async deleteUser(id) {
      try {
        await this.$store.dispatch("deleteUser", id);
        alert("User deleted successfully");
        // If the delete operation is successful, you can add any necessary code here.
      } catch (error) {
        // Handle the error here, for example, display an error message.
        alert("Error deleting user");
        console.error("Error deleting user:", error);
      }
    },
  },
};
</script>

<style scoped>
.password,
.emailAdd {
  font-size: 16px !important;
}
.prodImg {
  width: 100px;
}
.table-row {
  font-size: 1.125rem;
  border-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 2px;
}

.table-head {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.second-table-data {
  gap: 1.25rem;
  align-items: center;
}
.action {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
}
.btn-edit {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  background-color: #00ff6a;
  color: #fff;
  border-radius: 0.125rem;
}
.btn-delete {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  background-color: #fa0000;
  border-radius: 0.125rem;
}
</style>
