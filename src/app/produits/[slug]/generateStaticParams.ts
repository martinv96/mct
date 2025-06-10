// app/produits/[slug]/generateStaticParams.ts
export function generateStaticParams() {
  return [
    { slug: 'gros-oeuvre' },
    { slug: 'bois' },
    { slug: 'couverture' },
    { slug: 'isolation' },
    { slug: 'exterieurs' },
    { slug: 'outillage' }
  ]
}
