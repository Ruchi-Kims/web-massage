import React from "react";
import { Link } from "react-router-dom";
import { servicesList } from "../datas/servicesData";
import { Clock } from "lucide-react";

function Services({ isHome }) {
  const displayServices = isHome ? servicesList.slice(0, 3) : servicesList;

  return (
    
    <section className={`py-16 px-5 transition-colors duration-500 ${isHome ? 'bg-gray-50' : 'bg-[#f8b6c4]'}`}>
      
      <div className="max-w-7xl mx-auto"> 
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#2d3a4b]">
          {isHome ? "Nos Services de Bien-être" : "Tous nos Services"}
        </h2>
        
        <p className="text-1xl md:text-2xl text-center mb-12 font-bold text-[#2d3a4b] opacity-80">
          {isHome ? "Découvrez notre gamme en tendance du moment." : "Découvrez notre gamme complète de services de massage et thérapie."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              
              
              <div className="relative h-56">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-pink-500 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {service.tag}
                </span>
              </div>

              {/* Contenu de la Carte */}
              <div className="p-6 flex flex-col ">
                <h3 className="text-2xl font-bold text-[#2d3a4b] mb-2">{service.title}</h3>
                <p className="text-gray-500 text-base mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Prix et Bouton */}
                <div className="mt-auto">
                  <p className="text-pink-500 font-bold text-lg mb-4">
                    À partir de {service.price}
                  </p>
                  <button className="w-full bg-[#ff85a1] hover:bg-[#ff6b8d] text-white font-bold py-3 rounded-xl transition-colors shadow-md">
                    Découvrir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOUTON : S'affiche uniquement sur la Home */}
        {isHome && (
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block bg-pink-400 text-white px-10 py-3 rounded-full font-bold hover:bg-pink-500 transition shadow-lg">
              Voir tous nos services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;