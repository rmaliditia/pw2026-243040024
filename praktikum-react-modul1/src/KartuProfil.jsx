import React from "react";

function KartuProfil({ nama, npm, kelas, status, fotoUrl }) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        border: "1px solid #111827",
        borderRadius: "0",
        padding: "32px",
        marginBottom: "24px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #E5E7EB",
          paddingBottom: "16px",
          marginBottom: "24px",
        }}
      >
        <span
          style={{
            fontWeight: "700",
            fontSize: "12px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#4B5563",
          }}
        >
          Profil Saya
        </span>
        <span
          style={{
            backgroundColor: status === "TERSEDIA" ? "#111827" : "#F3F4F6",
            color: status === "TERSEDIA" ? "#FFFFFF" : "#111827",
            padding: "6px 14px",
            fontSize: "11px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Status: {status}
        </span>
      </div>

      {/* Profil */}
      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        <img
          src={fotoUrl}
          alt={nama}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "0",
            border: "1px solid #111827",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div>
            <h2
              style={{
                margin: "0 0 4px 0",
                fontSize: "26px",
                fontWeight: "800",
                color: "#111827",
                letterSpacing: "-0.02em",
              }}
            >
              {nama}
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#6B7280",
                fontWeight: "500",
              }}
            >
              UI/UX Designer
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "4px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "13px", color: "#4B5563" }}>
              <strong style={{ color: "#111827" }}>NPM:</strong> {npm}
            </span>
            <span style={{ fontSize: "12px", color: "#D1D5DB" }}>|</span>
            <span style={{ fontSize: "13px", color: "#4B5563" }}>
              <strong style={{ color: "#111827" }}>Kelas:</strong> {kelas}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KartuProfil;
