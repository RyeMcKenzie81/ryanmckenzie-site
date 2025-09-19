import Link from "next/link";
import { ReactNode } from "react";
import NewsletterSection from "@/components/NewsletterSection";

interface GuideLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  readTime?: string;
  tableOfContents?: ReactNode;
}

export default function GuideLayout({ 
  children, 
  title, 
  description,
  readTime,
  tableOfContents
}: GuideLayoutProps) {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating accent shapes */}
      <div className="fixed top-20 right-10 w-32 h-32 bg-gradient-to-br from-cyan-200 to-pink-200 rounded-full opacity-30 blur-xl animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-32 left-10 w-24 h-24 bg-gradient-to-br from-pink-200 to-cyan-200 rounded-full opacity-20 blur-lg animate-pulse pointer-events-none" style={{animationDelay: '1s'}}></div>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to Home</span>
            </Link>
            <span className="text-sm font-medium text-gray-400">
              RyanMcKenzie.com
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Sticky Table of Contents - Desktop Only */}
          {tableOfContents && (
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                {tableOfContents}
              </div>
            </aside>
          )}

          {/* Main Content */}
          <main className={tableOfContents ? "lg:col-span-9" : "lg:col-span-12"}>
            {/* Article Header */}
            <header className="px-6 pt-16 pb-4">
              <div className="fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight gradient-text">
                  {title}
                </h1>
                {description && (
                  <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                    {description}
                  </p>
                )}
                <div className="flex items-center gap-6 text-sm text-gray-500 pb-8 border-b border-gray-100">
                  {readTime && (
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {readTime} read
                    </span>
                  )}
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date().toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <article className="px-6 pb-24">
              <div className="prose-clean slide-up">
                {children}
              </div>
            </article>
          </main>
        </div>
      </div>

      {/* Footer CTA */}
      <footer className="border-t border-gray-100">
        <NewsletterSection />
        <div className="bg-gray-50 py-8">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              ← Back to all guides
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}