
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-koze-offwhite/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-2xl font-bold tracking-tight text-koze-green">
            KOZE
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-koze-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-koze-green/90 hover:text-koze-green font-medium transition-colors">
              Om os
            </a>
            <a href="#products" className="text-koze-green/90 hover:text-koze-green font-medium transition-colors">
              Produkter
            </a>
            <a href="#science" className="text-koze-green/90 hover:text-koze-green font-medium transition-colors">
              Forskning
            </a>
            <a href="#testimonials" className="text-koze-green/90 hover:text-koze-green font-medium transition-colors">
              Oplevelser
            </a>
            <a href="#community" className="text-koze-green/90 hover:text-koze-green font-medium transition-colors">
              Community
            </a>
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-60 pb-4' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-3">
            <a 
              href="#about" 
              className="text-koze-green/90 hover:text-koze-green font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Om os
            </a>
            <a 
              href="#products" 
              className="text-koze-green/90 hover:text-koze-green font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Produkter
            </a>
            <a 
              href="#science" 
              className="text-koze-green/90 hover:text-koze-green font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Forskning
            </a>
            <a 
              href="#testimonials" 
              className="text-koze-green/90 hover:text-koze-green font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Oplevelser
            </a>
            <a 
              href="#community" 
              className="text-koze-green/90 hover:text-koze-green font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <Button variant="outline" className="flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span>Kurv</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
