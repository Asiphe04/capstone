<template>
  <div class="container">
    <h1>CONFIRM YOUR PAYMENT</h1>
    <div class="first-row">
      <div class="owner">
        <h3>Owner</h3>
        <div class="input-field">
          <input type="text" required />
        </div>
      </div>
      <div class="cvv">
        <h3>CVV</h3>
        <div class="input-field">
          <input type="password" required />
        </div>
      </div>
    </div>
    <div class="second-row">
      <div class="card-number">
        <h3>Card Number</h3>
        <div class="input-field">
          <input type="number" required />
        </div>
      </div>
    </div>
    <div class="third-row">
      <h3>Expiry Date</h3>
      <div class="selection">
        <div class="date">
          <select name="months" id="months">
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
            <option value="May">May</option>
            <option value="Jun">Jun</option>
            <option value="Jul">Jul</option>
            <option value="Aug">Aug</option>
            <option value="Sep">Sep</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
          </select>
          <select name="years" id="years">
            <option value="2020">2029</option>
            <option value="2019">2028</option>
            <option value="2018">2027</option>
            <option value="2017">2026</option>
            <option value="2016">2025</option>
            <option value="2015">2024</option>
          </select>
        </div>
        <div class="cards">
          <img src="https://i.postimg.cc/J72jL382/mc.png" alt="" />
          <img src="https://i.postimg.cc/KjwTDbQ2/vi.png" alt="" />
          <img src="https://i.postimg.cc/GhTGhBhh/pp.png" alt="" />
        </div>
      </div>
    </div>
    <a href="" type="submit">Confirm</a>
  </div>
</template>

<style scoped>
.container {
  width: 750px;
  height: 500px;
  /* border: 1px solid; */
  height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 40px;
  justify-content: space-around;
}

.container h1 {
  text-align: center;
}

.first-row {
  display: flex;
}

.owner {
  width: 100%;
  margin-right: 40px;
}

.input-field {
  border: 1px solid #999;
}

.input-field input {
  width: 100%;
  border: none;
  outline: none;
  padding: 10px;
}

.selection {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.selection select {
  padding: 10px 20px;
}

a {
  background-color: var(--tertiary-color);
  color: white;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px;
  font-size: 18px;
  transition: 0.5s;
}

a:hover {
  background-color: var(--secondary-color);
}

.cards img {
  width: 100px;
}
</style>
