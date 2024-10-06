import { useState } from 'react';

const contactItems = [
  {
    social: 'email',
    link: 'diegofaduli@gmail.com',
    href: 'https://www.google.com/intl/pt-BR/gmail/about/',
  },
  {
    social: 'github',
    link: 'DiegoFaduli',
    href: 'https://github.com/DiegoFaduli',
  },
  {
    social: 'linkedin',
    link: 'Diego Faduli',
    href: 'https://www.linkedin.com/in/diego-faduli-183626284/',
  },
  {
    social: 'instagram',
    link: 'diieego_costa',
    href: 'https://www.instagram.com/diieego_costa/',
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    console.log(formData);

  };

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8 p-4 ">
      <div className="lg:w-1/2">
        <h3 className="text-2xl mb-4 md:pt-32">Entre em contato comigo através de:</h3>
        {contactItems.map((item, index) => (
          <div key={index} className="mb-2">
            <span className="font-bold capitalize">{item.social}:</span>{' '}
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {item.link}
            </a>
          </div>
        ))}
      </div>

      <div className="lg:w-1/2">
        <h3 className="text-2xl mb-4">Ou preencha este formulário</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-sm font-semibold uppercase mb-1 text-left"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 text-white border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-semibold uppercase mb-1 text-left"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800 text-white border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="assunto"
              className="block text-sm font-semibold uppercase mb-1 text-left"
            >
              Assunto
            </label>
            <input
              type="text"
              name="assunto"
              id="assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 text-white border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
            />
          </div>
          <div>
            <label
              htmlFor="mensagem"
              className="block text-sm font-semibold uppercase mb-1 text-left"
            >
              mensagem
            </label>
            <textarea
              name="mensagem"
              id="mensagem"
              rows="5"
              value={formData.mensagem}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 text-white border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-left"
            ></textarea>
          </div>
          <div className="flex justify-start">
            <button
              type="submit"
              className="p-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              
              {enviado ? 'Enviado!' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
