import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CreditCard, Lock, ShoppingBag, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_YOUR_PUBLISHABLE_KEY_HERE');

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const cartItems = [
    { id: 1, name: 'Guji Natural Green Coffee Beans', price: 25.00, quantity: 1 },
    { id: 2, name: 'Ethiopian Yirgacheffe Beans', price: 28.00, quantity: 2 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15.00;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError('');

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setError('Card element not found');
      setProcessing(false);
      return;
    }

    try {
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: formData.name,
          email: formData.email,
          address: {
            line1: formData.address,
            city: formData.city,
            postal_code: formData.postalCode,
            country: formData.country,
          },
        },
      });

      if (stripeError) {
        setError(stripeError.message || 'Payment failed');
        setProcessing(false);
        return;
      }

      console.log('Payment Method:', paymentMethod);
      alert('Payment successful! Order ID: ' + Math.random().toString(36).substr(2, 9).toUpperCase());
      navigate('/');
    } catch (err) {
      setError('An unexpected error occurred');
      setProcessing(false);
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
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl mb-2 text-foreground font-heading">
              Checkout
            </h1>
            <p className="text-muted-foreground">
              Complete your order securely
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-xl mb-4 font-heading flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Payment Details
                    </h2>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <div className="flex items-start gap-2">
                        <Lock className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-blue-900">Secure Payment</p>
                          <p className="text-xs text-blue-700 mt-1">
                            Your payment information is encrypted and secure
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label htmlFor="email" className="block text-sm mb-2 text-foreground">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="name" className="block text-sm mb-2 text-foreground">
                        Cardholder Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm mb-2 text-foreground">
                        Card Information
                      </label>
                      <div className="border border-gray-300 rounded-lg p-4 focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent">
                        <CardElement options={cardElementOptions} />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm mb-2 text-foreground">
                        Billing Address
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="123 Coffee Street"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-sm mb-2 text-foreground">
                        City
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="New York"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="postalCode" className="block text-sm mb-2 text-foreground">
                        Postal Code
                      </label>
                      <input
                        id="postalCode"
                        name="postalCode"
                        type="text"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="10001"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="country" className="block text-sm mb-2 text-foreground">
                        Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="United States"
                        required
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-sm text-red-800">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!stripe || processing}
                    className="w-full bg-primary text-primary-foreground py-4 rounded-lg hover:bg-primary/90 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {processing ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Lock className="w-5 h-5" />
                        Pay ${total.toFixed(2)}
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 sticky top-24"
              >
                <h2 className="text-xl mb-6 font-heading flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="text-foreground">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between">
                    <span className="font-heading text-lg">Total</span>
                    <span className="text-primary font-heading text-xl">${total.toFixed(2)}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
