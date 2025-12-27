# Stripe Integration Setup Guide

## Overview
This site now uses **Stripe Checkout** for e-commerce instead of Shopify or Snipcart. The cart is handled with vanilla JavaScript and checkout redirects to Stripe's hosted checkout page.

## Setup Instructions

### 1. Get Stripe API Keys
1. Sign up or log in to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Go to **Developers > API Keys**
3. Copy your **Publishable key** (starts with `pk_`)
4. Copy your **Secret key** (starts with `sk_`)

### 2. Environment Variables
1. Copy `.env.local.example` to `.env.local`
2. Add your Stripe keys:
   ```
   STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
   STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here
   ```

### 3. Deploy to Vercel
1. Install dependencies: `npm install`
2. Add environment variables in Vercel Dashboard:
   - Go to your project settings
   - Add the same STRIPE keys as environment variables
3. Deploy: `git push` (auto-deploys via GitHub integration)

### 4. Test the Integration
1. Add products to cart
2. Click "Proceed to Checkout"
3. Complete test purchase with Stripe test cards:
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`

## How It Works

### Cart System
- **Client-side cart** using vanilla JavaScript
- **LocalStorage** persistence
- **Real-time updates** for quantity/total
- **No external dependencies**

### Product Data
- Products defined as **JSON objects** in `js/main.js`
- **AI-generated products** - no manual dashboard required
- Easy to add/modify products in code

### Checkout Flow
1. User adds items to cart
2. Clicks "Proceed to Checkout"
3. API call to `/api/create-checkout-session`
4. Redirects to **Stripe hosted checkout**
5. Payment processed by Stripe
6. User redirected to success/cancel pages

### API Route
- **Serverless function**: `/api/create-checkout-session.js`
- Creates Stripe checkout session with multiple line items
- Supports quantities and multiple products
- Returns checkout URL for redirect

## Production Checklist

- [ ] Replace test Stripe keys with live keys
- [ ] Test all product additions and checkout flow
- [ ] Verify success/cancel page redirects
- [ ] Update domain in checkout session URLs
- [ ] Test mobile cart functionality
- [ ] Monitor Stripe Dashboard for transactions

## Troubleshooting

**Cart not working?**
- Check browser console for JavaScript errors
- Verify cart button has correct ID: `#cart-button`

**Checkout failing?**
- Verify Stripe environment variables are set in Vercel
- Check API route logs in Vercel Functions dashboard
- Ensure domain matches in checkout session URLs

**Products not showing?**
- Check image paths in PRODUCTS constant
- Verify product grid containers exist in HTML

## Advantages

✅ **No Shopify fees**  
✅ **No Snipcart crashes**  
✅ **Simple, stable cart**  
✅ **AI-friendly product management**  
✅ **Stripe's secure checkout**  
✅ **No DOM scraping issues**  
✅ **Fast, lightweight**
