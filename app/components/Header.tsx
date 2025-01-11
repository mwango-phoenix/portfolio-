import Link from "next/link";
import { FaBehanceSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white px-6 py-4">
      <nav className="flex items-center justify-between container mx-auto">
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-500">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-right gap-4 text-3xl">
          <Link href="https://www.behance.net/lazymango" target="_blank" className="hover:text-gray-500"><FaBehanceSquare /></Link>
          <Link href="https://github.com/mwango-phoenix" target="_blank" className="hover:text-gray-500"><FaGithubSquare /></Link>
          <Link href="https://linkedin.com/in/mwango-phoenix" target="_blank" className="hover:text-gray-500"><FaLinkedin /></Link>
        </div>
      </nav>
    </header>
  );
}
