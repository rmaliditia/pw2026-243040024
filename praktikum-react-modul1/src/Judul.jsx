import React from "react";

function Judul({ teks }) {
  return (
    <h4
      style={{
        margin: "0 0 20px 0",
        fontSize: "14px",
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      {teks}
    </h4>
  );
}

export default Judul;