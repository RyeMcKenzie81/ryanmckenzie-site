import Link from "next/link";
import { ReactNode } from "react";
import NewsletterSection from "@/components/NewsletterSection";

interface AuthorInfo {
  name: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

interface GuideLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  readTime?: string;
  tableOfContents?: ReactNode;
  heroImage?: ReactNode;
  author?: AuthorInfo;
}

export default function GuideLayout({
  children,
  title,
  description,
  readTime,
  tableOfContents,
  heroImage,
  author
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
            {/* Hero Image */}
            {heroImage && (
              <div className="px-6 pt-12 pb-4">
                {heroImage}
              </div>
            )}

            {/* Article Header */}
            <header className={`px-6 ${heroImage ? 'pt-8' : 'pt-16'} pb-4`}>
              <div className="fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight gradient-text">
                  {title}
                </h1>
                {description && (
                  <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                    {description}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500 pb-8 border-b border-gray-100">
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
                  {author && (
                    <span className="flex items-center gap-3">
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-700 font-medium">{author.name}</span>
                      <span className="flex items-center gap-2">
                        {author.twitter && (
                          <a href={author.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                          </a>
                        )}
                        {author.linkedin && (
                          <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        )}
                        {author.youtube && (
                          <a href={author.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                          </a>
                        )}
                      </span>
                    </span>
                  )}
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