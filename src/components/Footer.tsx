
const Footer = () => {
  return (
    <footer className="bg-koze-green text-white py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">KOZE</h3>
            <p className="text-white/80 text-sm">
              Vægtede hoodies designet til at hjælpe mennesker med angst og uro med at finde tryghed i hverdagen.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Om KOZE</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bæredygtighed</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vores mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontakt os</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kundeservice</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Levering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returpolitik</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Størrelsesguide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Hold dig opdateret</h4>
            <p className="text-white/80 text-sm mb-4">
              Tilmeld dig vores nyhedsbrev for at få de nyeste opdateringer og gode råd om mental sundhed.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Din e-mail" 
                className="px-3 py-2 rounded-l-md text-koze-green w-full text-sm"
              />
              <button 
                type="submit" 
                className="bg-koze-brown hover:bg-koze-brown/90 px-3 py-2 rounded-r-md text-white font-medium text-sm"
              >
                Tilmeld
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-white/70 text-sm">
          <p>© 2025 KOZE. Alle rettigheder forbeholdes.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privatlivspolitik</a>
            <a href="#" className="hover:text-white transition-colors">Handelsbetingelser</a>
            <a href="#" className="hover:text-white transition-colors">Cookie politik</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
