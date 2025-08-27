import matter from 'gray-matter';

// Import all markdown files statically
import gettingStartedMd from '../content/docs/getting-started.md?raw';
import installationMd from '../content/docs/installation.md?raw';
import xpathSelectorsMd from '../content/docs/xpath-selectors.md?raw';
import v210Md from '../content/updates/v2.1.0.md?raw';
import v205Md from '../content/updates/v2.0.5.md?raw';
import v192Md from '../content/updates/v1.9.2.md?raw';

export interface ContentMeta {
  title: string;
  description?: string;
  version?: string;
  date?: string;
  category?: string;
  order?: number;
  slug: string;
}

export interface ContentItem {
  meta: ContentMeta;
  content: string;
  rawContent: string;
}

// Static content mapping
const staticContent: Record<string, string> = {
  'docs/getting-started': gettingStartedMd,
  'docs/installation': installationMd,
  'docs/xpath-selectors': xpathSelectorsMd,
  'updates/v2.1.0': v210Md,
  'updates/v2.0.5': v205Md,
  'updates/v1.9.2': v192Md,
};

// Cache for processed content
const contentCache = new Map<string, ContentItem>();

export async function loadContent(type: 'docs' | 'updates', slug: string): Promise<ContentItem | null> {
  const cacheKey = `${type}/${slug}`;
  
  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey)!;
  }

  try {
    // Get content from static imports
    const rawContent = staticContent[cacheKey];
    
    if (!rawContent) {
      console.warn(`Content not found: ${cacheKey}`);
      return null;
    }
    
    const { data, content } = matter(rawContent);
    
    const item: ContentItem = {
      meta: {
        ...data,
        slug
      } as ContentMeta,
      content,
      rawContent
    };
    
    contentCache.set(cacheKey, item);
    return item;
  } catch (error) {
    console.error(`Failed to process content: ${type}/${slug}`, error);
    return null;
  }
}

export async function loadAllContent(type: 'docs' | 'updates'): Promise<ContentItem[]> {
  const items: ContentItem[] = [];
  
  // Get all keys for the specified type
  const keys = Object.keys(staticContent).filter(key => key.startsWith(`${type}/`));
  
  for (const key of keys) {
    const slug = key.replace(`${type}/`, '');
    const item = await loadContent(type, slug);
    if (item) {
      items.push(item);
    }
  }
  
  // Sort docs by order, updates by date (newest first)
  if (type === 'docs') {
    items.sort((a, b) => (a.meta.order || 999) - (b.meta.order || 999));
  } else {
    items.sort((a, b) => {
      const dateA = new Date(a.meta.date || '');
      const dateB = new Date(b.meta.date || '');
      return dateB.getTime() - dateA.getTime();
    });
  }
  
  return items;
}

export function clearContentCache(): void {
  contentCache.clear();
}
