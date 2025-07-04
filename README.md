# UK E-commerce Store - Astro + Shopify + Cloudflare Pages

A modern, responsive e-commerce website built with Astro, React, and Shopify Storefront API, optimized for UK customers and deployable on Cloudflare Pages.

## 🇬🇧 UK-Focused Features

- **GBP Currency**: All prices displayed in British Pounds
- **UK Localization**: en-GB locale, British English content
- **Free UK Delivery**: Prominently featured for orders over £50
- **UK Contact Information**: Phone numbers, addresses, and support hours
- **GDPR Compliance**: Cookie consent banner and privacy policies
- **UK Payment Methods**: Optimized for UK customers

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) with React integration
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for modern, responsive design
- **E-commerce**: [Shopify Storefront API](https://shopify.dev/docs/api/storefront)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **TypeScript**: Full TypeScript support

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn
- A Shopify store with Storefront API access
- Cloudflare account (for deployment)

### 1. Clone and Install

```bash
git clone <repository-url>
cd astro-ecommerce-template
npm install
```

### 2. Shopify Configuration

1. **Create a Shopify Private App**:
   - Go to your Shopify admin → Apps → App and sales channel settings
   - Click "Develop apps" → "Create an app"
   - Give your app a name (e.g., "UK Store Frontend")

2. **Configure Storefront API Access**:
   - In your app, go to "Configuration" → "Storefront API access"
   - Enable the following scopes:
     - `unauthenticated_read_products`
     - `unauthenticated_read_product_listings`
     - `unauthenticated_read_collections`
     - `unauthenticated_read_product_tags`
   - Save the configuration

3. **Get Your Credentials**:
   - Go to "API credentials"
   - Copy the "Storefront access token"
   - Your store domain is `your-store.myshopify.com`

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
# Shopify Configuration
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token

# UK Specific Settings
PUBLIC_CURRENCY=GBP
PUBLIC_LOCALE=en-GB
PUBLIC_COUNTRY=GB

# Site Configuration
PUBLIC_SITE_NAME=UK Store
PUBLIC_SITE_URL=https://your-site.pages.dev
```

### 4. Development

```bash
npm run dev
```

Your site will be available at `http://localhost:4321`

### 5. Shopify Store Setup

For optimal functionality, ensure your Shopify store has:

1. **Product Tags**: Use tags like `new`, `bestseller`, `sale` for featured sections
2. **Product Images**: Multiple high-quality images for each product
3. **Collections**: Organize products into collections (e.g., "New Arrivals", "Best Sellers")
4. **UK-specific Content**: Prices in GBP, UK shipping options
5. **Product Variants**: Colors, sizes, etc. for better user experience

### 6. Cloudflare Pages Deployment

1. **Build the Site**:
   ```bash
   npm run build
   ```

2. **Deploy with Wrangler**:
   ```bash
   npm install -g wrangler
   wrangler pages deploy ./dist
   ```

3. **Set Environment Variables**:
   - Go to Cloudflare Dashboard → Pages → Your site → Settings → Environment variables
   - Add your Shopify environment variables

4. **Configure Custom Domain** (optional):
   - Go to Custom domains → Add custom domain
   - Follow the DNS configuration steps

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx          # Main navigation with UK features
│   ├── ProductCard.tsx         # Product display component
│   ├── Footer.tsx              # Footer with UK contact info
│   └── ...
├── layouts/
│   └── Layout.astro            # Base layout with SEO
├── lib/
│   └── shopify.ts              # Shopify API integration
├── pages/
│   └── index.astro             # Homepage
├── styles/
│   └── global.css              # Global styles and Tailwind
└── ...
```

## 🎨 Customization

### Styling

The site uses Tailwind CSS with a custom color palette:
- Primary: Blue theme (`primary-600`, `primary-700`, etc.)
- Secondary: Gray theme for secondary elements
- Custom UK-specific styles available in `global.css`

### Components

All React components are TypeScript-enabled and use:
- Tailwind CSS for styling
- Lucide React for icons
- Shopify TypeScript types for data
- Responsive design patterns

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Use the `Layout` component for consistent structure
3. Import necessary components and Shopify data

## 🔧 Configuration

### Astro Configuration

The `astro.config.mjs` is configured for:
- React integration
- Tailwind CSS
- Cloudflare Pages adapter
- Image optimization for Shopify CDN

### Shopify Integration

The `src/lib/shopify.ts` file provides:
- Product fetching with pagination
- Collection management
- Price formatting for GBP
- TypeScript interfaces for all data

## 🌐 SEO & Performance

- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- **Performance**: Astro's static site generation
- **Accessibility**: ARIA labels, keyboard navigation
- **Core Web Vitals**: Optimized images, lazy loading
- **UK-specific SEO**: Geo-targeting, local schema markup

## 📱 Multi-Device Responsiveness

- **Mobile-first design**: Optimized for mobile devices (320px+)
- **Touch-friendly**: Large tap targets, swipe gestures
- **Responsive navigation**: Mobile menu, search
- **Fast loading**: Optimized images, minimal JavaScript
- **Ultra-wide support**: Scales perfectly up to 7680p resolution
- **Multi-monitor friendly**: Adaptive layouts for multiple displays
- **High-DPI displays**: Optimized for Retina and ultra-high resolution screens

### Supported Resolutions

| Breakpoint | Screen Width | Grid Columns (Products) | Use Case |
|------------|-------------|------------------------|-----------|
| `sm` | 640px+ | 2 columns | Mobile landscape |
| `md` | 768px+ | 3 columns | Tablets |
| `lg` | 1024px+ | 4 columns | Laptops |
| `xl` | 1280px+ | 4 columns | Desktops |
| `2xl` | 1536px+ | 4 columns | Large desktops |
| `3xl` | 1920px+ | 5 columns | Full HD wide |
| `4xl` | 2560px+ | 6 columns | 2K displays |
| `5xl` | 3440px+ | 6 columns | Ultra-wide monitors |
| `6xl` | 5120px+ | 8 columns | 5K displays |
| `7xl` | 7680px+ | 8 columns | 8K ultra-wide setups |

## 🔒 Security & Privacy

- **GDPR Compliance**: Cookie consent, privacy policy
- **Secure Checkout**: SSL encryption, secure payment processing
- **Data Protection**: Minimal data collection, UK privacy laws
- **Content Security**: CSP headers, secure API calls

## 🚀 Performance Optimization

- **Static Site Generation**: Pre-rendered pages for speed
- **Image Optimization**: WebP format, lazy loading
- **CSS Optimization**: Purged unused styles
- **JavaScript Optimization**: Minimal client-side JS
- **CDN**: Cloudflare global CDN

## 🛒 E-commerce Features

- **Product Catalog**: Grid and list views
- **Product Details**: Image galleries, variants
- **Shopping Cart**: Add to cart, quantity management
- **Search**: Product search functionality
- **Wishlist**: Save favorite products
- **UK Delivery**: Free delivery information

## 🔧 Maintenance

### Regular Updates

- Update dependencies monthly
- Monitor Shopify API changes
- Review performance metrics
- Update content and products

### Monitoring

- Use Cloudflare Analytics for traffic insights
- Monitor Core Web Vitals
- Track conversion rates
- Review user feedback

## 📞 Support

For technical support or questions:
- Review the documentation
- Check Shopify API documentation
- Contact support at support@ukstore.co.uk

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Made with ❤️ for UK customers**
