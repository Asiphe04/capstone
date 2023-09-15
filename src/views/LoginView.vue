<template>
  <div class="container d-flex p-4">
    <div class="col-6 img-div">
      <img
        src="https://i.postimg.cc/YCJbkvPZ/c9bl-removebg-preview.png"
        alt=""
      />
    </div>

    <div class="col-6">
      <h1 class="heading">WELCOME BACK !</h1>

      <form @submit.prevent="userLogin">
        <label for="email" class="text-start">ENTER YOUR EMAIL</label>
        <br />
        <input
          type="email"
          name="email"
          v-model="emailAdd"
          placeholder="Enter your email address"
        />
        <br />
        <label for="password" class="text-start">PASSWORD</label>
        <br />
        <input type="password" v-model="userPass" name="password" required />

        <button type="submit" @click="validateForm">Log In</button>
        <p>
          Don't have an account?
          <router-link
            to="/register"
            class="register-link text-decoration-none text-white"
            >Register</router-link
          >
        </p>
      </form>
    </div>
    <br />
  </div>
  <br />
  <br />
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      emailAdd: "",
      userPass: "",
    };
  },
  beforeCreate() {
    this.$store.dispatch("cookieCheck");
  },
  methods: {
    async userLogin() {
      console.log("Reached");
      try {
        const payload = {
          emailAdd: this.emailAdd,
          userPass: this.userPass,
        };
        const resp = await this.$store.dispatch("login", payload);

        if (resp.success && resp.token) {
          console.log("Successful login");
          await Swal.fire({
            icon: "success",
            background: "#86bbd8",
            title: "Logged in Successfully",
            text: "You are now logged in!",
            color: "white",
          });

          this.$router.push("/");
          setTimeout(() => {
            window.location.reload(); // Reload the page
          }, 100);
        } else {
          const errMsg = resp.error || "Unexpected error";
          await Swal.fire({
            icon: "error",
            title: "Login failed",
            text: errMsg,
             background: "#86bbd8",
        color: "white",
          });
        }
      } catch (e) {
        console.error("Error while logging in: ", e);
      }
    },
    validateForm() {
      if (!this.emailAdd || !this.userPass) {
        Swal.fire({
          icon: "error",
          title: "Error",
          background: "#86bbd8",
          color: "white",
          text: "Please fill in all the fields.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
      } else {
        this.userLogin();
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
  form{
    width: 100% !important;
  }
  label{
     font-size: 20px !important;
  }

}
.register-link {
  color: var(--secondary-color) !important;
}
h1 {
  font-size: 80px !important;
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
input {
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
