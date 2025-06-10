// src/components/ProductsSection.tsx
import Image from 'next/image'
import Link from 'next/link'

const categories = [
  { id: 'gros-oeuvre', title: 'Gros œuvre', img: '/produits/gros-oeuvre.jpg', desc: 'Blocs, briques, ferraillage, étanchéité...' },
  { id: 'bois', title: 'Bois & Charpente', img: '/produits/bois.jpg', desc: 'Madriers, chevrons, bois lamellé-collé...' },
  { id: 'couverture', title: 'Couverture', img: '/produits/couverture.jpg', desc: 'Tuiles, gouttières, fenêtres de toit...' },
  { id: 'isolation', title: 'Isolation & Cloisons', img: '/produits/isolation.jpg', desc: 'Panneaux, plaques, isolants thermiques...' },
  { id: 'exterieurs', title: 'Aménagements extérieurs', img: '/produits/exterieur.jpg', desc: 'Dallage, clôtures, pierres naturelles...' },
  { id: 'outillage', title: 'Outillage & Quincaillerie', img: '/produits/quincaillerie.jpg', desc: 'Outils de chantier, visserie, EPI...' },
]

export default function ProductsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Produits</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(cat => (
            <Link key={cat.id} href={`/produits/${cat.id}`} className="group block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <div className="relative h-48">
                <Image src={cat.img} alt={cat.title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">{cat.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
