<template>
  <DocsLayout>
    <div v-if="loading" class="flex items-center justify-center py-12">
      <div class="text-gray-500">Loading documentation...</div>
    </div>
    
    <div v-else-if="error" class="text-center py-12">
      <Title size="lg" tag="h1" class-name="mb-4 text-red-600">
        Page Not Found
      </Title>
      <Text size="md" class-name="text-gray-600 mb-6">
        The documentation page you're looking for doesn't exist.
      </Text>
      <Button variant="primary" href="/docs/getting-started">
        Go to Getting Started
      </Button>
    </div>
    
    <article v-else-if="content">
      <!-- Page Header -->
      <header class="mb-8 pb-6 border-b border-gray-200">
        <Title size="xl" tag="h1" class-name="mb-2">
          {{ content.meta.title }}
        </Title>
        <Text v-if="content.meta.description" size="lg" class-name="text-gray-600">
          {{ content.meta.description }}
        </Text>
      </header>
      
      <!-- Markdown Content -->
      <MarkdownRenderer :content="content.content" />
      
      <!-- Page Navigation -->
      <footer class="mt-12 pt-8 border-t border-gray-200">
        <div class="flex justify-between items-center">
          <div>
            <router-link
              v-if="previousPage"
              :to="`/docs/${previousPage.meta.slug}`"
              class="inline-flex items-center text-sm text-green-600 hover:text-green-700"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              {{ previousPage.meta.title }}
            </router-link>
          </div>
          <div>
            <router-link
              v-if="nextPage"
              :to="`/docs/${nextPage.meta.slug}`"
              class="inline-flex items-center text-sm text-green-600 hover:text-green-700"
            >
              {{ nextPage.meta.title }}
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>
      </footer>
    </article>
  </DocsLayout>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import DocsLayout from '../components/DocsLayout.vue';
import MarkdownRenderer from '../components/MarkdownRenderer.vue';
import Title from '../components/Title.vue';
import Text from '../components/Text.vue';
import Button from '../components/Button.vue';
import { loadContent, loadAllContent, type ContentItem } from '../utils/contentLoader';

const route = useRoute();

const loading = ref(true);
const error = ref(false);
const content = ref<ContentItem | null>(null);
const allDocs = ref<ContentItem[]>([]);

const previousPage = computed(() => {
  if (!content.value || !allDocs.value.length) return null;
  
  const currentIndex = allDocs.value.findIndex(
    doc => doc.meta.slug === content.value?.meta.slug
  );
  
  return currentIndex > 0 ? allDocs.value[currentIndex - 1] : null;
});

const nextPage = computed(() => {
  if (!content.value || !allDocs.value.length) return null;
  
  const currentIndex = allDocs.value.findIndex(
    doc => doc.meta.slug === content.value?.meta.slug
  );
  
  return currentIndex < allDocs.value.length - 1 ? allDocs.value[currentIndex + 1] : null;
});

const loadPage = async (slug: string) => {
  loading.value = true;
  error.value = false;
  
  try {
    const pageContent = await loadContent('docs', slug);
    
    if (pageContent) {
      content.value = pageContent;
      
      // Set page title
      if (typeof document !== 'undefined') {
        document.title = `${pageContent.meta.title} - SWS Documentation`;
      }
    } else {
      error.value = true;
    }
  } catch (err) {
    console.error('Failed to load documentation page:', err);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

// Load all docs for navigation
const loadAllDocs = async () => {
  try {
    allDocs.value = await loadAllContent('docs');
  } catch (err) {
    console.warn('Failed to load all docs for navigation', err);
  }
};

// Watch route changes
watch(
  () => route.params.slug,
  (slug) => {
    if (slug && typeof slug === 'string') {
      loadPage(slug);
    }
  },
  { immediate: true }
);

onMounted(() => {
  loadAllDocs();
});
</script>
