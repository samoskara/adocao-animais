import { useState } from 'react';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { X, PawPrint, Ruler, Cake, Users } from 'lucide-react';
import { motion } from 'motion/react';

interface FilterOptions {
  type: string;
  size: string;
  age: string;
  gender: string;
}

interface PetFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
}

export function PetFilters({ onFilterChange }: PetFiltersProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    type: 'all',
    size: 'all',
    age: 'all',
    gender: 'all'
  });

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      type: 'all',
      size: 'all',
      age: 'all',
      gender: 'all'
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== 'all');

  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-6 border-2 border-blue-100"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
        
        {hasActiveFilters && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters}
              className="text-gray-600 hover:text-primary hover:bg-orange-50"
            >
              <X className="w-4 h-4 mr-1" />
              Limpar
            </Button>
          </motion.div>
        )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="space-y-3">
          <Label className="font-medium text-sm md:text-base text-gray-700 flex items-center gap-2">
            <PawPrint className="w-4 h-4" />
            Tipo de Animal
          </Label>
          <RadioGroup 
            value={filters.type} 
            onValueChange={(value) => handleFilterChange('type', value)}
          >
            <motion.div 
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-orange-50 transition-colors"
              whileHover={{ x: 3 }}
            >
              <RadioGroupItem value="all" id="type-all" />
              <Label htmlFor="type-all" className="cursor-pointer font-normal text-sm md:text-base">Todos</Label>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-orange-50 transition-colors"
              whileHover={{ x: 3 }}
            >
              <RadioGroupItem value="dog" id="type-dog" />
              <Label htmlFor="type-dog" className="cursor-pointer font-normal text-sm md:text-base">Cães</Label>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-orange-50 transition-colors"
              whileHover={{ x: 3 }}
            >
              <RadioGroupItem value="cat" id="type-cat" />
              <Label htmlFor="type-cat" className="cursor-pointer font-normal text-sm md:text-base">Gatos</Label>
            </motion.div>
          </RadioGroup>
        </div>

        {/* Tamanho */}
        <div className="space-y-3">
          <Label htmlFor="size-select" className="font-medium text-sm md:text-base text-gray-700 flex items-center gap-2">
            <Ruler className="w-4 h-4" />
            Tamanho
          </Label>
          <Select value={filters.size} onValueChange={(value) => handleFilterChange('size', value)}>
            <SelectTrigger id="size-select" className="hover:border-orange-300 transition-colors">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="pequeno">Pequeno</SelectItem>
              <SelectItem value="médio">Médio</SelectItem>
              <SelectItem value="grande">Grande</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label htmlFor="age-select" className="font-medium text-sm md:text-base text-gray-700 flex items-center gap-2">
            <Cake className="w-4 h-4" />
            Idade
          </Label>
          <Select value={filters.age} onValueChange={(value) => handleFilterChange('age', value)}>
            <SelectTrigger id="age-select" className="hover:border-orange-300 transition-colors">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="0-1">Filhote (0-1 ano)</SelectItem>
              <SelectItem value="2-5">Adulto (2-5 anos)</SelectItem>
              <SelectItem value="6+">Idoso (6+ anos)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label htmlFor="gender-select" className="font-medium text-sm md:text-base text-gray-700 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Gênero
          </Label>
          <Select value={filters.gender} onValueChange={(value) => handleFilterChange('gender', value)}>
            <SelectTrigger id="gender-select" className="hover:border-orange-300 transition-colors">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="macho">Macho</SelectItem>
              <SelectItem value="fêmea">Fêmea</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </motion.div>
  );
}