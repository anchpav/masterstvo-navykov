import React from "react";
import leaderPhoto from "../assets/images/myphoto.jpg"; // путь к твоему фото

export default function AboutLeader() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4 flex flex-col md:flex-row items-center gap-8">
     <img 
  src={leaderPhoto} 
  alt="Лидер" 
  className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-full shadow-lg" 
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
