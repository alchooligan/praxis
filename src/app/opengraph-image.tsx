import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Praxis — Automatizare AI pentru Afaceri";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #f7f9ff 0%, #ffffff 50%, #e8eeff 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#181c21",
            letterSpacing: "-0.02em",
            marginBottom: "40px",
          }}
        >
          Praxis
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#181c21",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            maxWidth: "800px",
          }}
        >
          Automatizăm munca{" "}
          <span style={{ color: "#0046C8" }}>repetitivă</span> din afacerea ta
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#5a5e6a",
            marginTop: "24px",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          65% din ziua ta e muncă repetitivă. Construim sisteme care o fac pentru tine.
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "48px",
          }}
        >
          {[
            { num: "15+", label: "ore câștigate / săptămână" },
            { num: "85%", label: "mai puține mesaje" },
            { num: "24/7", label: "activ" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "22px", fontWeight: 700, color: "#0046C8" }}>{s.num}</span>
              <span style={{ fontSize: "16px", color: "#8a8e9a" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
