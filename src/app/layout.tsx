import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Folzi AI -- Vendez 3x plus vite sur Vinted & Leboncoin",
  description: "L’intelligence artificielle qui transforme une simple photo en annonce virale et vend votre dressing en 24h.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full w-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Silkscreen:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-full w-full overflow-hidden bg-black antialiased">
        {children}
      </body>
    </html>
  );
}