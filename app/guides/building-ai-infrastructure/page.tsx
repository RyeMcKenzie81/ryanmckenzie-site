import GuideLayout from "@/components/GuideLayout";
import ScrollAnimation from "@/components/ScrollAnimation";
import TableOfContents from "@/components/TableOfContents";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Building AI Infrastructure | Ryan McKenzie",
  description: "Learn the patterns that scale: 3-layer architecture, Pydantic.ai agents, thin tools, and services. Part 2 of the Claude Code guide.",
  openGraph: {
    title: "Building AI Infrastructure with Claude Code",
    description: "From scripts to systems. Learn 3-layer architecture, Pydantic.ai agents, services, and thin tools.",
    url: "https://ryanmckenzie.com/guides/building-ai-infrastructure",
    siteName: "Ryan McKenzie",
    images: [
      {
        url: "https://ryanmckenzie.com/images/guides/3-layer-architecture.jpg",
        width: 1200,
        height: 800,
        alt: "3-Layer AI Application Architecture",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building AI Infrastructure with Claude Code",
    description: "From scripts to systems. Learn the patterns that scale.",
    images: ["https://ryanmckenzie.com/images/guides/3-layer-architecture.jpg"],
    creator: "@ryemckenzie",
  },
  alternates: {
    canonical: "https://ryanmckenzie.com/guides/building-ai-infrastructure",
  },
};

const sections = [
  { id: "scripts-to-systems", title: "From Scripts to Systems", number: "1" },
  { id: "working-efficiently", title: "Working Efficiently", number: "2" },
  { id: "async-basics", title: "Async Basics", number: "3" },
  { id: "pydantic-models", title: "Pydantic Models", number: "4" },
  { id: "three-layer-architecture", title: "3-Layer Architecture", number: "5" },
  { id: "services", title: "Services", number: "6" },
  { id: "thin-tools", title: "Thin Tools", number: "7" },
  { id: "pydantic-ai", title: "Pydantic.ai Essentials", number: "8" },
  { id: "prompt-engineering", title: "Prompt Engineering", number: "9" },
  { id: "deterministic-vs-agent", title: "Deterministic vs Agent", number: "10" },
  { id: "claude-md", title: "CLAUDE.md", number: "11" },
  { id: "security", title: "Security Essentials", number: "12" },
  { id: "troubleshooting", title: "Troubleshooting", number: "13" },
  { id: "hands-on-project", title: "Hands-On Project", number: "14" },
  { id: "whats-next", title: "What's Next", number: "15" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Building AI Infrastructure",
  description:
    "Learn the patterns that scale: 3-layer architecture, Pydantic.ai agents, thin tools, and services. Part 2 of the Claude Code guide.",
  image: "https://ryanmckenzie.com/images/guides/3-layer-architecture.jpg",
  author: {
    "@type": "Person",
    name: "Ryan McKenzie",
    url: "https://ryanmckenzie.com",
    sameAs: [
      "https://x.com/ryemckenzie",
      "https://www.linkedin.com/in/ryemckenzie/",
      "https://www.youtube.com/channel/UCr_WZIhS3_mpVbc03Tq-Esw",
    ],
  },
  publisher: {
    "@type": "Person",
    name: "Ryan McKenzie",
    url: "https://ryanmckenzie.com",
  },
  datePublished: "2025-02-05",
  dateModified: "2025-02-05",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://ryanmckenzie.com/guides/building-ai-infrastructure",
  },
};

export default function BuildingAIInfrastructureGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuideLayout
      title="Building AI Infrastructure"
      description="Part 2: From one-off scripts to reusable systems. Learn the patterns that scale."
      readTime="35 min"
      tableOfContents={<TableOfContents sections={sections} />}
      author={{
        name: "Ryan McKenzie",
        twitter: "https://x.com/ryemckenzie",
        linkedin: "https://www.linkedin.com/in/ryemckenzie/",
        youtube: "https://www.youtube.com/channel/UCr_WZIhS3_mpVbc03Tq-Esw"
      }}
    >
      {/* Prerequisite notice */}
      <ScrollAnimation animation="fade-in">
        <div className="info-box mb-8">
          <p className="font-semibold mb-2">Prerequisites</p>
          <p className="mb-2">This guide assumes you&apos;ve completed <Link href="/guides/claude-code-getting-started" className="text-cyan-600 hover:underline">Part 1</Link> and have:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>A working development environment (Python, VS Code, Claude Code)</li>
            <li>Accounts on GitHub, Supabase, Railway, and Logfire</li>
            <li>Built and deployed the simple chatbot from Part 1</li>
          </ul>
        </div>
      </ScrollAnimation>

      {/* Hero intro box */}
      <ScrollAnimation animation="fade-in">
        <div className="bg-gradient-to-br from-cyan-50 to-pink-50 border-2 border-transparent bg-clip-padding rounded-xl pt-1 px-4 pb-4 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 opacity-20 rounded-xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
              What You&apos;ll Learn
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-cyan-700">Concepts:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">&#8226;</span>
                    <span>The 3-layer architecture for AI applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">&#8226;</span>
                    <span>Services, thin tools, and Pydantic.ai agents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">&#8226;</span>
                    <span>When to use AI vs. deterministic code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">&#8226;</span>
                    <span>Working efficiently with Claude Code</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-pink-700">What You&apos;ll Build:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">&#8226;</span>
                    <span>A Contact Manager with AI capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">&#8226;</span>
                    <span>Service layer for database operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">&#8226;</span>
                    <span>Pydantic.ai agent with tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">&#8226;</span>
                    <span>Streamlit UI deployed to Railway</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Section 1: From Scripts to Systems */}
      <ScrollAnimation animation="fade-in">
        <section id="scripts-to-systems" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">1</span>
            <span>From Scripts to Systems</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>One-off scripts solve today&apos;s problem but create tomorrow&apos;s headache. Infrastructure means building reusable pieces that work together. This guide teaches you to build systems, not scripts.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">The Problem with Scripts</h3>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            When you first start coding, you write scripts. A script is a file that does one thing:
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm">
            <code>{`# get_sales.py - A script
import supabase

client = supabase.create_client(url, key)
result = client.table("sales").select("*").execute()
print(f"Total sales: {len(result.data)}")`}</code>
          </pre>

          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            This works! But then you need the same data in another script. So you copy-paste. Now you have two files with the same database connection code. Then you change your Supabase credentials and have to update both files. Then three files. Then ten.
          </p>

          <p className="mb-8 text-lg md:text-xl leading-relaxed text-gray-700">
            This is how projects become unmaintainable.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">What &quot;Infrastructure&quot; Means</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Infrastructure is code organized so that:
          </p>
          <ul className="list-disc list-inside mb-8 space-y-2 text-lg md:text-xl text-gray-700">
            <li><strong>Each piece has one job</strong> (database access, data processing, user interface)</li>
            <li><strong>Pieces can be reused</strong> (the database code works everywhere)</li>
            <li><strong>Changes happen in one place</strong> (update credentials once, not ten times)</li>
          </ul>

          <p className="mb-8 text-lg md:text-xl leading-relaxed text-gray-700">
            Think of it like Excel. You don&apos;t copy your raw data into every sheet that needs it. You keep the data in one place and reference it. Infrastructure is the same idea applied to code.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">The Journey</h3>
          <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg overflow-x-auto mb-6 text-sm">
            <code>{`Script          →  Tool           →  Service         →  System
"It works"         "It's reusable"   "It's organized"   "It scales"`}</code>
          </pre>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Stage</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">What it looks like</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Script</td><td className="px-4 py-3 text-gray-700">One file, does one thing, copy-paste to reuse</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Tool</td><td className="px-4 py-3 text-gray-700">A function you can call from multiple places</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Service</td><td className="px-4 py-3 text-gray-700">A class that groups related functions with shared state</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">System</td><td className="px-4 py-3 text-gray-700">Multiple services working together through clear interfaces</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 2: Working Efficiently with Claude Code */}
      <ScrollAnimation animation="slide-left">
        <section id="working-efficiently" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">2</span>
            <span>Working Efficiently with Claude Code</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>How you communicate with Claude Code matters. Be specific, reference existing patterns, break big tasks into small ones, and know when to use which model. These habits save hours.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Communication Efficiency</h3>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            Claude Code is powerful, but it works best when you&apos;re clear about what you want.
          </p>

          <h4 className="text-xl font-bold mb-4 text-gray-900">Be Specific Upfront</h4>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Instead of...</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Say...</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 text-gray-700">&quot;Add a button&quot;</td><td className="px-4 py-3 text-gray-700">&quot;Add a blue &apos;Save&apos; button below the form that calls save_contact()&quot;</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">&quot;Fix the bug&quot;</td><td className="px-4 py-3 text-gray-700">&quot;The error is on line 42: &apos;NoneType has no attribute get&apos;. The data from Supabase might be empty.&quot;</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">&quot;Make it better&quot;</td><td className="px-4 py-3 text-gray-700">&quot;Refactor this function to handle the case where the user list is empty&quot;</td></tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-xl font-bold mb-4 text-gray-900">Tell It What NOT to Do</h4>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Sometimes what you <em>don&apos;t</em> want is as important as what you do:
          </p>
          <blockquote className="border-l-4 border-cyan-500 pl-4 mb-4 text-gray-700 italic">
            &quot;Fix the data processing logic, but don&apos;t change the UI code or the database schema.&quot;
          </blockquote>
          <blockquote className="border-l-4 border-cyan-500 pl-4 mb-8 text-gray-700 italic">
            &quot;Add error handling to this function, but keep the happy path unchanged.&quot;
          </blockquote>

          <h4 className="text-xl font-bold mb-4 text-gray-900">Reference Existing Patterns</h4>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            If you already have code that does something similar, point to it:
          </p>
          <blockquote className="border-l-4 border-cyan-500 pl-4 mb-8 text-gray-700 italic">
            &quot;Create a new ProductService following the same pattern as ContactService in services/contact_service.py&quot;
          </blockquote>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Workflow Efficiency</h3>

          <h4 className="text-xl font-bold mb-4 text-gray-900">Use Plan Mode for Big Features</h4>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Before building anything substantial, ask Claude Code to plan:
          </p>
          <blockquote className="border-l-4 border-pink-500 pl-4 mb-8 text-gray-700 italic">
            &quot;Let&apos;s go into plan mode. I want to add a feature that lets users export contacts to CSV. Help me think through the approach before we write code.&quot;
          </blockquote>

          <h4 className="text-xl font-bold mb-4 text-gray-900">Break Large Tasks into Smaller Prompts</h4>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Instead of &quot;Build me a complete user authentication system&quot;, try a sequence of smaller requests that are each reviewable and testable.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Cost and Speed Efficiency</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Model</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Best for</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Speed</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Haiku</td><td className="px-4 py-3 text-gray-700">Quick fixes, formatting, simple questions</td><td className="px-4 py-3 text-gray-700">Fast</td><td className="px-4 py-3 text-gray-700">Low</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Sonnet</td><td className="px-4 py-3 text-gray-700">Most development work (default)</td><td className="px-4 py-3 text-gray-700">Medium</td><td className="px-4 py-3 text-gray-700">Medium</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Opus</td><td className="px-4 py-3 text-gray-700">Complex reasoning, architecture decisions</td><td className="px-4 py-3 text-gray-700">Slow</td><td className="px-4 py-3 text-gray-700">High</td></tr>
              </tbody>
            </table>
          </div>

          <div className="success-box">
            <p className="font-semibold mb-2">Tip</p>
            <p>Start with Sonnet. Only upgrade to Opus if it&apos;s struggling with complex reasoning. Start a fresh conversation for unrelated tasks—long contexts slow things down and cost more.</p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 3: Async Basics */}
      <ScrollAnimation animation="fade-in">
        <section id="async-basics" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">3</span>
            <span>Async Basics</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>Pydantic.ai uses <code className="bg-gray-200 px-1 rounded">async/await</code> syntax. You don&apos;t need to deeply understand it—just know that <code className="bg-gray-200 px-1 rounded">async def</code> defines a function and <code className="bg-gray-200 px-1 rounded">await</code> calls it. Claude Code handles the details.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Async?</h3>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            When your code calls an API (like Claude or Supabase), it waits for a response. With regular code, your program just... sits there waiting. With async code, your program can do other things while waiting.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">The Syntax</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            <strong><code className="bg-gray-200 px-1 rounded">async def</code></strong> - Defines a function that can wait for things:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm">
            <code>{`async def get_contact(contact_id: str):
    result = await db.table("contacts").select("*").eq("id", contact_id).execute()
    return result.data[0]`}</code>
          </pre>

          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            <strong><code className="bg-gray-200 px-1 rounded">await</code></strong> - Calls an async function and waits for it:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`contact = await get_contact("123")`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">What You Need to Know</h3>
          <ol className="list-decimal list-inside mb-8 space-y-2 text-lg md:text-xl text-gray-700">
            <li>If a function is defined with <code className="bg-gray-200 px-1 rounded">async def</code>, you must call it with <code className="bg-gray-200 px-1 rounded">await</code></li>
            <li>You can only use <code className="bg-gray-200 px-1 rounded">await</code> inside an <code className="bg-gray-200 px-1 rounded">async def</code> function</li>
            <li>Pydantic.ai tools are async, so you&apos;ll see this pattern a lot</li>
          </ol>

          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            That&apos;s it. Claude Code handles the complexity. When you see <code className="bg-gray-200 px-1 rounded">async</code> and <code className="bg-gray-200 px-1 rounded">await</code>, just know it&apos;s about efficiently waiting for external services.
          </p>
        </section>
      </ScrollAnimation>

      {/* Section 4: Pydantic Models */}
      <ScrollAnimation animation="slide-left">
        <section id="pydantic-models" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">4</span>
            <span>Pydantic Models - Structured Data</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>Pydantic models define the <em>shape</em> of your data. Instead of hoping your data looks right, you declare what it should look like and Pydantic enforces it. This catches bugs early and makes your code self-documenting.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">The Problem Pydantic Solves</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            LLMs return text. APIs return JSON. Databases return rows. But your code needs <em>structured data</em>—data with a predictable shape.
          </p>

          <p className="mb-2 text-lg font-semibold text-gray-700">Without structure:</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm">
            <code>{`# What fields does this have? Who knows!
contact = get_contact_from_somewhere()
print(contact["email"])  # KeyError if "email" doesn't exist
print(contact["emal"])   # Typo - fails silently or crashes`}</code>
          </pre>

          <p className="mb-2 text-lg font-semibold text-gray-700">With Pydantic:</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`# Crystal clear what a Contact looks like
class Contact(BaseModel):
    id: str
    name: str
    email: str
    phone: Optional[str] = None

contact = Contact(**data)  # Validates immediately
print(contact.email)  # Autocomplete works, typos caught by editor`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Defining Models</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class Contact(BaseModel):
    id: str
    name: str
    email: str
    phone: Optional[str] = None  # Optional with default
    created_at: datetime
    notes: str = ""  # Optional with default empty string`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Using Models with LLMs (Structured Outputs)</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            This is where Pydantic really shines with AI. Instead of getting messy text from an LLM, you can get structured data:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`from pydantic_ai import Agent

