import "./globals.css";
import type { Metadata } from "next";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "MCT Matériaux",
  description: "Fournisseur de matériaux de construction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning={true}>
        <div className="bg-white text-gray-900 min-h-screen">
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
      </body>
    </html>
  );
}
