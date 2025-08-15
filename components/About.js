"use client"

import { useState, useEffect, useRef } from "react"
import {
  Palette,
  Lightbulb,
  Users,
  Briefcase,
  Rocket,
  Monitor,
  Sparkles,
  BarChart3,
  Smile,
  Clock,
  Target,
} from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTimeline, setActiveTimeline] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleTimelineInteraction = (index) => {
    setActiveTimeline(index)
  }

  const timelineData = [
    {
      year: "2020",
      title: "Started Design Journey",
      description: "Discovered my passion for creating beautiful digital experiences",
      icon: <Palette size={20} />,
    },
    {
      year: "2021",
      title: "First Client Projects",
      description: "Began freelancing and building my portfolio with real-world projects",
      icon: <Briefcase size={20} />,
    },
    {
      year: "2022",
      title: "Advanced Skills",
      description: "Mastered modern frameworks and advanced design principles",
      icon: <Rocket size={20} />,
    },
    {
      year: "2023",
      title: "Full-Stack Development",
      description: "Expanded into backend development and database management",
      icon: <Monitor size={20} />,
    },
    {
      year: "2024",
      title: "Creative Excellence",
      description: "Focusing on innovative solutions and exceptional user experiences",
      icon: <Sparkles size={20} />,
    },
  ]

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <BarChart3 size={24} /> },
    { number: "25+", label: "Happy Clients", icon: <Smile size={24} /> },
    { number: "3+", label: "Years Experience", icon: <Clock size={24} /> },
    { number: "100%", label: "Satisfaction Rate", icon: <Target size={24} /> },
  ]

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? "animate" : ""}`}>About Me</h2>

        <div className="about-content">
          <div className={`about-text ${isVisible ? "animate" : ""}`}>
            <div className="intro-text">
              <h3>Hello! I'm Chioma</h3>
              <p>
                A passionate creative designer and developer who believes in the power of beautiful, functional design.
                I specialize in creating digital experiences that not only look stunning but also solve real problems
                and delight users.
              </p>
              <p>
                My journey in design and development has been driven by curiosity, creativity, and a constant desire to
                learn and grow. I love working with clients who share my passion for excellence and innovation.
              </p>
            </div>

            <div className="personality-traits">
              <div
                className="trait"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  animation: isVisible ? "slideInUp 0.6s ease forwards" : "none",
                }}
              >
                <div className="trait-icon">
                  <Palette size={24} />
                </div>
                <div className="trait-content">
                  <h4>Creative Thinker</h4>
                  <p>I approach every project with fresh eyes and innovative solutions</p>
                </div>
              </div>
              <div
                className="trait"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  animation: isVisible ? "slideInUp 0.6s ease forwards" : "none",
                  animationDelay: isVisible ? "0.5s" : "none",
                }}
              >
                <div className="trait-icon">
                  <Lightbulb size={24} />
                </div>
                <div className="trait-content">
                  <h4>Problem Solver</h4>
                  <p>I love turning complex challenges into elegant, simple solutions</p>
                </div>
              </div>
              <div
                className="trait"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  animation: isVisible ? "slideInUp 0.6s ease forwards" : "none",
                  animationDelay: isVisible ? "0.7s" : "none",
                }}
              >
                <div className="trait-icon">
                  <Users size={24} />
                </div>
                <div className="trait-content">
                  <h4>Collaborative</h4>
                  <p>I believe the best results come from working closely with clients</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`about-visual ${isVisible ? "animate" : ""}`}>
            <div className="profile-card">
              <div className="card-glow"></div>
              <img src="/creative-workspace.png" alt="Creative workspace" />
              <div className="card-overlay">
                <h4>Always Creating</h4>
                <p>Passionate about bringing ideas to life</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`stats-section ${isVisible ? "animate" : ""}`}>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`timeline-section ${isVisible ? "animate" : ""}`}>
          <h3>My Journey</h3>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${activeTimeline >= index ? "active" : ""}`}
                onMouseEnter={() => setActiveTimeline(index)}
                onTouchStart={() => handleTimelineInteraction(index)}
                onClick={() => handleTimelineInteraction(index)}
                style={{ "--item-index": index }}
              >
                <div className="timeline-marker">
                  <div className="timeline-icon">{item.icon}</div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }

        .section-title.animate {
          animation: fadeInUp 1s ease forwards;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 5rem;
          align-items: center;
        }

        .about-text {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 1s ease;
        }

        .about-text.animate {
          opacity: 1;
          transform: translateX(0);
          animation: slideInLeft 1s ease forwards;
          animation-delay: 0.3s;
        }

        .intro-text h3 {
          font-size: 2.5rem;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
        }

        .intro-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .personality-traits {
          margin-top: 3rem;
        }

        .trait {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: var(--bg-primary);
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid var(--border);
          opacity: 0;
          transform: translateY(20px);
        }

        .trait:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(236, 72, 153, 0.15);
        }

        .trait-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          border-radius: 50%;
          color: white;
          margin-right: 1.5rem;
          animation: pulse 2s ease-in-out infinite;
        }

        .trait-content h4 {
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .trait-content p {
          margin: 0;
          color: var(--text-secondary);
        }

        .about-visual {
          opacity: 0;
          transform: translateX(50px);
          transition: all 1s ease;
        }

        .about-visual.animate {
          opacity: 1;
          transform: translateX(0);
          animation: slideInRight 1s ease forwards;
          animation-delay: 0.5s;
        }

        .profile-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .profile-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(236, 72, 153, 0.2);
        }

        .card-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          border-radius: 22px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .profile-card:hover .card-glow {
          opacity: 1;
        }

        .profile-card img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .profile-card:hover img {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: 2rem;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .profile-card:hover .card-overlay {
          transform: translateY(0);
        }

        .stats-section {
          margin-bottom: 5rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease;
        }

        .stats-section.animate {
          opacity: 1;
          transform: translateY(0);
          animation: slideInUp 1s ease forwards;
          animation-delay: 0.7s;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          text-align: center;
          padding: 2rem;
          background: var(--bg-primary);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid var(--border);
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease forwards;
        }

        .stat-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(236, 72, 153, 0.15);
        }

        .stat-icon {
          color: var(--primary-pink);
          margin-bottom: 1rem;
          animation: bounce 2s ease-in-out infinite;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-secondary);
          font-weight: 500;
        }

        .timeline-section {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease;
        }

        .timeline-section.animate {
          opacity: 1;
          transform: translateY(0);
          animation: slideInUp 1s ease forwards;
          animation-delay: 0.9s;
        }

        .timeline-section h3 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          opacity: 0.5;
          transition: all 0.5s ease;
        }

        .timeline-item.active {
          opacity: 1;
        }

        .timeline-item:nth-child(odd) .timeline-content {
          left: 0;
          right: 55%;
          text-align: right;
        }

        .timeline-item:nth-child(even) .timeline-content {
          left: 55%;
          right: 0;
          text-align: left;
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          background: var(--bg-primary);
          border: 3px solid var(--primary-pink);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .timeline-item.active .timeline-marker {
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          transform: translateX(-50%) scale(1.2);
          box-shadow: 0 0 20px rgba(236, 72, 153, 0.5);
        }

        .timeline-icon {
          color: var(--primary-pink);
        }

        .timeline-item.active .timeline-icon {
          color: white;
        }

        .timeline-content {
          position: absolute;
          top: 0;
          padding: 1.5rem;
          background: var(--bg-primary);
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }

        .timeline-item.active .timeline-content {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(236, 72, 153, 0.15);
        }

        .timeline-year {
          font-size: 0.9rem;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .timeline-content h4 {
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .timeline-content p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-text.animate {
            animation: slideInUp 0.8s ease forwards;
            animation-delay: 0.2s;
          }

          .about-visual.animate {
            animation: slideInUp 0.8s ease forwards;
            animation-delay: 0.4s;
          }

          .stats-section.animate {
            animation: slideInUp 0.8s ease forwards;
            animation-delay: 0.6s;
          }

          .timeline-section.animate {
            animation: slideInUp 0.8s ease forwards;
            animation-delay: 0.8s;
          }

          .timeline::before {
            left: 30px;
          }

          .timeline-marker {
            left: 30px;
          }

          .timeline-item:nth-child(odd) .timeline-content,
          .timeline-item:nth-child(even) .timeline-content {
            left: 80px;
            right: 20px;
            text-align: left;
          }

          .timeline-section.animate .timeline-item {
            animation: slideInUp 0.6s ease forwards;
            animation-delay: calc(1s + var(--item-index) * 0.15s);
          }

          .trait {
            flex-direction: column;
            text-align: center;
            margin-bottom: 1.5rem;
            padding: 2rem 1.5rem;
          }

          .trait-icon {
            width: 60px;
            height: 60px;
            margin-right: 0;
            margin-bottom: 1rem;
          }

          .trait-content h4 {
            font-size: 1.2rem;
            margin-bottom: 0.8rem;
          }

          .trait-content p {
            font-size: 0.95rem;
            line-height: 1.6;
          }
        }
      `}</style>
    </section>
  )
}
