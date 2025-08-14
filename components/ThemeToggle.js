"use client"

import { useState, useEffect } from "react"

export default function ThemeToggle({ theme, toggleTheme }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <div className="toggle-track">
        <div className={`toggle-thumb ${theme === "dark" ? "dark" : "light"}`}>
          <div className="toggle-icon">
            {theme === "light" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" fill="currentColor" />
                <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line
                  x1="4.22"
                  y1="4.22"
                  x2="5.64"
                  y2="5.64"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="18.36"
                  y1="18.36"
                  x2="19.78"
                  y2="19.78"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line
                  x1="4.22"
                  y1="19.78"
                  x2="5.64"
                  y2="18.36"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="18.36"
                  y1="5.64"
                  x2="19.78"
                  y2="4.22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      <div className="toggle-label">
        <span className="theme-text">{theme === "light" ? "Dark" : "Light"}</span>
      </div>

      <style jsx>{`
        .theme-toggle {
          position: fixed;
          top: 50%;
          right: 2rem;
          transform: translateY(-50%);
          background: var(--bg-primary);
          border: 2px solid var(--border);
          border-radius: 50px;
          padding: 0.5rem;
          cursor: pointer;
          z-index: 999;
          transition: all var(--transition-normal);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          min-width: 70px;
        }

        .theme-toggle:hover {
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 8px 30px rgba(236, 72, 153, 0.2);
          border-color: var(--accent);
        }

        .toggle-track {
          width: 50px;
          height: 26px;
          background: var(--bg-secondary);
          border-radius: 13px;
          position: relative;
          transition: all var(--transition-normal);
          border: 1px solid var(--border);
        }

        .toggle-thumb {
          position: absolute;
          top: 2px;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          border-radius: 50%;
          transition: all var(--transition-normal);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(236, 72, 153, 0.3);
        }

        .toggle-thumb.light {
          left: 2px;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          box-shadow: 0 2px 8px rgba(251, 191, 36, 0.3);
        }

        .toggle-thumb.dark {
          left: 26px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
        }

        .toggle-icon {
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-normal);
        }

        .toggle-thumb.dark .toggle-icon {
          transform: rotate(180deg);
        }

        .toggle-label {
          opacity: 0;
          transform: translateY(10px);
          transition: all var(--transition-normal);
          pointer-events: none;
        }

        .theme-toggle:hover .toggle-label {
          opacity: 1;
          transform: translateY(0);
        }

        .theme-text {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-secondary);
          white-space: nowrap;
        }

        /* Floating animation */
        .theme-toggle {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(-50%) translateX(0);
          }
          50% {
            transform: translateY(-50%) translateX(-5px);
          }
        }

        /* Pulse effect on theme change */
        .toggle-thumb {
          animation: pulse-theme 0.3s ease;
        }

        @keyframes pulse-theme {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .theme-toggle {
            right: 1rem;
            min-width: 60px;
            padding: 0.4rem;
          }

          .toggle-track {
            width: 44px;
            height: 24px;
          }

          .toggle-thumb {
            width: 18px;
            height: 18px;
          }

          .toggle-thumb.dark {
            left: 22px;
          }

          .toggle-icon svg {
            width: 14px;
            height: 14px;
          }
        }

        @media (max-width: 480px) {
          .theme-toggle {
            right: 0.5rem;
            min-width: 50px;
            padding: 0.3rem;
          }

          .toggle-track {
            width: 40px;
            height: 22px;
          }

          .toggle-thumb {
            width: 16px;
            height: 16px;
          }

          .toggle-thumb.dark {
            left: 20px;
          }

          .toggle-icon svg {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>
    </button>
  )
}
