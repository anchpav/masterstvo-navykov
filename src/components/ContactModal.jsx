import React, { useState } from "react";
import confetti from "canvas-confetti";

const handleSubmit = (e) => {
  e.preventDefault();
  
  confetti({
    particleCount: 50,
    spread: 70,
    origin: { y: 0.6 },
    emojis: ["🧪", "🐸", "🚀"],
  });

  // дальше отправка формы на email
};


export default function ContactModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно подключить API отправки письма
    setSubmitted(true);
    setName(""); setEmail(""); setMessage("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-lg animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">Контакты Любови</h2>

        <p className="mb-2">📧 Email: <a href="mailto:Avgushevich@gmail.com" className="text-blue-600">Avgushevich@gmail.com</a></p>
        <p className="mb-2">📍 Локация: Бат-Ям, Израиль</p>
        <p className="mb-2">
          🌐 Соцсети: 
          <a href="https://t.me/avgushevich" target="_blank" className="text-blue-600 ml-1">Telegram</a>, 
          <a href="https://www.instagram.com/art_vs_hate/" target="_blank" className="text-pink-500 ml-1">Instagram</a>
        </p>

        <form className="flex flex-col gap-3 mt-4" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Ваше имя" 
            className="border rounded-lg p-2" 
            value={name} onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Ваш email" 
            className="border rounded-lg p-2" 
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <textarea 
            placeholder="Сообщение" 
            className="border rounded-lg p-2 h-24" 
            value={message} onChange={(e) => setMessage(e.target.value)}
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Отправить
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-green-600 font-semibold text-center">
            Сообщение отправлено! 🛸 Рик бы одобрил 🚀
          </p>
        )}

        {/* Пасхалка — мини Рик */}
        <div className="absolute bottom-2 right-2 text-sm text-gray-400">
          🧪 «Wubba Lubba Dub-Dub!» — Рик
        </div>
      </div>
    </div>
  );
}
