export interface Pet {
  id: number;
  name: string;
  type: 'dog' | 'cat';
  breed: string;
  age: number;
  size: 'pequeno' | 'médio' | 'grande';
  gender: 'macho' | 'fêmea';
  description: string;
  personality: string[];
  vaccinated: boolean;
  neutered: boolean;
  image: string;
  location: string;
  contactPhone: string;
  contactEmail: string;
}

export const pets: Pet[] = [
  {
    id: 1,
    name: 'Max',
    type: 'dog',
    breed: 'Golden Retriever',
    age: 3,
    size: 'grande',
    gender: 'macho',
    description: 'Max é um cão super amigável e carinhoso que adora brincar e fazer novos amigos. Ele é perfeito para famílias com crianças.',
    personality: ['Amigável', 'Energético', 'Leal'],
    vaccinated: true,
    neutered: true,
    image: 'https://images.unsplash.com/photo-1637852422069-81efc85e0a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2d8ZW58MXx8fHwxNzc1MDA5NDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'São Paulo, SP',
    contactPhone: '(11) 98765-4321',
    contactEmail: 'adocao@exemplo.com'
  },
  {
    id: 2,
    name: 'Luna',
    type: 'cat',
    breed: 'Siamês',
    age: 2,
    size: 'pequeno',
    gender: 'fêmea',
    description: 'Luna é uma gatinha muito elegante e independente. Ela adora carinho e é perfeita para apartamentos.',
    personality: ['Independente', 'Carinhosa', 'Tranquila'],
    vaccinated: true,
    neutered: true,
    image: 'https://images.unsplash.com/photo-1702914954859-f037fc75b760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1MDEyMjc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Rio de Janeiro, RJ',
    contactPhone: '(21) 91234-5678',
    contactEmail: 'adocao@exemplo.com'
  },
  {
    id: 3,
    name: 'Thor',
    type: 'dog',
    breed: 'Vira-lata',
    age: 1,
    size: 'médio',
    gender: 'macho',
    description: 'Thor é um filhote cheio de energia que está procurando por uma família ativa para acompanhar suas aventuras!',
    personality: ['Brincalhão', 'Curioso', 'Ativo'],
    vaccinated: true,
    neutered: false,
    image: 'https://images.unsplash.com/photo-1651212508936-dfb6f6ea3d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHB1cHB5JTIwZmFjZXxlbnwxfHx8fDE3NzUwOTA5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Belo Horizonte, MG',
    contactPhone: '(31) 99876-5432',
    contactEmail: 'adocao@exemplo.com'
  },
  {
    id: 4,
    name: 'Mel',
    type: 'cat',
    breed: 'Laranja',
    age: 4,
    size: 'médio',
    gender: 'fêmea',
    description: 'Mel é uma gata muito dócil e carinhosa. Ela adora dormir no colo e fazer companhia.',
    personality: ['Dócil', 'Carinhosa', 'Calma'],
    vaccinated: true,
    neutered: true,
    image: 'https://images.unsplash.com/photo-1667518157438-05eccbadb225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjB0YWJieSUyMGNhdHxlbnwxfHx8fDE3NzUwNTY1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Curitiba, PR',
    contactPhone: '(41) 98123-4567',
    contactEmail: 'adocao@exemplo.com'
  },
  {
    id: 5,
    name: 'Buddy',
    type: 'dog',
    breed: 'Vira-lata',
    age: 5,
    size: 'pequeno',
    gender: 'macho',
    description: 'Buddy é um cãozinho muito amoroso e fiel. Perfeito para quem busca um companheiro tranquilo e carinhoso.',
    personality: ['Tranquilo', 'Leal', 'Amoroso'],
    vaccinated: true,
    neutered: true,
    image: 'https://images.unsplash.com/photo-1747045170511-9f0f4f3859e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZG9yYWJsZSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTA5MDkyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Porto Alegre, RS',
    contactPhone: '(51) 99234-5678',
    contactEmail: 'adocao@exemplo.com'
  },
  {
    id: 6,
    name: 'Nina',
    type: 'cat',
    breed: 'Preta',
    age: 1,
    size: 'pequeno',
    gender: 'fêmea',
    description: 'Nina é uma gatinha jovem e cheia de energia. Ela adora brincar e explorar cada cantinho da casa.',
    personality: ['Brincalhona', 'Curiosa', 'Ativa'],
    vaccinated: true,
    neutered: true,
    image: 'https://images.unsplash.com/photo-1657314310600-6a63e9ef1859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGNhdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTA5MDkyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Brasília, DF',
    contactPhone: '(61) 98765-1234',
    contactEmail: 'adocao@exemplo.com'
  },
  {
    id: 7,
    name: 'Bolinha',
    type: 'dog',
    breed: 'Maltês',
    age: 2,
    size: 'pequeno',
    gender: 'macho',
    description: 'Bolinha é um cachorrinho muito fofo e carinhoso. Ele adora colo e é perfeito para quem mora em apartamento.',
    personality: ['Fofo', 'Carinhoso', 'Alegre'],
    vaccinated: true,
    neutered: true,
    image: 'https://images.unsplash.com/photo-1581562324420-eff2f5aaa4b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGZsdWZmeSUyMGRvZ3xlbnwxfHx8fDE3NzUwOTA5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Fortaleza, CE',
    contactPhone: '(4) 99345-6789',
    contactEmail: 'adocao@exemplo.com'
  },
  {
    id: 8,
    name: 'Bob',
    type: 'dog',
    breed: 'Beagle',
    age: 3,
    size: 'médio',
    gender: 'macho',
    description: 'Bob é um cachorro super amigável e brincalhão. Ele adora passear e brincar ao ar livre.',
    personality: ['Amigável', 'Brincalhão', 'Sociável'],
    vaccinated: true,
    neutered: true,
    image: 'https://images.unsplash.com/photo-1606833694770-40a04762ac16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFnbGUlMjBwdXBweXxlbnwxfHx8fDE3NzUwOTA5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Salvador, BA',
    contactPhone: '(71) 98456-7890',
    contactEmail: 'adocao@exemplo.com'
  }
];
