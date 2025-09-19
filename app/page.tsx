import Link from "next/link";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/63c87e7f5a01239e0e32066c_ryanheader4-2.jpg"
              alt="Ryan McKenzie"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center">
            <div className="fade-in">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8">
                <span className="block text-white">Ryan</span>
                <span className="block text-white">McKenzie</span>
              </h1>

              <p className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Co-founder of Tru Earth • $250M+ in Online Sales
              </p>

              <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Helping ecommerce brands escape the 7-figure hamster wheel and scale to 8-figures+ through proven marketing systems and customer acquisition strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
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