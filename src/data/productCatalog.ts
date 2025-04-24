import { Product, ProductCategory } from '../types';

// Définition des catégories de produits
export const productCategories: ProductCategory[] = [
  {
    id: "poissons",
    name: "Poissons",
    description: "Notre sélection de poissons de qualité supérieure pour vos créations culinaires.",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "cephalopodes",
    name: "Céphalopodes",
    description: "Découvrez notre gamme de céphalopodes frais et surgelés.",
    image: "https://images.unsplash.com/photo-1545809074-59fc8e084cde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "crustaces",
    name: "Crustacés",
    description: "Les meilleurs crustacés sélectionnés pour votre plaisir gustatif.",
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "fruits-de-mer",
    name: "Fruits de Mer",
    description: "Une sélection raffinée de fruits de mer de haute qualité.",
    image: "https://images.unsplash.com/photo-1576646333176-9523a592dfe1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "beignets-croquettes",
    name: "Beignets, Croquettes & Pré-cuisinés",
    description: "Des plats préparés avec soin pour vous faciliter la vie.",
    image: "https://images.unsplash.com/photo-1581184953963-d15972933db1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "charcuteries",
    name: "Charcuteries Ibériques",
    description: "Le meilleur de la charcuterie ibérique traditionnelle.",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

// Catalogue de produits
export const catalogProducts: Product[] = [
  // POISSONS
  {
    id: "p1",
    name: "MORUES EN MIETTES DESSALEES",
    origin: "Norvège",
    brand: "BRASMAR",
    format: "SACHET",
    caliber: "1 Kg",
    packaging: "6×1",
    unit: "K",
    category: "poissons",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "p2",
    name: "MORUES DESSALEES 'POSTA'",
    origin: "Norvège",
    brand: "BRASMAR",
    format: "VRAC",
    caliber: "250–350 Gr",
    packaging: "1×6",
    unit: "K",
    category: "poissons",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "p3",
    name: "PAVÉS DE MORUES DESSALÉES",
    origin: "Norvège",
    brand: "BRASMAR",
    format: "VRAC",
    caliber: "300–400 Gr",
    packaging: "1×7",
    unit: "K",
    category: "poissons",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "p4",
    name: "PAVÉS DE MORUES DESSALÉES",
    origin: "Norvège",
    brand: "BRASMAR",
    format: "VRAC",
    caliber: "250–300 Gr",
    packaging: "1×7",
    unit: "K",
    category: "poissons",
    image: "https://images.unsplash.com/photo-1559737720-dfe4280702ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "p5",
    name: "DOS DE CABILLAUD",
    origin: "Norvège",
    brand: "SEABLUE",
    format: "VRAC",
    caliber: "170–210 Gr",
    packaging: "1×10",
    unit: "K",
    category: "poissons",
    image: "https://images.unsplash.com/photo-1551172851-a8af6245fc4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "p6",
    name: "LONGES D'ESPADON",
    origin: "Pacifique",
    brand: "NORIBERICA",
    format: "VRAC",
    caliber: "3/5",
    packaging: "1×8*",
    unit: "K",
    category: "poissons",
    image: "https://images.unsplash.com/photo-1557496897-3b812a4a5344?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "p7",
    name: "DARNES D'ESPADON",
    origin: "Pacifique",
    brand: "NORIBERICA",
    format: "VRAC",
    caliber: "160–180 Gr",
    packaging: "1×6",
    unit: "K",
    category: "poissons",
    image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "p8",
    name: "LOTTE NETTOYÉE",
    origin: "Namibie",
    brand: "PESCAPUERTA",
    format: "VRAC",
    caliber: "1,5/2",
    packaging: "1×22,5",
    unit: "K",
    category: "poissons",
    image: "https://images.unsplash.com/photo-1602491674275-316d95a9c819?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "p9",
    name: "FILET DE MERLU",
    origin: "Namibie",
    brand: "PESCAPUERTA",
    format: "VRAC",
    caliber: "170–220",
    packaging: "1×5",
    unit: "K",
    category: "poissons",
    image: "https://images.unsplash.com/photo-1580058572462-2f13fee9d6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "p10",
    name: "PAVÉS DE MERLU",
    origin: "Namibie",
    brand: "PEREIRA",
    format: "VRAC",
    caliber: "160–200 Gr",
    packaging: "1×5",
    unit: "K",
    category: "poissons",
    image: "https://images.unsplash.com/photo-1593458136536-46a381cd68b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "p11",
    name: "FILETS DE SAUMON",
    origin: "Chili",
    brand: "HUDEOT",
    format: "VRAC",
    caliber: "1–1,5 Kg",
    packaging: "1×10",
    unit: "K",
    category: "poissons",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "p12",
    name: "LONGE DE THON",
    origin: "Pacifique",
    brand: "PEREIRA",
    format: "VRAC",
    caliber: "4/5 (8–9 Kg)*",
    packaging: "—",
    unit: "K",
    category: "poissons",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  
  // CÉPHALOPODES
  {
    id: "c1",
    name: "POULPES",
    origin: "Madagascar",
    brand: "SEAFOOD FLEUR",
    format: "—",
    caliber: "1,5/2",
    packaging: "1×15",
    unit: "K",
    category: "cephalopodes",
    image: "https://images.unsplash.com/photo-1545809074-59fc8e084cde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "c2",
    name: "POULPES",
    origin: "Madagascar",
    brand: "SEAFOOD FLEUR",
    format: "—",
    caliber: "2/3",
    packaging: "1×12",
    unit: "K",
    category: "cephalopodes",
    image: "https://images.unsplash.com/photo-1545809074-59fc8e084cde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "c3",
    name: "POULPES",
    origin: "Madagascar",
    brand: "SEAFOOD FLEUR",
    format: "—",
    caliber: "3/4",
    packaging: "1×13",
    unit: "K",
    category: "cephalopodes",
    image: "https://images.unsplash.com/photo-1545809074-59fc8e084cde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "c4",
    name: "CALAMARS 'PUNTILLAS'",
    origin: "Vietnam",
    brand: "FROXA",
    format: "SACHET",
    caliber: "—",
    packaging: "6×1",
    unit: "K",
    category: "cephalopodes",
    image: "https://images.unsplash.com/photo-1560769596-8f593e6c6d8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "c5",
    name: "CALAMARS NETTOYÉS 'Tubes'",
    origin: "Argentine",
    brand: "CONNECTION",
    format: "SACHET",
    caliber: "U-5",
    packaging: "10×700 Gr",
    unit: "U",
    category: "cephalopodes",
    image: "https://images.unsplash.com/photo-1590759668628-05b0fc3a4f74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  
  // CRUSTACÉS
  {
    id: "cr1",
    name: "QUEUES DE CREVETTES Décortiquées",
    origin: "Panama",
    brand: "CONNECTION",
    format: "SACHET",
    caliber: "26–30",
    packaging: "10×800 Gr",
    unit: "U",
    category: "crustaces",
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "cr2",
    name: "QUEUES DE CREVETTES Décortiquées",
    origin: "Panama",
    brand: "CONNECTION",
    format: "SACHET",
    caliber: "16–20",
    packaging: "10×800 Gr",
    unit: "U",
    category: "crustaces",
    image: "https://images.unsplash.com/photo-1623354582128-876638beeee0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "cr3",
    name: "GAMBAS ENTIÈRES 'Black-Tiger'",
    origin: "Black Tiger",
    brand: "BRASMAR",
    format: "BOÎTE",
    caliber: "21–30",
    packaging: "10×750 Gr",
    unit: "K",
    category: "crustaces",
    image: "https://images.unsplash.com/photo-1565057430174-c0e0c9aee38e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  
  // FRUITS DE MER
  {
    id: "fm1",
    name: "MOULES PASTEURISÉES 'ria de vigo'",
    origin: "Espagne",
    brand: "PESCADONA",
    format: "SACHET",
    caliber: "40–60",
    packaging: "10×1 Kg",
    unit: "K",
    category: "fruits-de-mer",
    image: "https://images.unsplash.com/photo-1576646333176-9523a592dfe1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "fm2",
    name: "MOULES 1/2 COQUILLES 'ria de vigo'",
    origin: "Espagne",
    brand: "PESCADONA",
    format: "BARQ",
    caliber: "50–60",
    packaging: "4×1 Kg",
    unit: "K",
    category: "fruits-de-mer",
    image: "https://images.unsplash.com/photo-1594046243098-0fceea9d451e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  
  // BEIGNETS, CROQUETTES & PRÉ-CUISINÉS
  {
    id: "bc1",
    name: "BEIGNETS DE VIANDE (Rissois de carne)",
    origin: "Portugal",
    brand: "BRASMAR",
    packaging: "13×400 Gr",
    unit: "U",
    category: "beignets-croquettes",
    image: "https://images.unsplash.com/photo-1607290282358-515a6c275fd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "bc2",
    name: "BEIGNETS DE CREVETTES (Rissois de camarão)",
    origin: "Portugal",
    brand: "BRASMAR",
    packaging: "13×400 Gr",
    unit: "U",
    category: "beignets-croquettes",
    image: "https://images.unsplash.com/photo-1617622141489-0e9abbffa68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  
  // CHARCUTERIES IBÉRIQUES
  {
    id: "ch1",
    name: "JAMBON BODEGA (14 MOIS)",
    origin: "Zamora",
    brand: "MATELLAN",
    caliber: "8–9 Kg",
    unit: "K",
    category: "charcuteries",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "ch2",
    name: "JAMBON BODEGA DÉSOSSÉ ½ (NETTOYÉ)",
    origin: "Salamanca",
    brand: "JOSE JIMENEZ",
    caliber: "2,5–3 Kg",
    unit: "K",
    category: "charcuteries",
    image: "https://images.unsplash.com/photo-1598511726623-d2e9996e75e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];
