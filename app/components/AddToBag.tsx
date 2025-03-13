"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlfor } from "../lib/sanity";

export interface ProductCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any;
}

export function AddToBag({
    currency,
    description,
    image,
    name,
    price,
}: ProductCart) {
    const { addItem, handleCartClick } = useShoppingCart();

    const product = {
        id: `${name}-${Date.now()}`, // Ensures a unique ID every time
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlfor(image).url(),
    };

    return (
        <Button
            onClick={() => {
                addItem(product);
                handleCartClick();
            }}
        >
            Add To Cart
        </Button>
    );
}
