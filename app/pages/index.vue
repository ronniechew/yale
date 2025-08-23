<template>
  <div class="min-h-screen bg-white">
    <!-- Header Section -->
    <header class="px-6 py-4">
      <div class="flex items-center">
        <div class="logo">
          <div class="text-blue-600 font-bold text-2xl">yale</div>
          <div class="text-blue-600 text-sm">printers</div>
        </div>
      </div>
      <div class="border-t border-gray-200 mt-4"/>
    </header>

    <!-- Main Content -->
    <main class="flex justify-center items-center min-h-[calc(100vh-120px)]">
      <div class="w-full max-w-md px-6">
        <!-- Login Form -->
        <div class="text-center mb-8">
          <h1 class="text-2xl font-bold text-black">Welcome back</h1>
        </div>

        <form class="space-y-6" @submit.prevent="handleLogin">
          <!-- Username Field -->
          <div>
            <label for="username" class="block text-sm font-medium text-black mb-2">
              Username
            </label>
            <input
              id="username"
              v-model="form.username"
              type="text"
              placeholder="Enter your username"
              class="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              required
            >
          </div>

          <!-- Password Field -->
          <div>
            <label for="password" class="block text-sm font-medium text-black mb-2">
              Password
            </label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Enter your password"
              class="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              required
            >
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            class="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { navigateTo } from '#app'

const form = ref({
  username: '',
  password: ''
})

const handleLogin = () => {
  // Handle login logic here
  console.log('Login attempt:', form.value)
  // Redirect to docket page
  navigateTo('/docket')
}
</script>

<style scoped>
.logo {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Custom focus styles for better accessibility */
input:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Smooth transitions */
* {
  transition: all 0.2s ease-in-out;
}
</style>
