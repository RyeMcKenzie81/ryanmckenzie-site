'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function NewsletterLanding() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe-automation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for subscribing! Check your email for your free resources.');
        setEmail('');
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
        <div className="flex justify-center items-center mb-8 lg:mb-16">
          <div className="text-white text-xl font-bold">RM</div>
        </div>


        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ecommerce Listicle
              <br />
              Landing Page <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Blueprint</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              Get the exact blueprint I use to create high-converting listicle landing pages that drive sales for ecommerce brands.
            </p>

            {/* Email Signup Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto lg:mx-0 mb-8">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Get Free Resources'}
              </button>
            </form>

            {/* Status Message */}
            {message && (
              <div className={`text-center mb-8 p-3 rounded-lg ${
                status === 'success'
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                  : 'bg-red-500/20 text-red-300 border border-red-500/30'
              }`}>
                {message}
              </div>
            )}

            {/* Lead Magnets List */}
            <div className="text-left max-w-lg mx-auto lg:mx-0">
              <h3 className="text-lg font-semibold text-white mb-4">You'll get instant access to:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Complete Mindmap Workflow</strong> for building high-converting ecommerce listicle landing pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Swipe File Collection</strong> of 6+ proven listicle landing pages for inspiration and modeling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Step-by-Step Video Series</strong> walking you through the complete blueprint from start to finish</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Mindmap Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
              {/* Browser Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-600">Listicle Landing Page Blueprint</div>
              </div>

              {/* Mindmap Content */}
              <div className="p-6 bg-white">
                {/* Central Node */}
                <div className="text-center mb-8">
                  <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                    3. List Item Structure
                  </div>
                </div>

                {/* Mind map branches */}
                <div className="space-y-4 text-sm">
                  {/* Top Branch */}
                  <div className="bg-blue-100 p-3 rounded-lg border-l-4 border-blue-400">
                    <div className="font-semibold text-blue-800">This is where the real</div>
                    <div className="font-semibold text-blue-800">conversion power happens.</div>
                  </div>

                  {/* Middle Branches */}
                  <div className="bg-cyan-100 p-3 rounded-lg border-l-4 border-cyan-400">
                    <div className="font-semibold text-cyan-800">Each list item needs to follow a</div>
                    <div className="font-semibold text-cyan-800">consistent, persuasive structure.</div>
                  </div>

                  {/* Bottom Section */}
                  <div className="bg-yellow-100 p-3 rounded-lg border-l-4 border-yellow-400">
                    <div className="font-semibold text-yellow-800">Every list item needs a strong</div>
                    <div className="font-semibold text-yellow-800">subheadline that follows one of</div>
                    <div className="font-semibold text-yellow-800">these formats:</div>
                  </div>

                  {/* Formula Examples */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-pink-50 p-2 rounded text-xs">
                      <div className="font-semibold text-pink-700">Benefit-focused:</div>
                    </div>
                    <div className="bg-blue-50 p-2 rounded text-xs">
                      <div className="font-semibold text-blue-700">Problem-solution:</div>
                    </div>
                    <div className="bg-pink-50 p-2 rounded text-xs">
                      <div className="font-semibold text-pink-700">Feature-benefit:</div>
                    </div>
                    <div className="bg-blue-50 p-2 rounded text-xs">
                      <div className="font-semibold text-blue-700">Curiosity-driven:</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Blueprint Preview
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Step-by-Step
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}