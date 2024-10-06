import React from 'react';
import developerDark from '../../public/Images/developer-dark.3f07bd13.svg';

export default function Home() {
  return (
    <div className="w-full mt-32 flex items-center justify-between px-8 bg-dark text-white">
      <div className="flex flex-col justify-center h-full w-1/2">
        <h1 className="text-5xl font-bold mb-4">Olá, sou Diego Costa</h1>
        <p className="text-xl mb-6">Sou Engenheiro de Software</p>
        <div className="flex justify-center">
          <a 
            href="/files/Currículo.pdf"
            download
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-100 flex items-center justify-center transition-colors duration-300"
          >
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
            <span className="text-lg font-medium group-hover:text-blue-100">Download CV</span>
          </a>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <img src={developerDark} alt="imgDeveloper" className="w-3/4 h-auto mr-60" />
      </div>
    </div>
  );
}
