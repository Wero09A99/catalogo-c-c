import CategoryCard from '@/app/components/CategoryCard';
import { getCategories } from '@/lib/data';

export default async function CategoriesPage() {
  const categories = getCategories();

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Todas las categorías</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.nombre} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}