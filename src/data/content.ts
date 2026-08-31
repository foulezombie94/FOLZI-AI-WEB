export interface DemoItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  condition: string;
  estimatedPrice: number;
  marketRange: string;
  photoUrl: string;
  vintedTitle: string;
  vintedDescription: string;
  leboncoinTitle: string;
  leboncoinDescription: string;
  keywords: string[];
  tips: string;
}

export const DEMO_ITEMS: DemoItem[] = [
  {
    id: "jacket",
    name: "Veste Workwear Vintage",
    category: "Vestes et manteaux",
    brand: "Carhartt WIP",
    condition: "Très bon état",
    estimatedPrice: 48,
    marketRange: "42 € – 55 €",
    photoUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=85",
    vintedTitle: "Veste Workwear Vintage Kaki Carhartt - Coupe Boxy M",
    vintedDescription: "Veste de travail vintage en toile de coton épaisse de qualité supérieure. Coupe droite intemporelle, poches utilitaires plaquées et boutons métalliques siglés. Pièce authentique sans accroc ni tâche. Idéale pour look streetwear / workwear mi-saison.",
    leboncoinTitle: "Veste Carhartt Vintage taille M - État impeccable",
    leboncoinDescription: "Bonjour, je vends cette veste Carhartt authentique en très bon état. Toile robuste, fermeture à boutons, 2 grandes poches. Remise en main propre possible ou envoi soigné via Leboncoin.",
    keywords: ["carhartt", "workwear", "vintage", "kaki", "streetwear", "coton", "oversize"],
    tips: "Mentionner les mesures exactes (aisselle à aisselle) permet de vendre 40% plus vite."
  },
  {
    id: "sneakers",
    name: "Baskets New Balance 530",
    category: "Chaussures",
    brand: "New Balance",
    condition: "Très bon état",
    estimatedPrice: 65,
    marketRange: "58 € – 75 €",
    photoUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
    vintedTitle: "New Balance 530 White Silver Metallic - Pointure 42",
    vintedDescription: "New Balance 530 en cuir synthétique et mesh respirant. Modèle ultra recherché avec amorti ABZORB pour un confort absolu. Semelles extérieures en excellent état, boîte d'origine incluse. Nettoyées et désinfectées avant envoi.",
    leboncoinTitle: "New Balance 530 White/Silver T42 avec boîte",
    leboncoinDescription: "Paire de New Balance 530 authentiques taille 42. Portées très peu, aucun défaut d'usure. Vendu avec boîte d'origine. Envoi rapide et soigné ou remise en main propre.",
    keywords: ["newbalance", "nb530", "running", "y2k", "silver", "sneakers", "streetwear"],
    tips: "Photographier la semelle d'usure et l'étiquette de languette pour rassurer immédiatement les acheteurs."
  },
  {
    id: "decor",
    name: "Lampe Champignon Rétro",
    category: "Maison & Déco",
    brand: "Design Italien 70s",
    condition: "Parfait état",
    estimatedPrice: 75,
    marketRange: "65 € – 90 €",
    photoUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85",
    vintedTitle: "Lampe Champignon Vintage Verre Opaque Orange 70s",
    vintedDescription: "Magnifique lampe d'ambiance forme champignon typique du design space age des années 70. Verre soufflé teinté orange vif, éclairage chaleureux tamisé. Câblage électrique vérifié et parfaitement fonctionnel.",
    leboncoinTitle: "Lampe à poser vintage champignon orange 70s",
    leboncoinDescription: "Superbe lampe champignon vintage en verre orange. Parfait état de fonctionnement, aucun éclat. Belle pièce de collection décoration vintage / rétro. Envoi très protégé avec double emballage bulle.",
    keywords: ["vintage", "spaceage", "lampe", "deco", "design70s", "orange", "loft"],
    tips: "Ajoutez une photo allumée dans une pièce sombre pour faire ressortir l'ambiance."
  },
  {
    id: "dress",
    name: "Robe Midi Lin & Broderies",
    category: "Robes",
    brand: "Sézane",
    condition: "Très bon état",
    estimatedPrice: 85,
    marketRange: "75 € – 95 €",
    photoUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=85",
    vintedTitle: "Robe Midi Lin Écru Sézane - Style Quiet Luxury T38",
    vintedDescription: "Sublime robe midi Sézane en 100% lin écru avec délicates broderies ajourées et boutons en nacre naturelle. Coupe cintrée flatteuse à la taille, tombé fluide. Portée une seule fois pour une cérémonie, état irréprochable sans défaut.",
    leboncoinTitle: "Robe Sézane Lin Écru Taille 38 - Comme neuve",
    leboncoinDescription: "Bonjour, je vends cette magnifique robe Sézane en pur lin écru taille 38. Portée une seule fois. Remise en main propre possible ou expédition soignée protégée.",
    keywords: ["sezane", "quietluxury", "lin", "robemidi", "boheme", "ceremonie", "ecru"],
    tips: "Les pièces Sézane partent en moins de 6h si le titre contient les mots lin et quiet luxury."
  }
];

