import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

/* -------------------------------------------------------------------------- */
/*                               Types & helpers                              */
/* -------------------------------------------------------------------------- */
type RouteParams = { slug: string }

const productsByCategory: Record<
  string,
  { id: number; title: string; img: string; desc: string }[]
> = {
  'gros-oeuvre': [
    { id: 1, title: 'Bloc béton', img: '/produits/gros-oeuvre/Bloc-beton.jpg', desc: 'Bloc en béton pour construction.' },
    { id: 2, title: 'Brique rouge', img: '/produits/gros-oeuvre/Brique.jpg', desc: 'Brique traditionnelle.' },
    { id: 3, title: 'Ferraillage', img: '/produits/gros-oeuvre/Acier.jpg', desc: "Barres d'acier pour renfort." },
  ],
  bois: [
    { id: 1, title: 'Madrier', img: '/produits/bois/madrier.jpg', desc: 'Madrier en bois massif.' },
    { id: 2, title: 'Chevrons', img: '/produits/bois/chevrons.jpg', desc: 'Chevrons pour charpente.' },
    { id: 3, title: 'Bois lamellé-collé', img: '/produits/bois/bois-lamelle-colle.jpg', desc: 'Bois pour structures solides.' },
  ],
  couverture: [
    { id: 1, title: 'Tuile terre cuite', img: '/produits/couverture/tuile-terre-cuite.jpg', desc: 'Tuile traditionnelle.' },
    { id: 2, title: 'Gouttière aluminium', img: '/produits/couverture/gouttiere.jpg', desc: 'Gouttière résistante.' },
    { id: 3, title: 'Velux', img: '/produits/couverture/velux.jpg', desc: 'Fenêtre de toit.' },
  ],
  isolation: [
    { id: 1, title: 'Laine de verre', img: '/produits/isolation/laine-de-verre.jpg', desc: 'Isolation thermique et acoustique.' },
    { id: 2, title: 'Panneaux polystyrène', img: '/produits/isolation/panneaux-polystyrene.jpg', desc: 'Isolation rigide.' },
    { id: 3, title: 'Plaques de plâtre', img: '/produits/isolation/plaques-platre.jpg', desc: 'Pour cloisons et plafonds.' },
  ],
  exterieurs: [
    { id: 1, title: 'Dallage pierre naturelle', img: '/produits/exterieur/dallage-pierre.jpg', desc: 'Pour terrasses et allées.' },
    { id: 2, title: 'Clôture bois', img: '/produits/exterieur/cloture-bois.jpg', desc: 'Clôture esthétique et robuste.' },
    { id: 3, title: 'Pavés', img: '/produits/exterieur/paves.jpg', desc: 'Pavés pour allées et jardins.' },
  ],
  outillage: [
    { id: 1, title: 'Perceuse électrique', img: '/produits/quincaillerie/perceuse.jpg', desc: 'Outil indispensable.' },
    { id: 2, title: 'Visserie inox', img: '/produits/quincaillerie/visserie.jpg', desc: 'Vis, boulons, chevilles.' },
    { id: 3, title: 'Équipement de protection', img: '/produits/quincaillerie/epi.jpg', desc: 'Casques, gants, lunettes.' },
  ],
}

const slugify = (txt: string) =>
  txt.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')

/* -------------------------------------------------------------------------- */
/*                     Static params (SSG) pour chaque slug                  */
/* -------------------------------------------------------------------------- */
export function generateStaticParams(): RouteParams[] {
  return Object.keys(productsByCategory).map(slug => ({ slug }))
}

/* -------------------------------------------------------------------------- */
/*                            Métadonnées dynamiques                          */
/* -------------------------------------------------------------------------- */
export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `Produits – ${slug.replace('-', ' ')}`,
    description: `Catalogue des produits pour la catégorie ${slug}.`,
  }
}

/* -------------------------------------------------------------------------- */
/*                               Page catégorie                               */
/* -------------------------------------------------------------------------- */
export default async function CategoryPage(
  { params }: { params: Promise<RouteParams> }
) {
  const { slug } = await params

  const list = productsByCategory[slug]
  if (!list) return notFound()

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-8">
      <h1 className="text-4xl font-bold mb-10 capitalize">
        {slug.replace('-', ' ')}
      </h1>

      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => (
          <Link
            key={p.id}
            href={`/produits/${slug}/${slugify(p.title)}`}
            className="group border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image optimisée */}
            <div className="relative w-full h-40">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Contenu */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  )
}
