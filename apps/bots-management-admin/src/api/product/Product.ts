export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  quantity: number | null;
  name: string | null;
  price: number | null;
  category?: "Option1" | null;
  imageUrl: string | null;
};
