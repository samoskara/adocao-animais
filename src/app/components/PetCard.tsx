import { Pet } from '../data/pets';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { motion } from 'motion/react';

interface PetCardProps {
  pet: Pet;
}

export function PetCard({ pet }: PetCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden hover:shadow-[0_20px_50px_rgba(255,139,106,0.12)] transition-all duration-500 border border-border/40 bg-card rounded-[1.5rem]">
        <Link to={`/pet/${pet.id}`}>
          <div className="relative aspect-square overflow-hidden bg-muted">
            <motion.img 
              src={pet.image} 
              alt={pet.name}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                setIsFavorite(!isFavorite);
              }}
              className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full p-2.5 shadow-lg"
              aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ 
                  scale: isFavorite ? [1, 1.4, 0.9, 1.1, 1] : 1,
                  rotate: isFavorite ? [0, -10, 10, -5, 5, 0] : 0
                }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
              >
                <Heart 
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isFavorite ? 'fill-destructive text-destructive' : 'text-muted-foreground'
                  }`}
                />
              </motion.div>
            </motion.button>
            
            <motion.div
              className="absolute top-3 left-3"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <div className="bg-secondary text-secondary-foreground font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-sm text-sm border border-secondary">
                Disponível para adoção
              </div>
            </motion.div>
          </div>
        </Link>
        
        <CardContent className="p-5">
          <div className="flex items-start justify-between mb-2">
            <Link to={`/pet/${pet.id}`}>
              <motion.h3 
                className="font-semibold text-lg md:text-xl hover:text-primary transition-colors"
                whileHover={{ x: 3 }}
              >
                {pet.name}
              </motion.h3>
            </Link>
            <Badge variant="secondary" className="capitalize text-[13px] px-3 py-1 rounded-full bg-secondary text-secondary-foreground border-none">
              {pet.type === 'dog' ? 'Cãozinho' : 'Gatinho'}
            </Badge>
          </div>
          
          <p className="text-sm md:text-base text-gray-600 mb-3 font-medium">{pet.breed}</p>
          
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="outline" className="text-[12px] font-medium border-none bg-primary/10 text-primary rounded-full px-3">
              {pet.age} {pet.age === 1 ? 'ano' : 'anos'}
            </Badge>
            <Badge variant="outline" className="text-[12px] font-medium capitalize border-none bg-primary/10 text-primary rounded-full px-3">
              {pet.size}
            </Badge>
            <Badge variant="outline" className="text-[12px] font-medium capitalize border-none bg-primary/10 text-primary rounded-full px-3">
              {pet.gender}
            </Badge>
          </div>
          
          <div className="flex items-center text-xs md:text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{pet.location}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}