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
              <Text size="sm" class-name="text-gray-500">
                {{ latestVersion.downloads }} downloads
              </Text>
            </div>
          </div>
          
          <div class="mb-6">
            <Title size="sm" tag="h4" class-name="mb-3">
              What's New in v{{ latestVersion.version }}
            </Title>
            <ul class="space-y-2">
              <li v-for="feature in latestVersion.features" :key="feature" class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <Text size="sm" class-name="text-gray-700">
                  {{ feature }}
                </Text>
              </li>
            </ul>
          </div>
          
          <div class="flex space-x-4">
            <Button variant="primary" size="lg" class="flex-1">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download for Windows
            </Button>
            <Button variant="outline" size="lg" @click="openReleaseNotes">
              {{ showReleaseNotes ? 'Hide' : 'View' }} Release Notes
            </Button>
          </div>
        </Card>
        
        <!-- Release Notes -->
        <div v-if="showReleaseNotes" class="mt-8 max-w-2xl mx-auto">
          <Card>
            <Title size="sm" tag="h4" class-name="mb-4">
              Release Notes - v{{ latestVersion.version }}
            </Title>
            <div class="prose prose-sm max-w-none">
              <div class="mb-4">
                <Text size="sm" class-name="font-semibold text-gray-900 mb-2">New Features:</Text>
                <ul class="list-disc list-inside space-y-1">
                  <li v-for="feature in latestVersion.features" :key="feature">
                    <Text size="sm" class-name="text-gray-700">{{ feature }}</Text>
                  </li>
                </ul>
              </div>
              <div class="mb-4">
                <Text size="sm" class-name="font-semibold text-gray-900 mb-2">Bug Fixes:</Text>
                <ul class="list-disc list-inside space-y-1">
                  <li v-for="fix in latestVersion.bugFixes" :key="fix">
                    <Text size="sm" class-name="text-gray-700">{{ fix }}</Text>
                  </li>
                </ul>
              </div>
              <div>
                <Text size="sm" class-name="font-semibold text-gray-900 mb-2">System Requirements:</Text>
                <ul class="list-disc list-inside space-y-1">
                  <li><Text size="sm" class-name="text-gray-700">Windows 10 or Windows 11</Text></li>
                  <li><Text size="sm" class-name="text-gray-700">4GB RAM minimum (8GB recommended)</Text></li>
                  <li><Text size="sm" class-name="text-gray-700">500MB free disk space</Text></li>
                  <li><Text size="sm" class-name="text-gray-700">.NET 6.0 Runtime (included in installer)</Text></li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
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
        
        <div class="space-y-4">
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
                  <span>{{ version.downloads }} downloads</span>
                </div>
              </div>
              <div class="flex space-x-3">
                <Button variant="outline" size="sm" @click="toggleVersionDetails(version.version)">
                  {{ expandedVersions.includes(version.version) ? 'Hide' : 'Details' }}
                </Button>
                <Button variant="outline" size="sm">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </Button>
              </div>
            </div>
            
            <!-- Version Details -->
            <div v-if="expandedVersions.includes(version.version)" class="mt-6 pt-6 border-t border-gray-200">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Text size="sm" class-name="font-semibold text-gray-900 mb-2">Key Features:</Text>
                  <ul class="list-disc list-inside space-y-1">
                    <li v-for="feature in version.features" :key="feature">
                      <Text size="sm" class-name="text-gray-700">{{ feature }}</Text>
                    </li>
                  </ul>
                </div>
                <div>
                  <Text size="sm" class-name="font-semibold text-gray-900 mb-2">Bug Fixes:</Text>
                  <ul class="list-disc list-inside space-y-1">
                    <li v-for="fix in version.bugFixes" :key="fix">
                      <Text size="sm" class-name="text-gray-700">{{ fix }}</Text>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
    
    <!-- Installation Guide -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <Title size="lg" tag="h2" class-name="mb-4">
            Installation Guide
          </Title>
          <Text size="md" class-name="text-gray-600">
            Quick steps to get SWS running on your Windows machine
          </Text>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card class="text-center">
            <div class="mb-4">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                <Text size="lg" class-name="font-bold text-green-600">1</Text>
              </div>
            </div>
            <Title size="sm" tag="h3" class-name="mb-3">
              Download
            </Title>
            <Text size="sm" class-name="text-gray-600">
              Click the download button above to get the latest SWS installer for Windows.
            </Text>
          </Card>
          
          <Card class="text-center">
            <div class="mb-4">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                <Text size="lg" class-name="font-bold text-green-600">2</Text>
              </div>
            </div>
            <Title size="sm" tag="h3" class-name="mb-3">
              Install
            </Title>
            <Text size="sm" class-name="text-gray-600">
              Run the installer and follow the setup wizard. All dependencies are included.
            </Text>
          </Card>
          
          <Card class="text-center">
            <div class="mb-4">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                <Text size="lg" class-name="font-bold text-green-600">3</Text>
              </div>
            </div>
            <Title size="sm" tag="h3" class-name="mb-3">
              Start Scraping
            </Title>
            <Text size="sm" class-name="text-gray-600">
              Launch SWS and start configuring your XPath selectors to scrape any website.
            </Text>
          </Card>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Layout from '../components/Layout.vue';
