import { createStore } from "vuex";
const URL = "https://capstone-2z3t.onrender.com/";
import axios from "axios";
import Cookies from "js-cookie";
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    token: null,
    userData: null,
    userRole: null,
    msg: null,
    error: null,
    regStatus: null,
    logStatus: null,
    cart: null,
  },

  getters: {
    cartTotalPrice(state) {
      return state.cart.reduce((total, product) => total + product.amount, 0);
    },
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
    setRegStatus(state, status) {
      state.regStatus = status;
    },
    setLogStatus(state, status) {
      state.logStatus = status;
    },
    setToken(state, token) {
      state.token = token;
      Cookies.set("userToken", token, {
        expires: 1,
        path: "/",
        secure: true,
        sameSite: "None",
      });
    },
    setUserData(state, userData) {
      state.userData = userData;
      if (userData && userData.userRole) {
        state.userRole = userData.userRole;
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log(userData, userData.userRole);
      } else {
        state.userData = null;
        state.userRole = null;
        localStorage.removeItem("userData");
      }
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    setError(state, error) {
      state.error = error;
    },
    setCart(state, value) {
      state.cart = value;
    },
    // addProduct(state, product) {
    //   state.products.push(product); // Add the new product to the list.
    // },
    addProductToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, cartID) {
      // Remove the item from the cart state
      state.cart = state.cart.filter((cart) => cart.cartID !== cartID);
    },

    // decrementProductQuantity(state, productId) {
    //   const product = state.products.find(
    //     (product) => product.id === productId
    //   );
    //   if (product) {
    //     product.quantity--;
    //   }
    // },

    clearCart(state) {
      state.cartItems = [];
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

    async register(context, payload) {
      console.log("Reached");
      try {
        const res = await axios.post(`${URL}users`, payload);
        console.log("Res: ", res.data);
        const { msg, err, token } = res.data;
        if (msg === "An error occured") {
          context.commit("setError", msg);
          context.commit("setRegStatus", "Not registered");
          return { success: false, error: msg };
        } else if (token) {
          context.commit("setToken", token);
          context.commit("setRegStatus", "Registered successfully");
          return { success: true, token };
        } else if (err) {
          console.error(err);
        }
      } catch (e) {
        context.commit("setError", e);
        console.log(e);
        context.commit("setRegStatus", "Not registered");
        throw e;
      }
    },
    async login(context, payload) {
      try {
        const res = await axios.post(`${URL}users/login`, payload);
        const { msg, err, token, userData } = res.data;
        if (msg === "Incorrect email or password") {
          console.log(msg);
          context.commit("setError", msg);
          context.commit("setLogStatus", "Not logged in");
          return { success: false, error: msg };
        }
        if (token) {
          // Save the token in local storage
          localStorage.setItem("userToken", token);

          // Save the user data in local storage
          localStorage.setItem("userData", JSON.stringify(userData));

          context.commit("setUser", userData);
          context.commit("setToken", token);

          // Log user details here
          console.log("User logged in:", userData);

          context.commit("setLogStatus", res.data.message);
          
          return { success: res.data.success, token };
        } else if (err) {
          context.commit("setToken", null);
          context.commit("setError", err);
          return { success: false, error: err };
        } else {
          context.commit("setError", "Unknown error during login");
          context.commit("setLogStatus", "not logged in");
          return { success: false, error: "Unknown error" };
        }
      } catch (err) {
        if (err.resp) {
          console.error(
            "Server gave an error: ",
            err.resp.status,
            err.resp.data
          );
        } else if (err.req) {
          console.error(
            "No response from the server. Check your internet connection"
          );
        } else {
          console.log("An error occurred: ", err);
        }
        context.commit("setError", "An error occurred while trying to log in");
        context.commit("setLogStatus", "Not logged in");
        return { success: false, error: "Network error" };
      }
    },

    cookieCheck(context) {
      const token = Cookies.get("userToken");
      if (token) {
        context.commit("setToken", token);
      }
    },

    init(context) {
      context.dispatch("cookieCheck");
    },
    async logout(context) {
      context.commit("setToken", null);
      context.commit("setUser", null);
      context.commit("setUserData", null);
      Cookies.remove("userToken");
    },
    async getCart(context, id) {
      const res = await axios.get(`${URL}users/${id}/cart`);
      context.commit("setCart", res.data);
      console.log(id);
    },
    async addToCart({ commit }, { userID, prodID }) {
      try {
        // Send a POST request to your server's API endpoint
        const response = await axios.post(`${URL}users/${userID}/cart`, {
          userID,
          prodID,
        });

        // Handle the response as needed
        if (response.status === 200) {
          // The item was added to the cart successfully
          // You can commit a mutation to update the cart in your store if needed
          commit("addProductToCart", response.data); // Assuming the response contains the added product
        } else {
          // Handle other response statuses or errors
          // You can also use try-catch blocks to handle errors more precisely
        }
      } catch (error) {
        console.error(error);
        // Handle network errors or other exceptions
      }
    },

    // router.delete("/users/:id/cart/:id", deleteCart);

    async removeFromCart({ commit }, { userID, cartID }) {
      try {
        await axios.delete(`${URL}users/${userID}/cart/${cartID}`);

        commit("removeFromCart", cartID);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
