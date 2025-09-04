import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const SERVICES = {
  "group-planning": {
    title: "Группа планирования",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200",
    intro:
      "Групповой формат, где мы выстраиваем систему недельного и месячного планирования, синхронизируем задачи с жизненными ролями и привычками.",
    bullets: [
      "Еженедельные созвоны и чек-ин",
      "Лёгкий контроль и обратная связь",
      "Шаблоны планов и трекинга",
    ],
  },
  "auth-communication": {
    title: "Аутентичная коммуникация",
    image: "https://images.unsplash.com/photo-1529336953121-a0ce3d952ad9?q=80&w=1200",
    intro:
      "Тренируем ясность, границы и честность в общении — от рабочих встреч до личных диалогов.",
    bullets: [
      "Практики ненасильственного общения",
      "Ролевая отработка сложных разговоров",
      "Договорённости, которые работают",
    ],
  },
  "habits-challenge": {
    title: "Челлендж привычек",
    image: "https://images.unsplash.com/photo-1517963628607-235ccdd5476d?q=80&w=1200",
    intro:
      "30-дневная программа, чтобы мягко встроить 1–2 ключевые привычки без перегруза и с поддержкой комьюнити.",
    bullets: [
      "Дневные микро-задания",
      "Трекинг и еженедельные ретроспективы",
      "Гибкие правила адаптации",
    ],
  },
  "consulting-1-1": {
    title: "Индивидуальные консультации",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200",
    intro:
      "Персональная работа над системой жизни: структура дел, ментальные модели, публичные выступления.",
    bullets: [
      "Диагностика и план улучшений",
      "Практические упражнения под цели",
      "Поддержка между сессиями",
    ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const data = SERVICES[slug];

  if (!data) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold mb-2">Страница не найдена</h1>
        <Link to="/" className="text-blue-600 underline">
          На главную
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10 md:py-14">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {data.title}
        </motion.h1>

        <motion.img
          src={data.image}
          alt={data.title}
          className="w-full h-[260px] md:h-[360px] object-cover rounded-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        />

        <motion.p
          className="text-gray-700 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          {data.intro}
        </motion.p>

        <ul className="grid md:grid-cols-3 gap-4">
          {data.bullets.map((b, i) => (
            <motion.li
              key={i}
              className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
            >
              {b}
            </motion.li>
          ))}
        </ul>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 hover:border-gray-400 transition"
          >
            ← На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
