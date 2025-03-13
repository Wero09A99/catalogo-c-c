import Hero from './components/Hero';
import CategorySlider from './components/CategorySlider';
import { getCategories, getAllProducts } from '@/lib/data';
import ImageCarousel from './components/ImageCarrousel';

export default async function HomePage() {
  const categories = getCategories();
  const products = getAllProducts();
  const carouselImages = products.map(p => p.imagen);

  return (
    <div className="bg-gray-100">
      <Hero href='/catalogo'/>
      <CategorySlider categories={categories} />
      <ImageCarousel images={carouselImages} />
    </div>
  );
}