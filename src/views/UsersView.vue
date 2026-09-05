<script setup lang="ts">
const users = [
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
]
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
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>