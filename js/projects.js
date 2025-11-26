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
  }
];

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}