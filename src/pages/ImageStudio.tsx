
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
          KOZE Image Generator
        </h1>
        <p className="text-koze-green/90 mb-8 max-w-3xl animate-on-scroll">
          Create unique images for your KOZE brand with our AI-powered image generator. You can generate product images,
          mood images and much more using text descriptions.
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
