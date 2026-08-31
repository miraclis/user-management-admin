<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const title = 'Login'

const email = ref('')
const password = ref('')
const error = ref('')

const router = useRouter()

function login() {
  if (email.value === '' || password.value === '') {
    error.value = 'Please fill in all fields'
    return
  }

  error.value = ''

  console.log('Login success')
  console.log('Email:', email.value)
  console.log('Password:', password.value)

  router.push('/dashboard')
}
</script>

<template>
  <div class="login-page">
    <div class="login-card">
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

      <button @click="login">
        Sign in
      </button>

      <p v-if="error" class="error">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}


.login-card {
  width: 320px;
  padding: 24px;
  background: rgb(39, 29, 63);
  border-radius: 12px;
}

.login-card h1 {
  margin-bottom: 25px;
  color: #ece8e8;
}

.login-card input {
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
}

.login-card button {
  width: 100%;
  padding: 10px;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 10px;
}

</style>