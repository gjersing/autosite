# Performance Optimization Guide

## ✅ Implemented Optimizations

### 1. Build Optimization (Vite Config)

- ✅ **Minification**: Enabled esbuild minification for JavaScript and CSS
- ✅ **Code Splitting**: Vendor chunks separated for better caching
- ✅ **Source Maps**: Disabled in production builds
- ✅ **CSS Minification**: Enabled for production builds

### 2. Font Loading Optimization

- ✅ **Font Display**: Using `display=swap` in Google Fonts URL
- ✅ **Font Weights**: Reduced to only necessary weights (200, 400, 600) instead of full range
- ✅ **Preconnect**: Already configured for Google Fonts domains

### 3. Image Lazy Loading

- ✅ **Below-the-fold images**: Added `loading="lazy"` and `decoding="async"` to:
  - AboutUs component image (`/images/cars.jpg`)
  - Service card images (all 3 cards)
  - Footer logo
- ✅ **Above-the-fold images**: Hero image uses `fetchPriority="high"` for LCP optimization
- ✅ **Iframe lazy loading**: BusinessInfo map iframe already has `loading="lazy"`

### 4. Image Optimization Attributes

All below-the-fold images now include:

- `loading="lazy"` - Defers loading until image is near viewport
- `decoding="async"` - Allows browser to decode image asynchronously

## 🔧 Server-Side Compression Setup

### For Node.js/Express Servers

If using `@react-router/serve` or Express, add compression middleware:

```javascript
import compression from "compression";
import express from "express";

const app = express();
app.use(compression()); // Enable gzip compression
```

Install: `npm install compression`

### For Nginx

Add to your nginx configuration:

```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript
           application/x-javascript application/xml+rss
           application/javascript application/json
           image/svg+xml;
gzip_comp_level 6;
```

### For Apache

Add to `.htaccess`:

```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css
  AddOutputFilterByType DEFLATE application/javascript application/json
  AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>
```

### For Vercel/Netlify

Compression is automatically enabled - no configuration needed.

## 📊 Performance Monitoring

### Tools to Test Performance:

1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
2. **Lighthouse** (Chrome DevTools): Built-in performance audit
3. **WebPageTest**: https://www.webpagetest.org/
4. **GTmetrix**: https://gtmetrix.com/

### Key Metrics to Monitor:

- **LCP (Largest Contentful Paint)**: Should be < 2.5s
- **FID (First Input Delay)**: Should be < 100ms
- **CLS (Cumulative Layout Shift)**: Should be < 0.1
- **TTFB (Time to First Byte)**: Should be < 600ms

## 🎯 Additional Recommendations

### 1. Image Optimization

- Consider converting images to WebP format where possible
- Use responsive images with `srcset` for different screen sizes
- Optimize image file sizes before uploading

### 2. Font Loading

- Consider self-hosting fonts for better control
- Use `font-display: swap` (already implemented via Google Fonts)

### 3. Third-Party Scripts

- FontAwesome script is loaded - consider lazy loading or using CSS-only icons
- Consider deferring non-critical scripts

### 4. Caching Headers

Set appropriate cache headers for static assets:

```
Cache-Control: public, max-age=31536000, immutable
```

### 5. CDN

Consider using a CDN for static assets to reduce latency.

## 📝 Notes

- Minification happens automatically during `npm run build`
- Lazy loading is native browser feature - no JavaScript required
- Compression should be configured on your hosting/server
- Monitor performance regularly and adjust as needed
