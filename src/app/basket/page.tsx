'use client';
import Link from 'next/link';
import { useBasket } from '@/context/BasketContext';

export default function BasketPage() {
    const { basket, clearBasket } = useBasket();

    // Calculate total price
    const totalPrice = basket.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">🧺 Your Basket</h1>

            {basket.length === 0 ? (
                <p>Your basket is empty.</p>
            ) : (
                <>
                    {basket.map((item, index) => (
                        <div key={index} className="border-b py-2">
                            <p>{item.title}</p>
                            <p>${item.price.toFixed(2)}</p>
                        </div>
                    ))}

                    <div className="mt-4 font-semibold text-lg">
                        Total Price: ${totalPrice.toFixed(2)}
                    </div>

                    <button
                        onClick={clearBasket}
                        className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                        Clear Basket
                    </button>
                </>
            )}

       <Link
  href="/"
  className="inline-block mt-6 text-blue-600 underline hover:text-blue-800"
>
  ← Back to My Store
</Link>
        </div>
    );
}