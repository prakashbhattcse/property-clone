<template>
  <nav>
    <div class="navbar-container">
      <div v-if="!isLoggedIn">
        <button @click="navigateTo('/')">Home</button>
        <button @click="navigateTo('/login')">Login</button>
        <button @click="navigateTo('/signup')">Register</button>
      </div>
      <div v-else>
        <button @click="navigateTo('/create-property')">
          Listed Properties
        </button>
        <button @click="handleLogout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    isLoggedIn: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    },
    handleLogout() {
      // Implement logout logic here
      this.$emit("logout");
    },
  },
};
</script>

<style scoped>
/* You can add your CSS styles here */
.navbar-container {
  /* Add your navbar styles */
}
</style>
