export interface simplifiedProduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: String;
    categoryName: string;
    name: string;
}

export interface fullProduct {
    _id: string;
    images: any;
    price: number;
    slug: String;
    categoryName: string;
    name: string;
    description: string;
}
