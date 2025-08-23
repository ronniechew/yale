<template>
  <div class="min-h-screen bg-white">
    <!-- Header Section -->
    <header class="px-4 sm:px-6 py-4 border-b border-gray-200">
      <div class="flex justify-between items-center">
        <h1 class="text-xl sm:text-2xl font-bold text-black">New Job Docket</h1>
        <div class="flex space-x-3">
          <button
            @click="populateDemoData"
            class="bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            Populate Demo
          </button>
          <button
            @click="navigateTo('/config')"
            class="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            Configuration
          </button>
          <button
            @click="handleSave"
            class="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Save
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="px-4 sm:px-6 py-6">
      <form class="space-y-8" @submit.prevent="handleSave">
        <!-- Job Summary Section -->
        <section>
          <h2 class="text-lg font-bold text-black mb-4">Job Summary</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="relative">
              <label class="block text-sm font-medium text-black mb-2">Client</label>
              <div class="relative">
                <input
                  v-model="clientSearch"
                  @input="filterClients"
                  @focus="showClientDropdown = true"
                  @blur="handleClientBlur"
                  type="text"
                  placeholder="Search for a client..."
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                >
                <div v-if="showClientDropdown && filteredClients.length > 0" class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  <div
                    v-for="client in filteredClients"
                    :key="client.id"
                    @click="selectClient(client)"
                    class="px-3 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                  >
                    <div class="font-medium text-gray-900">{{ client.company }}</div>
                    <div class="text-sm text-gray-600">{{ client.contactPerson }}</div>
                  </div>
                </div>
                <div v-if="showClientDropdown && filteredClients.length === 0 && clientSearch" class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                  <div class="px-3 py-2 text-gray-500">No clients found</div>
                </div>
                <!-- <div v-if="selectedClientContact && !showClientDropdown" class="mt-1 text-sm text-gray-600">
                  Contact: {{ selectedClientContact }}
                </div> -->
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Purchase Order No.</label>
              <input
                v-model="form.purchaseOrder"
                type="text"
                placeholder="Enter PO Number"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Job Title</label>
              <input
                v-model="form.jobTitle"
                type="text"
                placeholder="Enter Job Title"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Quantity</label>
              <input
                v-model="form.quantity"
                type="text"
                placeholder="Enter Quantity"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              >
            </div>
            <div class="lg:col-span-2">
              <label class="block text-sm font-medium text-black mb-2">Description</label>
              <textarea
                v-model="form.description"
                rows="3"
                placeholder="Enter description"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Created On</label>
              <input
                v-model="form.createdOn"
                type="date"
                placeholder="Select Date"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Due Date</label>
              <input
                v-model="form.dueDate"
                type="date"
                placeholder="Select Date"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              >
            </div>
          </div>
        </section>

        <!-- Job Details Section -->
        <section>
          <h2 class="text-lg font-bold text-black mb-4">Job Details</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-black mb-2">Open Size</label>
              <input
                v-model="form.openSize"
                type="text"
                placeholder="Enter Open Size"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Final Size / Closed Size</label>
              <input
                v-model="form.finalSize"
                type="text"
                placeholder="Enter Final Size"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Material for Cover</label>
              <input
                v-model="form.coverMaterial"
                type="text"
                placeholder="Enter Material"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">No. of Colors for Cover</label>
              <input
                v-model="form.coverColors"
                type="text"
                placeholder="Enter Number of Colors"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Pantone Code</label>
              <input
                v-model="form.coverPantone"
                type="text"
                placeholder="Enter Pantone Code"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Printing for Cover</label>
              <input
                v-model="form.coverPrinting"
                type="text"
                placeholder="Enter Printing Method"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Finishing for Cover</label>
              <input
                v-model="form.coverFinishing"
                type="text"
                placeholder="Enter Finishing Details"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Material for Inner</label>
              <input
                v-model="form.innerMaterial"
                type="text"
                placeholder="Enter Material"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">No. of Colors for Inner</label>
              <input
                v-model="form.innerColors"
                type="text"
                placeholder="Enter Number of Colors"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Pantone Code (for Inner)</label>
              <input
                v-model="form.innerPantone"
                type="text"
                placeholder="Enter Pantone Code"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Printing for Inner</label>
              <input
                v-model="form.innerPrinting"
                type="text"
                placeholder="Enter Printing Method"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">No. of Pages</label>
              <input
                v-model="form.pageCount"
                type="text"
                placeholder="Enter Number of Pages"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Numbering *if any*</label>
              <input
                v-model="form.numbering"
                type="text"
                placeholder="Enter Numbering Details"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Copy Change *if any*</label>
              <input
                v-model="form.copyChange"
                type="text"
                placeholder="Enter Copy Change Details"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
          </div>
        </section>

        <!-- Materials Section -->
        <section>
          <h2 class="text-lg font-bold text-black mb-4">Materials</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-black mb-2">Material Spec (Name / Size)</label>
              <input
                v-model="form.materialSpec"
                type="text"
                placeholder="Enter Material Specification"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Cut to Size / Number of ups</label>
              <input
                v-model="form.cutToSize"
                type="text"
                placeholder="Enter Cutting Details"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-black mb-2">Cutting Quantity</label>
              <input
                v-model="form.cuttingQuantity"
                type="text"
                placeholder="Enter Cutting Quantity"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
          </div>
        </section>

        <!-- Bottom Save Button for Mobile -->
        <div class="lg:hidden pt-4 border-t border-gray-200">
          <button
            type="submit"
            class="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Save Job Docket
          </button>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { navigateTo } from '#app'
