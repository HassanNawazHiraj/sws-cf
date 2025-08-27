<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <Title size="lg" tag="h2" class-name="mb-4">
          Powerful Features for Web Scraping
        </Title>
        <Text size="lg" class-name="text-gray-600 max-w-2xl mx-auto">
          Everything you need to extract data from websites efficiently and reliably.
        </Text>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          v-for="feature in features"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Title from './Title.vue';
import Text from './Text.vue';
import FeatureCard from './FeatureCard.vue';

const features = [
  {
    title: 'XPath Selectors',
    description: 'Use powerful XPath expressions to precisely target and extract data from any HTML element on web pages.',
    icon: 'target'
  },
  {
    title: 'Multi-Threading',
    description: 'Process multiple pages simultaneously with configurable thread counts for maximum scraping efficiency.',
    icon: 'threads'
  },
  {
    title: 'Browser Support',
    description: 'Partial browser-based scraping support for JavaScript-heavy websites that require client-side rendering.',
    icon: 'browser'
  },
  {
    title: 'CSV Export',
    description: 'Export your scraped data directly to CSV format with customizable column mappings and data formatting.',
    icon: 'export'
  },
  {
    title: 'Data Preview',
    description: 'View and validate your scraped data in real-time before deciding to save or export your results.',
    icon: 'preview'
  },
  {
    title: 'Simple Interface',
    description: 'Clean and intuitive user interface designed for both beginners and advanced web scraping professionals.',
    icon: 'interface'
  }
];
</script>
