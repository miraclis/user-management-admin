<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const API_URL = import.meta.env.VITE_API_URL
const router = useRouter()

const currentUserRole = ref('')

function logout() {
  localStorage.removeItem('access_token')
  router.push('/login')
}

async function loadCurrentUser() {
  const token = localStorage.getItem('access_token')

  const response = await fetch(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await response.json()

  currentUserRole.value = data.role
}

onMounted(() => {
  loadCurrentUser()
})
</script>

<template>
  <div class="dashboard-page">
    <nav class="sidebar">
      <h2>Admin Panel</h2>

      <RouterLink to="/dashboard">
        Dashboard
      </RouterLink>

      <RouterLink class="users-link"
        v-if="currentUserRole === 'admin'"
        to="/users"
      >
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
  background: rgb(39, 39, 39);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sidebar h2 {
  color: white;
  
}

.sidebar a {
  color: rgb(255, 255, 255);
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
  color: rgb(255, 255, 255);
  background: #f9ffb5b9;
}

.sidebar .users-link {
  padding: 10px;
  background: #474444;
  color: white;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
}

.sidebar .users-link:hover {
  background: #333333;
}

</style>


