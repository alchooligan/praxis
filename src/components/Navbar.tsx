"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">Praxis</Link>
        <div className="nav-links">
          <Link href="/solutii">Soluții</Link>
          <Link href="/cum-functioneaza">Proces</Link>
          <Link href="/despre">Despre</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Hamburger button - mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            zIndex: 60,
          }}
          className="hamburger-btn"
        >
          <span style={{
            display: "block", width: "22px", height: "2px",
            background: "var(--text)", borderRadius: "2px",
            transition: "all 0.3s",
            transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
          }} />
          <span style={{
            display: "block", width: "22px", height: "2px",
            background: "var(--text)", borderRadius: "2px",
            transition: "all 0.3s",
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: "block", width: "22px", height: "2px",
            background: "var(--text)", borderRadius: "2px",
            transition: "all 0.3s",
            transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
          }} />
        </button>

        <Link href="/contact" className="btn-nav nav-cta-desktop">Consultație gratuită</Link>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.2rem",
            zIndex: 49,
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          }}>
            <Link href="/solutii" onClick={closeMenu} style={{
              padding: "0.8rem 0", fontSize: "0.95rem", fontWeight: 500,
              color: "var(--text-secondary)", textDecoration: "none",
              borderBottom: "1px solid var(--border)",
            }}>Soluții</Link>
            <Link href="/cum-functioneaza" onClick={closeMenu} style={{
              padding: "0.8rem 0", fontSize: "0.95rem", fontWeight: 500,
              color: "var(--text-secondary)", textDecoration: "none",
              borderBottom: "1px solid var(--border)",
            }}>Proces</Link>
            <Link href="/despre" onClick={closeMenu} style={{
              padding: "0.8rem 0", fontSize: "0.95rem", fontWeight: 500,
              color: "var(--text-secondary)", textDecoration: "none",
              borderBottom: "1px solid var(--border)",
            }}>Despre</Link>
            <Link href="/faq" onClick={closeMenu} style={{
              padding: "0.8rem 0", fontSize: "0.95rem", fontWeight: 500,
              color: "var(--text-secondary)", textDecoration: "none",
              borderBottom: "1px solid var(--border)",
            }}>FAQ</Link>
            <Link href="/contact" onClick={closeMenu} style={{
              padding: "0.8rem 0", fontSize: "0.95rem", fontWeight: 500,
              color: "var(--text-secondary)", textDecoration: "none",
            }}>Contact</Link>
            <Link href="/contact" onClick={closeMenu} className="btn-nav" style={{
              marginTop: "0.8rem", textAlign: "center",
            }}>Consultație gratuită</Link>
          </div>
        )}
      </div>

      <style>{`
        @media(max-width:768px){
          .hamburger-btn{display:flex !important}
          .nav-cta-desktop{display:none !important}
        }
      `}</style>
    </nav>
  );
}
