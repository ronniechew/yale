<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <header class="px-4 sm:px-6 py-4 bg-white border-b border-gray-200 shadow-sm">
      <div class="flex justify-between items-center">
        <h1 class="text-lg sm:text-xl font-bold text-gray-900">Printing Process Record</h1>
        <!-- <div class="flex space-x-3">
          <button
            @click="populateDemoData"
            class="bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            Populate Demo
          </button>
          <button
            @click="navigateTo('/docket')"
            class="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            Back to Docket
          </button>
          <button
            @click="handleSave"
            class="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Save Form
          </button>
        </div> -->
      </div>
    </header>

    <!-- Main Content -->
    <main class="px-3 sm:px-6 py-4 sm:py-6">
      <form class="space-y-6 sm:space-y-8" @submit.prevent="handleSave">
        <!-- Header Information Section -->
        <section class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <h2 class="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Printing Information</h2>
          <div class="grid grid-cols-1 gap-4 sm:gap-6">
            <!-- Machine Type -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-3">Machine Type</label>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    v-model="form.machineType"
                    type="radio"
                    value="SM102-ZP"
                    class="mr-3 text-blue-600 focus:ring-blue-500 w-5 h-5"
                  >
                  <span class="text-sm text-gray-700">SM102-ZP</span>
                </label>
                <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    v-model="form.machineType"
                    type="radio"
                    value="SORDZ"
                    class="mr-3 text-blue-600 focus:ring-blue-500 w-5 h-5"
                  >
                  <span class="text-sm text-gray-700">SORDZ</span>
                </label>
                <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    v-model="form.machineType"
                    type="radio"
                    value="GTO-52"
                    class="mr-3 text-blue-600 focus:ring-blue-500 w-5 h-5"
                  >
                  <span class="text-sm text-gray-700">GTO-52</span>
                </label>
              </div>
            </div>

            <!-- Basic Info -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Performed by</label>
                <input
                  v-model="form.performedBy"
                  type="text"
                  :placeholder="mockCurrentUser.name"
                  disabled
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed"
                >
                <!-- <div class="mt-1 text-xs text-gray-500">
                  Current user: {{ mockCurrentUser.name }} ({{ mockCurrentUser.role }})
                </div> -->
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Job Docket No.</label>
                <input
                  v-model="form.jobDocketNo"
                  type="text"
                  placeholder="Enter docket number"
                  disabled
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <div class="relative">
                  <input
                    v-model="form.date"
                    type="date"
                    class="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base appearance-none"
                    :max="getCurrentDate()"
                  >
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <div class="relative">
                  <input
                    v-model="form.time"
                    type="time"
                    class="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base appearance-none"
                  >
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>


              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Order Quantity</label>
                <div class="relative">
                  <input
                    v-model="form.orderQuantity"
                    type="text"
                    placeholder="e.g., 30,000 pcs"
                    disabled
                    class="w-full px-4 py-3 pr-16 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed"
                  >
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span class="text-sm font-medium text-gray-500">Pcs</span>
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Customer Name</label>
                <input
                  v-model="form.customerName"
                  type="text"
                  placeholder="Enter customer name"
                  disabled
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Part Number & Version</label>
                <input
                  v-model="form.partNumberVersion"
                  type="text"
                  placeholder="e.g., 16077881 / 1223"
                  disabled
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Received Paper Quantity</label>
                <div class="relative">
                  <input
                    v-model="form.receivedPaperQty"
                    type="text"
                    placeholder="e.g., 6200 pcs"
                    disabled
                    class="w-full px-4 py-3 pr-16 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed"
                  >
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span class="text-sm font-medium text-gray-500">Pcs</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Page Printed -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-3">Page Printed</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    v-model="form.pagePrinted"
                    type="radio"
                    value="Front Print"
                    class="mr-3 text-blue-600 focus:ring-blue-500 w-5 h-5"
                  >
                  <span class="text-sm text-gray-700">Front Print</span>
                </label>
                <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    v-model="form.pagePrinted"
                    type="radio"
                    value="Back Print"
                    class="mr-3 text-blue-600 focus:ring-blue-500 w-5 h-5"
                  >
                  <span class="text-sm text-gray-700">Back Print</span>
                </label>
                <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    v-model="form.pagePrinted"
                    type="radio"
                    value="Single Print"
                    class="mr-3 text-blue-600 focus:ring-blue-500 w-5 h-5"
                  >
                  <span class="text-sm text-gray-700">Single Print</span>
                </label>
                <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    v-model="form.pagePrinted"
                    type="radio"
                    value="Duplex Print"
                    class="mr-3 text-blue-600 focus:ring-blue-500 w-5 h-5"
                  >
                  <span class="text-sm text-gray-700">Duplex Print</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        <!-- Line Clearance Section -->
        <section class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <h2 class="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Line Clearance</h2>
          <div class="space-y-4">
            <div class="space-y-3">
              <div class="p-4 border border-gray-200 rounded-lg">
                <label class="block text-sm font-medium text-gray-700 mb-3">1. Ensure that there is only one part number at work station at any one time.</label>
                <div class="flex gap-3">
                  <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                    <input
                      v-model="form.lineClearance1"
                      type="radio"
                      value="Yes"
                      class="mr-2 text-green-600 focus:ring-green-500 w-5 h-5"
                    >
                    <span class="text-sm text-gray-700">Yes</span>
                  </label>
                  <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                    <input
                      v-model="form.lineClearance1"
                      type="radio"
                      value="No"
                      class="mr-2 text-red-600 focus:ring-red-500 w-5 h-5"
                    >
                    <span class="text-sm text-gray-700">No</span>
                  </label>
                  <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                    <input
                      v-model="form.lineClearance1"
                      type="radio"
                      value="N/A"
                      class="mr-2 text-gray-600 focus:ring-gray-500 w-5 h-5"
                    >
                    <span class="text-sm text-gray-700">N/A</span>
                  </label>
                </div>
              </div>

              <div class="p-4 border border-gray-200 rounded-lg">
                <label class="block text-sm font-medium text-gray-700 mb-3">2. Ensure the entire room, work station and working table is clean and clear without any leftover of the previous product.</label>
                <div class="flex gap-3">
                  <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                    <input
                      v-model="form.lineClearance2"
                      type="radio"
                      value="Yes"
                      class="mr-2 text-green-600 focus:ring-green-500 w-5 h-5"
                    >
                    <span class="text-sm text-gray-700">Yes</span>
                  </label>
                  <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                    <input
                      v-model="form.lineClearance2"
                      type="radio"
                      value="No"
                      class="mr-2 text-red-600 focus:ring-red-500 w-5 h-5"
                    >
                    <span class="text-sm text-gray-700">No</span>
                  </label>
                  <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                    <input
                      v-model="form.lineClearance2"
                      type="radio"
                      value="N/A"
                      class="mr-2 text-gray-600 focus:ring-gray-500 w-5 h-5"
                    >
                    <span class="text-sm text-gray-700">N/A</span>
                  </label>
                </div>
              </div>

              <div class="p-4 border border-gray-200 rounded-lg">
                <label class="block text-sm font-medium text-gray-700 mb-3">3. All rejected goods are to be disposed accordingly.</label>
                <div class="flex gap-3">
                  <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                    <input
                      v-model="form.lineClearance3"
                      type="radio"
                      value="Yes"
                      class="mr-2 text-green-600 focus:ring-green-500 w-5 h-5"
                    >
                    <span class="text-sm text-gray-700">Yes</span>
                  </label>
                  <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                    <input
                      v-model="form.lineClearance3"
                      type="radio"
                      value="No"
                      class="mr-2 text-red-600 focus:ring-red-500 w-5 h-5"
                    >
                    <span class="text-sm text-gray-700">No</span>
                  </label>
                  <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                    <input
                      v-model="form.lineClearance3"
                      type="radio"
                      value="N/A"
                      class="mr-2 text-gray-600 focus:ring-gray-500 w-5 h-5"
                    >
                    <span class="text-sm text-gray-700">N/A</span>
                  </label>
                </div>
              </div>
            </div>

            <div class="pt-4 border-t border-gray-200">
              <label class="block text-sm font-medium text-gray-700 mb-2">Confirmed by</label>
              <input
                v-model="form.lineClearanceConfirmedBy"
                type="text"
                placeholder="Enter signature/initials"
                class="w-full sm:w-64 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
              >
            </div>

            <!-- <div class="bg-blue-50 p-4 rounded-lg">
              <p class="text-sm text-blue-800">
                <strong>Legend:</strong> (✓) Line Clearance completed as required, (✗) Inspection not completed (reason in remark), (N/A) Not Applicable for your process
              </p>
            </div> -->
          </div>
        </section>

        <!-- Quality Control Section -->
        <section class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <h2 class="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Quality Control (QC)</h2>
          <div class="grid grid-cols-1 gap-6">
            <!-- QC 1 -->
            <div class="border border-gray-200 rounded-lg p-4">
              <h3 class="text-md font-semibold text-gray-800 mb-4 text-center bg-blue-50 py-2 rounded">QC 1</h3>
              <div class="space-y-4">
                <div class="space-y-3">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span class="text-sm font-medium text-gray-700">Part No Check:</span>
                    <div class="flex gap-3">
                      <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <input
                          v-model="form.qc1.partNoCheck"
                          type="radio"
                          value="Approved"
                          class="mr-2 text-green-600 focus:ring-green-500 w-5 h-5"
                        >
                        <span class="text-sm text-gray-700">Approved</span>
                      </label>
                      <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <input
                          v-model="form.qc1.partNoCheck"
                          type="radio"
                          value="Rejected"
                          class="mr-2 text-red-600 focus:ring-red-500 w-5 h-5"
                        >
                        <span class="text-sm text-gray-700">Rejected</span>
                      </label>
                    </div>
                  </div>

                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span class="text-sm font-medium text-gray-700">Version Check:</span>
                    <div class="flex gap-3">
                      <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <input
                          v-model="form.qc1.versionCheck"
                          type="radio"
                          value="Approved"
                          class="mr-2 text-green-600 focus:ring-green-500 w-5 h-5"
                        >
                        <span class="text-sm text-gray-700">Approved</span>
                      </label>
                      <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <input
                          v-model="form.qc1.versionCheck"
                          type="radio"
                          value="Rejected"
                          class="mr-2 text-red-600 focus:ring-red-500 w-5 h-5"
                        >
                        <span class="text-sm text-gray-700">Rejected</span>
                      </label>
                    </div>
                  </div>

                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span class="text-sm font-medium text-gray-700">Printing Check:</span>
                    <div class="flex gap-3">
                      <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <input
                          v-model="form.qc1.printingCheck"
                          type="radio"
                          value="Approved"
                          class="mr-2 text-green-600 focus:ring-green-500 w-5 h-5"
                        >
                        <span class="text-sm text-gray-700">Approved</span>
                      </label>
                      <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <input
                          v-model="form.qc1.printingCheck"
                          type="radio"
                          value="Rejected"
                          class="mr-2 text-red-600 focus:ring-red-500 w-5 h-5"
                        >
                        <span class="text-sm text-gray-700">Rejected</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="pt-3 border-t border-gray-200">
                  <label class="block text-sm font-medium text-gray-700 mb-2">QC Verification</label>
                  <input
                    v-model="form.qc1.verification"
                    type="text"
                    placeholder="Enter signature/initials"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                  >
                </div>
              </div>
            </div>

            <!-- QC 2 -->
            <div class="border border-gray-200 rounded-lg p-4">
              <h3 class="text-md font-semibold text-gray-800 mb-4 text-center bg-blue-50 py-2 rounded">QC 2</h3>
              <div class="space-y-4">
                <div class="space-y-3">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span class="text-sm font-medium text-gray-700">Part No Check:</span>
                    <div class="flex gap-3">
                      <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <input
                          v-model="form.qc2.partNoCheck"
                          type="radio"
                          value="Approved"
                          class="mr-2 text-green-600 focus:ring-green-500 w-5 h-5"
                        >
                        <span class="text-sm text-gray-700">Approved</span>
                      </label>
                      <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <input
                          v-model="form.qc2.partNoCheck"
                          type="radio"
                          value="Rejected"
                          class="mr-2 text-red-600 focus:ring-red-500 w-5 h-5"
                        >
                        <span class="text-sm text-gray-700">Rejected</span>
                      </label>
                    </div>
                  </div>

                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span class="text-sm font-medium text-gray-700">Version Check:</span>
                    <div class="flex gap-3">
                      <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <input
                          v-model="form.qc2.versionCheck"
                          type="radio"
                          value="Approved"
                          class="mr-2 text-green-600 focus:ring-green-500 w-5 h-5"
                        >
                        <span class="text-sm text-gray-700">Approved</span>
                      </label>
                      <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <input
                          v-model="form.qc2.versionCheck"
                          type="radio"
                          value="Rejected"
                          class="mr-2 text-red-600 focus:ring-red-500 w-5 h-5"
                        >
                        <span class="text-sm text-gray-700">Rejected</span>
                      </label>
                    </div>
                  </div>

                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span class="text-sm font-medium text-gray-700">Printing Check:</span>
                    <div class="flex gap-3">
                      <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <input
                          v-model="form.qc2.printingCheck"
                          type="radio"
                          value="Approved"
                          class="mr-2 text-green-600 focus:ring-green-500 w-5 h-5"
                        >
                        <span class="text-sm text-gray-700">Approved</span>
                      </label>
                      <label class="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <input
                          v-model="form.qc2.printingCheck"
                          type="radio"
                          value="Rejected"
                          class="mr-2 text-red-600 focus:ring-red-500 w-5 h-5"
                        >
                        <span class="text-sm text-gray-700">Rejected</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="pt-3 border-t border-gray-200">
                  <label class="block text-sm font-medium text-gray-700 mb-2">QC Verification</label>
                  <input
                    v-model="form.qc2.verification"
                    type="text"
                    placeholder="Enter signature/initials"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                  >
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Hourly Check Section -->
        <section class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <h2 class="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Hourly Check</h2>
          <div class="mb-4 p-3 bg-yellow-50 rounded-lg">
            <p class="text-sm text-yellow-800">
              <strong>Note:</strong> Inspection Sample Size Check: Minimum 30 sheet per hour
            </p>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full border border-gray-300 min-w-[500px]">
              <thead>
                <tr class="bg-gray-50">
                  <th class="border border-gray-300 px-3 py-3 text-sm font-medium text-gray-700">Time</th>
                  <th class="border border-gray-300 px-3 py-3 text-sm font-medium text-gray-700">Sample Count</th>
                  <th class="border border-gray-300 px-3 py-3 text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="hour in hourlySlots" :key="hour" class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-3 py-3 text-sm text-gray-700 font-medium">{{ hour }}</td>
                  <td class="border border-gray-300 px-3 py-3">
                    <div class="flex items-center space-x-2">
                      <input
                        v-model="form.hourlyChecks[hour]"
                        type="number"
                        min="0"
                        placeholder="0"
                        class="w-20 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-base"
                      >
                      <div class="flex items-center space-x-1">
                        <button
                          type="button"
                          @click="incrementHourlyCount(hour)"
                          class="w-8 h-8 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold transition-colors duration-200 shadow-sm"
                          title="Increase count by 1"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          @click="decrementHourlyCount(hour)"
                          class="w-8 h-8 bg-red-400 hover:bg-red-500 text-white rounded-full flex items-center justify-center text-lg font-bold transition-colors duration-200 shadow-sm"
                          title="Decrease count by 1"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="border border-gray-300 px-3 py-3 text-sm text-gray-600">
                    <div class="flex space-x-1">
                      <button
                        type="button"
                        @click="setHourlyCount(hour, 5)"
                        class="px-2 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs rounded transition-colors duration-200"
                        title="Set to 5"
                      >
                        +5
                      </button>
                      <button
                        type="button"
                        @click="setHourlyCount(hour, 10)"
                        class="px-2 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs rounded transition-colors duration-200"
                        title="Set to 10"
                      >
                        +10
                      </button>
                      <button
                        type="button"
                        @click="setHourlyCount(hour, 0)"
                        class="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded transition-colors duration-200"
                        title="Reset to 0"
                      >
                        Reset
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Defect Criteria Section -->
        <section class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <h2 class="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Defect Criteria</h2>
          <div class="grid grid-cols-1 gap-6">
            <div class="space-y-4">
              <div v-for="defect in defectTypes" :key="defect" class="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                <span class="text-sm font-medium text-gray-700">{{ defect }}</span>
                <input
                  v-model="form.defects[defect]"
                  type="number"
                  min="0"
                  placeholder="0"
                  class="w-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-base"
                >
              </div>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-gray-200">
            <label class="block text-sm font-medium text-gray-700 mb-2">Remarks / Update Correction</label>
            <textarea
              v-model="form.remarks"
              rows="4"
              placeholder="Enter any remarks, updates, or corrections..."
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical text-base"
            ></textarea>
          </div>
        </section>

        <!-- Final Results Section -->
        <section class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <h2 class="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Final Results</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Printed Quantity</label>
              <div class="relative">
                <input
                  v-model="form.printedQuantity"
                  type="text"
                  placeholder="e.g., 6122 pcs"
                  class="w-full px-4 py-3 pr-16 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                >
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span class="text-sm font-medium text-gray-500">Pcs</span>
                </div>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Total Reject Quantity</label>
              <div class="relative">
                <input
                    v-model="form.totalRejectQuantity"
                    type="text"
                    placeholder="e.g., 78 pcs"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                >
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span class="text-sm font-medium text-gray-500">Pcs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Bottom spacing for mobile floating button -->
        <div class="pb-24 sm:pb-6"></div>

        <!-- Mobile Action Buttons -->
        <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-10 sm:hidden">
          <div class="flex space-x-3">
            <button
              type="submit"
              class="flex-1 bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Save
            </button>
          </div>
        </div>

        <!-- Desktop Save Button -->
        <div class="pt-6 border-t border-gray-200 hidden sm:block">
          <button
            type="submit"
            class="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Save Printing Process Record
          </button>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { navigateTo } from '#app'
