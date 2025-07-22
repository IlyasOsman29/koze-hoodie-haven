
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
            A community for mental health
          </h2>
          <p className="text-koze-green/90 mb-6">
            KOZE is about more than just a product. We want to create a community where we can talk openly about mental health and support each other.
          </p>
          <div className="space-y-6">
            <CommunityCard 
              icon={<span className="text-koze-green text-xl">💬</span>}
              title="KOZE Talks" 
              description="Monthly online conversations about mental health with experts and the community."
            />
            <CommunityCard 
              icon={<span className="text-koze-green text-xl">📚</span>}
              title="Knowledge Base" 
              description="Articles, guides and resources about anxiety, stress and techniques to handle it."
            />
            <CommunityCard 
              icon={<span className="text-koze-green text-xl">🤝</span>}
              title="Support Groups" 
              description="Local meet-ups where users can meet and share experiences in safe spaces."
            />
          </div>
          <Button 
            className="mt-8 bg-koze-green hover:bg-koze-green/90 text-white font-medium"
          >
            Join the community
          </Button>
        </div>
        
        <div className="animate-on-scroll order-first lg:order-last" style={{animationDelay: "0.2s"}}>
          <div className="aspect-square bg-koze-light rounded-2xl flex items-center justify-center">
            {/* We'll replace this with actual community image */}
            <div className="text-koze-muted text-center px-8">
              <p className="text-lg font-medium mb-2">Community image</p>
              <p className="text-sm">The KOZE community</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center animate-on-scroll" style={{animationDelay: "0.4s"}}>
        <h3 className="text-2xl font-bold text-koze-green mb-4">
          Our vision
        </h3>
        <p className="text-koze-green/90 max-w-3xl mx-auto text-balance">
          We believe in a world where it's as natural to talk about mental health as it is about physical health. 
          Where no one needs to hide their anxiety or stress, and where we all have tools to find peace in a busy everyday life. 
          KOZE is our contribution to this vision.
        </p>
      </div>
    </section>
  );
};

export default Community;
