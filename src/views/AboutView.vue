<template>
  <div class="container d-flex">
    <div class="col-6 mt-5">
      <img
        src="https://i.postimg.cc/JzdRxNQW/e2.webp"
        alt=""
        class="employees-img"
      />
    </div>
    <div class="col-6">
      <h1>ABOUT US</h1>
      <p class="text-start">
        At Cloud 9 Superstore, we believe in more than just shopping; we believe
        in an experience that transcends the ordinary. Step into our world,
        where convenience, variety, and exceptional service merge seamlessly to
        redefine your shopping journey. Cloud 9 Superstore was born from a
        vision to create a retail destination like no other. Our founders
        envisioned a place where customers could find everything they need under
        one roof while enjoying a delightful shopping experience. From the
        moment you walk through our doors, you'll discover that we're more than
        just a store , we're a community hub, a source of inspiration, and your
        partner in convenience. Our commitment to customer satisfaction is
        unwavering. Our friendly and knowledgeable staff are here to assist you
        every step of the way.
      </p>
    </div>
  </div>
  <div class="d-flex justify-content-center row">
    <div class="col-3">
      <h4 class="text-start category-name">OUR HISTORY</h4>
      <img
        src="https://i.postimg.cc/Dwg9FHyT/111111.jpg"
        alt=""
        class="hardware-display"
      />

      <div class="d-flex">
        <h5 class="text-start category-name">READ MORE</h5>
        <img
          src="https://i.postimg.cc/T2VbZjvD/ra-removebg-preview.png"
          alt=""
          class="arrow ms-auto"
        />
      </div>
    </div>
    <div class="col-3">
      <h4 class="text-start category-name">OUR VALUES</h4>
      <img
        src="https://i.postimg.cc/fTHPrXHz/v1.jpg"
        alt=""
        class="hardware-display"
      />

      <div class="d-flex">
        <h5 class="text-start category-name">READ MORE</h5>
        <img
          src="https://i.postimg.cc/T2VbZjvD/ra-removebg-preview.png"
          alt=""
          class="arrow ms-auto"
        />
      </div>
    </div>
    <div class="col-3">
      <h4 class="text-start category-name">OUR MISSION</h4>
      <img
        src="https://i.postimg.cc/wjghLb53/h12.webp"
        alt=""
        class="hardware-display"
      />
      <div class="d-flex">
        <h5 class="text-start category-name">READ MORE</h5>
        <img
          src="https://i.postimg.cc/T2VbZjvD/ra-removebg-preview.png"
          alt=""
          class="arrow ms-auto"
        />
      </div>
    </div>
  </div>
  <h2>MEET THE TEAM</h2>
  <div class="radio-inputs container p-2 mb-4">
    <label class="radio">
      <input
        type="radio"
        name="radio"
        checked=""
        v-model="activeTab"
        value="managers"
      />
      <span class="name">Managers</span>
    </label>
    <label class="radio" id="experience-btn">
      <input
        type="radio"
        name="radio"
        v-model="activeTab"
        value="supervisers"
      />
      <span class="name">Supervisers</span>
    </label>

    <label class="radio">
      <input type="radio" name="radio" v-model="activeTab" value="floorteam" />
      <span class="name">Floor Team</span>
    </label>
  </div>
  <div
    v-if="activeTab === 'managers'"
    class="managers d-flex justify-content-center"
  >
    <div>
      <img
        width="150"
        height="150"
        src="https://i.postimg.cc/rsj9fQ0N/guy.webp"
        alt=""
        class="employee-img"
      />
      <p class="m-0">Asiphe Ndimlana</p>
      <p style="color: #bec6d3 !important">Board of Directors</p>
    </div>
    <div>
      <img
        width="150"
        height="150"
        src="https://i.postimg.cc/rsj9fQ0N/guy.webp"
        alt=""
        class="employee-img"
      />
      <p class="m-0">Asiphe Ndimlana</p>
      <p style="color: #bec6d3 !important">Board of Directors</p>
    </div>
    <div>
      <img
        width="150"
        height="150"
        src="https://i.postimg.cc/rsj9fQ0N/guy.webp"
        alt=""
        class="employee-img"
      />
      <p class="m-0">Asiphe Ndimlana</p>
      <p style="color: #bec6d3 !important">Board of Directors</p>
    </div>
    <div>
      <img
        width="150"
        height="150"
        src="https://i.postimg.cc/rsj9fQ0N/guy.webp"
        alt=""
        class="employee-img"
      />
      <p class="m-0">Asiphe Ndimlana</p>
      <p style="color: #bec6d3 !important">Board of Directors</p>
    </div>
  </div>
  <div v-else-if="activeTab === 'supervisers'" class="supervisers">
    <img
      width="150"
      height="150"
      src="https://i.postimg.cc/j57fWv4S/guy3.webp"
      alt=""
      class="employee-img"
    />
    <img
      width="150"
      height="150"
      src="https://i.postimg.cc/j57fWv4S/guy3.webp"
      alt=""
      class="employee-img"
    />
    <img
      width="150"
      height="150"
      src="https://i.postimg.cc/j57fWv4S/guy3.webp"
      alt=""
      class="employee-img"
    />
    <img
      width="150"
      height="150"
      src="https://i.postimg.cc/j57fWv4S/guy3.webp"
      alt=""
      class="employee-img"
    />
  </div>
  <div v-if="activeTab === 'floorteam'" class="floorteam">
    <img
      width="150"
      height="150"
      src="https://i.postimg.cc/ydTz1C3h/guy9.webp"
      alt=""
      class="employee-img"
    />
    <img
      width="150"
      height="150"
      src="https://i.postimg.cc/cC9y37mr/guy8.webp"
      alt=""
      class="employee-img"
    />
    <img
      width="150"
      height="150"
      src="https://i.postimg.cc/fyTQkqYG/guy7.webp"
      alt=""
      class="employee-img"
    />
    <img
      width="150"
      height="150"
      src="https://i.postimg.cc/Kvpx3bqJ/guy15.webp"
      alt=""
      class="employee-img"
    />
  </div>
  <h2>IN PARTNERSHIP WITH:</h2>

  <div
    class="container d-flex mx-auto justify-content-center align-items-center"
  >
    <div class="circle1 m-3">
      <img
        src="https://i.postimg.cc/rwhMRKDh/buco.png"
        alt=""
        class="sponser"
      />
    </div>
    <div class="circle1 m-3">
      <img src="https://i.postimg.cc/4yJXhtQS/g1.png" alt="" class="sponser" />
    </div>
    <div class="circle1 m-3">
      <img
        src="https://i.postimg.cc/j5SfQWcL/sminof.jpg"
        alt=""
        class="sponser"
      />
    </div>
    <div class="circle1 m-3">
      <img
        src="https://i.postimg.cc/DyT29VVc/simba.png"
        alt=""
        class="sponser"
      />
    </div>
  </div>
