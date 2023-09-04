<template>
  <tr class="table-row">
    <th class="table-head text-white">{{ user.userID }}</th>
    <td class="text-white">{{ user.firstName }}</td>
    <td class="text-white">{{ user.lastName }}</td>
    <td class="text-white">{{ user.userAge }}</td>
    <!-- <td class="text-white">{{ user.Gender }}</td> -->
    <td class="text-white">{{ user.userRole }}</td>
    <td class="text-white emailAdd">{{ user.emailAdd }}</td>
    <td class="text-white password">{{ user.userPass }}</td>
    <!-- <td><img :src="user.userProfile" alt="" class="prodImg" /></td> -->

    <td class="second-table-data">
      <div class="action">
        <button class="btn-edit">
          <router-link :to="{ name: 'user edit', params: { id: user.userID } }">
            Edit
          </router-link>
        </button>
        <button class="btn-delete" @click="deleteUser(user.userID)">
          Delete
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
import axios from "axios";

export default {
  props: ["user"],
  methods: {
    async deleteUser(id) {
      try {
        await axios.delete(`https://nodejseomp.onrender.com/users/${id}`);
        this.$store.dispatch("getUsers");
        alert("User has been deleted");
      } catch (err) {
        alert(err);
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
