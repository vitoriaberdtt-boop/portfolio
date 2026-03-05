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
import github from '../assets/github.png'
import node from '../assets/node-js-removebg-preview.png'
import nodemon from '../assets/nodemon-removebg-preview.png'
import express from '../assets/express-js.png'
import sequelize from '../assets/sequelize-removebg-preview.png'
import sql from '../assets/sql.png'
import mysql from '../assets/mysql-removebg-preview.png'
import insomnia from '../assets/insomnia-removebg-preview.png'
import eu from '../assets/euu.jpg'

const Home: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-20">

            {/* ── About Me ── */}
            <SectionTitle label="About Me" />

            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center mb-24">
                {/* Texto */}
                <div className="flex-1 relative">
                    <div className="absolute -left-5 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-turquoise-medium to-transparent" />
                    <h4 className="font-normal text-lg md:text-xl leading-relaxed text-text-light pl-2">
                        Hi, my name is Vitória, and I am a university student in Systems Analysis and Development at IFSul. <br /><br />
                        I have solid web development skills and have built several responsive and dynamic projects, which I share on my GitHub and LinkedIn. <br /><br />
                        I have a strong interest in the technology field and am always seeking to learn more and keep my skills up to date. <br /><br />
                        I am currently seeking an IT internship.
                    </h4>
                </div>

                {/* Foto — glow ring estático, sem animação */}
                <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 rounded-full shadow-[0_0_40px_8px_rgba(0,217,255,0.25)]" />
                    <img
                        src={eu}
                        alt="Vitória"
                        className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-turquoise-medium relative z-10"
                    />
                </div>
            </div>

            {/* ── Tech Stack ── */}
            <SectionTitle label="Tech Stack" />

              {/* ── Tools ── */}
            <SubLabel label="Tools" />
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

            <SubLabel label="Back-end" />
            <TechGrid techs={[
                { src: node,     alt: "Node.js" },
                { src: nodemon,  alt: "Nodemon" },
                { src: express,  alt: "Express.js" },
                { src: sequelize,alt: "Sequelize" },
            ]} />

            <SubLabel label="Databases" />
            <TechGrid techs={[
                { src: sql,   alt: "SQL" },
                { src: mysql, alt: "MySQL" },
            ]} />

        </div>
    );
};

/* ── Componentes auxiliares ── */

const SectionTitle: React.FC<{ label: string }> = ({ label }) => (
    <div className="flex items-center gap-4 my-10">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-turquoise-medium opacity-30" />
        <h3 className="text-2xl md:text-3xl px-6 py-3 rounded-xl border-[3px] border-turquoise-medium bg-gradient-to-r from-[rgba(4,65,76,0.05)] to-[rgba(92,61,122,0.1)] shadow-[0_4px_15px_rgba(0,217,255,0.2)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(0,217,255,0.3)] whitespace-nowrap">
            {label}
        </h3>
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-turquoise-medium opacity-30" />
    </div>
);

const SubLabel: React.FC<{ label: string }> = ({ label }) => (
    <div className="flex items-center gap-3 mb-6 mt-10">
        <span className="text-turquoise-medium text-lg tracking-[0.2em] uppercase font-semibold opacity-80">
            {label}
        </span>
    </div>
);

const TechGrid: React.FC<{ techs: { src: string; alt: string }[] }> = ({ techs }) => (
    <div className="flex flex-wrap gap-6 items-center justify-center mb-8">
        {techs.map(({ src, alt }) => (
            <div key={alt} className="flex flex-col items-center gap-2 group">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[3deg] group-hover:border-turquoise-medium/30 group-hover:bg-white/[0.07] group-hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)]">
                    <img
                        src={src}
                        alt={alt}
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                    />
                </div>
            </div>
        ))}
    </div>
);

export default Home;