class ContactSummary(BaseModel):
    name: str
    key_points: list[str]
    suggested_action: str

agent = Agent(
    "anthropic:claude-sonnet-4-5-20250929",
    result_type=ContactSummary  # LLM must return this structure
)

result = await agent.run("Summarize this contact: [contact details]")
# result.data is a ContactSummary, not raw text
print(result.data.suggested_action)`}</code>
          </pre>

          <div className="success-box">
            <p className="font-semibold mb-2">Excel Analogy</p>
            <p>A Pydantic model is like defining column headers and data types in Excel. If someone tries to enter data that doesn&apos;t match (text in the date column), it&apos;s rejected. Pydantic does the same thing for your code.</p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 5: The 3-Layer Architecture */}
      <ScrollAnimation animation="fade-in">
        <section id="three-layer-architecture" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">5</span>
            <span>The 3-Layer Architecture</span>
          </h2>

          <Image
            src="/images/guides/3-layer-architecture.jpg"
            alt="3-Layer AI Application Architecture: Interface Layer, Agent Layer, and Service Layer"
            width={1200}
            height={800}
            className="w-full h-auto rounded-xl shadow-lg mb-8"
          />

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>Organize code into three layers: Interface (what users see), Agent (AI decision-making), and Service (business logic). Each layer has one job. This separation makes code reusable, testable, and maintainable.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">What Each Layer Does</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-cyan-800">Interface Layer</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>&#8226; Displays information to users</li>
                <li>&#8226; Collects user input</li>
                <li>&#8226; Calls services or agents</li>
                <li>&#8226; Handles authentication</li>
              </ul>
              <p className="mt-3 text-xs text-cyan-600">Examples: Streamlit, FastAPI, CLI</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-pink-800">Agent Layer</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>&#8226; Interprets natural language</li>
                <li>&#8226; Decides which tools to call</li>
                <li>&#8226; Orchestrates multi-step tasks</li>
                <li>&#8226; Returns results to interface</li>
              </ul>
              <p className="mt-3 text-xs text-pink-600">Examples: Pydantic.ai agents</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-gray-800">Service Layer</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>&#8226; Contains all business logic</li>
                <li>&#8226; Handles database operations</li>
                <li>&#8226; Calls external APIs</li>
                <li>&#8226; Performs calculations</li>
              </ul>
              <p className="mt-3 text-xs text-gray-600">Examples: ContactService, UserService</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Separation Matters</h3>

          <h4 className="text-xl font-bold mb-3 text-gray-900">Reusability</h4>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            Your ContactService can be used by the Streamlit UI, an API endpoint, an AI agent, a CLI tool, and scheduled jobs. Write the logic once, use it everywhere.
          </p>

          <h4 className="text-xl font-bold mb-3 text-gray-900">Testability</h4>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Services are deterministic—same input, same output. You can test them without involving AI or UI:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`def test_contact_service():
    service = ContactService(mock_db)
    contact = service.create_contact(name="Test", email="test@example.com")
    assert contact.name == "Test"`}</code>
          </pre>

          <h4 className="text-xl font-bold mb-3 text-gray-900">Maintainability</h4>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Need to change how contacts are stored? Update the service. The UI and agents don&apos;t change. Need a new UI? Build it. The services and agents stay the same.
          </p>
        </section>
      </ScrollAnimation>

      {/* Section 6: Services */}
      <ScrollAnimation animation="slide-left">
        <section id="services" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">6</span>
            <span>Services - Your Business Logic</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>Services are classes that contain your business logic. They handle database operations, calculations, and external API calls. Services are reusable, testable, and the backbone of your infrastructure.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">What Belongs in a Service?</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">Put logic in a service when it:</p>
          <ul className="list-disc list-inside mb-8 space-y-2 text-lg md:text-xl text-gray-700">
            <li>Touches the database</li>
            <li>Calls an external API</li>
            <li>Performs business calculations</li>
            <li>Should be reusable across your app</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Service Structure Pattern</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`# services/contact_service.py

