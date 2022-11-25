export interface IStoreProduct {
  id: number;
  name: string;
  isActive: boolean;
  imageUrl: string;
  description?: string;
}

export interface IServerProduct extends IStoreProduct {
  createdAt: Date;
  updatedAt: Date;
}
