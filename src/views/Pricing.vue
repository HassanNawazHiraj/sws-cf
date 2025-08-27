<template>
  <Layout>
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Title size="xl" tag="h1" class-name="mb-6">
          Simple, Transparent Pricing
        </Title>
        
        <Text size="lg" class-name="text-gray-600 mb-8 max-w-3xl mx-auto">
          Choose the plan that works for you. Start free with full scraping capabilities, 
          upgrade to save your data permanently.
        </Text>
        
        <div class="flex items-center justify-center space-x-4 mb-8">
          <span :class="['text-sm', billingCycle === 'monthly' ? 'text-gray-900 font-semibold' : 'text-gray-500']">Monthly</span>
          <button 
            @click="toggleBillingCycle"
            :class="[
              'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
              billingCycle === 'yearly' ? 'bg-green-600' : 'bg-gray-200'
            ]"
          >
            <span
              :class="[
                'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
              ]"
            />
          </button>
          <span :class="['text-sm', billingCycle === 'yearly' ? 'text-gray-900 font-semibold' : 'text-gray-500']">
            Yearly <span class="text-green-600 font-medium">(Save $300)</span>
          </span>
        </div>
      </div>
    </section>
    
    <!-- Pricing Cards -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="Free"
            :price="0"
            description="Perfect for testing and evaluation. Full scraping capabilities with data preview."
            :features="freeFeatures"
          />
          
          <PricingCard
            title="Professional"
            :price="billingCycle === 'monthly' ? 150 : 1500"
            :billing-cycle="billingCycle"
            description="For professionals who need to save and export their scraped data."
            :features="proFeatures"
            :featured="true"
          />
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <Title size="lg" tag="h2" class-name="mb-12 text-center">
            Frequently Asked Questions
          </Title>
          
          <div class="space-y-8">
            <div v-for="faq in faqs" :key="faq.question" class="bg-white p-6 rounded-lg shadow-sm">
              <Title size="sm" tag="h3" class-name="mb-3 text-gray-900">
                {{ faq.question }}
              </Title>
              <Text size="md" class-name="text-gray-600">
                {{ faq.answer }}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Layout from '../components/Layout.vue';
import PricingCard from '../components/PricingCard.vue';
import Title from '../components/Title.vue';
import Text from '../components/Text.vue';

const billingCycle = ref<'monthly' | 'yearly'>('monthly');

const toggleBillingCycle = () => {
  billingCycle.value = billingCycle.value === 'monthly' ? 'yearly' : 'monthly';
};

const freeFeatures = [
  { name: 'XPath selector configuration', included: true },
  { name: 'Multi-threading support', included: true },
  { name: 'Browser-based scraping', included: true },
  { name: 'Real-time data preview', included: true },
  { name: 'Unlimited scraping sessions', included: true },
  { name: 'Save data to CSV', included: false },
  { name: 'Export functionality', included: false },
  { name: 'Data persistence', included: false }
];

const proFeatures = [
  { name: 'XPath selector configuration', included: true },
  { name: 'Multi-threading support', included: true },
  { name: 'Browser-based scraping', included: true },
  { name: 'Real-time data preview', included: true },
  { name: 'Unlimited scraping sessions', included: true },
  { name: 'Save data to CSV', included: true },
  { name: 'Export functionality', included: true },
  { name: 'Data persistence', included: true }
];

const faqs = [
  {
    question: 'What\'s the difference between Free and Professional versions?',
    answer: 'The Free version includes all scraping features but only allows you to view the data. The Professional version adds the ability to save and export your scraped data to CSV files.'
  },
  {
    question: 'How does the pricing work?',
    answer: 'The Professional version is $150/month or $1,500/year (saving you $300 annually). You can switch between monthly and yearly billing at any time.'
  },
  {
    question: 'Can I upgrade from Free to Professional later?',
    answer: 'Absolutely! You can upgrade at any time and immediately gain access to the data saving and export features.'
  },
  {
    question: 'What websites can I scrape?',
    answer: 'SWS works with most websites, including those with JavaScript. Our browser-based scraping feature handles dynamic content effectively.'
  },
  {
    question: 'Is there a limit on the amount of data I can scrape?',
    answer: 'There are no artificial limits imposed by SWS. Performance will depend on your hardware and the target website\'s response times.'
  }
];
</script>
