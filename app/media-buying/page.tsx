'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function MediaBuyingContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brandName: '',
    websiteUrl: '',
    monthlySpend: '',
    storeRevenue: '',
    hearAbout: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields are filled
    const requiredFields = Object.entries(formData);
    const emptyFields = requiredFields.filter(([_, value]) => !value.trim());

    if (emptyFields.length > 0) {
      setStatus('error');
      setMessage('Please fill in all fields');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    // Basic URL validation (flexible - accepts with or without protocol)
    const urlRegex = /^(https?:\/\/)?.+\..+/;
    if (!urlRegex.test(formData.websiteUrl)) {
      setStatus('error');
      setMessage('Please enter a valid website URL (e.g., yourbrand.com)');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/media-buying-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you! Your media buying inquiry has been sent. I\'ll be in touch within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          brandName: '',
          websiteUrl: '',
          monthlySpend: '',
          storeRevenue: '',
          hearAbout: ''
        });
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-8 lg:py-16">

        {/* Header */}
        <div className="flex justify-center items-center mb-4 lg:mb-8">
          <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg border-2 border-white/20">
            <Image
              src="/hero-backup.jpg"
              alt="Ryan McKenzie"
              width={144}
              height={144}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">

          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Meta Media
              <br />
              Buying <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              Ready to scale your CPG or supplement brand with proven Facebook ad strategies? Let's discuss how I can help you optimize your media buying.
            </p>

            {/* Qualification Criteria */}
            <div className="text-left max-w-lg mx-auto lg:mx-0 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Ideal for brands that:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Are spending <strong>$100K+ per month</strong> on Facebook advertising</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Operate in the <strong>CPG or supplement space</strong></span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Want to <strong>optimize and scale</strong> their current campaigns</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Form Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">Let's Discuss Your Media Buying Needs</h2>
                <p className="text-sm text-gray-600">All fields are required</p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="brandName" className="block text-sm font-medium text-gray-700 mb-1">Brand Name *</label>
                    <input
                      type="text"
                      id="brandName"
                      name="brandName"
                      value={formData.brandName}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
                      placeholder="Your brand name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-1">Website URL *</label>
                  <input
                    type="url"
                    id="websiteUrl"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
                    placeholder="yourbrand.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="monthlySpend" className="block text-sm font-medium text-gray-700 mb-1">Current Monthly Meta Spend *</label>
                    <select
                      id="monthlySpend"
                      name="monthlySpend"
                      value={formData.monthlySpend}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
                    >
                      <option value="">Select range...</option>
                      <option value="$100K-$250K">$100K - $250K</option>
                      <option value="$250K-$500K">$250K - $500K</option>
                      <option value="$500K-$1M">$500K - $1M</option>
                      <option value="$1M+">$1M+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="storeRevenue" className="block text-sm font-medium text-gray-700 mb-1">Monthly Store Revenue *</label>
                    <select
                      id="storeRevenue"
                      name="storeRevenue"
                      value={formData.storeRevenue}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
                    >
                      <option value="">Select range...</option>
                      <option value="$500K-$1M">$500K - $1M</option>
                      <option value="$1M-$2M">$1M - $2M</option>
                      <option value="$2M-$5M">$2M - $5M</option>
                      <option value="$5M+">$5M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us? *</label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
                  >
                    <option value="">Please select...</option>
                    <option value="Google Search">Google Search</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Twitter/X">Twitter/X</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Referral">Referral from someone</option>
                    <option value="Industry Event">Industry Event</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Status Message */}
                {message && (
                  <div className={`p-3 rounded-lg text-center ${
                    status === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Media Buying Inquiry'}
                </button>

                {/* Spam Prevention Notice */}
                <p className="text-xs text-gray-500 text-center">
                  This form is protected against spam. Only serious inquiries from qualified brands will be considered.
                </p>
              </form>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Premium Service
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              24hr Response
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}