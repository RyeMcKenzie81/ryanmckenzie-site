'use client';

import Image from "next/image";
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
        <div className="flex justify-between items-center mb-8 lg:mb-16">
          <div className="text-white text-xl font-bold">RM</div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6 text-white">
              <a href="/" className="hover:text-pink-300 transition-colors">Home</a>
              <a href="#features" className="hover:text-pink-300 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-pink-300 transition-colors">Resources</a>
              <a href="/blog" className="hover:text-pink-300 transition-colors">Blog</a>
            </nav>
            <div className="flex items-center space-x-2">
              <button className="bg-white/10 text-white px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
                Log In
              </button>
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all">
                Sign Up →
              </button>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center mb-4">
          <div className="text-sm text-gray-300 mb-4">
            No credit card required • 30-day free trial • Cancel anytime
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The ecommerce resources
              <br />
              built for <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">growth</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              Everything you need to build high-converting landing pages and scale your ecommerce brand available in a single resource library.
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
                  <span><strong>Swipe File Collection</strong> of 50+ proven landing pages for inspiration and modeling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Step-by-Step Video Series</strong> walking you through the complete process from start to finish</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
              {/* Dashboard Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-600">Ryan's Growth Resources</div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-gray-900">Hi there! 👋</h2>
                  <div className="text-sm text-gray-500">Last 12 months</div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">18,765</div>
                    <div className="text-sm text-blue-500">Active Subscribers</div>
                    <div className="text-xs text-green-600 mt-1">↑ +13.4%</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">47.82%</div>
                    <div className="text-sm text-green-500">Open Rate</div>
                    <div className="text-xs text-green-600 mt-1">↑ +8.3%</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-900">Recent Posts</div>
                    <div className="text-xs text-gray-500">View all</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <div className="text-sm text-gray-700">Landing Page Optimization</div>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <div className="text-sm text-gray-700">Email Marketing Strategies</div>
                    </div>
                  </div>
                </div>

                {/* Growth Chart Placeholder */}
                <div className="mt-6 h-32 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📈</div>
                    <div className="text-sm text-gray-600">Growth Analytics</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Free Resources
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Proven Results
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <div className="text-sm text-gray-400 mb-6 uppercase tracking-wider">Trusted by growth-focused brands</div>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-lg font-bold text-gray-400">Tru Earth</div>
            <div className="text-lg font-bold text-gray-400">Explore Magazine</div>
            <div className="text-lg font-bold text-gray-400">Infinite Age</div>
            <div className="text-lg font-bold text-gray-400">Nordstick</div>
          </div>
        </div>
      </div>
    </main>
  );
}