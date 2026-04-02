import { useParams, Link, useNavigate } from 'react-router';
import { pets } from '../data/pets';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { ArrowLeft, Heart, Phone, Mail, MapPin, Check, X, Sparkles, PartyPopper, Shield, Frown, Star, User, Cake, Ruler, Syringe, Hospital } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { Toaster } from '../components/ui/sonner';

export function PetProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [revealedContact, setRevealedContact] = useState<'phone' | 'email' | null>(null);

  const pet = pets.find(p => p.id === Number(id));

  if (!pet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50/30 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <Frown className="w-24 h-24 mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-semibold mb-4">Ops! Não encontramos este amiguinho</h2>
          <Button onClick={() => navigate('/')} size="lg" className="shadow-lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a galeria
          </Button>
        </div>
      </div>
    );
  }

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      toast.success(`${pet.name} foi adicionado aos seus favoritos!`, {
        description: 'Você pode visualizar seus favoritos a qualquer momento',
      });
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    } else {
      toast('Removido dos favoritos', {
        description: `${pet.name} foi removido da sua lista`,
      });
    }
  };

  const handleContact = (type: 'phone' | 'email') => {
    if (revealedContact === type) {
      setRevealedContact(null);
      return;
    }
    setRevealedContact(type);
    if (type === 'phone') {
      toast.success('Número de telefone revelado!', {
        description: 'Ligue agora para conhecer seu novo amigo.',
      });
    } else {
      toast.success('Endereço de e-mail revelado!', {
        description: 'Mande uma mensagem carinhosa para o tutor.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" richColors />

      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 0
              }}
              animate={{
                x: (Math.random() - 0.5) * 1000,
                y: Math.random() * -500,
                opacity: 0,
                scale: 1,
                rotate: Math.random() * 360
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.05
              }}
            >
              <Heart className={`w-8 h-8 ${['text-red-500', 'text-pink-500', 'text-orange-500', 'text-amber-500'][i % 4]}`} fill="currentColor" />
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button
            variant="ghost"
            className="mb-6 hover:bg-white/80 hover:shadow-md transition-all"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a galeria
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-8 md:gap-12">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-8">
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-card">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                <motion.button
                  onClick={handleFavoriteClick}
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl"
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
                      className={`w-7 h-7 transition-all duration-300 ${isFavorite ? 'fill-destructive text-destructive' : 'text-muted-foreground/70'
                        }`}
                    />
                  </motion.div>
                </motion.button>

                <motion.div
                  className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold shadow-sm flex items-center gap-2 border border-secondary"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <Sparkles className="w-4 h-4" />
                  Disponível para adoção
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h1 className="text-4xl font-extrabold text-primary mb-1 tracking-tight">
                    {pet.name}
                  </h1>
                  <p className="text-xl text-foreground/80 font-medium">{pet.breed}</p>
                </div>
                <Badge className="text-lg px-4 py-2 bg-secondary text-secondary-foreground border-none rounded-full">
                  {pet.type === 'dog' ? 'Cãozinho' : 'Gatinho'}
                </Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="shadow-none border-none bg-transparent rounded-none border-b border-border/30 pb-2">
                <CardContent className="p-0">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-3 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50"
                    >
                      <Cake className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                      <p className="text-sm text-gray-600 mb-1">Idade</p>
                      <p className="text-2xl font-bold text-gray-800">{pet.age}</p>
                      <p className="text-xs text-gray-500">{pet.age === 1 ? 'ano' : 'anos'}</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50"
                    >
                      <Ruler className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                      <p className="text-sm text-gray-600 mb-1">Porte</p>
                      <p className="text-2xl font-bold text-gray-800 capitalize">{pet.size}</p>
                      <p className="text-xs text-gray-500">tamanho</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-3 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50"
                    >
                      <User className="w-5 h-5 text-pink-600 mx-auto mb-1" />
                      <p className="text-sm text-gray-600 mb-1">Sexo</p>
                      <p className="text-2xl font-bold text-gray-800 capitalize">{pet.gender}</p>
                      <p className="text-xs text-gray-500">gênero</p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="shadow-none border-none bg-transparent rounded-none border-b border-border/30 pb-2">
                <CardContent className="p-0">
                  <h2 className="font-semibold text-xl mb-3 flex items-center gap-2 text-foreground">
                    <PartyPopper className="w-6 h-6 text-primary" />
                    Conheça {pet.name}!
                  </h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">{pet.description}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="shadow-none border-none bg-transparent rounded-none border-b border-border/30 pb-2">
                <CardContent className="p-0">
                  <h2 className="font-semibold text-xl mb-4 flex items-center gap-2 text-foreground">
                    <Star className="w-5 h-5 text-accent-foreground" />
                    Personalidade Especial
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {pet.personality.map((trait, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="text-base px-4 py-2 border-none text-primary bg-primary/10 rounded-full hover:shadow-sm transition-shadow"
                        >
                          {trait}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="shadow-none border-none bg-transparent rounded-none border-b border-border/30 pb-2">
                <CardContent className="p-0">
                  <h2 className="font-semibold text-xl mb-4 flex items-center gap-2 text-foreground">
                    <Shield className="w-6 h-6 text-emerald-500" />
                    Saúde em Dia!
                  </h2>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center justify-between p-3 rounded-lg bg-white"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center gap-2">
                        <Syringe className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-700 font-medium">Vacinado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {pet.vaccinated ? (
                          <>
                            <Check className="w-6 h-6 text-green-600" />
                            <span className="text-green-600 font-semibold">Sim</span>
                          </>
                        ) : (
                          <>
                            <X className="w-6 h-6 text-red-600" />
                            <span className="text-red-600 font-semibold">Não</span>
                          </>
                        )}
                      </div>
                    </motion.div>
                    <Separator />
                    <motion.div
                      className="flex items-center justify-between p-3 rounded-lg bg-white"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center gap-2">
                        <Hospital className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-700 font-medium">Castrado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {pet.neutered ? (
                          <>
                            <Check className="w-6 h-6 text-green-600" />
                            <span className="text-green-600 font-semibold">Sim</span>
                          </>
                        ) : (
                          <>
                            <X className="w-6 h-6 text-red-600" />
                            <span className="text-red-600 font-semibold">Não</span>
                          </>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="shadow-none border-none bg-transparent rounded-none pb-2">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 text-foreground/80">
                    <MapPin className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Localização</p>
                      <p className="font-semibold text-lg">{pet.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="space-y-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="bg-transparent rounded-none py-4 border-t border-border/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
                  <h2 className="font-bold text-xl text-center text-foreground">
                    Pronto para dar um lar para {pet.name}?
                  </h2>
                </div>
                <p className="text-center text-foreground/80">
                  Entre em contato agora e comece uma história de amor!
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="w-full text-base h-14 shadow-md bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-full transition-all duration-300"
                  onClick={() => handleContact('phone')}
                >
                  <Phone className="w-6 h-6 mr-2" />
                  <motion.span
                    key={revealedContact === 'phone' ? 'phone' : 'texto'}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {revealedContact === 'phone' ? pet.contactPhone : 'Ligar Agora'}
                  </motion.span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-base h-14 border hover:bg-orange-50 hover:border-primary shadow-sm rounded-full transition-all duration-300"
                  onClick={() => handleContact('email')}
                >
                  <Mail className="w-6 h-6 mr-2" />
                  <motion.span
                    key={revealedContact === 'email' ? 'email' : 'texto'}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {revealedContact === 'email' ? pet.contactEmail : 'Enviar E-mail'}
                  </motion.span>
                </Button>
              </motion.div>

              <p className="text-sm text-gray-600 text-center italic">
                "Quem salva uma vida, salva o mundo inteiro" ✨
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}