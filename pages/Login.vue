<template>
  <div>
    <Navbar :isLoggedIn="isLoggedIn" @logout="handleLogout" />
    <div class="login-container">
      <h1>Login</h1>
      <!-- Add your login form here -->
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Email" required />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "LoginPage",
  components: {
    Navbar,
  },
  data() {
    return {
      isLoggedIn: false,
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogout() {
      // Implement your logout logic here
      this.isLoggedIn = false;
      // Additional logout actions...
    },
    async handleLogin() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        });
        this.$router.push('/');
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed: ' + (error.response?.data?.message || error.message));
      }
    },
    async logout() {
      await this.$auth.logout();
      this.isLoggedIn = false;
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.login-container {
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
