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

const Home: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-16">
            
            {/* About Me Section */}
            <div className="text-center">
                <h3 className="text-2xl md:text-3xl my-10 px-4 py-6 rounded-xl border-[3px] border-turquoise-medium bg-gradient-to-r from-[rgba(4,65,76,0.05)] to-[rgba(92,61,122,0.1)] shadow-[0_4px_15px_rgba(0,217,255,0.2)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(0,217,255,0.3)]">
                    About me
                </h3>
            </div>
            
           <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
                {/* Texto à esquerda */}
                <h4 className="font-normal text-lg md:text-xl leading-relaxed text-text-light flex-1">
                    Hi, my name is Vitória, and I am a university student in Systems Analysis and Development at IFSul.
                    I have solid front-end skills and have built several responsive and dynamic projects, which I share on my GitHub and LinkedIn.
                    I have a strong interest in the technology field and am always seeking to learn more and keep my skills up to date.
                    I am currently seeking an IT internship.
                </h4>
            </div>

            {/* Tech Stack Section */}
            <div className="text-center">
                <h3 className="text-2xl md:text-3xl my-10 px-4 py-6 rounded-xl border-[3px] border-turquoise-medium bg-gradient-to-r from-[rgba(4,65,76,0.05)] to-[rgba(92,61,122,0.1)] shadow-[0_4px_15px_rgba(0,217,255,0.2)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(0,217,255,0.3)]">
                    Tech stack
                </h3> 
            </div>

            <div className="flex flex-wrap gap-6 items-center justify-center mb-8">
                <img 
                    src={html} 
                    alt="HTML" 
                   className="w-22 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-110 hover:rotate-[3deg] hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)] hover:bg-transparent"
                />
                <img 
                    src={css} 
                    alt="CSS" 
                   className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-110 hover:rotate-[3deg] hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)] hover:bg-transparent"
                />
                <img 
                    src={js} 
                    alt="JavaScript" 
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-110 hover:rotate-[3deg] hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)] hover:bg-transparent"
                />
                <img 
                    src={ts} 
                    alt="TypeScript" 
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-110 hover:rotate-[3deg] hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)] hover:bg-transparent"
                />
                <img 
                    src={react} 
                    alt="React" 
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-110 hover:rotate-[3deg] hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)] hover:bg-transparent"
                />
            </div>

            {/* Tools Section */}
            <div className="text-center">
                <h3 className="text-2xl md:text-3xl my-10 px-4 py-6 rounded-xl border-[3px] border-turquoise-medium bg-gradient-to-r from-[rgba(4,65,76,0.05)] to-[rgba(92,61,122,0.1)] shadow-[0_4px_15px_rgba(0,217,255,0.2)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(0,217,255,0.3)]">
                    Tools
                </h3> 
            </div>
            
            <div className="flex flex-wrap gap-6 items-center justify-center mb-8">
                <img 
                    src={vercel} 
                    alt="Vercel" 
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-110 hover:rotate-[3deg] hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)] hover:bg-transparent"
                />
                <img 
                    src={netlify} 
                    alt="netlify" 
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-110 hover:rotate-[3deg] hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)] hover:bg-transparent"
                />
                <img 
                    src={vite} 
                    alt="Vite" 
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-110 hover:rotate-[3deg] hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)] hover:bg-transparent"
                />
                <img 
                    src={vscode} 
                    alt="VS Code" 
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-110 hover:rotate-[3deg] hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)] hover:bg-transparent"
                />
                <img 
                    src={figma} 
                    alt="Figma" 
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-110 hover:rotate-[3deg] hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)] hover:bg-transparent"
                />
                <img 
                    src={git} 
                    alt="Git" 
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-110 hover:rotate-[3deg] hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)] hover:bg-transparent"
                />
                <img 
                    src={github} 
                    alt="GitHub" 
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain cursor-pointer transition-all duration-300 rounded-lg p-2 bg-white/[0.03] hover:scale-110 hover:rotate-[3deg] hover:drop-shadow-[0_8px_20px_rgba(0,217,255,0.4)] hover:bg-transparent"
                />
            </div>
        </div>
    );
};

export default Home;