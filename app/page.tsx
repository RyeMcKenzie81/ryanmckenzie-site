import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 animate-pulse animation-delay-400"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center">
            <div className="fade-in">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8">
                <span className="block text-gray-900">Ryan</span>
                <span className="block gradient-text">McKenzie</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Building guides to help you automate, optimize, and grow your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/guides/automating-workflows-ecommerce"
                  className="button-primary inline-block"
                >
                  Explore First Guide
                </Link>
                <button className="button-secondary">
                  Coming Soon
                </button>
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

        {/* Featured Guide Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Guide</h2>
              <p className="text-xl text-gray-600 mb-12">Start your automation journey today</p>

              <Link href="/guides/automating-workflows-ecommerce" className="group block">
                <div className="section-card hover-lift">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="section-number">01</span>
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">n8n Automation</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        Beginner&apos;s Guide to Automating Workflows
                      </h3>
                      
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Learn how to set up powerful automations that save hours every week. 
                        Perfect for ecommerce businesses looking to scale efficiently.
                      </p>

                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          20 min read
                        </span>
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Beginner Friendly
                        </span>
                      </div>
                    </div>

                    <div className="ml-8 hidden md:block">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">More Guides Coming Soon</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Email Marketing Mastery", topic: "Klaviyo & Segmentation" },
                { title: "Inventory Management", topic: "Stock Optimization" },
                { title: "Customer Service Automation", topic: "Support at Scale" },
              ].map((guide, index) => (
                <div key={index} className={`section-card opacity-60 fade-in animation-delay-${(index + 1) * 200}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="section-number">{String(index + 2).padStart(2, '0')}</span>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">{guide.topic}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-gray-500">Coming soon...</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get notified when new guides and resources are published.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <button type="submit" className="button-primary">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}