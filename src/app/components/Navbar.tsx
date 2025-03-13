'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (query.trim()) {
      router.push(`/busqueda?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <nav className="bg-black fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <h1 className="text-2xl font-bold text-yellow-500 cursor-pointer">
            C & C
            </h1>
          </Link>

          <form onSubmit={handleSearch} className="flex-grow mx-4">
            <input
              type="text"
              placeholder="Buscar por código o nombre..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white"
            />
          </form>

          <div className="flex items-center space-x-4">
            <Link href="/contacto">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded transition-colors">
                Contacto
              </button>
            </Link>
            <button onClick={() => handleSearch()}>Buscar</button>
          </div>
        </div>
      </div>
    </nav>
  );
}