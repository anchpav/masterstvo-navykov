import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutLeader from "../../components/AboutLeader";

export default function Challenge() {
  return (
    <>
      <Header />

      {/* Заголовок */}
      <section className="max-w-4xl mx-auto px-4 mt-24 mb-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Челлендж привычек
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600">
          Программа формирования полезных привычек и устойчивой самодисциплины. Разбираем психологию изменений и закрепляем новые привычки в повседневной жизни.
        </p>
      </section>

      {/* О лидере */}
      <AboutLeader />

      {/* Для кого */}
      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold mb-6 text-purple-600">Для кого</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <p>Люди, стремящиеся создать новые полезные привычки и системно развиваться</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <p>Команды и руководители, которые хотят повысить личную и коллективную продуктивность</p>
          </div>
        </div>
      </section>

            {/* Что получите */}
      <section className="max-w-4xl mx-auto my-12 px-4 bg-gradient-to-r from-pink-200 to-pink-400 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold mb-4 text-pink-800">Что получите</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Пошаговая система формирования привычек</li>
          <li>Методы закрепления новых привычек в повседневной жизни</li>
          <li>Поддержка и мотивация на каждом шаге</li>
          <li>Групповые челленджи и совместные задания</li>
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

