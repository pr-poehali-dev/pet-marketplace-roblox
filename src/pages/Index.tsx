import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const pets = [
    {
      id: 1,
      name: 'Космический Друг',
      icon: 'Stars',
      bonus: '+10% к росту растений'
    },
    {
      id: 2,
      name: 'Легендарный Дракон',
      icon: 'Flame',
      bonus: '+50% к доходу'
    },
    {
      id: 3,
      name: 'Садовый Страж',
      icon: 'Flower2',
      bonus: '+25% к урожаю'
    },
    {
      id: 4,
      name: 'Огненный Феникс',
      icon: 'Bird',
      bonus: '+35% скорость'
    },
    {
      id: 5,
      name: 'Ледяной Волк',
      icon: 'Snowflake',
      bonus: '+20% защита'
    },
    {
      id: 6,
      name: 'Золотой Кролик',
      icon: 'Rabbit',
      bonus: '+15% удача'
    }
  ];

  const guides = [
    {
      title: 'Как начать играть',
      description: 'Полное руководство для новичков по основам игры',
      icon: 'Rocket'
    },
    {
      title: 'Лучшие стратегии фарма',
      description: 'Эффективные методы получения валюты и ресурсов',
      icon: 'TrendingUp'
    },
    {
      title: 'Редкие питомцы',
      description: 'Где найти и как получить легендарных питомцев',
      icon: 'Sparkles'
    },
    {
      title: 'Оптимизация сада',
      description: 'Секреты создания идеального сада',
      icon: 'Leaf'
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Легендарный': return 'bg-primary text-primary-foreground';
      case 'Эпический': return 'bg-accent text-accent-foreground';
      case 'Редкий': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sprout" size={32} className="text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Garden Pets
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'catalog', 'guides', 'prices', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'guides' && 'Гайды'}
                  {section === 'prices' && 'Цены'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="w-fit">ROBLOX Grow a Garden</Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Лучшие питомцы для{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  твоего сада
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Покупай уникальных питомцев, улучшай свой сад и становись легендой Grow a Garden! Быстрая доставка, безопасные сделки.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('catalog')} className="group">
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('guides')}>
                  Гайды
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных игроков</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">Видов питомцев</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <div className="relative rounded-2xl shadow-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-20 flex items-center justify-center backdrop-blur-sm border-2 border-primary/30">
                <Icon name="Flame" size={200} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Каталог</Badge>
            <h2 className="text-4xl font-bold mb-4">Выбери своего питомца</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              У нас огромный выбор питомцев для любого стиля игры. От обычных до легендарных!
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="common">Обычные</TabsTrigger>
              <TabsTrigger value="rare">Редкие</TabsTrigger>
              <TabsTrigger value="legendary">Легендарные</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet, index) => (
              <Card key={pet.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 h-64 flex items-center justify-center group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-accent/20 transition-all duration-300">
                    <Icon name={pet.icon as any} size={120} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{pet.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mb-4">
                    <Icon name="Zap" size={16} className="text-primary" />
                    {pet.bonus}
                  </CardDescription>
                  <Button className="w-full">
                    Узнать цену
                    <Icon name="MessageCircle" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="guides" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Гайды</Badge>
            <h2 className="text-4xl font-bold mb-4">Обучение и советы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Научись играть как профи с нашими подробными гайдами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {guides.map((guide, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={guide.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle>{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="group/btn">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader>
              <CardTitle>Часто задаваемые вопросы</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Как получить питомца после покупки?</AccordionTrigger>
                  <AccordionContent>
                    После оплаты мы свяжемся с вами в ROBLOX и передадим питомца в игре. Обычно это занимает 5-15 минут.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Какие способы оплаты доступны?</AccordionTrigger>
                  <AccordionContent>
                    Мы принимаем оплату через СБП, карты, электронные кошельки и другие популярные способы.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Есть ли гарантия безопасности?</AccordionTrigger>
                  <AccordionContent>
                    Да! Все сделки проходят через защищённую систему. Мы гарантируем возврат средств в случае проблем.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Можно ли вернуть питомца?</AccordionTrigger>
                  <AccordionContent>
                    Возврат возможен в течение 24 часов после покупки, если товар не был использован в игре.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Цены</Badge>
            <h2 className="text-4xl font-bold mb-4">Специальные предложения</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выгодные наборы для быстрого старта и прокачки
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Badge className="w-fit mb-2">Стартовый</Badge>
                <CardTitle>Набор новичка</CardTitle>
                <CardDescription>Идеально для начала</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">3 обычных питомца</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">1000 игровой валюты</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">Бонусные семена</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Выбрать</Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary">Популярный</Badge>
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-secondary">Продвинутый</Badge>
                <CardTitle>Набор профи</CardTitle>
                <CardDescription>Лучшее соотношение</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">2 редких питомца</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">1 эпический питомец</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">5000 игровой валюты</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">Эксклюзивные предметы</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Выбрать</Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-accent">Премиум</Badge>
                <CardTitle>Набор легенды</CardTitle>
                <CardDescription>Для истинных фанатов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">1 легендарный питомец</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">3 эпических питомца</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">15000 игровой валюты</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">VIP поддержка</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-sm">Уникальные аксессуары</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Выбрать</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжись с нами</h2>
            <p className="text-muted-foreground">
              Есть вопросы? Мы всегда на связи и готовы помочь!
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Твой ник в ROBLOX</label>
                  <Input placeholder="Username" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email или Discord</label>
                  <Input placeholder="example@mail.com или username#1234" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Расскажи, чем мы можем помочь..." rows={5} />
                </div>
                <Button className="w-full" size="lg">
                  Отправить
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <Icon name="MessageCircle" size={20} className="text-primary" />
                    </div>
                    <div className="text-sm font-medium">Discord</div>
                    <div className="text-xs text-muted-foreground">GardenPets#1234</div>
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-2">
                      <Icon name="Mail" size={20} className="text-secondary" />
                    </div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-xs text-muted-foreground">support@gardenpets.ru</div>
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
                      <Icon name="Clock" size={20} className="text-accent" />
                    </div>
                    <div className="text-sm font-medium">Онлайн</div>
                    <div className="text-xs text-muted-foreground">24/7</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Sprout" size={24} className="text-primary" />
              <span className="font-bold text-lg">Garden Pets</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Garden Pets. Все права защищены. Неофициальный магазин для ROBLOX Grow a Garden.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;