<template>
  <div 
    :class="[
      'bg-white rounded-xl transition-all duration-300 ease-in-out shadow-sm border border-gray-200/50',
      hover ? 'hover:transform hover:-translate-y-1 hover:shadow-lg' : '',
      padding === 'sm' ? 'p-4' : padding === 'lg' ? 'p-8' : 'p-6',
      className
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

withDefaults(defineProps<Props>(), {
  hover: true,
  padding: 'md',
  className: ''
});
</script>
