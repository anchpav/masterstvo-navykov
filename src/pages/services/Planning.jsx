import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutLeader from "../../components/AboutLeader";

export default function Planning() {
  return (
    <>
      <Header />

      {/* Заголовок */}
      <section className="max-w-4xl mx-auto px-4 mt-24 mb-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Группа планирования
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600">
          Курс по планированию и организации задач, чтобы продуктивно достигать целей.
        </p>
      </section>

      {/* О лидере */}
      <AboutLeader />

      {/* Для кого */}
      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold mb-6 text-purple-600">Для кого</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <p>Люди, которые хотят научиться эффективно планировать день</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <p>Команды и руководители, стремящиеся к продуктивной работе</p>
          </div>
        </div>
      </section>

      {/* Что получите */}
      <section className="max-w-4xl mx-auto my-12 px-4 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold mb-4 text-yellow-800">Что получите</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Навыки постановки приоритетов</li>
          <li>Пошаговый план на неделю, месяц, квартал</li>
          <li>Методы борьбы с прокрастинацией</li>
          <li>Групповые разборы и обратная связь</li>
        </ul>
      </section>

      {/* Программа */}
      <section className="max-w-4xl mx-auto my-12 px-4 space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="font-semibold mb-1">1 неделя: Основы планирования</h3>
          <p>Вводные техники, постановка целей и приоритетов.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="font-semibold mb-1">2 неделя: Приоритеты и цели</h3>
          <p>Как расставлять приоритеты и эффективно достигать цели.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="font-semibold mb-1">3 неделя: Тайм-менеджмент</h3>
          <p>Работа с временем, борьба с отвлекающими факторами.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="font-semibold mb-1">4 неделя: Итоговая практика</h3>
          <p>Закрепление навыков и групповая обратная связь.</p>
        </div>
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