export const FEATURES = [
  {
    icon: "ScanLine",
    tag: "Vision IA Instantanée",
    title: "1 Seule Photo suffit",
    description: "Prenez en photo votre article. Notre IA de pointe identifie instantanément la marque, le modèle exact, la matière, la coupe et l'état d'usure en 1,8 seconde.",
    gradient: "from-blue-600 to-brand-500",
    highlight: "Précision 98,7%"
  },
  {
    icon: "Sparkles",
    tag: "Rédaction Persuasive",
    title: "Titres & Descriptions qui font vendre",
    description: "Fini la corvée d'écriture. Folzi AI rédige des annonces professionnelles et captivantes avec les mots-clés exacts que les acheteurs tapent dans la barre de recherche.",
    gradient: "from-brand-500 to-purple-600",
    highlight: "+240% de clics"
  },
  {
    icon: "TrendingUp",
    tag: "Argus en Temps Réel",
    title: "Le juste prix sans négociation",
    description: "Notre algorithme analyse des millions de ventes récentes sur Vinted et Leboncoin pour vous suggérer le prix parfait : ni trop bas, ni trop haut, pour vendre en moins de 48h.",
    gradient: "from-purple-600 to-indigo-700",
    highlight: "+35% de marge nette"
  },
  {
    icon: "ShieldCheck",
    tag: "Sécurité & Conformité",
    title: "Filtre Anti-Bannissement",
    description: "Chaque annonce passe par notre censeur IA qui élimine les mots interdits, garantit le respect des CGU Vinted/Leboncoin et protège votre compte vendeur.",
    gradient: "from-emerald-500 to-teal-700",
    highlight: "100% Sûr"
  },
  {
    icon: "Layers",
    tag: "Multi-Plateformes",
    title: "Optimisé Vinted & Leboncoin en 1 clic",
    description: "Format Vinted avec hashtags tendance et mesures, ou format Leboncoin axé proximité et confiance. Choisissez et copiez l'annonce prête à coller.",
    gradient: "from-orange-500 to-brand-500",
    highlight: "Copie 1-clic"
  },
  {
    icon: "Coins",
    tag: "Crédits Flexibles",
    title: "Crédits gratuits & formules illimitées",
    description: "Démarrez 100% gratuitement avec des crédits offerts et des vidéos publicitaires courtes. Passez à Pro pour des centaines de ventes mensuelles sans limite.",
    gradient: "from-brand-600 to-pink-600",
    highlight: "Sans engagement"
  }
];

