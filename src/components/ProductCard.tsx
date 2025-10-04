import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export default function ProductCard({
  name,
  price,
  oldPrice,
  image,
  rating,
  reviews,
  inStock,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 animate-fade-in">
      <div className="relative overflow-hidden bg-muted/30">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {oldPrice && (
          <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground font-bold">
            -{Math.round((1 - price / oldPrice) * 100)}%
          </Badge>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Нет в наличии</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-sm">{rating}</span>
          </div>
          <span className="text-muted-foreground text-sm">({reviews} отзывов)</span>
        </div>
        
        <h3 className="font-medium text-base leading-tight line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>
        
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">{price} ₽</span>
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">{oldPrice} ₽</span>
          )}
        </div>
        
        <Button 
          className="w-full font-semibold" 
          disabled={!inStock}
        >
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          В корзину
        </Button>
      </CardContent>
    </Card>
  );
}
