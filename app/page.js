"use client"

import { useState, useEffect } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import ThemeToggle from "../components/ThemeToggle"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem("theme")
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const initialTheme = savedTheme || systemTheme

    setTheme(initialTheme)
    document.documentElement.setAttribute("data-theme", initialTheme)

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleSystemThemeChange = (e) => {
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "light"
        setTheme(newTheme)
        document.documentElement.setAttribute("data-theme", newTheme)
      }
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange)

    return () => {
      clearTimeout(timer)
      mediaQuery.removeEventListener("change", handleSystemThemeChange)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)

    document.documentElement.style.transition = "background-color 0.3s ease, color 0.3s ease"
    setTimeout(() => {
      document.documentElement.style.transition = ""
    }, 300)
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <style jsx>{`
          .loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--bg-primary);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity var(--transition-slow);
          }

          .spinner {
            width: 50px;
            height: 50px;
            border: 3px solid var(--border);
            border-top: 3px solid var(--accent);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 1rem;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <main>
      <Header />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
