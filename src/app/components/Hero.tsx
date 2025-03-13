import Link from "next/link";
import { GeneralTypes } from "@/types/GeneralTypes";
import Image from "next/image"

export default function Hero({ href }: GeneralTypes) {
  return (
    <div className="relative h-screen flex items-center justify-center bg-black">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner.jpg')",
        }}
      />
      {/* Capa de degradado */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6">
          Protección Industrial de Calidad
        </h1>
        <p className="text-xl mb-8">
          Equipos de seguridad certificados que salvan vidas
        </p>
        <Link href={href}>
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full hover:bg-yellow-600 transition">
            Ver Catálogo
          </button>
        </Link>
      </div>
    </div>
  );
}
