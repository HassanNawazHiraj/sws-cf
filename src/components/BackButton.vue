<template>
  <Button 
    variant="outline" 
    @click="goBack" 
    className="inline-flex items-center gap-2 cursor-pointer hover:cursor-pointer"
    size="md"
  >
    ← Back to Home
  </Button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from './Button.vue';

const router = useRouter();

const goBack = () => {
  router.push('/');
};
</script>
