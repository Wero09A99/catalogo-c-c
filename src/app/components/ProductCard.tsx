import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Image
        src={product.imagen}
        alt={product.nombre}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-4 text-gray-900">
          {product.nombre}
        </h3>
        <div className="mb-4">
          <span className="text-yellow-500 font-bold text-xl">
            ${product.precio.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>Código: {product.codigo}</span>

          <Link href={`/producto/${product.id}`} target="_blank" rel='noopener noreferrer'>
            <button
              className="text-blue-500 p-2 rounded-xl border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
            >
              Ver detalles
            </button>
          </Link>
        </div>
      </div>
    </div>

  );
}