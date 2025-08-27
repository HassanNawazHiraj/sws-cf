<template>
  <UpdatesLayout>
    <div v-if="loading" class="flex items-center justify-center py-12">
      <div class="text-gray-500">Loading updates...</div>
    </div>
    
    <div v-else class="space-y-8">
      <!-- Updates List -->
      <div v-for="update in updates" :key="update.meta.slug" class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="flex items-center mb-3">
              <Title size="md" tag="h2" class-name="mr-3">
                {{ update.meta.title }}
              </Title>
              <span v-if="update.meta.version" class="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                v{{ update.meta.version }}
              </span>
            </div>
            
            <div class="flex items-center space-x-4 mb-4">
              <Text v-if="update.meta.date" size="sm" class-name="text-gray-500">
                <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ formatDate(update.meta.date) }}
              </Text>
            </div>
            
            <Text v-if="update.meta.description" size="md" class-name="text-gray-700 mb-4 leading-relaxed">
              {{ update.meta.description }}
            </Text>
            
            <!-- Preview of content (first paragraph) -->
            <div class="prose prose-sm max-w-none text-gray-600 mb-6 bg-gray-50 p-4 rounded-lg">
              <div v-html="getPreview(update.content)"></div>
            </div>
            
            <div class="flex items-center space-x-6 pt-4 border-t border-gray-100">
              <router-link 
                v-if="update.meta.slug !== 'index'"
                :to="`/updates/${update.meta.slug}`"
                class="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium transition-colors duration-200"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Read Full Release Notes
              </router-link>
              
              <router-link 
                v-if="update.meta.version"
                to="/download"
                class="inline-flex items-center text-gray-600 hover:text-gray-700 text-sm transition-colors duration-200"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download v{{ update.meta.version }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
      
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
    month: 'long', 
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
    // Filter out index page for the main updates list since we're already showing it
    updates.value = allUpdates.filter(update => update.meta.slug === 'index' || update.meta.version);
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
