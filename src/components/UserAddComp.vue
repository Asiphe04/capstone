<template>
  <div>
    <div class="container flex-container">
      <label> First Name</label>
      <input
        type="text"
        autocomplete="off"
        required
        name="firstName"
        v-model="firstName"
      />
      <label>Last Name</label>
      <input
        type="text"
        autocomplete="off"
        required
        name="lastName"
        v-model="lastName"
      />
      <label>Age</label>

      <input
        type="number"
        autocomplete="off"
        required
        name="userAge"
        v-model="userAge"
      />

      <label for="gender">Gender</label>
      <select
        required
        type="text"
        id="gender"
        name="gender"
        :placeholder="gender"
        v-model="gender"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <label>Role</label>
      <input
        type="text"
        autocomplete="off"
        required
        name="userRole"
        v-model="userRole"
      />
      <label>Email address</label>
      <input
        type="text"
        autocomplete="off"
        required
        name="emailAdd"
        v-model="emailAdd"
      />
      <label>Password</label>
      <input
        type="text"
        autocomplete="off"
        required
        name="userPass"
        v-model="userPass"
      />
      <label>Profile</label>
      <input
        type="text"
        autocomplete="off"
        required
        name="userProfile"
        v-model="userProfile"
        placeholder="https://i.postimg.cc/BZzhb5bJ/user4-removebg-preview.png"
      />

      <button @click="register" class="btn-submit">Submit</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      userAge: "",
      gender: "",
      userRole: "User",
      emailAdd: "",
      userPass: "",
      userProfile: "https://i.postimg.cc/BZzhb5bJ/user4-removebg-preview.png",
    };
  },
  methods: {
    async register() {
      try {
        this.$store.dispatch("register", {
          firstName: this.firstName,
          lastName: this.lastName,
          userAge: this.userAge,
          gender: this.gender,
          userRole: this.userRole,
          emailAdd: this.emailAdd,
          userPass: this.userPass,
          userProfile: this.userProfile,
        });

        this.$router.push("/admin");
        alert("User has been created");
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>

<style scoped>
label {
  color: white !important;
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
  background-color: #09ff00;
  color: #ffffff;
  text-align: center;
  width: fit-content;
  border-radius: 0.2rem;
  font-size: 1.5rem;
}
</style>
