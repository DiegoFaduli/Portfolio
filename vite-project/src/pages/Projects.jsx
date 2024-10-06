import ProjectCard from '../assets/Components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Site de Aposta Bettery',
    description: 'Este projeto consiste em uma plataforma de apostas online, oferecendo aos usuários uma experiência de interação social e aposta em eventos esportivos. Utilizando JavaScript, HTML, CSS, e React, o site foi projetado para ser rápido, intuitivo e acessível em diversos dispositivos.',
    imageUrl: '/public/Images/bettery.png',
    technologies: 'Javascript, HTML, CSS e React',
    githubLink: 'https://github.com/DiegoFaduli',
  },
  {
    id: 2,
    title: 'AirBnb',
    description: 'Uma interface web minimalista inspirada no famoso modelo da AirBnb, este projeto simula funcionalidades de um sistema de aluguel de propriedades. Desenvolvido com JavaScript, HTML, CSS, e Bootstrap. Ideal para demonstrar habilidades em desenvolvimento front-end com foco em experiência do usuário.',
    imageUrl: '/public/Images/Airbnb.PNG',
    technologies: 'Javascript, HTML, CSS, Bootstrap e React',
    githubLink: 'https://github.com/DiegoFaduli/Webdev-challenge-teste',
  },
];


export default function Projects() {
  return (
    <div className="p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-10 text-center md:pt-20 ">My Projects</h1>
      <div className="space-y-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
