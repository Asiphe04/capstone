<template>
<div class="container d-flex ">
 <div class="col-6 mt-5 ">
   
    <img src="https://i.postimg.cc/zvcxmT46/us.jpg" alt="" class="employees-img">
  </div>
    <div class="col-6">
     <h1>ABOUT US</h1>
     <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore minus, totam enim, id adipisci corporis aspernatur magnam nulla aliquam, nam animi obcaecati optio laudantium suscipit. Laborum ab dicta aspernatur mollitia.
     </p>
      <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore minus, totam enim, id adipisci corporis aspernatur magnam nulla aliquam, nam animi obcaecati optio laudantium suscipit. Laborum ab dicta aspernatur mollitia.
     </p>
      <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore minus, totam enim, id adipisci corporis aspernatur magnam nulla aliquam, nam animi obcaecati optio laudantium suscipit. Laborum ab dicta aspernatur mollitia.
     </p>
  </div>
</div>
<div class="d-flex justify-content-center row">
     <div class="col-3">
      <h4 class="text-start category-name">OUR HISTORY</h4>
        <img
          src="https://i.postimg.cc/9f1TNZRh/history3.jpg"
          alt=""
          class="hardware-display"
        />
       
            <div class="d-flex">
    
     <h5 class="text-start category-name">READ MORE</h5>
       <img src="https://i.postimg.cc/T2VbZjvD/ra-removebg-preview.png" alt="" class="arrow ms-auto">
        </div>
      </div>
       <div class="col-3">
            <h4 class="text-start category-name">OUR VALUES</h4>
        <img
          src="https://i.postimg.cc/TYYPCFjp/values.jpg"
          alt=""
          class="hardware-display"
        />
       
            <div class="d-flex">

     <h5 class="text-start category-name">READ MORE</h5>
       <img src="https://i.postimg.cc/T2VbZjvD/ra-removebg-preview.png" alt="" class="arrow ms-auto">
        </div>
      </div>
       <div class="col-3">
           <h4 class="text-start category-name">OUR MISSION</h4>
        <img
          src="https://i.postimg.cc/mg9WwynP/mission.jpg"
          alt=""
          class="hardware-display"
        />
            <div class="d-flex">
    <h5 class="text-start category-name">READ MORE</h5>
       <img src="https://i.postimg.cc/T2VbZjvD/ra-removebg-preview.png" alt="" class="arrow ms-auto">
        </div>
      </div>
</div>
<h2>MEET THE TEAM</h2>
   <div class="radio-inputs container">
  <label class="radio">
    <input type="radio" name="radio" checked="" v-model="activeTab" value="managers">
    <span class="name">Managers</span>
  </label>
  <label class="radio" id="experience-btn">
    <input type="radio" name="radio" v-model="activeTab" value="supervisers">
    <span class="name ">Supervisers</span>
  </label>
      
  <label class="radio">
    <input type="radio" name="radio" v-model="activeTab" value="floorteam">
    <span class="name">Floor Team</span>
  </label>

</div>
 <div v-if="activeTab === 'managers'" class="managers">
  <h3 >Managers</h3>

</div>
  <div v-else-if="activeTab === 'supervisers'" class="supervisers">
  <h3 >supervisers</h3>


</div>
 <div v-if="activeTab === 'floorteam'" class="floorteam">
  <h3 >Floor Team</h3>

</div>
<h2>IN PARTNERSHIP WITH:</h2>
<div class="container d-flex mx-auto justify-content-center align-items-center">
<div class="circle1 m-3 ">
  <img src="https://i.postimg.cc/rwhMRKDh/buco.png" alt="" class="sponser">
</div>
<div class="circle1 m-3">
   <img src="https://i.postimg.cc/4yJXhtQS/g1.png" alt="" class="sponser">
</div>
<div class="circle1 m-3">
   <img src="https://i.postimg.cc/j5SfQWcL/sminof.jpg" alt="" class="sponser">
</div>
<div class="circle1 m-3">
   <img src="https://i.postimg.cc/DyT29VVc/simba.png" alt="" class="sponser">
</div>
</div>

</template>
<style scoped>
.employees-img{
  height: 300px;
}

.hardware-display {
  width: 90%;
  height: 205px;
  border-radius: 10px;
}
.col-3, .col-4 {
  /* width: 90%; */
  margin: 10px;
  padding: 3px;
  border-radius: 10px;
  background-color: var(--bggrey);
}
.category-name {
  color: var(--bgblack) !important;
}

.arrow{
  width: 40px;
  height: 25px;
}
.radio-inputs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: var(--secondary-color);
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  width: 250px;
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
  padding: .5rem 0;
  color: rgba(51, 65, 85, 1);
  transition: all .15s ease-in-out;
}

.radio-inputs .radio input:checked + .name {
  background-color: #fff;
  font-weight: 600;
}
/* div.circle1 {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid var(--bgblack);
} */
div.circle1, .sponser {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

</style>
<script>
export default {
   data() {
    return {
      activeTab: 'managers'
    };
  },
};
</script>
