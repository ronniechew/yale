<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="px-4 sm:px-6 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-xl sm:text-2xl font-bold text-gray-900">Configuration</h1>
          <button
            @click="navigateTo('/docket')"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Docket
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="px-4 sm:px-6 py-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <!-- Clients Section -->
        <section class="bg-white rounded-lg shadow-sm border border-gray-200">
          <div class="px-6 py-4 border-b border-gray-200">
            <div class="flex justify-between items-center">
              <h2 class="text-lg font-semibold text-gray-900">Clients</h2>
              <button
                @click="showAddClientModal = true"
                class="bg-green-600 text-white px-3 py-1.5 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm"
              >
                Add Client
              </button>
            </div>
          </div>
          
          <div class="p-6">
            <div class="space-y-3">
              <div
                v-for="client in mockClients"
                :key="client.id"
                class="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
              >
                <div class="flex justify-between items-start">
                  <div class="flex-1">
                    <h3 class="font-medium text-gray-900">{{ client.company }}</h3>
                    <p class="text-sm text-gray-600">{{ client.contactPerson }}</p>
                    <p class="text-sm text-gray-500">{{ client.industry }}</p>
                    <div class="mt-2 text-xs text-gray-400">
                      <p>{{ client.email }}</p>
                      <p>{{ client.phone }}</p>
                    </div>
                  </div>
                  <div class="flex space-x-2">
                    <button
                      @click="editClient(client)"
                      class="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      @click="deleteClient(client.id)"
                      class="text-red-600 hover:text-red-800 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Materials Section -->
        <section class="bg-white rounded-lg shadow-sm border border-gray-200">
          <div class="px-6 py-4 border-b border-gray-200">
            <div class="flex justify-between items-center">
              <h2 class="text-lg font-semibold text-gray-900">Materials</h2>
              <button
                @click="showAddMaterialModal = true"
                class="bg-green-600 text-white px-3 py-1.5 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm"
              >
                Add Material
              </button>
            </div>
          </div>
          
          <div class="p-6">
            <div class="space-y-3">
              <div
                v-for="material in mockMaterials"
                :key="material.id"
                class="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
              >
                <div class="flex justify-between items-start">
                  <div class="flex-1">
                    <h3 class="font-medium text-gray-900">{{ material.name }}</h3>
                    <div class="flex items-center space-x-2 mt-1">
                      <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {{ material.type }}
                      </span>
                      <span v-if="material.weight" class="text-sm text-gray-600">{{ material.weight }}</span>
                      <span v-if="material.size" class="text-sm text-gray-600">{{ material.size }}</span>
                    </div>
                    <p class="text-sm text-gray-500 mt-1">{{ material.supplier }}</p>
                    <div class="mt-2 text-sm text-gray-600">
                      <span class="font-medium">${{ material.costPerUnit.toFixed(2) }}</span>
                      <span class="text-gray-500"> per {{ material.unit }}</span>
                    </div>
                  </div>
                  <div class="flex space-x-2">
                    <button
                      @click="editMaterial(material)"
                      class="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      @click="deleteMaterial(material.id)"
                      class="text-red-600 hover:text-red-800 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Additional Configuration Sections -->
      <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Pantone Colors -->
        <section class="bg-white rounded-lg shadow-sm border border-gray-200">
          <div class="px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900">Pantone Colors</h3>
          </div>
          <div class="p-6">
            <div class="space-y-2">
              <div
                v-for="color in mockPantoneColors"
                :key="color.code"
                class="flex items-center space-x-3"
              >
                <div
                  class="w-6 h-6 rounded border border-gray-300"
                  :style="{ backgroundColor: color.hex }"
                ></div>
                <div>
                  <p class="text-sm font-medium text-gray-900">{{ color.code }}</p>
                  <p class="text-xs text-gray-500">{{ color.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Printing Methods -->
        <section class="bg-white rounded-lg shadow-sm border border-gray-200">
          <div class="px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900">Printing Methods</h3>
          </div>
          <div class="p-6">
            <div class="space-y-3">
              <div
                v-for="method in mockPrintingMethods"
                :key="method.id"
                class="p-3 border border-gray-200 rounded-lg"
              >
                <h4 class="font-medium text-gray-900 text-sm">{{ method.name }}</h4>
                <p class="text-xs text-gray-600 mt-1">{{ method.description }}</p>
                <div class="mt-2">
                  <span class="text-xs text-gray-500">Cost: {{ method.costMultiplier }}x</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Finishing Methods -->
        <section class="bg-white rounded-lg shadow-sm border border-gray-200">
          <div class="px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900">Finishing Methods</h3>
          </div>
          <div class="p-6">
            <div class="space-y-3">
              <div
                v-for="method in mockFinishingMethods"
                :key="method.id"
                class="p-3 border border-gray-200 rounded-lg"
              >
                <h4 class="font-medium text-gray-900 text-sm">{{ method.name }}</h4>
                <p class="text-xs text-gray-600 mt-1">{{ method.description }}</p>
                <div class="mt-2">
                  <span class="text-xs text-gray-500">Cost: {{ method.costMultiplier }}x</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Add Client Modal -->
    <div
      v-if="showAddClientModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click="showAddClientModal = false"
    >
      <div
        class="bg-white rounded-lg p-6 w-full max-w-md"
        @click.stop
      >
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Add New Client</h3>
        <form @submit.prevent="addClient" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input
              v-model="newClient.company"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
            <input
              v-model="newClient.contactPerson"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              v-model="newClient.email"
              type="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Industry</label>
            <input
              v-model="newClient.industry"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              required
            />
          </div>
          <div class="flex space-x-3 pt-4">
            <button
              type="submit"
              class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Add Client
            </button>
            <button
              type="button"
              @click="showAddClientModal = false"
              class="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Add Material Modal -->
    <div
      v-if="showAddMaterialModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click="showAddMaterialModal = false"
    >
      <div
        class="bg-white rounded-lg p-6 w-full max-w-md"
        @click.stop
      >
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Add New Material</h3>
        <form @submit.prevent="addMaterial" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Material Name</label>
            <input
              v-model="newMaterial.name"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select
              v-model="newMaterial.type"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            >
              <option value="paper">Paper</option>
              <option value="cardboard">Cardboard</option>
              <option value="fabric">Fabric</option>
              <option value="plastic">Plastic</option>
              <option value="vinyl">Vinyl</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
            <input
              v-model="newMaterial.supplier"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              required
            />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Cost per Unit</label>
                          <input
              v-model="newMaterial.costPerUnit"
              type="number"
              step="0.01"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              required
            />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Unit</label>
                          <input
              v-model="newMaterial.unit"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              required
            />
            </div>
          </div>
          <div class="flex space-x-3 pt-4">
            <button
              type="submit"
              class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Add Material
            </button>
            <button
              type="button"
              @click="showAddMaterialModal = false"
              class="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { navigateTo } from '#app'
import {
  mockClients,
  mockMaterials,
  mockPantoneColors,
  mockPrintingMethods,
  mockFinishingMethods,
  type Client,
  type Material
} from '~/data/mockData'

// Reactive state
const showAddClientModal = ref(false)
const showAddMaterialModal = ref(false)

const newClient = ref({
  company: '',
  contactPerson: '',
  email: '',
  industry: ''
})

const newMaterial = ref({
  name: '',
  type: 'paper' as Material['type'],
  supplier: '',
  costPerUnit: 0,
  unit: ''
})

// Methods
const addClient = () => {
  const client: Client = {
    id: `client-${Date.now()}`,
    name: newClient.value.contactPerson,
    company: newClient.value.company,
    email: newClient.value.email,
    phone: '+1 (555) 000-0000',
    address: 'Address to be added',
    industry: newClient.value.industry,
    contactPerson: newClient.value.contactPerson
  }
  
  // In a real app, this would be an API call
  mockClients.push(client)
  
  // Reset form
  newClient.value = {
    company: '',
    contactPerson: '',
    email: '',
    industry: ''
  }
  
  showAddClientModal.value = false
}

const addMaterial = () => {
  const material: Material = {
    id: `mat-${Date.now()}`,
    name: newMaterial.value.name,
    type: newMaterial.value.type,
    supplier: newMaterial.value.supplier,
    costPerUnit: newMaterial.value.costPerUnit,
    unit: newMaterial.value.unit
  }
  
  // In a real app, this would be an API call
  mockMaterials.push(material)
  
  // Reset form
  newMaterial.value = {
    name: '',
    type: 'paper',
    supplier: '',
    costPerUnit: 0,
    unit: ''
  }
  
  showAddMaterialModal.value = false
}

const editClient = (client: Client) => {
  // In a real app, this would open an edit modal
  console.log('Edit client:', client)
}

const deleteClient = (clientId: string) => {
  // In a real app, this would be an API call
  const index = mockClients.findIndex(c => c.id === clientId)
  if (index > -1) {
    mockClients.splice(index, 1)
  }
}

const editMaterial = (material: Material) => {
  // In a real app, this would open an edit modal
  console.log('Edit material:', material)
}

const deleteMaterial = (materialId: string) => {
  // In a real app, this would be an API call
  const index = mockMaterials.findIndex(m => m.id === materialId)
  if (index > -1) {
    mockMaterials.splice(index, 1)
  }
}
</script>

<style scoped>
/* Custom focus styles for better accessibility */
input:focus, select:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Smooth transitions */
* {
  transition: all 0.2s ease-in-out;
}
</style>
