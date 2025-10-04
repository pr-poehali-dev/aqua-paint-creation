import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const products = [
  {
    id: 1,
    name: 'Профессиональная палетка аквагрима 6 цветов',
    price: 890,
    oldPrice: 1290,
    image: '/img/cc6144e3-cf3e-4078-892a-5cb27025b3a0.jpg',
    rating: 4.8,
    reviews: 142,
    inStock: true,
  },
  {
    id: 2,
    name: 'Набор кистей для аквагрима 5 шт',
    price: 650,
    oldPrice: 950,
    image: '/img/48e146c7-6841-40e7-8583-2ad0656d3487.jpg',
    rating: 4.9,
    reviews: 89,
    inStock: true,
  },
  {
    id: 3,
    name: 'Блестки для аквагрима радужные',
    price: 450,
    image: '/img/a6b6ca93-d687-4380-ac07-7a93aa7c5a11.jpg',
    rating: 4.7,
    reviews: 56,
    inStock: true,
  },
  {
    id: 4,
    name: 'Неоновая палетка аквагрима UV 8 цветов',
    price: 1190,
    oldPrice: 1690,
    image: '/img/cc6144e3-cf3e-4078-892a-5cb27025b3a0.jpg',
    rating: 4.9,
    reviews: 203,
    inStock: true,
  },
  {
    id: 5,
    name: 'Стартовый набор аквагримера',
    price: 2490,
    oldPrice: 3490,
    image: '/img/48e146c7-6841-40e7-8583-2ad0656d3487.jpg',
    rating: 5.0,
    reviews: 178,
    inStock: false,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section id="home" className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Аквагрим для ярких<br />эмоций детей и взрослых
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Профессиональные краски, кисти и аксессуары для создания незабываемых образов
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Info" size={20} className="mr-2" />
                О продукции
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Популярные товары</h2>
            <p className="text-muted-foreground text-lg">Лучшие предложения для творчества</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Доставка и оплата</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-background p-6 rounded-lg shadow-sm text-center space-y-3 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg">Быстрая доставка</h3>
                <p className="text-muted-foreground text-sm">По Москве от 1 дня, по России от 3 дней</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm text-center space-y-3 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
                  <Icon name="CreditCard" size={32} className="text-secondary" />
                </div>
                <h3 className="font-bold text-lg">Удобная оплата</h3>
                <p className="text-muted-foreground text-sm">Наличными, картой или онлайн</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm text-center space-y-3 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={32} className="text-accent" />
                </div>
                <h3 className="font-bold text-lg">Гарантия качества</h3>
                <p className="text-muted-foreground text-sm">Сертифицированная продукция</p>
              </div>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="item-1" className="bg-background px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold">
                  Какие способы доставки доступны?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы доставляем курьером по Москве и МО, а также Почтой России и транспортными компаниями по всей России. Самовывоз доступен из нашего шоурума.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold">
                  Сколько стоит доставка?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  По Москве в пределах МКАД — 300₽, при заказе от 3000₽ доставка бесплатно. По России стоимость рассчитывается индивидуально.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold">
                  Какие способы оплаты принимаете?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Наличными курьеру, банковской картой онлайн, переводом на карту, оплата при самовывозе.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold">
                  Можно ли вернуть товар?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, возврат возможен в течение 14 дней с момента получения, если товар не использовался и сохранена упаковка.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <div className="text-2xl">🎨</div>
                <h3 className="text-xl font-bold">АкваГрим</h3>
              </div>
              <p className="text-background/70 text-sm">
                Профессиональные материалы для аквагрима с доставкой по всей России
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm text-background/70">
                <p>📞 +7 (495) 123-45-67</p>
                <p>✉️ info@aquagrim.ru</p>
                <p>🕐 Пн-Пт: 9:00 - 18:00</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Мы в соцсетях</h4>
              <div className="flex gap-3 justify-center md:justify-start">
                <Button variant="ghost" size="icon" className="hover:bg-background/20">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-background/20">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-background/20">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-6 text-center text-sm text-background/60">
            © 2024 АкваГрим. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;