import { populateWithDemoData } from '~/utils/demoDataPopulator'
import { mockClients, type Client } from '~/data/mockData'

const form = ref({
  client: '',
  purchaseOrder: '',
  jobTitle: '',
  quantity: '',
  description: '',
  createdOn: '',
  dueDate: '',
  openSize: '',
  finalSize: '',
  coverMaterial: '',
  coverColors: '',
  coverPantone: '',
  coverPrinting: '',
  coverFinishing: '',
  innerMaterial: '',
  innerColors: '',
  innerPantone: '',
  innerPrinting: '',
  pageCount: '',
  numbering: '',
  copyChange: '',
  materialSpec: '',
  cutToSize: '',
  cuttingQuantity: ''
})

// Client dropdown functionality
const clientSearch = ref('')
const showClientDropdown = ref(false)
const filteredClients = ref<Client[]>([])
const selectedClientContact = ref('')

// Filter clients based on search input
const filterClients = () => {
  if (!clientSearch.value.trim()) {
    filteredClients.value = mockClients
  } else {
    const searchTerm = clientSearch.value.toLowerCase()
    filteredClients.value = mockClients.filter(client => 
      client.company.toLowerCase().includes(searchTerm) ||
      client.contactPerson.toLowerCase().includes(searchTerm) ||
      client.name.toLowerCase().includes(searchTerm)
    )
  }
}

// Select a client from dropdown
const selectClient = (client: Client) => {
  form.value.client = client.company
  clientSearch.value = client.company
  selectedClientContact.value = client.contactPerson
  showClientDropdown.value = false
}

// Handle blur event for dropdown
const handleClientBlur = () => {
  // Delay hiding dropdown to allow click events to fire
  setTimeout(() => {
    showClientDropdown.value = false
  }, 200)
}

// Initialize filtered clients on mount
onMounted(() => {
  filteredClients.value = mockClients
})

const handleSave = () => {
  // Handle save logic here
  console.log('Saving job docket:', form.value)
  // You can add API calls, validation, etc.
}

const populateDemoData = () => {
  const demoData = populateWithDemoData()
  Object.assign(form.value, demoData)
  // Also populate the client search field and find the contact person
  if (demoData.client) {
    clientSearch.value = demoData.client
    // Find the client in mock data to get contact person
    const client = mockClients.find(c => c.company === demoData.client)
    if (client) {
      selectedClientContact.value = client.contactPerson
    }
  }
}
</script>

<style scoped>
/* Custom focus styles for better accessibility */
input:focus, textarea:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Smooth transitions */
* {
  transition: all 0.2s ease-in-out;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
