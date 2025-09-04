import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function EasterEggs() {
  const [showEgg, setShowEgg] = useState(false);

  // Секретная комбинация клавиш
  useEffect(() => {
    const keysPressed = [];
    const handleKeyDown = (e) => {
      keysPressed.push(e.key.toLowerCase());
      if (keysPressed.slice(-3).join("") === "krk") { // комбинация K-R-K
        setShowEgg(true);
        setTimeout(() => setShowEgg(false), 3000);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Конфетти
  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      emojis: ["🧪", "🐸", "🚀"],
    });
  };

  return (
    <>
      {showEgg && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Секретная пасхалка! 🧪
        </div>
      )}

      <img
        src="/rick1.png" // положи картинку Рика в public/rick1.png
        alt="Рик"
        className="fixed bottom-4 right-4 w-12 h-12 animate-bounce cursor-pointer opacity-70 hover:opacity-100 z-50"
        onClick={() => alert("Привет из мультивселенной! 🌀")}
      />

      <button
        onClick={triggerConfetti}
        className="hidden"
      />
    </>
  );
}