import { mockCurrentUser, getPrintingFormData } from '~/data/mockData'

const form = ref({
  machineType: '',
  performedBy: mockCurrentUser.name, // Auto-populate with current user
  date: '',
  time: '',
  jobDocketNo: '',
  orderQuantity: '',
  customerName: '',
  partNumberVersion: '',
  pagePrinted: '',
  receivedPaperQty: '',
  lineClearance1: '',
  lineClearance2: '',
  lineClearance3: '',
  lineClearanceConfirmedBy: '',
  qc1: {
    partNoCheck: '',
    versionCheck: '',
    printingCheck: '',
    verification: ''
  },
  qc2: {
    partNoCheck: '',
    versionCheck: '',
    printingCheck: '',
    verification: ''
  },
  hourlyChecks: {} as Record<string, number>,
  defects: {} as Record<string, number>,
  remarks: '',
  printedQuantity: '',
  totalRejectQuantity: ''
})

const hourlySlots = [
  '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
  '7:00 PM', '8:00 PM'
]

const defectTypes = [
  'Mis-Registration',
  'Dirty Mark',
  'Blurred Image',
  'Missing Text',
  'Worn Out Plate',
  'Hickey',
  'Ghosting/Doubling',
  'Oil Stain',
  'Page Sequence Incorrect',
  'Others (Please Specify)'
]

