
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
  "Minimalist dark green hoodie with weighted panels, clean, Scandinavian design",
  "Person relaxing in a living room wearing a beige weighted hoodie, feeling calm and comfortable",
  "Detail shot of a weighted hoodie focusing on quality materials and stitching",
  "Group conversation about mental health in a bright, warm atmosphere",
  "Two founders of a fashion brand, professional portrait with calm background"
];

const ImageGenerator = () => {
  const { apiKey, setApiKey, runwareService, addGeneratedImage, isGeneratingImage, setIsGeneratingImage } = useImageGeneration();
  const [prompt, setPrompt] = useState('');
  const [tempApiKey, setTempApiKey] = useState(apiKey || '');
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(1024);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt to generate an image");
      return;
    }

    if (!runwareService) {
      toast.error("Please enter your Runware API key first");
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
      toast.success("Image generated successfully!");
      setPrompt('');
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Error generating image. Please try again later.");
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleSaveApiKey = () => {
    if (!tempApiKey.trim()) {
      toast.error("Please enter a valid API key");
      return;
    }
    
    setApiKey(tempApiKey);
    toast.success("API key saved!");
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setPrompt(suggestion);
  };

  return (
    <div className="space-y-8">
      {!apiKey && (
        <Card className="animate-on-scroll">
          <CardHeader>
            <CardTitle className="text-koze-green">Runware API Key</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-koze-green/90">
              To generate images, you need a Runware API key. Visit{" "}
              <a 
                href="https://runware.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-koze-brown underline"
              >
                runware.ai
              </a>{" "}
              to create an account and get your API key.
            </p>
            <div className="flex gap-4">
              <Input
                type="password"
                value={tempApiKey}
                onChange={(e) => setTempApiKey(e.target.value)}
                placeholder="Your Runware API key"
                className="flex-1"
              />
              <Button 
                onClick={handleSaveApiKey} 
                className="bg-koze-green hover:bg-koze-green/90"
              >
                Save Key
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="animate-on-scroll">
        <CardHeader>
          <CardTitle className="text-koze-green flex items-center gap-2">
            <GalleryVertical className="h-5 w-5" />
            Image Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want to generate..."
            className="min-h-[100px]"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-koze-green/90 block mb-2">Width (px)</label>
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
              <label className="text-sm text-koze-green/90 block mb-2">Height (px)</label>
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
            <p className="text-sm text-koze-green/90 mb-2">Prompt suggestions:</p>
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
            {isGeneratingImage ? "Generating..." : "Generate Image"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ImageGenerator;
