import { FaTelegram, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contacts" className="bg-gray-100 text-gray-800 py-8 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="mb-4 md:mb-0">© 2025 Любовь Авгушевич</p>
        <div className="flex gap-6 text-2xl">
          <a href="https://t.me/avgushevich" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTelegram />
          </a>
          <a href="https://www.instagram.com/art_vs_hate/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
