import GuideLayout from "@/components/GuideLayout";
import ScrollAnimation from "@/components/ScrollAnimation";
import TableOfContents from "@/components/TableOfContents";
import Image from "next/image";

export const metadata = {
  title: "Getting Started with Claude Code | Ryan McKenzie",
  description: "A comprehensive guide to building AI-powered applications with Claude Code. Learn Python, Supabase, Railway, and build your first AI chatbot.",
};

const sections = [
  { id: "introduction", title: "The AI Development Revolution", number: "1" },
  { id: "why-python", title: "Why Python?", number: "2" },
  { id: "development-mindset", title: "The Development Mindset", number: "3" },
  { id: "your-toolkit", title: "Your Toolkit", number: "4" },
  { id: "environment-setup", title: "Setting Up Your Environment", number: "5" },
  { id: "understanding-llms", title: "Understanding AI & LLMs", number: "6" },
  { id: "llm-vs-deterministic", title: "LLM vs Deterministic", number: "7" },
  { id: "first-project", title: "Your First Project", number: "8" },
  { id: "common-pitfalls", title: "Common Pitfalls", number: "9" },
  { id: "glossary", title: "Glossary", number: "10" },
  { id: "whats-next", title: "What's Next", number: "11" },
];

export default function ClaudeCodeGettingStartedGuide() {
  return (
    <GuideLayout
      title="Getting Started with Claude Code"
      description="A comprehensive guide to building AI-powered applications—no coding experience required"
      readTime="25 min"
      tableOfContents={<TableOfContents sections={sections} />}
      heroImage={
        <Image
          src="/images/guides/claude-code-hero.jpg"
          alt="Build me a chatbot - transforms into Streamlit code"
          width={2752}
          height={1536}
          className="w-full h-auto rounded-xl shadow-lg"
          priority
        />
      }
      author={{
        name: "Ryan McKenzie",
        twitter: "https://x.com/ryemckenzie",
        linkedin: "https://www.linkedin.com/in/ryemckenzie/",
        youtube: "https://www.youtube.com/channel/UCr_WZIhS3_mpVbc03Tq-Esw"
      }}
    >
      {/* Hero intro box */}
      <ScrollAnimation animation="fade-in">
        <div className="bg-gradient-to-br from-cyan-50 to-pink-50 border-2 border-transparent bg-clip-padding rounded-xl pt-1 px-4 pb-4 mb-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 opacity-20 rounded-xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
              What You&apos;ll Learn
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              This guide will take you from complete beginner to building and deploying your first AI-powered application. By the end, you&apos;ll have a working chatbot live on the internet.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-cyan-700">What&apos;s Included:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 text-lg">✨</span>
                    <span>Complete development environment setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 text-lg">⚡</span>
                    <span>Understanding LLMs and when to use them</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 text-lg">🔧</span>
                    <span>Essential platforms: GitHub, Supabase, Railway</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 text-lg">🛡️</span>
                    <span>Hands-on project: Build a chatbot</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-pink-700">By The End, You&apos;ll Be Able To:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1 text-lg">📊</span>
                    <span>Set up a professional development environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1 text-lg">🤖</span>
                    <span>Build AI applications with Claude Code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1 text-lg">💾</span>
                    <span>Store data in Supabase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1 text-lg">🚀</span>
                    <span>Deploy applications to the cloud</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-100 to-pink-100 rounded-lg p-4 border-l-4 border-gradient-to-b border-cyan-500">
              <p className="text-sm text-gray-700">
                <span className="font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">Time commitment:</span> 25 minutes to read, 1-2 hours to build your first chatbot
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Mobile only table of contents */}
      <div className="lg:hidden mb-12">
        <ScrollAnimation animation="fade-in" delay={100}>
          <div className="bg-gray-50 rounded-2xl p-6">
            <TableOfContents sections={sections} />
          </div>
        </ScrollAnimation>
      </div>

      {/* Section 1: Introduction */}
      <ScrollAnimation animation="fade-in" delay={200}>
        <section id="introduction" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">1</span>
            <span>The AI Development Revolution</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>Claude Code is an AI assistant that writes code for you. You describe what you want in plain English, and it builds it. This has fundamentally changed who can create software.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">What is Claude Code?</h3>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            Claude Code is a command-line tool made by Anthropic (the company behind Claude) that lets you build software by having a conversation. Instead of writing code yourself, you describe what you want, and Claude writes it for you.
          </p>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            Think of it like having a very skilled programmer sitting next to you who:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Never gets tired or frustrated</li>
            <li>Knows almost every programming language and framework</li>
            <li>Can explain what it&apos;s doing in plain English</li>
            <li>Works at the speed you can describe your ideas</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">How AI Changed Software Development</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700"><strong>The old way (pre-2023):</strong></p>
          <ol className="list-decimal list-inside mb-6 space-y-2 text-lg md:text-xl text-gray-700">
            <li>Have an idea</li>
            <li>Spend months/years learning to code</li>
            <li>Build the thing (slowly, with lots of frustration)</li>
            <li>Debug for weeks</li>
            <li>Maybe ship something</li>
          </ol>

          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700"><strong>The new way:</strong></p>
          <ol className="list-decimal list-inside mb-6 space-y-2 text-lg md:text-xl text-gray-700">
            <li>Have an idea</li>
            <li>Describe it to Claude Code</li>
            <li>Review what it built</li>
            <li>Ask for changes</li>
            <li>Ship it</li>
          </ol>

          <div className="info-box">
            <p className="font-semibold mb-2">Why This Matters For You</p>
            <p>If you&apos;re good at Excel, you already have the most important skill: <strong>logical thinking</strong>. You know how to break problems into steps, think about data flowing from inputs to outputs, and debug when formulas don&apos;t work. These skills transfer directly to AI development.</p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 2: Why Python */}
      <ScrollAnimation animation="slide-left" delay={100}>
        <section id="why-python" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">2</span>
            <span>Why Python?</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>Python is the language of AI. It reads like English, has libraries for everything, and Claude Code writes it fluently. You won&apos;t write much Python directly—but understanding why we use it helps you make better decisions.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Python Reads Like English</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">Compare these two snippets that do the same thing:</p>

          <p className="mb-2 text-lg font-semibold text-gray-700">Python:</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
            <code>{`if user_age >= 18:
    print("You can vote")
else:
    print("Too young to vote")`}</code>
          </pre>

          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            Python strips away the ceremony. You can often read Python code and understand what it does, even if you&apos;ve never programmed before.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">The Ecosystem</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Python has <strong>libraries</strong> (pre-written code packages) for almost everything:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-lg md:text-xl text-gray-700">
            <li><code className="bg-gray-100 px-2 py-1 rounded">anthropic</code> - Talk to Claude</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">openai</code> - Talk to GPT</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">streamlit</code> - Build web interfaces</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">supabase</code> - Connect to databases</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">pandas</code> - Work with data (like Excel on steroids)</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">The Excel Connection</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">You already think in a way that maps to Python:</p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Excel Concept</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Python Equivalent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 text-gray-700">Cell formula</td><td className="px-4 py-3 text-gray-700">Variable assignment</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">IF() function</td><td className="px-4 py-3 text-gray-700">if/else statement</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">VLOOKUP()</td><td className="px-4 py-3 text-gray-700">Dictionary lookup</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">Pivot table</td><td className="px-4 py-3 text-gray-700">pandas groupby</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">Macro</td><td className="px-4 py-3 text-gray-700">Function</td></tr>
              </tbody>
            </table>
          </div>

          <div className="success-box">
            <p className="font-semibold mb-2">Key Insight</p>
            <p>Claude Code writes the Python for you. Your job is to describe what you want clearly, review what Claude built, test that it works, and ask for changes if needed. You&apos;ll read Python more than you write it—and reading is much easier than writing.</p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 3: Development Mindset */}
      <ScrollAnimation animation="slide-right" delay={100}>
        <section id="development-mindset" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">3</span>
            <span>The Development Mindset</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>Professional developers follow a simple cycle: Research → Plan → Execute → Test. Following this process—and teaching Claude Code to follow it—is the difference between frustration and success.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">The Four-Step Cycle</h3>

          <div className="bg-gray-100 p-6 rounded-lg mb-8 font-mono text-center">
            <p className="text-lg">RESEARCH → PLAN → EXECUTE → TEST</p>
            <p className="text-sm text-gray-600 mt-2">(repeat as needed)</p>
          </div>

          <h4 className="text-xl font-bold mb-3 text-gray-900">Step 1: Research</h4>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            <strong>Before building anything, understand what you&apos;re building.</strong>
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-lg md:text-xl text-gray-700">
            <li>What problem are you solving?</li>
            <li>Has someone solved this before?</li>
            <li>What tools/libraries exist for this?</li>
            <li>What are the common pitfalls?</li>
          </ul>

          <div className="info-box mb-6">
            <p className="font-semibold mb-2">Using Claude Code for Research</p>
            <p className="mb-2">You can ask Claude Code research questions before writing any code:</p>
            <p className="italic text-gray-600">&quot;I want to build a chatbot that saves conversations to a database. What&apos;s the best approach? What libraries should I use? What are common pitfalls?&quot;</p>
          </div>

          <h4 className="text-xl font-bold mb-3 text-gray-900">Step 2: Plan</h4>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            <strong>Break the big thing into small things.</strong> Don&apos;t try to build everything at once.
          </p>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">Example plan for a chatbot:</p>
          <ol className="list-decimal list-inside mb-6 space-y-2 text-lg md:text-xl text-gray-700">
            <li>Create a basic Streamlit page with a text input</li>
            <li>Connect to Claude API and get a response</li>
            <li>Display the response on the page</li>
            <li>Add conversation history</li>
            <li>Save conversations to Supabase</li>
            <li>Deploy to Railway</li>
          </ol>

          <div className="success-box mb-6">
            <p className="font-semibold mb-2">Claude Code&apos;s Plan Mode</p>
            <p className="mb-2">Claude Code has a built-in Plan Mode. Ask:</p>
            <p className="italic text-gray-600">&quot;Let&apos;s go into plan mode. I want to build X. Help me think through the approach before we write any code.&quot;</p>
          </div>

          <h4 className="text-xl font-bold mb-3 text-gray-900">Step 3: Execute</h4>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            <strong>Build one piece at a time.</strong> Take the first item from your plan and build it. Nothing else.
          </p>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">When working with Claude Code, be specific:</p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-lg md:text-xl text-gray-700">
            <li><strong>Bad:</strong> &quot;Build me a chatbot&quot;</li>
            <li><strong>Good:</strong> &quot;Create a Streamlit page with a text input field and a submit button. When the user clicks submit, print whatever they typed.&quot;</li>
          </ul>

          <h4 className="text-xl font-bold mb-3 text-gray-900">Step 4: Test</h4>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            <strong>Verify it works before moving on.</strong>
          </p>
          <ol className="list-decimal list-inside mb-6 space-y-2 text-lg md:text-xl text-gray-700">
            <li>Run the code</li>
            <li>Try to break it (enter weird inputs, click buttons twice, etc.)</li>
            <li>Fix any issues</li>
            <li>Then—and only then—move to the next piece</li>
          </ol>

          <div className="warning-box">
            <p className="font-semibold mb-2">Why This Matters</p>
            <p>Small steps = small problems. If something breaks, you know exactly where to look. Big steps = big problems you can&apos;t diagnose.</p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 4: Your Toolkit */}
      <ScrollAnimation animation="fade-in" delay={100}>
        <section id="your-toolkit" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">4</span>
            <span>Your Toolkit</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>You need five platforms: GitHub (store code), Supabase (store data), Railway (run your app), Streamlit (build interfaces), and Logfire (see what&apos;s happening). All have free tiers.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">GitHub: Your Code&apos;s Home</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            GitHub is where your code lives. Think of it as Google Drive for code, but with superpowers.
          </p>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            <strong>What is version control?</strong> Remember how Google Docs shows you revision history? Git (the technology) and GitHub (the website) do this for code—but better. Every save is called a &quot;commit,&quot; and you can see exactly what changed in each one.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Supabase: Your Database</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            A database is a super-powered spreadsheet in the cloud.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Excel</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Database</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 text-gray-700">Workbook</td><td className="px-4 py-3 text-gray-700">Database</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">Sheet</td><td className="px-4 py-3 text-gray-700">Table</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">Row</td><td className="px-4 py-3 text-gray-700">Row</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">Column</td><td className="px-4 py-3 text-gray-700">Column</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Supabase gives you PostgreSQL (the most respected database), plus authentication, storage, and real-time capabilities.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Railway: Your Server</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Your laptop can run code, but it&apos;s not always on. A server is a computer in a data center that runs 24/7, has a public address anyone can access, and handles multiple users simultaneously.
          </p>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Railway watches your GitHub repo. When you push new code, it automatically redeploys. Magic.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Streamlit: Your User Interface</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Streamlit lets you build web apps <strong>entirely in Python</strong>:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm">
            <code>{`import streamlit as st

st.title("My First App")
name = st.text_input("What's your name?")
if st.button("Say Hello"):
    st.write(f"Hello, {name}!")`}</code>
          </pre>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            That&apos;s it. That&apos;s a complete web app. No HTML, no CSS, no JavaScript.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Logfire: Your Monitoring</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            When your app runs on a server, you can&apos;t see what&apos;s happening. Logfire lets you see logs, track errors, measure performance, and get alerts when something breaks.
          </p>
        </section>
      </ScrollAnimation>

      {/* Section 5: Environment Setup */}
      <ScrollAnimation animation="slide-left" delay={100}>
        <section id="environment-setup" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">5</span>
            <span>Setting Up Your Environment</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>Install VS Code and Claude Code first—then Claude Code can help you install Python and set everything else up. Create accounts on GitHub, Supabase, Railway, and Logfire.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Step 1: Install a Code Editor</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Download <strong>VS Code</strong> from <a href="https://code.visualstudio.com" className="text-cyan-600 hover:underline">code.visualstudio.com</a> and install the Python extension.
          </p>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Alternatively, try <strong>Cursor</strong> from <a href="https://cursor.com" className="text-cyan-600 hover:underline">cursor.com</a> — it&apos;s VS Code with built-in AI features.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Step 2: Install Claude Code</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
            <code>{`# Install Node.js first if you don't have it
brew install node  # Mac
# For Windows, download from nodejs.org

# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Verify installation
claude --version`}</code>
          </pre>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Navigate to any folder and run <code className="bg-gray-100 px-2 py-1 rounded">claude</code>. It will ask for your Anthropic API key from <a href="https://console.anthropic.com" className="text-cyan-600 hover:underline">console.anthropic.com</a>.
          </p>

          <div className="success-box mb-6">
            <p className="font-semibold mb-2">Now Claude Code can help!</p>
            <p>With Claude Code installed, ask it to help you install Python and set up the rest of your environment.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Step 3: Install Python (with Claude Code&apos;s help)</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">Ask Claude Code:</p>
          <p className="mb-6 text-lg italic text-gray-600">
            &quot;Help me install Python 3.11 on my Mac using pyenv. Walk me through each step and verify it&apos;s working.&quot;
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Step 4: Create Platform Accounts</h3>
          <ul className="list-disc list-inside mb-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li><strong>GitHub:</strong> <a href="https://github.com" className="text-cyan-600 hover:underline">github.com</a></li>
            <li><strong>Supabase:</strong> <a href="https://supabase.com" className="text-cyan-600 hover:underline">supabase.com</a></li>
            <li><strong>Railway:</strong> <a href="https://railway.app" className="text-cyan-600 hover:underline">railway.app</a></li>
            <li><strong>Logfire:</strong> <a href="https://pydantic.dev/logfire" className="text-cyan-600 hover:underline">pydantic.dev/logfire</a></li>
            <li><strong>Anthropic:</strong> <a href="https://console.anthropic.com" className="text-cyan-600 hover:underline">console.anthropic.com</a></li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Step 5: Project Setup (Let Claude Code do it)</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">Ask Claude Code:</p>
          <p className="mb-6 text-lg italic text-gray-600">
            &quot;Set up the basic project structure for a Python AI project. I need requirements.txt, .env.example, .gitignore, and an empty app.py file.&quot;
          </p>

          <div className="warning-box">
            <p className="font-semibold mb-2">Always Activate Your Virtual Environment</p>
            <p>Before working on your project, run <code className="bg-gray-100 px-2 py-1 rounded">source .venv/bin/activate</code> (Mac/Linux) or <code className="bg-gray-100 px-2 py-1 rounded">.venv\Scripts\activate</code> (Windows). Add this reminder to your CLAUDE.md file!</p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 6: Understanding LLMs */}
      <ScrollAnimation animation="slide-right" delay={100}>
        <section id="understanding-llms" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">6</span>
            <span>Understanding AI & LLMs</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>LLMs (Large Language Models) are AI systems trained on text that can generate human-like responses. Different models have different strengths. Claude is best for coding, GPT for general tasks, Gemini for images. Bigger models are smarter but slower and more expensive.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">What is an LLM?</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            LLM stands for Large Language Model. When you type &quot;The capital of France is&quot;, the model predicts that &quot;Paris&quot; is the most likely next word. It does this based on patterns it learned during training.
          </p>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            That&apos;s all it does: predict the next token. But when you do this really well, at massive scale, something remarkable happens—the model can answer questions, write code, and have conversations.
          </p>

          <div className="warning-box mb-8">
            <p className="font-semibold mb-2">Important: They&apos;re not &quot;thinking&quot;</p>
            <p>LLMs don&apos;t understand the way humans do. They&apos;re sophisticated pattern matchers. They can be confidently wrong, hallucinate facts, and work better with clear prompts.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">The Major Players</h3>
          <p className="mb-4 text-lg text-gray-600 italic">Note: AI models update frequently! Check provider docs for the latest.</p>

          <h4 className="text-xl font-bold mb-3 text-gray-900">Claude (Anthropic)</h4>
          <p className="mb-2 text-lg text-gray-700"><strong>Best for:</strong> Coding, long documents, reasoning, following complex instructions</p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Model</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Speed</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 text-gray-700">Claude Opus 4.5</td><td className="px-4 py-3 text-gray-700">Slow</td><td className="px-4 py-3 text-gray-700">Complex reasoning</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">Claude Sonnet 4.5</td><td className="px-4 py-3 text-gray-700">Medium</td><td className="px-4 py-3 text-gray-700">General use, coding</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">Claude Haiku</td><td className="px-4 py-3 text-gray-700">Fast</td><td className="px-4 py-3 text-gray-700">Quick tasks</td></tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-xl font-bold mb-3 text-gray-900">ChatGPT (OpenAI)</h4>
          <p className="mb-2 text-lg text-gray-700"><strong>Best for:</strong> General tasks, embeddings, broad knowledge</p>

          <h4 className="text-xl font-bold mb-3 mt-6 text-gray-900">Gemini (Google)</h4>
          <p className="mb-2 text-lg text-gray-700"><strong>Best for:</strong> Images, video analysis, multimodal applications</p>

          <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Choosing the Right Model</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Task</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Recommended</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 text-gray-700">Writing code</td><td className="px-4 py-3 text-gray-700">Claude Sonnet</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">Complex reasoning</td><td className="px-4 py-3 text-gray-700">Claude Opus</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">Quick simple tasks</td><td className="px-4 py-3 text-gray-700">Claude Haiku or Gemini Flash</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">Image/video analysis</td><td className="px-4 py-3 text-gray-700">Gemini Pro</td></tr>
                <tr><td className="px-4 py-3 text-gray-700">Embeddings/similarity</td><td className="px-4 py-3 text-gray-700">OpenAI</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 7: LLM vs Deterministic */}
      <ScrollAnimation animation="fade-in" delay={100}>
        <section id="llm-vs-deterministic" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">7</span>
            <span>LLM vs Deterministic</span>
          </h2>

          <Image
            src="/images/guides/deterministic-vs-llm.jpg"
            alt="AI Decision Lab: Deterministic Code vs LLMs - flowchart showing when to use each approach"
            width={1200}
            height={800}
            className="w-full h-auto rounded-xl shadow-lg mb-8"
          />

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>Use regular code for predictable tasks (math, validation, data transformation). Use LLMs for tasks requiring flexibility or language understanding. LLMs are slow and expensive—don&apos;t use them when simple code works.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">What is &quot;Deterministic&quot;?</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            Deterministic means: same input → same output, every time.
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm">
            <code>{`# Deterministic: 2 + 2 is always 4
def add(a, b):
    return a + b

add(2, 2)  # Always returns 4`}</code>
          </pre>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">When to Use What</h3>

          <h4 className="text-xl font-bold mb-3 text-gray-900">Use Deterministic Code When:</h4>
          <ul className="list-disc list-inside mb-6 space-y-2 text-lg md:text-xl text-gray-700">
            <li>Calculate a total → Deterministic</li>
            <li>Validate an email format → Deterministic</li>
            <li>Convert CSV to JSON → Deterministic</li>
            <li>Apply discount if order &gt; $100 → Deterministic</li>
          </ul>

          <h4 className="text-xl font-bold mb-3 text-gray-900">Use LLMs When:</h4>
          <ul className="list-disc list-inside mb-6 space-y-2 text-lg md:text-xl text-gray-700">
            <li>Summarize customer feedback → LLM</li>
            <li>Write a personalized email → LLM</li>
            <li>Determine if a review is positive or negative → LLM</li>
            <li>Answer customer questions → LLM</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">The Cost Reality</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            If you&apos;re processing 10,000 items:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-lg md:text-xl text-gray-700">
            <li><strong>Deterministic:</strong> Instant, free</li>
            <li><strong>LLM (Sonnet):</strong> 8+ hours, $100+</li>
          </ul>

          <div className="success-box">
            <p className="font-semibold mb-2">The Golden Rule</p>
            <p>Use the simplest tool that solves the problem.</p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 8: First Project */}
      <ScrollAnimation animation="slide-left" delay={100}>
        <section id="first-project" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">8</span>
            <span>Your First Project: A Simple Chatbot</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>We&apos;ll build a chatbot step-by-step: Streamlit interface → Claude API connection → conversation history → Supabase storage → Railway deployment.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">What We&apos;re Building</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">A web-based chatbot that:</p>
          <ol className="list-decimal list-inside mb-6 space-y-2 text-lg md:text-xl text-gray-700">
            <li>Shows a chat interface</li>
            <li>Sends messages to Claude</li>
            <li>Displays responses</li>
            <li>Remembers conversation history</li>
            <li>Saves conversations to a database</li>
            <li>Runs 24/7 on the internet</li>
          </ol>

          <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Step 1: Project Setup</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
            <code>{`mkdir simple-chatbot
cd simple-chatbot
python -m venv .venv
source .venv/bin/activate
claude`}</code>
          </pre>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700"><strong>Prompt to Claude Code:</strong></p>
          <p className="mb-6 text-lg italic text-gray-600">
            &quot;Create the basic project structure for a Streamlit chatbot app. I need requirements.txt with streamlit, anthropic, supabase, python-dotenv; .env.example; .gitignore; and an empty app.py file.&quot;
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Step 2: Basic Streamlit Interface</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700"><strong>Prompt to Claude Code:</strong></p>
          <p className="mb-4 text-lg italic text-gray-600">
            &quot;In app.py, create a simple Streamlit chat interface with a title, chat input, and message display. For now, just echo back what the user types.&quot;
          </p>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            Test it: <code className="bg-gray-100 px-2 py-1 rounded">streamlit run app.py</code>
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Step 3: Connect to Claude API</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700"><strong>Prompt to Claude Code:</strong></p>
          <p className="mb-6 text-lg italic text-gray-600">
            &quot;Now connect the chatbot to Claude. Send user messages to the Claude API and display Claude&apos;s response.&quot;
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Step 4: Add Conversation History</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700"><strong>Prompt to Claude Code:</strong></p>
          <p className="mb-6 text-lg italic text-gray-600">
            &quot;Add conversation history so Claude remembers previous messages in the session using Streamlit session state.&quot;
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Step 5: Save to Supabase</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            First, create a table in Supabase SQL Editor:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
            <code>{`CREATE TABLE conversations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id TEXT NOT NULL,
    role TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);`}</code>
          </pre>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700"><strong>Prompt to Claude Code:</strong></p>
          <p className="mb-6 text-lg italic text-gray-600">
            &quot;Add Supabase integration to save conversations. Generate a unique session ID and save each message.&quot;
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900">Step 6: Deploy to Railway</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700"><strong>Prompt to Claude Code:</strong></p>
          <p className="mb-4 text-lg italic text-gray-600">
            &quot;Create a Procfile and railway.json for Railway deployment.&quot;
          </p>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">Then:</p>
          <ol className="list-decimal list-inside mb-6 space-y-2 text-lg md:text-xl text-gray-700">
            <li>Push to GitHub</li>
            <li>Connect Railway to your repo</li>
            <li>Add environment variables</li>
            <li>Deploy!</li>
          </ol>

          <div className="success-box">
            <p className="font-semibold mb-2">What You&apos;ve Learned</p>
            <p>By building this chatbot, you&apos;ve touched every part of the stack: Python, Streamlit, Claude API, Supabase, Railway, environment variables, and Git/GitHub.</p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 9: Common Pitfalls */}
      <ScrollAnimation animation="slide-right" delay={100}>
        <section id="common-pitfalls" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">9</span>
            <span>Common Pitfalls & How to Avoid Them</span>
          </h2>

          <div className="highlight-box mb-8">
            <h3 className="font-semibold mb-3">TL;DR</h3>
            <p>Most beginners fail by trying to do too much at once, not testing incrementally, ignoring errors, over-engineering, and not reading documentation.</p>
          </div>

          <div className="space-y-8">
            <div className="warning-box">
              <h4 className="font-bold mb-2">Pitfall 1: Building Too Much at Once</h4>
              <p className="mb-2"><strong>The trap:</strong> &quot;Let me build the whole thing, then see if it works.&quot;</p>
              <p><strong>The fix:</strong> Build one small piece. Test it. Then add the next piece.</p>
            </div>

            <div className="warning-box">
              <h4 className="font-bold mb-2">Pitfall 2: Not Testing Incrementally</h4>
              <p className="mb-2"><strong>The trap:</strong> Writing 500 lines of code before running it once.</p>
              <p><strong>The fix:</strong> Run your code after every few changes. If it was working and now it&apos;s not, the bug is in what you just added.</p>
            </div>

            <div className="warning-box">
              <h4 className="font-bold mb-2">Pitfall 3: Ignoring Error Messages</h4>
              <p className="mb-2"><strong>The trap:</strong> &quot;There&apos;s an error but it&apos;s too confusing.&quot;</p>
              <p><strong>The fix:</strong> Read error messages carefully. The last line usually tells you the actual problem. Copy them into Claude Code and ask for help.</p>
            </div>

            <div className="warning-box">
              <h4 className="font-bold mb-2">Pitfall 4: Over-Engineering</h4>
              <p className="mb-2"><strong>The trap:</strong> Setting up perfect infrastructure before building the feature.</p>
              <p><strong>The fix:</strong> Make it work first. Make it pretty later.</p>
            </div>

            <div className="warning-box">
              <h4 className="font-bold mb-2">Pitfall 5: Not Reading Documentation</h4>
              <p className="mb-2"><strong>The trap:</strong> Guessing how a library works.</p>
              <p><strong>The fix:</strong> Spend 10 minutes skimming documentation. Look for &quot;Getting Started&quot; guides.</p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 10: Glossary */}
      <ScrollAnimation animation="fade-in" delay={100}>
        <section id="glossary" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">10</span>
            <span>Glossary</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Term</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Definition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">API</td><td className="px-4 py-3 text-gray-700">A way for programs to talk to each other</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">API Key</td><td className="px-4 py-3 text-gray-700">A password that identifies you when calling an API</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">Commit</td><td className="px-4 py-3 text-gray-700">A saved snapshot of your code in Git</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">Deploy</td><td className="px-4 py-3 text-gray-700">Putting your application on a server for others to use</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">Deterministic</td><td className="px-4 py-3 text-gray-700">Same input always produces same output</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">Environment Variable</td><td className="px-4 py-3 text-gray-700">A configuration value stored outside your code</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">Git</td><td className="px-4 py-3 text-gray-700">A version control system that tracks changes to code</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">GitHub</td><td className="px-4 py-3 text-gray-700">A website that hosts Git repositories</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">Hallucination</td><td className="px-4 py-3 text-gray-700">When an LLM makes up false information</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">Library</td><td className="px-4 py-3 text-gray-700">Pre-written code you can use in your project</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">LLM</td><td className="px-4 py-3 text-gray-700">Large Language Model—AI trained on text data</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">Local</td><td className="px-4 py-3 text-gray-700">Running on your own computer</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">Prompt</td><td className="px-4 py-3 text-gray-700">The text you send to an LLM</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">Repository</td><td className="px-4 py-3 text-gray-700">A project folder tracked by Git</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">Server</td><td className="px-4 py-3 text-gray-700">A computer that runs 24/7 and serves requests</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">Token</td><td className="px-4 py-3 text-gray-700">A piece of text (~3/4 of a word) that LLMs process</td></tr>
                <tr><td className="px-4 py-3 text-gray-700 font-semibold">Virtual Environment</td><td className="px-4 py-3 text-gray-700">An isolated Python environment for a project</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 11: What's Next */}
      <ScrollAnimation animation="slide-left" delay={100}>
        <section id="whats-next" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">11</span>
            <span>What&apos;s Next?</span>
          </h2>

          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            You now have the foundation. You can set up a development environment, build simple AI applications, deploy them for others to use, and make informed decisions about when to use AI.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Part 2 Will Cover:</h3>
          <ul className="list-disc list-inside mb-8 space-y-3 text-lg md:text-xl text-gray-700">
            <li><strong>Pydantic models</strong> — Structured data validation</li>
            <li><strong>Pydantic AI</strong> — Building agents with tools</li>
            <li><strong>The 3-Layer Architecture</strong> — Agent → Service → Interface</li>
            <li><strong>Multi-agent systems</strong> — Specialized agents working together</li>
            <li><strong>Production patterns</strong> — Making applications reliable</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Keep Building</h3>
          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700">
            The best way to learn is to build things. Ideas to try:
          </p>
          <ul className="list-disc list-inside mb-8 space-y-2 text-lg md:text-xl text-gray-700">
            <li>Modify your chatbot to focus on a specific topic</li>
            <li>Add a feature to export conversations</li>
            <li>Build a simple data dashboard</li>
            <li>Create a tool that summarizes documents</li>
          </ul>

          <div className="success-box">
            <p className="font-semibold mb-2">Ready for More?</p>
            <p>Every project teaches you something new. Start small, iterate, and don&apos;t be afraid to break things. Good luck!</p>
          </div>
        </section>
      </ScrollAnimation>
    </GuideLayout>
  );
}
