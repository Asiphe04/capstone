<template>
  <h1 class="text-center focus-in">CLOUD 9 SUPERSTORE</h1>
  <div class="container">
    <div class="col-12">
      <img
        src="https://i.ibb.co/YpbmQvz/cloud-9-home-img.webp"
        alt=""
        class="home-wallpaper slide-in"
      />
      <br />
      <br />
      <br />
    </div>
    <div v-show="userRole">
      <div class="d-flex justify-content-center">
        <h1 class="text-center">SHOP</h1>
      </div>
      <button class="ms-auto">
        <router-link class="text-white text-decoration-none" to="/products"
          >View All</router-link
        >
      </button>
      <div class="shop row justify-content-center">
        <div class="col-4 type">
          <img
            src="https://i.ibb.co/tM6tf5K/hardware.jpg"
            alt=""
            class="hardware-display"
          />
          <div class="d-flex">
            <h2 class="text-start category-name">HARDWARE</h2>
            <router-link
              :to="{ name: 'products', query: { filter: 'Hardware' } }"
              class="arrow ms-auto"
            >
              <img
                src="https://i.postimg.cc/T2VbZjvD/ra-removebg-preview.png"
                alt=""
                class="arrow ms-auto"
              />
            </router-link>
          </div>
        </div>
       
        <div class="col-4">
          <img
            src="https://i.postimg.cc/vBXBgBRm/skin-routine.jpg
"
            alt=""
            class="hardware-display"
          />

          <div class="d-flex">
            <h2 class="text-start category-name">SKIN ROUTINE</h2>
            <router-link
              :to="{ name: 'products', query: { filter: 'Skin' } }"
              class="arrow ms-auto"
            >
              <img
                src="https://i.postimg.cc/T2VbZjvD/ra-removebg-preview.png"
                alt=""
                class="arrow ms-auto"
              />
            </router-link>
          </div>
        </div>
        <div class="col-4">
          <img
            src="https://i.ibb.co/vHg895w/beverages.webp"
            alt=""
            class="hardware-display"
          />
          <div class="d-flex">
            <h2 class="text-start category-name">BEVERAGES</h2>
            <router-link
              :to="{ name: 'products', query: { filter: 'Beverages' } }"
              class="arrow ms-auto"
            >
              <img
                src="https://i.postimg.cc/T2VbZjvD/ra-removebg-preview.png"
                alt=""
                class="arrow ms-auto"
              />
            </router-link>
          </div>
        </div>
       
        <div class="col-4">
          <img
            src="https://i.ibb.co/m50DVDR/snacks.webp"
            alt=""
            class="hardware-display"
          />
          <div class="d-flex">
            <h2 class="text-start category-name">SNACKS</h2>
            <router-link
              :to="{ name: 'products', query: { filter: 'Snacks' } }"
              class="arrow ms-auto"
            >
              <img
                src="https://i.postimg.cc/T2VbZjvD/ra-removebg-preview.png"
                alt=""
                class="arrow ms-auto"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
};
</script>
<style scoped>
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
}
button:hover {
  background: var(--secondary-color);
}
.home-wallpaper {
  width: 100%;
  height: 515px;
  max-width: 100%;
  border-radius: 10px;
  opacity: 0;
}
.focus-in {
  animation: focusIn 1s ease-out forwards;
  opacity: 0; 
  transform: translateY(-20px); 
}

@keyframes focusIn {
  0% {
    opacity: 0;
    transform: translateY(-20px); 
  }
  100% {
    opacity: 1;
    transform: translateY(
      0
    ); 
  }
}
.slide-in {
  animation: slideIn 1s forwards; 
}

@keyframes slideIn {
  from {
    transform: translateX(-100%); 
    opacity: 0; 
  }
  to {
    transform: translateX(
      0
    ); 
    opacity: 1; 
  }
}

@media (max-width: 768px) {
  .home-wallpaper {
    height: 250px;
  }
}

.hardware-display {
  width: 100%;
  height: 205px;
  border-radius: 10px;
}
.col-4 {
  margin: 10px;
  padding: 3px;
  border-radius: 10px;
  background-color: var(--bggrey);
  width: 370px !important;
}
.category-name {
  color: var(--bgblack) !important;
}

.arrow {
  width: 60px;
  height: 37px;
}
</style>
