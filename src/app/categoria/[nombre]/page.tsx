import { notFound } from 'next/navigation';
import { getCategoryData } from '@/lib/data';
import ProductGrid from '@/app/components/ProductGrid';

interface CategoryPageProps {
  params: { nombre: string };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const products = getCategoryData(params.nombre);
  
  if (!products.length) {
    notFound();
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-yellow-500 mb-8 text-center">
          {params.nombre.toUpperCase()}
        </h1>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}