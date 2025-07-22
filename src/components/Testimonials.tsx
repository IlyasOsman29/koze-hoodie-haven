
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
          What our customers say
        </h2>
        <p className="text-koze-green/90 max-w-2xl mx-auto text-balance">
          We are proud to hear how our products help people find peace in everyday life. 
          Here are some of the stories we have received.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll" style={{animationDelay: "0.2s"}}>
        <TestimonialCard 
          quote="My KOZE hoodie has made a huge difference in my everyday life. I put it on when I feel anxiety creeping in, and it helps me find peace again. It's like getting a hug when you need it most."
          author="Marie K."
          title="Student, 24 years old"
        />
        <TestimonialCard 
          quote="I have struggled with sleep problems for years. My weighted KOZE hoodie has given me the opportunity to relax in the evening, and I now fall asleep faster and sleep better. It's a fantastic product."
          author="Thomas L."
          title="IT consultant, 36 years old"
        />
        <TestimonialCard 
          quote="As a person with ADHD, I often experience sensory overstimulation. My KOZE hoodie gives me the peace I need in stressful situations. It's the best purchase I've made for my mental health in a long time."
          author="Sofie R."
          title="Graphic designer, 29 years old"
        />
      </div>
    </section>
  );
};

export default Testimonials;
