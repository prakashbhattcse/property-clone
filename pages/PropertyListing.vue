<template>
    <div>
      <Navbar :isLoggedIn="isLoggedIn" @logout="handleLogout" />
      <div class="property-listing-container">
        <div class="filter-container">
          <Filter @filter="handleFilter" />
        </div>
        <div class="property-list">
          <PropertyCard
            v-for="property in filteredProperties"
            :key="property._id"
            :property="property"
          />
          <p v-if="filteredProperties.length === 0">No properties found.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import Navbar from '@/components/Navbar.vue';
  import PropertyCard from '@/components/PropertyCard.vue';
  import Filter from '@/components/Filter.vue';
  import { getAllProperties } from '@/apis/propertyApi';
  
  export default {
    components: {
      Navbar,
      PropertyCard,
      Filter,
    },
    setup() {
      const navigate = useRouter();
      const properties = ref([]);
      const filteredProperties = ref([]);
      const isLoggedIn = ref(false);
  
      const fetchProperties = async () => {
        try {
          const response = await getAllProperties();
          properties.value = response;
          filteredProperties.value = response;
        } catch (error) {
          console.error('Error fetching properties:', error);
          alert('Failed to load properties.');
        }
      };
  
      const checkLoginStatus = async () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            isLoggedIn.value = false;
            return;
          }
  
          const response = await axios.get('http://localhost:3000/api/v1/auth/check', {
            headers: {
              Authorization: token,
            },
          });
  
          if (response.data.isLoggedIn) {
            isLoggedIn.value = true;
          } else {
            isLoggedIn.value = false;
            localStorage.removeItem('token');
            navigate.push('/login');
          }
        } catch (error) {
          console.error('Error checking login status:', error);
          isLoggedIn.value = false;
          localStorage.removeItem('token');
          navigate.push('/login');
        }
      };
  
      onMounted(() => {
        fetchProperties();
        checkLoginStatus();
      });
  
      const handleFilter = (filters) => {
        filteredProperties.value = properties.value.filter((property) => {
          const isAvailableDateValid =
            !filters.availableFromDate ||
            new Date(property.availableDate) >= new Date(filters.availableFromDate);
  
          return (
            (!filters.location || property.location.includes(filters.location)) &&
            (!filters.priceRange || property.price <= parseInt(filters.priceRange)) &&
            (!filters.propertyType || property.propertyType.includes(filters.propertyType)) &&
            isAvailableDateValid
          );
        });
      };
  
      const handleLogout = () => {
        localStorage.removeItem('token');
        isLoggedIn.value = false;
        navigate.push('/');
      };
  
      return {
        filteredProperties,
        handleFilter,
        isLoggedIn,
        handleLogout,
      };
    },
  };
  </script>
  
  <style scoped>
  @import "@/assets/css/Pages.css";
  </style>
  