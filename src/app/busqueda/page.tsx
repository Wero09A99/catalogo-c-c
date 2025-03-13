import { getAllProducts } from '@/lib/data';
import ProductGrid from '../components/ProductGrid';

interface SearchPageProps {
  searchParams?: { query?: string }; // Hacer `query` opcional
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const allProducts = getAllProducts();
  const query = searchParams?.query?.toLowerCase() || ''; // Evitar error si es undefined

  const filtered = allProducts.filter(p =>
    p.nombre.toLowerCase().includes(query) ||
    p.codigo.toLowerCase().includes(query)
  );

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 my-8">
          Resultados para: {query || 'Todos los productos'}
        </h1>
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
