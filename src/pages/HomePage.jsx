import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

import planning from "../assets/images/planning.png";
import communication from "../assets/images/communication.png";
import challenge from "../assets/images/challenge.png";
import consultation from "../assets/images/consultation.png";

export default function HomePage() {
  const services = [
    {
      title: "Группа планирования",
      img: planning,
      desc: "В этой группе мы вместе планируем цели на неделю и месяц...",
      link: "/services/planning",
    },
    {
      title: "Аутентичная коммуникация",
      img: communication,
      desc: "Развиваем навыки честного, открытого и уважительного общения...",
      link: "/services/communication",
    },
    {
      title: "Челлендж привычек",
      img: challenge,
      desc: "Программа помогает формировать полезные привычки...",
      link: "/services/challenge",
    },
    {
      title: "Индивидуальные консультации",
      img: consultation,
      desc: "Персональная работа с наставником, учитывающая ваши цели...",
      link: "/services/consultation",
    },
  ];

  return (
    <>
      <Header />
      <Hero />

      {/* Обо мне */}
      <section id="about" className="max-w-4xl mx-auto my-16 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Обо мне</h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Привет! Я Любовь Авгушевич — мастер навыков и проводник в мир продуктивности...
        </p>
      </section>

      {/* Услуги */}
      <section id="services" className="max-w-6xl mx-auto my-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Услуги</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