export const PRICING_TIERS = [
  {
    id: "free",
    name: "Découverte",
    subtitle: "Idéal pour vider son dressing occasionnellement",
    priceMonthly: 0,
    priceYearly: 0,
    period: "gratuit pour toujours",
    badge: null,
    popular: false,
    credits: "4 crédits offerts",
    features: [
      "Scanner IA complet (Photo -> Annonce)",
      "Titres optimisés pour Vinted & Leboncoin",
      "Estimation de prix conseillé",
      "Jusqu'à 4 crédits bonus par jour (pub)",
      "Historique local des brouillons"
    ],
    cta: "Télécharger gratuitement",
    highlightColor: "border-slate-200"
  },
  {
    id: "pro",
    name: "Vendeur Pro",
    subtitle: "Pour les revendeurs réguliers et passionnés",
    priceMonthly: 4.99,
    priceYearly: 3.25, // ~39€ / an (35% off)
    yearlyTotal: 39,
    period: "par mois",
    badge: "Le plus populaire",
    popular: true,
    credits: "250 crédits IA par mois",
    features: [
      "Tout ce qui est inclus dans Découverte",
      "250 générations complètes par mois",
      "Amélioration automatique de la luminosité",
      "Génération instantanée en 1 clic (sans pub)",
      "Export direct vers Vinted et Leboncoin",
      "Support client prioritaire 7j/7"
    ],
    cta: "Commencer avec Pro",
    highlightColor: "border-brand-500"
  },
  {
    id: "pro-plus",
    name: "Pro+ Illimité",
    subtitle: "Pour les friperies, boutiques et power sellers",
    priceMonthly: 9.99,
    priceYearly: 6.58, // ~79€ / an (35% off)
    yearlyTotal: 79,
    period: "par mois",
    badge: "Puissance Maximale",
    popular: false,
    credits: "Générations ILLIMITÉES",
    features: [
      "Tout ce qui est inclus dans Vendeur Pro",
      "Générations & Régénérations illimitées (∞)",
      "Analyse de photos sous angles multiples",
      "Conseils personnalisés de négociation",
      "Accès en avant-première aux nouveaux modèles IA",
      "Accompagnement VIP dédié"
    ],
    cta: "Passer à Pro+ Illimité",
    highlightColor: "border-purple-500"
  }
];

export const TESTIMONIALS = [
  {
    name: "Camille D.",
    role: "Top Vendeuse Vinted (500+ évaluations)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Je passais au moins 15 minutes par vêtement pour mesurer, trouver le modèle et taper l'annonce. Avec Folzi AI, je prends 1 photo et l'annonce est générée en 2 secondes. J'ai vendu 42 articles la semaine dernière !"
  },
  {
    name: "Lucas R.",
    role: "Revendeur Sneakers & Vintage",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "L'estimation de prix est bluffante. L'IA m'a suggéré de vendre un blouson vintage à 65 € alors que j'allais le mettre à 35 €. Vendu en 4 heures sans négociation. L'abonnement Pro est rentabilisé dès le premier jour."
  },
  {
    name: "Élodie & Marc",
    role: "Vente Maison & Dressing Familial",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "La clarté des descriptions et les hashtags générés automatiquement nous ont permis d'avoir 3 fois plus de vues sur Leboncoin. Plus besoin de se casser la tête !"
  }
];

export const STATS = [
  { value: "3x", label: "Plus de vues sur vos annonces" },
  { value: "1.8s", label: "Temps moyen de génération IA" },
  { value: "15 000+", label: "Articles scannés et vendus" },
  { value: "4.9 / 5", label: "Note moyenne des utilisateurs" }
];

export const FAQS = [
  {
    question: "Comment fonctionne le scanner IA de Folzi AI ?",
    answer: "Vous prenez simplement votre vêtement ou objet en photo avec l'application. Notre modèle de vision par ordinateur analyse instantanément la silhouette, les textures, les logos et l'état général pour rédiger une annonce complète optimisée pour les moteurs de recherche de Vinted et Leboncoin."
  },
  {
    question: "L'application fonctionne-t-elle sur iPhone et Android ?",
    answer: "Oui, Folzi AI est 100% compatible avec iOS (iPhone) et Android. Elle tire parti des fonctionnalités natives de votre appareil : caméra haute définition, retour haptique, mode sombre et trousseau sécurisé pour protéger vos données."
  },
  {
    question: "Comment sont calculées les estimations de prix ?",
    answer: "Folzi AI compare votre article avec des milliers de ventes réelles récentes de la même marque, catégorie et état. L'IA vous propose un prix qui maximise votre profit tout en garantissant une vente rapide sous 48 à 72 heures."
  },
  {
    question: "Puis-je modifier l'annonce avant de la publier ?",
    answer: "Absolument ! Folzi AI vous propose un écran d'édition complet où vous pouvez ajuster le titre, la description, les mots-clés, la catégorie, la taille et le prix avant de copier le texte."
  },
  {
    question: "Les crédits sont-ils renouvelés automatiquement ?",
    answer: "Sur les formules Pro, vos 250 crédits sont rechargés automatiquement chaque mois. Sur la formule Pro+, les générations sont illimitées. Sur la formule gratuite, vous pouvez regarder de courtes annonces vidéo pour débloquer des crédits supplémentaires à tout moment."
  }
];
