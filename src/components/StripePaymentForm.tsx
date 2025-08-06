import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { Lock, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';
import { PAYMENT_CONFIG } from '../config/payment';

// Initialize Stripe
const stripePromise = loadStripe(PAYMENT_CONFIG.stripe.publishableKey);

interface StripePaymentFormProps {
  amount: number;
  onSuccess: (paymentResult: any) => void;
  onError: (error: string) => void;
  customerInfo: {
    email: string;
    name: string;
  };
}

const CheckoutForm: React.FC<StripePaymentFormProps> = ({
  amount,
  onSuccess,
  onError,
  customerInfo
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setPaymentError('');

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setPaymentError('Card element not found');
      setIsProcessing(false);
      return;
    }

    try {
      // Create payment method
      const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: customerInfo.name,
          email: customerInfo.email,
        },
      });

      if (paymentMethodError) {
        throw new Error(paymentMethodError.message);
      }

      // In a real application, you would send the payment method to your server
      // to create a payment intent and confirm the payment
      // For demo purposes, we'll simulate a successful payment
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate successful payment
      const mockPaymentResult = {
        id: `pi_${Date.now()}`,
        status: 'succeeded',
        amount: amount * 100, // Stripe uses cents
        currency: 'usd',
        payment_method: paymentMethod.id,
        created: Math.floor(Date.now() / 1000),
        receipt_url: `https://pay.stripe.com/receipts/mock_${Date.now()}`
      };

      onSuccess(mockPaymentResult);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Payment failed';
      setPaymentError(errorMessage);
      onError(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
        padding: '12px',
      },
      invalid: {
        color: '#9e2146',
      },
    },
    hidePostalCode: false,
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Card Element */}
      <div className="bg-gray-50 rounded-xl p-4">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Card Information
        </label>
        <div className="bg-white border border-gray-300 rounded-lg p-4">
          <CardElement options={cardElementOptions} />
        </div>
      </div>

      {/* Error Display */}
      {paymentError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2">
          <AlertCircle size={20} className="text-red-600" />
          <p className="text-red-600 font-medium">{paymentError}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
      >
        {isProcessing ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Processing Payment...</span>
          </>
        ) : (
          <>
            <Lock size={20} />
            <span>Pay ${amount.toFixed(2)}</span>
          </>
        )}
      </button>

      {/* Security Notice */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-600 bg-green-50 p-3 rounded-lg">
          <Lock size={14} className="text-green-600" />
          <span>Secured by Stripe - Your payment information is encrypted</span>
        </div>
      </div>
    </form>
  );
};

const StripePaymentForm: React.FC<StripePaymentFormProps> = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm {...props} />
    </Elements>
  );
};

export default StripePaymentForm;