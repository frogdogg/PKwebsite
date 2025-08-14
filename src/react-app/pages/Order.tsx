import { useState } from 'react';
import Header from '@/react-app/components/Header';

export default function Order() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    paymentMethod: 'credit',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    cardholderName: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      setFormData(prev => ({
        ...prev,
        [name]: formatted
      }));
      return;
    }
    
    // Only allow numbers for CVV
    if (name === 'cvv' && !/^\d*$/.test(value)) {
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Order submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Order submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#4f559f' }}>Product Order Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-sm text-gray-600 mb-4">Full Name</div>
              
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                  style={{ '--focus-color': '#4f559f' } as React.CSSProperties}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#4f559f'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <div className="text-sm text-gray-600 mb-2">Email</div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <div className="text-sm text-gray-600 mb-2">Phone Number</div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+000 384 4725"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <div className="text-sm text-gray-600 mb-2">Address</div>
                <input
                  type="text"
                  name="address1"
                  placeholder="Address line 1"
                  value={formData.address1}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 mb-2"
                />
                <input
                  type="text"
                  name="address2"
                  placeholder="Address line 2"
                  value={formData.address2}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Postal / Zip Code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="border-t pt-6 mt-6">
                <div className="text-sm text-gray-600 mb-4">Payment Method</div>
                
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="credit"
                        checked={formData.paymentMethod === 'credit'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Credit Card
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      PayPal
                    </label>
                  </div>

                  {formData.paymentMethod === 'credit' && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="text-sm text-gray-600 mb-2">Cardholder Name</div>
                        <input
                          type="text"
                          name="cardholderName"
                          placeholder="Name on card"
                          value={formData.cardholderName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-600 mb-2">Card Number</div>
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          maxLength={19}
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm text-gray-600 mb-2">Month</div>
                          <select
                            name="expiryMonth"
                            value={formData.expiryMonth}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                          >
                            <option value="">MM</option>
                            {Array.from({ length: 12 }, (_, i) => (
                              <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                                {String(i + 1).padStart(2, '0')}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-2">Year</div>
                          <select
                            name="expiryYear"
                            value={formData.expiryYear}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                          >
                            <option value="">YYYY</option>
                            {Array.from({ length: 10 }, (_, i) => (
                              <option key={i} value={String(new Date().getFullYear() + i)}>
                                {new Date().getFullYear() + i}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-2">CVV</div>
                          <input
                            type="text"
                            name="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            maxLength={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === 'paypal' && (
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => window.open(`https://www.paypal.com/paypalme/stephenats4design/8.24`, '_blank')}
                          className="text-white px-8 py-3 rounded-lg transition-colors font-medium"
                          style={{ backgroundColor: '#4f559f' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3d4280'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4f559f'}
                        >
                          Pay with PayPal - $8.24
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 text-center mt-2">
                        You'll be redirected to PayPal to complete your payment
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {formData.paymentMethod === 'credit' && (
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-2 px-4 rounded transition-colors mt-6 text-white ${
                    isSubmitted 
                      ? 'bg-green-600' 
                      : isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : ''
                  }`}
                  style={!isSubmitted && !isSubmitting ? { backgroundColor: '#4f559f' } : {}}
                  onMouseEnter={!isSubmitted && !isSubmitting ? (e) => e.currentTarget.style.backgroundColor = '#3d4280' : undefined}
                  onMouseLeave={!isSubmitted && !isSubmitting ? (e) => e.currentTarget.style.backgroundColor = '#4f559f' : undefined}
                >
                  {isSubmitted ? 'Order Placed Successfully!' : isSubmitting ? 'Processing Payment...' : 'Place Order'}
                </button>
              )}

              {formData.paymentMethod === 'paypal' && (
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800 text-center">
                    <strong>PayPal Payment Required:</strong> Please complete your PayPal payment above, then your order will be processed automatically.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#4f559f' }}>Order Summary</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://mocha-cdn.com/0198aa76-7f37-751b-b534-a1a159e09a3e/Screenshot_2025-08-14_155530-removeb.png"
                  alt="PrivateKitty Logo"
                  className="w-12 h-12 object-contain mr-4"
                />
                <div>
                  <div className="font-medium">Private Kitty | $4.99 each</div>
                  <div className="text-sm text-gray-600">Qty: 1 Total: $4.99</div>
                </div>
              </div>

              <div className="text-sm text-gray-600 mb-4">
                Credit card or PayPal
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>$4.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping and Handling:</span>
                  <span>$2.50</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes:</span>
                  <span>$0.75</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>$8.24</span>
                </div>
              </div>

              <div className="mt-6 p-3 bg-blue-50 rounded">
                <div className="text-sm font-medium" style={{ color: '#3d4280' }}>Payment Due:</div>
                <div className="text-lg font-bold" style={{ color: '#3d4280' }}>$8.24</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
