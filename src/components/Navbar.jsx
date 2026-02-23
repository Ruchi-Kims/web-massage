import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/clamajolie.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fermer le menu automatiquement si l'utilisateur scrolle
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const getLinkStyle = ({ isActive }) =>
    `block py-3 px-3 transition-all duration-300 text-lg font-medium w-full text-center ${
      isActive ? "text-[#ff85a1] font-bold" : "text-[#2d3a4b] hover:text-[#ff85a1]"
    }`;

  return (
    <nav className="bg-[#fff7ef] shadow-sm sticky top-0 z-100">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-24">
        
        

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
          className="md:hidden text-[#2d3a4b] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* --- MENU MOBILE --- */}
      {/* Utilisation de absolute pour qu'il suive le scroll de la page */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#fff7ef] shadow-xl border-t border-pink-100 py-8 md:hidden flex flex-col items-center animate-in slide-in-from-top duration-300">
          
          {/* Logo centré */}
          <img src={logo} alt="Logo" className="h-20 w-auto mb-6 rounded-2xl" />

          {/* Liens centrés */}
          <div className="w-full flex flex-col items-center space-y-2">
            <NavLink to="/" className={getLinkStyle} onClick={() => setMenuOpen(false)}>Accueil</NavLink>
            <NavLink to="/services" className={getLinkStyle} onClick={() => setMenuOpen(false)}>Services</NavLink>
            <NavLink to="/gallery" className={getLinkStyle} onClick={() => setMenuOpen(false)}>Galerie</NavLink>
            <NavLink to="/booking" className={getLinkStyle} onClick={() => setMenuOpen(false)}>Réservation</NavLink>
            <NavLink to="/contact" className={getLinkStyle} onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </div>
          
          <div className="mt-6 w-full px-10">
            <Link
              to="/booking"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-[#ff85a1] text-white py-4 rounded-full font-bold shadow-md"
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