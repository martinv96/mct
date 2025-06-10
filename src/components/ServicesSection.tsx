// src/components/ServicesSection.tsx
export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-100 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Vente de matériaux</h3>
            <p>Un large choix de matériaux pour le bâtiment, le jardin et l’aménagement extérieur.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Livraison rapide</h3>
            <p>Nous livrons directement sur vos chantiers dans toute la région.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Conseils personnalisés</h3>
            <p>Une équipe à votre écoute pour vous guider dans vos achats.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
