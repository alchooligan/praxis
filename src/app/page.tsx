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
              <Link className="btn-ghost" href="/proces">Vezi cum funcționează</Link>
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
            <div className="float-2 phone-frame" style={{
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
                      {/* Mantl icon with badge */}
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
                      <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", flex: 1 }}>MANTL</span>
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

      {/* Marquee — part of hero flow */}
      <section className="marquee-section" style={{ borderTop: "none", paddingTop: "1rem" }}>
        <div className="marquee-label">Ce putem automatiza</div>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="marquee-pill">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section reveal" style={{ background: "var(--white)" }}>
        <div className="section-inner" style={{ maxWidth: "1000px" }}>
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
              <div className="process-visual" style={{ flexDirection: "column", padding: "2rem", gap: "1rem" }}>
                {/* Clock face — 65% repetitive, 35% business real */}
                <svg viewBox="0 0 200 200" width="200" height="200" style={{ margin: "0 auto" }}>
                  {/* Clock face */}
                  <circle cx="100" cy="100" r="90" fill="none" stroke="var(--border)" strokeWidth="1" />
                  {/* Hour marks */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 - 90) * Math.PI / 180;
                    const x1 = 100 + 82 * Math.cos(angle);
                    const y1 = 100 + 82 * Math.sin(angle);
                    const x2 = 100 + 88 * Math.cos(angle);
                    const y2 = 100 + 88 * Math.sin(angle);
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--text-tertiary)" strokeWidth="1.5" strokeLinecap="round" />;
                  })}
                  {/* 65% repetitive arc — red/warm, from 12 o'clock clockwise */}
                  <circle cx="100" cy="100" r="72" fill="none" stroke="#ef4444" strokeWidth="20" strokeDasharray={`${0.65 * 2 * Math.PI * 72} ${0.35 * 2 * Math.PI * 72}`} strokeDashoffset="0" transform="rotate(-90 100 100)" opacity="0.15" strokeLinecap="round" />
                  <circle cx="100" cy="100" r="72" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray={`${0.65 * 2 * Math.PI * 72} ${0.35 * 2 * Math.PI * 72}`} strokeDashoffset="0" transform="rotate(-90 100 100)" opacity="0.6" strokeLinecap="round" />
                  {/* 35% business real arc — blue */}
                  <circle cx="100" cy="100" r="72" fill="none" stroke="var(--blue)" strokeWidth="20" strokeDasharray={`${0.35 * 2 * Math.PI * 72} ${0.65 * 2 * Math.PI * 72}`} strokeDashoffset={`${-0.65 * 2 * Math.PI * 72}`} transform="rotate(-90 100 100)" opacity="0.12" strokeLinecap="round" />
                  <circle cx="100" cy="100" r="72" fill="none" stroke="var(--blue)" strokeWidth="3" strokeDasharray={`${0.35 * 2 * Math.PI * 72} ${0.65 * 2 * Math.PI * 72}`} strokeDashoffset={`${-0.65 * 2 * Math.PI * 72}`} transform="rotate(-90 100 100)" opacity="0.8" strokeLinecap="round" />
                  {/* Center */}
                  <circle cx="100" cy="100" r="4" fill="var(--text-tertiary)" />
                  {/* Clock hands — hour at ~5:12 (65% of 8h day) */}
                  <line x1="100" y1="100" x2="100" y2="45" stroke="var(--text)" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="100" y1="100" x2="130" y2="85" stroke="var(--text-tertiary)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <p style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 500, lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 700, color: "#ef4444" }}>65%</span> din zi e muncă repetitivă.
                  <br /><span style={{ fontWeight: 700, color: "var(--blue)" }}>35%</span> e afacere reală.
                </p>
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
              <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>Automatizări implementate pentru afaceri reale.</p>
            </div>
          </div>
          <div className="cases-grid">
            <div className="case-card">
              <div className="case-img">
                <Image alt="Eco Ride electric scooters" width={800} height={520} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover"}} src="/images/eco-ride.jpg" />
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
              </div>
            </div>
            <div className="case-card">
              <div className="case-img">
                <Image alt="Clinică dentară modernă" width={800} height={520} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover"}} src="/images/clinica-dentara.jpg" />
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
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>Fiecare afacere e diferită.<br />Hai să vorbim <span>15 minute.</span></h2>
          <p>De aceea începem cu o conversație, nu cu un pachet standard. Îți analizăm afacerea gratuit și îți spunem exact ce putem automatiza și ce rezultate să aștepți.</p>
          <Link href="/contact" className="btn-cta" style={{ background: "var(--blue)", color: "#fff" }}>Hai să vorbim</Link>
        </div>
      </section>
    </>
  );
}
