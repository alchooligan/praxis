import Link from "next/link";

export function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">Praxis</Link>
        <div className="nav-links">
          <Link href="/solutii">Soluții</Link>
          <Link href="/cum-functioneaza">Proces</Link>
<Link href="/contact">Contact</Link>
        </div>
        <Link href="/contact" className="btn-nav">Consultație gratuită</Link>
      </div>
    </nav>
  );
}
