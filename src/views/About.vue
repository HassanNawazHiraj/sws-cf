<template>
  <Layout>
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Title size="xl" tag="h1" class-name="mb-6">
          About SWS
        </Title>

        <Text size="lg" class-name="text-gray-600 mb-8 max-w-3xl mx-auto">
          Learn about the creator and the story behind Simple Web Scraper
        </Text>
      </div>
    </section>

    <!-- About Content -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg mx-auto">
          <div class="text-center mb-12">
            <Title size="lg" tag="h2" class-name="mb-6">
              Created by Hassan Nawaz
            </Title>
            <Text size="md" class-name="text-gray-600 mb-8">
              Simple Web Scraper is developed and maintained by Hassan Nawaz, a software developer 
              passionate about creating tools that make data extraction simple and accessible.
            </Text>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <div class="text-center p-6">
                <Title size="md" tag="h3" class-name="mb-4">
                  Hassan Nawaz
                </Title>
                <Text size="sm" class-name="text-gray-600 mb-4">
                  Personal Website & Portfolio
                </Text>
                <Button variant="outline" href="https://hnawaz.com" external>
                  Visit hnawaz.com
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Button>
              </div>
            </Card>

            <Card>
              <div class="text-center p-6">
                <Title size="md" tag="h3" class-name="mb-4">
                  Byteremix
                </Title>
                <Text size="sm" class-name="text-gray-600 mb-4">
                  Software Development Company
                </Text>
                <Button variant="outline" href="https://byteremix.com" external>
                  Visit byteremix.com
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Button>
              </div>
            </Card>
          </div>

          <div class="text-center mt-12">
            <Text size="md" class-name="text-gray-600">
              SWS has been helping users extract data from websites since 2016, 
              continuously evolving with new features and improvements.
            </Text>
          </div>
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
</script>
