import Link from "next/link";

export default function CumFunctioneaza() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ background: "var(--surface)", paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div className="section-inner" style={{ maxWidth: "800px", textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.4rem 1rem", borderRadius: "100px",
            background: "var(--blue-50)", border: "1px solid var(--blue-10)", marginBottom: "2rem",
          }}>
            <span className="material-symbols-outlined" style={{ color: "var(--blue)", fontSize: "16px" }}>lightbulb</span>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--blue)" }}>Ghid complet</span>
          </div>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 700, lineHeight: 1.1,
            letterSpacing: "-0.03em", color: "var(--text)",
          }}>
            {"Cum transform\u0103m orele pierdute \u00een sisteme care lucreaz\u0103 "}
            <span style={{ color: "var(--blue)", textTransform: "uppercase" }}>singure</span>
          </h1>
          <p style={{
            marginTop: "1.5rem", fontSize: "1.1rem", color: "var(--text-secondary)",
            lineHeight: 1.7, maxWidth: "640px", marginLeft: "auto", marginRight: "auto", fontWeight: 400,
          }}>
            {"Nu instal\u0103m software complicat. Nu \u00ee\u021bi schimb\u0103m felul \u00een care lucrezi. Integr\u0103m automatiz\u0103ri \u00een exact aplica\u021biile pe care le folose\u0219ti deja."}
          </p>
        </div>
      </section>

      {/* Before/After examples */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="section-inner" style={{ maxWidth: "1000px" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <h2 className="section-title">
              {"Ce \u00eenseamn\u0103 automatizare, "}<span style={{ color: "var(--blue)", textTransform: "uppercase" }}>concret?</span>
            </h2>
            <p style={{ marginTop: "1rem", color: "var(--text-secondary)", fontWeight: 400, maxWidth: "520px" }}>
              {"Nu teorie, nu jargon. Doar mar\u021bi-ul t\u0103u \u2014 \u00eenainte \u0219i dup\u0103."}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              {
                title: "Programări",
                icon: "calendar_month",
                before: "Clientul sună — tu răspunzi — verifici disponibilitatea — notezi în calendar — confirmi verbal — uiți să trimiți reminder — clientul nu vine.",
                after: "Clientul trimite mesaj — sistemul vede calendarul — propune ore libere — confirmă automat — trimite reminder cu 24h înainte — la anulare, următorul de pe listă primește mesaj.",
              },
              {
                title: "Comenzi și tracking",
                icon: "local_shipping",
                before: "Clientul întreabă 'unde e comanda?' — tu cauți în Excel — verifici la curier — scrii răspunsul manual — trimiți pe WhatsApp.",
                after: "Clientul întreabă — sistemul verifică automat statusul — răspunde instant cu linkul de tracking. Tu nu vezi nimic din asta.",
              },
              {
                title: "Facturare și urmărire plăți",
                icon: "receipt_long",
                before: "Termini lucrul — uiți să facturezi — factura pleacă cu 3 zile întârziere — clientul plătește cu 30 — nu știi cine datorează ce.",
                after: "Lucrul se termină — factura se generează automat — se trimite instant — la scadență, reminder automat — tu vezi un tabel cu cine a plătit și cine nu.",
              },
              {
                title: "Comunicare cu clienții",
                icon: "forum",
                before: "Clientul trimite mesaj pe WhatsApp — tu citești — răspunzi manual — notezi într-un Excel — uiți să facturezi.",
                after: "Clientul trimite mesaj — sistemul înțelege ce vrea — răspunde automat — actualizează baza de date — generează factura.",
              },
            ].map((item) => (
              <div key={item.title} className="pain-card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{
                  padding: "1.5rem 2.5rem", borderBottom: "1px solid var(--border)",
                  background: "var(--surface)", display: "flex", alignItems: "center", gap: "1rem",
                }}>
                  <div className="pain-icon" style={{ marginBottom: 0, width: "40px", height: "40px", borderRadius: "12px" }}>
                    <span className="material-symbols-outlined" style={{ color: "var(--blue)", fontSize: "20px" }}>{item.icon}</span>
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 600, letterSpacing: "-0.01em" }}>{item.title}</h3>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                  <div style={{ padding: "2rem 2.5rem", borderRight: "1px solid var(--border)" }}>
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: "0.5rem",
                      padding: "0.25rem 0.75rem", borderRadius: "100px",
                      background: "rgba(239,68,68,0.06)", marginBottom: "1rem",
                    }}>
                      <span className="material-symbols-outlined" style={{ color: "#ef4444", fontSize: "14px" }}>close</span>
                      <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#ef4444" }}>Azi</span>
                    </div>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6, fontWeight: 500 }}>{item.before}</p>
                  </div>
                  <div style={{ padding: "2rem 2.5rem" }}>
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: "0.5rem",
                      padding: "0.25rem 0.75rem", borderRadius: "100px",
                      background: "var(--blue-50)", marginBottom: "1rem",
                    }}>
                      <span className="material-symbols-outlined" style={{ color: "var(--blue)", fontSize: "14px" }}>check</span>
                      <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--blue)" }}>Cu Praxis</span>
                    </div>
                    <p style={{ color: "var(--text)", fontSize: "0.92rem", lineHeight: 1.6, fontWeight: 500 }}>{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="section-inner" style={{ maxWidth: "1000px" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 className="section-title">
              {"Ce "}<span style={{ color: "var(--blue)", textTransform: "uppercase" }}>folosim?</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem" }}>
            {[
              { name: "WhatsApp Business API", icon: "chat" },
              { name: "n8n", icon: "account_tree" },
              { name: "Make", icon: "hub" },
              { name: "Claude AI", icon: "auto_awesome" },
              { name: "Google Workspace", icon: "cloud" },
            ].map((t) => (
              <div key={t.name} className="pain-card" style={{ padding: "1.5rem", textAlign: "center" }}>
                <div className="pain-icon" style={{
                  margin: "0 auto 1rem", width: "48px", height: "48px", borderRadius: "16px",
                }}>
                  <span className="material-symbols-outlined" style={{ color: "var(--blue)" }}>{t.icon}</span>
                </div>
                <p style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--text)" }}>{t.name}</p>
              </div>
            ))}
          </div>
          <p style={{
            marginTop: "2.5rem", textAlign: "center", color: "var(--text-secondary)",
            fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "640px", marginLeft: "auto", marginRight: "auto",
          }}>
            {"Nu trebuie să înțelegi cum funcționează. Trebuie doar să știi că funcționează — și noi îți arătăm în primele 15 minute."}
          </p>
        </div>
      </section>

      {/* What we DON'T do */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="section-inner" style={{ maxWidth: "1000px" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <h2 className="section-title">
              {"Ce "}<span style={{ color: "var(--blue)", textTransform: "uppercase" }}>NU</span>{" facem"}
            </h2>
            <p style={{ marginTop: "1rem", color: "var(--text-secondary)", fontWeight: 400, maxWidth: "520px" }}>
              {"Iată ce nu vei găsi la noi."}
            </p>
          </div>
          <div className="pain-grid">
            {[
              { text: "Nu promitem că AI-ul înlocuiește oamenii. Îi eliberează să facă treaba care contează.", icon: "smart_toy" },
              { text: "Nu forțăm tool-uri noi. Lucrăm cu ce ai deja.", icon: "build" },
              { text: "Nu vindem pachete generice. Fiecare automatizare e construită specific pe afacerea ta.", icon: "inventory_2" },
              { text: "Nu dispărem după implementare. Monitorizăm și optimizăm lunar.", icon: "support_agent" },
            ].map((item) => (
              <div key={item.icon} className="pain-card" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "12px", flexShrink: 0,
                  background: "rgba(239,68,68,0.05)", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span className="material-symbols-outlined" style={{ color: "#ef4444", fontSize: "20px" }}>{item.icon}</span>
                </div>
                <p style={{ color: "var(--text)", fontWeight: 500, lineHeight: 1.6, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed process */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="section-inner" style={{ maxWidth: "1000px" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title">
              {"Procesul, pas cu "}<span style={{ color: "var(--blue)", textTransform: "uppercase" }}>pas</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {[
              {
                num: "01",
                title: "Consultație gratuită (15 min)",
                text: "Ne spui cum lucrezi azi. Ce durează mult, ce te frustrează, unde pierzi timp. Noi identificăm 2-3 lucruri pe care le putem automatiza imediat.",
                icon: "hearing",
              },
              {
                num: "02",
                title: "Propunere concretă",
                text: "Primești un document cu: ce automatizăm, cum funcționează, cât durează, și ce rezultate estimăm. Prețul e fix, fără surprize.",
                icon: "description",
              },
              {
                num: "03",
                title: "Implementare (1 zi — 3 săptămâni)",
                text: "Construim, testăm, și implementăm. Îți arătăm cum funcționează totul. Nu trebuie să fii tehnic — dacă știi să folosești WhatsApp, ești gata.",
                icon: "rocket_launch",
              },
              {
                num: "04",
                title: "Funcționează. Tu te relaxezi.",
                text: "Sistemele rulează singure. Dacă ceva se strică, noi reparăm. Dacă vrei mai mult, construim mai mult.",
                icon: "self_improvement",
              },
            ].map((s) => (
              <div key={s.num} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                <div style={{
                  position: "relative", zIndex: 1, width: "56px", height: "56px", flexShrink: 0,
                  borderRadius: "50%", background: "var(--white)", boxShadow: "0 8px 30px rgba(0,70,200,0.08)",
                  border: "1px solid var(--blue-10)", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontWeight: 700, color: "var(--blue)", fontSize: "1.1rem" }}>{s.num}</span>
                </div>
                <div className="pain-card" style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span className="material-symbols-outlined" style={{ color: "var(--blue)" }}>{s.icon}</span>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 600, letterSpacing: "-0.01em" }}>{s.title}</h3>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7 }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>{"Sună complicat? "}<span>Nu e.</span></h2>
          <p>{"Hai să vorbim 15 minute și îți arătăm exact ce putem face pentru afacerea ta."}</p>
          <Link href="/contact" className="btn-cta">
            {"PROGRAMEAZĂ O CONSULTAȚIE GRATUITĂ"}
          </Link>
        </div>
      </section>
    </>
  );
}
