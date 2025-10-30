import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const pets = [
    {
      id: 1,
      name: 'Звездный Питомец',
      icon: 'Stars',
      bonus: '+10% к росту растений',
      price: '45 ₽',
      rarity: 'common',
      rarityLabel: 'Обычный'
    },
    {
      id: 2,
      name: 'Огненный Дракон',
      icon: 'Flame',
      bonus: '+50% к доходу',
      price: '600 ₽',
      rarity: 'legendary',
      rarityLabel: 'Легендарный'
    },
    {
      id: 3,
      name: 'Цветочная Фея',
      icon: 'Flower2',
      bonus: '+25% к урожаю',
      price: '170 ₽',
      rarity: 'rare',
      rarityLabel: 'Редкий'
    },
    {
      id: 4,
      name: 'Небесная Птица',
      icon: 'Bird',
      bonus: '+35% скорость',
      price: '600 ₽',
      rarity: 'rare',
      rarityLabel: 'Редкий'
    },
    {
      id: 5,
      name: 'Ледяной Дух',
      icon: 'Snowflake',
      bonus: '+20% защита',
      price: '600 ₽',
      rarity: 'rare',
      rarityLabel: 'Редкий'
    },
    {
      id: 6,
      name: 'Лунный Кролик',
      icon: 'Rabbit',
      bonus: '+15% удача',
      price: '600 ₽',
      rarity: 'common',
      rarityLabel: 'Обычный'
    }
  ];

  const filteredPets = selectedCategory === 'all' 
    ? pets 
    : pets.filter(pet => pet.rarity === selectedCategory);

  const features = [
    {
      icon: 'Shield',
      title: 'Безопасно',
      description: 'Гарантия безопасности каждой сделки'
    },
    {
      icon: 'Zap',
      title: 'Быстро',
      description: 'Доставка питомцев за 5 минут'
    },
    {
      icon: 'Heart',
      title: 'Надежно',
      description: '500+ довольных игроков'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sprout" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold">Garden Pets</span>
            </div>
            <Button className="gap-2">
              <Icon name="ShoppingCart" size={18} />
              Корзина
            </Button>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <Icon name="Gamepad2" size={14} className="mr-1" />
                ROBLOX Grow a Garden
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Прокачай свой сад с{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  легендарными питомцами
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Уникальные питомцы для Grow a Garden. Мгновенная доставка, безопасные платежи, гарантия качества.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 group">
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Написать нам
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl opacity-50 rounded-full"></div>
              <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-16 border-2 border-primary/20 backdrop-blur-sm flex items-center justify-center">
                <Icon name="Sparkles" size={180} className="text-primary animate-pulse" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог питомцев</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Выбери питомца и усиль свой сад прямо сейчас
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { value: 'all', label: 'Все питомцы', icon: 'Grid3x3' },
                { value: 'common', label: 'Обычные', icon: 'Circle' },
                { value: 'rare', label: 'Редкие', icon: 'Star' },
                { value: 'legendary', label: 'Легендарные', icon: 'Crown' }
              ].map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? 'default' : 'outline'}
                  className="gap-2"
                  onClick={() => setSelectedCategory(category.value)}
                >
                  <Icon name={category.icon as any} size={16} />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.map((pet, index) => (
              <Card 
                key={pet.id} 
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Icon 
                    name={pet.icon as any} 
                    size={100} 
                    className="text-primary relative z-10 group-hover:scale-110 transition-transform duration-500" 
                  />
                  <Badge className={`absolute top-4 right-4 z-20 ${
                    pet.rarity === 'legendary' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                    pet.rarity === 'rare' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                    'bg-gradient-to-r from-gray-500 to-gray-600'
                  } text-white border-0`}>
                    {pet.rarityLabel}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{pet.name}</h3>
                  <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                    <Icon name="Zap" size={16} className="text-primary" />
                    <span className="text-sm">{pet.bonus}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{pet.price}</span>
                    <Button className="gap-2">
                      <Icon name="ShoppingBag" size={18} />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-muted-foreground text-lg">
              Напишите нам, и мы ответим в течение 5 минут
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваш никнейм в ROBLOX</label>
                  <Input placeholder="Введите ник" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Способ связи</label>
                  <Input placeholder="Telegram, Discord или Email" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Input placeholder="Опишите ваш вопрос" className="h-12" />
                </div>
                <Button className="w-full h-12 text-base gap-2">
                  <Icon name="Send" size={18} />
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border/50 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Sprout" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">Garden Pets</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Лучший магазин питомцев для Grow a Garden ROBLOX
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>Telegram: @garden_pets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>support@gardenpets.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Работаем 24/7</div>
                <div>Гарантия безопасности</div>
                <div>Мгновенная доставка</div>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border/50">
            © 2024 Garden Pets. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
