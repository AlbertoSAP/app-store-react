export interface IProduct {
    productName: string;
    quantity: number;
    size: string;
    suggestedPrice: number;
    categoryKey: string;
    brandKey: string;
    price: number;
    color: string[];
    image: string[];
    productKey?:string
  }