import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Întrebări Frecvente despre Automatizare AI",
  description:
    "Răspunsuri la cele mai comune întrebări: cât costă, cât durează, am nevoie de cunoștințe tehnice? Tot ce trebuie să știi despre automatizarea cu AI.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Nu știu nimic despre AI — pot beneficia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nu trebuie să înțelegi cum funcționează AI-ul, la fel cum nu trebuie să înțelegi cum funcționează motorul ca să conduci. Noi ne ocupăm de setup, configurare și integrare.",
      },
    },
    {
      "@type": "Question",
      name: "Cât durează implementarea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depinde de complexitate. O automatizare simplă (răspunsuri WhatsApp, confirmare programări) e gata în 1-3 zile. Un sistem complet (facturare + tracking + rapoarte) durează 2-3 săptămâni.",
      },
    },
    {
      "@type": "Question",
      name: "Cât costă?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fiecare proiect e diferit, deci nu avem prețuri standard pe site. Consultația e gratuită — după ce înțelegem ce ai nevoie, primești o ofertă cu preț fix, fără surprize.",
      },
    },
    {
      "@type": "Question",
      name: "Ce se întâmplă dacă ceva se strică?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monitorizăm sistemele lunar. Dacă ceva nu funcționează, reparăm noi — nu trebuie să ne suni. Dacă e ceva urgent, răspundem în aceeași zi.",
      },
    },
    {
      "@type": "Question",
      name: "Trebuie să schimb tool-urile pe care le folosesc acum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nu. Lucrăm cu ce ai deja — WhatsApp, Excel, Google Calendar, email. Automatizările se integrează direct în aplicațiile tale existente.",
      },
    },
    {
      "@type": "Question",
      name: "Funcționează pentru tipul meu de afacere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dacă ai oameni care fac aceleași lucruri în fiecare zi — răspund la mesaje, confirmă programări, trimit facturi, verifică stocuri — da, funcționează.",
      },
    },
    {
      "@type": "Question",
      name: "Nu sunt deloc tehnic — mă puteți ajuta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exact cu asta lucrăm. Nu ne așteptăm să atingi vreun cod sau să configurezi ceva singur. Treaba noastră e să traducem ce ai nevoie în ceva care funcționează.",
      },
    },
    {
      "@type": "Question",
      name: "Am o afacere foarte de nișă — funcționează și pentru mine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Probabil da. Am lucrat în industrii de la imobiliare la sănătate și construcții. Dacă afacerea ta implică sarcini repetitive, comunicare, documente, programări sau cercetare — aproape întotdeauna există ceva ce AI-ul poate prelua.",
      },
    },
    {
      "@type": "Question",
      name: "Ce se întâmplă dacă vreau să schimb ceva după implementare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tot ce construim e al tău. Documentăm cum funcționează și instruim echipa ta să îl gestioneze. Dacă vrei modificări, suntem disponibili.",
      },
    },
  ],
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
