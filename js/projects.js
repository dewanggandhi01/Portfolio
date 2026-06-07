// Projects data for the portfolio
const projectsData = [
  {
    id: 1,
    title: "e-Raksha Setu (Smart Tourist Safety App)",
    category: "ai",
    tech: "Android Studio, Expo, Blockchain, AI, ML",
    description: "Fully functional mobile app for tourist safety using AI, geo-fencing, ML risk prediction, and blockchain-based Digital Tourist IDs.",
    longDescription: `
      <p>A comprehensive smart tourist safety application built for Android that leverages cutting-edge technologies to ensure tourist security and enable rapid emergency response.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li>AI-powered geo-fencing with real-time monitoring and alerts</li>
        <li>ML-based risk prediction using weather, terrain, and historical data</li>
        <li>Blockchain-based Digital Tourist IDs (DID) for tamper-proof identification</li>
        <li>Offline vector mesh maps for low-network zones</li>
        <li>Automated SOS system with immediate alert dispatch</li>
        <li>Real-time location tracking with speed monitoring</li>
        <li>Emergency contact integration and panic button</li>
      </ul>
      
      <h4>Admin Dashboards:</h4>
      <ul>
        <li>Police Dashboard: Heat maps, alert tracking, E-FIR automation</li>
        <li>Tourism Department Dashboard: Route analytics and safety insights</li>
        <li>Secure log retrieval via DID ensuring data integrity</li>
        <li>Real-time monitoring of all registered tourists</li>
      </ul>
      
      <h4>Impact:</h4>
      <p>Enhances tourist security, boosts tourism confidence, enables rapid emergency response, and provides data-driven safety analytics.</p>
    `,
    tags: ["Android", "Blockchain", "AI", "ML", "React Native"],
    links: {
      github: "https://github.com/dewanggandhi01/e-Raksha-Setu",
      demo: "#"
    },
    year: "2025"
  },
  {
    id: 2,
    title: "Data Analyst Agent",
    category: "ai",
    tech: "Python, FastAPI, LangChain, Generative AI",
    description: "AI-powered data companion that processes datasets through natural language queries with end-to-end ML pipeline.",
    longDescription: `
      <p>An AI-driven data analysis agent that processes datasets through natural language queries, making data analytics accessible to everyone.</p>
      
      <h4>Features:</h4>
      <ul>
        <li>Natural language query processing like "Show me monthly sales trends"</li>
        <li>Integrated visualization with Seaborn, Matplotlib</li>
        <li>Web scraping and multi-format data support (CSV, Excel, JSON, Parquet, TXT)</li>
        <li>End-to-end ML pipeline with Generative AI automation</li>
        <li>API-based workflows for seamless integration</li>
        <li>Automatic data cleaning and anomaly detection</li>
        <li>Human-readable insights generation</li>
      </ul>
      
      <h4>Technical Implementation:</h4>
      <p>Built using LangChain for prompt chaining, FastAPI for backend services, and advanced visualization libraries for data representation.</p>
    `,
    tags: ["Python", "AI", "Data Science", "FastAPI", "LangChain"],
    links: {
      github: "https://github.com/dewanggandhi01/AI-Agent",
      demo: "https://ai-agent-duvu.onrender.com/"
    },
    year: "2025"
  },
  {
    id: 3,
    title: "Virtual Teaching Assistant",
    category: "ai",
    tech: "LLMs, Web API, Web Scraping, OpenAI",
    description: "AI chatbot assistant for IIT Madras Data Science course with multimodal query parsing and LLM-based responses.",
    longDescription: `
      <p>A sophisticated virtual Teaching Assistant API designed specifically for IIT Madras's Data Science learners.</p>
      
      <h4>Capabilities:</h4>
      <ul>
        <li>Answers student queries using scraped data from IITM's TDS forum and course notes</li>
        <li>Multimodal query parsing (text + screenshots)</li>
        <li>LLM-based responses with reference links</li>
        <li>Lecture summarization and assignment explanations</li>
        <li>Interactive topic-specific doubt resolution</li>
        <li>Evaluation via promptfoo tests for quality assurance</li>
      </ul>
      
      <h4>Impact:</h4>
      <p>Improves student engagement, accessibility of learning materials, and enables efficient self-paced learning.</p>
    `,
    tags: ["LLM", "OpenAI", "Web Scraping", "Education", "API"],
    links: {
      github: "https://github.com/dewanggandhi01/TDS-Project-1",
      demo: "#"
    },
    year: "2025"
  },
  {
    id: 4,
    title: "Synapse AI - LLM Agent Platform",
    category: "ai",
    tech: "JavaScript, OpenAI API, AI Pipe, Bootstrap",
    description: "Multi-tool reasoning LLM agent with Google Search, AI integration, and responsive multi-theme UI.",
    longDescription: `
      <p>Synapse AI is a powerful LLM Agent Platform that enables users to create custom AI agents for task automation and workflow management.</p>
      
      <h4>Features:</h4>
      <ul>
        <li>Multi-tool reasoning LLM agent integration</li>
        <li>Google Search and sandboxed JavaScript execution</li>
        <li>Responsive multi-theme UI (Light, Dark, Cyberpunk, Glass)</li>
        <li>Real-time streaming chat interface</li>
        <li>OpenAI function calling for dynamic responses</li>
        <li>AI Pipes for connecting reasoning steps</li>
        <li>Multi-agent collaboration workflows</li>
      </ul>
      
      <h4>Use Cases:</h4>
      <p>Automates text summarization, research tasks, code generation, and complex workflow orchestration.</p>
    `,
    tags: ["JavaScript", "OpenAI", "LLM", "UI/UX", "Automation"],
    links: {
      github: "https://github.com/dewanggandhi01/SynapseAI-LLM-Agent",
      demo: "#"
    },
    year: "2025"
  },
  {
    id: 5,
    title: "AI Integration Toolkit",
    category: "automation",
    tech: "TypeScript, React, Node.js, OpenAI API",
    description: "NPM package for integrating LLM-powered automation into web apps through plug-and-play agents.",
    longDescription: `
      <p>A modular AI integration toolkit that enables developers to add AI capabilities to web applications through intelligent automation agents.</p>
      
      <h4>Architecture:</h4>
      <ul>
        <li><strong>Agents:</strong> contentAgent.ts, ecommerceAgent.ts, formAgent.ts, navigationAgent.ts</li>
        <li><strong>Utilities:</strong> domInteractor.ts, formFiller.ts, cartManager.ts, checkoutFlow.ts</li>
        <li>Intelligent DOM analysis and action prediction using LLMs</li>
        <li>Natural language command processing</li>
        <li>Automated form filling and e-commerce actions</li>
      </ul>
      
      <h4>Example Usage:</h4>
      <p>Users can type "Add this product to cart and checkout" - the toolkit parses intent and executes the action seamlessly.</p>
      
      <h4>Impact:</h4>
      <p>Simplifies AI-powered automation for web apps and boosts accessibility and productivity for developers.</p>
    `,
    tags: ["TypeScript", "React", "AI", "Automation", "NPM"],
    links: {
      github: "https://github.com/dewanggandhi01/ai-integration-toolkit",
      demo: "#"
    },
    year: "2025"
  },
  {
    id: 6,
    title: "Gandhi Traders Business Analysis",
    category: "data",
    tech: "Excel, Data Analysis, ETL, Power BI",
    description: "Digital transformation project analyzing 20+ days of sales data with inventory optimization strategies.",
    longDescription: `
      <p>A comprehensive business digitization project for Gandhi Traders, a wholesale clothing and undergarments shop in Aligarh.</p>
      
      <h4>Data Collection & Analysis:</h4>
      <ul>
        <li>Manual data collection over 20 days</li>
        <li>Inventory lists, item sizes, prices, sales, and order logs</li>
        <li>ETL operations using Excel for data transformation</li>
        <li>Best-selling products and sizes identification</li>
        <li>Seasonal demand trend analysis</li>
        <li>Customer order frequency patterns</li>
        <li>Stock management efficiency metrics</li>
      </ul>
      
      <h4>Key Achievements:</h4>
      <ul>
        <li>Proposed optimization strategies reducing excess stock by 18%</li>
        <li>Improved purchase efficiency by 12%</li>
        <li>Automated billing and inventory tracking recommendations</li>
        <li>Data-driven decision framework implementation</li>
      </ul>
      
      <h4>Impact:</h4>
      <p>Modernized local business operations and provided a foundation for data-driven business growth.</p>
    `,
    tags: ["Data Analysis", "Excel", "Business Intelligence", "ETL"],
    links: {
      github: "https://github.com/dewanggandhi01/Business-Data-Management-Gandhi-Traders",
      demo: "#"
    },
    year: "2025"
  },
  {
    id: 7,
    title: "Kaggle Machine Learning Projects",
    category: "data",
    tech: "Python, Scikit-learn, XGBoost, Pandas, Matplotlib",
    description: "Multiple Kaggle competitions with top 25% placements in regression, classification, and NLP challenges.",
    longDescription: `
      <p>A comprehensive collection of machine learning projects from various Kaggle competitions, demonstrating expertise across multiple domains.</p>
      
      <h4>Competition Performance:</h4>
      <ul>
        <li>Consistent top 25% placements across multiple competitions</li>
        <li>Regression challenges with advanced feature engineering</li>
        <li>Classification problems using ensemble methods</li>
        <li>Natural Language Processing competitions</li>
        <li>Time series forecasting challenges</li>
      </ul>
      
      <h4>Technical Approach:</h4>
      <ul>
        <li>Advanced feature engineering and selection techniques</li>
        <li>Hyperparameter tuning using GridSearch and RandomSearch</li>
        <li>Ensemble methods combining XGBoost, Random Forest, and Neural Networks</li>
        <li>Data visualization and exploratory data analysis</li>
        <li>Cross-validation strategies for robust model evaluation</li>
      </ul>
      
      <h4>Key Learning:</h4>
      <p>Developed expertise in ML pipelines, model optimization, and practical data science techniques for real-world problems.</p>
    `,
    tags: ["Machine Learning", "Python", "Kaggle", "Data Science"],
    links: {
      github: "https://github.com/dewanggandhi01/Machine-Learning-Practice-Assignments",
      demo: "#"
    },
    year: "2025"
  },
  {
    id: 8,
    title: "SwiftShare (DΞBO)",
    category: "web",
    tech: "Node.js, Express, Socket.IO, HTML/CSS/JS",
    description: "Full-stack zero-signup platform combining file sharing, PDF tools, real-time chat, language translation, media discovery, and multiplayer games.",
    image: "assets/swiftshare.png",
    longDescription: `
      <p>A full-stack web application that combines file sharing, PDF tooling, real-time chat, language translation, media discovery, and multiplayer games into a single, zero-signup platform. Built with Node.js, Express, and Socket.IO on the backend, with a vanilla HTML/CSS/JS frontend — no framework overhead, no build step.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li>Instant file sharing with no sign-up required</li>
        <li>Built-in PDF tooling — merge, split, compress, and convert</li>
        <li>Real-time chat powered by Socket.IO for live communication</li>
        <li>Language translation for cross-lingual collaboration</li>
        <li>Media discovery for finding and sharing content</li>
        <li>Multiplayer games for interactive engagement</li>
        <li>Zero framework overhead — vanilla HTML/CSS/JS frontend</li>
      </ul>
      
      <h4>Technical Architecture:</h4>
      <ul>
        <li><strong>Backend:</strong> Node.js + Express for server-side logic and API routing</li>
        <li><strong>Real-time:</strong> Socket.IO for WebSocket-based live communication</li>
        <li><strong>Frontend:</strong> Vanilla HTML/CSS/JS — no build step, no framework dependency</li>
        <li>Designed for simplicity, speed, and instant accessibility</li>
      </ul>
      
      <h4>Impact:</h4>
      <p>Eliminates friction by providing an all-in-one utility platform that users can access instantly without creating accounts or installing software.</p>
    `,
    tags: ["Node.js", "Express", "Socket.IO", "Real-time", "Full-Stack"],
    links: {
      github: "https://github.com/dewanggandhi01/SwiftShare",
      demo: "https://swiftshare-rwio.onrender.com"
    },
    year: "2025"
  },
  {
    id: 9,
    title: "CurePath — Digital Prescription Management",
    category: "web",
    tech: "Next.js 16, React 19, TypeScript",
    description: "Full-stack healthcare platform for digital prescription management with role-based access, PDF generation, and responsive design.",
    image: "assets/curepath.png",
    longDescription: `
      <p>CurePath is a full-stack web application built to solve a real problem in healthcare: patients lose physical prescriptions, and clinics struggle to maintain organized prescription records. This platform allows doctors to create, manage, and track digital prescriptions while giving patients secure, on-demand access to their prescription history and medical records.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li>Role-based access control — separate interfaces for doctors and patients</li>
        <li>Digital prescription creation and management workflow</li>
        <li>Client-side PDF generation for downloadable prescriptions</li>
        <li>Animated UI transitions for a polished user experience</li>
        <li>Responsive design system that adapts from mobile to desktop</li>
        <li>Secure, on-demand access to prescription history and medical records</li>
      </ul>
      
      <h4>Technical Architecture:</h4>
      <ul>
        <li><strong>Framework:</strong> Next.js 16 with React 19 and TypeScript</li>
        <li><strong>Architecture:</strong> Modern frontend patterns with server-side rendering</li>
        <li><strong>Auth:</strong> Role-based access control for doctors and patients</li>
        <li><strong>PDF:</strong> Client-side PDF generation for prescription downloads</li>
        <li><strong>Design:</strong> Responsive design system with animated transitions</li>
      </ul>
      
      <h4>Impact:</h4>
      <p>Digitizes the prescription workflow, reducing lost prescriptions and enabling clinics to maintain organized, searchable medical records with secure patient access.</p>
    `,
    tags: ["Next.js", "React", "TypeScript", "Healthcare", "Full-Stack"],
    links: {
      github: "https://github.com/dewanggandhi01/CurePath",
      demo: "https://cure-path.vercel.app"
    },
    year: "2025"
  },
  {
    id: 10,
    title: "AlgoVerse — DSA Learning Platform",
    category: "web",
    tech: "React, TypeScript, Node.js",
    description: "Comprehensive DSA learning platform with 500+ curated problems, video solutions, 16-level study paths, and company-specific interview prep.",
    longDescription: `
      <p>AlgoVerse is a comprehensive Data Structures and Algorithms learning platform with video solutions, structured learning paths, and 500+ curated problems designed to take learners from beginner to advanced.</p>
      
      <h4>Core Features:</h4>
      <ul>
        <li><strong>500+ DSA Problems</strong> — Curated collection covering all major topics</li>
        <li><strong>Video Solutions</strong> — YouTube video integration for visual learning (8 videos per problem)</li>
        <li><strong>Study Flow</strong> — 16-level structured learning roadmap from beginner to advanced</li>
        <li><strong>Multiple Solutions</strong> — Different approaches for each problem (Brute Force, Optimal, etc.)</li>
        <li><strong>Smart Filtering</strong> — Filter by difficulty, topic, tags, and categories</li>
        <li><strong>Interview Prep</strong> — Company-specific problems (FAANG companies)</li>
        <li><strong>Dark Mode</strong> — Eye-friendly dark theme support</li>
        <li><strong>Progress Tracking</strong> — Track your learning journey across all problems</li>
        <li><strong>Responsive Design</strong> — Works seamlessly on all devices</li>
      </ul>
      
      <h4>Technical Implementation:</h4>
      <ul>
        <li><strong>Frontend:</strong> React with TypeScript for type-safe component architecture</li>
        <li><strong>Backend:</strong> Node.js for API services and data management</li>
        <li><strong>State:</strong> Efficient state management for progress tracking across 500+ problems</li>
        <li><strong>Design:</strong> Responsive layout with dark mode support and smart filtering UX</li>
      </ul>
      
      <h4>Impact:</h4>
      <p>Provides a structured, all-in-one platform for DSA mastery — combining curated problems, video explanations, and progress tracking to accelerate interview preparation and algorithmic thinking.</p>
    `,
    tags: ["React", "TypeScript", "Node.js", "Education", "DSA"],
    links: {
      github: "https://github.com/dewanggandhi01/AlgoVerse",
      demo: "https://algo-verse-nine.vercel.app"
    },
    year: "2025"
  },
  {
    id: 11,
    title: "FlowCompiler — AI Application Compiler",
    category: "ai",
    tech: "Next.js 15, FastAPI, LangGraph, LangChain, PostgreSQL, OpenAI (GPT-4o)",
    description: "Production-grade AI system that converts natural language software requirements into complete, executable application configurations.",
    image: "assets/flowcompiler.jpg",
    longDescription: `
      <p>FlowCompiler behaves like a compiler for software applications: you provide a natural language description of what you want to build, and it generates production-ready UI, API, Database, and Auth schemas — validated, repaired, and simulation-tested.</p>
      
      <div style="background: rgba(255, 255, 255, 0.05); padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255, 255, 255, 0.1);">
        <div style="color: #F87171; font-family: monospace; font-size: 0.9rem; margin-bottom: 0.5rem; text-align: left;">INPUT PROMPT:</div>
        <p style="font-style: italic; margin-bottom: 1rem; text-align: left;">"Build a CRM with login, contacts, dashboard, role-based access, payments, and analytics."</p>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
          <div style="font-weight: bold; color: #b8d8d8;">↓ COMPILER PIPELINE</div>
          <div style="font-family: monospace; font-size: 0.85rem; border-left: 2px solid #b8d8d8; padding-left: 1rem; width: 100%; margin: 0.5rem 0; text-align: left; line-height: 1.5;">
            1. Intent Extraction<br>
            2. System Design<br>
            3. Schema Generation (UI/API/DB/Auth)<br>
            4. Cross-Layer Validation<br>
            5. Targeted Repair Engine<br>
            6. Runtime Simulation
          </div>
          <div style="font-weight: bold; color: #b8d8d8;">↓ OUTPUT</div>
          <div style="color: #34D399; font-family: monospace; font-size: 0.9rem;">Executable Configuration (JSON)</div>
        </div>
      </div>

      <h4>🏗️ Architecture Overview:</h4>
      <pre style="background: rgba(0, 0, 0, 0.3); padding: 1rem; border-radius: 6px; overflow-x: auto; font-family: monospace; font-size: 0.85rem; line-height: 1.4; border: 1px solid rgba(255, 255, 255, 0.05); text-align: left;">src/
├── api/                    # FastAPI routes
│   └── routes.py
├── agents/                 # AI pipeline agents
│   ├── base_agent.py       # Abstract base with retry/structured outputs
│   ├── intent_extractor.py # Stage 1: NL → structured intent
│   ├── system_designer.py  # Stage 2: Intent → architecture
│   ├── schema_generator.py # Stage 3: Architecture → 4 schemas
│   ├── validator.py        # Stage 4: Cross-layer validation
│   ├── repair_agent.py     # Stage 5: Targeted repair engine
│   ├── execution_simulator.py # Stage 6: Runtime simulation
│   └── pipeline.py         # LangGraph orchestrator
├── schemas/                # Pydantic v2 models
├── runtime/                # Config → executable code generators
├── evaluation/             # Benchmark framework
└── tests/                  # Test suite</pre>

      <h4>📡 API Reference:</h4>
      <ul style="text-align: left;">
        <li><code>POST /generate</code> - Full pipeline execution from prompt to runtime config.</li>
        <li><code>POST /validate</code> - Validate existing schemas across all four layers.</li>
        <li><code>POST /repair</code> - Repair failing schemas with targeted fixes.</li>
        <li><code>POST /simulate</code> - Run execution simulation on generated schemas.</li>
        <li><code>POST /evaluate</code> - Run the 20-prompt benchmark suite with metrics.</li>
      </ul>

      <h4>📊 Evaluation & Benchmarks:</h4>
      <p style="text-align: left;">Includes a 20-prompt benchmark suite (10 normal + 10 edge cases) testing various domains (CRM, ERP, LMS, Booking, etc.) with ambiguous, contradictory, minimal, or overly complex inputs. Tracks success rate, validation failures, repair count, runtime pass rate, latency, and cost.</p>
    `,
    tags: ["Next.js", "FastAPI", "LangGraph", "LangChain", "OpenAI", "Full-Stack"],
    links: {
      github: "https://github.com/dewanggandhi01/FlowCompiler",
      demo: "https://flow-compiler-three.vercel.app/"
    },
    year: "2025"
  }
];

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}