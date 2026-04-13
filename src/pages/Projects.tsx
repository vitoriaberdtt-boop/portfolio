import React from 'react'
import bakery from '../assets/mariabakery.jpeg'
import todolist from '../assets/todolist.jpg'
import clickcounter from '../assets/clickcounter.jpg'
import javascriptquiz from '../assets/javascriptquiz.jpg'
import calculator from '../assets/calculator.jpg'
import multiplicationtable from '../assets/multi.jpeg'
import landingpage from '../assets/sanrio.jpg'
import quiz from '../assets/quiz.jpg'

const Projects: React.FC = () => {

    const projects = [
        {
            src: bakery,
            alt: "Maria's Bakery",
            title: "Maria's Bakery",
            description: "A fictional e-commerce website for Maria's Bakery. Customers can browse and purchase cakes, add or remove items from their cart, and search for cakes by name or flavor using the search bar.",
            stack: "Full-stack web application built with JavaScript · REST API with Node.js, Nodemon, and Express.js · MySQL as the relational database",
            link: "https://marias-bakery-production.up.railway.app/",
        },
        {
            src: todolist,
            alt: "To Do List",
            title: "To-do List",
            description: "A dynamic website that allows users to add tasks, filter them by category or alphabetically, and search for tasks by name.",
            stack: "HTML 5, CSS 3, Tailwind CSS, Daisy UI, React.js and JavaScript",
            link: "https://lista-de-tarefas-ochre-phi.vercel.app/",
        },
        {
            src: clickcounter,
            alt: "Click Counter",
            title: "Click Counter",
            description: "A simple dynamic website that allows users to count clicks on a button and reset the counter. It also tells if the number of clicks is even or odd.",
            stack: "HTML 5, CSS 3, TypeScript and React",
            link: "https://click-counter-ts.vercel.app/",
        },
        {
            src: javascriptquiz,
            alt: "JavaScript Quiz",
            title: "JavaScript Quiz",
            description: "A quiz about JavaScript, with 10 questions about basic concepts of the language, such as variables, data types, functions, loops and more.",
            stack: "HTML 5, CSS 3 and JavaScript",
            link: "https://quiz-java-script-orpin.vercel.app/",
        },
        {
            src: calculator,
            alt: "Calculator",
            title: "Calculator",
            description: "A simple calculator that performs basic operations such as addition, subtraction, multiplication and division.",
            stack: "HTML 5, CSS 3 and JavaScript",
            link: "https://calculadora-vitoria.vercel.app/",
        },
        {
            src: multiplicationtable,
            alt: "Multiplication Table",
            title: "Multiplication Table",
            description: "A responsive multiplication table that allows users to generate tables for any number, including negative and decimal numbers.",
            stack: "HTML 5, CSS 3 and JavaScript",
            link: "https://tabuada-mu-two.vercel.app/",
        },
        {
            src: landingpage,
            alt: "Landing Page",
            title: "Landing Page",
            description: "A responsive site featuring characters from the Japanese brand Sanrio, including Hello Kitty, My Melody, Kuromi, Pompompurin, Cinnamoroll, and more.",
            stack: "HTML 5 and CSS 3",
            link: "https://sanrio-characters-nzvm.vercel.app/",
        },
        {
            src: quiz,
            alt: "Quiz",
            title: "Quiz",
            description: "A quiz made for beginners in programming, with questions about basic concepts of programming and web development.",
            stack: "HTML 5 and CSS 3",
            link: "https://quiz-para-programadores-o39f.vercel.app/",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-20">

            <SectionTitle label="My Projects" />

            <div className="flex flex-col gap-16">
                {projects.map((project) => (
                    <ProjectCard key={project.alt} project={project} />
                ))}
            </div>
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
const ProjectCard: React.FC<{
    project: {
        src: string;
        alt: string;
        title: string;
        description: string;
        stack: string;
        link: string;
    };
}> = ({ project }) => (
    <div className="flex flex-col md:flex-row gap-8 items-center group">

        {/* Imagem */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03] transition-all duration-300 group-hover:border-turquoise-medium/30 group-hover:shadow-[0_8px_32px_rgba(0,217,255,0.15)]">
            <img
                src={project.src}
                alt={project.alt}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">

            <div className="flex items-center gap-3">
                <div className="w-[3px] h-8 rounded-full bg-turquoise-medium opacity-70 flex-shrink-0" />
                <h2 className="text-xl md:text-2xl text-turquoise-bright font-bold">
                    {project.title}
                </h2>
            </div>

            <p className="text-lg text-text-light leading-relaxed">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {project.stack.split("·").flatMap(s => s.split(",")).map(tech => tech.trim()).filter(Boolean).map(tech => (
                    <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full border border-turquoise-medium/30 text-turquoise-medium/80 bg-turquoise-medium/5 tracking-wide"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-turquoise-bright underline underline-offset-4 hover:text-turquoise-medium transition-colors duration-200 w-fit"
            >
                View project ↗
            </a>
        </div>
    </div>
);

export default Projects;