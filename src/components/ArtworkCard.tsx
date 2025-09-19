import { useState } from 'react';

interface ArtworkCardProps {
  id: string;
  image: string;
  title: string;
  artist: string;
  description: string;
  price?: string;
}

const ArtworkCard = ({ image, title, artist, description, price }: ArtworkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="gallery-card bg-card rounded-2xl overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={`${title} by ${artist}`}
          className="w-full h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-primary/10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      
      <div className="p-6 space-y-3">
        <div>
          <h3 className="font-serif text-xl font-medium text-card-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground font-light">
            {artist}
          </p>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>
        
        {price && (
          <div className="pt-2">
            <p className="text-lg font-medium text-foreground">
              {price}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtworkCard;