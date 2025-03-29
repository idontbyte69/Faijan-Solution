export interface Service {
  id: string;
  title: string;
  description: string;
  image?: string | null;
  category: string;
  price?: number | null;
  isActive: boolean;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ServiceCreateInput {
  title: string;
  description: string;
  image?: string;
  category: string;
  price?: number;
  isActive?: boolean;
}

export interface ServiceUpdateInput {
  id: string;
  title?: string;
  description?: string;
  image?: string;
  category?: string;
  price?: number;
  isActive?: boolean;
} 