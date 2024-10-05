<template>
  <div>
    <Navbar :isLoggedIn="isLoggedIn" @logout="handleLogout" />
    <h1>Hello World</h1>
    <!-- Add more content for your index page here -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "IndexPage",
  components: {
    Navbar,
  },
  data() {
    return {
      isLoggedIn: false, // Set this based on your authentication logic
    };
  },
  methods: {
    handleLogout() {
      // Implement your logout logic here
      this.isLoggedIn = false;
      // Additional logout actions...
    },
  },
};
</script>
