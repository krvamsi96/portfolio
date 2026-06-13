// ==========================================================================
// Project Database (Anonymized & Cleaned)
// ==========================================================================

const projectsData = [
  {
    id: "project-1",
    category: "agentic",
    title: "Programme Onboarding Agent",
    subtitle: "AI-Driven Client Onboarding Automation",
    metric: "85% Onboarding Time Saved",
    summary: "A production multi-agent AI system that simulates an onboarding review team. It ingests, pre-processes, classifies, extracts, and validates heterogeneous client compliance documentation autonomously.",
    tech: ["Python", "LangGraph", "LangChain", "LLaMA-3", "FAISS", "ChromaDB", "Tesseract OCR", "Whisper", "OpenCV", "MLflow", "Ragas", "TruLens"],
    problem: "Enterprise client onboarding requires manual review of 50–150 pages of miscellaneous paperwork per case. Analysts spend 12–18 hours per account cross-referencing forms, leading to high operational costs, inconsistent interpretations, and exposure to regulatory audit failures.",
    whyAi: "Onboarding materials are submitted in highly variable formats (scans, image captures, emails, and phone recordings) with varying resolutions and structures. Rigid template matching rules fail when layouts change. Large language models and stateful multi-agent architectures offer the cognitive flexibility required to understand visual forms, extract key entities, and apply semantic regulatory reasoning.",
    steps: [
      { num: 1, title: "Multi-Format Ingestion", desc: "Monitors uploads and sniffs MIME-types to ingest PDFs, Word documents, images, emails, and onboarding phone transcripts." },
      { num: 2, title: "Image Preprocessing", desc: "Corrects alignment skew using Hough transforms, filters photocopy noise, and upsamples low-resolution text pages to 300 DPI." },
      { num: 3, title: "OCR & Text Extraction", desc: "Extracts characters from scans via Tesseract, parses native text via PyMuPDF, and runs boundary bounding-box analysis for table grid reconstruction." },
      { num: 4, title: "Document Classification", desc: "Runs fine-tuned BERT classifiers to identify page types (IDs, tax forms, registration contracts) and assess compliance criticality." },
      { num: 5, title: "Entity Extraction", desc: "Employs custom spaCy NER pipelines to extract structured fields (addresses, registration codes, values) and maps cross-document matches." },
      { num: 6, title: "Compliance Validation", desc: "Applies 200+ configurable compliance rules, checking for field presence, date validity, and document discrepancies." },
      { num: 7, title: "RAG Policy Layer", desc: "Retrieves regulatory rules (MiFID II, GDPR) and internal guidelines from vector databases to answer compliance questions." },
      { num: 8, title: "Stateful Orchestration", desc: "Coordinates processing nodes via LangGraph. Runs ingestion, parsing, and QA evaluation checks in parallel." },
      { num: 9, title: "Structured Audited Output", desc: "Compiles final profiles as structured JSON logs and PDF reports, pushing records to Salesforce and compliance audit servers." }
    ],
    challenges: [
      { name: "Heterogeneous Multi-Format Ingestion", solution: "Created a centralized preprocessing engine that standardizes all inputs (images, audio files, scanned text) into clean normalized text layers prior to calling cognitive agents." },
      { name: "Compliance Rule Shifts", solution: "Replaced hardcoded validation scripts with a dynamic YAML-based rule registry. Updates to policies do not require editing application code." }
    ],
    results: [
      { kpi: "Onboarding Processing Time", value: "<strong>85%</strong> reduction (from 15 hours to under 2 hours)" },
      { kpi: "End-to-End Automation Rate", value: "<strong>90%</strong> of cases auto-routed without manual human intervention" },
      { kpi: "OCR Field Extraction", value: "<strong>97%</strong> accuracy on printed documentation" },
      { kpi: "Regulatory Exposure", value: "<strong>50%</strong> reduction in compliance risk incidents" }
    ]
  },
  {
    id: "project-2",
    category: "agentic",
    title: "QA Accurater",
    subtitle: "AI-Driven Test Automation System",
    metric: "94% Script Creation Time Saved",
    summary: "An autonomous agentic testing platform that crawls web applications, maps page states, creates BDD test cases, seeds mock datasets, and writes self-healing Playwright scripts.",
    tech: ["Python", "LangGraph", "LangChain", "Groq API", "Playwright", "Faker", "TypeScript", "Allure", "Docker"],
    problem: "Writing test suites manually for large web applications is slow and expensive. UI changes break CSS selectors routinely, prompting QA engineers to spend up to 70% of their schedules repairing legacy test suites.",
    whyAi: "Dynamic selectors, micro-frontends, and variable states make rule-based testing static. AI is required to crawl page DOM trees, build navigation graphs, infer logical user actions, generate stable semantic locators, and update tests when design interfaces adapt.",
    steps: [
      { num: 1, title: "Discovery Crawling", desc: "Runs headless browsers to map links, click-paths, and actions, recording a comprehensive application navigation graph." },
      { num: 2, title: "DOM Element Analysis", desc: "Scores interactive elements by locator stability, generating a hierarchy of ARIA, test ID, CSS, and XPath targets." },
      { num: 3, title: "Scenario Synthesis", desc: "Uses LLM reasoning to output complete test scenarios covering core workflows, negative flows, boundary values, and safety issues." },
      { num: 4, title: "Test Data Ingestion", desc: "Seeds mock datasets using relational Faker scripts that adjust automatically to form-field validation constraints." },
      { num: 5, title: "TypeScript Compiler", desc: "Converts structured logic parameters into executable Playwright TypeScript tests using Page Object Model design." },
      { num: 6, title: "Parallel Execution", desc: "Launches parallel workers across Chrome, Firefox, and Safari engines to execute test cases concurrently." },
      { num: 7, title: "Self-Healing Engine", desc: "Detects selector execution faults, analyzes DOM diff changes, and replaces broken paths with active semantic selectors." },
      { num: 8, title: "Reporting Output", desc: "Generates interactive HTML Allure dashboards highlighting page coverage maps, console logs, and failure details." }
    ],
    challenges: [
      { name: "Dynamic Element Locators", solution: "Implemented a multi-strategy selector selector. If an element's path changes, a semantic reasoning script matches visual elements by contextual location and updates locators in real-time." },
      { name: "Parallel Resource Conflict", solution: "Built unique isolated data context scopes for each parallel worker, executing temporary accounts and database cleanup on test end." }
    ],
    results: [
      { kpi: "Test Creation Time", value: "<strong>94%</strong> reduction (from days to under 2 hours)" },
      { kpi: "Automation Test Maintenance", value: "<strong>80%</strong> reduction in human debugging effort" },
      { kpi: "User Workflow Coverage", value: "<strong>92%</strong> coverage mapped across complex routing networks" },
      { kpi: "CI/CD Deployment Frequency", value: "Moved from weekly releases to <strong>Daily</strong> deployments" }
    ]
  },
  {
    id: "project-3",
    category: "cv",
    title: "Document Processing Automation",
    subtitle: "AI-Driven Document Layout Analysis & Vision Parsing",
    metric: "70% Manual Data Entry Cut",
    summary: "An intelligent document parsing system that employs deep vision models to detect text regions, tables, checkbox states, and handwritten notes in low-quality scans.",
    tech: ["LayoutLMv3", "Table Transformer", "Tesseract 5.0", "DistilBERT", "spaCy", "OpenCV", "Pillow", "Celery", "PostgreSQL"],
    problem: "Manual transcription of documents (invoices, reports, scanned clinical sheets, forms) is slow and prone to errors. Flat OCR software strips away layouts, converting tables into meaningless lines of text.",
    whyAi: "Documents combine varied items (tables, figures, stamps, handwriting, and text blocks). LayoutLM vision models are required to capture layout structures, associate context labels, read columns in sequence, and parse handwriting.",
    steps: [
      { num: 1, title: "Adaptive Preprocessing", desc: "Cleans scanning shadows, deskews tilted documents, and closes text stroke gaps on poor photocopies." },
      { num: 2, title: "Layout Segmenting", desc: "Employs LayoutLMv3 to locate and segment text paragraphs, visual charts, signatures, checkboxes, and table blocks." },
      { num: 3, title: "Table Reconstruction", desc: "Runs Table Transformer on raw pixel crops to reconstruct cell boundaries, rows, and columns without loss of structure." },
      { num: 4, title: "OCR Parsing", desc: "Reads digital PDFs losslessly and runs Tesseract on scanned regions, classifying checkbox elements as checked/unchecked." },
      { num: 5, title: "NER Extraction", desc: "Leverages spaCy pipelines to identify key-value pairs (totals, dates, vendor details) based on positional page contexts." },
      { num: 6, title: "Quality Validation", desc: "Audits math values (summing line items to totals) and checks data constraints to queue errors for operator review." }
    ],
    challenges: [
      { name: "Complex Table Grids", solution: "Integrated Table Transformer to construct explicit coordinates for each cell. Rebuilt structures in JSON data maps, preventing flat string errors." },
      { name: "Scanned Handwriting", solution: "Separated printed and hand-annotated page sectors, routing handwritten blocks to fine-tuned vision models trained on cursive text." }
    ],
    results: [
      { kpi: "Manual Ingestion Effort", value: "<strong>70%</strong> reduction in department transcription work" },
      { kpi: "Printed Text Extraction", value: "<strong>98%</strong> field parsing accuracy" },
      { kpi: "Table Grid Construction", value: "<strong>99%</strong> table cell reconstruction accuracy" },
      { kpi: "Transcription Error Rate", value: "Decreased from 4.0% to <strong>0.8%</strong>" }
    ]
  },
  {
    id: "project-4",
    category: "cloud",
    title: "Secure Azure Cloud OCR Platform",
    subtitle: "Enterprise-Scale Document Processing Platform",
    metric: "50x Faster Processing Speeds",
    summary: "A secure, HIPAA-compliant Azure cloud service that extracts structured data from high-variance clinical and financial documents, featuring real-time normalization and enterprise integration.",
    tech: ["Azure AI Document Intelligence", "Azure Computer Vision", "Azure Functions", "Azure Blob Storage", "Azure Key Vault", "Azure Active Directory", "Logic Apps", "Service Bus", "Private Endpoints"],
    problem: "Handling sensitive financial invoices and clinical documentation on-premise creates infrastructure scaling bottlenecks and raises HIPAA/GDPR data security risks during ingestion peaks.",
    whyAi: "Securing PHI (Protected Health Information) requires enterprise-grade access boundaries, customer-managed keys, and dynamic processing loops. Pre-trained Azure vision cognitive systems provide validated handwriting accuracy.",
    steps: [
      { num: 1, title: "Secure API Ingestion", desc: "Accepts documents via Azure API Management, caching uploads securely in geo-redundant Blob containers." },
      { num: 2, title: "Access Key Vaulting", desc: "Restricts API keys via Key Vault integration and monitors files using Azure AD role policies." },
      { num: 3, title: "Enhancement Precheck", desc: "Filters blurred uploads and maps document rotations prior to routing files to extractors." },
      { num: 4, title: "Azure OCR Engine", desc: "Runs Document Intelligence models on invoices and custom forms, extracting printed strings and handwritten notes." },
      { num: 5, title: "Confidence Scoring", desc: "Validates OCR outputs. Auto-approves high-confidence metrics (>92%) and logs failures to human operator queues." },
      { num: 6, title: "Entity Standardizing", desc: "Standardizes extracted dates (ISO 8601), currency values, names, and industry-standard codes (ICD-10 clinical logs)." },
      { num: 7, title: "Downstream Delivery", desc: "Pushes validated HL7 payload arrays to databases and claims servers via Service Bus integrations." }
    ],
    challenges: [
      { name: "Sensitive PHI Data Security", solution: "Configured Private Endpoints, customer-managed keys, and field-level encryption, ensuring data compliance (HIPAA, GDPR) at rest and in transit." },
      { name: "Processing Volume Peaks", solution: "Utilized Azure Functions consumption plans to automatically scale server instances up or down to manage processing spikes." }
    ],
    results: [
      { kpi: "Document Turnaround Time", value: "<strong>50x Faster</strong> processing (from 4 hours to 12 minutes on average)" },
      { kpi: "Compliance Incidents", value: "<strong>0</strong> violations recorded post-deployment" },
      { kpi: "Transcription Operational Cost", value: "<strong>75%</strong> budget reduction compared to manual processes" },
      { kpi: "Azure Autoscaling Peak", value: "Supports up to <strong>200</strong> parallel functions running concurrently" }
    ]
  },
  {
    id: "project-5",
    category: "cloud",
    title: "InsureFlow AI",
    subtitle: "Lakehouse Intelligent Claims Platform",
    metric: "40% Claims Auto-Resolved",
    summary: "An end-to-end claims intelligence platform built on Databricks. It streams Kafka telemetry, applies XGBoost fraud models, extracts text via SQL AI Functions, and runs agentic claim triaging.",
    tech: ["Databricks Lakehouse", "PySpark Structured Streaming", "Delta Lake", "Unity Catalog", "XGBoost", "LightGBM", "DBRX Instruct", "Llama 3.1 8B", "AgentBricks", "LangGraph", "Databricks Vector Search", "RAGAS"],
    problem: "A major insurer faced $120M in undetected annual claim fraud, 14-day manual claim routing, and disjointed client files scattered across six incompatible database servers.",
    whyAi: "Managing 50,000+ daily reports requires distributed processing. Classical ML is needed to predict fraud variables, while Generative LLM agents analyze adjuster notes, lookup policy parameters, and pay simple claims.",
    steps: [
      { num: 1, title: "Streaming Medallion", desc: "Streams intake events via PySpark into Bronze/Silver/Gold Delta tables, using masking to protect sensitive customer details." },
      { num: 2, title: "XGBoost Fraud Classifier", desc: "Runs models on 47 dynamic features (geographic anomalies, historical records) to flag claims for fraud (0.94 AUC-ROC)." },
      { num: 3, title: "SQL NLP Functions", desc: "Leverages Databricks AI Functions (ai_summarize, ai_query) inside Spark SQL queries to summarize 50,000 daily reports." },
      { num: 4, title: "Policy Vector Search", desc: "Stores legal documents inside Databricks Vector Search indices to verify client coverage terms." },
      { num: 5, title: "Agentic Auto-Payment", desc: "Runs orchestrator nodes via AgentBricks. Pays low-complexity claims (<$500) and routes flags to adjusters." },
      { num: 6, title: "Lakehouse Monitoring", desc: "Logs model endpoints using Mosaic AI serving tables, monitoring inputs to alert engineers on statistical data drift." }
    ],
    challenges: [
      { name: "Fraud Class Imbalance (3% positive rate)", solution: "Utilized SMOTE oversampling and tuned Precision-Recall thresholds inside MLflow, optimizing fraud detection scores." },
      { name: "Cost-Effective LLM Execution", solution: "Ran high-volume jobs using Spark SQL batch functions while keeping real-time API serving endpoints active for instant agent queries." }
    ],
    results: [
      { kpi: "Prevented Fraudulent Claims", value: "<strong>$18M</strong> in payouts saved in Q1 post-deployment" },
      { kpi: "Claims Triage Turnaround", value: "Reduced from 14 days to <strong>2 days</strong>" },
      { kpi: "Autonomous Resolution", value: "<strong>40%</strong> of low-value claims resolved with zero manual work" },
      { kpi: "Legal Policy Query Time", value: "Cut from 25 minutes to <strong>90 seconds</strong> for adjusters" }
    ]
  }
];

