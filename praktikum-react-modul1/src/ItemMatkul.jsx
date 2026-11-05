import React from "react";

function ItemMatkul({ kode, nama, hari, sks }) {
  return (
    <div
      style={{
        width: "100%",
        padding: "24px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #111827",
        borderRadius: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        boxSizing: "border-box",
        height: "100%",
        gap: "20px",
      }}
    >
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E5E7EB",
            paddingBottom: "12px",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              fontWeight: "800",
              fontSize: "13px",
              color: "#111827",
              letterSpacing: "0.05em",
            }}
          >
            {kode}
          </span>
          <span
            style={{
              fontSize: "12px",
              color: "#4B5563",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {hari}
          </span>
        </div>

        <h3
          style={{
            margin: "0",
            fontWeight: "800",
            color: "#111827",
            fontSize: "18px",
            lineHeight: "1.4",
            letterSpacing: "-0.02em",
          }}
        >
          {nama}
        </h3>
      </div>

      <span
        style={{
          backgroundColor: "#111827",
          color: "#FFFFFF",
          padding: "8px 14px",
          borderRadius: "0",
          fontSize: "12px",
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          marginTop: "auto",
        }}
      >
        {sks} SKS
      </span>
    </div>
  );
}

export default ItemMatkul;
