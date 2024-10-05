<template>
  <div>
    <Navbar :isLoggedIn="isLoggedIn" @logout="handleLogout" />
    <div class="register-container">
      <h1>Register</h1>
      <form @submit.prevent="handleRegister">
        <input v-model="name" type="text" placeholder="Full Name" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
        />
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "RegisterPage",
  components: {
    Navbar,
  },
  data() {
    return {
      isLoggedIn: false,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleLogout() {
      // Implement your logout logic here
      this.isLoggedIn = false;
      // Additional logout actions...
    },
    async handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords don't match");
        return;
      }
      try {
        // Post the registration details to the /signup route using Axios
        const response = await this.$axios.$post("/api/signup", {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        // Set the JWT token and fetch user details
        await this.$auth.setUserToken(response.token);
        await this.$auth.fetchUser();

        // Redirect to home page after successful registration
        this.$router.push("/");
      } catch (error) {
        console.error("Registration failed:", error);
        alert(
          "Registration failed: " +
            (error.response?.data?.message || error.message)
        );
      }
    },
    async logout() {
      await this.$auth.logout();
      this.isLoggedIn = false;
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.register-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 10px;
  padding: 8px;
}

button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
