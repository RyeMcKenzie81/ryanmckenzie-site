import GuideLayout from "@/components/GuideLayout";
import ScrollAnimation from "@/components/ScrollAnimation";
import TableOfContents from "@/components/TableOfContents";

const sections = [
  { id: "what-is-automation", title: "What is automation?", number: "1" },
  { id: "what-is-n8n", title: "What is n8n?", number: "2" },
  { id: "understanding-nodes", title: "Understanding Nodes & Language", number: "3" },
  { id: "map-automation", title: "How to Map Out Your Automation", number: "4" },
  { id: "before-start", title: "Before you start (checklist)", number: "5" },
  { id: "first-5-minutes", title: "Your first 5 minutes in n8n", number: "6" },
  { id: "recipe-1", title: "Recipe #1 — New Shopify Order → Google Sheet", number: "7" },
  { id: "recipe-2", title: "Recipe #2 — Low Inventory Alert", number: "8" },
  { id: "recipe-3", title: "Recipe #3 — New Customer Welcome Email", number: "9" },
  { id: "recipe-4", title: "Recipe #4 — High-Value Customer Tag", number: "10" },
  { id: "think-automator", title: "How to think like an automator", number: "11" },
  { id: "credentials", title: "Credentials and API Keys", number: "12" },
  { id: "testing", title: "Testing: how to avoid breaking stuff", number: "13" },
  { id: "debugging", title: "Debugging: when something fails", number: "14" },
  { id: "housekeeping", title: "Good housekeeping", number: "15" },
  { id: "pitfalls", title: "Common Pitfalls", number: "16" },
  { id: "monitoring", title: "Monitoring & Alerts", number: "17" },
  { id: "approval", title: "Approval & Governance", number: "18" },
  { id: "what-not", title: "What not to automate (yet)", number: "19" },
  { id: "next-30-days", title: "Your next 30 days", number: "20" },
  { id: "glossary", title: "Glossary", number: "21" },
  { id: "faq", title: "FAQ", number: "22" },
  { id: "appendix", title: "Appendix — Mini-recipes", number: "23" },
];

