
import { Button } from "@/components/ui/button";

const CommunityCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="bg-koze-offwhite p-6 rounded-xl hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-koze-beige rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="font-medium text-lg mb-2 text-koze-green">{title}</h3>
    <p className="text-koze-green/90 text-sm">{description}</p>
  </div>
);

const Community = () => {
  return (
    <section id="community" className="section-padding bg-koze-beige">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-koze-green mb-4 text-balance">
            Et community for mental sundhed
          </h2>
          <p className="text-koze-green/90 mb-6">
            KOZE handler om mere end bare et produkt. Vi ønsker at skabe et fællesskab, hvor vi kan tale åbent om mental sundhed og støtte hinanden.
          </p>
          <div className="space-y-6">
            <CommunityCard 
              icon={<span className="text-koze-green text-xl">💬</span>}
              title="KOZE Talks" 
              description="Månedlige online samtaler om mental sundhed med eksperter og fællesskabet."
            />
            <CommunityCard 
              icon={<span className="text-koze-green text-xl">📚</span>}
              title="Vidensbank" 
              description="Artikler, guides og ressourcer om angst, stress og teknikker til at håndtere det."
            />
            <CommunityCard 
              icon={<span className="text-koze-green text-xl">🤝</span>}
              title="Støttegrupper" 
              description="Lokale meet-ups hvor brugere kan mødes og dele erfaringer i trygge rammer."
            />
          </div>
          <Button 
            className="mt-8 bg-koze-green hover:bg-koze-green/90 text-white font-medium"
          >
            Bliv en del af fællesskabet
          </Button>
        </div>
        
        <div className="animate-on-scroll order-first lg:order-last" style={{animationDelay: "0.2s"}}>
          <div className="aspect-square bg-koze-light rounded-2xl flex items-center justify-center">
            {/* We'll replace this with actual community image */}
            <div className="text-koze-muted text-center px-8">
              <p className="text-lg font-medium mb-2">Community billede</p>
              <p className="text-sm">KOZE fællesskabet</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center animate-on-scroll" style={{animationDelay: "0.4s"}}>
        <h3 className="text-2xl font-bold text-koze-green mb-4">
          Vores vision
        </h3>
        <p className="text-koze-green/90 max-w-3xl mx-auto text-balance">
          Vi tror på en verden, hvor det er lige så naturligt at tale om mental sundhed som om fysisk sundhed. 
          Hvor ingen behøver at skjule deres angst eller stress, og hvor vi alle har værktøjer til at finde ro i en travl hverdag. 
          KOZE er vores bidrag til denne vision.
        </p>
      </div>
    </section>
  );
};

export default Community;
