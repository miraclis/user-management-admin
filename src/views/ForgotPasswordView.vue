<script setup lang="ts">
import { ref } from 'vue'

const API_URL = import.meta.env.VITE_API_URL
const email = ref('')
const message = ref('')
const error = ref('')

async function sendResetLink() {
  if (email.value === '') {
    error.value = 'Please enter your email'
    message.value = ''
    return
  }

  error.value = ''
  message.value = ''

  const response = await fetch(`${API_URL}/forgot-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    error.value = data.detail || 'Something went wrong'
    return
  }

  message.value = data.message
}
</script>

<template>
  <div class="forgot-page">
    <div class="forgot-card">
      <h1>Forgot password</h1>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
      />

      <button @click="sendResetLink">
        Send reset link
      </button>

      <p v-if="error" class="error">
        {{ error }}
      </p>

      <p v-if="message" class="message">
        {{ message }}
      </p>

      <RouterLink to="/login" class="back-to-login">
        Back to login
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.forgot-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9ffb5b9;
}

.forgot-card {
  width: 320px;
  padding: 24px;
  background: rgb(39, 39, 39);
  border-radius: 4px;
}

.forgot-card h1 {
  color: #e9e9e7;
  font-size: 52px;
  line-height: 0.8;
}

.forgot-card input {
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
}

.forgot-card button {
  width: 100%;
  padding: 10px;
  cursor: pointer;
}

.error {
  color: red;
}

.message {
  color: lightgreen;
}

.back-to-login {
  font-size: 13px;
}
</style>