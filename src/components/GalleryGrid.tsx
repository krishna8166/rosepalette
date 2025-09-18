import { useState, useEffect } from 'react';
import ArtworkCard from './ArtworkCard';
import coffeeFace from '@/assets/coffee-face-painting.jpg';
import femaleGaze from '@/assets/female-gaze-drawing.jpg';

const artworks = [
  {
    id: '1',
    image: coffeeFace,
    title: 'Coffee Face Painting',
    artist: 'Roshni Sewlani',
    year: '2024',
    description: 'An expressive portrait capturing the essence of human emotion through masterful ink work and thoughtful composition.',
    price: 'SOLD'
  },
  {
    id: '2',
    image: femaleGaze,
    title: 'Female Gaze Drawing',
    artist: 'Roshni Sewlani',
    year: '2024', 
    description: 'A captivating exploration of feminine perspective rendered in colored pencil with intricate detail and emotional depth.',
    price: 'SOLD'
  }
];

const GalleryGrid = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards(prev => {
        if (prev.length < artworks.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-foreground">
            Artist Showcase
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Original artworks by Roshni Sewlani from Indore, Madhya Pradesh. 
            Each piece showcases her passion for portraying human emotion and contemporary expression.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <div 
              key={artwork.id}
              className={`transition-all duration-700 ease-out ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms` 
              }}
            >
              <ArtworkCard {...artwork} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground font-light mb-6">
            Interested in a piece? We'd love to tell you more about our collection.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-medium hover:shadow-lg transition-all duration-500 hover:scale-[1.02]">
            Contact Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;