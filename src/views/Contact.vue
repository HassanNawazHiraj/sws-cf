<template>
  <Layout>
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Title size="xl" tag="h1" class-name="mb-6">
          Contact Us
        </Title>

        <Text size="lg" class-name="text-gray-600 mb-8 max-w-3xl mx-auto">
          Get in touch for support, feedback, or business inquiries
        </Text>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <Title size="lg" tag="h2" class-name="mb-6">
            How to Reach Us
          </Title>
          <Text size="md" class-name="text-gray-600 mb-8">
            We'd love to hear from you. Send us an email and we'll get back to you as soon as possible.
          </Text>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card>
            <div class="text-center p-8">
              <div class="flex justify-center mb-4">
                <div class="p-3 bg-green-100 rounded-full">
                  <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
              </div>
              <Title size="md" tag="h3" class-name="mb-3">
                Personal Contact
              </Title>
              <Text size="sm" class-name="text-gray-600 mb-4">
                General inquiries and support
              </Text>
              <a 
                href="mailto:hassan@hnawaz.com" 
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors duration-200"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hassan@hnawaz.com
              </a>
            </div>
          </Card>

          <Card>
            <div class="text-center p-8">
              <div class="flex justify-center mb-4">
                <div class="p-3 bg-blue-100 rounded-full">
                  <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <Title size="md" tag="h3" class-name="mb-3">
                Business Contact
              </Title>
              <Text size="sm" class-name="text-gray-600 mb-4">
                Business partnerships and enterprise
              </Text>
              <a 
                href="mailto:hassan@byteremix.com" 
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hassan@byteremix.com
              </a>
            </div>
          </Card>
        </div>

        <div class="text-center mt-12">
          <Text size="sm" class-name="text-gray-500">
            We typically respond within 24-48 hours during business days.
          </Text>
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
</script>
