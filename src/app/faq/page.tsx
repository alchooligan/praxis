"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "Nu știu nimic despre AI — pot beneficia?",
    a: "Nu trebuie să înțelegi cum funcționează AI-ul, la fel cum nu trebuie să înțelegi cum funcționează motorul ca să conduci. Noi ne ocupăm de setup, configurare și integrare. Tu ne spui ce îți mănâncă timpul, și noi facem să nu mai existe.",
  },
  {
    q: "Cât durează implementarea?",
    a: "Depinde de complexitate. O automatizare simplă (răspunsuri WhatsApp, confirmare programări) e gata în 1-3 zile. Un sistem complet (facturare + tracking + rapoarte) durează 2-3 săptămâni. Îți spunem exact la consultație.",
  },
  {
    q: "Cât costă?",
    a: "Fiecare proiect e diferit, deci nu avem prețuri standard pe site. Consultația e gratuită — după ce înțelegem ce ai nevoie, primești o ofertă cu preț fix, fără surprize.",
  },
  {
    q: "Ce se întâmplă dacă ceva se strică?",
    a: "Monitorizăm sistemele lunar. Dacă ceva nu funcționează, reparăm noi — nu trebuie să ne suni. Dacă e ceva urgent, răspundem în aceeași zi.",
  },
  {
    q: "Trebuie să schimb tool-urile pe care le folosesc acum?",
    a: "Nu. Lucrăm cu ce ai deja — WhatsApp, Excel, Google Calendar, email. Automatizările se integrează direct în aplicațiile tale existente.",
  },
  {
    q: "Funcționează pentru tipul meu de afacere?",
    a: "Dacă ai oameni care fac aceleași lucruri în fiecare zi — răspund la mesaje, confirmă programări, trimit facturi, verifică stocuri — da, funcționează. Am lucrat cu clinici, magazine online, firme de construcții, servicii de închiriere, și saloane.",
  },
  {
    q: "AI-ul nu e rău pentru mediu?",
    a: "E o întrebare corectă. Antrenarea modelelor AI mari consumă energie semnificativă — dar treaba asta e deja făcută. Folosirea unui model existent precum Claude are un consum minim, mult mai mic decât overhead-ul proceselor manuale pe care le înlocuiește. Mai puține ore pierdute, mai puțină hârtie, mai puține deplasări fizice. Net pozitiv pentru majoritatea afacerilor.",
  },
  {
    q: "Nu sunt deloc tehnic — mă puteți ajuta?",
    a: "Exact cu asta lucrăm. Nu ne așteptăm să atingi vreun cod sau să configurezi ceva singur. Treaba noastră e să traducem ce ai nevoie în ceva care funcționează — și apoi să îți dăm un instrument suficient de simplu încât oricine din echipa ta să îl folosească din prima zi.",
  },
  {
    q: "Am o afacere foarte de nișă — funcționează și pentru mine?",
    a: "Probabil da. Am lucrat în industrii de la imobiliare la sănătate și construcții. Dacă afacerea ta implică sarcini repetitive, comunicare, documente, programări sau cercetare — aproape întotdeauna există ceva ce AI-ul poate prelua. Programează un apel și îți spunem sincer dacă putem ajuta.",
  },
  {
    q: "Ce se întâmplă dacă vreau să schimb ceva după implementare?",
    a: "Tot ce construim e al tău. Documentăm cum funcționează și instruim echipa ta să îl gestioneze. Dacă vrei modificări, suntem disponibili. Scopul nostru e să nu mai ai nevoie de noi după două luni — dar suntem aici dacă ai.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      {/* Hero */}
      <section className="section" style={{ background: "var(--surface)", paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div className="section-inner" style={{ maxWidth: "800px" }}>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 700, lineHeight: 1.1,
            letterSpacing: "-0.03em", color: "var(--text)",
          }}>
            {"Ai întrebări? Avem "}<span style={{ color: "var(--blue)", textTransform: "uppercase" }}>răspunsuri</span>{"."}
          </h1>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="section-inner" style={{ maxWidth: "1000px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="pain-card"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "box-shadow 0.3s, border-color 0.3s",
                  borderColor: openIndex === i ? "rgba(0,70,200,0.15)" : undefined,
                  boxShadow: openIndex === i ? "0 4px 20px rgba(0,70,200,0.06)" : undefined,
                }}
                onClick={() => toggle(i)}
              >
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "1.5rem 2rem", gap: "1rem",
                }}>
                  <h4 style={{
                    fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.35,
                    letterSpacing: "-0.01em", color: "var(--text)", margin: 0,
                  }}>
                    {faq.q}
                  </h4>
                  <span
                    className="material-symbols-outlined"
                    style={{
                      color: "var(--blue)", fontSize: "22px", flexShrink: 0,
                      transition: "transform 0.3s",
                      transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    expand_more
                  </span>
                </div>
                <div style={{
                  maxHeight: openIndex === i ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.35s ease-out",
                }}>
                  <p style={{
                    padding: "0 2rem 1.5rem",
                    color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>{"Nu ai găsit răspunsul? "}<span>Hai să vorbim.</span></h2>
          <p>Consultația e gratuită și fără obligații. Îți răspundem la orice întrebare.</p>
          <Link href="/contact" className="btn-cta">
            {"PROGRAMEAZĂ O CONSULTAȚIE"}
          </Link>
        </div>
      </section>
    </>
  );
}
