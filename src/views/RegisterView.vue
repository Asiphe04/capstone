<template>
  <div class="container d-flex p-4">
    <div class="col-6 img-div">
      <img
        src="https://i.postimg.cc/YCJbkvPZ/c9bl-removebg-preview.png"
        alt=""
      />
    </div>
    <div class="col-6">
      <h1 class="heading">WELCOME TO CLOUD 9 SUPERSTORE!</h1>

      <form class="row d-flex" @submit.prevent="register">
        <div class="col-6">
          <label for="firstName" class="text-start">First Name:</label>
          <input type="text" placeholder="eg. Asiphe" v-model="firstName" />
          <label for="lastname" class="text-start">Surname:</label>
          <input type="text" placeholder="eg. Ndimlana" v-model="lastName" />
          <label for="role" class="text-start">Role:</label>
          <input type="text" placeholder="eg. Admin" v-model="userRole" />
          <label for="text" class="text-start">Profile URL</label>

          <input
            type="text"
            placeholder="https://i.postimg.cc/Cx0fdCZw/C12-Asiphe-Ndimlana-3.jpg"
            v-model="userProfile"
          />
        </div>
        <div class="col-6">
          <label for="gender">Gender</label>
          <select
            type="text"
            id="gender"
            name="gender"
            :placeholder="gender"
            v-model="gender"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label for="email" class="text-start">EMAIL:</label>

          <input
            type="email"
            placeholder="eg. asiphendimlana40@gmail.com"
            v-model="emailAdd"
          />

          <label for="age" class="text-start">Age:</label>
          <input type="number" placeholder="eg. 19" v-model="userAge" />
          <label for="password" class="text-start">PASSWORD</label>

          <input type="password" v-model="userPass" />
        </div>
        <button class="submit">Sign Up</button>
      </form>

      <p class="account">
        Have an account?
        <router-link
          to="/login"
          class="register-link text-decoration-none text-white"
          >Log in</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
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
      // Validate if all required fields are filled
      if (
        !this.firstName ||
        !this.lastName ||
        !this.userAge ||
        !this.gender ||
        !this.emailAdd ||
        !this.userPass ||
        !this.userProfile
      ) {
        await Swal.fire({
          icon: "error",
          background: "#86bbd8",
          color: "white",
          title: "Error",
          text: "Please fill in all required fields.",
        });
        return;
      }

      try {
        const resp = await this.$store.dispatch("register", {
          firstName: this.firstName,
          lastName: this.lastName,
          userAge: this.userAge,
          gender: this.gender,
          userRole: this.userRole,
          emailAdd: this.emailAdd,
          userPass: this.userPass,
          userProfile: this.userProfile,
        });
        if (resp.success) {
          await Swal.fire({
            icon: "success",
            background: "#86bbd8",
            color: "white",
            title: "Registration successful",
            text: "CONGRATULATIONS, YOU ARE NOW REGISTERED! Please Login",
          });
        } else {
          await Swal.fire({
            icon: "error",
            title: "Registration failed",
            text: resp.error || "Unexpected error",
          });
        }
        this.$router.push("/login");
      } catch (e) {
        // Display Axios error in SweetAlert
        await Swal.fire({
          icon: "error",
          background: "#86bbd8",
          color: "white",
          title: "Registration failed",
          text: e.response?.data?.error || "Unexpected error", // Access the error message from Axios response
        });
      }
    },
  },
};
</script>
<style scoped>
@media (max-width: 768px) {
  .col-6{
    width: 100% !important;
  }
 
  
  .img-div{
display: none;
  }
   .heading{
     font-size: 25px !important;
  }
    label{
     font-size: 20px !important;
  }
  }

.register-link {
  color: var(--secondary-color) !important;
}
h1 {
  font-size: 39px !important;
}
button {
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge var(--secondary-color);
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  margin: 14px;
}
button:hover {
  background-color: var(--tertiary-color);
}
input,
select,
option {
  width: 100%;
  padding: 14px 12px;
  border-radius: 6px;
  border: 2px solid var(--text-color);
  color: var(--title-color);
  font-size: var(--smaller-font-size);
  font-weight: var(--font-medium);
  transition: border 0.4s;
}
label {
  display: block;
  margin: 5px;
  font-size: 29px;
}
</style>
