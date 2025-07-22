
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
          Why weighted hoodies work
        </h2>
        <p className="text-koze-green/90 text-balance">
          Weighted products have long been used as therapeutic tools. 
          Deep Pressure Stimulation has been shown to reduce anxiety and stress through several scientific studies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll" style={{animationDelay: "0.2s"}}>
        <SciencePoint 
          title="Increases serotonin production" 
          description="Deep pressure stimulation increases the body's production of serotonin - a hormone that helps regulate mood and create a sense of well-being."
        />
        <SciencePoint 
          title="Lowers cortisol levels" 
          description="Studies show that weighted products can help lower the level of the stress hormone cortisol, which can reduce the experience of anxiety and restlessness."
        />
        <SciencePoint 
          title="Creates sense of security" 
          description="The evenly distributed weight gives a feeling of being embraced, which can have a calming effect on the nervous system."
        />
        <SciencePoint 
          title="Improved sleep quality" 
          description="Many users of weighted products report improved sleep and easier falling asleep thanks to the calming effect."
        />
        <SciencePoint 
          title="Reduces sensory stimuli" 
          description="For people who are sensitive to sensory stimuli, weighted products can help focus and reduce the experience of overstimulation."
        />
        <SciencePoint 
          title="Supports attention and focus" 
          description="Research suggests that deep pressure stimulation can improve the ability to concentrate and maintain attention over longer periods."
        />
      </div>
      
      <div className="mt-12 text-center animate-on-scroll" style={{animationDelay: "0.4s"}}>
        <p className="italic text-koze-green/80 max-w-2xl mx-auto">
          "Our weighted hoodies are based on decades of research in deep pressure stimulation. 
          We have worked with therapists to create a product that truly helps create peace in a busy everyday life."
        </p>
        <p className="mt-4 font-medium text-koze-green">
          - The KOZE founders
        </p>
      </div>
    </section>
  );
};

export default Science;
