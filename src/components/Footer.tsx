import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grille responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Bloc 1 - Identité */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">MCT Matériaux</h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Fournisseur de confiance pour vos matériaux de construction et solutions d’aménagement extérieur.
            </p>
          </div>

          {/* Bloc 2 - Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition">Accueil</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-white transition">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Bloc 3 - Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>1 Rue de l’Exemple, 12345 Ville</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1" />
                <span>contact@mct-materiaux.fr</span>
              </li>
            </ul>
          </div>

          {/* Bloc 4 - Réseaux sociaux */}
          <div>
            <h3 className="text-white font-semibold mb-4">Suivez-nous</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">Facebook</a>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; {year} MCT Matériaux. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
