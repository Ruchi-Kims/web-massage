import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#2d3a4b] text-white pt-16 pb-8 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* COLONNE 1 : LOGO & DESCRIPTION */}
        <div className="space-y-6">
          <h2 className="text-3xl font-black text-[#ff85a1]">ClamaJolie</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Votre havre de paix au cœur de Casablanca. Nous vous accompagnons pour des moments 
            de détente absolue et de bien-être profond.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-[#ff85a1] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-[#4415ec] transition-colors">
              <Facebook size={20} />
            </a>
           
          </div>
        </div>

        {/* COLONNE 2 : LIENS RAPIDES */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold border-b border-gray-700 pb-2">Navigation</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-[#ff85a1] transition-colors">Accueil</Link></li>
            <li><Link to="/services" className="hover:text-[#ff85a1] transition-colors">Nos Services</Link></li>
            <li><Link to="/gallery" className="hover:text-[#ff85a1] transition-colors">Galerie Photos</Link></li>
            <li><Link to="/booking" className="hover:text-[#ff85a1] transition-colors">Réserver un soin</Link></li>
            <li><Link to="/contact" className="hover:text-[#ff85a1] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* COLONNE 3 : HORAIRES */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold border-b border-gray-700 pb-2">Horaires d'ouverture</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex justify-between"><span>Lundi - Samedi</span> <span>09:00 - 20:00</span></li>
            <li className="flex justify-between"><span>Dimanche</span> <span className="text-pink-400">Fermé</span></li>
            <li className="pt-4 italic text-xs text-pink-300"><Link to="/booking" className="hover:text-[#ff85a1] transition-colors">Uniquement sur rendez-vous</Link></li>
          </ul>
        </div>

        {/* COLONNE 4 : CONTACT RAPIDE */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold border-b border-gray-700 pb-2">Infos Contact</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#ff85a1] shrink-0" />
              <span>Quartier des Hôpitaux,<br />Casablanca, Maroc</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#ff85a1] shrink-0" />
              <span>+212 6 66 20 10 30</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#ff85a1] shrink-0" />
              <span>contact@clamajolie.ma</span>
            </li>
          </ul>
        </div>

      </div>

      {/* BARRE DE COPYRIGHT */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        <p className="flex items-center justify-center gap-1">
          © {new Date().getFullYear()} ClamaJolie. Fait avec <Heart size={12} className="text-pink-500 fill-pink-500" /> pour votre bien-être.
        </p>
      </div>
    </footer>
  );
}

export default Footer;