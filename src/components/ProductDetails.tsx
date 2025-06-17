'use client';

import Image from 'next/image';
import type { Product } from '../types';
import { useBasket } from '@/context/BasketContext'; // Adjust the path as needed

type ProductDetailsProps = {
    product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
    const { addToBasket } = useBasket();

    return (
        <div className="p-6 max-w-xl mx-auto">
            <div className="relative w-full h-64 mb-4">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                />
            </div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-lg text-white-700 mb-2">${product.price}</p>
            <p className="text-white-600">{product.description}</p>

            <button
                onClick={() => addToBasket(product)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Add to Basket
            </button>
        </div>
    );
}