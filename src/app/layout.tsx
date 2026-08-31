import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Folzi AI — L'IA qui transforme vos photos en ventes sur Vinted & Leboncoin",
  description: "Prenez 1 photo : l'intelligence artificielle génère l'annonce parfaite, le titre SEO viral, les hashtags et le prix argus en 2 secondes.",
  keywords: ["vinted", "leboncoin", "ia", "revendeur", "vendre vetement", "scan photo", "estimation prix"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="w-full bg-[#06040A] text-white">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&family=Silkscreen:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="w-full min-h-screen bg-[#06040A] text-white antialiased">
        {children}
      </body>
    </html>
  );
}