import { ref } from 'vue'


<script setup lang="ts">
import { ref } from 'vue'

type User = {
  id: number
  email: string
  role: 'admin' | 'user'
  status: 'active' | 'inactive'
}

const users = ref<User[]>([
  {
    id: 1,
    email: 'admin@test.com',
    role: 'admin',
    status: 'active',
  },
  {
    id: 2,
    email: 'user1@test.com',
    role: 'user',
    status: 'active',
  },
  {
    id: 3,
    email: 'user2@test.com',
    role: 'user',
    status: 'inactive',
  },
])

function toggleUserStatus(user: User) {
  if (user.status === 'active') {
    user.status = 'inactive'
  } else {
    user.status = 'active'
  }
}
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