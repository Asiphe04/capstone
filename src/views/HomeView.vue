<template>
  <h1 class="text-center">CLOUD 9 SUPERSTORE</h1>
  <div class="container">
    <div class="col-12">
      <img
        src="https://i.postimg.cc/VkH6WTBR/c92.webp"
        alt=""
        class="home-wallpaper"
      />
    </div>
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
          src="https://i.postimg.cc/DytgH5TP/hardware.jpg"
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
      <div class="col-2"></div>
      <div class="col-4">
        <img
          src="https://i.postimg.cc/FRjsc8kz/skincare.jpg"
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
          src="https://i.postimg.cc/pLYwfvqg/beverages.png"
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
      <div class="col-2"></div>
      <div class="col-4">
        <img
          src="https://i.postimg.cc/rm65q6Lw/snacks.webp"
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
</template>

<script>
export default {};
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
  /* margin: 14px; */
}
.home-wallpaper {
  width: 100%;
  height: 475px;
  border-radius: 10px;
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
/* .btn-view-all {
  color: var(--bgwhite);
  background-color: var(--secondary-color);
} */
.arrow {
  width: 60px;
  height: 37px;
}
</style>