from typing import Optional
from datetime import datetime, timedelta
from supabase import Client
from models import Contact

class ContactService:
    """Service for contact management operations."""

    def __init__(self, db: Client):
        self.db = db

    def get_contact(self, contact_id: str) -> Optional[Contact]:
        """Get a single contact by ID."""
        result = self.db.table("contacts").select("*").eq("id", contact_id).execute()
        if not result.data:
            return None
        return Contact(**result.data[0])

    def create_contact(self, name: str, email: str, phone: Optional[str] = None) -> Contact:
        """Create a new contact."""
        data = {
            "name": name,
            "email": email,
            "phone": phone,
            "created_at": datetime.now().isoformat()
        }
        result = self.db.table("contacts").insert(data).execute()
        return Contact(**result.data[0])`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Key Principles</h3>

          <h4 className="text-xl font-bold mb-3 text-gray-900">Dependencies are Injected</h4>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Don&apos;t create the database client inside the service. Pass it in:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`# Good - dependency injected
class ContactService:
    def __init__(self, db: Client):
        self.db = db

# Bad - creates its own dependency
class ContactService:
    def __init__(self):
        self.db = create_client(url, key)  # Hard to test!`}</code>
          </pre>

          <h4 className="text-xl font-bold mb-3 text-gray-900">Return Pydantic Models</h4>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Always return typed data, not raw dictionaries. This gives you autocomplete, validation, and self-documenting code.
          </p>
        </section>
      </ScrollAnimation>

      {/* Section 7: Thin Tools */}
      <ScrollAnimation animation="fade-in">
        <section id="thin-tools" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">7</span>
            <span>Thin Tools - The Bridge to AI</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>Tools are functions that agents can call. The critical rule: tools should be <em>thin</em>—they call services, they don&apos;t contain business logic. This keeps logic reusable and testable.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">The Thin Tools Rule</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700 font-semibold">
            Tools call services. Tools don&apos;t contain logic.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm">
            <code>{`# ✅ CORRECT: Tool is thin, calls service
@agent.tool()
async def get_recent_contacts(
    ctx: RunContext[AgentDependencies],
    days: int = 7
) -> list[Contact]:
    """Get contacts created in the last N days."""
    return ctx.deps.contact_service.get_recent_contacts(days)


# ❌ WRONG: Tool contains business logic
@agent.tool()
async def get_recent_contacts(
    ctx: RunContext[AgentDependencies],
    days: int = 7
) -> list[Contact]:
    # Don't do this! Logic belongs in service
    cutoff = datetime.now() - timedelta(days=days)
    result = ctx.deps.db.table("contacts").select("*").gte("created_at", cutoff.isoformat()).execute()
    return [Contact(**row) for row in result.data]`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Why This Matters</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            If logic is in the tool, you can only use it through the agent.
          </p>
          <p className="mb-8 text-lg md:text-xl leading-relaxed text-gray-700">
            If logic is in the service, you can use it through the agent (via tool), through the UI (directly), through the API (directly), in tests (directly), and in scheduled jobs (directly).
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Tool Docstrings Matter</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            The LLM reads tool docstrings to decide when to use each tool. Be clear and specific:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`@agent.tool()
async def search_contacts(
    ctx: RunContext[AgentDependencies],
    query: str
) -> list[Contact]:
    """
    Search for contacts by name or email.

    Use this when the user wants to find specific contacts based on
    a search term. The search is case-insensitive and matches partial
    names or email addresses.

    Args:
        ctx: Agent context with dependencies
        query: Search term to match against name or email

    Returns:
        List of matching contacts, empty if none found
    """
    return ctx.deps.contact_service.search(query)`}</code>
          </pre>
        </section>
      </ScrollAnimation>

      {/* Section 8: Pydantic.ai Essentials */}
      <ScrollAnimation animation="slide-left">
        <section id="pydantic-ai" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">8</span>
            <span>Pydantic.ai Essentials</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>Pydantic.ai is a framework for building AI agents. You create an agent with a model and system prompt, add tools it can call, and run it with user input. The agent decides which tools to use.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Creating an Agent</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`from pydantic_ai import Agent
from agent.dependencies import AgentDependencies

contact_agent = Agent(
    "anthropic:claude-sonnet-4-5-20250929",
    deps_type=AgentDependencies,
    system_prompt="""You are a helpful contact management assistant.

    You can help users:
    - Find contacts by searching names or emails
    - View recent contacts
    - Get summaries of contact information

    Always be concise and helpful."""
)`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">AgentDependencies</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Dependencies are how tools access services. It&apos;s a class that holds all the services an agent might need:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`# agent/dependencies.py

