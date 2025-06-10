import Image from 'next/image'
import { notFound } from 'next/navigation'

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
  product: string
}

export async function generateStaticParams(): Promise<Params[]> {
  return Object.entries(productsByCategory).flatMap(([slug, products]) =>
    products.map(product => ({
      slug,
      product: slugify(product.title),
    }))
  )
}

// La correction : enlever async sur le composant page et typage simple pour params
export default function ProductDetail({ params }: { params: Params }) {
  const products = productsByCategory[params.slug]
  if (!products) return notFound()

  const product = products.find(p => slugify(p.title) === params.product)
  if (!product) return notFound()

  return (
    <div className="max-w-5xl mx-auto py-16 px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md border border-gray-200">
          <Image
            src={product.img}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div>
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">{product.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{product.desc}</p>

          <div className="mt-8">
            <button
              className="px-6 py-3 bg-blue-700 text-white rounded-xl shadow-md hover:bg-blue-800 transition-colors duration-300"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
