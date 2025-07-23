
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';

type Size = 'S' | 'M' | 'L' | 'XL';
type Color = 'Mørkeblå' | 'Mørkegrøn' | 'Brun';

const Products = () => {
  const [selectedSize, setSelectedSize] = useState<Size>('M');
  const [selectedColor, setSelectedColor] = useState<Color>('Mørkeblå');
  
  return (
    <section id="products" className="section-padding">
      <div className="text-center mb-16 animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold text-koze-green mb-4">
          Vores Hoodies
        </h2>
        <p className="text-koze-green/90 max-w-2xl mx-auto text-balance">
          Håndlavede i Danmark med omhu og kvalitetsmaterialer. 
          Vores vægtede hoodies er designet til at give dig en følelse af ro og komfort.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll">
          <div className="grid grid-cols-1 gap-4">
            <div className="aspect-square bg-koze-beige rounded-2xl flex items-center justify-center">
              {/* Main product image */}
              <div className="text-koze-muted text-center px-8">
                <p className="text-lg font-medium mb-2">Produktbillede</p>
                <p className="text-sm">{selectedColor} KOZE hoodie</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {/* Thumbnail images */}
              <div className="aspect-square bg-koze-light rounded-lg flex items-center justify-center">
                <span className="text-koze-muted text-sm">Billede 1</span>
              </div>
              <div className="aspect-square bg-koze-light rounded-lg flex items-center justify-center">
                <span className="text-koze-muted text-sm">Billede 2</span>
              </div>
              <div className="aspect-square bg-koze-light rounded-lg flex items-center justify-center">
                <span className="text-koze-muted text-sm">Billede 3</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="animate-on-scroll" style={{animationDelay: "0.3s"}}>
          <h3 className="text-2xl md:text-3xl font-bold text-koze-green mb-2">
            KOZE Weighted Hoodie
          </h3>
          <p className="text-xl text-koze-brown font-semibold mb-6">
            DKK 899,-
          </p>
          
          <div className="space-y-6 mb-8">
            <div>
              <h4 className="font-medium mb-2 text-koze-green">Beskrivelse</h4>
              <p className="text-koze-green/90">
                Vores vægtede hoodie er designet til at give en omfavnende, beroligende følelse. 
                Med strategisk placerede vægte, skaber den en følelse af tryghed og ro, hvor end du er.
                Fremstillet i bæredygtigt, blødt økologisk bomuld.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-koze-green">Størrelse</h4>
              <div className="flex gap-3">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-12 flex items-center justify-center rounded-md transition-all ${
                      selectedSize === size 
                        ? 'bg-koze-green text-white font-medium' 
                        : 'bg-koze-light text-koze-green hover:bg-koze-light/80'
                    }`}
                    onClick={() => setSelectedSize(size as Size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-koze-green">Farve</h4>
              <div className="flex gap-3">
                {[
                  { name: 'Mørkeblå', bg: 'bg-koze-navy' },
                  { name: 'Mørkegrøn', bg: 'bg-koze-green' },
                  { name: 'Brun', bg: 'bg-koze-brown' }
                ].map((color) => (
                  <button
                    key={color.name}
                    className={`w-12 h-12 rounded-full transition-all ${color.bg} ${
                      selectedColor === color.name
                        ? 'ring-2 ring-offset-2 ring-koze-green'
                        : 'hover:opacity-90'
                    }`}
                    onClick={() => setSelectedColor(color.name as Color)}
                    title={color.name}
                  />
                ))}
              </div>
              <p className="mt-2 text-sm text-koze-green/80">
                Valgt: {selectedColor}
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 text-koze-green">Funktioner</h4>
              <ul className="list-disc list-inside space-y-1 text-koze-green/90">
                <li>Jævnt fordelte vægte (2,5 kg)</li>
                <li>100% økologisk bomuld</li>
                <li>Blødt fleece-for</li>
                <li>Vaskbar ved 30 grader</li>
                <li>Produceret i Danmark</li>
              </ul>
            </div>
          </div>
          
          <Button 
            className="w-full bg-koze-green hover:bg-koze-green/90 text-white font-medium py-6"
            size="lg"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Læg i kurv
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
