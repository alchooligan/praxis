import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Praxis</div>
          <p className="footer-desc">Automatizăm munca repetitivă din afacerile mici și medii.</p>
        </div>
        <div className="footer-col">
          <h5>Companie</h5>
          <Link href="/despre">Despre noi</Link>
          <Link href="/solutii">Soluții</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h5>Resurse</h5>
          <Link href="/cum-functioneaza">Cum funcționează</Link>
          <Link href="#">Blog (în curând)</Link>
          <Link href="#">Newsletter (în curând)</Link>
        </div>
        <div className="footer-col">
          <h5>Legal</h5>
          <Link href="#">Termeni și Condiții</Link>
          <Link href="#">Politică Cookies</Link>
          <Link href="#">GDPR</Link>
        </div>
      </div>
      <div className="footer-bottom">&copy; 2026 Praxis. Toate drepturile rezervate.</div>
    </footer>
  );
}
