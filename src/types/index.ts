export interface NavItem {
  name: string;
  path: string;
}

export interface Product {
  id: string;
  name: string;
  origin?: string;
  brand?: string;
  format?: string;
  caliber?: string;
  packaging?: string;
  unit?: string;
  category: string;
  image?: string;
  description?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description?: string;
  image?: string;
}

export interface QuoteRequest {
  companyName: string;
  fullName: string;
  email: string;
  phone: string;
  cityPostalCode: string;
  productCategories: string[];
  otherProducts?: string;
  estimatedQuantities: string;
  packagingRequirements: string;
  deliveryDate: string;
  callbackRequested: boolean;
  preferredCallTime?: string;
  attachedFile?: File | null;
  productId?: string; // Optionnel - si la demande concerne un produit spécifique
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  company: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: string;
}

export interface HistoryItem {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface ValueItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}
