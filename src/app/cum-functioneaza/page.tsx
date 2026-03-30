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
            Cum transformăm orele pierdute în sisteme care lucrează{" "}
            <span style={{ color: "var(--blue)", textTransform: "uppercase" }}>singure</span>
          </h1>
          <p style={{
            marginTop: "1.5rem", fontSize: "1.1rem", color: "var(--text-secondary)",
            lineHeight: 1.7, maxWidth: "640px", marginLeft: "auto", marginRight: "auto", fontWeight: 400,
          }}>
            Nu instalăm software complicat. Nu îți schimbăm felul în care lucrezi. Integrăm automatizări în exact aplicațiile pe care le folosești deja.
          </p>
        </div>
      </section>

      {/* A Single Day — Timeline */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="section-inner" style={{ maxWidth: "700px" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <h2 className="section-title">
              O zi din afacerea ta,{" "}
              <span style={{ color: "var(--blue)", textTransform: "uppercase" }}>automatizată</span>
            </h2>
            <p style={{ marginTop: "1rem", color: "var(--text-secondary)", fontWeight: 400, maxWidth: "520px" }}>
              Cum arată marți-ul tău când sistemele lucrează pentru tine.
            </p>
          </div>
          <div style={{ position: "relative", paddingLeft: "3rem" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute", left: "11px", top: "8px", bottom: "8px",
              width: "2px", background: "linear-gradient(to bottom, var(--blue), var(--blue-20), var(--border))",
              borderRadius: "2px",
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {[
                {
                  time: "08:00",
                  title: "Client trimite mesaj pe WhatsApp",
                  desc: "\"Bună, mai aveți locuri mâine?\" — Sistemul citește mesajul, verifică calendarul, și răspunde cu orele libere. Tu nu vezi nimic.",
                  icon: "chat",
                  color: "#25D366",
                },
                {
                  time: "09:15",
                  title: "Programare confirmată automat",
                  desc: "Clientul a ales ora 14:00. Calendarul e actualizat, reminder-ul programat cu 24h înainte. Dacă anulează, următorul de pe lista de așteptare primește mesaj.",
                  icon: "event_available",
                  color: "var(--blue)",
                },
                {
                  time: "11:30",
                  title: "Factură generată și trimisă",
                  desc: "Serviciul de ieri s-a terminat. Factura pleacă automat pe email, cu reminder la scadență. Tu vezi doar cine a plătit și cine nu.",
                  icon: "receipt_long",
                  color: "#f59e0b",
                },
                {
                  time: "14:00",
                  title: "Cerere recenzie Google trimisă",
                  desc: "La 24h după vizita de ieri, clientul primește un mesaj scurt cu link direct. De la 47 la 130+ recenzii — fără să ceri manual.",
                  icon: "star",
                  color: "#f59e0b",
                },
                {
                  time: "16:00",
                  title: "Raport zilnic generat",
                  desc: "Câte comenzi, câți clienți noi, ce s-a refuzat, cât profit. Totul pe Telegram sau în Google Sheet. Numerele sunt acolo — tu doar le citești.",
                  icon: "analytics",
                  color: "var(--blue)",
                },
                {
                  time: "18:00",
                  title: "Tu verifici telefonul. Totul e făcut.",
                  desc: "Fără Excel, fără mesaje copiate, fără facturi uitate. Afacerea a rulat singură toată ziua.",
                  icon: "self_improvement",
                  color: "#22c55e",
                },
              ].map((item, i) => (
                <div key={i} style={{ position: "relative", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  {/* Dot on timeline */}
                  <div style={{
                    position: "absolute", left: "-3rem",
                    width: "24px", height: "24px", borderRadius: "50%",
                    background: "var(--white)", border: `2.5px solid ${item.color}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    zIndex: 2, marginTop: "2px",
                  }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: item.color }} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem" }}>
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: item.color, fontVariantNumeric: "tabular-nums" }}>{item.time}</span>
                      <span className="material-symbols-outlined" style={{ color: item.color, fontSize: "18px" }}>{item.icon}</span>
                    </div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.4rem", letterSpacing: "-0.01em" }}>{item.title}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ce folosim — KEPT AS IS */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="section-inner" style={{ maxWidth: "1000px" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 className="section-title">
              Ce <span style={{ color: "var(--blue)", textTransform: "uppercase" }}>folosim?</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            {[
              { name: "WhatsApp Business API", icon: "chat" },
              { name: "n8n", icon: "account_tree" },
              { name: "Make", icon: "hub" },
              { name: "Claude AI", icon: "auto_awesome" },
              { name: "Google Workspace", icon: "cloud" },
              { name: "Zapier", icon: "bolt" },
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
            Nu trebuie să înțelegi cum funcționează. Trebuie doar să știi că funcționează — și noi îți arătăm în primele 15 minute.
          </p>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="section-inner" style={{ maxWidth: "1000px" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <h2 className="section-title">
              Dincolo de{" "}
              <span style={{ color: "var(--blue)", textTransform: "uppercase" }}>bază</span>
            </h2>
            <p style={{ marginTop: "1rem", color: "var(--text-secondary)", fontWeight: 400, maxWidth: "520px" }}>
              Nu doar email și calendar. Automatizăm lucruri care în mod normal necesită departamente întregi.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {[
              {
                icon: "ads_click",
                title: "Google & Facebook Ads",
                desc: "AI-ul monitorizează performanța zilnic, rescrie reclamele slabe, ajustează bugetele și semnalează risipa.",
              },
              {
                icon: "image",
                title: "Imagini & Video AI",
                desc: "Vizualuri de marketing, poze de produs, conținut video scurt — la scară, fără designeri, fără agenții.",
              },
              {
                icon: "outgoing_mail",
                title: "Outreach & Lead Generation",
                desc: "Pipeline automat: cercetare prospecți, email personalizat, follow-up programat, raport cu ce convertește.",
              },
              {
                icon: "edit_note",
                title: "Conținut la scară",
                desc: "Articole blog, postări social media, newslettere, descrieri produse — în vocea ta, optimizate SEO, publicate pe program.",
              },
              {
                icon: "manage_search",
                title: "Monitorizare competiție",
                desc: "Urmărire zilnică a competitorilor — prețuri, conținut nou, lansări produse, recenzii. Digest livrat dimineața.",
              },
              {
                icon: "inventory_2",
                title: "Operațiuni & Rapoarte",
                desc: "Dashboard-uri automate, alerte stoc, procesare facturi, automatizări workflow — operațiunile tale rulează singure.",
              },
            ].map((item) => (
              <div key={item.icon} className="pain-card">
                <div className="pain-icon">
                  <span className="material-symbols-outlined" style={{ color: "var(--blue)", fontSize: "22px" }}>{item.icon}</span>
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we DON'T do — compact list */}
      <section className="section" style={{ background: "var(--surface)", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="section-inner" style={{ maxWidth: "700px" }}>
          <h2 className="section-title" style={{ marginBottom: "2rem" }}>
            Ce <span style={{ color: "var(--blue)", textTransform: "uppercase" }}>NU</span> facem
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              "Nu promitem că AI-ul înlocuiește oamenii. Îi eliberează să facă treaba care contează.",
              "Nu forțăm tool-uri noi. Lucrăm cu ce ai deja.",
              "Nu vindem pachete generice. Fiecare automatizare e construită specific pe afacerea ta.",
              "Nu dispărem după implementare. Monitorizăm și optimizăm lunar.",
            ].map((text, i) => (
              <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span className="material-symbols-outlined" style={{ color: "#ef4444", fontSize: "20px", marginTop: "2px", flexShrink: 0 }}>close</span>
                <p style={{ color: "var(--text)", fontWeight: 500, fontSize: "0.95rem", lineHeight: 1.6 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple 3-step process */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="section-inner" style={{ maxWidth: "1000px" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 className="section-title">
              Procesul, pas cu{" "}
              <span style={{ color: "var(--blue)", textTransform: "uppercase" }}>pas</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {[
              {
                num: "01",
                title: "Consultație gratuită",
                desc: "15 minute. Ne spui cum lucrezi, ce durează mult, unde pierzi timp. Noi identificăm ce putem automatiza imediat.",
              },
              {
                num: "02",
                title: "Propunere cu preț fix",
                desc: "Primești un document clar: ce automatizăm, cum funcționează, cât durează, ce rezultate estimăm. Fără surprize.",
              },
              {
                num: "03",
                title: "Implementare + monitorizare",
                desc: "Construim, testăm, și lansăm. Dacă știi să folosești WhatsApp, ești gata. Noi monitorizăm și reparăm ce trebuie.",
              },
            ].map((s) => (
              <div key={s.num} style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: "3.5rem", fontWeight: 700, color: "var(--blue-10)",
                  lineHeight: 1, marginBottom: "0.75rem", letterSpacing: "-0.04em",
                }}>{s.num}</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>Sună complicat? <span>Nu e.</span></h2>
          <p>Hai să vorbim 15 minute și îți arătăm exact ce putem face pentru afacerea ta.</p>
          <Link href="/contact" className="btn-cta">
            PROGRAMEAZĂ O CONSULTAȚIE GRATUITĂ
          </Link>
        </div>
      </section>
    </>
  );
}
