import React from 'react'
import bakery from '../assets/maria.jpeg'
import todolist from '../assets/terefa.jpeg'
import javascriptquiz from '../assets/quiz.jpeg'
import calculator from '../assets/calculadora.jpeg'
import multiplicationtable from '../assets/tabuada.jpeg'
import landingpage from '../assets/sanrio.jpg'
import Star from '../assetstwo/star.png'
import pixelStar1 from '../assetstwo/pixel-start-1.png'

const Projects: React.FC = () => {

    const projects = [
        {
            src: bakery,
            title: "Maria's Bakery",
            description: "Aplicação full-stack de e-commerce desenvolvida para uma confeitaria fictícia. Implementa autenticação de usuários, catálogo de produtos, busca por nome ou sabor, gerenciamento do carrinho e realização de pedidos para delivery.",
            stack: "JavaScript, Node.js, Express, Sequelize, MySQL, autenticação de usuários (cadastro/login), API REST para gerenciamento de produtos, API ViaCEP para preenchimento automático de endereços.",
            link: "https://marias-bakery.onrender.com/",
        },
        {
            src: todolist,
            title: "Gerenciador de Tarefas",
            description: "Aplicação de gerenciamento de tarefas desenvolvida com React. Permite adicionar, pesquisar e filtrar tarefas por categoria ou ordem alfabética, com persistência dos dados no localStorage. Também possui suporte a temas claro e escuro.",
            stack: "HTML5, CSS3, Tailwind CSS, DaisyUI, React.js, JavaScript",
            link: "https://lista-de-tarefas-ochre-phi.vercel.app/",
        },
        {
            src: javascriptquiz,
            title: "Quiz de JavaScript",
            description: "Aplicação interativa de quiz com 10 questões sobre conceitos fundamentais de JavaScript, abordando variáveis, tipos de dados, funções, estruturas de repetição e outros fundamentos da linguagem. Desenvolvida com manipulação do DOM e lógica de interação em JavaScript.",
            stack: "HTML5, CSS3, JavaScript.",
            link: "https://quiz-java-script-orpin.vercel.app/",
        },
        {
            src: calculator,
            title: "Calculadora",
            description: "Calculadora interativa desenvolvida em JavaScript para realizar operações matemáticas básicas, como adição, subtração, multiplicação e divisão, com interface responsiva e gradiente",
            stack: "HTML5, CSS3, JavaScript",
            link: "https://calculadora-vitoria.vercel.app/",
        },
        {
            src: multiplicationtable,
            title: "Tabuada",
            description: "Aplicação responsiva para geração de tabuadas a partir de qualquer número, incluindo números negativos e decimais. Desenvolvida com JavaScript para realizar os cálculos e gerar os resultados dinamicamente.",
            stack: "HTML5, CSS3, JavaScript",
            link: "https://tabuada-mu-two.vercel.app/",
        },
        {
            src: landingpage,
            title: "Landing Page - Sanrio",
            description: "Uma landing page responsiva, em tons pastéis e estética kawaii com os personagens da marca japonesa Sanrio, incluindo Hello Kitty, My Melody, Kuromi, Pompompurin, Cinnamoroll e outros.",
            stack: "HTML5, CSS3",
            link: "https://sanrio-characters-nzvm.vercel.app/",
        },

    ];


    return (
        <div className="max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 py-10 md:py-20 overflow-x-hidden relative">

            <img
                src={Star}
                className="absolute left-2 sm:left-4 top-6 sm:top-10 w-28 sm:w-40 md:w-56 opacity-70 pointer-events-none z-0 rotate-[-8deg]"
            />

            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-20 relative z-10">
                <img src={pixelStar1} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-terminal text-white tracking-wide">Meus Projetos</h3>
            </div>

            <div className="flex flex-col gap-16 sm:gap-20 relative z-10">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>

            <img
                src={Star}
                className="absolute right-2 sm:right-4 top-6 sm:top-10 w-28 sm:w-40 md:w-56 opacity-70 pointer-events-none z-0 rotate-[-8deg]"
            />

        </div>
    );
};

const ProjectCard: React.FC<{
    project: {
        src: string;
        title: string;
        description: string;
        stack: string;
        link: string;
    };
}> = ({ project }) => {
    return (
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center group">

            <div className="w-full md:w-1/2 border-2 border-pink-400/30 bg-black overflow-hidden transition-all duration-300 group-hover:border-pink-400/70 group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.4)]">
                <img
                    src={project.src}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-4">

                <div className="flex items-center gap-3">
                    <img src={pixelStar1} className="w-5 h-5 sm:w-6 sm:h-6 object-contain flex-shrink-0" />
                    <h2 className="text-2xl sm:text-3xl font-terminal text-white tracking-wide">
                        {project.title}
                    </h2>
                </div>

                <p className="font-terminal text-lg sm:text-xl leading-relaxed text-gray-200">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.stack.split("·").flatMap(s => s.split(",")).map(tech => tech.trim()).filter(Boolean).map(tech => (
                        <span
                            key={tech}
                            className="font-terminal text-sm px-3 py-1 border border-pink-400/40 text-pink-300 bg-pink-400/5 tracking-wide"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-terminal text-lg text-white underline underline-offset-4 decoration-pink-400 hover:text-pink-400 transition-colors duration-200 w-fit"
                >
                    Ver projeto ↗
                </a>
            </div>
        </div>
    );
};

export default Projects;