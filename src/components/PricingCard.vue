<template>
  <Card :class="['text-center relative', featured ? 'border-green-500 border-2' : '']">
    <div v-if="featured" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
      <span class="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
        Most Popular
      </span>
    </div>
    
    <div class="mb-8">
      <Title size="md" tag="h3" class-name="mb-2">
        {{ title }}
      </Title>
      
      <div class="mb-4">
        <span class="text-4xl font-bold text-gray-900">${{ price }}</span>
        <span v-if="price > 0" class="text-gray-600 ml-1">
          {{ billingCycle === 'yearly' ? '/year' : '/month' }}
        </span>
      </div>
      
      <Text size="sm" class-name="text-gray-600 mb-6">
        {{ description }}
      </Text>
    </div>
    
    <div class="space-y-4 mb-8">
      <div v-for="feature in features" :key="feature.name" class="flex items-center">
        <svg 
          :class="[
            'w-5 h-5 mr-3 flex-shrink-0',
            feature.included ? 'text-green-500' : 'text-gray-300'
          ]" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path v-if="feature.included" fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          <path v-else fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
        <Text size="sm" :class-name="feature.included ? 'text-gray-700' : 'text-gray-400'">
          {{ feature.name }}
        </Text>
      </div>
    </div>
    
    <Button 
      :variant="featured ? 'primary' : 'outline'" 
      size="lg" 
      class="w-full"
      :href="price === 0 ? '/docs' : undefined"
      @click="price > 0 ? showPurchaseModal = true : undefined"
    >
      {{ price === 0 ? 'Get Started' : 'Purchase Now' }}
    </Button>
  </Card>

  <!-- Purchase Modal -->
  <div v-if="showPurchaseModal" class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="showPurchaseModal = false"></div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full z-10">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Payment Gateway Implementation
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  We are currently implementing our payment gateway. Please contact us to get your license key.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <Button 
            variant="primary" 
            size="sm" 
            class="w-full sm:ml-3 sm:w-auto"
            href="/contact"
            @click="showPurchaseModal = false"
          >
            Contact Us
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            class="mt-3 w-full sm:mt-0 sm:w-auto"
            @click="showPurchaseModal = false"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from './Card.vue';
import Title from './Title.vue';
import Text from './Text.vue';
import Button from './Button.vue';

const showPurchaseModal = ref(false);

interface Feature {
  name: string;
  included: boolean;
}

interface Props {
  title: string;
  price: number;
  description: string;
  features: Feature[];
  featured?: boolean;
  billingCycle?: 'monthly' | 'yearly';
}

withDefaults(defineProps<Props>(), {
  featured: false,
  billingCycle: 'monthly'
});
</script>
