import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-white flex justify-center space-x-4">
      <a href="https://github.com/DiegoFaduli" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a href="https://www.linkedin.com/in/diego-faduli-183626284/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </a>
      <a href="https://www.instagram.com/diieego_costa/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </a>
    </footer>
  );
}
