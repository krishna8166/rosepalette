import { useState, useEffect } from 'react';
import ArtworkCard from './ArtworkCard';
import coffeeFace from '@/assets/coffee-face-painting.jpg';
import femaleGaze from '@/assets/female-gaze-drawing.jpg';
import blueEyes from '@/assets/blue-eyes-portrait.jpg';
import traditionalBeauty from '@/assets/traditional-beauty.jpg';
import naturePortrait from '@/assets/nature-portrait.jpg';
import mixedMediaEye from '@/assets/mixed-media-eye.jpg';

const artworks = [
  {
    id: '1',
    image: coffeeFace,
    title: 'Coffee Face Painting',
    artist: 'Roshni Sewlani',
    description: 'An expressive portrait capturing the essence of human emotion through masterful ink work and thoughtful composition.',
    price: 'SOLD'
  },
  {
    id: '2',
    image: femaleGaze,
    title: 'Female Gaze Drawing',
    artist: 'Roshni Sewlani',
    description: 'A captivating exploration of feminine perspective rendered in colored pencil with intricate detail and emotional depth.',
    price: 'SOLD'
  },
  {
    id: '3',
    image: blueEyes,
    title: 'Azure Dreams',
    artist: 'Roshni Sewlani',
    description: 'Striking blue eyes pierce through this realistic portrait, where soft skin tones meet bold red lips. A masterful study in human emotion and vulnerability. The delicate rendering showcases technical precision with heartfelt artistic expression.',
    price: 'SOLD'
  },
  {
    id: '4',
    image: traditionalBeauty,
    title: 'Golden Heritage',
    artist: 'Roshni Sewlani',
    description: 'Traditional Indian beauty adorned with intricate jewelry and ceremonial ornaments against golden backdrop. Rich cultural symbolism meets contemporary artistic technique in this stunning celebration of heritage. Every detail tells a story of tradition and grace.',
    price: 'SOLD'
  },
  {
    id: '5',
    image: naturePortrait,
    title: 'Emerald Reverie',
    artist: 'Roshni Sewlani',
    description: 'A serene portrait set against lush green foliage, capturing natural beauty in harmony with nature. The subject\'s contemplative gaze and soft features blend seamlessly with the organic background. A perfect fusion of human grace and natural elements.',
    price: 'SOLD'
  },
  {
    id: '6',
    image: mixedMediaEye,
    title: 'Monochrome Metamorphosis',
    artist: 'Roshni Sewlani',
    description: 'A striking mixed-media piece where black and white realism meets vibrant color in a single eye. The contrast between detailed pencil work and bold painted elements creates visual drama. An innovative exploration of artistic duality and transformation.',
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
    <section id="gallery" className="py-20 px-6 bg-background">
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