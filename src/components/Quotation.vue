<template>
  <Card :class="['bg-gray-50 border-l-4 border-gray-800', className]">
    <div class="flex items-start space-x-4">
      <div class="flex-shrink-0">
        <div class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>
      </div>
      <div class="flex-1">
        <Text size="lg" class="text-gray-800 italic leading-relaxed mb-3">
          "{{ quote }}"
        </Text>
        <div class="flex items-center space-x-2">
          <div class="w-8 h-0.5 bg-gray-400"></div>
          <Text size="sm" class="text-gray-600 font-medium">{{ author }}</Text>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import Text from './Text.vue';

interface Props {
  quote: string;
  author: string;
  className?: string;
}

withDefaults(defineProps<Props>(), {
  className: ''
});
</script>
