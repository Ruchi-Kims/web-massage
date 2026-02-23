import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/clamajolie.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Style dynamique : Rose si actif, Anthracite si non
  const getLinkStyle = ({ isActive }) =>
    `block py-2 px-3 transition-all duration-300 text-lg font-medium ${
      isActive ? "text-[#ff85a1] font-bold scale-105" : "text-[#2d3a4b] hover:text-[#ff85a1]"
    }`;

  return (
    <nav className="bg-[#fff7ef] shadow-sm sticky top-0 z-100">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-24">
        
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img 
            src={logo} 
            alt="ClamaJolie Logo" 
            className="h-16 md:h-20 w-auto object-contain rounded-2xl" 
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
            className="ml-4 bg-[#ff85a1] text-white px-8 py-3 rounded-full hover:bg-[#ff6b8d] hover:scale-105 transition-all duration-300 shadow-md font-bold text-center"
          >
            Réserver
          </Link>
        </div>

        {/* Bouton Mobile (Burger/Croix) */}
        <button
          className="md:hidden text-[#2d3a4b] p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menu Mobile avec fond légèrement teinté */}
      {menuOpen && (
        <div className="md:hidden bg-[#fff7ef] border-t border-pink-100 px-6 py-8 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <NavLink to="/" className={getLinkStyle} onClick={() => setMenuOpen(false)}>Accueil</NavLink>
          <NavLink to="/services" className={getLinkStyle} onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/gallery" className={getLinkStyle} onClick={() => setMenuOpen(false)}>Galerie</NavLink>
          <NavLink to="/booking" className={getLinkStyle} onClick={() => setMenuOpen(false)}>Réservation</NavLink>
          <NavLink to="/contact" className={getLinkStyle} onClick={() => setMenuOpen(false)}>Contact</NavLink>
          
          <div className="pt-6">
            <Link
              to="/booking"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-[#ff85a1] text-white py-4 rounded-2xl font-bold shadow-lg"
            >
              Réserver maintenant
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;