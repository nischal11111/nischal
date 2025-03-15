
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "../components/Image"


// Sample portfolio data
const portfolioData = {

  single:[
    {id:1, title: "Emotion",image: Image.image1, category: "Sleep"},
    {id:2, title: "Smile",image: Image.image2, category: "Me"},
    {id:3, title: "Enlight",image: Image.image3, category: "Expression"},


  ],
 

  artistic: [
    {id:4, title: "Madan Krishna",image: Image.artistic1, category: "Graphite art"},
    {id:5, title: "Parenthood",image: Image.artistic2, category: "Movie"},
    {id:6, title: "Little One",image: Image.artistic3, category: "😍😍"},

    
  ],
  couple: [
    {id:7, title: "We",image: Image.coupleImage1, category: "💗💗💗💗💗"},
    
  ]
};

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<null | {id: number, title: string, image: string}>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openImageDialog = (image: {id: number, title: string, image: string}) => {
    setSelectedImage(image);
    setIsDialogOpen(true);
  };

  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6">
            Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Browse through my collection of hand-drawn pencil sketches
          </p>
        </div>

      <Tabs defaultValue="Single" className="w-full">
  <div className="flex justify-center mb-12">
    <TabsList className="bg-gray-100/70 p-1">
      <TabsTrigger value="Single" className="text-base px-6 py-2">Single</TabsTrigger>
      <TabsTrigger value="Couple" className="text-base px-6 py-2">Couple</TabsTrigger>
      <TabsTrigger value="Artistic" className="text-base px-6 py-2">Artistic</TabsTrigger>
    </TabsList>
  </div>

  <TabsContent value="Single" className="mt-6 animate-fade-in">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioData.single.map((item) => (
        <PortfolioItem key={item.id} item={item} onClick={() => openImageDialog(item)} />
      ))}
    </div>
  </TabsContent>

  <TabsContent value="Couple" className="mt-6 animate-fade-in">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioData.couple.map((item) => (
        <PortfolioItem key={item.id} item={item} onClick={() => openImageDialog(item)} />
      ))}
    </div>
  </TabsContent>

  <TabsContent value="Artistic" className="mt-6 animate-fade-in">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioData.artistic.map((item) => (
        <PortfolioItem key={item.id} item={item} onClick={() => openImageDialog(item)} />
      ))}
    </div>
  </TabsContent>
</Tabs>

      </div>

      {/* Lightbox Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-xl font-medium">{selectedImage.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

const PortfolioItem = ({ 
  item, 
  onClick 
}: { 
  item: {id: number, title: string, image: string, category: string},
  onClick: () => void
}) => {
  return (
    <div 
      className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-[4/5]">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover gallery-image"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-medium text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-500 mt-1 capitalize">{item.category}</p>
      </div>
    </div>
  );
};

export default Portfolio;
