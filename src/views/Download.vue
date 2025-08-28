<template>
  <Layout>
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Title size="xl" tag="h1" class-name="mb-6">
          Download SWS
        </Title>

        <Text size="lg" class-name="text-gray-600 mb-8 max-w-3xl mx-auto">
          Get the latest version of Simple Web Scraper for Windows.
          Start scraping with XPath selectors, multi-threading, and browser support.
        </Text>
      </div>
    </section>

    <!-- Latest Version -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <Title size="lg" tag="h2" class-name="mb-4">
            Latest Version
          </Title>
          <Text size="md" class-name="text-gray-600">
            The most recent stable release with all the latest features
          </Text>
        </div>

        <Card class="max-w-2xl mx-auto">
          <div class="flex items-center justify-between mb-6">
            <div>
              <div class="flex items-center mb-2">
                <Title size="md" tag="h3" class-name="mr-3">
                  SWS v{{ latestVersion.version }}
                </Title>
                <span class="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  Latest
                </span>
              </div>
              <Text size="sm" class-name="text-gray-600">
                Released {{ formatDate(latestVersion.date) }} • Windows 10/11
              </Text>
            </div>
            <div class="text-right">
              <Text size="sm" class-name="text-gray-500 mb-1">
                {{ latestVersion.size }}
              </Text>
            </div>
          </div>

          <div class="flex space-x-4 mb-4">
            <Button variant="primary" size="lg" class="flex-1" href="https://sws-cdn.hnawaz.com/sws%200541.zip">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download for Windows
            </Button>
            <Button variant="outline" size="lg" :href="`/updates/89`">
              Release Notes
            </Button>
          </div>

          <div class="pt-4 border-t border-gray-200 text-center">
            <Text size="sm" class-name="text-gray-600">
              System Requirements: Windows 10/11 • 2GB RAM • 150MB storage
            </Text>
          </div>
        </Card>
      </div>
    </section>

    <!-- Previous Versions -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <Title size="lg" tag="h2" class-name="mb-4">
            Previous Versions
          </Title>
          <Text size="md" class-name="text-gray-600">
            Download older versions of SWS if needed for compatibility
          </Text>
        </div>

        <!-- <div class="space-y-4">
          <Card v-for="version in previousVersions" :key="version.version">
            <div class="flex items-center justify-between">
              <div class="flex-1">
                <div class="flex items-center mb-2">
                  <Title size="sm" tag="h3" class-name="mr-3">
                    SWS v{{ version.version }}
                  </Title>
                  <span v-if="version.type === 'lts'" class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                    LTS
                  </span>
                </div>
                <div class="flex items-center space-x-6 text-sm text-gray-600">
                  <span>Released {{ formatDate(version.date) }}</span>
                  <span>{{ version.size }}</span>
                </div>
              </div>
              <div class="flex space-x-3">
                <Button variant="outline" size="sm" :href="`/updates/v${version.version}`">
                  Release Notes
                </Button>
                <Button variant="outline" size="sm">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </Button>
              </div>
            </div>
          </Card>
        </div> -->
        <div class="text-center">
          <Text class-name="text-gray-600"> None of the previous versions are compatible with the new license server </Text>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../components/Layout.vue';
import Card from '../components/Card.vue';
import Title from '../components/Title.vue';
import Text from '../components/Text.vue';
import Button from '../components/Button.vue';

const latestVersion = {
  version: '0.5.4.1',
  date: '2021-06-15',
  size: '1.2 MB',
  type: 'lts'
};

const previousVersions = [
  {
    version: '2.0.5',
    date: '2025-07-15',
    size: '1.2 MB',
    type: 'unstable'
  },
  {
    version: '1.9.2',
    date: '2025-06-10',
    size: '38.5 MB',
    type: 'stable'
  },
  {
    version: '1.8.1',
    date: '2025-05-05',
    size: '35.2 MB',
    type: 'stable'
  }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>
