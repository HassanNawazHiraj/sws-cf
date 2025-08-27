<template>
  <Layout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <header class="text-center mb-12">
        <Title size="xl" tag="h1" class-name="mb-4">
          Updates & Changelog
        </Title>
        <Text size="lg" class-name="text-gray-600">
          Stay up to date with the latest SWS releases and improvements
        </Text>
      </header>
      
      <slot />
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from './Layout.vue';
import Title from './Title.vue';
import Text from './Text.vue';
</script>
