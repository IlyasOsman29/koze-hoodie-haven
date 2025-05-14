
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useImageGeneration } from '../contexts/ImageGenerationContext';
import { GalleryVertical, Image } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const PROMPT_SUGGESTIONS = [
  "Minimalistisk mørkegrøn hoodie med vægtede paneler, stilren, skandinavisk design",
  "Person der afslappet sidder i en stue med en beige weighted hoodie på, føler ro og komfort",
  "Detaljebillede af en weighted hoodie med fokus på kvalitetsmaterialer og syninger",
  "Gruppesamtale om mental sundhed i en lys, varm atmosfære",
  "To grundlæggere af et mode-brand, professionelt portræt med rolig baggrund"
];

const ImageGenerator = () => {
  const { apiKey, setApiKey, runwareService, addGeneratedImage, isGeneratingImage, setIsGeneratingImage } = useImageGeneration();
  const [prompt, setPrompt] = useState('');
  const [tempApiKey, setTempApiKey] = useState(apiKey || '');
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(1024);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) {
      toast.error("Indtast venligst en prompt til at generere et billede");
      return;
    }

    if (!runwareService) {
      toast.error("Angiv venligst din Runware API-nøgle først");
      return;
    }

    setIsGeneratingImage(true);
    
    try {
      const result = await runwareService.generateImage({
        positivePrompt: prompt,
        width,
        height
      });
      
      addGeneratedImage(result);
      toast.success("Billede genereret med succes!");
      setPrompt('');
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Fejl ved generering af billede. Prøv igen senere.");
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleSaveApiKey = () => {
    if (!tempApiKey.trim()) {
      toast.error("Indtast venligst en gyldig API-nøgle");
      return;
    }
    
    setApiKey(tempApiKey);
    toast.success("API-nøgle gemt!");
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setPrompt(suggestion);
  };

  return (
    <div className="space-y-8">
      {!apiKey && (
        <Card className="animate-on-scroll">
          <CardHeader>
            <CardTitle className="text-koze-green">Runware API-nøgle</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-koze-green/90">
              For at generere billeder skal du bruge en Runware API-nøgle. Besøg{" "}
              <a 
                href="https://runware.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-koze-brown underline"
              >
                runware.ai
              </a>{" "}
              for at oprette en konto og få din API-nøgle.
            </p>
            <div className="flex gap-4">
              <Input
                type="password"
                value={tempApiKey}
                onChange={(e) => setTempApiKey(e.target.value)}
                placeholder="Din Runware API-nøgle"
                className="flex-1"
              />
              <Button 
                onClick={handleSaveApiKey} 
                className="bg-koze-green hover:bg-koze-green/90"
              >
                Gem nøgle
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="animate-on-scroll">
        <CardHeader>
          <CardTitle className="text-koze-green flex items-center gap-2">
            <GalleryVertical className="h-5 w-5" />
            Billedgenerator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Beskriv det billede, du vil generere..."
            className="min-h-[100px]"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-koze-green/90 block mb-2">Bredde (px)</label>
              <Input
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                min={512}
                max={1024}
                step={64}
              />
            </div>
            <div>
              <label className="text-sm text-koze-green/90 block mb-2">Højde (px)</label>
              <Input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                min={512}
                max={1024}
                step={64}
              />
            </div>
          </div>
          
          <div>
            <p className="text-sm text-koze-green/90 mb-2">Forslag til prompts:</p>
            <div className="flex flex-wrap gap-2">
              {PROMPT_SUGGESTIONS.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSelectSuggestion(suggestion)}
                  className="text-xs border-koze-green/30 text-koze-green hover:bg-koze-green/10"
                >
                  {suggestion.length > 30 ? suggestion.substring(0, 30) + '...' : suggestion}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={handleGenerateImage} 
            className="w-full bg-koze-green hover:bg-koze-green/90"
            disabled={!apiKey || isGeneratingImage}
          >
            {isGeneratingImage ? "Genererer..." : "Generer billede"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ImageGenerator;
