import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        {/* Navegação com menu hambúrguer */}
        <div className="navbar bg-gradient-to-r from-purple-accent to-turquoise-dark shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          {/* Mobile - Menu Hambúrguer */}
          <div className="navbar-start">
            <div className="dropdown">

             <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-7 w-7" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <rect x="3" y="5" width="18" height="2.5" rx="1.25" />
                <rect x="3" y="10.75" width="18" height="2.5" rx="1.25" />
                <rect x="3" y="16.5" width="18" height="2.5" rx="1.25" />
              </svg>
            </label>

              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-medium rounded-box w-52">
                <li><Link to="/" className="text-text-accent hover:text-turquoise-bright">Home</Link></li>
                <li><Link to="/projects" className="text-text-accent hover:text-turquoise-bright">Projects</Link></li>
                <li><Link to="/contact" className="text-text-accent hover:text-turquoise-bright">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Título centralizado */}
          <div className="navbar-center p-8 text-center">
            <h1 className="text-xl md:text-3xl font-bold text-text-light m-0">
              🤍 Vitória Berdtt 🤍
            </h1>
          </div>

          {/* Desktop - Links normais */}
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-12 gap-10">
              <li>
                <Link to="/" className="nav-link-effect text-text-accent font-semibold text-lg hover:text-turquoise-bright hover:bg-[rgba(0,217,255,0.1)]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="nav-link-effect text-text-accent font-semibold text-lg hover:text-turquoise-bright hover:bg-[rgba(0,217,255,0.1)]">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link-effect text-text-accent font-semibold text-lg hover:text-turquoise-bright hover:bg-[rgba(0,217,255,0.1)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Rotas */}
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>

      {/* Footer */}
      <footer className="bg-[#4d2662] p-8 text-center text-[#d4c4b0] mt-auto">
        <p>&copy; Vitória Berdtt | 2026</p>
      </footer>
    </div>
  );
}

export default App

