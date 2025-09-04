import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Группа планирования",
    desc: "Краткое описание услуги.",
    img: "../assets/images/planning.png",
    link: "/services/planning",
  },
  {
    title: "Аутентичная коммуникация",
    desc: "Краткое описание услуги.",
    img: "../assets/images/communication.png",
    link: "/services/communication",
  },
  {
    title: "Челлендж привычек",
    desc: "Краткое описание услуги.",
    img: "../assets/images/challenge.png",
    link: "/services/challenge",
  },
  {
    title: "Индивидуальные консультации",
    desc: "Краткое описание услуги.",
    img: "../assets/images/consultation.png",
    link: "/services/consultation",
  },
];

export default function ServicesGrid() {
  const navigate = useNavigate();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
          onClick={() => navigate(service.link)}
        >
          <div className="relative h-56">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 bg-white">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
