import { Link } from "react-router-dom";
import Services from "./Services";
import Gallery from "./Gallery";
import Contact from "./Contact";

function Home() {
  return (
    <> {/* <--- Ajout du fragment pour envelopper les deux composants */}
      
      {/* SECTION HERO */}
      <section 
        className="relative min-h-[60vh] sm:min-h-[80vh] md:min-h-[84vh] w-full flex items-center justify-center text-white overflow-hidden bg-gray-900 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1920')` }}
      >
        <div className="relative max-w-4xl px-5 py-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold mb-6 leading-tight drop-shadow-2xl">
            Massage relaxant <br /> & bien-être total
          </h1>

          <p className="mb-8 max-w-xl mx-auto text-lg md:text-xl opacity-90 drop-shadow-md">
            Offrez-vous un moment de détente dans un cadre apaisant.
            Nos massages professionnels vous aident à réduire le stress,
            soulager les tensions et retrouver votre énergie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/booking" 
              className="bg-[#ff85a1] text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg text-center font-extrabold"
            >
              Réserver maintenant
            </Link>
            <Link 
              to="/services" 
              className="border border-white/50 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-center font-extrabold backdrop-blur-sm"
            >
              Voir nos services
            </Link>
          </div>
        </div>
      </section>

      
      <Services isHome={true} />
      <Gallery isHome={true} />
      
      <section className="bg-pink-400 py-12 text-center text-white">
  <h2 className="text-3xl font-bold mb-4">Prêt pour votre moment de détente ?</h2>
  <Link to="/booking" className="bg-white text-pink-400 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
    Réserver mon massage
  </Link>
  </section>
  <Contact showMap={true} />


    </> 
  );
}

export default Home;