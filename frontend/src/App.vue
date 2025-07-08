<script setup>
import axios from '@/config/axios';
import { ref, onMounted } from 'vue';
const users = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/users')
    users.value = response.data
  } catch (error) {
    console.error('Lỗi gọi API:', error)
  }
})
</script>

<template>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>

<style scoped></style>
