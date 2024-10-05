<template>
    <div class="filters-container">
      <h3>Filters</h3>
      <form @submit.prevent="handleSubmit" class="filter-form">
        <div class="formLabelInput">
          <label>Location:</label>
          <v-select
            class="custom-select"
            :options="cities"
            v-model="location"
            :placeholder="'Select City'"
          />
        </div>
        <div class="formLabelInput">
          <label>Available From:</label>
          <input
            type="date"
            v-model="availableFromDate"
          />
        </div>
        <div class="formLabelInput">
          <label>Price Range: ₹{{ priceRange }}</label>
          <input
            type="range"
            min="1000"
            max="200000"
            step="1000"
            v-model="priceRange"
          />
        </div>
        <div class="formLabelInput">
          <label>Property Type:</label>
          <v-select
            class="custom-select"
            :options="propertyTypes"
            v-model="propertyType"
            :placeholder="'Select Type'"
          />
        </div>
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import vSelect from 'vue-select';
  import 'vue-select/dist/vue-select.css';
  
  export default {
    components: { vSelect },
    props: {
      onFilter: {
        type: Function,
        required: true,
      },
    },
    setup(props) {
      const location = ref('');
      const availableFromDate = ref('');
      const priceRange = ref(5000);
      const propertyType = ref('');
  
      const cities = [
        { value: 'New Delhi', label: 'New Delhi' },
        { value: 'Mumbai', label: 'Mumbai' },
        { value: 'Bangalore', label: 'Bangalore' },
        { value: 'Chennai', label: 'Chennai' },
        { value: 'Hyderabad', label: 'Hyderabad' },
      ];
  
      const propertyTypes = [
        { value: 'Apartment', label: 'Apartment' },
        { value: 'House', label: 'House' },
        { value: 'Villa', label: 'Villa' },
        { value: 'Studio', label: 'Studio' },
      ];
  
      const handleSubmit = () => {
        props.onFilter({
          location: location.value,
          availableFromDate: availableFromDate.value,
          priceRange: priceRange.value,
          propertyType: propertyType.value,
        });
      };
  
      return {
        location,
        availableFromDate,
        priceRange,
        propertyType,
        cities,
        propertyTypes,
        handleSubmit,
      };
    },
  };
  </script>
  
  <style scoped>
  @import "@/assets/css/Pages.css";
  </style>
  