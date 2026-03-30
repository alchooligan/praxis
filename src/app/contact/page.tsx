"use client";

import { useState } from "react";



export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="section" style={{ background: "var(--surface)", paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div className="section-inner" style={{ maxWidth: "700px", textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.4rem 1rem", borderRadius: "100px",
            background: "var(--blue-50)", border: "1px solid var(--blue-10)", marginBottom: "2rem",
          }}>
            <span className="material-symbols-outlined" style={{ color: "var(--blue)", fontSize: "16px" }}>calendar_month</span>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--blue)" }}>{"Consultație gratuită"}</span>
          </div>
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
      <section className="section" style={{ background: "var(--white)", paddingTop: "0", paddingBottom: "2rem" }}>
        <div className="section-inner" style={{ maxWidth: "700px" }}>
          <div className="pain-card" style={{ padding: "3rem", textAlign: "center" }}>
            <div style={{
              width: "64px", height: "64px", borderRadius: "18px",
              margin: "0 auto 1.5rem", background: "#25D366",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "28px" }}>chat</span>
            </div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
              Scrie-ne direct pe WhatsApp
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem", maxWidth: "400px", marginLeft: "auto", marginRight: "auto" }}>
              Răspundem în câteva ore. Spune-ne cu ce se ocupă afacerea ta și ce te frustrează cel mai tare.
            </p>
            <a
              href="https://wa.me/4073971703?text=Bun%C4%83%2C%20a%C8%99%20vrea%20s%C4%83%20aflu%20mai%20multe%20despre%20automatiz%C4%83ri%20pentru%20afacerea%20mea."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "#25D366", color: "#fff",
                padding: "1rem 2.4rem", borderRadius: "100px",
                fontSize: "0.9rem", fontWeight: 700, textDecoration: "none",
                transition: "all 0.3s", letterSpacing: "0.02em",
              }}
            >
              <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "20px" }}>chat</span>
              Deschide WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="section-inner" style={{ maxWidth: "700px" }}>
          <div className="pain-card" style={{ padding: "2.5rem 3rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
              <span className="material-symbols-outlined" style={{ color: "var(--blue)" }}>edit_note</span>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{"Sau lasă-ne un mesaj"}</h2>
            </div>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{
                  width: "64px", height: "64px", margin: "0 auto 1.5rem", borderRadius: "50%",
                  background: "var(--blue-50)", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span className="material-symbols-outlined" style={{ color: "var(--blue)", fontSize: "28px" }}>check_circle</span>
                </div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700 }}>{"Mulțumim!"}</h3>
                <p style={{ marginTop: "0.75rem", color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                  {"Te contactăm în maximum 24 de ore. De obicei mult mai repede."}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
              >
                <div className="grid-2">
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text)" }}>Nume</label>
                    <input
                      type="text"
                      required
                      placeholder="Numele tău"
                      style={{
                        width: "100%", border: "1px solid var(--border)", borderRadius: "0.75rem",
                        padding: "0.85rem 1.25rem", fontSize: "0.9rem", background: "var(--white)",
                        outline: "none", fontFamily: "inherit", color: "var(--text)",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text)" }}>Email</label>
                    <input
                      type="email"
                      required
                      placeholder="email@exemplu.ro"
                      style={{
                        width: "100%", border: "1px solid var(--border)", borderRadius: "0.75rem",
                        padding: "0.85rem 1.25rem", fontSize: "0.9rem", background: "var(--white)",
                        outline: "none", fontFamily: "inherit", color: "var(--text)",
                      }}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text)" }}>Telefon</label>
                    <input
                      type="tel"
                      placeholder="07xx xxx xxx"
                      style={{
                        width: "100%", border: "1px solid var(--border)", borderRadius: "0.75rem",
                        padding: "0.85rem 1.25rem", fontSize: "0.9rem", background: "var(--white)",
                        outline: "none", fontFamily: "inherit", color: "var(--text)",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text)" }}>Cu ce se ocupă afacerea ta?</label>
                    <input
                      type="text"
                      placeholder="ex: salon de înfrumusețare, clinică dentară, magazin online..."
                      style={{
                        width: "100%", border: "1px solid var(--border)", borderRadius: "0.75rem",
                        padding: "0.85rem 1.25rem", fontSize: "0.9rem", background: "var(--white)",
                        outline: "none", fontFamily: "inherit", color: "var(--text)",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text)" }}>
                    {"Care e cea mai mare frustrare din afacerea ta?"}
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Spune-ne ce te ține treaz noaptea..."
                    style={{
                      width: "100%", border: "1px solid var(--border)", borderRadius: "0.75rem",
                      padding: "0.85rem 1.25rem", fontSize: "0.9rem", background: "var(--white)",
                      outline: "none", fontFamily: "inherit", color: "var(--text)", resize: "none",
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", padding: "1rem 2.4rem", textAlign: "center" }}>
                  TRIMITE MESAJUL
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
