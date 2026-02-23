import Services from "./Services";

function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-white"> 
      {/* Ici on affiche tout sans restriction */}
      <Services isHome={false} /> 
    </div>
  );
}

export default ServicesPage;