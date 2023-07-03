export interface StoredFile {
  id: string;
  name: string;
  url: string;
}

export interface CartItem {
  productId: number;
  quantity: number;
  price: number;
}

export interface CarouselProps {
  id: string;
  href: string;
  title: string;
  imageUrl: string;
}

export interface ProductsPageProps {}

export interface ProductsCardProps {}
