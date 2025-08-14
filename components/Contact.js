"use client"

import { useState, useEffect, useRef } from "react"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram, Sparkles, CheckCircle, XCircle } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})
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

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
        console.error("Form submission error:", result.error)
      }
    } catch (error) {
      setSubmitStatus("error")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "hello@egwuatuchioma.com",
      link: "mailto:hello@egwuatuchioma.com",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+234 (0) 123 456 789",
      link: "tel:+2341234567890",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Lagos, Nigeria",
      link: null,
    },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/egwuatuchioma",
      icon: <Linkedin size={20} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/egwuatuchioma",
      icon: <Github size={20} />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/egwuatuchioma",
      icon: <Twitter size={20} />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/egwuatuchioma",
      icon: <Instagram size={20} />,
    },
  ]

  return (
    <section id="contact" className="section contact-section" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? "animate" : ""}`}>Let's Work Together</h2>

        <div className={`contact-intro ${isVisible ? "animate" : ""}`}>
          <p>
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can create
            something amazing together. Drop me a message and let's start the conversation!
          </p>
        </div>

        <div className="contact-content">
          <div className={`contact-info ${isVisible ? "animate" : ""}`}>
            <div className="info-card">
              <h3>Get In Touch</h3>
              <p>I'm always excited to work on new projects and collaborate with amazing people.</p>

              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <span className="contact-icon">{info.icon}</span>
                    <div className="contact-text">
                      <span className="contact-label">{info.label}</span>
                      {info.link ? (
                        <a href={info.link} className="contact-value">
                          {info.value}
                        </a>
                      ) : (
                        <span className="contact-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      title={social.name}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`contact-form-container ${isVisible ? "animate" : ""}`}>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? "error" : ""}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? "error" : ""}
                  placeholder="Enter your email address"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={errors.subject ? "error" : ""}
                  placeholder="What's this about?"
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={errors.message ? "error" : ""}
                  placeholder="Tell me about your project or idea..."
                  rows="6"
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                <span className="button-text">{isSubmitting ? "Sending..." : "Send Message"}</span>
                <span className="button-icon">
                  <Sparkles size={20} />
                </span>
              </button>

              {submitStatus === "success" && (
                <div className="status-message success">
                  <span className="status-icon">
                    <CheckCircle size={20} />
                  </span>
                  <span>Thank you! Your message has been sent successfully. I'll get back to you soon!</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="status-message error">
                  <span className="status-icon">
                    <XCircle size={20} />
                  </span>
                  <span>Oops! Something went wrong. Please try again or contact me directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          position: relative;
          overflow: hidden;
        }

        .contact-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }

        .section-title.animate {
          animation: fadeInUp 1s ease forwards;
        }

        .contact-intro {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .contact-intro.animate {
          opacity: 1;
          transform: translateY(0);
          animation-delay: 0.2s;
        }

        .contact-intro p {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease;
        }

        .contact-info.animate {
          opacity: 1;
          transform: translateX(0);
          animation-delay: 0.4s;
        }

        .info-card {
          background: var(--bg-primary);
          padding: 3rem;
          border-radius: 30px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }

        .info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-pink), var(--secondary-pink));
        }

        .info-card h3 {
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-size: 2rem;
        }

        .info-card > p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-details {
          margin-bottom: 3rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: var(--bg-secondary);
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(236, 72, 153, 0.1);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          border-radius: 50%;
          color: white;
        }

        .contact-text {
          display: flex;
          flex-direction: column;
        }

        .contact-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.2rem;
        }

        .contact-value {
          color: var(--text-primary);
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-value:hover {
          color: var(--accent);
        }

        .social-links h4 {
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: var(--bg-secondary);
          border-radius: 15px;
          text-decoration: none;
          color: var(--text-primary);
          transition: all 0.3s ease;
          border: 1px solid var(--border);
        }

        .social-link:hover {
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(236, 72, 153, 0.3);
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-name {
          font-weight: 500;
          font-size: 0.9rem;
        }

        .contact-form-container {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease;
        }

        .contact-form-container.animate {
          opacity: 1;
          transform: translateX(0);
          animation-delay: 0.6s;
        }

        .contact-form {
          background: var(--bg-primary);
          padding: 3rem;
          border-radius: 30px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border);
        }

        .form-group {
          margin-bottom: 2rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem 1.5rem;
          border: 2px solid var(--border);
          border-radius: 15px;
          background: var(--bg-secondary);
          color: var(--text-primary);
          font-size: 1rem;
          transition: all 0.3s ease;
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
          background: var(--bg-primary);
        }

        .form-group input.error,
        .form-group textarea.error {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .error-message {
          display: block;
          color: #ef4444;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        .submit-button {
          width: 100%;
          padding: 1.2rem 2rem;
          background: linear-gradient(135deg, var(--primary-pink), var(--secondary-pink));
          color: white;
          border: none;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(236, 72, 153, 0.4);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .button-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: sparkle 2s infinite;
        }

        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(180deg); }
        }

        .status-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          border-radius: 15px;
          font-weight: 500;
          animation: slideIn 0.3s ease;
        }

        .status-message.success {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        .status-message.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .status-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .contact-info {
            transform: translateY(-30px);
          }

          .contact-info.animate {
            transform: translateY(0);
          }

          .contact-form-container {
            transform: translateY(30px);
          }

          .contact-form-container.animate {
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .info-card,
          .contact-form {
            padding: 2rem;
          }

          .social-grid {
            grid-template-columns: 1fr;
          }

          .contact-content {
            gap: 2rem;
          }
        }

        @media (max-width: 480px) {
          .info-card,
          .contact-form {
            padding: 1.5rem;
          }

          .contact-item {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .contact-text {
            align-items: center;
          }
        }
      `}</style>
    </section>
  )
}
