"use client"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Egwuatu Chioma. All rights reserved.</p>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-secondary);
          padding: 2rem 0;
          text-align: center;
          border-top: 1px solid var(--border);
        }

        .footer p {
          color: var(--text-secondary);
          margin: 0;
        }
      `}</style>
    </footer>
  )
}
