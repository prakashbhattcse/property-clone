<template>
    <nav>
      <div class="navbar-container">
        <div v-if="!isLoggedIn">
          <button @click="navigateTo('/')">Home</button>
          <button @click="navigateTo('/login')">Login</button>
          <button @click="navigateTo('/signup')">Register</button>
        </div>
        <div v-else>
          <button @click="navigateTo('/create-property')">Listed Properties</button>
          <button @click="handleLogout">Logout</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    props: {
      isLoggedIn: Boolean,
      handleLogout: Function,
    },
    setup(props) {
      const router = useRouter();
  
      const navigateTo = (path) => {
        router.push(path);
      };
  
      return {
        navigateTo,
      };
    },
  };
  </script>
  
  <style scoped>
  @import "@/assets/css/components.css";
  </style>
  