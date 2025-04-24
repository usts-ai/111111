import { Product, Testimonial, TeamMember, StatItem, HistoryItem, ValueItem } from '../types';

export const products: Product[] = [
  {
    id: "1",
    name: "Gelée de Fruits Rouges Premium",
    description: "Gelée artisanale élaborée à partir de fruits rouges sélectionnés avec soin, parfaite pour accompagner vos desserts gastronomiques.",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "2",
    name: "Gelée d'Agrumes Signature",
    description: "Notre gelée d'agrumes signature, aux saveurs intenses et rafraîchissantes, idéale pour les plats de poisson.",
    category: "Accompagnements",
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "3",
    name: "Préparation pour Gelée Professionnelle",
    description: "Préparation technique pour gelées à usage professionnel, garantissant une tenue parfaite et une texture idéale.",
    category: "Ingrédients",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "4",
    name: "Gelée Décorative Colorée",
    description: "Gamme de gelées décoratives aux couleurs vives et stables, pour sublimer vos créations culinaires avec élégance.",
    category: "Décoration",
    image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "5",
    name: "Cubes de Gelée Aromatisés",
    description: "Cubes de gelée prêts à l'emploi, disponibles en multiples saveurs, pour une utilisation rapide et pratique en restauration.",
    category: "Solutions Prêtes",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "6",
    name: "Gelée Professionnelle Sans Allergènes",
    description: "Formulation spéciale sans allergènes majeurs, adaptée aux établissements servant une clientèle aux besoins alimentaires spécifiques.",
    category: "Spécialités",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Durand",
    role: "Chef Exécutif",
    company: "Le Grand Palais",
    content: "Les produits Deltagel sont incontournables dans ma cuisine. La stabilité et la qualité constante nous permettent de créer des desserts d'exception qui impressionnent toujours notre clientèle exigeante.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "Thomas Lefèvre",
    role: "Directeur F&B",
    company: "Hôtel Magnifique",
    content: "Depuis que nous utilisons exclusivement les gelées Deltagel, les retours de nos clients sont exceptionnels. La facilité d'utilisation et la fiabilité des produits en font un partenaire de choix pour notre chaîne hôtelière.",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    id: 3,
    name: "Marie Clément",
    role: "Pâtissière",
    company: "Douceurs & Traditions",
    content: "En tant qu'artisan pâtissier, la qualité des ingrédients est primordiale. Deltagel comprend nos besoins et nous fournit des produits d'une pureté incomparable, aux saveurs authentiques qui subliment nos créations.",
    avatar: "https://randomuser.me/api/portraits/women/62.jpg"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Jean-Pierre Moreau",
    role: "Fondateur & Président",
    image: "https://randomuser.me/api/portraits/men/26.jpg"
  },
  {
    id: 2,
    name: "Émilie Dufresne",
    role: "Directrice R&D",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Laurent Garnier",
    role: "Chef des Opérations",
    image: "https://randomuser.me/api/portraits/men/57.jpg"
  },
  {
    id: 4,
    name: "Nathalie Petit",
    role: "Responsable Qualité",
    image: "https://randomuser.me/api/portraits/women/29.jpg"
  }
];

export const stats: StatItem[] = [
  {
    id: 1,
    value: "35+",
    label: "Années d'expertise",
    icon: "🏆"
  },
  {
    id: 2,
    value: "1200+",
    label: "Clients professionnels",
    icon: "👨‍🍳"
  },
  {
    id: 3,
    value: "98%",
    label: "Taux de satisfaction",
    icon: "⭐"
  },
  {
    id: 4,
    value: "150+",
    label: "Recettes exclusives",
    icon: "📋"
  }
];

export const historyTimeline: HistoryItem[] = [
  {
    year: "1985",
    title: "Création de Deltagel",
    description: "Fondation de l'entreprise par Jean Delorme, avec une vision claire : révolutionner les agents gélifiants pour la restauration professionnelle.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    year: "1992",
    title: "Premier brevet déposé",
    description: "Développement d'une formule exclusive permettant une gélification à basse température, préservant ainsi les saveurs délicates.",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    year: "2005",
    title: "Ouverture à l'international",
    description: "Début de l'expansion internationale avec l'ouverture de bureaux en Espagne, Italie et Allemagne.",
    image: "https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    year: "2015",
    title: "Certification ISO 22000",
    description: "Obtention de la certification ISO 22000, confirmant notre engagement envers la sécurité alimentaire et la qualité.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    year: "2023",
    title: "Lancement de la gamme Éco-Responsable",
    description: "Introduction d'une nouvelle gamme de produits éco-responsables, issus de l'agriculture biologique et conditionnés dans des emballages recyclables.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

export const companyValues: ValueItem[] = [
  {
    id: 1,
    title: "Innovation",
    description: "Nous repoussons constamment les limites de la science alimentaire pour créer des produits toujours plus performants et innovants.",
    icon: "💡"
  },
  {
    id: 2,
    title: "Excellence",
    description: "Chaque produit qui sort de nos usines répond aux normes les plus strictes de qualité et de performance.",
    icon: "⭐"
  },
  {
    id: 3,
    title: "Durabilité",
    description: "Notre engagement envers l'environnement guide toutes nos décisions, de la sourcing des matières premières à l'emballage final.",
    icon: "🌱"
  },
  {
    id: 4,
    title: "Partenariat",
    description: "Nous travaillons main dans la main avec nos clients pour comprendre leurs besoins et développer des solutions sur mesure.",
    icon: "🤝"
  }
];
