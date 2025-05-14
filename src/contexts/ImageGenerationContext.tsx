
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { RunwareService, GeneratedImage } from '../services/runware-service';

interface ImageGenerationContextType {
  apiKey: string;
  setApiKey: (key: string) => void;
  runwareService: RunwareService | null;
  generatedImages: GeneratedImage[];
  addGeneratedImage: (image: GeneratedImage) => void;
  isGeneratingImage: boolean;
  setIsGeneratingImage: (value: boolean) => void;
}

const ImageGenerationContext = createContext<ImageGenerationContextType | null>(null);

export const useImageGeneration = () => {
  const context = useContext(ImageGenerationContext);
  if (!context) {
    throw new Error('useImageGeneration must be used within an ImageGenerationProvider');
  }
  return context;
};

export const ImageGenerationProvider = ({ children }: { children: ReactNode }) => {
  const [apiKey, setApiKey] = useState<string>(() => {
    return localStorage.getItem('runware_api_key') || '';
  });
  const [runwareService, setRunwareService] = useState<RunwareService | null>(null);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  useEffect(() => {
    if (apiKey) {
      localStorage.setItem('runware_api_key', apiKey);
      setRunwareService(new RunwareService(apiKey));
    } else {
      setRunwareService(null);
    }
  }, [apiKey]);

  const addGeneratedImage = (image: GeneratedImage) => {
    setGeneratedImages(prev => [...prev, image]);
  };

  return (
    <ImageGenerationContext.Provider
      value={{
        apiKey,
        setApiKey,
        runwareService,
        generatedImages,
        addGeneratedImage,
        isGeneratingImage,
        setIsGeneratingImage
      }}
    >
      {children}
    </ImageGenerationContext.Provider>
  );
};
