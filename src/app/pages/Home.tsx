import { useState, useMemo } from 'react';
import { pets } from '../data/pets';
import { PetCard } from '../components/PetCard';
import { PetFilters } from '../components/PetFilters';
import { Heart, Sparkles, PawPrint } from 'lucide-react';
import { motion } from 'motion/react';

interface FilterOptions {
  type: string;
  size: string;
  age: string;
  gender: string;
}

export function Home() {
  const [filters, setFilters] = useState<FilterOptions>({
    type: 'all',
    size: 'all',
    age: 'all',
    gender: 'all'
  });

  const filteredPets = useMemo(() => {
    return pets.filter(pet => {
      if (filters.type !== 'all' && pet.type !== filters.type) {
        return false;
      }

      if (filters.size !== 'all' && pet.size !== filters.size) {
        return false;
      }

      if (filters.age !== 'all') {
        if (filters.age === '0-1' && pet.age > 1) return false;
        if (filters.age === '2-5' && (pet.age < 2 || pet.age > 5)) return false;
        if (filters.age === '6+' && pet.age < 6) return false;
      }

      if (filters.gender !== 'all' && pet.gender !== filters.gender) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L35 20 L40 30 L35 35 Z M20 30 L25 25 L30 30 L25 40 Z' fill='%23ff8b6a' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.header 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight">
              Adoção com Amor: Encontre seu Novo Melhor Amigo!
            </h1>
            <motion.div
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Cada patinha merece um lar cheio de carinho. Encontre seu novo melhor amigo e transforme duas vidas!
          </motion.p>

          
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <PetFilters onFilterChange={setFilters} />
        </motion.div>

        <motion.div 
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-base md:text-lg text-foreground/80 font-medium font-medium">
            {filteredPets.length > 0 ? (
              <>
                <span className="font-bold text-primary">{filteredPets.length}</span> {filteredPets.length === 1 ? 'amiguinho esperando' : 'amiguinhos esperando'} por você
              </>
            ) : (
              <span>Nenhum pet encontrado com esses filtros</span>
            )}
          </p>
        </motion.div>

        {filteredPets.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {filteredPets.map((pet, index) => (
              <motion.div
                key={pet.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
              >
                <PetCard pet={pet} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-16 bg-card rounded-[2rem] shadow-sm border border-border/40"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <PawPrint className="w-16 h-16 mx-auto mb-4 text-muted-foreground/30" />
            <p className="text-foreground/80 text-lg md:text-xl mb-2 font-semibold">Ops! Nenhum amiguinho encontrado com essas características</p>
            <p className="text-foreground/60 text-sm md:text-base">Tente ajustar os filtros, seu novo amor pode estar em outra categoria!</p>
          </motion.div>
        )}

        
        <motion.div
          className="mt-16 text-center pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-secondary/40 rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(255,139,106,0.08)] border border-secondary/60">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Adotar é um ato incondicional de amor!
              </h3>
            </div>
            <p className="text-foreground/75 text-lg max-w-2xl mx-auto">
              Ao abrir as portas da sua casa, você não está apenas ganhando um pet. Você está salvando uma vida que te amará e será grata por todos os dias.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}