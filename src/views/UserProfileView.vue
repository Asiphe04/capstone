<template>
  <div>
    <div class="container flex-container" v-if="user">
     <h1>Name :{{user.firstName}}</h1>
      <h1>Surname: {{user.lastName}}</h1>
<h1>Age: {{user.userAge}}</h1>

 <h1>Role: {{user.userRole}}</h1>
    <h1>Email: {{user.emailAdd}}</h1>

     <h1>Passwrd: {{user.userPass}}</h1>
   <img :src="user.userProfile" alt="" class="w-25">

      
    </div>
    <h1 v-else class="text-white">Error</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {

  methods: {

  },
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

input,
select,
option {
  font-size: 1.25rem;
  padding: 0.5rem 0 0.5rem 1rem;
}

.btn-submit {
  margin-top: 2rem;
  margin-left: auto;
  padding: 0.5rem 1rem;
  background-color: #0033ff;
  color: #ffffff;
  text-align: center;
  width: fit-content;
  border-radius: 0.2rem;
  font-size: 1.5rem;
}
</style>
