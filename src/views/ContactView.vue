<template>
  <h1 class="m-2">CONTACT US</h1>
  <div class="container d-flex">
    <div class="contact-form col-6 m-4 form-slide-in">
      <span class="title text-white">Leave a Message</span>
      <form
        class="form"
        action="https://formspree.io/f/mzblbdga"
        method="POST"
        @submit.prevent="submitForm"
      >
        <div class="group">
          <input placeholder="‎" type="text" v-model="formData.name" />
          <label for="name">Name</label>
        </div>
        <div class="group">
          <input
            placeholder="‎"
            type="email"
            id="email"
            name="email"
            v-model="formData.email"
          />
          <label for="email">Email</label>
        </div>
        <div class="group">
          <textarea
            placeholder="‎"
            id="comment"
            name="comment"
            rows="5"
            v-model="formData.comment"
          ></textarea>
          <label for="comment">Message</label>
        </div>
        <button type="submit">Send!</button>
        <!-- <button>Clear fields</button> -->
      </form>
    </div>
    <div class="col-6 m-4 contact-div image-slide-in">
      <img
        src="https://i.postimg.cc/3RrKFWwd/c91.jpg"
        alt=""
        id="contact-img"
      />
      <h3 class="m-2 text-center">FOLLOW US:</h3>
      <div class="social-icons">
        <a
          href="https://www.facebook.com/profile.php?id=100089087082905"
          target="_blank"
          ><i class="fa-brands fa-facebook" id="Facebook"></i
        ></a>
        <a href="https://twitter.com/ndim_asiphe" target="_blank"
          ><i class="fa-brands fa-twitter" id="Twitter"></i
        ></a>
        <a
          href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B8h9wTBRuSt2U75xVavKEoA%3D%3D"
          target="_blank"
          ><i class="fa-brands fa-linkedin" id="linkedIn"></i
        ></a>
        <a href="https://github.com/Asiphe04" target="_blank"
          ><i class="fa-brands fa-github" id="Github"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        comment: "",
      },
    };
  },
  methods: {
    async submitForm() {
      // Validate the form data here
      if (
        !this.formData.name ||
        !this.formData.email ||
        !this.formData.comment
      ) {
        await Swal.fire({
          icon: "error",
          title: "Error",
          color: "white",
          background: "#86bbd8",
          text: "Please fill in all fields",
        });
        return;
      }

      // Show a success SweetAlert after successful submission
      await Swal.fire({
        icon: "success",
        title: "Success",
        text: "Form submitted successfully!",
        confirmButtonText: "OK",
        background: "#86bbd8",
        color: "white",
      });
    },
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .contact-div {
    display: none !important;
  }
}
@media (max-width: 700px) {
  .contact-form {
    width: 90% !important;
  }
  .title {
    display: none;
  }
  .contact-div {
    display: none;
  }
}
#contact-img {
  border-radius: 3%;
  height: 330px;
  width: 100%;
}
.container {
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 24px;
}
.title {
  font-size: 24px;
  text-align: center;
}

.form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.group {
  position: relative;
}

.form .group label {
  font-size: 14px;
  color: white;
  position: absolute;
  top: -20px;
  left: 10px;
  background-color: transparent;
  transition: all 0.3s ease;
}

.form .group input,
.form .group textarea {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
  margin-bottom: 20px;
  outline: 0;
  width: 100%;
  background-color: transparent;
}

.form .group input:placeholder-shown + label,
.form .group textarea:placeholder-shown + label {
  top: 10px;
  background-color: transparent;
}

.form .group input:focus,
.form .group textarea:focus {
  background-color: white;
  border-color: var(--secondary-color);
}

.form .group input:focus + label,
.form .group textarea:focus + label {
  top: -20px;
  left: 10px;
  background-color: transparent;
  border-radius: 5%;
  color: var(--secondary-color);
  font-size: 14px;
}

.form .group textarea {
  height: 100px;
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

.social-icons a {
  color: white !important;
  margin: 0 10px !important ;
  padding: 5px !important;
  font-size: 30px !important;
}
.social-icons a :hover {
  color: var(--secondary-color);
}
.form-slide-in {
  animation: slideInLeft 1s forwards;
}

.image-slide-in {
  animation: slideInRight 1s forwards;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
button:hover {
  background: var(--secondary-color);
}
</style>
