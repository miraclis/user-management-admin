<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const title = 'Register'

const email = ref('')
const password = ref('')
const error = ref('')
const confirm_password = ref('')

const router = useRouter()

function register() {
  if (email.value === '' || password.value === '' || confirm_password.value === '') {
    error.value = 'Please fill in all fields'
    return
  }

  if (password.value !== confirm_password.value) {
    error.value = 'Passwords do not match'
    return
  }

  error.value = ''

  console.log('Register success')
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  console.log('Confirm Password:', confirm_password.value)

  router.push('/dashboard')
}
</script>

<template>
  <div class="register-page">
    <div class="register-card">
      <h1>{{ title }}</h1>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
      />

      
      <input
        v-model="confirm_password"
        type="password"
        placeholder="Confirm Password"
      />

<button @click="register">
  Create account
</button>

<p v-if="error" class="error">
  {{ error }}
</p>

<p class="register-text">
  Already have an account?
  <RouterLink to="/login">
    Sign in
  </RouterLink>
</p>

    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.register-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}


.register-card {
  width: 320px;
  padding: 24px;
  background: rgb(39, 29, 63);
  border-radius: 12px;
}

.register-card h1 {
  margin-bottom: 25px;
  color: #ece8e8;
}

.register-card input {
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
}

.register-card button {
  width: 100%;
  padding: 10px;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 10px;
}

.register-text {
  font-size: 13px;
}

</style>