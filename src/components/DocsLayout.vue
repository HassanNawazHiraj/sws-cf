<template>
  <Layout>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Sidebar Navigation -->
        <aside class="lg:w-64 flex-shrink-0">
          <div class="sticky top-8">
            <Title size="md" tag="h2" class-name="mb-6 text-gray-900">
              Documentation
            </Title>
            
            <nav class="space-y-2">
              <router-link
                v-for="item in navigationItems"
                :key="item.meta.slug"
                :to="`/docs/${item.meta.slug}`"
                :class="[
                  'block px-3 py-2 text-sm rounded-md transition-colors',
                  $route.params.slug === item.meta.slug
                    ? 'bg-green-100 text-green-700 font-medium'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                ]"
              >
                {{ item.meta.title }}
              </router-link>
            </nav>
            
            <div class="mt-8 pt-8 border-t border-gray-200">
              <Title size="sm" tag="h3" class-name="mb-4 text-gray-900">
                Quick Links
              </Title>
              <div class="space-y-2">
                <router-link 
                  to="/download" 
                  class="block text-sm text-gray-600 hover:text-gray-900"
                >
                  Download SWS
                </router-link>
                <router-link 
                  to="/updates" 
                  class="block text-sm text-gray-600 hover:text-gray-900"
                >
                  Version Updates
                </router-link>
                <router-link 
                  to="/pricing" 
                  class="block text-sm text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </router-link>
              </div>
            </div>
          </div>
        </aside>
        
        <!-- Main Content -->
        <main class="flex-1 min-w-0">
          <slot />
        </main>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Layout from './Layout.vue';
import Title from './Title.vue';
import { loadAllContent, type ContentItem } from '../utils/contentLoader';

const navigationItems = ref<ContentItem[]>([]);

onMounted(async () => {
  try {
    const docs = await loadAllContent('docs');
    navigationItems.value = docs.filter(doc => doc.meta.slug !== 'index');
  } catch (error) {
    console.warn('Failed to load documentation navigation', error);
  }
});
</script>
