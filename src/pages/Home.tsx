import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import ts from '../assets/ts.png'
import react from '../assets/react.png'
import vercel from '../assets/vercel.png'
import netlify from '../assets/netlify.png'
import vite from '../assets/vite.png'
import vscode from '../assets/vscode.png'
import figma from '../assets/figma.png'
import git from '../assets/git.png'
import github from '../assets/github-white-icon.webp'
import node from '../assets/node-js-removebg-preview.png'
import nodemon from '../assets/nodemon-removebg-preview.png'
import express from '../assets/express-js.png'
import sequelize from '../assets/sequelize-removebg-preview.png'
import sql from '../assets/sql.png'
import mysql from '../assets/mysql-removebg-preview.png'
import insomnia from '../assets/insomnia-removebg-preview.png'
import eu from '../assets/euzinha.jpeg'
import Star from '../assetstwo/star.png'
import pixelStar1 from '../assetstwo/pixel-start-1.png'
import pixelStar2 from '../assetstwo/pixel-start-2.png'

const Home: React.FC = () => {
    return (
        <div className="max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 py-10 md:py-20 overflow-x-hidden relative">

            {/* estrela branca */}
            <img
                src={Star}
                className="absolute left-3 sm:left-30 top-7 sm:top-4 w-28 sm:w-30 md:w-52 opacity-100 pointer-events-none z-0 rotate-[15deg]"
                alt="star-outline-left"
            />

            {/* título */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 relative z-10">
                <img src={pixelStar1} alt="star" className="w-8 h-8 sm:w-8 sm:h-8 object-contain" />
                <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-terminal text-white tracking-wide">Sobre mim</h3>
            </div>

<div className="flex flex-col-reverse lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center justify-between mb-16 sm:mb-20 pb-16 sm:pb-24 lg:pb-20 lg:pr-[clamp(40px,8vw,140px)] relative">

    {/* texto */}
    <div className="flex-1 relative z-10 w-full max-w-2xl">
        <p className="font-terminal text-lg sm:text-2xl md:text-2xl leading-relaxed text-gray-200">
            Olá, eu me chamo Vitória, tenho 19 anos e sou uma desenvolvedora de software em formação. Eu estudo Análise e Desenvolvimento de Sistemas no IFSul - Campus Gravataí.
            <br /><br />
            Em 2026, entrei para a 29ª edição do Programa CWI Crescer, que conta com treinamento profissional em formato de aulas e estágio. Já conclui o Level 1 e aprendi muito sobre ambiente profissional, trabalho em equipe, versionamento de código e ferramentas diversas.
            <br /><br />
            Além disso, me dedico na criação de aplicações web responsivas, intuitivas, bem estruturadas e, acima de tudo, me preocupo com o planejamento estético dos meus projetos.
        </p>
    </div>

    {/* container da foto */}
    <div className="relative flex-shrink-0 my-6 lg:my-0 w-[clamp(170px,40vw,400px)] h-[clamp(170px,40vw,400px)] flex items-center justify-center z-10">

        {/* estrela grandona*/}
        <img
            src={pixelStar2}
            className="absolute top-1/2 left-16 -translate-x-1/2 -translate-y-1/2 w-[min(145%)] max-w-none z-0 pointer-events-none select-none"
        />

        {/* estrelas menores */}
        <img
            src={pixelStar1}
            className="absolute -top-[30%] right-[-2%] w-[clamp(36px,8vw,112px)] z-20 pointer-events-none"
        />
          <img
            src={pixelStar1}
            className="absolute -top-[10%] right-[-30%] w-[clamp(36px,8vw,112px)] z-20 pointer-events-none"
        />

        {/* estrela branca dnv */}
        <img
            src={Star}
            className="absolute -bottom-[22%] -right-[38%] w-[clamp(90px,14vw,292px)] opacity-100 pointer-events-none z-0"
        />
         <img
            src={Star}
            className="absolute -bottom-[22%] -right-[36%] w-[clamp(90px,14vw,292px)] opacity-100 pointer-events-none z-0"
        />
             <img
            src={Star}
            className="absolute -top-[52%] -left-[192%] w-[clamp(90px,14vw,152px)] opacity-100 pointer-events-none z-0"
        />

        {/* eu ne */}
        <img
            src={eu}
            className="w-full h-full object-cover rounded-full relative z-30 shadow-[0_20px_50px_-8px_rgba(0,0,0,0.8),0_0_40px_-5px_rgba(236,72,153,0.4)]"
        />
    </div>
</div>

            {/* Tech Stack */}
           <div className="max-w-[1900px] mx-auto px-9 sm:px-9 md:px-20 pt-1 pb-2 md:pt-32 md:pb-5 relative">

                <img
                    src={Star} className="absolute right-10 sm:right-18 md:right-30 bottom-20 sm:bottom-32 w-32 sm:w-40 md:w-56 opacity-100 z-0 rotate-[15deg]" />
                <img
                    src={Star} className="absolute left-0 sm:left-8 md:right-30 bottom-20 sm:bottom-22 w-32 sm:w-20 md:w-56 opacity-100 z-0 rotate-[15deg]" />
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-1 relative z-10">
                    <img
                        src={pixelStar1} className="w-8 h-8 object-contain" />
                    <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-terminal text-white tracking-wide">
                        Tech Stack
                    </h3>
                </div>

        </div>

            <SubLabel label="Ferramentas" />
            <TechGrid techs={[
                { src: git,      alt: "Git" },
                { src: github,   alt: "GitHub" },
                { src: vite,     alt: "Vite" },
                { src: vscode,   alt: "VS Code" },
                { src: figma,    alt: "Figma" },
                { src: netlify,  alt: "Netlify" },
                { src: vercel,   alt: "Vercel" },
                { src: insomnia, alt: "Insomnia" },
            ]} />

            <SubLabel label="Front-end" />
            <TechGrid techs={[
                { src: html,   alt: "HTML" },
                { src: css,    alt: "CSS" },
                { src: js,     alt: "JavaScript" },
                { src: ts,     alt: "TypeScript" },
                { src: react,  alt: "React" },
            ]} />

            <SubLabel label="Back-end & Dados" />
            <TechGrid techs={[
                { src: node,      alt: "Node.js" },
                { src: nodemon,   alt: "Nodemon" },
                { src: express,   alt: "Express.js" },
                { src: sequelize, alt: "Sequelize" },
                { src: sql,       alt: "SQL" },
                { src: mysql,     alt: "MySQL" },
            ]} />

        </div>
    );
};

/* extra */

const SubLabel: React.FC<{ label: string }> = ({ label }) => (
    <div className="flex items-center justify-center mb-6 sm:mb-8 mt-10 sm:mt-16">
        <span className="font-terminal text-white text-lg sm:text-2xl tracking-[0.2em] sm:tracking-[0.3em] uppercase">
            {label}
        </span>
    </div>
);

const TechGrid: React.FC<{ techs: { src: string; alt: string }[] }> = ({ techs }) => (
    <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center mb-8">
        {techs.map(({ src, alt }) => (
            <div key={alt} className="flex flex-col items-center gap-2 group">
                <div className="p-2 sm:p-3 bg-black transition-transform duration-300 hover:scale-110">
                    <img
                        src={src}
                        alt={alt}
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain [image-rendering:pixelated]"
                    />
                </div>
            </div>
        ))}
    </div>
);

export default Home;