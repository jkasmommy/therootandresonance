# Stripe Setup Guide for The Root & Resonance

## 🚀 Step-by-Step Stripe Integration

### Step 1: Create Your Stripe Account ✅
1. Go to [stripe.com](https://stripe.com) and click "Start now"
2. Create account with your business email
3. Complete business verification for The Root & Resonance LLC
4. Add bank account for payouts

### Step 2: Get Your API Keys 🔑
1. In Stripe Dashboard, go to **Developers > API keys**
2. Copy your **Publishable key** (starts with `pk_test_` for testing)
3. Save your **Secret key** securely (starts with `sk_test_`)

**Replace this line in your `js/main.js` file:**
```javascript
const STRIPE_PUBLIC_KEY = 'pk_test_51...'; // Replace with your actual key
```

### Step 3: Create Products in Stripe Dashboard 📦

For each product, create a **Price** in Stripe:

1. **Go to**: Products > Add product
2. **Fill in details** for each product:

#### Product 1: Moonlight Elixir
- **Name**: Moonlight Elixir
- **Description**: A calming blend of chamomile, lavender, and moonstone essence for peaceful sleep
- **Price**: $28.00
- **Recurring**: One-time
- **Copy the Price ID** (starts with `price_`) and update `js/main.js`:
  ```javascript
  stripePriceId: "price_your_actual_price_id_here"
  ```

#### Product 2: Sunrise Vitality Tea
- **Name**: Sunrise Vitality Tea
- **Description**: Energizing morning blend with ginseng, yerba mate, and citrus herbs
- **Price**: $18.00

#### Product 3: Heart Healing Tincture
- **Name**: Heart Healing Tincture
- **Description**: Hawthorn berry and rose hip tincture for emotional and physical heart support
- **Price**: $32.00

#### Product 4: Sacred Cedar Salve
- **Name**: Sacred Cedar Salve
- **Description**: Protective salve with cedar, pine, and sage for grounding and purification
- **Price**: $22.00

### Step 4: Configure Webhook (Optional but Recommended) 🔗

1. **Go to**: Developers > Webhooks > Add endpoint
2. **Endpoint URL**: `https://therootandresonance.vercel.app/webhook` (we'll set this up later)
3. **Events to listen for**:
   - `checkout.session.completed`
   - `payment_intent.succeeded`

### Step 5: Test Your Integration 🧪

Use Stripe's test card numbers:
- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **Require Authentication**: 4000 0025 0000 3155

### Step 6: Update Your Code

After getting your Stripe keys and price IDs, update these files:

**In `js/main.js`:**
```javascript
// Replace this line:
const STRIPE_PUBLIC_KEY = 'pk_test_your_actual_key_here';

// Update each product's stripePriceId:
{
    id: 1,
    name: "Moonlight Elixir",
    stripePriceId: "price_actual_price_id_from_stripe",
    // ... rest of product
}
```

### Step 7: Go Live! 🎉

When ready for real payments:
1. **Complete Stripe onboarding** (bank verification, tax info)
2. **Switch to live keys** (start with `pk_live_` and `sk_live_`)
3. **Create live products** in Stripe Dashboard
4. **Update price IDs** in your code
5. **Test with real small amount** first

## 💰 Stripe Fees & Pricing

**Transaction Fees:**
- **2.9% + $0.30** per successful charge
- No monthly fees, no setup fees
- Only pay when you make sales

**Example:**
- $28 Moonlight Elixir sale = $0.81 + $0.30 = $1.11 fee
- You receive: $26.89

## 🔧 Advanced Features (Later)

### Email Receipts
Stripe automatically sends receipts, but you can customize them:
1. **Settings > Emails** in Stripe Dashboard
2. Add your logo and brand colors
3. Customize the message

### Shipping Rates
Add real shipping calculation:
1. **Settings > Shipping rates** in Stripe Dashboard
2. Set up rates by location
3. Enable in checkout session

### Tax Collection
For sales tax compliance:
1. **Settings > Tax** in Stripe Dashboard  
2. Enable automatic tax calculation
3. Stripe handles all tax filing

## 🚨 Security Checklist

✅ **Never put secret keys in frontend code**
✅ **Always use HTTPS** (Vercel provides this)
✅ **Let Stripe handle card data** (never store card info)
✅ **Use webhooks to verify payments** server-side
✅ **Test with various scenarios** before going live

## 📞 Need Help?

1. **Stripe Documentation**: [stripe.com/docs](https://stripe.com/docs)
2. **Stripe Support**: Available 24/7 via chat
3. **Test Mode**: Always test first before going live

---

## 🎯 Your Next Actions:

1. ✅ Create Stripe account
2. ⏳ Get API keys and update `js/main.js`
3. ⏳ Create 4 products in Stripe Dashboard
4. ⏳ Update price IDs in code
5. ⏳ Test with test card numbers
6. ⏳ Deploy and celebrate! 🎉

**Estimated Time**: 30-45 minutes to complete setup
