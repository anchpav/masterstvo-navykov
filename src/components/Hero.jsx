import { useState } from "react";
import headerDefault from "../assets/images/header-default.jpg";
import headerHover from "../assets/images/header-hover.jpg";

export default function Hero() {
  const [hover, setHover] = useState(false);

  return (
    <section
      className="relative w-full flex flex-col md:flex-row items-center px-4 md:px-16 py-12 md:py-20 gap-8 bg-gray-50"
      style={{ marginTop: "80px" }}
    >
      <div className="md:w-1/2">
        <img
          src={hover ? headerHover : headerDefault}
          alt="Любовь Авгушевич"
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-lg transition-all duration-500"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Мастерская навыков Авгушевич
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          Практические занятия по продуктивности, привычкам и общению.
        </p>
      </div>
    </section>
  );
}
