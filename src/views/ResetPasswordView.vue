<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const API_URL = import.meta.env.VITE_API_URL

const route = useRoute()
const router = useRouter()

const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const message = ref('')

async function resetPassword() {
  if (password.value === '' || confirmPassword.value === '') {
    error.value = 'Please fill in all fields'
    message.value = ''
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match'
    message.value = ''
    return
  }

  const token = route.query.token

  if (!token || typeof token !== 'string') {
    error.value = 'Invalid reset link'
    message.value = ''
    return
  }

  error.value = ''
  message.value = ''

  const response = await fetch(`${API_URL}/reset-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
      new_password: password.value,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    error.value = data.detail || 'Something went wrong'
    return
  }

  message.value = data.message

  setTimeout(() => {
    router.push('/login')
  }, 1500)
}
</script>


<template>
  <div class="reset-page">
    <div class="reset-card">
      <h1>Reset password</h1>

      <input
        v-model="password"
        type="password"
        placeholder="New password"
      />

      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Confirm password"
      />

      <button @click="resetPassword">
        Reset password
      </button>

      <p v-if="error" class="error">
        {{ error }}
      </p>

      <p v-if="message" class="message">
        {{ message }}
      </p>

      <RouterLink to="/login">
        Back to login
      </RouterLink>
    </div>
  </div>
</template>