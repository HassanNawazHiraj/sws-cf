<template>
  <Layout>
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Title size="xl" tag="h1" class-name="mb-6">
          Documentation
        </Title>
        
        <Text size="lg" class-name="text-gray-600 mb-8 max-w-3xl mx-auto">
          Comprehensive guides and documentation for SWS Simple Web Scraper.
          Learn how to extract data from websites efficiently using XPath selectors and multi-threading.
        </Text>
      </div>
    </section>
    
    <!-- Documentation Sections -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-12">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
          <Text size="sm" class-name="text-gray-500 mt-4">Loading documentation...</Text>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-12">
          <Text size="md" class-name="text-red-600 mb-4">Failed to load documentation</Text>
          <Button variant="outline" @click="loadDocs">Retry</Button>
        </div>

        <!-- Documentation Content -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Getting Started -->
          <Card class="hover:shadow-lg transition-shadow duration-200">
            <div class="mb-4">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <Title size="md" tag="h3" class-name="mb-3">
                Getting Started
              </Title>
              <Text size="sm" class-name="text-gray-600 mb-4">
                New to SWS? Start here to learn the basics of web scraping with our comprehensive beginner's guide.
              </Text>
            </div>
            <div class="space-y-2">
              <router-link 
                v-for="doc in gettingStartedDocs" 
                :key="doc.meta.slug"
                :to="`/docs/${doc.meta.slug}`"
                class="block text-sm text-green-600 hover:text-green-700 hover:underline"
              >
                {{ doc.meta.title }}
              </router-link>
            </div>
          </Card>

          <!-- Installation -->
          <Card class="hover:shadow-lg transition-shadow duration-200">
            <div class="mb-4">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <Title size="md" tag="h3" class-name="mb-3">
                Installation
              </Title>
              <Text size="sm" class-name="text-gray-600 mb-4">
                Step-by-step instructions for downloading, installing, and setting up SWS on your Windows system.
              </Text>
            </div>
            <div class="space-y-2">
              <router-link 
                v-for="doc in installationDocs" 
                :key="doc.meta.slug"
                :to="`/docs/${doc.meta.slug}`"
                class="block text-sm text-green-600 hover:text-green-700 hover:underline"
              >
                {{ doc.meta.title }}
              </router-link>
            </div>
          </Card>

          <!-- Advanced Topics -->
          <Card class="hover:shadow-lg transition-shadow duration-200">
            <div class="mb-4">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <Title size="md" tag="h3" class-name="mb-3">
                XPath Selectors
              </Title>
              <Text size="sm" class-name="text-gray-600 mb-4">
                Master XPath expressions to precisely target and extract data from any website structure.
              </Text>
            </div>
            <div class="space-y-2">
              <router-link 
                v-for="doc in xpathDocs" 
                :key="doc.meta.slug"
                :to="`/docs/${doc.meta.slug}`"
                class="block text-sm text-green-600 hover:text-green-700 hover:underline"
              >
                {{ doc.meta.title }}
              </router-link>
            </div>
          </Card>
        </div>

        <!-- All Documentation Link -->
        <div class="text-center mt-16">
          <Title size="lg" tag="h2" class-name="mb-4">
            Browse All Documentation
          </Title>
          <Text size="md" class-name="text-gray-600 mb-8">
            Can't find what you're looking for? Browse our complete documentation library.
          </Text>
          <div class="space-y-4">
            <div v-for="doc in allDocs" :key="doc.meta.slug" class="max-w-2xl mx-auto">
              <router-link 
                :to="`/docs/${doc.meta.slug}`"
                class="block p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-sm transition-all duration-200"
              >
                <div class="flex items-start justify-between">
                  <div class="text-left">
                    <Title size="sm" tag="h3" class-name="mb-2 text-gray-900">
                      {{ doc.meta.title }}
                    </Title>
                    <Text size="sm" class-name="text-gray-600">
                      {{ doc.meta.description || 'Learn more about this topic' }}
                    </Text>
                  </div>
                  <svg class="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Layout from '../components/Layout.vue';
import Card from '../components/Card.vue';
import Title from '../components/Title.vue';
import Text from '../components/Text.vue';
import Button from '../components/Button.vue';
import { loadAllContent, type ContentItem } from '../utils/contentLoader';

const loading = ref(true);
const error = ref(false);
const docs = ref<ContentItem[]>([]);

// Categorize docs
const gettingStartedDocs = computed(() => {
  return docs.value.filter(doc => 
    doc.meta?.category === 'getting-started' || 
    doc.meta?.slug === 'getting-started'
  );
});

const installationDocs = computed(() => {
  return docs.value.filter(doc => 
    doc.meta?.category === 'installation' || 
    doc.meta?.slug === 'installation'
  );
});

const xpathDocs = computed(() => {
  return docs.value.filter(doc => 
    doc.meta?.category === 'xpath' || 
    doc.meta?.slug === 'xpath-selectors'
  );
});

const allDocs = computed(() => {
  return docs.value.filter(doc => doc.meta?.slug !== 'index');
});

const loadDocs = async () => {
  loading.value = true;
  error.value = false;
  
  try {
    const allContent = await loadAllContent('docs');
    // Filter out the index file and sort by title
    docs.value = allContent
      .filter(doc => doc.meta?.slug !== 'index')
      .sort((a, b) => (a.meta?.title || '').localeCompare(b.meta?.title || ''));
      
  } catch (err) {
    console.error('Failed to load docs:', err);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

// Set page title
if (typeof document !== 'undefined') {
  document.title = 'Documentation - SWS Simple Web Scraper';
}

onMounted(() => {
  loadDocs();
});
</script>
