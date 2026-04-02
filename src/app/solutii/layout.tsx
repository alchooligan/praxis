import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluții de Automatizare AI pentru Clinici, Magazine, Saloane",
  description:
    "Automatizări AI specifice pentru clinici dentare, magazine online, saloane, închirieri auto și construcții. Vezi ce automatizăm în industria ta.",
};

export default function SolutiiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
