"use client"

import { useState, useEffect, useRef } from "react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)
  const [filteredProjects, setFilteredProjects] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-Commerce Fashion Platform",
      category: "web",
      image: "/project-ecommerce.jpg",
      description: "A modern e-commerce platform for fashion brands with advanced filtering and seamless checkout.",
      longDescription:
        "Built a comprehensive e-commerce solution featuring user authentication, product management, shopping cart functionality, payment integration, and admin dashboard. The platform includes advanced search and filtering capabilities, wishlist functionality, and responsive design optimized for all devices.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://fashion-store-demo.com",
      codeUrl: "https://github.com/chioma/fashion-ecommerce",
      featured: true,
    },
    {
      id: 2,
      title: "Mental Health Mobile App",
      category: "mobile",
      image: "/project-mental-health.jpg",
      description: "A compassionate mobile app helping users track mood and connect with mental health resources.",
      longDescription:
        "Designed and developed a mobile application focused on mental health awareness and support. Features include mood tracking, meditation guides, crisis resources, community support, and professional consultation booking. The app prioritizes user privacy and accessibility.",
      technologies: ["React Native", "Firebase", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://mindful-app-demo.com",
      codeUrl: "https://github.com/chioma/mindful-app",
      featured: true,
    },
    {
      id: 3,
      title: "Creative Agency Branding",
      category: "design",
      image: "/project-branding.jpg",
      description:
        "Complete brand identity design for a creative digital agency including logo, website, and materials.",
      longDescription:
        "Developed a comprehensive brand identity for a creative agency, including logo design, color palette, typography system, business cards, letterheads, and website design. The branding reflects creativity, professionalism, and innovation while maintaining consistency across all touchpoints.",
      technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "InDesign"],
      liveUrl: "https://creative-agency-demo.com",
      codeUrl: null,
      featured: false,
    },
    {
      id: 4,
      title: "Task Management Dashboard",
      category: "web",
      image: "/project-dashboard.jpg",
      description: "Intuitive project management dashboard with real-time collaboration and analytics.",
      longDescription:
        "Created a comprehensive project management solution with features like task assignment, progress tracking, team collaboration, file sharing, and detailed analytics. The dashboard includes drag-and-drop functionality, real-time updates, and customizable workflows.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Chart.js"],
      liveUrl: "https://taskflow-demo.com",
      codeUrl: "https://github.com/chioma/taskflow",
      featured: true,
    },
    {
      id: 5,
      title: "Restaurant Mobile App",
      category: "mobile",
      image: "/project-restaurant.jpg",
      description: "Food ordering app with beautiful UI and seamless ordering experience.",
      longDescription:
        "Designed and developed a mobile application for restaurant food ordering with features like menu browsing, customization options, order tracking, payment integration, and loyalty rewards. The app focuses on user experience and visual appeal.",
      technologies: ["Flutter", "Dart", "Firebase", "Stripe", "Google Maps API"],
      liveUrl: "https://foodie-app-demo.com",
      codeUrl: "https://github.com/chioma/foodie-app",
      featured: false,
    },
    {
      id: 6,
      title: "Sustainable Living Blog",
      category: "web",
      image: "/project-blog.jpg",
      description: "Eco-friendly lifestyle blog with content management and community features.",
      longDescription:
        "Built a content-rich blog platform focused on sustainable living with features like article publishing, user comments, newsletter subscription, social sharing, and community forums. The site emphasizes clean design and fast loading times.",
      technologies: ["Gatsby", "React", "GraphQL", "Contentful", "Netlify"],
      liveUrl: "https://green-living-demo.com",
      codeUrl: "https://github.com/chioma/green-living-blog",
      featured: false,
    },
  ]

  const categories = [
    { key: "all", label: "All Projects", icon: "🎯" },
    { key: "web", label: "Web Development", icon: "🌐" },
    { key: "mobile", label: "Mobile Apps", icon: "📱" },
    { key: "design", label: "Design & Branding", icon: "🎨" },
  ]

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeFilter))
    }
  }, [activeFilter])

  const openModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = "unset"
  }

  return (
    <section id="projects" className="section projects-section" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? "animate" : ""}`}>Featured Projects</h2>

        <div className={`projects-intro ${isVisible ? "animate" : ""}`}>
          <p>
            Here's a showcase of my recent work, featuring a diverse range of projects from web applications to mobile
            apps and brand identities. Each project represents a unique challenge and creative solution.
          </p>
        </div>

        <div className={`filter-tabs ${isVisible ? "animate" : ""}`}>
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-button ${activeFilter === category.key ? "active" : ""}`}
              onClick={() => setActiveFilter(category.key)}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-text">{category.label}</span>
            </button>
          ))}
        </div>

        <div className={`projects-grid ${isVisible ? "animate" : ""}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? "featured" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <button className="action-button view-details">
                      <span>View Details</span>
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-button live-demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-category">{categories.find((cat) => cat.key === project.category)?.label}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-more">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>

              {project.featured && <div className="featured-badge">Featured</div>}
            </div>
          ))}
        </div>

        <div className={`projects-cta ${isVisible ? "animate" : ""}`}>
          <div className="cta-content">
            <h3>Like What You See?</h3>
            <p>Let's discuss your next project and bring your ideas to life!</p>
            <a href="#contact" className="btn btn-primary">
              <span>Start Your Project</span>
            </a>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            <div className="modal-image">
              <img src={selectedProject.image || "/placeholder.svg"} alt={selectedProject.title} />
            </div>

            <div className="modal-info">
              <div className="modal-category">
                {categories.find((cat) => cat.key === selectedProject.category)?.label}
              </div>
              <h2>{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.longDescription}</p>

              <div className="modal-tech">
                <h4>Technologies Used:</h4>
                <div className="tech-list">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <span>View Live Demo</span>
                  </a>
                )}
                {selectedProject.codeUrl && (
                  <a
                    href={selectedProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <span>View Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .projects-section {
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          position: relative;
          overflow: hidden;
        }

        .projects-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ec4899' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }

        .section-title.animate {
          animation: fadeInUp 1s ease forwards;
        }

        .projects-intro {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .projects-intro.animate {
          opacity: 1;
          transform: translateY(0);
          animation-delay: 0.2s;
        }

        .projects-intro p {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .filter-tabs.animate {
          opacity: 1;
          transform: translateY(0);
          animation-delay: 0.4s;
        }

        .filter-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: var(--bg-primary);
          border: 2px solid var(--border);
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .filter-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .filter-button.active {
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          color: white;
          border-color: transparent;
          box-shadow: 0 5px 20px rgba(236, 72, 153, 0.3);
        }

        .filter-icon {
          font-size: 1.2rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .projects-grid.animate {
          opacity: 1;
          transform: translateY(0);
          animation-delay: 0.6s;
        }

        .project-card {
          background: var(--bg-primary);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease forwards;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(236, 72, 153, 0.2);
        }

        .project-card.featured {
          border: 2px solid var(--primary-pink);
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          z-index: 2;
        }

        .project-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.9), rgba(244, 114, 182, 0.9));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-actions {
          display: flex;
          gap: 1rem;
          flex-direction: column;
        }

        .action-button {
          padding: 0.75rem 1.5rem;
          background: white;
          color: var(--primary-pink);
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          text-align: center;
        }

        .action-button:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
        }

        .project-content {
          padding: 2rem;
        }

        .project-category {
          font-size: 0.9rem;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .project-content h3 {
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-size: 1.3rem;
        }

        .project-content p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          align-items: center;
        }

        .tech-tag {
          background: var(--bg-secondary);
          color: var(--text-secondary);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid var(--border);
        }

        .tech-more {
          color: var(--accent);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .projects-cta {
          text-align: center;
          padding: 3rem;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          border-radius: 30px;
          color: white;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .projects-cta.animate {
          opacity: 1;
          transform: translateY(0);
          animation-delay: 0.8s;
        }

        .cta-content h3 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .projects-cta .btn {
          background: white;
          color: var(--primary-pink);
          font-weight: 600;
        }

        .projects-cta .btn:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-3px);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: var(--bg-primary);
          border-radius: 20px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.3s ease;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 40px;
          height: 40px;
          border: none;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 2;
          transition: background 0.3s ease;
        }

        .modal-close:hover {
          background: rgba(0, 0, 0, 0.7);
        }

        .modal-image {
          height: 300px;
          overflow: hidden;
          border-radius: 20px 20px 0 0;
        }

        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-info {
          padding: 2rem;
        }

        .modal-category {
          font-size: 0.9rem;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .modal-info h2 {
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .modal-description {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .modal-tech {
          margin-bottom: 2rem;
        }

        .modal-tech h4 {
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .filter-tabs {
            flex-direction: column;
            align-items: center;
          }

          .filter-button {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-actions {
            flex-direction: row;
          }

          .projects-cta {
            padding: 2rem;
          }

          .cta-content h3 {
            font-size: 2rem;
          }

          .modal-content {
            margin: 1rem;
            max-height: 95vh;
          }

          .modal-info {
            padding: 1.5rem;
          }

          .modal-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .project-content {
            padding: 1.5rem;
          }

          .modal-overlay {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
