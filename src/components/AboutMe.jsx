export default function AboutMe() {
  return (
    <section id="about" className="max-w-4xl mx-auto my-16 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Обо мне</h2>
      <p className="text-xl md:text-2xl text-gray-700 mb-4">
        Привет! Меня зовут Авгушевич. Я помогаю людям формировать полезные привычки, 
        улучшать коммуникацию и достигать своих целей. Моя миссия — сделать обучение навыкам 
        эффективным, интересным и вдохновляющим.
      </p>
 <span
    className="ml-1 cursor-pointer"
    onClick={() => alert("Привет, внимательный пользователь! 🐸")}
  >
      <p className="text-gray-600">
        За годы работы я провела множество групповых и индивидуальных занятий, а теперь делюсь опытом онлайн.
      </p>
    </section>
  );
}
