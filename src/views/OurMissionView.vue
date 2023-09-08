<template>
  <div class="container">
    <router-link to="/about" class="arrow">
      <img
        src="https://i.postimg.cc/wTxGjk32/arrow-removebg-preview.png"
        alt=""
        class="arrow"
      />
    </router-link>
    <h1 class="mt-2">OUR MISSION</h1>
  </div>
  <div class="container">
    <div class="d-flex">
      <div class="col-6">
        <img
          src="https://i.postimg.cc/wjghLb53/h12.webp"
          alt=""
          class="mission-img"
        />
      </div>
      <div class="col-6">
        <h1 class="heading text-start m-2">
          Give people the power to build community and bring the world closer
          together.
        </h1>
      </div>
    </div>
    <p class="text-start paragrph">
      Our mission is to empower individuals and communities, inspiring positive
      change and progress. We strive to create innovative solutions that enhance
      lives, while promoting sustainability, inclusivity, and ethical values.
      Through unwavering dedication to these principles, we aim to make a
      lasting impact on the world, leaving a legacy of a brighter and more
      equitable future for all.
    </p>
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://i.postimg.cc/c4Jm6JjQ/C12-Ayesha-Galant-Class1-2.jpg"
            class="testimonial-img"
            alt="..."
          />
          <h5>Ayesha Galant</h5>
          <p>
            "I've been a loyal customer of Cloud 9 Superstore for over a decade,
            and I can't praise them enough."
          </p>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/g2XHqTGj/C12-Luke-Evertson-2.jpg"
            class="testimonial-img"
            alt="..."
          />
          <h5>Luke Evertson</h5>
          <p>
            "I've been a loyal customer of Cloud 9 Superstore for over a decade,
            and I can't praise them enough."
          </p>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/vmc7CH8t/ethan2.png"
            class="testimonial-img"
            alt="..."
          />
          <h5>Ethan Lesar</h5>
          <p>
            "I've been a loyal customer of Cloud 9 Superstore for over a decade,
            and I can't praise them enough."
          </p>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.testimonial-img {
  border-radius: 3%;
  height: 350px;
}
.heading {
  font-size: 55px;
  text-transform: uppercase;
}
.mission-img {
  border-radius: 3%;
  width: 100%;
  height: 400px;
}
.paragrph {
  font-size: 20px;
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
