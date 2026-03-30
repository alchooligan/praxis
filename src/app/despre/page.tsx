import Link from "next/link";

export default function Despre() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ background: "var(--surface)", paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div className="section-inner" style={{ maxWidth: "800px" }}>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 700, lineHeight: 1.1,
            letterSpacing: "-0.03em", color: "var(--text)",
          }}>
            {"Despre "}<span style={{ color: "var(--blue)", textTransform: "uppercase" }}>Lucro</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="section-inner" style={{ maxWidth: "1000px" }}>
          <div className="grid-2" style={{ gap: "4rem", alignItems: "center" }}>
            <div>
              <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "2rem" }}>
                {"De la tech "}<span style={{ color: "var(--blue)", textTransform: "uppercase" }}>mare</span>{" la afaceri mici"}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7, fontWeight: 400 }}>
                  {"Am petrecut 7 ani construind strategii de marketing și creștere pentru companii tech — de la startup-uri în faza de pre-lansare până la produse cu peste un milion de dolari în venituri. Am condus echipe, am construit sisteme de la zero, și am văzut din interior cum companiile care cresc repede automatizează tot ce se repetă."}
                </p>
                <p style={{ color: "var(--text)", fontSize: "1.05rem", lineHeight: 1.7, fontWeight: 500 }}>
                  {"Diferența? Ele au bugete de sute de mii de euro. Tu nu trebuie să ai."}
                </p>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7, fontWeight: 400 }}>
                  {"Am luat exact aceleași principii — automatizare, sisteme inteligente, procese care rulează fără intervenție — și le-am adaptat pentru afaceri care funcționează cu 2-10 oameni. Clinici, magazine, firme de construcții, servicii de închiriere. Afaceri reale, cu probleme reale, care până acum nu aveau acces la tehnologia asta."}
                </p>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", inset: "-1.5rem",
                background: "var(--blue-50)", borderRadius: "50%", filter: "blur(48px)", opacity: 0.4,
              }} />
              <div className="pain-card" style={{
                position: "relative", padding: 0, overflow: "hidden",
                borderRadius: "2rem", boxShadow: "0 20px 60px rgba(0,70,200,0.08)",
              }}>
                <div style={{ background: "var(--surface)", borderRadius: "1.5rem", padding: "2.5rem", margin: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                    <div style={{
                      width: "10px", height: "10px", borderRadius: "50%",
                      background: "var(--blue)", animation: "pulse 2s infinite",
                    }} />
                    <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--blue)" }}>Misiunea noastră</span>
                  </div>
                  <p style={{
                    fontSize: "1.5rem", fontWeight: 700, color: "var(--text)",
                    lineHeight: 1.4, letterSpacing: "-0.01em",
                  }}>
                    {"\u201CNu vindem AI ca buzzword. Vindem ore înapoi. Fiecare automatizare pe care o construim pleacă de la o întrebare simplă: ce faci azi de 10 ori care nu ar trebui să existe mâine?\u201D"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="section-inner" style={{ maxWidth: "1000px" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 className="section-title">
              <span style={{ color: "var(--blue)", textTransform: "uppercase" }}>Echipa</span>
            </h2>
            <p style={{ marginTop: "1rem", color: "var(--text-secondary)", fontWeight: 400, maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
              {"Mică, dar eficientă. Ca automatizările noastre."}
            </p>
          </div>
          <div className="grid-2" style={{ maxWidth: "700px", margin: "0 auto" }}>
            <div className="pain-card" style={{ textAlign: "center", padding: "2.5rem" }}>
              <div style={{
                width: "72px", height: "72px", margin: "0 auto 1.5rem", borderRadius: "50%",
                background: "var(--blue-50)", display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--blue)" }}>C</span>
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 600, letterSpacing: "-0.01em" }}>Cosmin</h3>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--coral)", marginTop: "0.3rem" }}>Fondator</p>
              <p style={{ marginTop: "1rem", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                {"7 ani în tech, marketing și strategie de produs. Am lansat produse, am crescut echipe, și am construit sisteme de automatizare înainte să fie la modă. Vorbesc cu fiecare client personal pentru că nu poți automatiza ce nu înțelegi."}
              </p>
            </div>
            <div className="pain-card" style={{ textAlign: "center", padding: "2.5rem" }}>
              <div style={{
                width: "72px", height: "72px", margin: "0 auto 1.5rem", borderRadius: "50%",
                background: "var(--blue-50)", display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span className="material-symbols-outlined" style={{ color: "var(--blue)", fontSize: "28px" }}>auto_awesome</span>
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 600, letterSpacing: "-0.01em" }}>{"Agenți AI"}</h3>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--coral)", marginTop: "0.3rem" }}>Echipa tehnică</p>
              <p style={{ marginTop: "1rem", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                {"Aceiași agenți AI pe care îi folosim pentru clienți rulează și în Lucro. Monitorizare, research, rapoarte, comunicare — non-stop. Dacă ne întrebi cum știm că funcționează, răspunsul e: pentru că noi trăim pe ele în fiecare zi."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="section-inner" style={{ maxWidth: "1000px" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 className="section-title">
              {"Cum "}<span style={{ color: "var(--blue)", textTransform: "uppercase" }}>lucrăm</span>
            </h2>
          </div>
          <div className="pain-grid">
            {[
              {
                title: "Începem cu ascultare, nu cu vânzare",
                desc: "Nu venim cu o prezentare. Venim cu întrebări. Primele 15 minute sunt despre cum arată ziua ta, nu despre ce vindem noi.",
                icon: "hearing",
              },
              {
                title: "Construim pe ce ai deja",
                desc: "Nu te forțăm pe platforme noi. Dacă echipa ta știe WhatsApp și Excel, automatizările noastre se lipesc direct pe ele.",
                icon: "extension",
              },
              {
                title: "Măsurăm totul",
                desc: "Nu livrăm «soluții». Livrăm numere: 3 ore câștigate pe zi, 14% mai puține anulări, 30 de minute în loc de 4 ore. Dacă nu putem măsura, nu construim.",
                icon: "analytics",
              },
              {
                title: "Rămânem după implementare",
                desc: "Majoritatea firmelor construiesc, facturează, și dispar. Noi monitorizăm lunar, reparăm ce se strică, și adăugăm funcționalități noi fără să te taxăm pentru fiecare conversație.",
                icon: "handshake",
              },
            ].map((v) => (
              <div key={v.icon} className="pain-card">
                <div className="pain-icon">
                  <span className="material-symbols-outlined" style={{ color: "var(--blue)", fontSize: "22px" }}>{v.icon}</span>
                </div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>{"Hai să vedem ce putem face "}<span>pentru tine.</span></h2>
          <Link href="/contact" className="btn-cta">
            {"PROGRAMEAZĂ O CONSULTAȚIE"}
          </Link>
        </div>
      </section>
    </>
  );
}
