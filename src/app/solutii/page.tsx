import Link from "next/link";

interface Industry {
  id: string;
  title: string;
  icon: string;
  automations: { name: string; desc: string; icon: string }[];
}

const industries: Industry[] = [
  {
    id: "clinici",
    title: "Clinici și cabinete medicale",
    icon: "local_hospital",
    automations: [
      { name: "Confirmare programări automate", desc: "Pacientul primește un mesaj pe WhatsApp cu 24h înainte. Confirmă cu un simplu 'Da'. Fără telefon, fără recepționeră.", icon: "calendar_month" },
      { name: "Mai puține absențe cu reminder-uri automate", desc: "De la 18% absențe la sub 5%. Fiecare loc liber se umple automat din lista de așteptare.", icon: "event_available" },
      { name: "Follow-up post-consultație", desc: "La 24h după vizită, pacientul primește un mesaj de mulțumire și un link direct pentru recenzie Google.", icon: "rate_review" },
      { name: "Gestionare listă de așteptare", desc: "Când cineva anulează, următorul pacient de pe listă primește mesaj instant cu locul disponibil.", icon: "group" },
    ],
  },
  {
    id: "magazine",
    title: "Magazine online",
    icon: "storefront",
    automations: [
      { name: "Răspunsuri automate la \"Unde e comanda?\"", desc: "Clientul trimite mesaj — sistemul verifică statusul la curier și răspunde instant cu link de tracking.", icon: "local_shipping" },
      { name: "Facturare automată", desc: "Comanda se plasează, factura se generează și se trimite automat. Zero muncă manuală.", icon: "receipt" },
      { name: "Alerte stoc redus", desc: "Când un produs scade sub pragul setat, primești notificare instant. Nu mai pierzi vânzări din lipsă de stoc.", icon: "inventory" },
      { name: "Follow-up post-livrare", desc: "După confirmare livrare, clientul primește mesaj cu cerere de feedback. Recenziile Google cresc automat.", icon: "star" },
    ],
  },
  {
    id: "saloane",
    title: "Servicii și saloane",
    icon: "spa",
    automations: [
      { name: "Rezervări online fără telefon", desc: "Clientul alege serviciul, vede orele disponibile, și se programează singur. Tu nu ridici telefonul.", icon: "book_online" },
      { name: "Confirmare + reminder automat", desc: "Mesaj pe WhatsApp cu 24h și 2h înainte. Confirmarea sau anularea se face cu un singur click.", icon: "notifications_active" },
      { name: "Completare automată locuri din anulări", desc: "Cineva anulează la 8 dimineața — până la 9, locul e ocupat de altcineva din lista de așteptare.", icon: "swap_horiz" },
      { name: "Cereri automate de recenzii Google", desc: "După fiecare vizită, clientul primește un link scurt. De la 47 la 130+ recenzii fără să ceri manual.", icon: "thumb_up" },
    ],
  },
  {
    id: "inchirieri",
    title: "Închirieri (mașini, trotinete, Airbnb)",
    icon: "directions_car",
    automations: [
      { name: "Tracking flotă / inventar automat", desc: "Fiecare vehicul, fiecare schimb de baterie, fiecare client — totul se înregistrează automat, fără Excel.", icon: "pin_drop" },
      { name: "Comunicare automată cu clienții", desc: "Confirmare rezervare, instrucțiuni de utilizare, reminder de returnare — totul automat pe WhatsApp.", icon: "chat" },
      { name: "Facturare și urmărire plăți", desc: "Factura se generează la finalizare, reminder-ul pleacă la scadență. Tu vezi doar cine a plătit.", icon: "payments" },
      { name: "Rapoarte utilizare și venituri", desc: "Raport zilnic sau săptămânal direct pe email: câte închirieri, venituri, vehicule disponibile.", icon: "analytics" },
    ],
  },
  {
    id: "constructii",
    title: "Construcții și meșteșuguri",
    icon: "construction",
    automations: [
      { name: "Generare oferte în 30 de minute", desc: "Introduci specificațiile — oferta se generează automat cu prețuri, materiale, și termen estimat.", icon: "request_quote" },
      { name: "Facturare automată + urmărire plăți", desc: "La fiecare etapă finalizată, factura pleacă automat. La scadență, reminder-ul pleacă singur.", icon: "receipt_long" },
      { name: "Programare echipe pe șantiere", desc: "Calendar centralizat cu echipe, locații, și materiale necesare. Fiecare primește notificare pe telefon.", icon: "engineering" },
      { name: "Liste materiale din specificații", desc: "Din specificațiile lucrării, sistemul generează lista completă de materiale cu cantități și costuri estimate.", icon: "list_alt" },
    ],
  },
];

export default function Solutii() {
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
            <span className="material-symbols-outlined" style={{ color: "var(--blue)", fontSize: "16px" }}>category</span>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--blue)" }}>Pe industrii</span>
          </div>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 700, lineHeight: 1.1,
            letterSpacing: "-0.03em", color: "var(--text)",
          }}>
            {"Ce "}<span style={{ color: "var(--blue)", textTransform: "uppercase" }}>automatizăm</span>
          </h1>
          <p style={{
            marginTop: "1.5rem", fontSize: "1.1rem", color: "var(--text-secondary)",
            lineHeight: 1.7, maxWidth: "640px", marginLeft: "auto", marginRight: "auto", fontWeight: 400,
          }}>
            {"Fiecare industrie are frustrările ei. Noi le cunoaștem — și avem soluții concrete pentru fiecare."}
          </p>
        </div>
      </section>

      {/* Industries */}
      {industries.map((ind, i) => (
        <section
          key={ind.id}
          id={ind.id}
          className="section"
          style={{ background: i % 2 === 0 ? "var(--white)" : "var(--surface)" }}
        >
          <div className="section-inner">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
              <div className="pain-icon" style={{ width: "56px", height: "56px", borderRadius: "16px", marginBottom: 0 }}>
                <span className="material-symbols-outlined" style={{ color: "var(--blue)", fontSize: "26px" }}>{ind.icon}</span>
              </div>
              <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>{ind.title}</h2>
            </div>
            <div className="pain-grid">
              {ind.automations.map((a) => (
                <div key={a.name} className="pain-card">
                  <div className="pain-icon">
                    <span className="material-symbols-outlined" style={{ color: "var(--blue)", fontSize: "22px" }}>{a.icon}</span>
                  </div>
                  <h4>{a.name}</h4>
                  <p>{a.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "2rem" }}>
              <Link href="/contact" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                {"VREAU ASTA PENTRU AFACEREA MEA "}
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>{"Nu vezi industria ta "}<span>aici?</span></h2>
          <p>{"Dacă ai oameni care fac aceleași lucruri în fiecare zi, putem automatiza. Hai să vorbim."}</p>
          <Link href="/contact" className="btn-cta">
            {"PROGRAMEAZĂ O CONSULTAȚIE GRATUITĂ"}
          </Link>
        </div>
      </section>
    </>
  );
}