// ==========================================================================
// Portfolio Interactivity Logic
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Icons
  lucide.createIcons();

  // Elements
  const projectsContainer = document.getElementById("projects-container");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const header = document.getElementById("header");
  const navLinks = document.querySelectorAll("nav a");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navMenu = document.getElementById("nav-menu");

  const modalBackdrop = document.getElementById("project-modal-backdrop");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalContentTarget = document.getElementById("modal-content-target");

  const copyEmailBtn = document.getElementById("copy-email");
  const copyPhoneBtn = document.getElementById("copy-phone");
  const copyToast = document.getElementById("copy-toast");

  // ==========================================================================
  // Render Project Cards
  // ==========================================================================
  function renderProjects(filter = "all") {
    projectsContainer.innerHTML = "";
    
    const filteredProjects = projectsData.filter(project => {
      if (filter === "all") return true;
      return project.category === filter;
    });

    filteredProjects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card glass-panel";
      card.dataset.category = project.category;
      
      const techTags = project.tech.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join("");
      const remainingTech = project.tech.length > 4 ? `<span class="tag">+${project.tech.length - 4} more</span>` : "";

      card.innerHTML = `
        <span class="project-category">${project.category === 'cv' ? 'Computer Vision / NLP' : project.category === 'agentic' ? 'Agentic AI / RAG' : 'Cloud / Databricks'}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-summary">${project.summary}</p>
        <div class="project-metrics">
          <div class="project-metrics-title">Key Milestone</div>
          <div class="project-metrics-value">${project.metric}</div>
        </div>
        <div class="project-tags">
          ${techTags}
          ${remainingTech}
        </div>
        <button class="btn btn-secondary btn-deep-dive" data-id="${project.id}">
          <span>Deep Dive Details</span>
          <i data-lucide="zoom-in" style="width:16px; height:16px;"></i>
        </button>
      `;

      projectsContainer.appendChild(card);
    });

    // Re-initialize dynamic Lucide icons inside cards
    lucide.createIcons();

    // Re-bind click events for newly rendered buttons
    document.querySelectorAll(".btn-deep-dive").forEach(button => {
      button.addEventListener("click", (e) => {
        const projectId = e.currentTarget.dataset.id;
        openProjectModal(projectId);
      });
    });
  }

  // Initial render
  renderProjects();

  // ==========================================================================
  // Project Filtering
  // ==========================================================================
  filterButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      renderProjects(filter);
    });
  });

  // ==========================================================================
  // Modal Popups (Details overlay)
  // ==========================================================================
  function openProjectModal(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    // Render Modal contents
    const techTags = project.tech.map(t => `<span class="tag">${t}</span>`).join("");
    
    const pipelineSteps = project.steps.map(step => `
      <div class="pipeline-step">
        <div class="step-num">${step.num}</div>
        <div class="step-content">
          <h4>${step.title}</h4>
          <p>${step.desc}</p>
        </div>
      </div>
    `).join("");

    const challengeItems = project.challenges.map(c => `
      <div style="margin-bottom: 1rem;">
        <h5 style="color:var(--text-primary); font-size:1rem; font-weight:600; margin-bottom:0.25rem;">❌ Challenge: ${c.name}</h5>
        <p style="font-size:0.95rem; padding-left:1.5rem; border-left:2px solid var(--secondary);">✔️ Solution: ${c.solution}</p>
      </div>
    `).join("");

    const resultRows = project.results.map(r => `
      <tr>
        <td>${r.kpi}</td>
        <td>${r.value}</td>
      </tr>
    `).join("");

    modalContentTarget.innerHTML = `
      <div class="modal-header">
        <div class="modal-category">${project.category === 'cv' ? 'Computer Vision / NLP' : project.category === 'agentic' ? 'Agentic AI / RAG' : 'Cloud / Databricks'}</div>
        <h3 class="modal-title">${project.title}</h3>
        <p class="modal-subtitle">${project.subtitle}</p>
      </div>

      <div class="modal-grid-2">
        <div>
          <div class="modal-section">
            <h4 class="modal-section-title"><i data-lucide="help-circle"></i> The Challenge Context</h4>
            <p>${project.problem}</p>
          </div>
          
          <div class="modal-section">
            <h4 class="modal-section-title"><i data-lucide="brain"></i> Cognitive AI Justification</h4>
            <p>${project.whyAi}</p>
          </div>

          <div class="modal-section">
            <h4 class="modal-section-title"><i data-lucide="alert-triangle"></i> Engineering Challenges</h4>
            ${challengeItems}
          </div>
        </div>

        <div>
          <div class="modal-section">
            <h4 class="modal-section-title"><i data-lucide="git-branch"></i> Processing Pipeline Architecture</h4>
            <div class="pipeline-step-container">
              ${pipelineSteps}
            </div>
          </div>
        </div>
      </div>

      <div class="modal-section" style="margin-top: 2rem; border-top:1px solid rgba(255,255,255,0.05); padding-top:2rem;">
        <h4 class="modal-section-title"><i data-lucide="trending-up"></i> Quantifiable Business Results</h4>
        <table class="impact-table">
          <thead>
            <tr>
              <th>Performance Metrics In Production</th>
              <th>Business Impact / Outcome</th>
            </tr>
          </thead>
          <tbody>
            ${resultRows}
          </tbody>
        </table>
      </div>

      <div class="modal-section" style="margin-top: 2rem;">
        <h4 class="modal-section-title"><i data-lucide="code"></i> Technologies Implemented</h4>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:0.5rem;">
          ${techTags}
        </div>
      </div>
    `;

    // Reinitialize icons in modal
    lucide.createIcons();

    // Show modal backdrop
    modalBackdrop.classList.add("active");
    document.body.style.overflow = "hidden"; // Disable background scrolling
  }

  function closeProjectModal() {
    modalBackdrop.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scroll
  }

  modalCloseBtn.addEventListener("click", closeProjectModal);
  
  // Close on clicking backdrop
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeProjectModal();
    }
  });

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("active")) {
      closeProjectModal();
    }
  });

  // ==========================================================================
  // Header Scroll State
  // ==========================================================================
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Nav Active Section Selection on Scroll
    let current = "";
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("data-section") === current) {
        link.classList.add("active");
      }
    });
  });

  // Mobile navigation drawer toggle
  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("mobile-active");
    mobileMenuBtn.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    lucide.createIcons();
  });

  // Close mobile drawer on link click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("mobile-active");
      mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
      lucide.createIcons();
    });
  });

  // ==========================================================================
  // Stats Counter Animation
  // ==========================================================================
  const statsElements = document.querySelectorAll(".metric-value");
  let statsAnimated = false;

  function runStatsAnimation() {
    if (statsAnimated) return;

    statsElements.forEach(stat => {
      const target = parseInt(stat.dataset.target, 10);
      let count = 0;
      const duration = 1500; // ms
      const increment = target / (duration / 16); // ~60fps

      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          stat.textContent = target + (target === 50 ? "x" : "%");
          clearInterval(timer);
        } else {
          stat.textContent = Math.floor(count) + (target === 50 ? "x" : "%");
        }
      }, 16);
    });

    statsAnimated = true;
  }

  // Trigger counter when metric container is visible
  const metricsSection = document.getElementById("metrics");
  const observerOptions = {
    root: null,
    threshold: 0.2
  };

  const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runStatsAnimation();
        metricsObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  if (metricsSection) {
    metricsObserver.observe(metricsSection);
  }

  // ==========================================================================
  // Clipboard Copy Actions
  // ==========================================================================
  function showToast(message) {
    copyToast.textContent = message;
    copyToast.classList.add("show");
    setTimeout(() => {
      copyToast.classList.remove("show");
    }, 2000);
  }

  function setupCopy(button, text, name) {
    if (button) {
      button.addEventListener("click", () => {
        navigator.clipboard.writeText(text).then(() => {
          showToast(`${name} copied to clipboard!`);
        }).catch(err => {
          console.error("Could not copy text: ", err);
        });
      });
    }
  }

  setupCopy(copyEmailBtn, "ratnavamsik@gmail.com", "Email");
  setupCopy(copyPhoneBtn, "+918520852598", "Phone number");

  // ==========================================================================
  // Particle Background (Canvas Animation)
  // ==========================================================================
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = (canvas.width = window.innerWidth);
    height = (canvas.height = window.innerHeight);
  });

  const particles = [];
  const particleCount = 40;

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.25;
      this.vy = (Math.random() - 0.5) * 0.25;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? "rgba(0, 240, 255, 0.15)" : "rgba(168, 85, 247, 0.15)";
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animateParticles() {
    ctx.clearRect(0, 0, width, height);

    // Draw background subtle grid lines
    ctx.strokeStyle = "rgba(0, 240, 255, 0.015)";
    ctx.lineWidth = 1;
    const gridSize = 80;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Connect particles
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      p1.update();
      p1.draw();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.08 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animateParticles);
  }

  // Start particles animation loop
  animateParticles();
});
