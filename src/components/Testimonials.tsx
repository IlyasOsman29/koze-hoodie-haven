
const TestimonialCard = ({ quote, author, title }: { quote: string; author: string; title: string }) => (
  <div className="bg-koze-offwhite p-6 md:p-8 rounded-xl hover:shadow-md transition-shadow">
    <svg className="text-koze-brown/30 h-8 w-8 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
    <p className="text-koze-green/90 mb-6 text-balance">
      "{quote}"
    </p>
    <div>
      <p className="font-medium text-koze-green">{author}</p>
      <p className="text-koze-muted text-sm">{title}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="text-center mb-12 animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-koze-green mb-4">
          Hvad vores kunder siger
        </h2>
        <p className="text-koze-green/90 max-w-2xl mx-auto text-balance">
          Vi er stolte over at høre hvordan vores produkter hjælper mennesker med at finde ro i hverdagen. 
          Her er nogle af de historier vi har modtaget.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll" style={{animationDelay: "0.2s"}}>
        <TestimonialCard 
          quote="Min KOZE hoodie har gjort en enorm forskel i min hverdag. Jeg tager den på når jeg mærker angsten komme snigende, og den hjælper mig med at finde ro igen. Det er som at få et kram, når man har allermest brug for det."
          author="Marie K."
          title="Studerende, 24 år"
        />
        <TestimonialCard 
          quote="Jeg har kæmpet med søvnproblemer i årevis. Min vægtede KOZE hoodie har givet mig mulighed for at slappe af om aftenen, og jeg falder nu i søvn hurtigere og sover bedre. Det er et fantastisk produkt."
          author="Thomas L."
          title="IT-konsulent, 36 år"
        />
        <TestimonialCard 
          quote="Som person med ADHD oplever jeg ofte sensorisk overstimulering. Min KOZE hoodie giver mig den ro jeg har brug for i stressende situationer. Det er det bedste køb jeg har gjort for mit mentale helbred i lang tid."
          author="Sofie R."
          title="Grafisk designer, 29 år"
        />
      </div>
    </section>
  );
};

export default Testimonials;
