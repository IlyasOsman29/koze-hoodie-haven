
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImageGenerationProvider } from '../contexts/ImageGenerationContext';
import ImageGenerator from '@/components/ImageGenerator';
import GeneratedImages from '@/components/GeneratedImages';

const ImageStudio = () => {
  return (
    <div className="min-h-screen bg-koze-offwhite">
      <Navbar />
      <main className="section-padding">
        <h1 className="text-4xl font-bold text-koze-green mb-6 animate-on-scroll">
          KOZE Billedgenerator
        </h1>
        <p className="text-koze-green/90 mb-8 max-w-3xl animate-on-scroll">
          Opret unikke billeder til dit KOZE brand med vores AI-drevne billedgenerator. Du kan generere produktbilleder,
          stemningsbilleder og meget mere ved hjælp af tekstbeskrivelser.
        </p>
        
        <ImageGenerationProvider>
          <div className="space-y-12">
            <ImageGenerator />
            <GeneratedImages />
          </div>
        </ImageGenerationProvider>
      </main>
      <Footer />
    </div>
  );
};

export default ImageStudio;