from dataclasses import dataclass
from services.contact_service import ContactService
from core.database import get_supabase_client

@dataclass
class AgentDependencies:
    """Container for all services available to agent tools."""
    contact_service: ContactService

    @classmethod
    def create(cls) -> "AgentDependencies":
        """Factory method to create dependencies with real services."""
        db = get_supabase_client()
        return cls(contact_service=ContactService(db))`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Running an Agent</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`import asyncio
from agent.contact_agent import contact_agent
from agent.dependencies import AgentDependencies

async def main():
    deps = AgentDependencies.create()

    result = await contact_agent.run(
        "Show me all contacts from last week",
        deps=deps
    )

    print(result.data)

asyncio.run(main())`}</code>
          </pre>

          <div className="info-box">
            <p className="font-semibold mb-2">Multiple Agents vs. One Agent</p>
            <p>Start with one agent. Split into multiple specialized agents when it starts getting confused with too many tools (15-20+). Multiple agents need an orchestrator to route requests.</p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 9: Prompt Engineering */}
      <ScrollAnimation animation="fade-in">
        <section id="prompt-engineering" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">9</span>
            <span>Prompt Engineering Basics</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>How you write system prompts and tool docstrings determines how well your agent works. Be specific, give examples, and iterate based on what you observe.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">System Prompts</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`system_prompt="""You are a contact management assistant for a sales team.

Your primary responsibilities:
- Help users find and manage their contacts
- Provide quick summaries of contact information
- Suggest follow-up actions based on contact history

Guidelines:
- Be concise - sales people are busy
- Always confirm before deleting anything
- If a search returns no results, suggest broadening the search
- Format contact lists as bullet points for easy scanning

You have access to tools for searching, viewing, and managing contacts.
Use them based on what the user needs."""`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">What to Include</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Element</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Role</td><td className="px-4 py-3 text-gray-700">Who is the agent? (&quot;contact management assistant&quot;)</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Audience</td><td className="px-4 py-3 text-gray-700">Who is it helping? (&quot;sales team&quot;)</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Responsibilities</td><td className="px-4 py-3 text-gray-700">What can it do?</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Guidelines</td><td className="px-4 py-3 text-gray-700">How should it behave?</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Constraints</td><td className="px-4 py-3 text-gray-700">What should it avoid?</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Iteration Process</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Prompts rarely work perfectly the first time. Iterate:
          </p>
          <ol className="list-decimal list-inside mb-8 space-y-2 text-lg md:text-xl text-gray-700">
            <li><strong>Write</strong> initial prompt</li>
            <li><strong>Test</strong> with real queries</li>
            <li><strong>Observe</strong> what goes wrong</li>
            <li><strong>Refine</strong> the prompt</li>
            <li><strong>Repeat</strong></li>
          </ol>
        </section>
      </ScrollAnimation>

      {/* Section 10: Deterministic vs Agent */}
      <ScrollAnimation animation="slide-left">
        <section id="deterministic-vs-agent" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">10</span>
            <span>Deterministic vs. Agent Decision-Making</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>Deterministic code always does the same thing. Agent-driven code lets the LLM decide. Use deterministic for known workflows and cost-sensitive operations. Use agents for flexible, language-based tasks.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">When to Use Deterministic</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Situation</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Known workflow</td><td className="px-4 py-3 text-gray-700">&quot;Every morning, pull data, generate report, send email&quot;</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Compliance requirements</td><td className="px-4 py-3 text-gray-700">&quot;These steps must happen in this order&quot;</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Cost-sensitive</td><td className="px-4 py-3 text-gray-700">Processing 10,000 items—can&apos;t afford LLM calls each</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Speed-critical</td><td className="px-4 py-3 text-gray-700">Response needed in milliseconds</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">When to Use Agent-Driven</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Situation</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Natural language input</td><td className="px-4 py-3 text-gray-700">User asks questions in their own words</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Flexible tasks</td><td className="px-4 py-3 text-gray-700">&quot;Help me with this contact&quot; (what kind of help?)</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Exploration</td><td className="px-4 py-3 text-gray-700">&quot;What can you tell me about our sales?&quot;</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Complex judgment</td><td className="px-4 py-3 text-gray-700">&quot;Summarize the key points from these emails&quot;</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">The Cost Reality</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Approach</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Time</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Cost per operation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Deterministic</td><td className="px-4 py-3 text-gray-700">Microseconds</td><td className="px-4 py-3 text-gray-700">~Free</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Agent (Haiku)</td><td className="px-4 py-3 text-gray-700">1-3 seconds</td><td className="px-4 py-3 text-gray-700">~$0.001</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Agent (Sonnet)</td><td className="px-4 py-3 text-gray-700">3-10 seconds</td><td className="px-4 py-3 text-gray-700">~$0.01</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-medium">Agent (Opus)</td><td className="px-4 py-3 text-gray-700">10-30 seconds</td><td className="px-4 py-3 text-gray-700">~$0.10</td></tr>
              </tbody>
            </table>
          </div>

          <div className="warning-box">
            <p className="font-semibold mb-2">Rule</p>
            <p>Don&apos;t use an agent for something a simple function can do. Processing 10,000 items with Sonnet = hours and $100+. With deterministic code = instant and free.</p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 11: CLAUDE.md */}
      <ScrollAnimation animation="fade-in">
        <section id="claude-md" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">11</span>
            <span>CLAUDE.md for Real Projects</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>CLAUDE.md is your instruction file for Claude Code. Document your architecture, patterns, and rules. Include efficiency guidelines, checkpoint instructions, and refactoring triggers.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Efficiency Rules</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`## Efficiency Rules

