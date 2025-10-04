import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export default function Header() {
  const [cartCount] = useState(0);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🎨</div>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              АкваГрим
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="font-medium hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#catalog" className="font-medium hover:text-primary transition-colors">
              Каталог
            </a>
            <a href="#delivery" className="font-medium hover:text-primary transition-colors">
              Доставка и оплата
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={22} />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
