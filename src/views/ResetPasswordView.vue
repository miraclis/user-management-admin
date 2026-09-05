<script setup lang="ts">
import { ref } from 'vue'

const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const message = ref('')

function resetPassword() {
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

  error.value = ''
  message.value = 'Password changed successfully'
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