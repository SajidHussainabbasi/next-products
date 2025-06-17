'use client';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="bg-violet-500 text-white px-6 py-4 shadow">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">🛍️ My Store</Link>
                <div className="flex items-center gap-6">
                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/basket" className="relative">
                        <ShoppingCart className="w-6 h-6" />
                        {/* You can add a cart count badge here later */}
                    </Link>
                </div>
            </div>
        </nav>
    );
}