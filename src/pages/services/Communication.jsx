import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutLeader from "../../components/AboutLeader";

export default function Communication() {
  return (
    <>
      <Header />

      {/* Заголовок */}
      <section className="max-w-4xl mx-auto px-4 mt-24 mb-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Аутентичная коммуникация
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600">
          Развиваем навыки честного и уважительного общения. Учимся выражать мысли и эмоции без конфликта и строить доверительные отношения.
        </p>
      </section>

      {/* О лидере */}
      <AboutLeader />

      {/* Для кого */}
      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold mb-6 text-purple-600">Для кого</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <p>Люди, которые хотят улучшить свои навыки общения и уверенность в диалоге</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <p>Команды и руководители, желающие повысить эффективность взаимодействия</p>
          </div>
        </div>
      </section>

      {/* Что получите */}
      <section className="max-w-4xl mx-auto my-12 px-4 bg-gradient-to-r from-green-200 to-green-400 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold mb-4 text-green-800">Что получите</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Уверенное выражение своих мыслей и эмоций</li>
          <li>Навыки активного слушания и эмпатии</li>
          <li>Умение решать конфликты конструктивно</li>
          <li>Практика на реальных ситуациях</li>
        </ul>
      </section>

      {/* Кнопка записи */}
      <section className="max-w-4xl mx-auto my-12 px-4 text-center">
        <a
          href="https://t.me/avgushevich"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          Записаться
        </a>
      </section>

      <Footer />
    </>
  );
}