export default function AutomatingWorkflowsGuide() {
  return (
    <GuideLayout
      title="Beginner's Guide to Automating Workflows (for Ecommerce) — with n8n"
      description="Help a total beginner set up small, useful automations that save time"
      readTime="20 min"
      tableOfContents={<TableOfContents sections={sections} />}
    >
      <ScrollAnimation animation="fade-in">
        <div className="bg-gradient-to-br from-cyan-50 to-pink-50 border-2 border-transparent bg-clip-padding rounded-xl pt-1 px-4 pb-4 mb-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 opacity-20 rounded-xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
              🚀 What You'll Learn
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              This guide will take you from complete beginner to confidently building time-saving automations for your ecommerce business. No technical background required.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-cyan-700">📦 What's Included:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 text-lg">✨</span>
                    <span>Step-by-step setup and first automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 text-lg">⚡</span>
                    <span>4 ready-to-use automation recipes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 text-lg">🔧</span>
                    <span>Testing, debugging, and monitoring tips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 text-lg">🛡️</span>
                    <span>Common pitfalls and how to avoid them</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-pink-700">🎯 By The End, You'll Be Able To:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1 text-lg">📊</span>
                    <span>Automatically log orders to Google Sheets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1 text-lg">📢</span>
                    <span>Send low inventory alerts to your team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1 text-lg">💌</span>
                    <span>Welcome new customers with personalized emails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1 text-lg">⭐</span>
                    <span>Identify and tag high-value customers</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-100 to-pink-100 rounded-lg p-4 border-l-4 border-gradient-to-b border-cyan-500">
              <p className="text-sm text-gray-700">
                <span className="font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">⏱️ Time commitment:</span> 20 minutes to read, 1-2 hours to implement your first automation
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

      <ScrollAnimation animation="fade-in" delay={200}>
        <section id="what-is-automation" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">1</span>
            <span>What is "automation"?</span>
          </h2>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            Automation is when you teach the computer to do a repetitive job <strong>for you</strong>. 
            You show it the steps <strong>one time</strong>, and then it repeats those steps <strong>every time</strong> something happens.
          </p>
          <ul className="list-disc list-inside mb-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Example: "When a new order comes in, add it to a Google Sheet."</li>
            <li>You don't click anything. The automation tool (n8n) does it.</li>
          </ul>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            Think of n8n as building blocks. Each block does one job. You connect the blocks to create a process.
          </p>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-left" delay={100}>
        <section id="what-is-n8n" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">2</span>
            <span>What is n8n?</span>
          </h2>
          <ul className="list-disc list-inside mb-8 space-y-3 text-lg md:text-xl text-gray-700">
            <li>n8n is a tool that connects your apps (Shopify, Gmail, Slack, Klaviyo, Google Sheets, etc.).</li>
            <li>You drop "nodes" on a canvas and connect them with arrows. Each node is a building block.</li>
            <li>n8n can run <strong>in the cloud</strong> or <strong>on your company's server</strong>.</li>
          </ul>
          
          <div className="highlight-box">
            <h3 className="font-semibold text-xl mb-4 text-gray-900">Words you'll see:</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li><strong>Workflow</strong> = The entire process you build</li>
              <li><strong>Trigger</strong> = What starts the workflow (e.g., "New Shopify Order")</li>
              <li><strong>Node</strong> = A block that does a job (e.g., "Send Slack Message")</li>
              <li><strong>Credential</strong> = A safe key so n8n can log in to your apps</li>
              <li><strong>Execution</strong> = One run of the workflow (e.g., processing one order)</li>
            </ul>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-right" delay={100}>
        <section id="understanding-nodes" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">3</span>
            <span>n8n for Beginners: Understanding Nodes & Language</span>
          </h2>
          <p className="mb-8 text-lg md:text-xl text-gray-700">
            Think of <strong>nodes</strong> as steps in a process. Different types of nodes = different jobs.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">Node Types</h3>
          <div className="space-y-4 mb-10">
            <ScrollAnimation animation="fade-in" delay={200}>
              <div className="border-l-4 border-green-500 bg-green-50 pl-6 pr-6 py-5 rounded-r-lg">
                <p className="text-lg md:text-xl text-gray-900"><strong>Trigger Nodes:</strong> Start the workflow. Example: "New Shopify Order" or "Every day at 8am."</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" delay={300}>
              <div className="border-l-4 border-blue-500 bg-blue-50 pl-6 pr-6 py-5 rounded-r-lg">
                <p className="text-lg md:text-xl text-gray-900"><strong>Action Nodes:</strong> Perform an action. Example: "Add a row to Google Sheets" or "Send Slack message."</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" delay={400}>
              <div className="border-l-4 border-purple-500 bg-purple-50 pl-6 pr-6 py-5 rounded-r-lg">
                <p className="text-lg md:text-xl text-gray-900"><strong>Logic Nodes:</strong> Make decisions. Example: "IF order total &gt; $100, then do this, else do that."</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" delay={500}>
              <div className="border-l-4 border-yellow-500 bg-yellow-50 pl-6 pr-6 py-5 rounded-r-lg">
                <p className="text-lg md:text-xl text-gray-900"><strong>Transform Nodes:</strong> Clean up or change data. Example: Rename fields, combine text, or do math.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" delay={600}>
              <div className="border-l-4 border-red-500 bg-red-50 pl-6 pr-6 py-5 rounded-r-lg">
                <p className="text-lg md:text-xl text-gray-900"><strong>Code Nodes</strong> (optional): Small scripts for special cases. Example: Format a date exactly the way you want.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in" delay={700}>
              <div className="border-l-4 border-gray-500 bg-gray-50 pl-6 pr-6 py-5 rounded-r-lg">
                <p className="text-lg md:text-xl text-gray-900"><strong>Helpers:</strong> Tools like Wait (pause), Merge (combine paths), or Error handling.</p>
              </div>
            </ScrollAnimation>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">Key Words</h3>
          <ul className="list-disc list-inside space-y-3 text-lg md:text-xl text-gray-700">
            <li><strong>Workflow</strong> = The complete process you build</li>
            <li><strong>Execution</strong> = One run of that workflow (like one order processed)</li>
            <li><strong>Credentials</strong> = Secure logins/keys so the workflow can access apps</li>
            <li><strong>Webhook</strong> = A signal that rings when something happens</li>
            <li><strong>JSON</strong> = A structured way to pack data, like a labeled container</li>
          </ul>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in" delay={100}>
        <section id="map-automation" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">4</span>
            <span>How to Map Out Your Automation (Before Building)</span>
          </h2>
          <p className="mb-6 text-lg md:text-xl text-gray-700">
            If you can write down the steps you do by hand, you can probably automate them.
          </p>
          
          <div className="info-box">
            <h3 className="font-semibold text-xl mb-4 text-gray-900">Example: Adding new orders to a spreadsheet</h3>
            <ol className="list-decimal list-inside space-y-2 mb-6 text-lg text-gray-700">
              <li>Open Shopify</li>
              <li>Copy order details</li>
              <li>Open Google Sheets</li>
              <li>Paste details in a new row</li>
            </ol>
            
            <p className="font-semibold mb-3 text-lg text-gray-900">Automation version:</p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li><strong>Trigger:</strong> New Shopify order</li>
              <li><strong>Action:</strong> Send order details to Google Sheets → Add row</li>
            </ul>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold mb-6 mt-10 text-gray-900">Steps to Map:</h3>
          <ol className="list-decimal list-inside space-y-3 mb-8 text-lg md:text-xl text-gray-700">
            <li><strong>Start:</strong> What kicks it off? (New order? Daily check?)</li>
            <li><strong>Middle:</strong> What actions do you take by hand? (Copy, paste, check totals, send message)</li>
            <li><strong>Decisions:</strong> Do you sometimes do A, sometimes B? (IF order is &gt; $100, then…)</li>
            <li><strong>End:</strong> What's the result? (Data in Sheet, email sent, Slack ping)</li>
          </ol>
          
          <div className="success-box">
            <p className="font-semibold text-lg text-gray-900">💡 Tip:</p>
            <p className="text-lg text-gray-700">Draw it on paper first. Triggers → Actions → Decisions → Result.</p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="scale" delay={100}>
        <section id="before-start" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">5</span>
            <span>Before you start (checklist)</span>
          </h2>
          <ul className="space-y-3 mb-8 text-lg md:text-xl text-gray-700">
            <li>✅ You can log in to n8n</li>
            <li>✅ You know where your data lives (Shopify? Google Sheets? Klaviyo?)</li>
            <li>✅ You have API keys or logins for those tools</li>
            <li>✅ You know what problem you're solving (start small!)</li>
          </ul>
          
          <div className="warning-box">
            <p className="font-semibold mb-4 text-xl text-gray-900">Pick one starter goal:</p>
            <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700">
              <li>Add every new order to a spreadsheet</li>
              <li>Send me a Slack message when inventory is low</li>
              <li>Email a new customer a welcome message</li>
            </ol>
            <p className="mt-6 text-base font-semibold text-gray-900">Start with <strong>one</strong>. Don't do all three at once.</p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in" delay={100}>
        <section id="first-5-minutes" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">6</span>
            <span>Your first 5 minutes in n8n</span>
          </h2>
          <ol className="list-decimal list-inside space-y-4 mb-8 text-lg md:text-xl text-gray-700">
            <li>Log in → Click <strong>"Workflows"</strong> → <strong>"New"</strong></li>
            <li>You will see a blank canvas with a <strong>Start</strong> node</li>
            <li>Click <strong>"+"</strong> to add a node → search for your app (e.g., <strong>Shopify</strong>)</li>
            <li>Choose a <strong>Trigger</strong> node if you want "wake up when X happens"</li>
            <li>Add another node that does something (e.g., <strong>Google Sheets → Add Row</strong>)</li>
            <li>Draw an arrow from the Trigger to the Action node</li>
            <li>Click <strong>Execute Workflow</strong> or <strong>Activate</strong> to make it live</li>
          </ol>
          
          <div className="success-box">
            <p className="text-lg md:text-xl text-gray-700">💡 Tip: If you can do it by hand in 3–4 clicks, it's a great first automation.</p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-left" delay={100}>
        <section id="recipe-1" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">7</span>
            <span>Recipe #1 — New Shopify Order → Google Sheet</span>
          </h2>
          <p className="mb-6 text-lg md:text-xl text-gray-700">
            <strong>What this does:</strong> Every time an order is created, n8n adds a row to a sheet.
          </p>
          
          <div className="highlight-box">
            <h3 className="font-semibold mb-4 text-xl text-gray-900">You need:</h3>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
              <li>A Google Sheet with column headers like: <code className="bg-gray-200 px-2 py-1 rounded text-base">Order Number | Date | Email | Total | Line Items</code></li>
              <li>Shopify admin access</li>
            </ul>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold mb-6 mt-10 text-gray-900">Steps:</h3>
          <ol className="list-decimal list-inside space-y-4 mb-8 text-lg md:text-xl text-gray-700">
            <li><strong>Node 1:</strong> <em>Shopify Trigger</em> → Event: <strong>New Order</strong></li>
            <li><strong>Node 2:</strong> <em>Set</em> → Choose only the fields you want to save (clean data)
              <ul className="list-disc list-inside ml-6 mt-3">
                <li>Map: <code>order_number</code>, <code>created_at</code>, <code>customer.email</code>, <code>total_price</code>, and join line items into one string</li>
              </ul>
            </li>
            <li><strong>Node 3:</strong> <em>Google Sheets → Append</em> → Pick your spreadsheet & tab</li>
            <li>Test: Create a test order in Shopify (or run an example order) → Check your sheet</li>
            <li>Turn the workflow <strong>ON</strong> (Activate)</li>
          </ol>
          
          <div className="info-box">
            <p className="font-semibold text-lg text-gray-900">Why this is good:</p>
            <p className="text-lg text-gray-700">You get a simple, always-updated order log for quick checks or reports.</p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-right" delay={100}>
        <section id="recipe-2" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">8</span>
            <span>Recipe #2 — Low Inventory Alert (Shopify → Slack)</span>
          </h2>
          <p className="mb-6 text-lg md:text-xl text-gray-700">
            <strong>What this does:</strong> When a product's stock is low, you get a Slack message.
          </p>
          
          <div className="highlight-box">
            <h3 className="font-semibold mb-4 text-xl text-gray-900">You need:</h3>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
              <li>A Slack channel like <code>#ops-alerts</code></li>
              <li>Decide your low-stock number (e.g., 5 units)</li>
            </ul>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold mb-6 mt-10 text-gray-900">Steps:</h3>
          <ol className="list-decimal list-inside space-y-4 mb-8 text-lg md:text-xl text-gray-700">
            <li><strong>Node 1:</strong> <em>Cron</em> → Runs every morning at 8am</li>
            <li><strong>Node 2:</strong> <em>Shopify → List Products</em> (include inventory)</li>
            <li><strong>Node 3:</strong> <em>IF</em> → Condition: <code>inventory_quantity &lt;= 5</code></li>
            <li><strong>Node 4:</strong> <em>Slack → Send Message</em> → "⚠️ Low stock: {'{{product_title}}'} ({'{{inventory_quantity}}'} left)"</li>
          </ol>
          
          <div className="info-box">
            <p className="font-semibold text-lg text-gray-900">Why this is good:</p>
            <p className="text-lg text-gray-700">You won't forget to reorder. Stockouts hurt sales.</p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-right" delay={100}>
        <section id="recipe-3" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">9</span>
            <span>Recipe #3 — New Customer Welcome Email</span>
          </h2>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            <strong>What this does:</strong> Sends a friendly welcome email when someone places their first order.
          </p>
          <div className="highlight-box mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">You need:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>A welcome template in Klaviyo or Mailchimp</li>
            </ul>
          </div>
          <div className="highlight-box mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Steps:</h3>
            <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700">
              <li><strong>Node 1:</strong> <em>Shopify Trigger → New Order</em></li>
              <li><strong>Node 2:</strong> <em>IF</em> → Is this the customer's <strong>first</strong> order? (check <code>customer.orders_count == 1</code>)</li>
              <li><strong>Node 3:</strong> <em>Klaviyo → Add/Update Profile</em> with customer email & name</li>
              <li><strong>Node 4:</strong> <em>Klaviyo → Trigger Flow/Event</em> (e.g., <code>Welcome_Series</code>)</li>
            </ol>
          </div>
          <div className="success-box">
            <p className="text-lg text-gray-700">
              <strong>Why this is good:</strong> New buyers are excited. A fast "Hello + Tips" email boosts repeat sales.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-left" delay={100}>
        <section id="recipe-4" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">10</span>
            <span>Recipe #4 — High-Value Customer Tag</span>
          </h2>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            <strong>What this does:</strong> Automatically tag customers who spend a lot (e.g., AOV &gt; $150).
          </p>
          <div className="highlight-box mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Steps:</h3>
            <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700">
              <li><strong>Node 1:</strong> <em>Shopify Trigger → New Order</em></li>
              <li><strong>Node 2:</strong> <em>IF</em> → <code>total_price &gt; 150</code></li>
              <li><strong>Node 3:</strong> <em>Shopify → Update Customer</em> (add tag <code>VIP</code>)</li>
              <li><strong>Node 4:</strong> <em>Slack → Send Message</em> to #sales: &ldquo;🎉 New VIP: {`{{email}}`} — ${`{{total_price}}`}&rdquo;</li>
            </ol>
          </div>
          <div className="success-box">
            <p className="text-lg text-gray-700">
              <strong>Why this is good:</strong> Ops + support can give white-glove help. Marketing can send special offers.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in" delay={100}>
        <section id="think-automator" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">11</span>
            <span>How to think like an automator</span>
          </h2>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            Simple framework:
          </p>
          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-cyan-500 bg-cyan-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>1. Trigger:</strong> When should this start?</p>
            </div>
            <div className="border-l-4 border-pink-500 bg-pink-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>2. Filter:</strong> Which items should pass? (IF node)</p>
            </div>
            <div className="border-l-4 border-cyan-500 bg-cyan-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>3. Transform:</strong> What fields do I need? (Set node, Code node if needed)</p>
            </div>
            <div className="border-l-4 border-pink-500 bg-pink-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>4. Action:</strong> What should happen? (Write row, send email, post to Slack)</p>
            </div>
            <div className="border-l-4 border-cyan-500 bg-cyan-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>5. Notify:</strong> Who needs to know? (Slack/Email)</p>
            </div>
            <div className="border-l-4 border-pink-500 bg-pink-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>6. Log:</strong> Did it work? Where can I see runs? (Executions)</p>
            </div>
          </div>
          <div className="info-box">
            <p className="text-lg text-gray-700">
              If you can explain your flow in these 6 steps, you can build it.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-right" delay={100}>
        <section id="credentials" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">12</span>
            <span>Credentials and API Keys — Keep Them Safe</span>
          </h2>
          <div className="highlight-box mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">What is an API key?</h3>
            <p className="text-lg text-gray-700 mb-3">
              An API key is like a password that lets n8n access another app (Shopify, Google, Slack).
            </p>
            <p className="text-lg text-gray-700">
              Each app may have its own key. Without it, n8n can't talk to that app.
            </p>
          </div>
          <div className="warning-box mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Best Practices:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li><strong>Never share keys</strong> in chat, email, or documents</li>
              <li><strong>Store keys only in n8n's Credentials manager</strong> - keeps them encrypted and secure</li>
              <li><strong>Use least privilege</strong> - only give access to what's needed</li>
              <li><strong>Rotate keys regularly</strong> - replace old keys every 3–6 months</li>
              <li><strong>Know who owns keys</strong> - only certain roles should create or manage them</li>
              <li><strong>Audit access</strong> - track which workflows use which keys</li>
            </ul>
          </div>
          <div className="success-box">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Quick Checklist:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>Do I need this key, or can I use an existing one?</li>
              <li>Am I storing it in n8n only?</li>
              <li>Does this key give too much power? Can I limit it?</li>
              <li>Is there a reminder to update/rotate it?</li>
            </ul>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-left" delay={100}>
        <section id="testing" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">13</span>
            <span>Testing: how to avoid breaking stuff</span>
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Use <strong>test data</strong> first (dummy orders)</li>
            <li>Add a <strong>NoOp</strong> path at the end (e.g., log to Sheet, not Shopify) while testing</li>
            <li>Use <strong>IF</strong> nodes to limit scope (e.g., only orders over $0.01)</li>
            <li>Check <strong>Executions</strong> in n8n to see each step's input/output</li>
          </ul>
          <div className="warning-box">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Safety net:</h3>
            <p className="text-lg text-gray-700">
              If your action changes data (like "Update Product"), test on a <strong>sandbox</strong> store or a fake product.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-right" delay={100}>
        <section id="debugging" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">14</span>
            <span>Debugging: when something fails</span>
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Open the failed <strong>Execution</strong> → Look for the first red node</li>
            <li>Read the <strong>error message</strong> (copy it into the ticket/Slack)</li>
          </ul>
          <div className="highlight-box">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Common fixes:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li><strong>Wrong credentials</strong> → Reconnect</li>
              <li><strong>Missing field name</strong> → Check the exact API field (e.g., <code>customer.email</code>)</li>
              <li><strong>Rate limits</strong> → Add a <strong>Wait</strong> node (e.g., 200ms between items)</li>
              <li><strong>Empty data</strong> → Add an <strong>IF</strong> to skip empties</li>
            </ul>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-left" delay={100}>
        <section id="housekeeping" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">15</span>
            <span>Good housekeeping</span>
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li><strong>Name nodes clearly</strong> (e.g., <code>Set → Order Summary</code>)</li>
            <li><strong>Add notes</strong> on the canvas: why this flow exists</li>
            <li><strong>Version control:</strong> Duplicate a workflow before big edits (<code>My Flow v2</code>)</li>
            <li><strong>Owner + Backup:</strong> Who owns it? Where's the export file?</li>
          </ul>
          <div className="info-box">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Simple naming rules:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li><code>shopify-new-order → gsheets-order-log</code></li>
              <li><code>daily-8am-low-stock-check → slack-alert</code></li>
            </ul>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-right" delay={100}>
        <section id="pitfalls" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">16</span>
            <span>Common Pitfalls (and How to Avoid Them)</span>
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 bg-red-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>Workflow not activated</strong> → Always double-check the "Active" toggle is on</p>
            </div>
            <div className="border-l-4 border-orange-500 bg-orange-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>Field name mismatch</strong> → Verify the exact field name (<code>customer.email</code> vs <code>email</code>)</p>
            </div>
            <div className="border-l-4 border-yellow-500 bg-yellow-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>Rate limits</strong> → Add Wait nodes or batch requests when possible</p>
            </div>
            <div className="border-l-4 border-red-500 bg-red-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>Infinite loops</strong> → Be careful with triggers and actions that feed into each other</p>
            </div>
            <div className="border-l-4 border-purple-500 bg-purple-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>Testing in production</strong> → Use sandbox/test data before touching live systems</p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-left" delay={100}>
        <section id="monitoring" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">17</span>
            <span>Monitoring & Alerts</span>
          </h2>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            Automations can fail silently if not monitored.
          </p>
          <div className="highlight-box mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Best Practices:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>Add a Slack or Email notification when a workflow errors</li>
              <li>Use n8n's built-in error workflows to catch failures</li>
              <li>Schedule weekly checks of the Executions list</li>
            </ul>
          </div>
          <div className="info-box">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Example:</h3>
            <p className="text-lg text-gray-700">
              Workflow A fails → Error workflow triggers → Slack message to #automation-alerts: "Order export failed, check workflow."
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-right" delay={100}>
        <section id="approval" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">18</span>
            <span>Approval & Governance</span>
          </h2>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            Before turning on new workflows, it's best to have a simple approval process.
          </p>
          <div className="highlight-box mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Suggested Steps:</h3>
            <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700">
              <li>Write a short description of the workflow (what it does, which data it touches)</li>
              <li>Identify the apps/credentials used</li>
              <li>Confirm it's safe (no risk to finance/legal data)</li>
              <li>Manager or designated approver signs off</li>
            </ol>
          </div>
          <div className="success-box">
            <p className="text-lg text-gray-700">
              <strong>Why:</strong> Ensures accountability, avoids surprises, and keeps workflows aligned with company rules.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-left" delay={100}>
        <section id="what-not" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">19</span>
            <span>What not to automate (yet)</span>
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Anything with legal/finance risk until reviewed</li>
            <li>Big, messy flows with 20+ steps (split into small flows)</li>
            <li>Human judgment decisions (let a person click "Approve" first)</li>
          </ul>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-right" delay={100}>
        <section id="next-30-days" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">20</span>
            <span>Your next 30 days (mini roadmap)</span>
          </h2>
          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-cyan-500 bg-cyan-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>Week 1:</strong> Build one small workflow (Recipe #1)</p>
            </div>
            <div className="border-l-4 border-pink-500 bg-pink-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>Week 2:</strong> Add one alert (Recipe #2)</p>
            </div>
            <div className="border-l-4 border-cyan-500 bg-cyan-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>Week 3:</strong> Add one customer touchpoint (Recipe #3)</p>
            </div>
            <div className="border-l-4 border-pink-500 bg-pink-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>Week 4:</strong> Add one enrichment or tag (Recipe #4)</p>
            </div>
          </div>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Take screenshots of each finished flow → add to our shared wiki.
          </p>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in" delay={100}>
        <section id="glossary" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">21</span>
            <span>Glossary (beginner-friendly)</span>
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-gray-300 bg-gray-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>API:</strong> A way for apps to talk to each other</p>
            </div>
            <div className="border-l-4 border-gray-300 bg-gray-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>Webhook:</strong> A signal that rings when something happens</p>
            </div>
            <div className="border-l-4 border-gray-300 bg-gray-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>JSON:</strong> A structured way to pack data, like a labeled container</p>
            </div>
            <div className="border-l-4 border-gray-300 bg-gray-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>Cron:</strong> A clock that says "run at this time"</p>
            </div>
            <div className="border-l-4 border-gray-300 bg-gray-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900"><strong>Rate limit:</strong> When an app says "Too many requests, slow down!"</p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-left" delay={100}>
        <section id="faq" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number pink flex-shrink-0">22</span>
            <span>FAQ (for beginners)</span>
          </h2>
          <div className="space-y-6">
            <div className="highlight-box">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Q: Do I need to code?</h3>
              <p className="text-lg text-gray-700">
                A: No. Drag blocks. Sometimes a tiny script helps, but you can start with zero code.
              </p>
            </div>
            <div className="highlight-box">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Q: What if I mess up?</h3>
              <p className="text-lg text-gray-700">
                A: Test first, use sandboxes, and don't connect destructive nodes until you're sure.
              </p>
            </div>
            <div className="highlight-box">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Q: How do I share my flow?</h3>
              <p className="text-lg text-gray-700">
                A: Export it from n8n or clone it inside the app.
              </p>
            </div>
            <div className="highlight-box">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Q: Can one flow trigger another?</h3>
              <p className="text-lg text-gray-700">
                A: Yes—use Webhook nodes or the n8n "Execute Workflow" node.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-right" delay={100}>
        <section id="appendix" className="mb-20">
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <span className="section-number flex-shrink-0">23</span>
            <span>Appendix — Mini-recipes</span>
          </h2>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
            Add-on mini-recipes (copy/paste patterns):
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-cyan-500 bg-cyan-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900">
                <strong>Only notify on big orders:</strong> IF <code>total_price &gt;= 200</code> &rarr; Slack
              </p>
            </div>
            <div className="border-l-4 border-pink-500 bg-pink-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900">
                <strong>Tag products when stock hits zero:</strong> Cron &rarr; Shopify list &rarr; IF qty==0 &rarr; Update product tag <code>OOS</code>
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 bg-cyan-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900">
                <strong>Daily sales summary:</strong> Cron 6pm &rarr; Shopify orders today &rarr; Sum total &rarr; Slack &ldquo;Today&rsquo;s sales: $X&rdquo;
              </p>
            </div>
            <div className="border-l-4 border-pink-500 bg-pink-50 pl-6 pr-6 py-4 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-900">
                <strong>Refund alert:</strong> Shopify refund trigger &rarr; Slack + add row to Refunds sheet
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </GuideLayout>
  );
}