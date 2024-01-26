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
        
    <h1 class="mt-2">OUR MISSION</h1>
  </div>
  <div class="container first-div">
    <div class="d-flex flex-column-reverse flex-md-row">
      <div class="col-md-6 mission-div-img">
        <img
          src="https://i.ibb.co/JkvxkvQ/mission.webp"
          alt=""
          class="mission-img"
        />
     
      </div>
      <div class="col-md-6 heading-power">
        <h1 class="heading text-start m-2">
          Give people the power to build community and bring the world closer
          together.
        </h1>
      </div>
    </div>
  </div>
  <p class="text-start paragrph">
    Our mission is to empower individuals and communities, inspiring positive
    change and progress. We strive to create innovative solutions that enhance
    lives, while promoting sustainability, inclusivity, and ethical values.
    Through unwavering dedication to these principles, we aim to make a lasting
    impact on the world, leaving a legacy of a brighter and more equitable
    future for all.
  </p>
  <h1>TESTIMONIALS</h1>
  <div class="d-flex justify-content-center">
    <figure class="snip1390">
      <img
        src="https://i.ibb.co/5Gd3v2F/ayesha.png"
        alt="profile-sample3"
        class="profile"
      />
      <figcaption>
        <h2>Ayesha Galant</h2>
        <h4>Customer</h4>
        <blockquote>
          I've been a loyal customer of Cloud 9 Superstore for over a decade,
          and I can't praise them enough.
        </blockquote>
      </figcaption>
    </figure>
    <figure class="snip1390 hover">
      <img
        src="https://i.ibb.co/XWdyMgM/C12-Luke-Evertson-1.jpg"
        alt="profile-sample5"
        class="profile"
      />
      <figcaption>
        <h2>Luke Evertson</h2>
        <h4>Customer</h4>
        <blockquote>
          The staff is always friendly and knowledgeable, and their willingness
          to assist customers makes shopping here a pleasure.
        </blockquote>
      </figcaption>
    </figure>
    <figure class="snip1390">
      <img
        src="https://i.ibb.co/cck0K9J/Sidwell-2.png"
        alt="profile-sample6"
        class="profile"
      />
      <figcaption>
        <h2>Sidwell Batyi</h2>
        <h4>Customer</h4>
        <blockquote>
          Whether I'm shopping for groceries, household items, or even
          electronics, I can always count on Cloud 9 to have it all.
        </blockquote>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
@media (max-width: 768px) {
  .d-flex {
    flex-direction: column;
  }
  .snip1390 {
    width: 90% !important;
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .heading {
    font-size: 25px !important;
  }
  .arrow {
    width: 50px !important;
    height: 50px !important;
  }
  .mission-img {
    height: 250px !important;
  }
}
figure.snip1390 {
  font-family: "Roboto", Arial, sans-serif;
  position: relative;
  border-radius: 0.5em;
  overflow: hidden;
  margin: 10px;
  min-width: 230px;
  max-width: 315px;
  width: 100%;
  color: #000000;
  text-align: center;
  font-size: 16px;
  background-color: var(--secondary-color);
  padding: 30px;
  background-image: linear-gradient(
    -25deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
figure.snip1390 *,
figure.snip1390 *:before,
figure.snip1390 *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
figure.snip1390 figcaption {
  width: 100%;
}
figure.snip1390 h2,
figure.snip1390 h4,
figure.snip1390 blockquote {
  margin: 0;
}
figure.snip1390 h2,
figure.snip1390 h4 {
  font-weight: 300;
}
figure.snip1390 h2 {
  color: #ffffff;
}
figure.snip1390 h4 {
  color: #a6a6a6;
}
figure.snip1390 blockquote {
  color: white;
  font-size: 1em;
  padding: 45px 20px 40px 50px;
  margin-top: 30px;
  background-color: #33658a;
  border-radius: 5px;
  box-shadow: inset -1.4px -1.4px 2px rgba(0, 0, 0, 0.3);
  text-align: left;
  position: relative;
}
figure.snip1390 blockquote:before {
  font-family: "FontAwesome";
  content: "\201C";
  position: absolute;
  font-size: 70px;
  opacity: 0.25;
  font-style: normal;
  top: 0px;
  left: 20px;
}
figure.snip1390 .profile {
  width: 100px;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.4);
  margin-bottom: 10px;
  border: solid 5px #a6a57a;
}

.heading {
  font-size: 45px;
  text-transform: uppercase;
}
.mission-img {
  border-radius: 3%;
  width: 100%;
  height: 350px;
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
