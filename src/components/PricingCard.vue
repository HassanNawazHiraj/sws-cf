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
      :href="price === 0 ? '/docs' : '#'"
    >
      {{ price === 0 ? 'Get Started' : 'Purchase Now' }}
    </Button>
  </Card>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import Title from './Title.vue';
import Text from './Text.vue';
import Button from './Button.vue';

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