</template>
<style scoped>
.employees-img {
  height: 300px;
  width: 85%;
  border-radius: 2%;
}

.hardware-display {
  width: 90%;
  height: 205px;
  border-radius: 10px;
}
.col-3,
.col-4 {
  /* width: 90%; */
  margin: 10px;
  padding: 3px;
  border-radius: 10px;
  background-color: var(--bggrey);
}
.category-name {
  color: var(--bgblack) !important;
}

.arrow {
  width: 40px;
  height: 25px;
}
.radio-inputs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: var(--bggrey);
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  width: 400px;
  font-size: 14px;
}

.radio-inputs .radio {
  flex: 1 1 auto;
  text-align: center;
}

.radio-inputs .radio input {
  display: none;
}

.radio-inputs .radio .name {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 0;
  color: rgba(51, 65, 85, 1);
  transition: all 0.15s ease-in-out;
  font-size: 20px;
}

.radio-inputs .radio input:checked + .name {
  background-color: #adadad;
  font-weight: 600;
}

.employee-img {
  border-radius: 50%;
  /* height: 143px; */
  margin-bottom: 5px;
  padding: 3px;
  /* width: 143px; */
}
div.circle1,
.sponser {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
<script>
export default {
  data() {
    return {
      activeTab: "managers",
    };
  },
};
</script>
