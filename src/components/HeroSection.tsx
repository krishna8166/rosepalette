import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroArtwork from '@/assets/traditional-beauty.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Content Side */}
        <div className={`space-y-8 ${isVisible ? 'animate-soft-fade-in' : 'opacity-0'}`}>
          <div className="space-y-6">
            <h1 className="font-serif text-5xl lg:text-7xl font-medium text-foreground leading-tight">
              Roshni
              <br />
              <span className="text-primary font-light">Sewlani's</span>
              <br />
              Atelier
            </h1>
            
            <p className="text-xl text-muted-foreground font-light max-w-lg leading-relaxed">
              Explore the timeless beauty and complexity of contemporary art through 
              expressive portraits and intricate drawings from Indore, Madhya Pradesh.
            </p>
          </div>

          <div className="flex gap-4">
            <Button 
              variant="default" 
              size="lg"
              className="px-8 py-6 text-lg font-medium rounded-2xl hover:shadow-lg transition-all duration-500"
              onClick={() => {
                document.getElementById('gallery')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Explore Collection
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-medium rounded-2xl border-2 hover:bg-gallery-hover transition-all duration-500"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Artwork Side */}
        <div className={`relative ${isVisible ? 'animate-soft-fade-in' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
          <div className="gallery-card-featured rounded-3xl overflow-hidden bg-card animate-gentle-float">
            <img 
              src={heroArtwork}
              alt="Golden Heritage by Roshni Sewlani"
              className="w-full h-auto object-cover"
            />
            <div className="p-8">
              <h3 className="font-serif text-2xl font-medium text-card-foreground mb-2">
                Golden Heritage
              </h3>
              <p className="text-muted-foreground font-light">
                Mixed Media • 35.6 x 45.7 cm
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Traditional Indian beauty adorned with intricate jewelry and ceremonial 
                ornaments against golden backdrop celebrating heritage and grace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;