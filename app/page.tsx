import Link from "next/link";
import Image from "next/image";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden" style={{
          backgroundImage: 'url("https://raw.githubusercontent.com/RyeMcKenzie81/ryanmckenzie-site/main/hero-backup.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Text positioned - centered on mobile, left on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-16 md:translate-x-0 top-1/2 z-10">
            <div className="fade-in text-center md:text-left w-80 max-w-[90vw] md:w-auto md:max-w-2xl lg:max-w-3xl">
              {/* Text background for better contrast */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4" style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                }}>
                  <span className="block text-white">Ryan</span>
                  <span className="block bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent" style={{
                    textShadow: 'none'
                  }}>McKenzie</span>
                </h1>

                <p className="text-lg md:text-xl font-semibold text-white mb-3" style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                }}>
                  Co-founder of <span className="text-cyan-300">Tru Earth</span> • <span className="text-pink-300">$250M+</span> in Online Sales
                </p>

                <p className="text-sm md:text-base text-gray-100 mb-6 leading-relaxed" style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.6)'
                }}>
                  Helping ecommerce brands escape the 7-figure hamster wheel and scale to 8-figures+ through proven marketing systems and customer acquisition strategies.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#about"
                    className="button-primary inline-block"
                  >
                    Learn About My Approach
                  </Link>
                  <Link
                    href="#services"
                    className="button-secondary inline-block"
                  >
                    Work With Me
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Profile & Resources Section - Stan Store Style */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-center min-h-[600px]">

              {/* Left Column - Profile & Social */}
              <div className="lg:col-span-2 flex items-center justify-center">
                <div className="text-center w-full">
                  {/* Profile Image */}
                  <div className="mb-8">
                    <img
                      src="https://raw.githubusercontent.com/RyeMcKenzie81/ryanmckenzie-site/main/hero-backup.jpg"
                      alt="Ryan McKenzie"
                      className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                    />
                  </div>

                  {/* Bio */}
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ryan McKenzie</h2>
                    <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                      Co-founder of Tru Earth (bootstrapped to 8-figures) • $250M+ in Online Sales •
                      Helping ecommerce brands scale from 7 to 8+ figures
                    </p>
                  </div>

                  {/* Social Links - Horizontal */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Connect</h3>
                    <div className="flex space-x-4 justify-center">
                      <a href="https://www.linkedin.com/in/ryemckenzie/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 text-gray-700 hover:text-white hover:bg-cyan-600 transition-all duration-300 rounded-lg border border-gray-200 hover:border-cyan-600 hover:shadow-lg">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="https://www.x.com/ryemckenzie" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 text-gray-700 hover:text-white hover:bg-pink-600 transition-all duration-300 rounded-lg border border-gray-200 hover:border-pink-600 hover:shadow-lg">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href="https://www.youtube.com/channel/UCr_WZIhS3_mpVbc03Tq-Esw" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 text-gray-700 hover:text-white hover:bg-red-600 transition-all duration-300 rounded-lg border border-gray-200 hover:border-red-600 hover:shadow-lg">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Cards */}
              <div className="lg:col-span-3">
                <div className="space-y-8">

                  {/* Free Resources */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Free Resources</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">Scaling Playbook</h4>
                            <p className="text-sm text-gray-600 mt-1">The exact framework I use to scale brands from 7 to 8+ figures</p>
                            <div className="mt-3">
                              <span className="text-sm font-medium text-green-600">Free</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v1M7 4V3a1 1 0 011-1m0 0h8m-8 0H6a1 1 0 00-1 1v3m0 0v12a1 1 0 001 1h12a1 1 0 001-1V8m0 0V5a1 1 0 00-1-1m0 0H6" />
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">Growth Calculator</h4>
                            <p className="text-sm text-gray-600 mt-1">Calculate your revenue potential and identify growth bottlenecks</p>
                            <div className="mt-3">
                              <span className="text-sm font-medium text-green-600">Free</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Paid Offers */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Work With Me</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-cyan-50 to-pink-50 border border-cyan-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">1:1 Coaching</h4>
                            <p className="text-sm text-gray-600 mt-1">Direct access to work on your specific growth challenges</p>
                            <div className="mt-3">
                              <span className="text-sm font-medium text-cyan-600">Starting at $500/session</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-pink-50 to-cyan-50 border border-pink-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">Strategic Advisory</h4>
                            <p className="text-sm text-gray-600 mt-1">Ongoing strategic guidance for established brands</p>
                            <div className="mt-3">
                              <span className="text-sm font-medium text-pink-600">Custom Pricing</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Canadian 3PL Service */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">3PL Services</h3>
                    <div className="max-w-md mx-auto">
                      <a href="https://www.breakthrough.studio/landing-page?utm_source=ryanmckenzie&utm_medium=RyanHomepage&utm_campaign=RyanMckenzie&utm_term=ryanssite" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Let Us Ship Your Ecommerce Products in Canada</h4>
                            <p className="text-sm text-gray-600 mt-1">We can help you navigate the regulations and challenges to get your brand setup in Canada, and can be your 3PL partner.</p>
                            <div className="mt-3">
                              <span className="text-sm font-medium text-green-600">Learn More →</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="slide-up text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Breaking Through the 7-Figure Ceiling</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Most ecommerce brands hit a wall around $1-5M in revenue. They're running harder but not growing faster. I help them break through that ceiling.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">$250M+</div>
                <p className="text-gray-600">in Online Sales Generated</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">7→8+</div>
                <p className="text-gray-600">Figure Scale Specialist</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">4+</div>
                <p className="text-gray-600">Brands Built & Scaled</p>
              </div>
            </div>

            <div className="section-card">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">My Approach</h3>
                <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  After co-founding Tru Earth and scaling it from zero to 8-figures, I've learned what separates companies that plateau from those that break through to the next level. It's not about working harder—it's about building the right systems, optimizing your customer acquisition, and creating sustainable growth engines.
                </p>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What I Focus On:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Customer acquisition strategies that scale</li>
                      <li>• Marketing systems & automation</li>
                      <li>• Breaking through growth plateaus</li>
                      <li>• Building predictable revenue engines</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Who I Work With:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Ecommerce brands doing $1M-$10M</li>
                      <li>• Founders ready to scale systems</li>
                      <li>• Teams stuck in the growth plateau</li>
                      <li>• Brands serious about 8-figure growth</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-lg font-medium text-gray-500 mb-8 uppercase tracking-wider">Brands I've Built & Advised</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-2xl font-bold text-gray-400">Tru Earth</div>
              <div className="text-2xl font-bold text-gray-400">Explore Magazine</div>
              <div className="text-2xl font-bold text-gray-400">Infinite Age</div>
              <div className="text-2xl font-bold text-gray-400">Nordstick</div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How I Can Help You Scale</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to break through your revenue ceiling? Here's how we can work together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="section-card hover-lift">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1:1 Coaching</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Direct access to work with me on your specific growth challenges. We'll identify your bottlenecks and build a custom roadmap to scale.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• One-time/Weekly/Bi-Weekly/Monthly calls</li>
                  <li>• Access to my playbooks</li>
                  <li>• Access to my contacts</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium text-blue-900 mb-2">Who this is for:</p>
                  <p className="text-blue-800">Brands that have cracked the 7-figures in revenue mark, that want to break through to the next level.</p>
                </div>
                <button className="button-primary w-full">Learn More</button>
              </div>

              <div className="section-card hover-lift">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Advisory</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  For established brands ready for deep, ongoing strategic guidance. I'll work closely with your team to implement systems that drive sustainable growth.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Quarterly strategic planning</li>
                  <li>• Systems & process optimization</li>
                  <li>• Available for board positions</li>
                </ul>
                <button className="button-primary w-full">Apply Now</button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Free Resources</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Get actionable insights on scaling your ecommerce brand through my guides, videos, and newsletter.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/guides/automating-workflows-ecommerce" className="group block">
                <div className="section-card hover-lift text-left">
                  <div className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wider">Featured Guide</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Automating Workflows for Ecommerce
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to set up automation systems that save hours every week and help you scale efficiently.
                  </p>
                  <span className="text-blue-600 font-medium">Read Guide →</span>
                </div>
              </Link>

              <div className="section-card text-left">
                <div className="text-sm font-medium text-purple-600 mb-2 uppercase tracking-wider">YouTube</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Scaling Strategies
                </h3>
                <p className="text-gray-600 mb-4">
                  Weekly videos on marketing, customer acquisition, and scaling strategies that actually work.
                </p>
                <span className="text-purple-600 font-medium">Watch Videos →</span>
              </div>

              <div className="section-card text-left">
                <div className="text-sm font-medium text-green-600 mb-2 uppercase tracking-wider">Newsletter</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Weekly Insights
                </h3>
                <p className="text-gray-600 mb-4">
                  Get my best strategies, case studies, and insights delivered to your inbox every week.
                </p>
                <span className="text-green-600 font-medium">Subscribe Below →</span>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsletterSection />
      </div>
    </main>
  );
}