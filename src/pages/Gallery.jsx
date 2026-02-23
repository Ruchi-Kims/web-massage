import React, { useState } from "react";
import { Link } from "react-router-dom";
import { galleryList } from "../datas/galleryData";
import { X } from "lucide-react"; // Pour le bouton fermer

function Gallery({ isHome }) {
  // État pour l'image sélectionnée (Lightbox)
  const [selectedImg, setSelectedImg] = useState(null);

  const displayImages = isHome ? galleryList.slice(0, 3) : galleryList;

  return (
    <section className={`py-16 px-5 ${isHome ? 'bg-white' : 'bg-[#f8b6c4]'}`}>
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#2d3a4b]">
          {isHome ? "Aperçu de notre Galerie" : "Notre Galerie Photos"}
        </h2>
        <p className="text-1xl md:text-2xl text-center mb-12 font-bold text-[#2d3a4b] opacity-80">
          {isHome ? "Un aperçu de notre havre de paix." : "Découvrez notre ambiance relaxante."}
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayImages.map((image) => (
            <div 
              key={image.id} 
              onClick={() => setSelectedImg(image.url)} // Ouvre la lightbox au clic
              className="group relative h-72 overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {isHome && (
          <div className="text-center mt-12">
            <Link 
              to="/gallery" 
              className="inline-block bg-pink-400 text-white px-10 py-3 rounded-full font-bold hover:bg-pink-500 transition shadow-lg"
            >
              Voir toute la galerie
            </Link>
          </div>
        )}
      </div>

      {/* --- LOGIQUE DE LA LIGHTBOX (MODAL) --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)} // Ferme en cliquant à côté
        >
          {/* Bouton Fermer */}
          <button 
            className="absolute top-6 right-6 text-white hover:text-pink-400 transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <X size={40} />
          </button>

          {/* L'image en grand */}
          <img 
            src={selectedImg} 
            alt="Vue agrandie" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-in zoom-in duration-300"
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;