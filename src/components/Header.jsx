import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          Мастерская Авгушевич
        </Link>

        <nav className="hidden md:flex gap-6">
          <button onClick={() => scrollTo("about")} className="hover:text-blue-600">Обо мне</button>
          <button onClick={() => scrollTo("services")} className="hover:text-blue-600">Услуги</button>
          <button onClick={() => setContactOpen(true)} className="hover:text-blue-600">Контакты</button>
        </nav>

        <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>☰</button>
      </div>

      {open && (
        <nav className="md:hidden bg-white shadow-md px-4 pb-4 flex flex-col gap-3">
          <button onClick={() => scrollTo("about")} className="hover:text-blue-600">Обо мне</button>
          <button onClick={() => scrollTo("services")} className="hover:text-blue-600">Услуги</button>
          <button onClick={() => { setContactOpen(true); setOpen(false); }} className="hover:text-blue-600">Контакты</button>
        </nav>
      )}

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  );
}
