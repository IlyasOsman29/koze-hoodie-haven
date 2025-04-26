
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-koze-beige">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-on-scroll order-2 lg:order-1">
          <div className="aspect-[4/3] bg-koze-light rounded-2xl flex items-center justify-center">
            {/* We'll replace this with actual founder image */}
            <div className="text-koze-muted text-center px-8">
              <p className="text-lg font-medium mb-2">Grundlæggere</p>
              <p className="text-sm">De to grundlæggere af KOZE</p>
            </div>
          </div>
        </div>
        
        <div className="animate-on-scroll order-1 lg:order-2" style={{animationDelay: "0.2s"}}>
          <h2 className="text-3xl md:text-4xl font-bold text-koze-green mb-6 text-balance">
            Historien bag KOZE
          </h2>
          <div className="space-y-4 text-koze-green/90">
            <p>
              KOZE er startet af to tidligere kollegaer fra tech-branchen, efter vi oplevede hvordan en kollega blev fyret pga. angst, der forhindrede ham i at kunne klare jobbet i et stresset salgsmiljø.
            </p>
            <p>
              Det satte tankerne i gang – og vi besluttede at skabe et produkt og et brand, der både tilbyder fysisk komfort (gennem vægtede hoodies) og emotionel støtte (gennem et community og åbenhed om mental sundhed).
            </p>
            <p>
              Vores mission er at hjælpe mennesker med at finde ro i en hektisk hverdag. Vi tror på, at små ting kan gøre en stor forskel for vores mentale velvære.
            </p>
          </div>
          <Button 
            className="mt-6 bg-koze-green hover:bg-koze-green/90 text-white font-medium"
          >
            Læs mere om vores værdier
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
