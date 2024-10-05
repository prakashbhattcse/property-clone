<template>
    <div class="login-container">
      <div class="navigation navbar-container">
        <button @click="goHome">Home</button>
      </div>
      <div class="login-section">
        <h1>Signup</h1>
        <form @submit.prevent="handleSubmit">
          <input
            type="text"
            placeholder="Name"
            v-model="name"
          />
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
          <button type="submit">Signup</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  </template>
  
  <script>
  import { signup } from "@/apis/userApi";
  import { ToastContainer, toast } from 'vue-toastification';
  import 'vue-toastification/dist/index.css';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        name: '',
      };
    },
    methods: {
      goHome() {
        this.$router.push('/');
      },
      async handleSubmit() {
        try {
          await signup({ email: this.email, password: this.password, name: this.name });
          toast.success('Signup successful!');
          this.$router.push('/login');
        } catch (error) {
          toast.error('Error signing up. Please try again.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  @import "@/assets/css/Pages.css";
  </style>
  