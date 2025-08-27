<template>
  <footer class="bg-gray-50 border-t border-gray-200">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="text-2xl font-bold text-gray-900">SWS</div>
            <div class="text-sm text-gray-500">by Byteremix</div>
          </div>
          <p class="text-gray-600 text-sm max-w-md">
            Simple Web Scraper - An elegant solution for extracting data from websites with XPath selectors, 
            multi-threading support, and browser-based scraping capabilities.
          </p>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-900 mb-4">Product</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-600 hover:text-gray-900 text-sm">Home</router-link></li>
            <li><router-link to="/pricing" class="text-gray-600 hover:text-gray-900 text-sm">Pricing</router-link></li>
            <li><router-link to="/docs" class="text-gray-600 hover:text-gray-900 text-sm">Documentation</router-link></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-900 mb-4">Company</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-600 hover:text-gray-900 text-sm">About</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900 text-sm">Contact</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-200">
        <p class="text-gray-500 text-sm text-center">
          © 2025 Byteremix. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component - no props needed
</script>
