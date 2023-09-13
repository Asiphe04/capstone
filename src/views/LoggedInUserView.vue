<template>
  <div>
    <div class="container flex-container" v-if="user">
      <h1 class="m-5">USER PROFILE</h1>
      <div class="main-body">
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="card" id="profile-div">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    :src="user.userProfile"
                    alt="Admin"
                    class="rounded-circle"
                    width="205"
                  />
                  <div class="mt-3">
                    <h4>{{ user.firstName }} {{ user.lastName }}</h4>
                    <router-link
                      :to="{
                        name: 'user edit',
                        params: { id: userData.userID },
                      }"
                    >
                      <button>Edit Account</button></router-link
                    >

                    <button class="btn-delete" @click="deleteUser(user.userID)">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">ID</h6>
                  </div>
                  <div class="col-sm-9">
                    {{ user.userID }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Name</h6>
                  </div>
                  <div class="col-sm-9">
                    {{ user.firstName }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Surname</h6>
                  </div>
                  <div class="col-sm-9">{{ user.lastName }}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Gender</h6>
                  </div>
                  <div class="col-sm-9">{{ user.gender }}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9">{{ user.emailAdd }}</div>
                </div>

                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Age</h6>
                  </div>
                  <div class="col-sm-9">{{ user.userAge }}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Role</h6>
                  </div>
                  <div class="col-sm-9">
                    {{ user.userRole }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
    <h1 v-else class="text-white">Error</h1>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  props: ["user"],
  methods: {
    async deleteUser(id) {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
          await this.$store.dispatch("deleteUser", id);
          Swal.fire("Deleted!", "User has been deleted.", "success");
          // If the delete operation is successful, you can add any necessary code here.
        }
      } catch (error) {
        // Handle the error here, for example, display an error message.
        Swal.fire("Error", "Error deleting user.", "error");
        console.error("Error deleting user:", error);
      }
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    userData() {
      return this.$store.state.userData;
    },
    userRole() {
      return this.$store.state.userRole;
    },
  },
  mounted() {
    // Fetch user data from the store if not already loaded
    if (!this.user) {
      this.$store.dispatch("getUser", this.$route.params.id);
    }
  },
};
</script>

<style scoped>
.card {
  background: transparent;
}
label,
div {
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

input,
select,
option {
  font-size: 1.25rem;
  padding: 0.5rem 0 0.5rem 1rem;
}
button {
  margin: 0.3em;
  /* width: 5em; */
  position: relative;
  height: 2.5em;
  border: 3px ridge var(--secondary-color);
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
}
button:hover {
  background: var(--secondary-color);
}
.btn-delete:hover {
  background: red;
}
</style>