import Card from '../components/Card.vue';
import Title from '../components/Title.vue';
import Text from '../components/Text.vue';
import Button from '../components/Button.vue';

const showReleaseNotes = ref(false);
const expandedVersions = ref<string[]>([]);

const latestVersion = {
  version: '2.1.0',
  date: '2025-08-27',
  size: '45.2 MB',
  downloads: '12,430',
  features: [
    'Enhanced browser-based scraping with Chrome DevTools integration',
    'Advanced multi-threading with up to 50 concurrent requests',
    'New XPath builder with visual selector tool',
    'Improved error handling and retry mechanisms',
    'Export data in JSON, XML, and Excel formats'
  ],
  bugFixes: [
    'Fixed memory leak in long-running scraping sessions',
    'Resolved XPath validation issues with special characters',
    'Fixed CSV export encoding for international characters',
    'Improved stability when scraping JavaScript-heavy sites'
  ]
};

const previousVersions = [
  {
    version: '2.0.5',
    date: '2025-07-15',
    size: '42.8 MB',
    downloads: '8,920',
    type: 'lts',
    features: [
      'Basic browser scraping support',
      'Multi-threading up to 20 concurrent requests',
      'XPath selector validation',
      'CSV export functionality'
    ],
    bugFixes: [
      'Fixed timeout issues with slow websites',
      'Improved XPath error messages',
      'Fixed UI freezing during large scraping operations'
    ]
  },
  {
    version: '1.9.2',
    date: '2025-06-10',
    size: '38.5 MB',
    downloads: '15,680',
    type: 'stable',
    features: [
      'XPath-based element selection',
      'Basic multi-threading support',
      'CSV data export',
      'Simple UI for scraping configuration'
    ],
    bugFixes: [
      'Fixed character encoding issues',
      'Resolved crashes with malformed HTML',
      'Improved error logging'
    ]
  },
  {
    version: '1.8.1',
    date: '2025-05-05',
    size: '35.2 MB',
    downloads: '22,150',
    type: 'stable',
    features: [
      'Basic web scraping functionality',
      'XPath selector support',
      'Single-threaded scraping',
      'Basic CSV output'
    ],
    bugFixes: [
      'Initial stability improvements',
      'Fixed installation issues on Windows 11',
      'Improved compatibility with older websites'
    ]
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

const toggleVersionDetails = (version: string) => {
  const index = expandedVersions.value.indexOf(version);
  if (index > -1) {
    expandedVersions.value.splice(index, 1);
  } else {
    expandedVersions.value.push(version);
  }
};

const openReleaseNotes = () => {
  showReleaseNotes.value = !showReleaseNotes.value;
};
</script>
