<template>
  <div>
    <div class="container flex-container" v-if="user">
      <h1 class="m-5">EDIT PROFILE</h1>
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

                    <button @click="updateUser" class="btn-submit">
                      Confirm Changes
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
                  <div class="col-sm-9 text-start">
                    {{ user.userID }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Name</h6>
                  </div>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      autocomplete="off"
                      required
                      class="mb-0"
                      id="firstName"
                      name="firstName"
                      v-model="user.firstName"
                      :placeholder="user.firstName"
                    />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Surname</h6>
                  </div>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      autocomplete="off"
                      required
                      id="lastName"
                      name="lastName"
                      v-model="user.lastName"
                      :placeholder="user.lastName"
                    />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      autocomplete="off"
                      required
                      id="emailAdd"
                      name="emailAdd"
                      v-model="user.emailAdd"
                      :placeholder="user.emailAdd"
                    />
                  </div>
                </div>

                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Age</h6>
                  </div>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      autocomplete="off"
                      required
                      id="userAge"
                      name="userAge"
                      v-model="user.userAge"
                      :placeholder="user.userAge"
                    />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Role</h6>
                  </div>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      autocomplete="off"
                      required
                      id="userRole"
                      name="userRole"
                      v-model="user.userRole"
                      :placeholder="user.userRole"
                    />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Password</h6>
                  </div>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      autocomplete="off"
                      required
                      id="userPass"
                      name="userPass"
                      v-model="user.userPass"
                      :placeholder="user.userPass"
                    />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Image URL</h6>
                  </div>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      autocomplete="off"
                      required
                      id="userProfile"
                      name="userProfile"
                      v-model="user.userProfile"
                      :placeholder="user.userProfile"
                    />
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
  props: ["id"],
  data() {
    return {
      firstName: "",
      lastName: "",
      userAge: "",
      userRole: "",
      emailAdd: "",
      userPass: "",
      userProfile: "",
    };
  },
  methods: {
    async updateUser() {
      try {
        const payload = {
          userID: this.$route.params.id,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          userAge: this.user.userAge,
          userRole: this.user.userRole,
          emailAdd: this.user.emailAdd,
          userPass: this.user.userPass,
          userProfile: this.user.userProfile,
        };
        await this.$store.dispatch("updateUser", payload);

        // Show SweetAlert success message
        await Swal.fire({
          icon: "success",
          title: "User Updated",
          text: "User has been updated",
        });

        this.firstName = "";
        this.lastName = "";
        this.userAge = "";
        this.userRole = "";
        this.emailAdd = "";
        this.userPass = "";
        this.userProfile = "";

        this.$router.push("/");
      } catch (err) {
        console.error(err);
      }
    },
  },
  computed: {
    user() {
      return this.$store.state.userData;
    },
    //   users() {
    //   return this.$store.state.users;
    // },
    //   userData() {
    //   return this.$store.state.userData;
    // },
    //  userRole() {
    //   return this.$store.state.userRole;
    // },
  },
  mounted() {
    this.$store.dispatch("getUser", this.$route.params.id);
  },
};
</script>

<style scoped>
input {
  width: 100%;
  border: 1px solid var(--secondary-color);
}
.card,
input {
  color: white;
  background: transparent;
}

div {
  color: white;
}
.container {
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
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
</style>
