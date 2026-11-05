import React from "react";

function KartuProyek({ judul, deskripsi, teknologi, linkGithub }) {
  return (
    <div style={{
      backgroundColor: "#FFFFFF",
      border: "1px solid #111827",
      borderRadius: "0",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      height: "100%",
      boxSizing: "border-box"
    }}>
      <div>
        <h3 style={{ margin: "0 0 12px 0", fontSize: "18px", fontWeight: "700", color: "#111827", textTransform: "uppercase" }}>
          {judul}
        </h3>
        <p style={{ margin: "0", fontSize: "14px", color: "#4B5563", lineHeight: "1.6" }}>
          {deskripsi}
        </p>
      </div>
      
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {teknologi.map((tech, index) => (
          <span key={index} style={{
            backgroundColor: "#F3F4F6",
            color: "#111827",
            padding: "4px 10px",
            borderRadius: "0",
            fontSize: "11px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}>
            {tech}
          </span>
        ))}
      </div>

      <a href={linkGithub} target="_blank" rel="noopener noreferrer" style={{
        marginTop: "auto",
        display: "block",
        textAlign: "center",
        backgroundColor: "#111827",
        color: "#FFFFFF",
        padding: "14px 20px",
        textDecoration: "none",
        borderRadius: "0",
        fontSize: "13px",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "0.05em"
      }}>
        Lihat Repositori
      </a>
    </div>
  );
}

export default KartuProyek;