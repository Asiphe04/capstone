<template>
  <div class="container d-flex p-4">
    <div class="col-6">
      <img
        src="https://i.postimg.cc/YCJbkvPZ/c9bl-removebg-preview.png"
        alt=""
      />
    </div>
    <div class="col-6">
      <h1>WELCOME TO CLOUD 9 SUPERSTORE!</h1>

      <form class="row d-flex">
        <div class="col-6">
          <label for="firstName" class="text-start">First Name:</label>
          <input type="text" placeholder="eg. Asiphe" />
          <label for="lastname" class="text-start">Surname:</label>
          <input type="text" placeholder="eg. Ndimlana" />
          <label for="role" class="text-start">Role:</label>
          <input type="text" placeholder="eg. Admin" />
          <label for="text" class="text-start">Profile URL</label>

          <input
            type="text"
            placeholder="https://i.postimg.cc/Cx0fdCZw/C12-Asiphe-Ndimlana-3.jpg"
          />
        </div>
        <div class="col-6">
          <label for="gender" class="text-start">Gender:</label>
          <input type="gender" placeholder="eg. Male" />
          <label for="email" class="text-start">EMAIL:</label>

          <input type="email" placeholder="eg. asiphendimlana40@gmail.com" />

          <label for="age" class="text-start">Age:</label>
          <input type="number" placeholder="eg. 19" />
          <label for="password" class="text-start">PASSWORD</label>

          <input type="password" />
        </div>
      </form>
      <button>Sign Up</button>
      <p>
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
<style scoped>
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
