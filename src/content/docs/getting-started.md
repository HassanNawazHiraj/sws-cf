---
title: "Getting Started with SWS"
description: "Quick start guide for Simple Web Scraper"
category: "guide"
order: 1
---

# Getting Started with SWS

Welcome to **Simple Web Scraper (SWS)** by Byteremix! This guide will help you get up and running with SWS in just a few minutes.

## What is SWS?

SWS is a professional web scraping tool designed for extracting data from websites with precision and efficiency. Built for Windows, it offers:

- **XPath Selector Configuration** - Precisely target elements on web pages
- **Multi-threading Support** - Scrape multiple pages simultaneously
- **Browser-based Scraping** - Handle JavaScript-heavy websites
- **Data Export** - Save your data in multiple formats

## Installation

1. **Download SWS** from our [download page](/download)
2. **Run the installer** and follow the setup wizard
3. **Launch SWS** from your desktop or Start menu

> **System Requirements:** Windows 10/11, 4GB RAM, 500MB disk space

## Your First Scraping Project

### Step 1: Create a New Project

1. Open SWS and click **"New Project"**
2. Enter a project name (e.g., "My First Scrape")
3. Enter the target URL you want to scrape

### Step 2: Configure XPath Selectors

XPath selectors are the heart of SWS. They tell the scraper exactly which elements to extract.

```xpath
// Example: Extract all product titles
//h2[@class='product-title']

// Example: Extract all prices
//span[@class='price']

// Example: Extract all product links
//a[@class='product-link']/@href
```

### Step 3: Set Up Your Columns

1. Click **"Add Column"** for each piece of data
2. Give each column a name (e.g., "Title", "Price", "Link")
3. Enter the corresponding XPath selector

### Step 4: Run Your Scrape

1. Click **"Start Scraping"** to begin
2. Monitor progress in the preview window
3. Review extracted data
4. Export to your preferred format (Professional version)

## Next Steps

- Learn more about [XPath Selectors](/docs/xpath-selectors)
- Explore [Multi-threading](/docs/multi-threading) for better performance
- Try [Browser Scraping](/docs/browser-scraping) for JavaScript sites

## Need Help?

- Check our [Troubleshooting Guide](/docs/troubleshooting)
- Browse the [API Reference](/docs/api-reference)
- Contact support at support@byteremix.com
