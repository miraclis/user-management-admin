<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  router.push('/login')
}
</script>

<template>
  <div class="dashboard-page">
    <nav class="sidebar">
      <h2>Admin Panel</h2>

      <RouterLink to="/dashboard">
        Dashboard
      </RouterLink>

      <RouterLink to="/users">
        Users
      </RouterLink>

      <button @click="logout">
        Logout
      </button>
    </nav>

    <main class="dashboard-content">
      <h1>Dashboard</h1>
      <p>Welcome to the admin panel</p>
    </main>
  </div>
</template>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  display: flex;
}

.sidebar {
  width: 220px;
  padding: 24px;
  background: rgb(39, 29, 63);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sidebar h2 {
  color: white;
}

.sidebar a {
  color: white;
  text-decoration: none;
}

.sidebar button {
  margin-top: auto;
  padding: 10px;
  cursor: pointer;
}

.dashboard-content {
  flex: 1;
  padding: 40px;
}
</style>