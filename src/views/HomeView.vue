<script setup lang="ts">
import { useUsers } from '@/composables/queries/useUsers.ts'
import { ref } from 'vue'

const page = ref(1)
const { data: users, isPending, status, error: userFetchError } = useUsers(page.value)
</script>

<template>
  <h1>
    Home
    <small>
      <router-link to="/about">go about</router-link>
    </small>
  </h1>
  <ul>
    <li>{{ isPending }} / {{ status }}</li>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    <li>{{ userFetchError?.message }}</li>
  </ul>
</template>
