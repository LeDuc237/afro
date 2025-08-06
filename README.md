# Blen Hairs - Premium Afro Kinky Bulk Hair Extensions

A modern e-commerce website for premium human hair extensions, built with React, TypeScript, and Tailwind CSS.

## Features

- **Product Catalog**: Browse premium afro kinky bulk hair extensions
- **Shopping Cart**: Add/remove items with quantity management
- **Secure Payments**: Integrated with Stripe for secure payment processing
- **Responsive Design**: Mobile-first design that works on all devices
- **Product Filtering**: Filter by color, length, and price
- **Customer Reviews**: Display ratings and reviews
- **WhatsApp Integration**: Direct customer support via WhatsApp

## Payment Integration

This application is integrated with Stripe for secure payment processing:

- **Test Mode**: Currently configured for testing
- **Supported Cards**: Visa, Mastercard, American Express
- **Security**: PCI DSS compliant, SSL encrypted
- **Test Card**: Use `4242 4242 4242 4242` for testing

### Stripe Configuration

The Stripe integration uses:
- **Publishable Key**: `pk_test_51Rse6LQcCvouwfQJLwKe7MwjVeko3pwuieI9ggjHRI4g2DxiFas3WMHyPxuqSecE145V2eAwBG3E0R6iV22C9Xvn00UmKGNDHb`
- **Environment**: Test mode
- **Currency**: USD

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── ProductPage.tsx # Product details
│   ├── CartPage.tsx    # Shopping cart
│   ├── PaymentModal.tsx # Payment processing
│   └── StripePaymentForm.tsx # Stripe integration
├── config/             # Configuration files
│   └── payment.ts      # Payment configuration
├── context/            # React context
│   └── CartContext.tsx # Shopping cart state
├── data/               # Product data
│   └── products.ts     # Product catalog
└── utils/              # Utility functions
    └── stripeHelpers.ts # Stripe helper functions
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Stripe** - Payment processing
- **Vite** - Build tool

## Payment Testing

Use these test card numbers in development:

- **Success**: `4242 4242 4242 4242`
- **Declined**: `4000 0000 0000 0002`
- **Requires Authentication**: `4000 0025 0000 3155`

Use any future expiry date and any 3-digit CVC.

## Deployment

The application is deployed on Netlify and can be accessed at:
https://delicate-banoffee-384c86.netlify.app

## Support

For customer support, users can:
- Use the WhatsApp integration for instant chat
- Email support through the contact forms
- Browse the comprehensive FAQ section

## License

This project is proprietary software for Blen Hairs.