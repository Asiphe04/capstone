<template>
  <UserEditComp />
</template>
<script>
import UserEditComp from "@/components/UserEditComp.vue";
import axios from "axios";

export default {
  components: {
    UserEditComp,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      userAge: "",
      userRole: "",
      emailAdd: "",
      userPass: "",
      userProfile: "",
    };
  },
  methods: {
    async updateUser() {
      try {
        const payload = {
          userID: this.$route.params.id,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          userAge: this.user.userAge,
          userRole: this.user.userRole,
          emailAdd: this.user.emailAdd,
          userPass: this.user.userPass,
          userProfile: this.user.userProfile,
        };
        await this.$store.dispatch("updateUser", payload);
        this.firstName = "";
        this.lastName = "";
        this.userAge = "";
        this.userRole = "";
        this.emailAdd = "";
        this.userPass = "";
        this.userProfile = "";

        this.$router.push("/admin");
        alert("User info has been updated");
      } catch (err) {
        console.error(err);
      }
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    // Fetch user data from the store if not already loaded
    if (!this.user) {
      this.$store.dispatch("getUser", this.$route.params.id);
    }
  },
};
</script>