// Initialize hourly checks
hourlySlots.forEach(hour => {
  form.value.hourlyChecks[hour] = 0
})

// Initialize defects
defectTypes.forEach(defect => {
  form.value.defects[defect] = 0
})

const handleSave = () => {
  console.log('Saving printing process record:', form.value)
  // Add validation and API call logic here
  alert('Printing Process Record saved successfully!')
}

// Helper function to get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Helper function to get current time in HH:MM format
const getCurrentTime = () => {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
}

// Hourly check helper functions
const incrementHourlyCount = (hour: string) => {
  if (form.value.hourlyChecks[hour] === undefined) {
    form.value.hourlyChecks[hour] = 0
  }
  form.value.hourlyChecks[hour]++
}

const decrementHourlyCount = (hour: string) => {
  if (form.value.hourlyChecks[hour] === undefined) {
    form.value.hourlyChecks[hour] = 0
  }
  if (form.value.hourlyChecks[hour] > 0) {
    form.value.hourlyChecks[hour]--
  }
}

const setHourlyCount = (hour: string, value: number) => {
  if (value == 0) form.value.hourlyChecks[hour] = 0;
  form.value.hourlyChecks[hour] = (form.value.hourlyChecks[hour] ?? 0) +value
}

// Initialize form with current date and time if empty
onMounted(() => {
  if (!form.value.date) {
    form.value.date = getCurrentDate()
  }
  if (!form.value.time) {
    form.value.time = getCurrentTime()
  }
  
  // Auto-populate form with mock data
  const demoData = getPrintingFormData()
  form.value = {
    machineType: demoData.machineType,
    performedBy: mockCurrentUser.name, // Use current user
    date: demoData.date,
    time: demoData.time,
    jobDocketNo: demoData.jobDocketNo,
    orderQuantity: demoData.orderQuantity,
    customerName: demoData.customerName,
    partNumberVersion: demoData.partNumberVersion,
    pagePrinted: demoData.pagePrinted,
    receivedPaperQty: demoData.receivedPaperQty,
    lineClearance1: demoData.lineClearance1,
    lineClearance2: demoData.lineClearance2,
    lineClearance3: demoData.lineClearance3,
    lineClearanceConfirmedBy: demoData.lineClearanceConfirmedBy,
    qc1: {
      partNoCheck: demoData.qc1.partNoCheck,
      versionCheck: demoData.qc1.versionCheck,
      printingCheck: demoData.qc1.printingCheck,
      verification: demoData.lineClearanceConfirmedBy,
    },
    qc2: {
      partNoCheck: demoData.qc2.partNoCheck,
      versionCheck: demoData.qc2.versionCheck,
      printingCheck: demoData.qc2.printingCheck,
      verification: demoData.lineClearanceConfirmedBy,
    },
    hourlyChecks: demoData.hourlyChecks,
    defects: demoData.defects,
    remarks: demoData.remarks,
    printedQuantity: demoData.printedQuantity,
    totalRejectQuantity: demoData.totalRejectQuantity
  }
})
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

