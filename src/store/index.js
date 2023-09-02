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
    posts: null,
    token: null,
    isVerified: false,
    message: null,
    showSpinner: true,
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
    setPosts(state, data) {
      state.posts = data
    },
    setToken(state, data) {
      state.token = data
    },
    setMessage(state, data) {
      state.message = data
    },
    setVerified(state, data) {
      state.isVerified = data
    },
    setSpinner(state, data) {
      state.showSpinner = data
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

    async login(context, payload) {
      try {
        const res = await axios.post(`${URL}users/login`, payload);
        const { result, jwToken, msg, err } = await res.data;
        
        if (result) {
          context.commit('setUser', result);
          context.commit('setToken', jwToken);
          cookies.set('login_cookie', res.data);
          context.commit('setMessage', msg);
        } else {
          // Handle server-side validation errors here
          context.commit('setMessage', err);
        }
      } catch (error) {
        console.error('Error during login:', error);
        // Handle other errors (e.g., network issues) here
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
   
    
  },
});
