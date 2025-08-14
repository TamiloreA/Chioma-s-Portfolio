"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sparkles,
  Home,
  User,
  Code,
  Briefcase,
  Mail,
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">
        <div className="nav-content">
          <div className="nav-brand">
            <div className="brand-icon">
              <Sparkles size={24} />
            </div>
            <h2>Chioma</h2>
            <div className="brand-subtitle">Creative Developer</div>
          </div>

          <div className="nav-menu">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="nav-item-content">
                    <IconComponent size={18} />
                    <span className="nav-text">{item.name}</span>
                  </div>
                  <div className="nav-item-bg"></div>
                </a>
              );
            })}
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`mobile-menu-backdrop ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-content">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="mobile-nav-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <IconComponent size={20} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 2rem;
          transition: all var(--transition-normal);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 2rem;
          padding: 0.75rem 2rem;
          transition: all var(--transition-normal);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        [data-theme="dark"] .nav-content {
          background: rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .header.scrolled .nav-content {
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(255, 192, 203, 0.3);
          box-shadow: 0 12px 40px rgba(255, 192, 203, 0.2);
        }

        :global([data-theme="dark"]) .header.scrolled .nav-content {
          background: rgba(0, 0, 0, 0.9);
          border-color: rgba(255, 192, 203, 0.2);
          color: var(--text-primary);
        }

        [data-theme="dark"] .header.scrolled .nav-item {
          color: var(--text-primary);
        }

        [data-theme="dark"] .header.scrolled .nav-item-content {
          color: var(--text-primary);
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          animation: fadeInLeft 0.8s ease-out;
        }

        .brand-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: linear-gradient(
            135deg,
            var(--primary-pink),
            var(--secondary-pink)
          );
          border-radius: 50%;
          color: white;
          animation: rotate 3s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .nav-brand h2 {
          background: linear-gradient(
            135deg,
            var(--primary-pink),
            var(--secondary-pink)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 1.5rem;
          margin: 0;
          font-weight: 700;
        }

        .brand-subtitle {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
          opacity: 0.8;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-item {
          position: relative;
          text-decoration: none;
          color: var(--text-primary);
          padding: 0.75rem 1.25rem;
          border-radius: 1.5rem;
          transition: all var(--transition-normal);
          overflow: hidden;
          animation: fadeInUp 0.8s ease-out;
          animation-fill-mode: both;
        }

        .nav-item-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          z-index: 2;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .nav-item-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            var(--primary-pink),
            var(--secondary-pink)
          );
          opacity: 0;
          transition: all var(--transition-normal);
          border-radius: 1.5rem;
        }

        .nav-item:hover .nav-item-bg {
          opacity: 1;
        }

        .nav-item:hover .nav-item-content {
          color: white;
          transform: translateY(-2px);
        }

        .nav-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 192, 203, 0.4);
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all var(--transition-fast);
        }

        .mobile-menu-toggle:hover {
          background: rgba(255, 192, 203, 0.1);
        }

        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 1rem;
          right: 1rem;
          backdrop-filter: blur(20px);
          border-radius: 1.5rem;
          padding: 1.5rem;
          transform: translateY(-20px);
          opacity: 0;
          visibility: hidden;
          transition: all var(--transition-normal);
          z-index: 10000;
          max-width: 400px;
          margin: 0 auto;
        }

        [data-theme="light"] .mobile-menu {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        [data-theme="dark"] .mobile-menu {
          background: rgba(0, 0, 0, 0.95);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0;
          visibility: hidden;
          transition: all var(--transition-normal);
          z-index: 9999;
        }

        .mobile-menu-backdrop.open {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mobile-nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-primary);
          padding: 1rem 1.25rem;
          border-radius: 1rem;
          transition: all var(--transition-normal);
          font-weight: 500;
          background: rgba(255, 192, 203, 0.05);
          border: 1px solid rgba(255, 192, 203, 0.1);
        }

        [data-theme="dark"] .mobile-nav-item {
          background: rgba(255, 192, 203, 0.1);
          border-color: rgba(255, 192, 203, 0.2);
          color: var(--text-primary);
        }

        .mobile-nav-item:hover {
          background: linear-gradient(
            135deg,
            var(--primary-pink),
            var(--secondary-pink)
          );
          color: white;
          transform: translateX(8px);
          box-shadow: 0 8px 25px rgba(255, 192, 203, 0.3);
        }

        .mobile-nav-item:active {
          transform: translateX(4px) scale(0.98);
        }

        @media (max-width: 768px) {
          .header {
            padding: 1rem;
          }

          .nav-content {
            padding: 0.75rem 1.5rem;
          }

          .nav-menu {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .brand-subtitle {
            display: none;
          }

          .nav-brand h2 {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .nav-content {
            padding: 0.5rem 1rem;
          }

          .brand-icon {
            width: 35px;
            height: 35px;
          }

          .nav-brand {
            gap: 0.5rem;
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
