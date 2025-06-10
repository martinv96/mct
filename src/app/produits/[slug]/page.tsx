import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const categories = [
  { id: 'gros-oeuvre', title: 'Gros œuvre', img: '/produits/gros-oeuvre.jpg', desc: 'Blocs, briques, ferraillage, étanchéité...' },
  { id: 'bois', title: 'Bois & Charpente', img: '/produits/bois.jpg', desc: 'Madriers, chevrons, bois lamellé-collé...' },
  { id: 'couverture', title: 'Couverture', img: '/produits/couverture.jpg', desc: 'Tuiles, gouttières, fenêtres de toit...' },
  { id: 'isolation', title: 'Isolation & Cloisons', img: '/produits/isolation.jpg', desc: 'Panneaux, plaques, isolants thermiques...' },
  { id: 'exterieurs', title: 'Aménagements extérieurs', img: '/produits/exterieur.jpg', desc: 'Dallage, clôtures, pierres naturelles...' },
  { id: 'outillage', title: 'Outillage & Quincaillerie', img: '/produits/quincaillerie.jpg', desc: 'Outils de chantier, visserie, EPI...' },
]

const productsByCategory: Record<string, { id: number; title: string; img: string; desc: string }[]> = {
  'gros-oeuvre': [
    { id: 1, title: 'Bloc béton', img: '/produits/gros-oeuvre/bloc-beton.jpg', desc: 'Bloc en béton pour construction.' },
    { id: 2, title: 'Brique rouge', img: '/produits/gros-oeuvre/brique.jpg', desc: 'Brique traditionnelle.' },
    { id: 3, title: 'Ferraillage', img: '/produits/gros-oeuvre/acier.jpg', desc: "Barres d'acier pour renfort." },
  ],
  'bois': [
    { id: 1, title: 'Madrier', img: '/produits/bois/madrier.jpg', desc: 'Madrier en bois massif.' },
    { id: 2, title: 'Chevrons', img: '/produits/bois/chevrons.jpg', desc: 'Chevrons pour charpente.' },
    { id: 3, title: 'Bois lamellé-collé', img: '/produits/bois/bois-lamelle-colle.jpg', desc: 'Bois pour structures solides.' },
  ],
  'couverture': [
    { id: 1, title: 'Tuile terre cuite', img: '/produits/couverture/tuile-terre-cuite.jpg', desc: 'Tuile traditionnelle.' },
    { id: 2, title: 'Gouttière aluminium', img: '/produits/couverture/gouttiere.jpg', desc: 'Gouttière résistante.' },
    { id: 3, title: 'Velux', img: '/produits/couverture/velux.jpg', desc: 'Fenêtre de toit.' },
  ],
  'isolation': [
    { id: 1, title: 'Laine de verre', img: '/produits/isolation/laine-de-verre.jpg', desc: 'Isolation thermique et acoustique.' },
    { id: 2, title: 'Panneaux polystyrène', img: '/produits/isolation/panneaux-polystyrene.jpg', desc: 'Isolation rigide.' },
    { id: 3, title: 'Plaques de plâtre', img: '/produits/isolation/plaques-platre.jpg', desc: 'Pour cloisons et plafonds.' },
  ],
  'exterieurs': [
    { id: 1, title: 'Dallage pierre naturelle', img: '/produits/exterieur/dallage-pierre.jpg', desc: 'Pour terrasses et allées.' },
    { id: 2, title: 'Clôture bois', img: '/produits/exterieur/cloture-bois.jpg', desc: 'Clôture esthétique et robuste.' },
    { id: 3, title: 'Pavés', img: '/produits/exterieur/paves.jpg', desc: 'Pavés pour allées et jardins.' },
  ],
  'outillage': [
    { id: 1, title: 'Perceuse électrique', img: '/produits/quincaillerie/perceuse.jpg', desc: 'Outil indispensable.' },
    { id: 2, title: 'Visserie inox', img: '/produits/quincaillerie/visserie.jpg', desc: 'Vis, boulons, chevilles.' },
    { id: 3, title: 'Equipement de protection', img: '/produits/quincaillerie/epi.jpg', desc: 'Casques, gants, lunettes.' },
  ],
}

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
}

interface Params {
  slug: string
}

export async function generateStaticParams(): Promise<Params[]> {
  return categories.map(category => ({ slug: category.id }))
}

export default async function CategoryPage({ params }: { params: Params }) {
  const category = categories.find(cat => cat.id === params.slug)
  if (!category) return notFound()

  const products = productsByCategory[params.slug] ?? []

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">{category.title}</h1>
      <p className="mb-10 text-gray-600">{category.desc}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map(product => (
          <Link
            key={product.id}
            href={`/produits/${category.id}/${slugify(product.title)}`}
            className="group border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="mt-2 text-gray-600">{product.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
