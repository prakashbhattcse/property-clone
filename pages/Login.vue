<template>
  <div class="login-container">
    <div class="navigation navbar-container">
      <button @click="goHome">Home</button>
    </div>
    <div class="login-section">
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
        <input
          type="email"
          placeholder="Email"
          v-model="email"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
    <ToastContainer />
  </div>
</template>

<script>
import { login } from "@/apis/userApi";
import { ToastContainer, toast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
    async handleSubmit() {
      try {
        const response = await login({ email: this.email, password: this.password });
        localStorage.setItem('token', response.data.token);
        toast.success('Login successful!');
        this.$router.push('/');
      } catch (error) {
        toast.error('Error logging in. Please try again.');
      }
    }
  }
};
</script>

<style scoped>
@import "@/assets/css/Pages.css";
</style>
