// Projects data for the portfolio
const projectsData = [
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
  },
  {
    id: 16,
    title: "AI Presentation Generator",
    category: "ai",
    tech: "Node.js, Express, OpenAI API, Anthropic Claude, Google Gemini, Open XML",
    description: "Transform your text into professional PowerPoint presentations using AI-powered content structuring and template styling.",
    image: "assets/ppt_generator.png",
    longDescription: `
      <p>An advanced AI-powered web tool that automates the creation of professional PowerPoint presentations. By analyzing text inputs, the system intelligently extracts structure, plans slides, and styles content based on uploaded PowerPoint templates.</p>

      <h4>Key Features:</h4>
      <ul>
        <li><strong>Smart Text Analysis</strong> — Automatically parses unstructured text into detailed, logical slide hierarchies.</li>
        <li><strong>Multi-AI Provider Support</strong> — Integrates seamlessly with OpenAI GPT-4, Anthropic Claude, and Google Gemini API.</li>
        <li><strong>Template Style Extraction</strong> — Extracts slide layout, fonts, and color themes from uploaded <code>.pptx</code> or <code>.potx</code> files.</li>
        <li><strong>Real-time Slide Structuring</strong> — Review and edit slide titles, notes, and bullet points before generation.</li>
        <li><strong>XML-Based Presentation Generation</strong> — Generates files matching Open XML specifications for native, editable PowerPoint slide structures.</li>
        <li><strong>Secure Client Processing</strong> — Keys are securely used during generation and are never stored or logged.</li>
      </ul>

      <h4>How It Works:</h4>
      <p>The backend server processes the input text through an intelligence pipeline. First, the chosen AI extracts intent and breaks the text into a logical sequence (Intro, Body, Conclusion). Then, the Open XML engine maps these structured data layers onto the layout styles retrieved from the uploaded template presentation, generating a download link for a native PowerPoint file.</p>
    `,
    tags: ["Node.js", "AI", "PowerPoint", "Gemini", "Claude", "OpenAI", "Express"],
    links: {
      github: "https://github.com/dewanggandhi01/PPT-Generator",
      demo: "https://ppt-generator-90d4.onrender.com/"
    },
    year: "2025"
  },
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
    image: "assets/data_analyst_agent.png",
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
    id: 30,
    title: "ABYSSAL — Into the Deep",
    category: "web",
    tech: "Next.js 15, React Three Fiber, Three.js, Custom GLSL Shaders, Web Audio API",
    description: "An interactive, scroll-driven WebGL cinematic experience exploring marine ecosystems across ocean depth zones, built with Next.js 15, React Three Fiber, custom PBR GLSL shaders, and procedural Web Audio.",
    longDescription: `
      <p>ABYSSAL renders a continuous 3D oceanic journey from high atmospheric sky altitude down to the abyssal sea floor. Movement is driven by continuous scroll interpolation, dynamically transitioning lighting models, depth-based fog attenuation, procedural audio frequencies, and marine biological ecosystems.</p>
      
      <h4>Architecture & Core Modules:</h4>
      <ul>
        <li><strong>1. Physically-Based Ocean Shader</strong> — 10-Octave Gerstner Wave GPU Simulation with subsurface scattering (SSS), Cook-Torrance GGX specular reflection, and Snell's Window total internal reflection.</li>
        <li><strong>2. Biological 3D Boids Schooling Simulation</strong> — Real-time flocking algorithms (Separation, Alignment, Cohesion, Avoidance) with lead-fish turning wave propagation and aerodynamic roll banking for Silver Mackerels, Yellowfin Tangs, and Coral Damselfish.</li>
        <li><strong>3. Physical Atmosphere & Cloud Rendering</strong> — Rayleigh & Mie scattering sky dome shader, anamorphic solar flare with dual-pass corona, and domain-warped FBM noise volumetric cloud shaders with silver lining edges.</li>
        <li><strong>4. Marine Creature Rigs</strong> — Great White Apex Shark with countershading PBR material & S-curve body sway, Translucent Bioluminescent Jellyfish with contracting bell dome & 12 ribbon tentacles, Seabirds with dual-joint wing articulation, and Deep Sea Ecosystem (Anglerfish with glowing lure bulb, Giant Squid, hydrothermal vents).</li>
      </ul>
      
      <h4>Technical Stack & Optimization:</h4>
      <ul>
        <li><strong>Framework:</strong> Next.js 15 (App Router, Turbopack)</li>
        <li><strong>3D Engine:</strong> React Three Fiber (R3F) / Three.js</li>
        <li><strong>Shaders:</strong> Custom GLSL (Vertex & Fragment)</li>
        <li><strong>Audio:</strong> Web Audio API (Procedural Synthesizers & Spatial Filters)</li>
        <li><strong>Styling:</strong> Vanilla CSS Modules</li>
      </ul>
    `,
    tags: ["Next.js 15", "React Three Fiber", "WebGL", "GLSL", "Three.js", "Web Audio API", "CSS Modules"],
    links: {
      github: "https://github.com/dewanggandhi01/ABYSSAL-Into-the-Deep",
      demo: "https://abyssal-into-the-deep.vercel.app/"
    },
    year: "2025"
  },
  {
    id: 31,
    title: "DG Connect (Contact QR Generator)",
    category: "web",
    tech: "React Native (Expo SDK 54), Node.js, Express.js, Expo Camera, Animated API",
    description: "Mobile contact-sharing platform replacing traditional contact exchanges with dynamic scannable QR payloads, direct native dialer integrations, and gesture-driven contact management.",
    longDescription: `
      <p>DG Connect standardizes contact discovery into a single scannable QR code protocol. Structured into a lightweight React Native mobile client for cross-platform rendering and a Node.js Express backend service handling OTP authentication and verified payload tokens.</p>
      
      <h4>Key Engineering Architecture:</h4>
      <ul>
        <li><strong>Native Driver Animations:</strong> View transitions and gesture fills utilizing React Native's Native Driver (<code>useNativeDriver: true</code>) maintaining 60 FPS execution.</li>
        <li><strong>Gesture Mechanics:</strong> Custom PanResponder and Animated.Value interpolations implementing Samsung One UI style dynamic full-fill gestures (right-swipe call trigger, left-swipe deletion).</li>
        <li><strong>Direct Protocol Hooks:</strong> Native URI scheme handlers (<code>tel:</code>, <code>https://wa.me/</code>, <code>sms:</code>) invoking device dialers, WhatsApp channels, and SMS clients directly.</li>
        <li><strong>Camera Reticle Viewfinder:</strong> Built on <code>expo-camera</code> with real-time barcode scanning, active torch toggle state, and custom translucent vignette viewport overlay.</li>
        <li><strong>OTP Authentication:</strong> Express backend service (<code>/api/auth/verify-otp</code>) issuing verification tokens upon 6-digit OTP entry.</li>
      </ul>
      
      <h4>Feature Matrix:</h4>
      <ul>
        <li><strong>Contact Card Passbook UI:</strong> High-resolution QR encoding via <code>react-native-qrcode-svg</code> with one-tap native share sheet and clipboard copying.</li>
        <li><strong>Scanner Viewport:</strong> 260px reticle frame with animated laser beam, instant scan result bottom sheet with one-tap dialing, WhatsApp chat, and SMS dispatch.</li>
        <li><strong>Contact Management:</strong> Day-grouped history (Today, Yesterday), speed dial favorites scroll container, and instant client-side search filtering.</li>
      </ul>
      
      <h4>Application Demo:</h4>
      <p><a href="https://drive.google.com/file/d/1o_p2M86eh6ti6tf_z4Kgtt-mOSmlQJNm/view?usp=sharing" target="_blank" style="color: #ff5536; font-weight: 600; text-decoration: underline;">Watch Continuous Mobile Screen Recording Demo on Google Drive ↗</a></p>
    `,
    tags: ["React Native", "Expo SDK 54", "Express.js", "Node.js", "QR Code", "Mobile", "PanResponder"],
    links: {
      github: "https://github.com/dewanggandhi01/contact-qr-generator",
      demo: "https://drive.google.com/file/d/1o_p2M86eh6ti6tf_z4Kgtt-mOSmlQJNm/view?usp=sharing"
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
    id: 12,
    title: "Echoes of Silence",
    category: "creative",
    tech: "Charcoal, Graphite, Sketching",
    description: "A series of charcoal and graphite sketches exploring light, shadow, and human expressions.",
    longDescription: `
      <p>A collection of physical drawings focused on fine details, shading, and capturing human emotion through portrait sketching.</p>
      
      <h4>Mediums Used:</h4>
      <ul>
        <li>Charcoal pencils (soft, medium, hard)</li>
        <li>Graphite pencils (2B to 8B)</li>
        <li>Blending stumps and kneaded erasers</li>
      </ul>
      
      <h4>Artistic Vision:</h4>
      <p>Focuses on visual storytelling and exploring human expressions through classical drawing techniques.</p>
    `,
    tags: ["Fine Art", "Sketching", "Portrait", "Traditional Art"],
    links: {
      github: "#",
      demo: "#"
    },
    year: "2024"
  },
  {
    id: 13,
    title: "Digital Dreaming & Generative Art",
    category: "creative",
    tech: "Processing, p5.js, Creative Coding",
    description: "Generative art experiments translating mathematical equations and noise algorithms into interactive visual patterns.",
    longDescription: `
      <p>Interactive digital art pieces built using math algorithms, Perlin noise, and canvas rendering libraries.</p>
      
      <h4>Features:</h4>
      <ul>
        <li>Dynamic vector fields reacting to user interaction</li>
        <li>Custom particle systems with physics simulation</li>
        <li>Algorithmic flow patterns and organic growth simulations</li>
      </ul>
      
      <h4>Technology Stack:</h4>
      <p>Built using JavaScript, p5.js library, and standard canvas APIs for real-time physics-based renderings.</p>
    `,
    tags: ["Generative Art", "p5.js", "Creative Coding", "Interactive"],
    links: {
      github: "https://github.com/dewanggandhi01/generative-art",
      demo: "#"
    },
    year: "2024"
  },
  {
    id: 14,
    gridClass: "",
    title: "Echoes of the Night",
    category: "art",
    tech: "Acrylic on Canvas",
    description: "Landscape painting exploring contrast and silhouettes under a glowing crimson moon.",
    image: "assets/painting_red_moon.jpg",
    longDescription: `
      <p>Echoes of the Night is a traditional acrylic painting on canvas that explores the stark visual contrast between a dark tree silhouette and a vibrant, textured crimson moon.</p>
      
      <h4>Artistic Medium:</h4>
      <ul>
        <li><strong>Medium:</strong> Acrylic paint on stretched canvas</li>
        <li><strong>Color Palette:</strong> Deep black, rich crimson red, soft pink highlights</li>
        <li><strong>Visual Technique:</strong> Silhouette drawing with textured layering for the moon surface</li>
      </ul>
    `,
    tags: ["Painting", "Fine Art", "Landscape", "Acrylic"],
    links: {
      github: "#",
      demo: "#"
    },
    year: "2025"
  },
  {
    id: 15,
    gridClass: "painting-card-wide",
    title: "Rustic Memories",
    category: "art",
    tech: "Embroidery & Fabric Painting",
    description: "Textured landscape artwork depicting a serene village scene with hand-stitched detailing and rich fabric textures.",
    image: "assets/painting_embroidery.jpg",
    longDescription: `
      <p>Rustic Memories combines fabric painting and embroidery techniques to create a three-dimensional, highly textured landscape of a peaceful village.</p>
      
      <h4>Artistic Medium:</h4>
      <ul>
        <li><strong>Medium:</strong> Textile art with embroidery thread on dyed fabric backing</li>
        <li><strong>Texturing:</strong> Hand-stitched French knots and satin stitch overlays</li>
        <li><strong>Visual Technique:</strong> High-relief texture representing foliage and village cottage architecture</li>
      </ul>
    `,
    tags: ["Textile Art", "Mixed Media", "Landscape", "Embroidery"],
    links: {
      github: "#",
      demo: "#"
    },
    year: "2024"
  },
  {
    id: 17,
    gridClass: "painting-card-tall",
    title: "Serenity",
    category: "art",
    tech: "Colored Pencils on Paper",
    description: "Detailed portrait of Buddha capturing meditative peace and surrounding foliage.",
    image: "assets/painting_buddha.jpg",
    longDescription: `
      <p>Serenity is a colored pencil study on paper depicting Buddha in a state of absolute meditative stillness, accented by falling green leaves.</p>
      
      <h4>Artistic Medium:</h4>
      <ul>
        <li><strong>Medium:</strong> Colored pencils and fine-liners on heavyweight art paper</li>
        <li><strong>Stylization:</strong> Monochromatic blue shading for the face with vibrant red and orange background contrast</li>
        <li><strong>Visual Technique:</strong> Precise blending and high-contrast shading</li>
      </ul>
    `,
    tags: ["Fine Art", "Portrait", "Spiritual Art", "Drawing"],
    links: {
      github: "#",
      demo: "#"
    },
    year: "2025"
  },
  {
    id: 18,
    gridClass: "painting-card-wide",
    title: "The Journey Ahead",
    category: "art",
    tech: "Watercolors & Ink",
    description: "Ethereal landscape painting of a solitary traveler crossing a traditional wooden bridge under a vibrant orange sky.",
    image: "assets/painting_bridge.jpg",
    longDescription: `
      <p>The Journey Ahead uses watercolors and ink washes to create a dramatic, silhouetted Japanese-style landscape at sunset.</p>
      
      <h4>Artistic Medium:</h4>
      <ul>
        <li><strong>Medium:</strong> Transparent watercolors and black India ink on cold-pressed paper</li>
        <li><strong>Color Palette:</strong> Deep oranges, golds, dark browns, and black ink</li>
        <li><strong>Visual Technique:</strong> Wash gradients for the sky and reflection with fine ink linework for branches and structure</li>
      </ul>
    `,
    tags: ["Watercolor", "Ink Sketch", "Landscape", "Traditional"],
    links: {
      github: "#",
      demo: "#"
    },
    year: "2024"
  },
  {
    id: 19,
    gridClass: "painting-card-tall",
    title: "Avian Harmony",
    category: "art",
    tech: "Gouache & Pencils on Paper",
    description: "Vibrant painting capturing three diverse songbirds perched amidst cherry blossoms.",
    image: "assets/painting_birds.jpg",
    longDescription: `
      <p>Avian Harmony is a gouache study of three detailed songbirds perched on flowering branches, rendered with rich opaque pigments.</p>
      
      <h4>Artistic Medium:</h4>
      <ul>
        <li><strong>Medium:</strong> Opaque gouache paint and colored pencil highlights on toned paper</li>
        <li><strong>Subject:</strong> Fine ornithological study of birds and spring cherry blossoms</li>
        <li><strong>Visual Technique:</strong> Layered opaque washes with delicate feather texture detailing</li>
      </ul>
    `,
    tags: ["Gouache", "Nature Study", "Illustration", "Fine Art"],
    links: {
      github: "#",
      demo: "#"
    },
    year: "2025"
  },
  {
    id: 20,
    gridClass: "painting-card-tall",
    title: "Divine Melodies",
    category: "art",
    tech: "Acrylic & Gouache on Canvas",
    description: "Vibrant painting depicting silhouettes of Radha and Krishna with a golden flute and leaf motifs.",
    image: "assets/painting_radha_krishna.jpg",
    longDescription: `
      <p>Divine Melodies is a stylized painting depicting the divine silhouettes of Radha and Krishna. It highlights traditional iconographies with a glowing warm background and detailed plant patterns.</p>
      
      <h4>Artistic Medium:</h4>
      <ul>
        <li><strong>Medium:</strong> Acrylic and gouache pigments on canvas</li>
        <li><strong>Subject:</strong> Radha and Krishna with a golden bansuri (flute)</li>
        <li><strong>Style:</strong> High-contrast silhouette art with traditional leaf design accents</li>
      </ul>
    `,
    tags: ["Painting", "Traditional", "Devotional Art", "Silhouette"],
    links: {
      github: "#",
      demo: "#"
    },
    year: "2025"
  },
  {
    id: 21,
    gridClass: "painting-card-tall",
    title: "Midnight Whispers",
    category: "art",
    tech: "Oil on Board",
    description: "Atmospheric night landscape featuring tall bare trees against a glowing crimson and deep blue sky.",
    image: "assets/painting_blue_night.png",
    longDescription: `
      <p>Midnight Whispers captures a silent forest landscape at night, colored by a vibrant low sunset glow and a full red moon in a gradient sky.</p>
      
      <h4>Artistic Medium:</h4>
      <ul>
        <li><strong>Medium:</strong> Oil paints on wooden panel board</li>
        <li><strong>Theme:</strong> Nocturnal forest silhouette and red moon study</li>
        <li><strong>Visual Technique:</strong> Soft blending for the sky gradient with sharp dark foreground strokes for branches</li>
      </ul>
    `,
    tags: ["Oil Painting", "Fine Art", "Landscape", "Nocturnal"],
    links: {
      github: "#",
      demo: "#"
    },
    year: "2024"
  },
  {
    id: 22,
    gridClass: "painting-card-wide",
    title: "Vibrant Flutter",
    category: "art",
    tech: "Fine Liner & Pencil Shading",
    description: "Highly detailed sketch of a butterfly with ornate pink and red wing patterns.",
    image: "assets/painting_butterfly.png",
    longDescription: `
      <p>Vibrant Flutter is a close-up drawing of a butterfly. It explores symmetrical wing structures, intricate textures, and smooth color gradients inside bold black margins.</p>
      
      <h4>Artistic Medium:</h4>
      <ul>
        <li><strong>Medium:</strong> Technical fine-liners and colored pencils on vellum board</li>
        <li><strong>Subject:</strong> Stylized symmetrical butterfly illustration</li>
        <li><strong>Visual Technique:</strong> Cross-hatching for texture combined with smooth gradient pencil blending</li>
      </ul>
    `,
    tags: ["Sketching", "Illustration", "Colored Pencils", "Detail Work"],
    links: {
      github: "#",
      demo: "#"
    },
    year: "2025"
  },
  {
    id: 23,
    gridClass: "painting-card-tall",
    title: "Lord of Beginnings",
    category: "art",
    tech: "Dry Pastels on Paper",
    description: "Abstract, color-blocked representation of Lord Ganesha in warm and cool tones.",
    image: "assets/painting_ganesha.png",
    longDescription: `
      <p>Lord of Beginnings is a contemporary abstract study of Lord Ganesha. It divides the form into blocks of color using soft pastels to create depth and energy.</p>
      
      <h4>Artistic Medium:</h4>
      <ul>
        <li><strong>Medium:</strong> Soft pastels and charcoal sketch on textured paper</li>
        <li><strong>Subject:</strong> Lord Ganesha abstract depiction</li>
        <li><strong>Visual Technique:</strong> Solid blocks of colors with charcoal outline dividing sections</li>
      </ul>
    `,
    tags: ["Dry Pastels", "Abstract", "Spiritual Art", "Color Block"],
    links: {
      github: "#",
      demo: "#"
    },
    year: "2025"
  },
  {
    id: 24,
    gridClass: "painting-card-wide",
    title: "Hills of Solitude",
    category: "art",
    tech: "Watercolors on Paper",
    description: "Peaceful watercolor landscape depicting a lone mountain cottage next to a towering pine tree.",
    image: "assets/painting_cottage.png",
    longDescription: `
      <p>Hills of Solitude is a traditional watercolor painting depicting a rustic house in a valley with distant mountain ranges and sun rays.</p>
      
      <h4>Artistic Medium:</h4>
      <ul>
        <li><strong>Medium:</strong> Traditional watercolor washes on cold-pressed paper</li>
        <li><strong>Palette:</strong> Warm earthy browns, yellows, and deep forest greens</li>
        <li><strong>Visual Technique:</strong> Wet-on-wet technique for mountain ranges, wet-on-dry for cottage details</li>
      </ul>
    `,
    tags: ["Watercolor", "Landscape", "Traditional Art", "Painting"],
    links: {
      github: "#",
      demo: "#"
    },
    year: "2024"
  },
  {
    id: 25,
    gridClass: "painting-card-tall",
    title: "Elegance in Ink",
    category: "art",
    tech: "Pen & Ink Sketch",
    description: "Detailed black ink line drawing of a woman from behind, showcasing intricate lace patterns on a flowing gown.",
    image: "assets/painting_gown.png",
    longDescription: `
      <p>Elegance in Ink is a fine-line ink illustration on cardstock. It focuses on the repeating textures, lace details, and folds of a traditional ballgown, seen from a back portrait angle.</p>
      
      <h4>Artistic Medium:</h4>
      <ul>
        <li><strong>Medium:</strong> Archival ink fine-liners on hot-pressed paper</li>
        <li><strong>Theme:</strong> Fashion illustration and classical drapery textures</li>
        <li><strong>Visual Technique:</strong> Concentric circle patterns and stippling for high-detail shading</li>
      </ul>
    `,
    tags: ["Sketching", "Fine Art", "Ink Sketch", "Traditional Drawing"],
    links: {
      github: "#",
      demo: "#"
    },
    year: "2025"
  },
  {
    id: 26,
    gridClass: "painting-card-tall",
    title: "Daily Rituals",
    category: "art",
    tech: "Linocut Print Style Drawing",
    description: "High-contrast black and white linocut style drawing illustrating village women carrying water pots.",
    image: "assets/painting_village_women.png",
    longDescription: `
      <p>Daily Rituals is a black and white ink sketch styled after traditional linoleum block prints, depicting two village women carrying clay water pots.</p>
      
      <h4>Artistic Medium:</h4>
      <ul>
        <li><strong>Medium:</strong> Indian ink and white gouache accents on textured board</li>
        <li><strong>Style:</strong> Folk art block-print stylization</li>
        <li><strong>Visual Technique:</strong> Bold black negative spaces contrasting with thick white brush linework</li>
      </ul>
    `,
    tags: ["Folk Art", "Black & White", "Illustration", "Linocut Style"],
    links: {
      github: "#",
      demo: "#"
    },
    year: "2024"
  },
  {
    id: 27,
    gridClass: "painting-card-tall",
    title: "The Devotion",
    category: "art",
    tech: "Traditional Indian Miniature Style",
    description: "A classical style painting depicting a traditional scene with figures under a leafy canopy.",
    image: "assets/painting_miniature.png",
    longDescription: `
      <p>The Devotion is a miniature painting study recreating traditional Indian court style illustration, featuring three figures on a river bank next to detailed trees.</p>
      
      <h4>Artistic Medium:</h4>
      <ul>
        <li><strong>Medium:</strong> Gouache and fine gold leaf accents on handmade paper</li>
        <li><strong>Subject:</strong> Traditional devotional narrative in nature settings</li>
        <li><strong>Visual Technique:</strong> Single-hair brush detailing for foliage and drapery lines</li>
      </ul>
    `,
    tags: ["Miniature Painting", "Gouache", "Devotional Art", "Traditional Art"],
    links: {
      github: "#",
      demo: "#"
    },
    year: "2025"
  },
  {
    id: 28,
    gridClass: "painting-card-tall",
    title: "Tropical Haven",
    category: "art",
    tech: "Watercolor & Acrylic on Paper",
    description: "Vibrant watercolor painting of two silhouetted palm trees standing on a beach against a blazing sunset.",
    image: "assets/painting_palm_sunset.png",
    longDescription: `
      <p>Tropical Haven is a warm watercolor study capturing a tropical shore at dusk, featuring two palm silhouettes leaning over calm ocean reflections.</p>
      
      <h4>Artistic Medium:</h4>
      <ul>
        <li><strong>Medium:</strong> Watercolors and heavy body black acrylic details on cold-pressed paper</li>
        <li><strong>Color Palette:</strong> Blazing sunset yellows, warm oranges, soft turquoise blues, and dark silhouettes</li>
        <li><strong>Visual Technique:</strong> Wet-on-wet watercolor washes with solid acrylic overlays for palm leaves</li>
      </ul>
    `,
    tags: ["Watercolor", "Acrylic", "Landscape", "Sunset Art"],
    links: {
      github: "#",
      demo: "#"
    },
    year: "2024"
  },
  {
    id: 29,
    gridClass: "painting-card-wide",
    title: "Wildflower Waltz",
    category: "art",
    tech: "Watercolors on Paper",
    description: "Cheerful watercolor study of colorful wildflowers in bloom, rendered with loose washes and ink dots.",
    image: "assets/painting_flowers.jpg",
    longDescription: `
      <p>Wildflower Waltz is a loose watercolor sketch capturing a patch of colorful sunflowers in purple, pink, orange, blue, and yellow washes.</p>
      
      <h4>Artistic Medium:</h4>
      <ul>
        <li><strong>Medium:</strong> Watercolors and white/black gel pen detailing on cotton paper</li>
        <li><strong>Theme:</strong> Botanical study and organic garden patterns</li>
        <li><strong>Visual Technique:</strong> Loose wash drops with detailed dot patterns for seed centers</li>
      </ul>
    `,
    tags: ["Watercolor", "Botanical", "Sketching", "Loose Style"],
    links: {
      github: "#",
      demo: "#"
    },
    year: "2025"
  }
];

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}