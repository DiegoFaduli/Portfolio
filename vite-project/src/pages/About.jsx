import React from "react"; 
import Skills from "../assets/Components/Skills.jsx";

const About = () => {
  return (
    <div className="lg:pl-20 lg:pr-32">
      <div className="flex justify-between md:mx-20 md:pt-20">
        <div className="flex flex-col md:ml-20 px-10 mt-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:px-8">
              
              <h2 className="font-bold text-3xl text-left mb-5">
                Olá, sou estudante de <span className="text-blue-500">Engenharia de Software</span> com paixao por <span className="text-blue-500">FullStack</span>.
              </h2>
            </div>
            <div>
              <p className="text-left font-normal mb-5 flex-wrap">
                Estou cursando minha graduação na FIAP. A maior parte da minha experiência é em desenvolvimento web full stack e resolução de problemas.
              </p>
              <p className="text-left font-normal mb-5 flex-wrap"></p>
              <p className="text-left font-normal mb-5 flex-wrap">
                No meu tempo livre, adoro aprender novas tecnologias e me manter atualizado com o desenvolvimento full stack. Fora da programação, gosto de ver NBA e assistir diversos filmes.
              </p>
            </div>
          </div>
          <div className="text-bold text-3xl mt-10 mr-10">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
