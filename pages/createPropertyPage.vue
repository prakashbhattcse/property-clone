<template>
    <div class="listedProperties-container">
      <div class="navbar-container">
        <button @click="goBack">Back to Listings</button>
      </div>
      <div>
        <h2>Your Listed Properties</h2>
        <div class="user-property-list">
          <PropertyCard
            v-for="property in userProperties"
            :key="property._id"
            :property="property"
            @delete="handleDelete(property._id)"
            :show-actions="true"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import PropertyCard from '@/components/PropertyCard.vue';
  
  export default {
    components: {
      PropertyCard,
    },
    setup() {
      const navigate = useRouter();
      const userProperties = ref([]);
  
      const fetchUserProperties = async () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) return;
  
          const response = await axios.get('http://localhost:3000/api/v1/properties/user-properties', {
            headers: {
              Authorization: token,
            },
          });
  
          userProperties.value = response.data;
        } catch (error) {
          console.error('Error fetching user properties:', error);
  
          if (error.response?.status === 401) {
            alert('Please log in again.');
            localStorage.removeItem('token');
            navigate.push('/login');
          } else {
            alert('An error occurred. Please try again.');
          }
        }
      };
  
      const handleDelete = async (propertyId) => {
        try {
          const token = localStorage.getItem('token');
          if (!token) return;
  
          await axios.delete(`http://localhost:3000/api/v1/properties/property/${propertyId}`, {
            headers: {
              Authorization: token,
            },
          });
  
          fetchUserProperties();
        } catch (error) {
          alert('Error deleting property. Please try again.');
        }
      };
  
      onMounted(() => {
        fetchUserProperties();
      });
  
      const goBack = () => {
        navigate.push('/');
      };
  
      return {
        userProperties,
        handleDelete,
        goBack,
      };
    },
  };
  </script>
  
  <style scoped>
  @import "@/assets/css/Pages.css";
  </style>
  