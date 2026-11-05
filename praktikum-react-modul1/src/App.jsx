import React from "react";
import KartuProfil from "./KartuProfil";
import BadgeSkill from "./BadgeSkill";
import ItemMatkul from "./ItemMatkul";
import KartuProyek from "./KartuProyek";
import Judul from "./Judul";
import fotoSaya from "./assets/profile.png";

function App() {
  const daftarPraktikum = [
    {
      id: 101,
      kode: "IF211",
      nama: "Praktikum Pemrograman 2",
      sks: 5,
      hari: "Senin",
    },
    {
      id: 102,
      kode: "IF212",
      nama: "Praktikum Sistem Berorientasi Objek",
      sks: 5,
      hari: "Selasa",
    },
    { id: 103, kode: "IF213", nama: "Praktikum Web", sks: 5, hari: "Jumat" },
    {
      id: 104,
      kode: "IF214",
      nama: "Perancangan Sistem",
      sks: 5,
      hari: "Kamis",
    },
    {
      id: 105,
      kode: "IF215",
      nama: "Verifikasi dan Validasi Perangkat Lunak",
      sks: 5,
      hari: "Senin",
    },
    {
      id: 106,
      kode: "IF216",
      nama: "Intelegensia Buatan",
      sks: 5,
      hari: "Rabu",
    },
    {
      id: 107,
      kode: "IF217",
      nama: "Internet Of Things",
      sks: 5,
      hari: "Kamis",
    },
    {
      id: 108,
      kode: "IF218",
      nama: "Perancangan Interaksi",
      sks: 5,
      hari: "Rabu",
    },
  ];

  const daftarKeahlian = [
    { id: 1, nama: "Visual Design (UI)", level: "Mahir" },
    { id: 2, nama: "Wireframing", level: "Mahir" },
    { id: 3, nama: "Figma", level: "Mahir" },
    { id: 4, nama: "Design Thinking", level: "Menengah" },
    { id: 5, nama: "User Flow", level: "Pemula" },
    { id: 6, nama: "UX Research & User Persona", level: "Pemula" },
  ];

  const daftarProyek = [
    {
      id: 1,
      judul: "SponsorinAja",
      deskripsi:
        "Platform B2B untuk menghubungkan penyelenggara acara dengan sponsor.",
      teknologi: ["Golang", "React", "B2B"],
      linkGithub: "https://github.com/rmaliditia?tab=repositories",
    },
    {
      id: 2,
      judul: "Miembara",
      deskripsi:
        "Mobile web app pemesanan alur kerja Order & Collect berbasis PWA.",
      teknologi: ["PWA", "TailwindCSS", "Mobile"],
      linkGithub: "https://github.com/rmaliditia?tab=repositories",
    },
    {
      id: 3,
      judul: "Adopaw",
      deskripsi: "Aplikasi adopsi hewan peliharaan dengan verifikasi WhatsApp.",
      teknologi: ["Hybrid", "UI/UX", "API"],
      linkGithub: "https://github.com/rmaliditia?tab=repositories",
    },
    {
      id: 4,
      judul: "runtut-web",
      deskripsi: "Aplikasi to-do list dengan analitik dashboard khusus.",
      teknologi: ["PHP", "MySQL", "Tailwind"],
      linkGithub: "https://github.com/rmaliditia?tab=repositories",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 24px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#111827",
        textAlign: "left",
      }}
    >
      <header
        style={{
          borderBottom: "2px solid #111827",
          paddingBottom: "24px",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{ margin: "0 0 8px 0", fontSize: "28px", fontWeight: "800" }}
        >
          Praktikum Pemrograman Web
        </h1>
        <p style={{ margin: 0, color: "#4B5563", fontSize: "15px" }}>
          Laboratorium Informatika - Modul 1
        </p>
      </header>

      <section style={{ marginBottom: "48px" }}>
        <KartuProfil
          nama="Reiza Mohamad Aliditia"
          npm="243040024"
          kelas="Praktikum Web Kelas A"
          status="TERSEDIA"
          fotoUrl={fotoSaya}
        />
        <Judul teks="Daftar Keahlian" />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {daftarKeahlian.map((skill) => (
            <BadgeSkill
              key={skill.id}
              namaSkill={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <Judul teks="Jadwal Kuliah Semester 5" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul key={matkul.id} {...matkul} />
          ))}
        </div>
      </section>

      <section>
        <Judul teks="Showcase Portofolio Mini" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {daftarProyek.map((proyek) => (
            <KartuProyek key={proyek.id} {...proyek} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;