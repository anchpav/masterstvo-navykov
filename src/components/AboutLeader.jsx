import React from "react";

export default function AboutLeader() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4 flex flex-col md:flex-row items-center gap-8">
      <img
        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80"
        alt="Любовь Авгушевич"
        className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg"
      />
      <div className="text-gray-700">
        <h2 className="text-3xl font-semibold mb-4">О ведущем</h2>
        <p className="text-lg leading-relaxed">
          Меня зовут <span className="font-bold">Любовь Авгушевич</span>.  
          Я помогаю людям системно расти, сохраняя баланс между личной жизнью и карьерой.  
          Веду курсы по планированию, коммуникации и формированию привычек.  
          Моя цель — дать практические инструменты, которые работают в реальной жизни.
        </p>
      </div>
    </section>
  );
}
