
export interface Product {
    _id : string;
    id : number;
    favoriteCount: number;
    images : string[];
    tags : string[];
    price : number;
    description : string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }