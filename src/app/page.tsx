import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full max-w-5xl opacity-20 dark:opacity-10 z-0 pointer-events-none">
        <Image
          src="/ai-particles.svg"
          width={850}
          height={850}
          alt="AI Network Visualization"
        />
      </div>

      {/* Navigation */}
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="hero-gradient-overlay"></div>
            <div className="hero-particles-bg"></div>
            <div className="hero-mesh-gradient"></div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center space-y-8">
              {/* Enhanced Logo and Title Section */}
              <div className="hero-header space-y-6">
                <div className="hero-logo-container">
                  <div className="hero-logo-glow"></div>
                  <Image
                    src="/aipllogo.png"
                    alt="AI Research Lab Logo"
                    width={120}
                    height={120}
                    className="hero-logo relative z-10"
                    priority
                  />
                </div>
                <div className="hero-title-section">
                  <h2 className="hero-lab-title">AI Perception Lab</h2>
                  <div className="hero-title-underline"></div>
                </div>
              </div>

              {/* Enhanced Hero Statement */}
              <div className="hero-statement-container">
                <div className="hero-statement-card">
                  <div className="hero-statement-glow"></div>
                  <h1 className="hero-statement-text">
                    Engineering adaptive AI perception through
                    <span className="hero-highlight">
                      {" "}
                      human-machine-environment synthesis
                    </span>
                    —enabling ethical autonomy in intelligent infrastructures
                    and
                    <span className="hero-highlight">
                      {" "}
                      human-machine collaboration
                    </span>
                    .
                  </h1>
                </div>
              </div>

              {/* Enhanced Call to Action */}
              <div className="hero-cta-section">
                <div className="hero-cta-container">
                  <a href="#about" className="hero-cta-primary">
                    <span className="hero-cta-icon">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <span>Explore Our Research</span>
                  </a>
                  <a href="#apply" className="hero-cta-secondary">
                    <span className="hero-cta-icon">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <span>Join the Lab</span>
                  </a>
                </div>

                {/* Research Focus Pills */}
                <div className="hero-focus-pills">
                  <div className="focus-pill">Computer Vision</div>
                  <div className="focus-pill">Causal AI</div>
                  <div className="focus-pill">Human-AI Collaboration</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="hero-floating-elements">
            <div className="floating-element floating-1"></div>
            <div className="floating-element floating-2"></div>
            <div className="floating-element floating-3"></div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-container section-light">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="section-title">About the Lab</h2>
              <p className="section-subtitle">
                Redefining research through open exploration and collaborative
                innovation
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
              {/* The Problem */}
              <div className="glassmorphism-card p-10 lg:p-12 space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-red-600 dark:text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-enhanced">
                    The Problem
                  </h3>
                </div>
                <h4 className="text-xl font-semibold text-muted-enhanced mb-4">
                  Closed Doors, Narrow Paths
                </h4>
                <p className="text-lg text-body mb-6">
                  Traditional research labs often exclude students through rigid
                  admissions, hyper-specialized focuses, and opaque selection
                  criteria—leaving many unsure how to begin or pivot.
                </p>
                <div className="space-y-4">
                  <div className="problem-item">
                    <div className="problem-icon">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong>Access barriers</strong>: Fixed application cycles
                      and GPA cutoffs exclude self-motivated learners
                    </div>
                  </div>
                  <div className="problem-item">
                    <div className="problem-icon">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong>Narrow scope</strong>: Overly specialized projects
                      limit interdisciplinary growth
                    </div>
                  </div>
                  <div className="problem-item">
                    <div className="problem-icon">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong>Uncertain fit</strong>: Students hesitate to
                      commit without testing diverse research approaches
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Solution */}
              <div className="glassmorphism-card p-10 lg:p-12 space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-enhanced">
                    Our Solution
                  </h3>
                </div>
                <h4 className="text-xl font-semibold text-emphasized mb-4">
                  Open Exploration
                </h4>
                <p className="text-lg text-body mb-6">
                  Your research, your trajectory—join anytime and contribute to
                  meaningful innovation.
                </p>
                <div className="space-y-4">
                  <div className="solution-item">
                    <div className="solution-icon">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong>Continuous Intake</strong>: Join anytime—no rigid
                      deadlines or semesters
                    </div>
                  </div>
                  <div className="solution-item">
                    <div className="solution-icon">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong>Diverse Focus Areas</strong>: Contribute to
                      ongoing projects or propose your own ideas
                    </div>
                  </div>
                  <div className="solution-item">
                    <div className="solution-icon">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong>Purpose-Driven Impact</strong>: Prioritize
                      meaningful innovation over publication volume
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mentorship and Structure */}
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 mt-16">
              {/* Mentorship */}
              <div className="glassmorphism-card p-10 lg:p-12">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-enhanced">
                      Mentorship
                    </h3>
                    <p className="text-emphasized">Guidance Tailored to You</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="mentorship-feature">
                    <h4 className="font-semibold text-secondary-enhanced mb-2">
                      Accessible Experts
                    </h4>
                    <p className="text-body">
                      Consult mentors actively engaged in both academia and
                      industry
                    </p>
                  </div>
                  <div className="mentorship-feature">
                    <h4 className="font-semibold text-secondary-enhanced mb-2">
                      Collaborative Support
                    </h4>
                    <p className="text-body">
                      Peer and mentor-reviewed work, cross-project workshops,
                      and open lab resources
                    </p>
                  </div>
                  <div className="mentorship-feature">
                    <h4 className="font-semibold text-secondary-enhanced mb-2">
                      Skill Development
                    </h4>
                    <p className="text-body">
                      Gain expertise through collaborative coding standards and
                      hands-on learning
                    </p>
                  </div>
                </div>
              </div>

              {/* Structured Autonomy */}
              <div className="glassmorphism-card p-10 lg:p-12">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-600 dark:text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-enhanced">
                      Structured Autonomy
                    </h3>
                    <p className="text-emphasized">
                      Progress through collaboration
                    </p>
                  </div>
                </div>
                <p className="text-body mb-6">
                  Your journey follows a tiered roadmap, exposing you to the
                  full research lifecycle:
                </p>
                <div className="space-y-4">
                  <div className="tier-item">
                    <div className="tier-badge tier-new">1</div>
                    <div>
                      <strong>New Member</strong>: Immerse in lab culture and
                      develop foundational skills
                    </div>
                  </div>
                  <div className="tier-item">
                    <div className="tier-badge tier-active">2</div>
                    <div>
                      <strong>Active Member</strong>: Contribute to projects and
                      collaborate with peers
                    </div>
                  </div>
                  <div className="tier-item">
                    <div className="tier-badge tier-mentor">3</div>
                    <div>
                      <strong>Mentor</strong>: Guide others while deepening
                      technical abilities
                    </div>
                  </div>
                  <div className="tier-item">
                    <div className="tier-badge tier-lead">4</div>
                    <div>
                      <strong>Project Lead</strong>: Oversee initiatives and
                      drive innovation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-container section-dark">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="section-title">Research Projects</h2>
              <p className="section-subtitle">
                Advancing AI perception through innovative research initiatives
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {/* Project 1 */}
              <div className="project-card group">
                <div className="project-header">
                  <div className="project-icon">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="project-title">CausalVision</h3>
                </div>
                <p className="project-description">
                  Advancing semantic segmentation through causal inference and
                  knowledge graphs to improve interpretability and robustness in
                  image understanding, moving beyond correlation to model object
                  interactions and contextual dependencies.
                </p>
                <div className="project-tags">
                  <span className="tag">Computer Vision</span>
                  <span className="tag">Causal AI</span>
                  <span className="tag">Knowledge Graphs</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-card group">
                <div className="project-header">
                  <div className="project-icon">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="project-title">Adaptive NLP</h3>
                </div>
                <p className="project-description">
                  Developing uncertainty-aware dialogue systems using
                  probabilistic modeling and knowledge graphs to enable
                  adaptive, context-sensitive conversations that reconcile
                  ambiguity with user-specific needs.
                </p>
                <div className="project-tags">
                  <span className="tag">NLP</span>
                  <span className="tag">Dialogue Systems</span>
                  <span className="tag">Uncertainty</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="project-card group md:col-span-2 lg:col-span-1">
                <div className="project-header">
                  <div className="project-icon">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="project-title">Propose Research</h3>
                </div>
                <p className="project-description">
                  Inspired by a different direction in AI perception? Share your
                  vision and lead your own project with the support of our
                  lab&apos;s resources and mentorship.
                </p>
                <div className="project-cta">
                  <a href="#contact" className="propose-button">
                    Propose Your Idea
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section-container section-light">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="section-title">Our Team</h2>
              <p className="section-subtitle">
                Meet the researchers driving innovation in AI perception
              </p>
            </div>

            <div className="team-grid">
              {/* Core Team */}
              <div className="team-category">
                <div className="category-header">
                  <h3 className="category-title">Core Team</h3>
                  <div className="category-line"></div>
                </div>
                <div className="team-members">
                  <div className="team-member">
                    <div className="member-avatar">AS</div>
                    <div className="member-info">
                      <h4 className="member-name">Alexzander Sansiveri</h4>
                      <p className="member-role">Lab Lead</p>
                    </div>
                  </div>
                  <div className="team-member">
                    <div className="member-avatar">AC</div>
                    <div className="member-info">
                      <h4 className="member-name">Anthony Campos</h4>
                      <p className="member-role">Operations Manager</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advisor */}
              <div className="team-category">
                <div className="category-header">
                  <h3 className="category-title">Advisor</h3>
                  <div className="category-line"></div>
                </div>
                <div className="team-members">
                  <div className="team-member">
                    <div className="member-avatar">EM</div>
                    <div className="member-info">
                      <h4 className="member-name">Dr. Ennio Mingolla</h4>
                      <p className="member-role">Faculty Advisor</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collaborators */}
              <div className="team-category">
                <div className="category-header">
                  <h3 className="category-title">Collaborators</h3>
                  <div className="category-line"></div>
                </div>
                <div className="team-members">
                  <div className="team-member">
                    <div className="member-avatar">MI</div>
                    <div className="member-info">
                      <h4 className="member-name">Mert Inan</h4>
                      <p className="member-role">Research Collaborator</p>
                    </div>
                  </div>
                  <div className="team-member">
                    <div className="member-avatar">IS</div>
                    <div className="member-info">
                      <h4 className="member-name">Ian Steenstra</h4>
                      <p className="member-role">Research Collaborator</p>
                    </div>
                  </div>
                  <div className="team-member">
                    <div className="member-avatar">GM</div>
                    <div className="member-info">
                      <h4 className="member-name">Girik Malik</h4>
                      <p className="member-role">Research Collaborator</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Members */}
              <div className="team-category">
                <div className="category-header">
                  <h3 className="category-title">Active Members</h3>
                  <div className="category-line"></div>
                </div>
                <div className="team-members">
                  <div className="empty-state">
                    <div className="empty-icon">
                      <svg
                        className="w-12 h-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <p className="empty-text">Be the first to join!</p>
                    <a href="#apply" className="empty-cta">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="section-container section-dark">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-20">
              <h2 className="section-title">Publications</h2>
              <p className="section-subtitle">
                Research contributions and academic publications
              </p>
            </div>

            <div className="publications-placeholder">
              <div className="placeholder-icon">
                <svg
                  className="w-16 h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="placeholder-title">Publications Coming Soon!</h3>
              <p className="placeholder-description">
                Our research is in progress. Check back soon for our latest
                publications and findings.
              </p>
              <div className="placeholder-actions">
                <a href="#contact" className="placeholder-button">
                  Get Notified
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-container section-light">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="section-title">Contact Us</h2>
              <p className="section-subtitle">
                Ready to collaborate? Let&apos;s explore opportunities together
              </p>
            </div>

            <div className="contact-grid">
              {/* Contact Information */}
              <div className="contact-info">
                <h3 className="contact-section-title">Get in Touch</h3>
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-icon">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">Email</span>
                      <span className="contact-value">
                        contact@aiperceptionlab.com
                      </span>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">Phone</span>
                      <span className="contact-value">+1 (555) 123-4567</span>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">Location</span>
                      <span className="contact-value">
                        123 Tech Innovation Center
                        <br />
                        Research Park
                        <br />
                        San Francisco, CA 94107
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="contact-actions">
                <h3 className="contact-section-title">Quick Actions</h3>
                <div className="action-buttons">
                  <a href="#" className="action-button primary">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Schedule a Meeting
                  </a>

                  <a href="#" className="action-button secondary">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM16 3h5v5h-5V3zM4 3h6v6H4V3z"
                      />
                    </svg>
                    Join Our Newsletter
                  </a>

                  <a href="#" className="action-button secondary">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Follow Our Research
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="apply" className="section-container section-dark">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-20">
              <h2 className="section-title">Join Our Lab</h2>
              <p className="section-subtitle">
                Ready to start your research journey? Follow these simple steps
              </p>
            </div>

            <div className="application-process">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3 className="step-title">Access the AI Club Notion</h3>
                  <p className="step-description">
                    Join Northeastern&apos;s AI Club Notion workspace to get
                    started with our community.
                  </p>
                  <a
                    href="https://www.notion.so/invite/ba441204434aca1a59ff22cb546b93b1feac30b4"
                    className="step-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Notion Workspace →
                  </a>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3 className="step-title">Complete the Membership Form</h3>
                  <p className="step-description">
                    Fill out the membership access form available on the Notion
                    homepage to apply.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3 className="step-title">Request Lab Access</h3>
                  <p className="step-description">
                    Submit a request to join the{" "}
                    <strong>AI Perception Lab Teamspace</strong> through Notion.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3 className="step-title">Await Approval</h3>
                  <p className="step-description">
                    Your request will be reviewed within 3 business days.
                    We&apos;ll be in touch soon!
                  </p>
                </div>
              </div>
            </div>

            <div className="application-cta">
              <p className="cta-text">
                Questions about the application process?
              </p>
              <a href="#contact" className="cta-button">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container mx-auto px-6 py-12">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">
                <Image
                  src="/aipllogo.png"
                  alt="AI Research Lab Logo"
                  width={40}
                  height={40}
                  className="opacity-80"
                />
                <span className="footer-title">AI Perception Lab</span>
              </div>
              <p className="footer-description">
                Engineering adaptive AI perception through
                human-machine-environment synthesis.
              </p>
              <p className="footer-copyright">
                © 2025 Artificial Intelligence Perception Lab. All rights
                reserved.
              </p>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4 className="link-group-title">Research</h4>
                <a href="#projects" className="footer-link">
                  Projects
                </a>
                <a href="#publications" className="footer-link">
                  Publications
                </a>
                <a href="#team" className="footer-link">
                  Team
                </a>
              </div>

              <div className="link-group">
                <h4 className="link-group-title">Get Involved</h4>
                <a href="#apply" className="footer-link">
                  Apply
                </a>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
                <a href="#" className="footer-link">
                  Newsletter
                </a>
              </div>

              <div className="link-group">
                <h4 className="link-group-title">Legal</h4>
                <a href="#" className="footer-link">
                  Privacy
                </a>
                <a href="#" className="footer-link">
                  Terms
                </a>
                <a href="#" className="footer-link">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
