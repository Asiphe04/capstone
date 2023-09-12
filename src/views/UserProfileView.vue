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
                    width="250"
                  />
                  <div class="mt-3">
                    <h4>{{ user.firstName }} {{ user.lastName }}</h4>
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
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Password</h6>
                  </div>
                  <div class="col-sm-9">
                    {{ user.userPass }}
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

export default {
  methods: {},
  computed: {
    user() {
      return this.$store.state.user;
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
#profile-div {
  height: 340px !important;
}

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
</style>
