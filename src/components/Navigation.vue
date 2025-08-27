<template>
  <nav class="bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <div class="text-2xl font-bold text-gray-900">SWS</div>
            <div class="text-sm text-gray-500 hidden sm:block">by Byteremix</div>
          </router-link>
        </div>
        
        <div class="flex items-center space-x-8">
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
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Button from './Button.vue';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Download', href: '/download' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Documentation', href: '/docs' }
];
</script>
