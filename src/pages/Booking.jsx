import React, { useState } from "react";
import { Calendar, Clock, User, Phone, MessageSquare } from "lucide-react";
import { servicesList } from "../datas/servicesData";

function Booking() {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Réservation envoyée :", formData);
    alert("Merci ! Votre demande de réservation a été envoyée. Nous vous contacterons sous peu.");
  };

  return (
    <section className="py-16 px-5 ransition-colors bg-[#f8b6c4]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#2d3a4b]">Réserver un Soin</h2>
          <p className="text-1xl md:text-2xl text-center mb-12 font-bold text-[#2d3a4b] opacity-80">Prenez rendez-vous en quelques clics pour votre moment de détente.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#fff5f7] p-8 rounded-3xl shadow-sm border border-pink-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Sélection du Service */}
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold text-[#2d3a4b] flex items-center gap-2">
                <MessageSquare size={16} className="text-pink-400" /> Choisir un service
              </label>
              <select 
                required
                className="p-3 rounded-xl border border-gray-400 ring-1 ring-gray-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all"
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option value="">Sélectionnez un soin...</option>
                {servicesList.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold text-[#2d3a4b] flex items-center gap-2">
                <Calendar size={16} className="text-pink-400" /> Date souhaitée
              </label>
              <input 
                type="date" 
                required
                className="p-3 rounded-xl border border-gray-400  ring-1 ring-gray-200 focus:ring-2 focus:ring-pink-400 outline-none "
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>

            {/* Nom complet */}
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold text-[#2d3a4b] flex items-center gap-2">
                <User size={16} className="text-pink-400" /> Votre Nom
              </label>
              <input 
                type="text" 
                placeholder="Ex: Sarah Martin"
                required
                className="p-3 rounded-xl border border-gray-400 ring-1 ring-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Téléphone */}
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold text-[#2d3a4b] flex items-center gap-2">
                <Phone size={16} className="text-pink-400" /> Téléphone
              </label>
              <input 
                type="tel" 
                placeholder="06..."
                required
                className="p-3 rounded-xl border border-gray-400 ring-1 ring-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full mt-8 bg-[#ff85a1] text-white font-bold py-4 rounded-2xl hover:bg-[#ff6b8d] transition-all shadow-lg hover:shadow-pink-200"
          >
            Confirmer la demande de rendez-vous
          </button>
        </form>
      </div>
    </section>
  );
}

export default Booking;