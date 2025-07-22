
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useImageGeneration } from '../contexts/ImageGenerationContext';
import { Download, Copy, Image as ImageIcon } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { toast } from 'sonner';

const GeneratedImages = () => {
  const { generatedImages } = useImageGeneration();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleDownload = (url: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = `koze-image-${Date.now()}.webp`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast.success("Image downloaded");
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("Image URL copied to clipboard");
  };

  return (
    <div className="space-y-6">
      {generatedImages.length > 0 ? (
        <>
          <h3 className="text-2xl font-bold text-koze-green">Generated Images</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {generatedImages.map((image, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative">
                  <AspectRatio ratio={1}>
                    <img
                      src={image.imageURL}
                      alt={image.positivePrompt}
                      className="object-cover w-full h-full cursor-pointer"
                      onClick={() => setSelectedImage(image.imageURL)}
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-koze-green/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="bg-white/20 hover:bg-white/30 text-white"
                      onClick={() => handleDownload(image.imageURL)}
                    >
                      <Download className="h-5 w-5" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="bg-white/20 hover:bg-white/30 text-white"
                      onClick={() => handleCopyUrl(image.imageURL)}
                    >
                      <Copy className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="text-xs text-koze-green/80 line-clamp-2">
                    {image.positivePrompt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {selectedImage && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
              <div className="max-w-4xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
                <img 
                  src={selectedImage} 
                  alt="Enlarged" 
                  className="max-w-full max-h-full object-contain"
                />
                <Button 
                  className="absolute top-2 right-2 bg-koze-green/90 hover:bg-koze-green"
                  onClick={() => setSelectedImage(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-10 bg-koze-beige/50 rounded-lg">
          <ImageIcon className="mx-auto h-12 w-12 text-koze-green/40 mb-3" />
          <h3 className="text-xl font-medium text-koze-green mb-2">No images yet</h3>
          <p className="text-koze-green/70">
            Generate your first images using the image generator above.
          </p>
        </div>
      )}
    </div>
  );
};

export default GeneratedImages;
