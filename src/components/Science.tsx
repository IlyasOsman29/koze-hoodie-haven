
const SciencePoint = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-koze-offwhite p-6 rounded-xl">
    <h3 className="font-medium text-lg mb-2 text-koze-green">{title}</h3>
    <p className="text-koze-green/90 text-sm">{description}</p>
  </div>
);

const Science = () => {
  return (
    <section id="science" className="section-padding bg-koze-beige">
      <div className="text-center mb-12 animate-on-scroll max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-koze-green mb-4">
          Hvorfor vægtede hoodies virker
        </h2>
        <p className="text-koze-green/90 text-balance">
          Vægtede produkter har længe været brugt som terapeutiske værktøjer. 
          Dyb trykstimulering (Deep Pressure Stimulation) har vist sig at reducere angst og stress gennem flere videnskabelige studier.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll" style={{animationDelay: "0.2s"}}>
        <SciencePoint 
          title="Øger produktion af serotonin" 
          description="Dyb trykstimulering øger kroppens produktion af serotonin - et hormon der hjælper med at regulere humør og skabe en følelse af velvære."
        />
        <SciencePoint 
          title="Sænker kortisol niveauer" 
          description="Studier viser at vægtede produkter kan hjælpe med at sænke niveauet af stresshormonet kortisol, hvilket kan reducere oplevelsen af angst og uro."
        />
        <SciencePoint 
          title="Skaber tryghedsfølelse" 
          description="Den jævnt fordelte vægt giver en fornemmelse af at blive omfavnet, hvilket kan have en beroligende effekt på nervesystemet."
        />
        <SciencePoint 
          title="Forbedret søvnkvalitet" 
          description="Mange brugere af vægtede produkter rapporterer om forbedret søvn og lettere ved at falde i søvn takket være den beroligende effekt."
        />
        <SciencePoint 
          title="Mindsker sansestimuli" 
          description="For mennesker der er sensitive overfor sansestimuli, kan vægtede produkter hjælpe med at fokusere og mindske oplevelsen af overstimulering."
        />
        <SciencePoint 
          title="Støtter opmærksomhed og fokus" 
          description="Forskning peger på at dyb trykstimulering kan forbedre evnen til at koncentrere sig og fastholde opmærksomhed over længere tid."
        />
      </div>
      
      <div className="mt-12 text-center animate-on-scroll" style={{animationDelay: "0.4s"}}>
        <p className="italic text-koze-green/80 max-w-2xl mx-auto">
          "Vores vægtede hoodies er baseret på årtiers forskning i dyb trykstimulering. 
          Vi har arbejdet sammen med terapeuter for at skabe et produkt, der virkelig hjælper med at skabe ro i en travl hverdag."
        </p>
        <p className="mt-4 font-medium text-koze-green">
          - KOZE grundlæggerne
        </p>
      </div>
    </section>
  );
};

export default Science;
