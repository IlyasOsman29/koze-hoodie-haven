
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-koze-beige">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-on-scroll order-2 lg:order-1">
          <div className="aspect-[4/3] bg-koze-light rounded-2xl flex items-center justify-center">
            {/* We'll replace this with actual founder image */}
            <div className="text-koze-muted text-center px-8">
              <p className="text-lg font-medium mb-2">Founders</p>
              <p className="text-sm">The two founders of KOZE</p>
            </div>
          </div>
        </div>
        
        <div className="animate-on-scroll order-1 lg:order-2" style={{animationDelay: "0.2s"}}>
          <h2 className="text-3xl md:text-4xl font-bold text-koze-green mb-6 text-balance">
            The story behind KOZE
          </h2>
          <div className="space-y-4 text-koze-green/90">
            <p>
              KOZE was started by two former colleagues from the tech industry, after we experienced how a colleague was fired due to anxiety that prevented him from being able to handle the job in a stressed sales environment.
            </p>
            <p>
              It got us thinking – and we decided to create a product and brand that offers both physical comfort (through weighted hoodies) and emotional support (through a community and openness about mental health).
            </p>
            <p>
              Our mission is to help people find peace in a hectic everyday life. We believe that small things can make a big difference to our mental well-being.
            </p>
          </div>
          <Button 
            className="mt-6 bg-koze-green hover:bg-koze-green/90 text-white font-medium"
          >
            Read more about our values
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
