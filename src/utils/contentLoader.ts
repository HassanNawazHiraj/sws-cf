import matter from 'gray-matter';

// Import all markdown files statically
import gettingStartedMd from '../content/docs/getting-started.md?raw';
import installationMd from '../content/docs/installation.md?raw';
import xpathSelectorsMd from '../content/docs/xpath-selectors.md?raw';

// Configuration for updates
export const UPDATES_CONFIG = {
  maxUpdateNumber: 89, // Update this number when adding more updates
};

export interface ContentMeta {
  title: string;
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
};

// Cache for processed content
const contentCache = new Map<string, ContentItem>();

export async function loadContent(type: 'docs' | 'updates', slug: string): Promise<ContentItem | null> {
  const cacheKey = `${type}/${slug}`;
  
  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey)!;
  }

  try {
    let rawContent: string | undefined;

    if (type === 'docs') {
      // Get content from static imports for docs
      rawContent = staticContent[cacheKey];
    } else if (type === 'updates') {
      // Handle numbered updates dynamically
      const updateNumber = parseInt(slug);
      if (!isNaN(updateNumber) && updateNumber >= 1 && updateNumber <= UPDATES_CONFIG.maxUpdateNumber) {
        // Dynamic import for numbered updates
        const module = await import(`../content/updates/${updateNumber}.md?raw`);
        rawContent = module.default;
      }
    }
    
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
  
  if (type === 'docs') {
    // Get all keys for docs
    const keys = Object.keys(staticContent).filter(key => key.startsWith(`${type}/`));
    
    for (const key of keys) {
      const slug = key.replace(`${type}/`, '');
      const item = await loadContent(type, slug);
      if (item) {
        items.push(item);
      }
    }
    
    // Sort docs by order
    items.sort((a, b) => (a.meta.order || 999) - (b.meta.order || 999));
  } else if (type === 'updates') {
    // Load all numbered updates dynamically (in descending order: newest first)
    for (let i = UPDATES_CONFIG.maxUpdateNumber; i >= 1; i--) {
      try {
        const item = await loadContent(type, i.toString());
        if (item) {
          items.push(item);
        }
      } catch (error) {
        console.warn(`Failed to load update ${i}:`, error);
      }
    }
    
    // Items are already in correct order by file number (highest first)
    // Sort by slug number to ensure proper ordering (88, 87, 86, ..., 1)
    items.sort((a, b) => {
      const numA = parseInt(a.meta.slug) || 0;
      const numB = parseInt(b.meta.slug) || 0;
      return numB - numA; // Descending order: higher numbers first
    });
  }
  
  return items;
}

export function clearContentCache(): void {
  contentCache.clear();
}
