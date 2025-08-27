<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="href && external ? '_blank' : undefined"
    :type="!href ? 'button' : undefined"
    :class="[
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer',
      // Size variants
      size === 'sm' ? 'px-3 py-1.5 text-sm' : '',
      size === 'md' ? 'px-4 py-2 text-base' : '',
      size === 'lg' ? 'px-6 py-3 text-lg' : '',
      // Variant styles
      variant === 'primary' ? 'bg-gray-900 hover:bg-black text-white focus:ring-gray-500' : '',
      variant === 'secondary' ? 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500' : '',
      variant === 'success' ? 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500' : '',
      variant === 'outline' ? 'border border-gray-300 hover:bg-gray-50 text-gray-700 focus:ring-gray-500' : '',
      // Rounded variants
      rounded === 'sm' ? 'rounded' : '',
      rounded === 'md' ? 'rounded-md' : '',
      rounded === 'lg' ? 'rounded-lg' : '',
      rounded === 'full' ? 'rounded-full' : '',
      className
    ]"
    @click="$emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'success' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  href?: string;
  external?: boolean;
  className?: string;
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  rounded: 'md',
  external: false,
  className: ''
});

defineEmits<{
  click: [event: MouseEvent];
}>();
</script>
