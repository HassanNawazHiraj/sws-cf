<template>
  <UpdatesLayout>
    <div v-if="loading" class="flex items-center justify-center py-12">
      <div class="text-gray-500">Loading updates...</div>
    </div>
    
    <div v-else class="space-y-4">
      <!-- Updates List -->
      <router-link 
        v-for="update in updates" 
        :key="update.meta.slug"
        :to="`/updates/${update.meta.slug}`"
        class="block bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md hover:border-green-300 transition-all duration-200"
      >
        <div class="flex items-center justify-between">
          <div class="flex-1 min-w-0">
            <Title size="md" tag="h2" class-name="text-gray-900 truncate">
              {{ update.meta.title }}
            </Title>
          </div>
          
          <div class="flex items-center space-x-4 ml-4 flex-shrink-0">
            <Text v-if="update.meta.date" size="sm" class-name="text-gray-500 whitespace-nowrap">
              {{ formatDate(update.meta.date) }}
            </Text>
            
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </router-link>
      
      <!-- No updates found -->
      <div v-if="!loading && !updates.length" class="text-center py-12">
        <Text size="md" class-name="text-gray-500">
          No updates available at this time.
        </Text>
      </div>
    </div>
  </UpdatesLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { marked } from 'marked';
import UpdatesLayout from '../components/UpdatesLayout.vue';
import Title from '../components/Title.vue';
import Text from '../components/Text.vue';
import { loadAllContent, type ContentItem } from '../utils/contentLoader';

const loading = ref(true);
const updates = ref<ContentItem[]>([]);

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

const getPreview = (content: string): string => {
  // Get first paragraph (up to first double newline)
  const firstParagraph = content.split('\n\n')[0];
  // Remove markdown headers
  const cleanContent = firstParagraph.replace(/^#{1,6}\s+/, '');
  // Convert to HTML but limit length
  const html = marked(cleanContent, { async: false }) as string;
  return html.length > 200 ? html.substring(0, 200) + '...' : html;
};

const loadUpdates = async () => {
  try {
    const allUpdates = await loadAllContent('updates');
    // Show all updates (they're already sorted by date)
    updates.value = allUpdates;
  } catch (error) {
    console.error('Failed to load updates:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadUpdates();
});
</script>
