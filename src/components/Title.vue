<template>
  <component 
    :is="tag"
    :class="[
      'font-semibold text-gray-900',
      size === 'xl' ? 'text-4xl md:text-5xl' : '',
      size === 'lg' ? 'text-3xl md:text-4xl' : '',
      size === 'md' ? 'text-2xl md:text-3xl' : '',
      size === 'sm' ? 'text-xl md:text-2xl' : '',
      size === 'xs' ? 'text-lg md:text-xl' : '',
      className
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  tag: 'h2',
  className: ''
});
</script>
