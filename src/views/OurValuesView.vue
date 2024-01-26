<template>
  <div class="container">
    <router-link to="/about" class="arrow">
      <img
        src="https://i.ibb.co/rQX14Fb/arrow5.png"
        alt=""
        class="arrow"
      />
    </router-link>
    <br>
    <h1 class="mt-2">OUR VALUES</h1>
  </div>
  <div class="container d-flex" id="details">
    <div class="col-6 numbers">
      <p class="text-start">
        At the heart of our organization, our values are the guiding stars that
        illuminate our path to success. Integrity is our cornerstone, a bedrock
        upon which we build trust with our customers, partners, and each other.
        We are unwavering in our commitment to excellence, continuously seeking
        to surpass expectations and redefine industry standards.
      </p>
      <div class="number-list">
        <div class="d-flex">
          <h1 class="number">1</h1>
          <div class="mt-4">
            <h2>CUSTOMER FIRST</h2>
            <h6 class="mt-4 text-start">Make every moment memorable</h6>
          </div>
        </div>
        <div class="d-flex">
          <h1 class="number">2</h1>
          <div class="mt-4">
            <h2>QUALITY ASSURANCE</h2>
            <h6 class="mt-4 text-start">Live it every day, in every way</h6>
          </div>
        </div>
        <div class="d-flex">
          <h1 class="number">3</h1>
          <div class="mt-4">
            <h2>COLLABORATION</h2>
            <h6 class="mt-4 text-start">Work and grow together</h6>
          </div>
        </div>
        <div class="d-flex">
          <h1 class="number">4</h1>
          <div class="mt-4">
            <h2>RESPONSIBILITY</h2>
            <h6 class="mt-4 text-start">Do the right thing, the right way</h6>
          </div>
        </div>
        <div class="d-flex">
          <h1 class="number">5</h1>
          <div class="mt-4">
            <h2>STRONG INTEGRITY</h2>
            <h6 class="mt-4 text-start">Do what you say, say what you mean</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6 store-img">
      <img
        src="https://i.ibb.co/FqGhwt2/c9logo-removebg-preview.png"
        alt=""
        class="values-img m-2"
      />
    </div>
  </div>
</template>
<script></script>
<style scoped>
@media (max-width: 768px) {
  #details {
    flex-direction: column !important;
  }
  .col-6 {
    width: 100%;
  }
  .arrow {
    width: 50px !important;
    height: 50px !important;
  }
  .values-img {
    width: 100% !important;
    height: 180px !important;
  }
  .numbers {
    order: 2;
  }
  .store-img {
    order: 1;
  }
}
@media screen and (max-width: 720px) {
  .values-img {
    width: 100% !important;
    height: 300px !important;
  }
}

p {
  font-size: 16px;
}
.values-img {
  border-radius: 3%;
  width: 700px;
  height: 450px;
}
.number {
  font-size: 100px !important;
}
.arrow {
  width: 90px;
  height: 67px;
}
.container {
  position: relative;
}

.arrow {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
