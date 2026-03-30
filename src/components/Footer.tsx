import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ marginBottom: "0.6rem", display: "flex", justifyContent: "center" }}><img src="/brand/mantl-logo-light.svg" alt="Mantl" style={{ height: "32px" }} /></div>
        <p className="footer-desc" style={{ fontSize: "1rem", marginBottom: "2.5rem" }}>Automatizăm munca repetitivă din afacerile mici și medii.</p>

        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          <Link href="/despre" style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textDecoration: "none" }}>Despre noi</Link>
          <Link href="/solutii" style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textDecoration: "none" }}>Soluții</Link>
          <Link href="/proces" style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textDecoration: "none" }}>Proces</Link>
          <Link href="/faq" style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textDecoration: "none" }}>Întrebări frecvente</Link>
          <Link href="/contact" style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textDecoration: "none" }}>Contact</Link>
        </div>

        <div className="footer-bottom" style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
          &copy; 2026 Mantl. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}
