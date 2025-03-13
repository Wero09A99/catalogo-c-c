
import { getAllProducts } from '@/lib/data';
import ProductGrid from '../components/ProductGrid';

export default async function CatalogPage() {
  const products = getAllProducts();
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Catálogo Completo</h1>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}