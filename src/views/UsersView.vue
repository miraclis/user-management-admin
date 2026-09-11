<script setup lang="ts">
import { ref, onMounted } from 'vue'

type User = {
  id: number
  email: string
  role: 'admin' | 'user'
  status: 'active' | 'inactive'
}

const users = ref<User[]>([])

const API_URL = import.meta.env.VITE_API_URL

async function loadUsers() {
  const token = localStorage.getItem('access_token')

  const response = await fetch(`${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await response.json()

  users.value = data
}

async function toggleUserStatus(user: User) {
  const token = localStorage.getItem('access_token')

  const response = await fetch(`${API_URL}/users/${user.id}/status`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await response.json()

  if (!response.ok) {
    console.log(data.detail)
    return
  }

  user.status = data.status
}

onMounted(() => {
  loadUsers()
})
</script>

<template>
  <div class="users-page">
    <h1>Users</h1>

    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.status }}</td>
          <td>
            <button @click="toggleUserStatus(user)">
              {{ user.status === 'active' ? 'Deactivate' : 'Activate' }}
            </button>
          </td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>