### Don't Duplicate
- Before creating a new function, check if similar functionality exists
- Before creating a new table, check the existing schema
- Prefer extending existing code over creating new files

### Check Before Creating
- Run \`grep -r "function_name" .\` to check if something exists
- Check Supabase schema before adding tables or columns
- Review similar files before creating new ones

### Ask Before Big Changes
- Ask before major refactors
- Ask before changing database schemas
- Ask before adding new dependencies`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Refactoring Guidance</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`## Refactoring Guidelines

### When to Refactor
- Files over ~200 lines → consider splitting
- Functions over ~50 lines → consider breaking down
- Same code in multiple places → extract to shared function
- Hard to find things → reorganize

### How to Refactor
Ask: "This file is getting large. Help me refactor it into smaller,
focused modules while maintaining the same functionality."`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Checkpoints</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`## Checkpoints

Long conversations lose context. Save progress regularly.

### When to Checkpoint
- After completing a major feature
- Every ~50K tokens (Claude will estimate)
- Before starting a different area of work

### How to Checkpoint
Ask: "Save a checkpoint of our progress to docs/checkpoints/"`}</code>
          </pre>
        </section>
      </ScrollAnimation>

      {/* Section 12: Security */}
      <ScrollAnimation animation="slide-left">
        <section id="security" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">12</span>
            <span>Security Essentials</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>Never commit API keys. Validate user input. Don&apos;t trust LLM output blindly. These basics prevent most security issues.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Never Commit API Keys</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            API keys in your code = API keys stolen.
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`# .env (never committed)
ANTHROPIC_API_KEY=sk-ant-xxxxx
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_KEY=your-key-here

# .gitignore (always committed)
.env

# In your code
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("ANTHROPIC_API_KEY")`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Security Checklist</h3>
          <ul className="list-disc list-inside mb-8 space-y-2 text-lg md:text-xl text-gray-700">
            <li><code className="bg-gray-200 px-1 rounded">.env</code> is in <code className="bg-gray-200 px-1 rounded">.gitignore</code></li>
            <li>No API keys in code files</li>
            <li>User input is validated</li>
            <li>Database queries use parameters (not string concatenation)</li>
            <li>LLM output is validated before use</li>
            <li>Error messages don&apos;t expose sensitive details</li>
          </ul>
        </section>
      </ScrollAnimation>

      {/* Section 13: Troubleshooting */}
      <ScrollAnimation animation="fade-in">
        <section id="troubleshooting" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">13</span>
            <span>Troubleshooting &amp; Debugging</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>Errors are normal. Read error messages (the last line is usually key). Use Logfire MCP so Claude Code can see your logs. Take screenshots for visual issues.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Reading Error Messages</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            The most important line is usually <strong>last</strong>:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`Traceback (most recent call last):
  File "app.py", line 42, in main
    result = process_data(data)
  File "processor.py", line 15, in process_data
    return data["email"]
KeyError: 'email'                    ← THIS is the actual problem`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Error Handling &amp; Retries</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`import time

async def call_agent_with_retry(prompt: str, max_retries: int = 3):
    for attempt in range(max_retries):
        try:
            return await agent.run(prompt, deps=deps)
        except Exception as e:
            if attempt == max_retries - 1:
                raise  # Give up after max retries
            print(f"Attempt {attempt + 1} failed: {e}. Retrying...")
            time.sleep(2 ** attempt)  # Exponential backoff`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Setting Up Logfire MCP</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Logfire MCP lets Claude Code access your application logs directly. Ask Claude Code:
          </p>
          <blockquote className="border-l-4 border-cyan-500 pl-4 mb-8 text-gray-700 italic">
            &quot;Help me install and configure the Logfire MCP server so you can access my application logs and help me debug issues.&quot;
          </blockquote>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">The Debugging Prompt Template</h3>
          <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`Here's the error:
[paste the full error message]

Here's what I was trying to do:
[explain the goal]

Here's the relevant code:
[paste the code section]

Here's a screenshot (if relevant):
[attach or reference file]

What I've already tried:
[list attempts]`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Common Issues and Fixes</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Error</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Likely cause</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Fix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 text-gray-700"><code className="text-sm">ModuleNotFoundError</code></td><td className="px-4 py-3 text-gray-700">Venv not activated</td><td className="px-4 py-3 text-gray-700"><code className="text-sm">source .venv/bin/activate</code></td></tr>
                <tr><td className="px-4 py-3 text-gray-700"><code className="text-sm">KeyError</code> on env var</td><td className="px-4 py-3 text-gray-700">.env not loaded</td><td className="px-4 py-3 text-gray-700">Check .env file exists</td></tr>
                <tr><td className="px-4 py-3 text-gray-700"><code className="text-sm">Connection refused</code></td><td className="px-4 py-3 text-gray-700">Wrong credentials</td><td className="px-4 py-3 text-gray-700">Verify .env values</td></tr>
                <tr><td className="px-4 py-3 text-gray-700"><code className="text-sm">ValidationError</code></td><td className="px-4 py-3 text-gray-700">Data shape mismatch</td><td className="px-4 py-3 text-gray-700">Check model vs data</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 14: Hands-On Project */}
      <ScrollAnimation animation="slide-left">
        <section id="hands-on-project" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">14</span>
            <span>Hands-On Project - Contact Manager</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>Build a complete system using every pattern from this guide: Streamlit UI + Supabase database + Service layer + Pydantic.ai agent + Logfire monitoring, deployed to Railway.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Project Structure</h3>
          <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg overflow-x-auto mb-8 text-sm">
            <code>{`contact-manager/
├── CLAUDE.md                    # Development guidelines
├── .env.example                 # Environment template
├── .gitignore
├── requirements.txt
├── contact_manager/
│   ├── __init__.py
│   ├── models.py                # Pydantic models
│   ├── core/
│   │   ├── config.py            # Configuration
│   │   └── database.py          # Supabase client
│   ├── services/
│   │   └── contact_service.py   # Business logic
│   ├── agent/
│   │   ├── dependencies.py      # AgentDependencies
│   │   └── contact_agent.py     # Agent + tools
│   └── ui/
│       └── app.py               # Streamlit interface
└── docs/
    └── checkpoints/             # Progress checkpoints`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Step-by-Step Build</h3>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            Use these prompts with Claude Code to build each piece:
          </p>

          <h4 className="text-xl font-bold mb-3 text-gray-900">Step 1: Project Setup</h4>
          <div className="info-box mb-6">
            <p className="font-semibold mb-2">Prompt to Claude Code:</p>
            <p className="text-sm">&quot;Create a new project called contact-manager with the structure for a 3-layer architecture. Include requirements.txt with streamlit, anthropic, pydantic-ai, supabase, python-dotenv, logfire. Add .env.example, .gitignore, and a CLAUDE.md with efficiency rules.&quot;</p>
          </div>

          <h4 className="text-xl font-bold mb-3 text-gray-900">Step 2: Pydantic Models</h4>
          <div className="info-box mb-6">
            <p className="font-semibold mb-2">Prompt to Claude Code:</p>
            <p className="text-sm">&quot;Create contact_manager/models.py with a Contact Pydantic model. Include: id (str), name (str), email (str), phone (optional str), notes (str, default empty), created_at (datetime), updated_at (datetime).&quot;</p>
          </div>

          <h4 className="text-xl font-bold mb-3 text-gray-900">Step 3: Database Setup</h4>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Create the table in Supabase SQL Editor:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm">
            <code>{`CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    notes TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_contacts_email ON contacts(email);`}</code>
          </pre>

          <h4 className="text-xl font-bold mb-3 text-gray-900">Steps 4-9: Continue Building</h4>
          <p className="mb-8 text-lg md:text-xl leading-relaxed text-gray-700">
            Continue with prompts for: ContactService (Step 4), AgentDependencies (Step 5), ContactAgent with tools (Step 6), Streamlit UI (Step 7), Logfire monitoring (Step 8), and Railway deployment (Step 9).
          </p>

          <div className="success-box">
            <p className="font-semibold mb-2">Testing Your Build</p>
            <p>After each step: <code className="bg-green-200 px-1 rounded text-sm">python3 -m py_compile contact_manager/[file].py</code> to verify syntax. For the UI: <code className="bg-green-200 px-1 rounded text-sm">streamlit run contact_manager/ui/app.py</code></p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 15: What's Next */}
      <ScrollAnimation animation="fade-in">
        <section id="whats-next" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">15</span>
            <span>What&apos;s Next?</span>
          </h2>

          <p className="mb-8 text-lg md:text-xl leading-relaxed text-gray-700">
            You now have a solid foundation: the 3-layer architecture, reusable services, agents with thin tools, and the judgment to choose between AI and deterministic code.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Where to Go From Here</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-cyan-800">Multi-Agent Orchestration</h4>
              <p className="text-gray-700 text-sm">When one agent isn&apos;t enough, create multiple specialized agents with a router that directs requests to the right specialist.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-pink-800">Pydantic-Graph</h4>
              <p className="text-gray-700 text-sm">For complex deterministic multi-step workflows with branching, error handling, and human checkpoints.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-gray-800">Production Concerns</h4>
              <p className="text-gray-700 text-sm">Rate limiting, caching, cost monitoring, and background jobs for long-running tasks.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-gray-800">Building MCP Servers</h4>
              <p className="text-gray-700 text-sm">Create your own MCP servers so Claude Code can interact with your custom tools and data sources.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Keep Building</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            The best way to learn is to build things. Ideas:
          </p>
          <ul className="list-disc list-inside mb-8 space-y-2 text-lg md:text-xl text-gray-700">
            <li>Add more features to your Contact Manager</li>
            <li>Build a second agent for a different domain</li>
            <li>Connect your system to external APIs</li>
            <li>Create dashboards and reports</li>
          </ul>

          <p className="mb-8 text-lg md:text-xl leading-relaxed text-gray-700">
            Every project teaches you something new. You now have the patterns—go apply them.
          </p>

          <div className="success-box mb-8">
            <p className="font-semibold mb-2">Resources</p>
            <p>Want to go deeper? Check out the <a href="https://ai.pydantic.dev" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">Pydantic.ai documentation</a> and the <a href="https://github.com/anthropics/anthropic-cookbook" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">Anthropic cookbook</a>.</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-pink-50 p-6 rounded-xl">
            <p className="text-lg font-semibold text-gray-800 mb-2">Missed Part 1?</p>
            <p className="text-gray-700 mb-4">Go back to the foundations: environment setup, understanding LLMs, and building your first chatbot.</p>
            <Link href="/guides/claude-code-getting-started" className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-800 font-medium">
              <span>&#8592;</span>
              <span>Part 1: Getting Started with Claude Code</span>
            </Link>
          </div>
        </section>
      </ScrollAnimation>
    </GuideLayout>
    </>
  );
}
