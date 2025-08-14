"use client"

import { useState, useEffect, useRef } from "react"
import {
  Palette,
  Settings,
  Sparkles,
  Wrench,
  Code2,
  Globe,
  Triangle,
  FileCode,
  Wind,
  Server,
  Leaf,
  Rocket,
  Link,
  Database,
  Shield,
  Target,
  Figma,
  PaletteIcon,
  Smartphone,
  Search,
  Ruler,
  Github,
  Monitor,
  Package,
  Container,
  Cloud,
  TestTube,
  Lightbulb,
  Users,
  ClipboardList,
  MessageCircle,
  BookOpen,
  Eye,
} from "lucide-react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("frontend")
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

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <Palette size={20} />,
      skills: [
        { name: "React", level: 95, icon: <Code2 size={24} color="#61DAFB" /> },
        { name: "JavaScript", level: 90, icon: <FileCode size={24} color="#F7DF1E" /> },
        { name: "HTML/CSS", level: 95, icon: <Globe size={24} color="#E34F26" /> },
        { name: "Next.js", level: 85, icon: <Triangle size={24} color="#000000" /> },
        { name: "TypeScript", level: 80, icon: <Code2 size={24} color="#3178C6" /> },
        { name: "Tailwind CSS", level: 90, icon: <Wind size={24} color="#06B6D4" /> },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: <Settings size={20} />,
      skills: [
        { name: "Node.js", level: 85, icon: <Server size={24} color="#339933" /> },
        { name: "MongoDB", level: 80, icon: <Leaf size={24} color="#47A248" /> },
        { name: "Express.js", level: 85, icon: <Rocket size={24} color="#000000" /> },
        { name: "API Design", level: 90, icon: <Link size={24} color="#FF6B6B" /> },
        { name: "Database Design", level: 75, icon: <Database size={24} color="#336791" /> },
        { name: "Authentication", level: 80, icon: <Shield size={24} color="#4ECDC4" /> },
      ],
    },
    design: {
      title: "Design & UX",
      icon: <Sparkles size={20} />,
      skills: [
        { name: "UI/UX Design", level: 95, icon: <Target size={24} color="#FF6B6B" /> },
        { name: "Figma", level: 90, icon: <Figma size={24} color="#F24E1E" /> },
        { name: "Adobe Creative Suite", level: 85, icon: <PaletteIcon size={24} color="#FF0000" /> },
        { name: "Prototyping", level: 90, icon: <Smartphone size={24} color="#4ECDC4" /> },
        { name: "User Research", level: 80, icon: <Search size={24} color="#45B7D1" /> },
        { name: "Wireframing", level: 85, icon: <Ruler size={24} color="#96CEB4" /> },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      icon: <Wrench size={20} />,
      skills: [
        { name: "Git/GitHub", level: 90, icon: <Github size={24} color="#181717" /> },
        { name: "VS Code", level: 95, icon: <Monitor size={24} color="#007ACC" /> },
        { name: "Webpack", level: 75, icon: <Package size={24} color="#8DD6F9" /> },
        { name: "Docker", level: 70, icon: <Container size={24} color="#2496ED" /> },
        { name: "AWS", level: 65, icon: <Cloud size={24} color="#FF9900" /> },
        { name: "Testing", level: 80, icon: <TestTube size={24} color="#C21325" /> },
      ],
    },
  }

  const softSkills = [
    {
      name: "Creative Problem Solving",
      icon: <Lightbulb size={48} />,
      description: "Finding innovative solutions to complex challenges",
    },
    {
      name: "Team Collaboration",
      icon: <Users size={48} />,
      description: "Working effectively with diverse teams and stakeholders",
    },
    {
      name: "Project Management",
      icon: <ClipboardList size={48} />,
      description: "Managing timelines, resources, and deliverables efficiently",
    },
    {
      name: "Communication",
      icon: <MessageCircle size={48} />,
      description: "Clear and effective communication with clients and team members",
    },
    {
      name: "Continuous Learning",
      icon: <BookOpen size={48} />,
      description: "Staying updated with latest technologies and best practices",
    },
    {
      name: "Attention to Detail",
      icon: <Eye size={48} />,
      description: "Ensuring pixel-perfect designs and bug-free code",
    },
  ]

  return (
    <section id="skills" className="section skills-section" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? "animate" : ""}`}>Skills & Expertise</h2>

        <div className={`skills-intro ${isVisible ? "animate" : ""}`}>
          <p>
            I'm passionate about creating exceptional digital experiences through a combination of technical expertise
            and creative vision. Here's what I bring to every project:
          </p>
        </div>

        <div className={`category-tabs ${isVisible ? "animate" : ""}`}>
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              className={`tab-button ${activeCategory === key ? "active" : ""}`}
              onClick={() => setActiveCategory(key)}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-text">{category.title}</span>
            </button>
          ))}
        </div>

        <div className={`skills-content ${isVisible ? "animate" : ""}`}>
          <div className="skills-grid">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="skill-header">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: isVisible ? `${skill.level}%` : "0%" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`soft-skills-section ${isVisible ? "animate" : ""}`}>
          <h3>Soft Skills</h3>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={skill.name} className="soft-skill-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="soft-skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`skills-cta ${isVisible ? "animate" : ""}`}>
          <div className="cta-content">
            <h3>Ready to Work Together?</h3>
            <p>Let's combine these skills to create something amazing for your project!</p>
            <a href="#contact" className="btn btn-primary">
              <span>Start a Project</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          background: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .skills-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(244, 114, 182, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .section-title.animate {
          animation: fadeInUp 1s ease forwards;
        }

        .skills-intro {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 3rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .skills-intro.animate {
          opacity: 1;
          transform: translateY(0);
          animation-delay: 0.2s;
        }

        .skills-intro p {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .category-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .category-tabs.animate {
          opacity: 1;
          transform: translateY(0);
          animation-delay: 0.4s;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: var(--bg-secondary);
          border: 2px solid var(--border);
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .tab-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .tab-button.active {
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          color: white;
          border-color: transparent;
          box-shadow: 0 5px 20px rgba(236, 72, 153, 0.3);
        }

        .tab-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skills-content {
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .skills-content.animate {
          opacity: 1;
          transform: translateY(0);
          animation-delay: 0.6s;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease forwards;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(236, 72, 153, 0.15);
        }

        .skill-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .skill-icon {
          margin-right: 1rem;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .skill-info {
          flex: 1;
        }

        .skill-info h4 {
          margin: 0 0 0.5rem 0;
          color: var(--text-primary);
        }

        .skill-percentage {
          font-weight: 600;
          color: var(--accent);
        }

        .skill-bar {
          width: 100%;
          height: 8px;
          background: var(--border);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          border-radius: 4px;
          transition: width 2s ease;
          position: relative;
        }

        .skill-progress::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .soft-skills-section {
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .soft-skills-section.animate {
          opacity: 1;
          transform: translateY(0);
          animation-delay: 0.8s;
        }

        .soft-skills-section h3 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .soft-skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .soft-skill-card {
          text-align: center;
          padding: 2rem;
          background: var(--bg-secondary);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease forwards;
        }

        .soft-skill-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(236, 72, 153, 0.15);
        }

        .soft-skill-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
          animation: bounce 2s ease-in-out infinite;
          color: var(--primary-pink);
        }

        .soft-skill-card h4 {
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .soft-skill-card p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .skills-cta {
          text-align: center;
          padding: 3rem;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          border-radius: 30px;
          color: white;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .skills-cta.animate {
          opacity: 1;
          transform: translateY(0);
          animation-delay: 1s;
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

        .skills-cta .btn {
          background: white;
          color: var(--primary-pink);
          font-weight: 600;
        }

        .skills-cta .btn:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-3px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .category-tabs {
            flex-direction: column;
            align-items: center;
          }

          .tab-button {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .soft-skills-grid {
            grid-template-columns: 1fr;
          }

          .skills-cta {
            padding: 2rem;
          }

          .cta-content h3 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .skill-header {
            flex-direction: column;
            text-align: center;
          }

          .skill-icon {
            margin-right: 0;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
