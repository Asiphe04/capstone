<template>
  <input
    class="m-2"
    v-model="searchTerm"
    placeholder="Search for a product..."
  />
  <h1>Products</h1>
  <div class="container">
    <div class="filter-btns">
      <select id="sort-select" v-model="selectedSort">
        <option value="options">Sort options</option>
        <option value="alphabetical">Sort Alphabetically</option>
        <option value="price-high">Sort by Price (High to Low)</option>
        <option value="price-low">Sort by Price (Low to High)</option>
      </select>
      <button
        type="button"
        class="filter-btn"
        :class="{ 'active-btn': selectedFilter === 'all' }"
        @click="selectFilter('all')"
      >
        all
      </button>
      <button
        type="button"
        class="filter-btn"
        id="Hardware"
        :class="{ 'active-btn': selectedFilter === 'Hardware' }"
        @click="selectFilter('Hardware')"
      >
        HARDWARE
      </button>
      <button
        type="button"
        class="filter-btn"
        :class="{ 'active-btn': selectedFilter === 'Skin' }"
        @click="selectFilter('Skin')"
      >
        SKIN ROUTINE
      </button>
      <button
        type="button"
        class="filter-btn"
        :class="{ 'active-btn': selectedFilter === 'Beverages' }"
        @click="selectFilter('Beverages')"
      >
        BEVERAGES
      </button>
      <button
        type="button"
        class="filter-btn"
        :class="{ 'active-btn': selectedFilter === 'Snacks' }"
        @click="selectFilter('Snacks')"
      >
        SNACKS
      </button>
    </div>
  </div>
  <div
    v-if="filteredProducts.length > 0"
    class="products_container media-container row row-cols-4 m-0"
    id="products"
  >
    <CardComp
      v-for="product of filteredProducts"
      :key="product.prodID"
      :product="product"
    />
  </div>
  <SpinnerComp v-else />
</template>

<script>
import CardComp from "@/components/ProductComp.vue";
import SpinnerComp from "@/components/SpinnerComp.vue";
export default {
  data() {
    return {
      selectedFilter: "all",
      selectedSort: "options",
      products: [],
      searchTerm: "",
    };
  },
  computed: {
    sortedProducts() {
      let sorted = this.products;

      if (this.selectedFilter !== "all") {
        sorted = sorted.filter(
          (product) => product.category === this.selectedFilter
        );
      }

      if (this.selectedSort === "alphabetical") {
        sorted.sort((a, b) => a.prodName.localeCompare(b.prodName));
      } else if (this.selectedSort === "price-high") {
        sorted.sort((a, b) => b.amount - a.amount);
      } else if (this.selectedSort === "price-low") {
        sorted.sort((a, b) => a.amount - b.amount);
      }

      return sorted;
    },
  
    filteredProducts() {
      return this.sortedProducts.filter((product) =>
        product.prodName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    selectFilter(filter) {
      this.selectedFilter = filter;
    },
  },
  mounted() {
   
    const filterFromQuery = this.$route.query.filter;

    if (filterFromQuery) {
      this.selectedFilter = filterFromQuery;
    }

    this.$store.dispatch("getProducts").then(() => {
      this.products = this.$store.state.products;
    });
  },

  components: { CardComp, SpinnerComp },
};
</script>
<style scoped>

option {
  color: black;
}
input {
  border: none;
  width: 200px;
  float: right;
  height: 42px;
  border-radius: 25px;
  background: #d9d9d9;
}

#sort-select {
  outline: none;
  border-radius: none;
  background-color: var(--bggrey);
  color: black;
  border-radius: 2rem !important;
  border: none !important;
  height: 40px;
  margin: 10px;
}

@media screen and (max-width: 300px) {
  #products {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    
    width: auto !important;
  }
}

@media screen and (min-width: 700px) {
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
}
.filter-btns {
  text-align: center;
}
.filter-btn {
  background: none;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  display: inline-block;
  margin: 10px 30px;
  font-size: 16px;
  color: var(--bgwhite);
  font-weight: 600;
  letter-spacing: 2px;
  position: relative;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.filter-btn::after {
  content: "";
  position: absolute;
  top: 110%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  height: 2px;
  width: 0;
  background-color: var(--secondary-color);
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.filter-btn:hover {
  color: var(--bggrey);
}
.filter-btn:hover::after {
  width: 100%;
}

.active-btn {
  color: var(--secondary-color);
}
.active-btn::after {
  width: 100%;
}
</style>
