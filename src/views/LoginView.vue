<template>
  <div class="container d-flex p-4">
    <div class="col-6">
      <img
        src="https://i.postimg.cc/YCJbkvPZ/c9bl-removebg-preview.png"
        alt=""
      />
    </div>
    <div class="col-6">
      <h1>WELCOME BACK !</h1>

      <form>
        <label for="email" class="text-start">ENTER YOUR EMAIL</label>
        <br />
        <input type="email" placeholder="eg. asiphendimlana40@gmail.com" />
        <br />
        <label for="password" class="text-start">PASSWORD</label>
        <br />
        <input type="password" />

        <button>Log In</button>
        <p>
          Dont have an account?
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
<style scoped>
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
