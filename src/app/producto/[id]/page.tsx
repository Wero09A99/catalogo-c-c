import { getProductById } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';


interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image 
            src={product.imagen} 
            alt={product.nombre} 
            width={600}
            height={600}
            className="w-full h-96 object-contain rounded-lg"
          />
          
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {product.nombre}
            </h1>
            
            <div className="space-y-4">
              <p className="text-gray-600">{product.descripcion}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 text-2xl font-bold">
                  ${product.precio.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500">Código: {product.codigo}</span>
              </div>
              
              <div className="space-y-2">
                <p><strong>Categoría:</strong> {product.categoria}</p>
                <p><strong>Proveedor:</strong> {product.proveedor}</p>
                <a 
                  href={product.enlaceNorma} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Ver norma {product.norma}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}