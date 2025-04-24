export interface NavItem {
  name: string;
  path: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
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
