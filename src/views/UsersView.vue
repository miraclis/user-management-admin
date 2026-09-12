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

    <RouterLink to="/dashboard" class="back-button">
  Back to Dashboard
</RouterLink>

  </div>
</template>

<style scoped>
.users-page {
  min-height: 100vh;
  padding: 40px;
  background: #f9ffb5b9;
  color: #1f1f1f;
}

.users-page h1 {
  margin-bottom: 30px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: #f9ffb5b9;
  border-radius: 10px;
  overflow: hidden;
}


th,
td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid #e5e5e5;
}

th {
  background: rgb(39, 39, 39);
  color: white;
  font-weight: 600;
}

td {
  color: #444;
}


button {
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  background: #272727;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #404040;
}

.back-button {
  display: inline-block;
  margin-top: 30px;
  padding: 10px 16px;

  background: #525050;
  color: white;

  text-decoration: none;
  border-radius: 6px;
  cursor: pointer;
}

.back-button:hover {
  background: #404040;
}


</style>

