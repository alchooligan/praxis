import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programează o Consultație Gratuită",
  description:
    "15 minute în care analizăm ce îți mănâncă timpul și cum automatizăm. Fără obligații, fără vânzare agresivă. Scrie-ne pe WhatsApp.",
};

export default function Contact() {

  return (
    <>
      {/* Hero */}
      <section className="section" style={{ background: "var(--surface)", paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div className="section-inner" style={{ maxWidth: "800px", textAlign: "center" }}>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 700, lineHeight: 1.1,
            letterSpacing: "-0.03em", color: "var(--text)",
          }}>
            {"Programează "}<span style={{ color: "var(--blue)", textTransform: "uppercase" }}>15 minute</span>{" cu noi"}
          </h1>
          <p style={{
            marginTop: "1.5rem", fontSize: "1.1rem", color: "var(--text-secondary)",
            lineHeight: 1.7, maxWidth: "520px", marginLeft: "auto", marginRight: "auto", fontWeight: 400,
          }}>
            {"Fără obligații. Îți spunem exact ce poți automatiza și ce rezultate să aștepți."}
          </p>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section" style={{ background: "var(--white)", paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className="section-inner" style={{ maxWidth: "1000px" }}>
          <div className="pain-card" style={{ padding: "3rem", textAlign: "center" }}>
            <div style={{
              width: "64px", height: "64px", borderRadius: "18px",
              margin: "0 auto 1.5rem", background: "var(--blue)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "28px" }}>chat</span>
            </div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
              Scrie-ne un mesaj
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem", maxWidth: "400px", marginLeft: "auto", marginRight: "auto" }}>
              Răspundem în câteva ore. Spune-ne cu ce se ocupă afacerea ta și ce te frustrează cel mai tare.
            </p>
            <a
              href="https://wa.me/40773971703?text=Bun%C4%83%2C%20a%C8%99%20vrea%20s%C4%83%20aflu%20mai%20multe%20despre%20automatiz%C4%83ri%20pentru%20afacerea%20mea."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "var(--blue)", color: "#fff",
                padding: "1rem 2.4rem", borderRadius: "100px",
                fontSize: "0.9rem", fontWeight: 700, textDecoration: "none",
                transition: "all 0.3s", letterSpacing: "0.02em",
              }}
            >
              <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "20px" }}>send</span>
              Trimite mesaj
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
