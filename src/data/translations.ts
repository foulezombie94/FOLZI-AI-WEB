import { Locale } from "@/context/LanguageContext";

export interface TranslationDictionary {
  nav: {
    vinted: string;
    leboncoin: string;
    priceGuide: string;
    sellerGuides: string;
    tryNow: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    subtitle: string;
    ctaDownload: string;
    ctaDemo: string;
    metricMoney: string;
    metricMoneyDesc: string;
    metricRating: string;
    metricRatingDesc: string;
    metricAccuracy: string;
    metricAccuracyDesc: string;
    compatiblePlatforms: string;
  };
  benefits: {
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    items: Array<{
      tag: string;
      title: string;
      description: string;
      points: string[];
    }>;
  };
  keyFigures: {
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    figures: Array<{
      stat: string;
      title: string;
      desc: string;
    }>;
  };
  successStory: {
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    beforeTag: string;
    beforeText: string;
    afterTag: string;
    afterText: string;
    quote: string;
    storyParagraph1: string;
    storyParagraph2: string;
    authorName: string;
    authorRole: string;
  };
}

export const TRANSLATIONS: Record<Locale, TranslationDictionary> = {
  fr: {
    nav: {
      vinted: "Vinted IA",
      leboncoin: "Leboncoin IA",
      priceGuide: "Argus Prix",
      sellerGuides: "Guides Vendeurs",
      tryNow: "Essayer maintenant",
    },
    hero: {
      badge: "L'INTELLIGENCE ARTIFICIELLE VENDEUR DE RÉFÉRENCE",
      headlinePart1: "Vendez ",
      headlineHighlight: "3× plus cher et 10× plus vite",
      headlinePart2: " avec l’IA.",
      subtitle: "L'intelligence artificielle n°1 pour booster vos ventes sur Vinted, Leboncoin et eBay. 1 photo suffit pour identifier le vêtement, estimer le prix idéal et générer l'annonce parfaite en 2 secondes.",
      ctaDownload: "Télécharger l'application (APK)",
      ctaDemo: "Tester le simulateur en direct",
      metricMoney: "1,2 M€",
      metricMoneyDesc: "générés par nos utilisateurs",
      metricRating: "4,9 / 5",
      metricRatingDesc: "sur les stores d'applications",
      metricAccuracy: "98,7%",
      metricAccuracyDesc: "de précision de vision IA",
      compatiblePlatforms: "Compatible avec vos plateformes préférées :",
    },
    benefits: {
      titlePart1: "Pourquoi plus de 15 000 vendeurs ",
      titleHighlight: "choisissent Folzi AI",
      subtitle: "Développé pour les passionnés de seconde main, les adeptes du vide-dressing et les revendeurs pro.",
      items: [
        {
          tag: "-90% d'effort",
          title: "Gain de temps record",
          description: "Fini la corvée d'écriture. Prenez une photo, notre IA analyse la coupe, la couleur, la matière et rédige l'annonce complète en 1,8 seconde.",
          points: [
            "Génération d'annonce en 1,8 seconde",
            "Détection auto de la marque et matière",
            "Mise en forme soignée et captivante",
          ],
        },
        {
          tag: "+35% de marge",
          title: "Prix de vente optimisé",
          description: "Ne bradez plus vos pièces sans le savoir. Notre algorithme scrute des millions de ventes réelles pour vous suggérer le prix le plus rentable.",
          points: [
            "Argus calculé sur les ventes réelles",
            "Fourchette de prix basse / idéale / haute",
            "Moins de négociations agressives",
          ],
        },
        {
          tag: "+240% de vues",
          title: "Visibilité maximale",
          description: "Titres optimisés avec les mots-clés exacts et hashtags tendances que les acheteurs tapent dans la barre de recherche pour remonter en tête.",
          points: [
            "Hashtags tendances automatiques",
            "Mots-clés prioritaires pour l'algorithme",
            "Export en 1 clic vers vos plateformes",
          ],
        },
      ],
    },
    keyFigures: {
      titlePart1: "Meilleure appli de vente sur ",
      titleHighlight: "smartphone",
      subtitle: "Des performances prouvées sur des milliers de ventes réelles à travers l'Europe.",
      figures: [
        {
          stat: "98,7%",
          title: "Précision de reconnaissance IA",
          desc: "Identification instantanée de la coupe, marque et matière.",
        },
        {
          stat: "1,8 s",
          title: "Temps moyen par annonce",
          desc: "Photo, description, titre et prix générés en un éclair.",
        },
        {
          stat: "+240%",
          title: "De visibilité sur les plateformes",
          desc: "Grâce aux mots-clés et hashtags prioritaires pour les algorithmes.",
        },
      ],
    },
    successStory: {
      titlePart1: "Comment Sarah a généré ",
      titleHighlight: "1 840 € en 14 jours",
      subtitle: "Découvrez comment une vendeuse a désencombré son dressing et rentabilisé chaque pièce sans stress.",
      beforeTag: "Avant",
      beforeText: "Placard encombré (45 articles)",
      afterTag: "Après",
      afterText: "100% vendu en 14 jours ⚡",
      quote: "À 32 ans, maman de deux enfants, je n'avais jamais le temps de rédiger 40 annonces sur Vinted... Folzi AI a tout changé !",
      storyParagraph1: "« Entre le travail et les enfants, mes vêtements s'accumulaient. Je remettais toujours à plus tard la corvée des descriptions et du choix des prix. »",
      storyParagraph2: "« Avec Folzi AI, j'ai photographié 45 pièces en une seule soirée devant la télévision. En 14 jours, 100% de mes articles ont été vendus, avec un gain net de 1 840 € ! »",
      authorName: "Sarah M.",
      authorRole: "Vendeuse occasionnelle Vinted & Leboncoin (Lyon)",
    },
  },

  en: {
    nav: {
      vinted: "Vinted AI",
      leboncoin: "Leboncoin AI",
      priceGuide: "Price Guide",
      sellerGuides: "Seller Guides",
      tryNow: "Try now",
    },
    hero: {
      badge: "THE BENCHMARK ARTIFICIAL INTELLIGENCE FOR SELLERS",
      headlinePart1: "Sell ",
      headlineHighlight: "3× faster and at higher prices",
      headlinePart2: " with AI.",
      subtitle: "The #1 artificial intelligence to boost your sales on Vinted, Leboncoin, Wallapop, and eBay. 1 photo is all it takes to identify the garment, calculate the optimal price, and write the winning listing in 2 seconds.",
      ctaDownload: "Download mobile app (APK)",
      ctaDemo: "Test live simulator",
      metricMoney: "€1.2M",
      metricMoneyDesc: "generated by our sellers",
      metricRating: "4.9 / 5",
      metricRatingDesc: "average app store rating",
      metricAccuracy: "98.7%",
      metricAccuracyDesc: "computer vision precision",
      compatiblePlatforms: "Compatible with your favorite resale platforms:",
    },
    benefits: {
      titlePart1: "Why over 15,000 sellers ",
      titleHighlight: "choose Folzi AI",
      subtitle: "Engineered for second-hand fashion lovers, wardrobe declutterers, and pro resellers.",
      items: [
        {
          tag: "-90% effort",
          title: "Record Time Saved",
          description: "No more typing chores. Snap a photo: our AI inspects cut, fabric, and colors to draft compelling listings in 1.8 seconds.",
          points: [
            "Complete listing generated in 1.8s",
            "Automatic brand, cut & material detection",
            "Persuasive, clean buyer-ready formatting",
          ],
        },
        {
          tag: "+35% profit",
          title: "Optimized Sale Price",
          description: "Never undersell valuable clothes again. Our pricing algorithm cross-references millions of verified sales to find the sweet spot.",
          points: [
            "Fair market valuation from real sales data",
            "Recommended low / ideal / high ranges",
            "Drastically reduces lowball negotiations",
          ],
        },
        {
          tag: "+240% views",
          title: "Maximum Exposure",
          description: "Algorithm-tailored titles with exact search keywords and trending hashtags that buyers type to discover your items first.",
          points: [
            "Automatic trending buyer hashtags",
            "High-intent keyword placement",
            "1-click export to all resale platforms",
          ],
        },
      ],
    },
    keyFigures: {
      titlePart1: "Top-rated resale app on ",
      titleHighlight: "smartphone",
      subtitle: "Proven results across thousands of real resale transactions throughout Europe.",
      figures: [
        {
          stat: "98.7%",
          title: "AI Recognition Accuracy",
          desc: "Instant cut, brand, and fabric identification.",
        },
        {
          stat: "1.8 s",
          title: "Average Time per Listing",
          desc: "Photo, description, title, and pricing created in a flash.",
        },
        {
          stat: "+240%",
          title: "More Platform Impressions",
          desc: "Driven by algorithm-friendly search keywords and viral tags.",
        },
      ],
    },
    successStory: {
      titlePart1: "How Sarah made ",
      titleHighlight: "€1,840 in 14 days",
      subtitle: "See how one seller decluttered her entire wardrobe and cashed in on every single item without friction.",
      beforeTag: "Before",
      beforeText: "Cluttered wardrobe (45 items)",
      afterTag: "After",
      afterText: "100% sold in 14 days ⚡",
      quote: "At 32, as a working mom of two, I never had hours to write 40 listings on Vinted... Folzi AI changed everything!",
      storyParagraph1: "“Between my job and the kids, clothes were piling up in the dressing room. I kept postponing the hassle of measuring, pricing, and writing descriptions.”",
      storyParagraph2: "“With Folzi AI, I photographed 45 items in a single evening while watching TV. Within 14 days, 100% of my items were sold, bringing in €1,840 directly to my bank account!”",
      authorName: "Sarah M.",
      authorRole: "Occasional Vinted & eBay seller",
    },
  },

  es: {
    nav: {
      vinted: "Vinted IA",
      leboncoin: "Leboncoin IA",
      priceGuide: "Tasador Precios",
      sellerGuides: "Guías Vendedor",
      tryNow: "Probar ahora",
    },
    hero: {
      badge: "LA INTELIGENCIA ARTIFICIAL DE REFERENCIA PARA VENDEDORES",
      headlinePart1: "Vende ",
      headlineHighlight: "3× más rápido y a mejor precio",
      headlinePart2: " con IA.",
      subtitle: "La inteligencia artificial n.º 1 para impulsar tus ventas en Vinted, Wallapop y eBay. 1 sola foto basta para identificar la prenda, calcular el precio óptimo y redactar el anuncio ganador en 2 segundos.",
      ctaDownload: "Descargar la app móvil (APK)",
      ctaDemo: "Probar simulador en vivo",
      metricMoney: "1,2 M€",
      metricMoneyDesc: "generados por nuestros vendedores",
      metricRating: "4,9 / 5",
      metricRatingDesc: "valoración en tiendas de apps",
      metricAccuracy: "98,7%",
      metricAccuracyDesc: "de precisión visual IA",
      compatiblePlatforms: "Compatible con tus plataformas de reventa favoritas:",
    },
    benefits: {
      titlePart1: "Por qué más de 15.000 vendedores ",
      titleHighlight: "eligen Folzi AI",
      subtitle: "Desarrollado para amantes de la segunda mano, vaciadores de armario y vendedores pro.",
      items: [
        {
          tag: "-90% esfuerzo",
          title: "Ahorro de tiempo récord",
          description: "Se acabó la pereza de redactar. Toma una foto y nuestra IA analiza corte, tejido y color para redactar el anuncio completo en 1,8 segundos.",
          points: [
            "Anuncio generado en 1,8 segundos",
            "Detección auto de marca, corte y material",
            "Redacción profesional lista para vender",
          ],
        },
        {
          tag: "+35% margen",
          title: "Precio de venta optimizado",
          description: "No malvendas tus prendas sin saberlo. Nuestro algoritmo analiza millones de ventas reales para sugerirte el precio más rentable.",
          points: [
            "Tasación basada en ventas reales",
            "Horquilla de precio baja / ideal / alta",
            "Menos ofertas absurdas y regateos",
          ],
        },
        {
          tag: "+240% visitas",
          title: "Máxima visibilidad",
          description: "Títulos optimizados con palabras clave exactas y hashtags en tendencia que buscan los compradores para salir siempre primero.",
          points: [
            "Hashtags virales automáticos",
            "Palabras clave prioritarias para el algoritmo",
            "Exportación en 1 clic a tus plataformas",
          ],
        },
      ],
    },
    keyFigures: {
      titlePart1: "La mejor app de reventa en ",
      titleHighlight: "smartphone",
      subtitle: "Rendimiento probado en miles de ventas reales en toda Europa.",
      figures: [
        {
          stat: "98,7%",
          title: "Precisión de reconocimiento IA",
          desc: "Identificación instantánea de corte, marca y tejido.",
        },
        {
          stat: "1,8 s",
          title: "Tiempo medio por anuncio",
          desc: "Foto, descripción, título y precio listos en un instante.",
        },
        {
          stat: "+240%",
          title: "Más visibilidad en plataformas",
          desc: "Gracias a palabras clave y hashtags optimizados para los algoritmos.",
        },
      ],
    },
    successStory: {
      titlePart1: "Cómo Sarah generó ",
      titleHighlight: "1.840 € en 14 días",
      subtitle: "Descubre cómo una vendedora vació su armario y rentabilizó cada prenda sin estrés.",
      beforeTag: "Antes",
      beforeText: "Armario abarrotado (45 prendas)",
      afterTag: "Después",
      afterText: "100% vendido en 14 días ⚡",
      quote: "A mis 32 años y con dos niños, nunca tenía tiempo para publicar 40 anuncios en Vinted... ¡Folzi AI lo cambió todo!",
      storyParagraph1: "«Entre el trabajo y los niños, la ropa se acumulaba. Siempre posponía la molestia de medir, fijar precios y redactar anuncios.»",
      storyParagraph2: "«Con Folzi AI, fotografié 45 prendas en una sola noche viendo la tele. En 14 días vendí el 100% de mis artículos, ¡ingresando 1.840 € netos!»",
      authorName: "Sarah M.",
      authorRole: "Vendedora en Vinted y Wallapop",
    },
  },
};
