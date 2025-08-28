<template>
  <UpdatesLayout>
    <div v-if="loading" class="flex items-center justify-center py-12">
      <div class="text-gray-500">Loading update...</div>
    </div>
    
    <div v-else-if="error" class="text-center py-12">
      <Title size="lg" tag="h1" class-name="mb-4 text-red-600">
        Update Not Found
      </Title>
      <Text size="md" class-name="text-gray-600 mb-6">
        The update you're looking for doesn't exist.
      </Text>
      <Button variant="primary" href="/updates">
        Back to Updates
      </Button>
    </div>
    
    <article v-else-if="content">
      <!-- Update Header -->
      <header class="mb-8 pb-6 border-b border-gray-200">
        <div class="flex items-center mb-4">
          <router-link 
            to="/updates"
            class="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium mr-4 transition-colors duration-200"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Updates
          </router-link>
        </div>
        
        <Title size="xl" tag="h1" class-name="mb-4">
          {{ content.meta.title }}
        </Title>
        
        <div class="flex items-center space-x-6 text-sm">
          <span v-if="content.meta.date" class="inline-flex items-center text-gray-600">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Released {{ formatDate(content.meta.date) }}
          </span>
        </div>
      </header>
      
      <!-- Markdown Content -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 pt-2">
        <MarkdownRenderer :content="content.content" />
      </div>
      
      <!-- Update Navigation -->
      <footer class="mt-12 pt-8 border-t border-gray-200">
        <div class="flex justify-between items-center">
          <div>
            <router-link
              v-if="previousUpdate"
              :to="`/updates/${previousUpdate.meta.slug}`"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              Previous Update
            </router-link>
          </div>
          <div class="flex items-center space-x-4">
            <router-link
              to="/updates"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              All Updates
            </router-link>
            <router-link
              v-if="nextUpdate"
              :to="`/updates/${nextUpdate.meta.slug}`"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors duration-200"
            >
              Next Update
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>
      </footer>
    </article>
  </UpdatesLayout>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import UpdatesLayout from '../components/UpdatesLayout.vue';
import MarkdownRenderer from '../components/MarkdownRenderer.vue';
import Title from '../components/Title.vue';
import Text from '../components/Text.vue';
import Button from '../components/Button.vue';
import { loadContent, loadAllContent, type ContentItem, UPDATES_CONFIG } from '../utils/contentLoader';

const route = useRoute();

const loading = ref(true);
const error = ref(false);
const content = ref<ContentItem | null>(null);
const allUpdates = ref<ContentItem[]>([]);

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const previousUpdate = computed(() => {
  if (!content.value) return null;
  
  const currentSlug = parseInt(content.value.meta.slug);
  if (isNaN(currentSlug) || currentSlug <= 1) return null; // No previous for update 1 (oldest)
  
  const previousSlug = currentSlug - 1;
  return {
    meta: {
      slug: previousSlug.toString(),
      title: `Update ${previousSlug}`
    }
  };
});

const nextUpdate = computed(() => {
  if (!content.value) return null;
  
  const currentSlug = parseInt(content.value.meta.slug);
  if (isNaN(currentSlug) || currentSlug >= UPDATES_CONFIG.maxUpdateNumber) return null; // No next for latest update
  
  const nextSlug = currentSlug + 1;
  return {
    meta: {
      slug: nextSlug.toString(),
      title: `Update ${nextSlug}`
    }
  };
});

const loadUpdate = async (slug: string) => {
  loading.value = true;
  error.value = false;
  
  try {
    const updateContent = await loadContent('updates', slug);
    
    if (updateContent) {
      content.value = updateContent;
      
      // Set page title
      if (typeof document !== 'undefined') {
        document.title = `${updateContent.meta.title} - SWS Updates`;
      }
    } else {
      error.value = true;
    }
  } catch (err) {
    console.error('Failed to load update:', err);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

// Load all updates for navigation
const loadAllUpdates = async () => {
  try {
    const updates = await loadAllContent('updates');
    // All updates are now numbered, so we can use them all
    allUpdates.value = updates;
  } catch (err) {
    console.warn('Failed to load all updates for navigation', err);
  }
};

// Watch route changes
watch(
  () => route.params.slug,
  (slug) => {
    if (slug && typeof slug === 'string') {
      loadUpdate(slug);
    }
  },
  { immediate: true }
);

onMounted(() => {
  loadAllUpdates();
});
</script>
