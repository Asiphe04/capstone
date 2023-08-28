<template>

  <h1 class="text-center m-3">CLOUD 9 SUPERSTORE</h1>
  <div class="container">
    <div class="col-12">
      <img
        src="https://i.postimg.cc/VkH6WTBR/c92.webp"
        alt=""
        class="home-wallpaper mb-4"
      />
    </div>
    <div class="d-flex justify-content-center">
      <h1 class="text-center">SHOP</h1>
      <!-- <button class="btn-view-all ms-auto">View All</button> -->
    </div>
    <div class="shop row justify-content-center">
      <div class="col-4">
        <img
          src="https://i.postimg.cc/DytgH5TP/hardware.jpg"
          alt=""
          class="hardware-display"
        />
        <div class="d-flex">
    <h2 class="text-start category-name">HARDWARE</h2>
       <img src="https://i.postimg.cc/T2VbZjvD/ra-removebg-preview.png" alt="" class="arrow ms-auto">
        </div>
    
      </div>
      <div class="col-2"></div>
      <div class="col-4">
        <img
          src="https://i.postimg.cc/FRjsc8kz/skincare.jpg"
          alt=""
          class="hardware-display"
        />
        <!-- <h2 class="text-start category-name">SKIN ROUTINE</h2> -->
            <div class="d-flex">
    <h2 class="text-start category-name">SKIN ROUTINE</h2>
       <img src="https://i.postimg.cc/T2VbZjvD/ra-removebg-preview.png" alt="" class="arrow ms-auto">
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
       <img src="https://i.postimg.cc/T2VbZjvD/ra-removebg-preview.png" alt="" class="arrow ms-auto">
        </div>
        <!-- <h2 class="text-start category-name">BEVERAGES</h2> -->
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
       <img src="https://i.postimg.cc/T2VbZjvD/ra-removebg-preview.png" alt="" class="arrow ms-auto">
        </div>
        <!-- <h2 class="text-start category-name">SNACKS</h2> -->
      </div>
    </div>
  </div>
  
</template>

<script>
export default {};
</script>
<style scoped>
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
}
.category-name {
  color: var(--bgblack) !important;
}
/* .btn-view-all {
  color: var(--bgwhite);
  background-color: var(--secondary-color);
} */
.arrow{
  width: 60px;
  height: 37px;
}
</style>
