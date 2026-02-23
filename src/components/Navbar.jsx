import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/clamajolie.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkStyle = ({ isActive }) =>
    `block py-3 px-3 transition-all duration-300 text-xl font-medium ${
      isActive ? "text-[#ff85a1] font-bold scale-105" : "text-[#2d3a4b] hover:text-[#ff85a1]"
    }`;

  return (
    <nav className="bg-[#fff7ef] shadow-sm sticky top-0 z-100">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-24">
        
        {/* Logo (Reste à gauche sur desktop, bascule au centre via le menu sur mobile) */}
        <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img 
            src={logo} 
            alt="ClamaJolie Logo" 
            className="h-16 w-auto object-contain rounded-2xl" 
          />
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={getLinkStyle}>Accueil</NavLink>
          <NavLink to="/services" className={getLinkStyle}>Services</NavLink>
          <NavLink to="/gallery" className={getLinkStyle}>Galerie</NavLink>
          <NavLink to="/booking" className={getLinkStyle}>Réservation</NavLink>
          <NavLink to="/contact" className={getLinkStyle}>Contact</NavLink>

          <Link
            to="/booking"
            className="ml-4 bg-[#ff85a1] text-white px-8 py-3 rounded-full hover:bg-[#ff6b8d] transition-all font-bold"
          >
            Réserver
          </Link>
        </div>

        {/* Bouton Mobile */}
        <button
          className="md:hidden text-[#2d3a4b] p-2 z-110"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* --- MENU MOBILE CENTRÉ --- */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#fff7ef] z-105 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
          
          {/* Logo centré dans le menu ouvert */}
          <div className="mb-10">
            <img src={logo} alt="Logo" className="h-24 w-auto rounded-3xl shadow-sm" />
          </div>

          {/* Liens centrés */}
          <div className="text-center space-y-6">
            <NavLink to="/" className={getLinkStyle} onClick={() => setMenuOpen(false)}>Accueil</NavLink>
            <NavLink to="/services" className={getLinkStyle} onClick={() => setMenuOpen(false)}>Services</NavLink>
            <NavLink to="/gallery" className={getLinkStyle} onClick={() => setMenuOpen(false)}>Galerie</NavLink>
            <NavLink to="/booking" className={getLinkStyle} onClick={() => setMenuOpen(false)}>Réservation</NavLink>
            <NavLink to="/contact" className={getLinkStyle} onClick={() => setMenuOpen(false)}>Contact</NavLink>
            
            <div className="pt-8">
              <Link
                to="/booking"
                onClick={() => setMenuOpen(false)}
                className="bg-[#ff85a1] text-white px-12 py-4 rounded-full font-bold shadow-lg"
              >
                Réserver maintenant
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;