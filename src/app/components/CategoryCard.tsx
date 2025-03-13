import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/types/GeneralTypes'

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categoria/${category.nombre}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <Image
          src={category.imagen}
          alt={category.nombre}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            {category.nombre.charAt(0).toUpperCase() + category.nombre.slice(1)}
          </h3>
        </div>
      </div>
    </Link>
  );
}