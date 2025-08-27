<template>
  <section class="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <Title size="xl" tag="h1" class-name="mb-6">
          Simple Web Scraper
        </Title>
        
        <Text size="lg" class-name="text-gray-600 mb-8 max-w-3xl mx-auto">
          Extract data from websites with precision using XPath selectors. 
          Featuring multi-threading support and browser-based scraping capabilities 
          for the most elegant web scraping experience.
        </Text>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="primary" 
            size="lg" 
            href="/download"
            class="w-full sm:w-auto"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Now
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            href="/docs"
            class="w-full sm:w-auto"
          >
            Get Started
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            href="/pricing"
            class="w-full sm:w-auto"
          >
            View Pricing
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Title from './Title.vue';
import Text from './Text.vue';
import Button from './Button.vue';
</script>
