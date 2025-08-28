<template>
  <nav class="bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <div class="text-2xl font-bold text-gray-900">SWS</div>
            <div class="text-sm text-gray-500 hidden sm:block">by Byteremix</div>
          </router-link>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.href"
            :class="[
              'text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200',
              $route.path === item.href ? 'text-gray-900 border-b-2 border-green-500' : ''
            ]"
          >
            {{ item.name }}
          </router-link>
          
          <Button 
            variant="primary" 
            size="sm" 
            href="/docs"
            class="ml-4"
          >
            Get Started
          </Button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            aria-controls="mobile-menu"
            :aria-expanded="isOpen"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Hamburger icon -->
            <svg
              v-if="!isOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Close icon -->
            <svg
              v-else
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isOpen" class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
        <router-link
          v-for="item in navigationItems"
          :key="item.name"
          :to="item.href"
          @click="isOpen = false"
          :class="[
            'block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md',
            $route.path === item.href 
              ? 'text-gray-900 bg-gray-50' 
              : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
          ]"
        >
          {{ item.name }}
        </router-link>
        
        <div class="pt-4 pb-2">
          <Button 
            variant="primary" 
            size="sm" 
            href="/docs"
            class="w-full"
            @click="isOpen = false"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';

const isOpen = ref(false);

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Updates', href: '/updates' },
  { name: 'Download', href: '/download' },
  { name: 'Documentation', href: '/docs' }
];
</script>
