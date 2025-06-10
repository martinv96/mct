import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/banniere.jpg"
          alt="Bannière MCT Matériaux"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay dégradé */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 sm:px-12 lg:px-24 text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl drop-shadow-md">
          MCT Matériaux
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl text-gray-200 drop-shadow-md">
          Votre partenaire de confiance pour la construction, la rénovation et l’aménagement extérieur.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/services"
            className="bg-white text-gray-900 font-semibold py-2 px-6 rounded-full shadow hover:bg-gray-100 transition"
          >
            Nos services
          </a>
          <a
            href="/contact"
            className="border border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-gray-900 transition"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
