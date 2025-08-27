<template>
  <Layout>
    <Hero />
    <Features />
    
    <!-- Call to Action Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Title size="lg" tag="h2" class-name="mb-4">
          Ready to Start Web Scraping?
        </Title>
        
        <Text size="lg" class-name="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join professionals who trust SWS for their data extraction needs. 
          Start scraping with precision and efficiency today.
        </Text>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="primary" 
            size="lg" 
            href="/docs"
            class="w-full sm:w-auto"
          >
            Get Started Free
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
    </section>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../components/Layout.vue';
import Hero from '../components/Hero.vue';
import Features from '../components/Features.vue';
import Title from '../components/Title.vue';
import Text from '../components/Text.vue';
import Button from '../components/Button.vue';
</script>
