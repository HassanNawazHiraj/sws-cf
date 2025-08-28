---
title: "XPath Selectors Guide"
description: "Master XPath for precise element targeting"
category: "guide"
order: 3
---

# XPath Selectors Guide

XPath (XML Path Language) is the core of SWS's data extraction capabilities. This guide will help you master XPath for precise web scraping.

## XPath Basics

### What is XPath?

XPath uses path expressions to navigate HTML elements, similar to file paths. It allows precise targeting of elements based on structure, attributes, and content.

### Basic Syntax

```xpath
//        Start from anywhere in document
/         Start from root element
[@attr]   Select by attribute
[text()]  Select by text content
[n]       Select nth element
```

## Common Patterns

### Selecting by Tag

```xpath
// All h1 elements
//h1

// All div elements
//div

// All links
//a
```

### Selecting by Class

```xpath
// Specific class
//div[@class='product-item']

// Class contains text
//div[contains(@class, 'product')]

// Multiple classes
//div[@class='item featured']
```

### Selecting by Attributes

```xpath
// By ID
//div[@id='main-content']

// By href
//a[@href='/contact']

// By data attribute
//div[@data-price]
```

### Selecting by Text

```xpath
// Exact text match
//span[text()='Price:']

// Contains text
//h2[contains(text(), 'Special')]

// Normalized text
//button[normalize-space(text())='Add to Cart']
```

## Advanced Techniques

### Parent/Child Navigation

```xpath
// Parent element
//span[@class='price']/..

// Child elements
//div[@class='product']//h2

// Direct children only
//div[@class='product']/h2

// Following sibling
//label[@for='email']/following-sibling::input
```

### Position-based Selection

```xpath
// First element
//div[@class='item'][1]

// Last element
//div[@class='item'][last()]

// First 3 elements
//div[@class='item'][position() <= 3]
```

### Extracting Attributes

```xpath
// Get href attribute
//a[@class='product-link']/@href

// Get src attribute
//img[@class='product-image']/@src

// Get data attribute
//div[@class='product']/@data-price
```

## Best Practices

### Do

- Use meaningful attributes (`class`, `id`)
- Start simple, add complexity when needed
- Test on multiple pages
- Use `contains()` for dynamic content

### Don't

- Use overly specific paths
- Rely on position-only selectors
- Ignore case sensitivity
- Use fragile deep nesting


## XPath Functions Reference

| Function | Description | Example |
|----------|-------------|---------|
| `contains()` | Attribute contains value | `contains(@class, 'item')` |
| `starts-with()` | Attribute starts with value | `starts-with(@id, 'prod')` |
| `text()` | Element text content | `text()='Buy Now'` |
| `normalize-space()` | Trim whitespace | `normalize-space(text())` |
| `position()` | Element position | `position() = 1` |
| `last()` | Last element | `[last()]` |

