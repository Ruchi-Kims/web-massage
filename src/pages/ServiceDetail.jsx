import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesList } from "../datas/servicesData";
import { Clock, CheckCircle, ArrowLeft } from "lucide-react";

function ServiceDetail() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const service = servicesList.find((s) => s.id === id);

  if (!service) return <div className="text-center py-20">Service introuvable.</div>;

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Header Image */}
      <div className="h-[40vh] relative">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">{service.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 mt-12">
        <Link to="/services" className="flex items-center gap-2 text-pink-500 mb-8 hover:underline">
          <ArrowLeft size={20} /> Retour aux services
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Texte principal */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-[#2d3a4b]">Pourquoi choisir ce massage ?</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{service.fullDescription}</p>
            
            <h3 className="text-2xl font-bold text-[#2d3a4b] pt-4">Les bienfaits</h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={20} className="text-pink-400" /> {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar Info */}
          <div className="bg-[#fff5f7] p-8 rounded-3xl h-fit sticky top-28">
            <div className="flex items-center gap-3 mb-4 text-[#2d3a4b]">
              <Clock className="text-pink-500" />
              <span className="font-bold text-xl">{service.duration}</span>
            </div>
            <div className="text-2xl font-black text-pink-500 mb-6">{service.price}</div>
            <Link 
              to="/booking" 
              className="block w-full text-center bg-[#ff85a1] text-white py-4 rounded-xl font-bold hover:bg-black transition-all"
            >
              Réserver ce soin
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ServiceDetail;