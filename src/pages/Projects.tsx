import React from 'react'
import todolist from '../assets/todolist.jpg'
import clickcounter from '../assets/clickcounter.jpg'
import javascriptquiz from '../assets/javascriptquiz.jpg'
import calculator from '../assets/calculator.jpg'
import multiplicationtable from '../assets/multiplicationtable.jpg'
import landingpage from '../assets/landingpage.jpg'
import quiz from '../assets/quiz.jpg'

const Projects: React.FC = () => {
    return (
         <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-16">
            {/* My projects section */}
            <div className="text-center">
                <h3 className="text-2xl md:text-3xl my-10 px-4 py-6 rounded-xl border-[3px] border-turquoise-medium bg-gradient-to-r from-[rgba(4,65,76,0.05)] to-[rgba(92,61,122,0.1)] shadow-[0_4px_15px_rgba(0,217,255,0.2)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(0,217,255,0.3)]">
                    My projects
                </h3>
            </div>
            
            {/* Projetos - Imagem à esquerda, texto à direita */}
            <div className="flex flex-col gap-12">
                
                {/* To Do List */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img 
                        src={todolist} 
                        alt="To Do List" 
                        className="w-full md:w-1/2 h-auto object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-105 hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)]"
                    />
                    <div className="w-full md:w-1/2">
                        <h2 className="text-xl md:text-2xl text-turquoise-bright mb-4">
                            <strong>To-do List:</strong> A dynamic website that allows users to add tasks, filter them by category or alphabetically, and search for tasks by name.
                        </h2>
                        <p className="text-lg text-text-accent">
                            HTML 5, CSS 3, JavaScript and React
                        </p>
                        <p className="text-lg text-text-accent">
                            Link: <a href="https://lista-de-tarefas-ochre-phi.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-turquoise-bright underline hover:text-turquoise-medium">https://lista-de-tarefas-ochre-phi.vercel.app/</a>
                        </p>
                    </div>
                </div>

                {/* Click Counter */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img 
                        src={clickcounter} 
                        alt="Click Counter" 
                        className="w-full md:w-1/2 h-auto object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-105 hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)]"
                    />
                    <div className="w-full md:w-1/2">
                        <h2 className="text-xl md:text-2xl text-turquoise-bright mb-4">
                            <strong>Click Counter:</strong> A simple dynamic website that allows users to count clicks on a button and reset the counter. It also tells if the number of clicks is even or odd.
                        </h2>
                        <p className="text-lg text-text-accent">
                            HTML 5, CSS 3, TypeScript and React.
                        </p>
                        <p className="text-lg text-text-accent">
                            Link: <a href="https://click-counter-ts.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-turquoise-bright underline hover:text-turquoise-medium">https://click-counter-ts.vercel.app/</a>
                        </p>
                    </div>
                </div>

                {/* JavaScript Quiz */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img 
                        src={javascriptquiz} 
                        alt="JavaScript Quiz" 
                        className="w-full md:w-1/2 h-auto object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-105 hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)]"
                    />
                    <div className="w-full md:w-1/2">
                        <h2 className="text-xl md:text-2xl text-turquoise-bright mb-4">
                            <strong>JavaScript Quiz:</strong> A quiz about JavaScript, with 10 questions about basic concepts of the language, such as variables, data types, functions, loops and more.
                        </h2>
                        <p className="text-lg text-text-accent">
                            HTML 5, CSS 3 and JavaScript.
                        </p>
                        <p className="text-lg text-text-accent">
                            Link: <a href="https://quiz-java-script-orpin.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-turquoise-bright underline hover:text-turquoise-medium">https://quiz-java-script-orpin.vercel.app/</a>
                        </p>
                    </div>
                </div>

                {/* Calculator */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img 
                        src={calculator} 
                        alt="Calculator" 
                        className="w-full md:w-1/2 h-auto object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-105 hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)]"
                    />
                    <div className="w-full md:w-1/2">
                        <h2 className="text-xl md:text-2xl text-turquoise-bright mb-4">
                            <strong>Calculator:</strong> A simple calculator that performs basic operations such as addition, subtraction, multiplication and division. 
                        </h2>
                        <p className="text-lg text-text-accent">
                            HTML 5, CSS 3 and JavaScript.
                        </p>
                        <p className="text-lg text-text-accent">
                            Link: <a href="https://calculadora-vitoria.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-turquoise-bright underline hover:text-turquoise-medium">https://calculadora-vitoria.vercel.app/</a>
                        </p>
                    </div>
                </div>

                {/* Multiplication Table */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img 
                        src={multiplicationtable} 
                        alt="Multiplication Table" 
                        className="w-full md:w-1/2 h-auto object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-105 hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)]"
                    />
                    <div className="w-full md:w-1/2">
                        <h2 className="text-xl md:text-2xl text-turquoise-bright mb-4">
                            <strong>Multiplication Table:</strong> A responsive multiplication table that allows users to generate tables for any number, including negative and decimals numbers.
                        </h2>
                        <p className="text-lg text-text-accent">
                            HTML 5, CSS 3 and JavaScript.
                        </p>
                        <p className="text-lg text-text-accent">
                            Link: <a href="https://tabuada-mu-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-turquoise-bright underline hover:text-turquoise-medium">https://tabuada-mu-two.vercel.app/</a>
                        </p>
                    </div>
                </div>

                {/* Landing Page */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img 
                        src={landingpage} 
                        alt="Landing Page" 
                        className="w-full md:w-1/2 h-auto object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-105 hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)]"
                    />
                    <div className="w-full md:w-1/2">
                        <h2 className="text-xl md:text-2xl text-turquoise-bright mb-4">
                            <strong>Landing Page:</strong> A responsive site featuring characters from the Japanese brand Sanrio, including Hello Kitty, My Melody, Kuromi, Pompompurin, Cinnamoroll, and more.
                        </h2>
                        <p className="text-lg text-text-accent">
                            HTML 5 and CSS 3.
                        </p>
                        <p className="text-lg text-text-accent">
                            Link: <a href="https://sanrio-characters-nzvm.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-turquoise-bright underline hover:text-turquoise-medium">https://sanrio-characters-nzvm.vercel.app/</a>
                        </p>
                    </div>
                </div>

                {/* Quiz */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img 
                        src={quiz} 
                        alt="Quiz" 
                        className="w-full md:w-1/2 h-auto object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-105 hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)]"
                    />
                    <div className="w-full md:w-1/2">
                        <h2 className="text-xl md:text-2xl text-turquoise-bright mb-4">
                            <strong>Quiz:</strong> A quiz made for beginners in programming, with questions about basic concepts of programming and web development.
                        </h2>
                        <p className="text-lg text-text-accent">
                            HTML 5 and CSS 3.
                        </p>
                        <p className="text-lg text-text-accent">
                            Link: <a href="https://quiz-para-programadores-o39f.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-turquoise-bright underline hover:text-turquoise-medium">https://quiz-para-programadores-o39f.vercel.app/</a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;