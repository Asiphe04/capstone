import { createStore } from "vuex";
const URL = "https://capstone-2z3t.onrender.com/";
import { useCookies, globalCookiesConfig } from "vue3-cookies";
import axios from "axios";
const { cookies } = useCookies();
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    cart: [],
  },

  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    // setCart: (state, cart) => {
    //   state.cart = cart;
    // },
    addItemToCart(state, product) {
      // Add the product to the cart
      state.cart.push(product);
    },
  },
  actions: {
    getUsers: async (context) => {
      try {
        const res = await fetch(`${URL}users`);
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const users = await res.json();
        context.commit("setUsers", users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },

    getUser: async (context, id) => {
      try {
        const res = await fetch(`${URL}users/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch user by ID");
        }
        const user = await res.json();

        context.commit("setUser", user);
      } catch (error) {
        console.error(error);
      }
    },

    getProducts: async (context) => {
      try {
        const res = await fetch(`${URL}products`);
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const products = await res.json();
        context.commit("setProducts", products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    getProduct: async (context, id) => {
      try {
        const response = await fetch(`${URL}products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const product = await response.json();

        context.commit("setProduct", product);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchCart(context, userID) {
      const res = await axios.get(`${URL}cart/${userID}`);
      const data = await res.data;
      if (data) {
        context.commit("setCart", data);
      }
    },
    addToCart({ commit, state }, product) {
      // Check if the product is being passed correctly
      console.log("Adding to cart:", product);

      // Check the state.cart before adding
      console.log("Cart before add:", state.cart);

      // Add the product to the cart
      commit("addItemToCart", product);

      // Check the state.cart after adding
      console.log("Cart after add:", state.cart);
    },
    removeFromCart({ commit, state }, index) {
      // Remove item from cart based on index
      commit("removeItemFromCart", index);
    },
  },
});