/* Table styling */
table {
  border-collapse: collapse;
}

th, td {
  border: 1px solid #d1d5db;
}

/* Radio button styling */
input[type="radio"] {
  width: 16px;
  height: 16px;
}

/* Checkbox styling */
input[type="checkbox"] {
  width: 16px;
  height: 16px;
}

/* Date and Time picker styling */
input[type="date"], input[type="time"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

input[type="date"]::-webkit-calendar-picker-indicator,
input[type="time"]::-webkit-calendar-picker-indicator {
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

/* Mobile-specific date/time picker enhancements */
@media (max-width: 640px) {
  input[type="date"], input[type="time"] {
    font-size: 16px; /* Prevents zoom on iOS */
  }
  
  /* Ensure proper touch targets on mobile */
  input[type="date"]::-webkit-calendar-picker-indicator,
  input[type="time"]::-webkit-calendar-picker-indicator {
    width: 44px;
    height: 44px;
  }
}

/* Focus states for better accessibility */
input[type="date"]:focus,
input[type="time"]:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Icon styling for date and time inputs */
.date-time-icon {
  color: #9ca3af;
  transition: color 0.2s ease-in-out;
}

input[type="date"]:focus + .date-time-icon,
input[type="time"]:focus + .date-time-icon {
  color: #3b82f6;
}
</style>
