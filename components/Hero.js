"use client"

import { useState, useEffect } from "react"
import { Sparkles, Heart, Palette, Monitor } from "lucide-react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="hero">
      {/* Animated Background Elements */}
      <div className="hero-bg">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>

        <div
          className="gradient-orb"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          }}
        ></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <div className={`hero-greeting ${isVisible ? "animate" : ""}`}>
            <span>Hello, I'm</span>
          </div>

          <h1 className={`hero-name ${isVisible ? "animate" : ""}`}>
            <span className="name-part">Egwuatu</span>
            <span className="name-part">Chioma</span>
          </h1>

          <div className={`hero-title ${isVisible ? "animate" : ""}`}>
            <div className="typing-container">
              <span className="typing-text">Creative Designer & Developer</span>
              <span className="cursor">|</span>
            </div>
          </div>

          <p className={`hero-description ${isVisible ? "animate" : ""}`}>
            Crafting beautiful digital experiences with passion, creativity, and attention to detail. I bring ideas to
            life through innovative design and seamless user experiences.
          </p>

          <div className={`hero-buttons ${isVisible ? "animate" : ""}`}>
            <button className="btn btn-primary" onClick={scrollToAbout}>
              <span>Explore My Work</span>
              <div className="btn-ripple"></div>
            </button>
            <a href="#contact" className="btn btn-outline">
              <span>Get In Touch</span>
            </a>
          </div>
        </div>

        <div className={`hero-visual ${isVisible ? "animate" : ""}`}>
          <div className="profile-container">
            <div className="profile-ring"></div>
            <div className="profile-image">
              <img src="/IMG_3425.HEIC" alt="Egwuatu Chioma - Creative Designer" />
            </div>
            <div className="floating-icons">
              <div className="icon icon-1">
                <Sparkles size={24} />
              </div>
              <div className="icon icon-2">
                <Heart size={24} />
              </div>
              <div className="icon icon-3">
                <Palette size={24} />
              </div>
              <div className="icon icon-4">
                <Monitor size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={scrollToAbout}>
        <div className="scroll-text">Scroll Down</div>
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 80px;
          height: 80px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 120px;
          height: 120px;
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 60px;
          height: 60px;
          top: 80%;
          left: 20%;
          animation-delay: 4s;
        }

        .shape-4 {
          width: 100px;
          height: 100px;
          top: 10%;
          right: 30%;
          animation-delay: 1s;
        }

        .shape-5 {
          width: 40px;
          height: 40px;
          top: 40%;
          left: 5%;
          animation-delay: 3s;
        }

        .gradient-orb {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(244, 114, 182, 0.1) 50%, transparent 100%);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
          pointer-events: none;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }

        .hero-text {
          z-index: 2;
        }

        .hero-greeting {
          font-size: 1.2rem;
          color: var(--accent);
          margin-bottom: 1rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .hero-greeting.animate {
          opacity: 1;
          transform: translateY(0);
          animation-delay: 0.2s;
        }

        .hero-name {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease;
        }

        .hero-name.animate {
          opacity: 1;
          transform: translateY(0);
          animation-delay: 0.4s;
        }

        .name-part {
          display: block;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink), var(--dark-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }

        .name-part:nth-child(2) {
          animation-delay: 1.5s;
        }

        .hero-title {
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .hero-title.animate {
          opacity: 1;
          transform: translateY(0);
          animation-delay: 0.6s;
        }

        .typing-container {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .typing-text {
          overflow: hidden;
          border-right: 2px solid var(--accent);
          white-space: nowrap;
          animation: typing 3s steps(30, end), blink-caret 0.75s step-end infinite;
        }

        .cursor {
          animation: blink 1s infinite;
          color: var(--accent);
          margin-left: 2px;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .hero-description.animate {
          opacity: 1;
          transform: translateY(0);
          animation-delay: 0.8s;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .hero-buttons.animate {
          opacity: 1;
          transform: translateY(0);
          animation-delay: 1s;
        }

        .btn {
          position: relative;
          overflow: hidden;
        }

        .btn-ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn:hover .btn-ripple {
          width: 300px;
          height: 300px;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transform: scale(0.8);
          transition: all 1s ease;
        }

        .hero-visual.animate {
          opacity: 1;
          transform: scale(1);
          animation-delay: 0.5s;
        }

        .profile-container {
          position: relative;
          width: 400px;
          height: 400px;
        }

        .profile-ring {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          border: 3px solid transparent;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink)) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: exclude;
          mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          animation: rotate 10s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .profile-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 40px rgba(236, 72, 153, 0.3);
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .profile-image:hover img {
          transform: scale(1.1);
        }

        .floating-icons {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .icon {
          position: absolute;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-pink);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          animation: float 4s ease-in-out infinite;
        }

        .icon-1 {
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .icon-2 {
          bottom: 20%;
          right: 0%;
          animation-delay: 1s;
        }

        .icon-3 {
          top: 30%;
          left: -10%;
          animation-delay: 2s;
        }

        .icon-4 {
          bottom: 10%;
          left: 10%;
          animation-delay: 3s;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .scroll-indicator:hover {
          opacity: 1;
        }

        .scroll-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        .scroll-arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .scroll-arrow span {
          display: block;
          width: 2px;
          height: 10px;
          background: var(--accent);
          margin: 2px 0;
          animation: scroll-down 2s infinite;
        }

        .scroll-arrow span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .scroll-arrow span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes scroll-down {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(5px);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-visual {
            order: -1;
          }

          .profile-container {
            width: 300px;
            height: 300px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 200px;
          }

          .scroll-text {
            writing-mode: horizontal-tb;
            text-orientation: initial;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding-top: 60px;
          }

          .profile-container {
            width: 250px;
            height: 250px;
          }

          .floating-icons {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
