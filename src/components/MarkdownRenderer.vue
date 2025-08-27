<template>
  <div 
    class="prose"
    v-html="renderedContent"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { marked } from 'marked';
import hljs from 'highlight.js/lib/core';

// Import common languages for syntax highlighting
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('bash', bash);

interface Props {
  content: string;
}

const props = defineProps<Props>();

// Configure marked with syntax highlighting
const renderer = new marked.Renderer();

// Configure renderer to add syntax highlighting
renderer.code = function({ text, lang }: { text: string; lang?: string }) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      const highlighted = hljs.highlight(text, { language: lang }).value;
      return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
    } catch (err) {
      console.warn('Syntax highlighting failed:', err);
    }
  }
  const highlighted = hljs.highlightAuto(text).value;
  return `<pre><code class="hljs">${highlighted}</code></pre>`;
};

marked.setOptions({
  breaks: true,
  gfm: true
});

const renderedContent = computed(() => {
  return marked(props.content, {
    renderer,
    async: false
  });
});
</script>

<style scoped>
/* Custom prose styles to match your design */
:deep(.prose) {
  color: #374151;
  line-height: 1.7;
}

:deep(.prose h1) {
  color: #111827;
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

:deep(.prose h2) {
  color: #111827;
  font-size: 1.875rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

:deep(.prose h3) {
  color: #111827;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

:deep(.prose code) {
  background-color: #f3f4f6;
  color: #dc2626;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

:deep(.prose pre) {
  background-color: #1f2937;
  color: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1rem 0;
}

:deep(.prose pre code) {
  background-color: transparent;
  color: inherit;
  padding: 0;
}

:deep(.prose blockquote) {
  border-left: 4px solid #10b981;
  background-color: #f0fdf4;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.25rem;
}

:deep(.prose table) {
  border-collapse: collapse;
  width: 100%;
  margin: 1rem 0;
}

:deep(.prose th),
:deep(.prose td) {
  border: 1px solid #d1d5db;
  padding: 0.75rem;
  text-align: left;
}

:deep(.prose th) {
  background-color: #f9fafb;
  font-weight: 600;
}

:deep(.prose ul) {
  list-style-type: disc;
  padding-left: 1.5rem;
}

:deep(.prose ol) {
  list-style-type: decimal;
  padding-left: 1.5rem;
}

:deep(.prose li) {
  margin: 0.5rem 0;
}

:deep(.prose a) {
  color: #10b981;
  text-decoration: none;
}

:deep(.prose a:hover) {
  text-decoration: underline;
}
</style>
