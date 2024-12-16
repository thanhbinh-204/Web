export interface Customer {
  _id: string;
  avatar?: string;
  email: string;
  username: string;
  phonenumber?: string;
  address?: string;
  carts?: string[];
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  images: string[];
  category: string;
  supplier: string;
  description: string;
  discount: number;
}

export interface Category {
  _id: string;
  name: string;
  brand: string;
  image: string[];
}

export interface Feedback {
  id: string;
  productId: string;
  productName: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface Voucher {
  _id: string;
  code: string;
  description: string;
  discountValue: number;
  minimumOrder: number;
  usageLimit: number;
  usedCount: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface Supplier {
  _id: string;
  name: string;
}

export interface Order {
  _id: string;
  customer: string;
  date: string;
  total: number;
  status: '1' | '2';
  items: number;
}
