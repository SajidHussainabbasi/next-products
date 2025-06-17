'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '../types/index';
import { useBasket } from '@/context/BasketContext';

type ProductCardProps = {
    product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
    const { addToBasket } = useBasket();

    return (
        <div className="border p-4 rounded shadow hover:shadow-lg flex flex-col items-center bg-violet-500">
            <div className="relative w-full aspect-[4/3] mb-2 bg-blue-50">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="pointer-events-none"
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                />
            </div>

            <Link
                href={`/product/${product.id}`}
                className="text-sm font-medium text-center hover:underline"
            >
                {product.title}
            </Link>

            <button
                onClick={() => addToBasket(product)}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Add to Basket
            </button>
        </div>
    );
}