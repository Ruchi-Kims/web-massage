import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact({ showMap }) { // On ajoute la prop showMap
  return (
    <section className="py-16 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3a4b] mb-4">
            {showMap ? "Où nous trouver ?" : "Contactez-nous"}
          </h2>
        </div>

        {/* LOGIQUE : 
           - Si showMap est TRUE -> On affiche 2 colonnes (Infos/Form + Maps)
           - Si showMap est FALSE -> On affiche 1 seule colonne centrée (Infos/Form)
        */}
        <div className={`grid gap-12 ${showMap ? "grid-cols-1 lg:grid-cols-2" : "max-w-2xl mx-auto"}`}>
          
          {/* COLONNE INFOS & FORMULAIRE */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-xl text-pink-500"><Phone size={20}/></div>
                <div>
                  <p className="text-xs text-gray-400">Téléphone</p>
                  <p className="text-sm font-bold text-[#2d3a4b]">+212 6 66 20 10 30</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-xl text-pink-500"><MapPin size={20}/></div>
                <div>
                  <p className="text-xs text-gray-400">Adresse</p>
                  <p className="text-sm font-bold text-[#2d3a4b]">Quartier des Hopitaux, Casablanca, Maroc</p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <input type="text" placeholder="Votre nom" className="w-full p-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-200 outline-none" />
              <input type="email" placeholder="Votre Email" className="w-full p-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-200 outline-none" />
              <input type="email" placeholder="Votre Email" className="w-full p-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-200 outline-none" />
              <textarea placeholder="Votre message..." rows="4" className="w-full p-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-200 outline-none"></textarea>
              <button className="w-full bg-[#2d3a4b] text-white font-bold py-4 rounded-2xl hover:bg-black transition-all">
                Envoyer le message
              </button>
            </form>
          </div>

          {/* COLONNE MAPS : S'affiche UNIQUEMENT si showMap est vrai */}
          {showMap && (
            <div className="h-450px rounded-3xl overflow-hidden shadow-inner border-4 border-gray-50">
              <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13298.675628173494!2d-7.625!3d33.575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2988851bebd3%3A0x5475eeb445fa1dc0!2sQuartier%20des%20H%C3%B4pitaux%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma" 
      width="100%" 
      height="100%" 
      style={{ border: 0 }} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Plan du Quartier des Hôpitaux, Casablanca"
    ></iframe>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default Contact;