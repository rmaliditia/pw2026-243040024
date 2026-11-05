import React from "react";

function BadgeSkill({ namaSkill, level }) {
  const getBadgeStyle = (lvl) => {
    switch (lvl) {
      case "Pemula":
        return { bg: "#F9FAFB", text: "#6B7280", border: "#E5E7EB" };
      case "Menengah":
        return { bg: "#9CA3AF", text: "#111827", border: "#9CA3AF" };
      case "Mahir":
        return { bg: "#111827", text: "#F9FAFB", border: "#111827" };
      default:
        return { bg: "#FFFFFF", text: "#111827", border: "#111827" };
    }
  };

  const { bg, text, border } = getBadgeStyle(level);

  return (
    <span
      style={{
        display: "inline-block",
        backgroundColor: bg,
        color: text,
        border: `1px solid ${border}`,
        padding: "6px 14px",
        fontSize: "12px",
        fontWeight: "600",
        marginRight: "8px",
        marginBottom: "8px",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      {namaSkill}
    </span>
  );
}

export default BadgeSkill;
