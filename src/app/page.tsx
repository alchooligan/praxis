import Link from "next/link";
import Image from "next/image";

function DashedArrow() {
  return (
    <div className="wf-arrow">
      <svg width="2" height="40">
        <line x1="1" y1="0" x2="1" y2="40" stroke="var(--blue)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3">
          <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1s" repeatCount="indefinite" />
        </line>
      </svg>
    </div>
  );
}

export default function Home() {
  const marqueeItems = [
    "Răspunsuri automate WhatsApp", "Confirmare programări", "Facturare automată",
    "Urmărire comenzi", "Urmărire plăți", "Recenzii Google automate",
    "Alerte stoc", "Rapoarte automate", "Integrare angajați noi",
    "Rezervări online", "Sortare email", "Oferte de preț automate",
    "Suport clienți 24/7", "Sincronizare calendar",
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-grid">
          <div>
            <h1>Automatizăm munca <span>repetitivă</span> din afacerea ta</h1>
            <p className="hero-sub">Construim sisteme care preiau sarcinile pe care le faci de 10 ori pe zi — tu te ocupi de afacere, ele lucrează non-stop.</p>
            <div className="hero-buttons">
              <Link className="btn-primary" href="/contact">Hai să vorbim</Link>
              <Link className="btn-ghost" href="/cum-functioneaza">Vezi cum funcționează</Link>
            </div>
            <div className="hero-stats">
              <span><span className="hero-stat-num">15+</span> <span className="hero-stat-label">ore câștigate / săptămână</span></span>
              <span className="hero-stat-dot">·</span>
              <span><span className="hero-stat-num">85%</span> <span className="hero-stat-label">mai puține mesaje</span></span>
              <span className="hero-stat-dot">·</span>
              <span><span className="hero-stat-num">24/7</span> <span className="hero-stat-label">activ</span></span>
            </div>
          </div>

          {/* iPhone Notification Mockup */}
          <div className="hero-illustration" style={{ justifyContent: "center", alignItems: "center" }}>
            {/* Blue glow behind phone */}
            <div style={{
              position: "absolute", width: "300px", height: "400px",
              background: "radial-gradient(circle, rgba(0,70,200,0.15) 0%, transparent 70%)",
              filter: "blur(40px)", zIndex: 0, pointerEvents: "none",
            }} />
            {/* Phone Frame */}
            <div className="float-2" style={{
              width: "340px",
              minHeight: "640px",
              background: "#1c1c1e",
              borderRadius: "3rem",
              padding: "0.8rem",
              boxShadow: "0 30px 90px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)",
              position: "relative",
              transform: "perspective(1200px) rotateY(-5deg) rotateX(2deg)",
              zIndex: 1,
            }}>
              {/* Notch */}
              <div style={{
                position: "absolute", top: "0.8rem", left: "50%", transform: "translateX(-50%)",
                width: "120px", height: "28px", background: "#000", borderRadius: "14px", zIndex: 10,
              }} />
              {/* Screen */}
              <div style={{
                background: "linear-gradient(180deg, #1c1c1e 0%, #2c2c2e 100%)",
                borderRadius: "2.4rem",
                padding: "3.5rem 1rem 2rem",
                minHeight: "600px",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                overflow: "hidden",
              }}>
                {/* Status bar */}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0 0.5rem", marginBottom: "1.5rem", marginTop: "-0.5rem" }}>
                  <span style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 600 }}>16:42</span>
                  <div style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
                    <svg width="16" height="12" viewBox="0 0 16 12"><path d="M1 4h2v8H1zM5 2h2v10H5zM9 0h2v12H9zM13 3h2v9h-2z" fill="#fff"/></svg>
                    <svg width="16" height="12" viewBox="0 0 16 12"><path d="M8 2C5.8 2 3.8 2.8 2.3 4.2L0 2C2.2 0 5 -1 8 -1s5.8 1 8 3l-2.3 2.2C12.2 2.8 10.2 2 8 2z" fill="#fff" opacity="0.3"/><path d="M8 5c-1.7 0-3.2 0.7-4.3 1.8L1.3 4.5C3 2.9 5.4 2 8 2s5 .9 6.7 2.5l-2.4 2.3C11.2 5.7 9.7 5 8 5z" fill="#fff"/></svg>
                    <div style={{ width: "22px", height: "11px", border: "1px solid rgba(255,255,255,0.35)", borderRadius: "3px", padding: "1px", position: "relative" }}>
                      <div style={{ width: "70%", height: "100%", background: "#34c759", borderRadius: "1.5px" }} />
                      <div style={{ position: "absolute", right: "-4px", top: "3px", width: "2px", height: "5px", background: "rgba(255,255,255,0.35)", borderRadius: "0 1px 1px 0" }} />
                    </div>
                  </div>
                </div>

                {/* Notifications */}
                {[
                  { time: "Acum", text: "Client nou de pe Google Ads → profil creat, email de bun venit trimis, asignat la Mihai automat.", opacity: 1, newest: true },
                  { time: "14:32", text: "Ofertă de 23.400€ generată pentru renovare apartament 3 camere. Trimisă clientului. Urmărire programată în 3 zile.", opacity: 1 },
                  { time: "13:15", text: "4 recenzii noi pe Google răspunse. Rating mediu urcat de la 4.2 la 4.5 luna asta.", opacity: 1 },
                  { time: "11:47", text: "Raport săptămânal generat: 847 interacțiuni, 12 programări automate, 3 facturi restante urmărite.", opacity: 0.9 },
                  { time: "09:30", text: "Stoc scăzut: Produs #241 sub prag. Comandă furnizor trimisă automat.", opacity: 0.6 },
                ].map((notif, i) => (
                  <div key={i} className={`notif-slide-${i}${notif.newest ? " notif-newest" : ""}`} style={{
                    background: notif.newest ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.10)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderRadius: "1rem",
                    padding: "0.75rem 0.9rem",
                    opacity: notif.opacity,
                    transition: "all 0.3s",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                      {/* Praxis icon with badge */}
                      <div style={{ position: "relative", flexShrink: 0 }}>
                        <div style={{
                          width: "20px", height: "20px", background: "var(--blue)", borderRadius: "5px",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "12px" }}>auto_awesome</span>
                        </div>
                        {i === 0 && (
                          <div style={{
                            position: "absolute", top: "-4px", right: "-4px",
                            width: "10px", height: "10px", background: "#ff3b30",
                            borderRadius: "50%", border: "1.5px solid #1c1c1e",
                          }} />
                        )}
                      </div>
                      <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", flex: 1 }}>PRAXIS</span>
                      <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)" }}>{notif.time}</span>
                    </div>
                    <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.45, margin: 0 }}>{notif.text}</p>
                  </div>
                ))}

                {/* Home indicator */}
                <div style={{ marginTop: "auto", paddingTop: "1rem", display: "flex", justifyContent: "center" }}>
                  <div style={{ width: "36%", height: "4px", background: "rgba(255,255,255,0.3)", borderRadius: "2px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section reveal" style={{ background: "var(--white)" }}>
        <div className="section-inner">
          <h2 className="section-title">Te recunoști?</h2>
          <div className="pain-grid">
            {[
              { icon: "mail", title: "Răspunzi la aceleași mesaje de 20 de ori pe zi", desc: "Același răspuns, copiat, lipit, trimis. Același client care întreabă același lucru." },
              { icon: "table_chart", title: "Ții evidența pe WhatsApp și în capul tău", desc: "Scrollezi prin 200 de mesaje ca să găsești un număr de comandă. Și mâine o faci din nou." },
              { icon: "phone_missed", title: "Pierzi clienți pentru că nu apuci să răspunzi", desc: "Telefonul sună, ești ocupat, clientul sună la concurență." },
              { icon: "receipt_long", title: "Facturile se fac manual și plățile se pierd", desc: "Factura pleacă cu 3 zile întârziere, plata vine cu 30." },
            ].map((c) => (
              <div key={c.icon} className="pain-card">
                <div className="pain-icon"><span className="material-symbols-outlined">{c.icon}</span></div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process-section reveal" id="proces">
        <div className="section-inner">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: 0 }}>Cum lucrăm</h2>
          <div className="process-container">
            <div className="process-progress">
              <div className="process-progress-fill" id="progressFill" />
              <div className="process-dot" id="dot1" style={{ top: "8%" }} />
              <div className="process-dot" id="dot2" style={{ top: "42%" }} />
              <div className="process-dot" id="dot3" style={{ top: "76%" }} />
            </div>

            {/* Step 1 */}
            <div className="process-step" id="step1">
              <div>
                <div className="process-num">01</div>
                <h4>Analizăm</h4>
                <p>Ne uităm la cum lucrezi azi — ce faci manual, ce durează mult, ce se pierde pe drum. Gratuit, fără obligații.</p>
              </div>
              <div className="process-visual">
                <div className="vis-audit">
                  <div className="vis-audit-row highlight">
                    <span className="material-symbols-outlined">chat</span>
                    <span className="vis-audit-label">Răspunsuri clienți WhatsApp</span>
                    <span className="vis-audit-tag auto">Automatizabil</span>
                  </div>
                  <div className="vis-audit-row highlight">
                    <span className="material-symbols-outlined">event</span>
                    <span className="vis-audit-label">Confirmare programări</span>
                    <span className="vis-audit-tag auto">Automatizabil</span>
                  </div>
                  <div className="vis-audit-row">
                    <span className="material-symbols-outlined">receipt_long</span>
                    <span className="vis-audit-label">Facturare manuală</span>
                    <span className="vis-audit-tag manual">Manual</span>
                  </div>
                  <div className="vis-audit-row">
                    <span className="material-symbols-outlined">phone_missed</span>
                    <span className="vis-audit-label">Apeluri pierdute</span>
                    <span className="vis-audit-tag risk">Pierdere</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="process-step reverse" id="step2">
              <div>
                <div className="process-num">02</div>
                <h4>Construim</h4>
                <p>Construim exact ce ai nevoie — de la răspunsuri automate și programări până la generare de oferte, rapoarte sau urmărire plăți. Fiecare sistem e construit pe afacerea ta.</p>
              </div>
              <div className="process-visual">
                <div className="vis-connect">
                  <div className="vis-connect-node"><span className="material-symbols-outlined" style={{ color: "#25D366" }}>chat</span></div>
                  <div className="vis-connect-line" />
                  <div className="vis-connect-node"><span className="material-symbols-outlined" style={{ color: "var(--blue)" }}>mail</span></div>
                  <div className="vis-connect-line" />
                  <div className="vis-connect-center"><span className="material-symbols-outlined" style={{ color: "#fff", fontSize: "28px" }}>hub</span></div>
                  <div className="vis-connect-line" />
                  <div className="vis-connect-node"><span className="material-symbols-outlined" style={{ color: "var(--orange)" }}>event</span></div>
                  <div className="vis-connect-line" />
                  <div className="vis-connect-node"><span className="material-symbols-outlined" style={{ color: "#8b5cf6" }}>receipt_long</span></div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="process-step" id="step3">
              <div>
                <div className="process-num">03</div>
                <h4>Monitorizăm</h4>
                <p>Totul rulează singur. Noi reparăm, optimizăm, și adăugăm funcționalități noi pe măsură ce crești.</p>
              </div>
              <div className="process-visual">
                <div className="vis-dashboard">
                  <div className="vis-dash-header">
                    <div className="vis-dash-status">Sistem activ</div>
                    <div className="vis-dash-live">Performanță în timp real</div>
                  </div>
                  <div className="vis-dash-bars">
                    {[35, 50, 45, 65, 80, 70, 90, 85].map((h, i) => (
                      <div key={i} className="vis-dash-bar" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="vis-dash-metrics">
                    <div className="vis-dash-metric"><div className="vis-dash-metric-val">847</div><div className="vis-dash-metric-label">Mesaje azi</div></div>
                    <div className="vis-dash-metric"><div className="vis-dash-metric-val">99.2%</div><div className="vis-dash-metric-label">Disponibilitate</div></div>
                    <div className="vis-dash-metric"><div className="vis-dash-metric-val">3.2s</div><div className="vis-dash-metric-label">Timp răspuns</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section reveal" style={{ background: "var(--white)" }}>
        <div className="section-inner">
          <div className="cases-header">
            <div>
              <h2 className="section-title">Rezultate reale.</h2>
              <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>Automatizări implementate pentru afaceri din România.</p>
            </div>
          </div>
          <div className="cases-grid">
            <Link href="/studii-de-caz/eco-ride" className="case-card">
              <div className="case-img">
                <Image alt="Eco Ride electric scooters" width={800} height={520} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.6s"}} src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFeMUVQb3QoXm_IGdp54-E6CX5kTrgoLLdE4Ays8Bi0WEWulX06yvyjRQWrD1I7cYb9EvjesQgBUzV0nabJbiRU88rFmSBD1GDCllXKgSfrxEYgbp3uw3NC17Z7SqM-dJHhS5lOpzHC_EQgdE9jWK6xe_yCuQExtYDYH1qH_J7GBzonXAoJ-a-mTDwAFlyjwjtP41ZPbgI0_QDpWrGp7yV7pTSfpnani0NcewPaxfZXxbmgDm6chtsrY_lHk9IJOMexB25IS097Vs" />
              </div>
              <div className="case-body">
                <div className="case-tag">Logistică &amp; Mobilitate</div>
                <h3>3 ore câștigate pe zi și zero înregistrări pierdute</h3>
                <p>Un serviciu de închiriere trotinete electrice cu 85 de vehicule într-un oraș. Totul se gestiona pe WhatsApp — fiecare schimb, fiecare client, fiecare baterie. Acum totul se înregistrează automat.</p>
                <div className="case-badges">
                  <span className="case-badge">3h+/zi câștigate</span>
                  <span className="case-badge">0 pierderi</span>
                  <span className="case-badge">Raport zilnic</span>
                </div>
                <span className="case-link">VEZI CUM AM FĂCUT-O &rarr;</span>
              </div>
            </Link>
            <Link href="/studii-de-caz/clinica-dentara" className="case-card">
              <div className="case-img">
                <Image alt="Clinică dentară modernă" width={800} height={520} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.6s"}} src="https://lh3.googleusercontent.com/aida-public/AB6AXuALISmtAXLH6XK0dMzNH5NYzk9BmAHA6oCJcTtvdgbD8b7jI1mYil99oZXrXbspmTRLaO7j7dEF0wvtnar_TP5twPRNJABxMD_Pa-gs59cBd2HdELnn47wJtwdIW7-hIDc7UMAiQ8WIbTLnLdegh1HEti1O8ULN_VY7tWArIiB8EUmLSItXrd3lJKk-IEFx4rhHIKf-ExLsP8AHs2-aFKw0DstPvJ4aJS4M5-Pl35jqZ1C2ZyD4ONC3gkPhk5_IPeLOWNUSSyfi_9A" />
              </div>
              <div className="case-body">
                <div className="case-tag">Sănătate</div>
                <h3>No-show redus cu 14% și 2 ore libere pe zi la recepție</h3>
                <p>O clinică cu 800+ programări pe lună unde recepționera suna manual fiecare pacient. Acum confirmarea, reprogramarea și cererile de recenzie se fac singure.</p>
                <div className="case-badges">
                  <span className="case-badge">No-show -14%</span>
                  <span className="case-badge">2h+/zi libere</span>
                  <span className="case-badge">3x recenzii</span>
                </div>
                <span className="case-link">VEZI CUM AM FĂCUT-O &rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="marquee-section">
        <div className="marquee-label">Ce putem automatiza</div>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="marquee-pill">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>Fiecare afacere e diferită.<br />Hai să vorbim <span>15 minute.</span></h2>
          <p>De aceea începem cu o conversație, nu cu un pachet standard. Îți analizăm afacerea gratuit și îți spunem exact ce putem automatiza și ce rezultate să aștepți.</p>
          <Link href="/contact" className="btn-cta" style={{ background: "var(--blue)", color: "#fff" }}>Programează 15 minute gratuit</Link>
        </div>
      </section>
    </>
  );
}
