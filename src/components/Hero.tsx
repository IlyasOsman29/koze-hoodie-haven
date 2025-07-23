
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-koze-green leading-tight mb-6 text-balance">
            Find ro i en <span className="text-koze-brown">urolig verden</span>
          </h1>
          <p className="text-lg md:text-xl text-koze-green/90 mb-8 max-w-lg text-balance">
            KOZE laver vægtede hoodies designet til at hjælpe mennesker med angst og uro med at finde tryghed i hverdagen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-koze-green hover:bg-koze-green/90 text-white font-medium px-8 py-6"
              size="lg"
            >
              Køb nu
            </Button>
            <Button 
              variant="outline" 
              className="border-koze-green text-koze-green hover:bg-koze-green/10 font-medium px-8 py-6"
              size="lg"
            >
              Læs mere
            </Button>
          </div>
        </div>
        
        <div className="animate-on-scroll" style={{animationDelay: "0.2s"}}>
          <div className="aspect-square bg-koze-beige rounded-2xl flex items-center justify-center">
            {/* We'll replace this with an actual product image */}
            <div className="text-koze-muted text-center px-8">
              <p className="text-lg font-medium mb-2">Produktbillede</p>
              <p className="text-sm">En rolig KOZE hoodie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
