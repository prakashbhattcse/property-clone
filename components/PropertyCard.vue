<template>
    <div class="property-card">
      <img :src="property.imageUrl" :alt="property.title" />
      <h3 style="text-align: center">{{ property.title }}</h3>
      <div style="display: flex; width: 100%; justify-content: space-between;">
        <p>{{ property.location }}</p>
        <p>₹{{ property.price }}/ M</p>
      </div>
      <p class="propertyType">{{ property.propertyType }}</p>
      <p>Available: {{ new Date(property.availableDate).toLocaleDateString() }}</p>
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: .6rem; border-top: 1px solid black;">
        <p style="display: flex; gap: .5rem; align-items: center; padding-top: 10px;">
          <FaBed /> {{ property.bedrooms }}
        </p>
        <p style="display: flex; gap: .5rem; align-items: center; padding-top: 10px;">
          <FaBath /> {{ property.bathrooms }}
        </p>
        <p style="display: flex; gap: .5rem; align-items: center; padding-top: 10px;">
          <IoIosResize /> {{ property.size }} sq ft
        </p>
      </div>
      <div v-if="showActions" class="property-actions">
        <FaEdit @click="handleEdit" style="cursor: pointer; margin-right: 10px;" />
        <FaTrash @click="() => onDelete(property._id)" style="cursor: pointer;" />
      </div>
    </div>
  </template>
  
  <script>
  import { FaEdit, FaTrash } from 'vue-icons/fa';
  import { FaBed, FaBath } from 'vue-icons/fa';
  import { IoIosResize } from 'vue-icons/io';
  import { toast } from 'vue-toastification';
  import 'vue-toastification/dist/index.css';
  
  export default {
    props: {
      property: Object,
      onDelete: Function,
      showActions: Boolean,
    },
    methods: {
      handleEdit() {
        toast.info('To edit this property, use the API endpoints to implement the editing functionality.');
      }
    },
  };
  </script>
  
  <style scoped>
  @import "@/assets/css/components.css";
  </style>
  