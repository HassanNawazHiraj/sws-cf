<template>
  <p 
    :class="[
      'text-gray-600 leading-relaxed',
      size === 'lg' ? 'text-lg' : '',
      size === 'md' ? 'text-base' : '',
      size === 'sm' ? 'text-sm' : '',
      size === 'xs' ? 'text-xs' : '',
      className
    ]"
  >
    <slot />
  </p>
</template>

<script setup lang="ts">
interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  className: ''
});
</script>
