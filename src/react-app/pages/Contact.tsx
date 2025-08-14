import { useState } from 'react';
import Header from '@/react-app/components/Header';

export default function Contact() {
  const [formData, setFormData] = useState({
    ownerName: '',
    catName: '',
    breed: '',
    catAge: '',
    gender: '',
    indoorOutdoor: '',
    apartment: '',
    homeSquareFootage: '',
    litterBoxRoom: '',
    vetsOrder: '',
    fullTime: '',
    catReaction: '',
    improvedLook: '',
    wouldBuyAgain: '',
    whyBuy: '',
    priceWillingToPay: '',
    designPreference: '',
    customPicture: '',
    customPrice: '',
    suggestedImprovements: '',
    otherComments: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
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
      console.log('Contact form submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Contact form submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#4f559f' }}>Contact Us!</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Please give us a call or send a message if you have any questions about our Private Kitty! 
                We are looking forward to connecting with you!
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold mb-2" style={{ color: '#3d4280' }}>Contact Information</h3>
                <p style={{ color: '#4f559f' }}>
                  <strong>Stephen Slater</strong><br />
                  Phone: 612-805-9165<br />
                  Email: Info@PrivateKitty.Com
                </p>
              </div>

              
            </div>
          </div>

          {/* Questionnaire Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#4f559f' }}>Private Kitty Questionnaire</h2>
              <p className="text-gray-600 mb-8">
                Help us improve Private Kitty by sharing your feedback! Your input is valuable to us.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your feedback has been submitted successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Information */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Basic Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Owner's Name</label>
                        <input
                          type="text"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all"
                          style={{ '--tw-ring-color': '#4f559f' } as React.CSSProperties}
                          onFocus={(e) => e.currentTarget.style.outline = '2px solid #4f559f'}
                          onBlur={(e) => e.currentTarget.style.outline = 'none'}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Cat's Name</label>
                        <input
                          type="text"
                          name="catName"
                          value={formData.catName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your cat's name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Cat Details */}
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">About Your Cat</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Breed</label>
                        <input
                          type="text"
                          name="breed"
                          value={formData.breed}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Cat breed"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Age of Cat</label>
                        <input
                          type="text"
                          name="catAge"
                          value={formData.catAge}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Age in years"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Gender (if spayed/neutered)</label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select...</option>
                          <option value="Male (neutered)">Male (neutered)</option>
                          <option value="Male (not neutered)">Male (not neutered)</option>
                          <option value="Female (spayed)">Female (spayed)</option>
                          <option value="Female (not spayed)">Female (not spayed)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Indoor/Outdoor</label>
                        <select
                          name="indoorOutdoor"
                          value={formData.indoorOutdoor}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select...</option>
                          <option value="Indoor only">Indoor only</option>
                          <option value="Outdoor only">Outdoor only</option>
                          <option value="Both indoor and outdoor">Both indoor and outdoor</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Home Environment */}
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Home Environment</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Type of Home</label>
                        <select
                          name="apartment"
                          value={formData.apartment}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select...</option>
                          <option value="Apartment">Apartment</option>
                          <option value="House">House</option>
                          <option value="Condo">Condo</option>
                          <option value="Townhouse">Townhouse</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Square Footage of Home</label>
                        <input
                          type="text"
                          name="homeSquareFootage"
                          value={formData.homeSquareFootage}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="e.g., 1200 sq ft"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">What room is the litter box currently in?</label>
                      <select
                        name="litterBoxRoom"
                        value={formData.litterBoxRoom}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select...</option>
                        <option value="Bathroom">Bathroom</option>
                        <option value="Laundry room">Laundry room</option>
                        <option value="Utility room">Utility room</option>
                        <option value="Basement">Basement</option>
                        <option value="Garage">Garage</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Product Experience */}
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Private Kitty Experience</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">How did your cat react to Private Kitty?</label>
                        <select
                          name="catReaction"
                          value={formData.catReaction}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select...</option>
                          <option value="Didn't care, used it normally">Didn't care, used it normally</option>
                          <option value="Was curious but adapted quickly">Was curious but adapted quickly</option>
                          <option value="Was hesitant at first">Was hesitant at first</option>
                          <option value="Avoided it completely">Avoided it completely</option>
                          <option value="Used it immediately">Used it immediately</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Did it improve the look and feel of the litter box area for you?</label>
                        <select
                          name="improvedLook"
                          value={formData.improvedLook}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select...</option>
                          <option value="Yes, significantly">Yes, significantly</option>
                          <option value="Yes, somewhat">Yes, somewhat</option>
                          <option value="No difference">No difference</option>
                          <option value="Made it worse">Made it worse</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Would you buy this product in the future?</label>
                        <select
                          name="wouldBuyAgain"
                          value={formData.wouldBuyAgain}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select...</option>
                          <option value="Definitely yes">Definitely yes</option>
                          <option value="Probably yes">Probably yes</option>
                          <option value="Maybe">Maybe</option>
                          <option value="Probably not">Probably not</option>
                          <option value="Definitely not">Definitely not</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">If yes, why would you buy it again?</label>
                        <textarea
                          name="whyBuy"
                          value={formData.whyBuy}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                          placeholder="Share your reasons..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Preferences */}
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Pricing & Design Preferences</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">What price would you pay for Private Kitty?</label>
                        <select
                          name="priceWillingToPay"
                          value={formData.priceWillingToPay}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select a price...</option>
                          <option value="$2">$2</option>
                          <option value="$4">$4</option>
                          <option value="$5">$5</option>
                          <option value="$8">$8</option>
                          <option value="$15">$15</option>
                          <option value="More than $15">More than $15</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">What design/images do you prefer?</label>
                        <select
                          name="designPreference"
                          value={formData.designPreference}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select a style...</option>
                          <option value="Modern">Modern</option>
                          <option value="Floral">Floral</option>
                          <option value="Avant-garde">Avant-garde</option>
                          <option value="Seasonal">Seasonal</option>
                          <option value="Abstract">Abstract</option>
                          <option value="Solid colors">Solid colors</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Would you like a custom Private Kitty with your cat's picture and name?</label>
                        <select
                          name="customPicture"
                          value={formData.customPicture}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select...</option>
                          <option value="Yes, definitely">Yes, definitely</option>
                          <option value="Yes, maybe">Yes, maybe</option>
                          <option value="No, not interested">No, not interested</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">What's the highest price you'd pay for a customized product?</label>
                        <select
                          name="customPrice"
                          value={formData.customPrice}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select a price...</option>
                          <option value="$10">$10</option>
                          <option value="$15">$15</option>
                          <option value="$20">$20</option>
                          <option value="$25">$25</option>
                          <option value="$30">$30</option>
                          <option value="More than $30">More than $30</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Feedback */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Feedback</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">What improvements would you suggest for Private Kitty?</label>
                        <textarea
                          name="suggestedImprovements"
                          value={formData.suggestedImprovements}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                          placeholder="Share your suggestions for improvement..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Any other comments?</label>
                        <textarea
                          name="otherComments"
                          value={formData.otherComments}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                          placeholder="Any additional thoughts or feedback..."
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-200 text-white ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'transform hover:scale-[1.02] shadow-lg hover:shadow-xl'
                    }`}
                    style={!isSubmitting ? { background: 'linear-gradient(to right, #4f559f, #3d4280)' } : {}}
                    onMouseEnter={!isSubmitting ? (e) => e.currentTarget.style.background = 'linear-gradient(to right, #3d4280, #2f3366)' : undefined}
                    onMouseLeave={!isSubmitting ? (e) => e.currentTarget.style.background = 'linear-gradient(to right, #4f559f, #3d4280)' : undefined}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </div>
                    ) : (
                      'Submit Questionnaire'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
