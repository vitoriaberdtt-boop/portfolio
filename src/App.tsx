import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <BrowserRouter>
        
        {/* Navbar */}
        <nav className="bg-[#311b52] px-6 md:px-16 py-4 shadow-lg z-50 flex justify-between items-center relative">
          
          {/* Logo / Nome */}
        <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-title font-bold text-white m-0 tracking-wide">
            Vitória Aguiar Berdtt
        </h1>

          {/* Menu Desktop */}
          <ul className="hidden lg:flex flex-row gap-8 font-terminal text-2xl text-white tracking-widest m-0 p-0 list-none">
            <li><Link to="/" className="hover:text-pink-400">home</Link></li>
            <li><Link to="/projects" className="hover:text-pink-400">projetos</Link></li>
            <li><Link to="/contact" className="hover:text-pink-400">contato</Link></li>
          </ul>

          {/* Botão Hambúrguer Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-white focus:outline-none p-2"
            aria-label="Abrir menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Menu Dropdown Mobile Controlado por Estado (Garante que nunca quebre o layout) */}
          {isOpen && (
            <div className="absolute top-full right-6 mt-2 w-48 bg-[#311b52] border border-purple-500/30 rounded-lg shadow-2xl p-4 lg:hidden z-50">
              <ul className="flex flex-col gap-3 font-terminal text-xl text-white m-0 p-0 list-none">
                <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-pink-400 block">home</Link></li>
                <li><Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-pink-400 block">projetos</Link></li>
                <li><Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-pink-400 block">contato</Link></li>
              </ul>
            </div>
          )}

        </nav>

        {/* Rotas */}
        <div className="flex-grow">
          <Routes> 
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
      </BrowserRouter>

      {/* Footer */}
      <footer className="bg-[#311b52] p-6 text-center text-white mt-auto font-terminal text-xl tracking-widest">
        <p>&copy; Vitória Berdtt </p>
      </footer>
    </div>
  );
}

export default App

