import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full p-6 text-white flex justify-end space-x-8 ">
      <Link to="/" className="hover:underline">Menu</Link>
      <Link to="/about" className="hover:underline">Sobre mim</Link>
      <Link to="/projects" className="hover:underline">Projetos</Link>
      <Link to="/contact" className="hover:underline">Contato</Link>
    </nav>
  );
}