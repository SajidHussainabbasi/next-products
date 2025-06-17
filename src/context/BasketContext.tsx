'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import type { Product } from '@/types';

type BasketContextType = {
    basket: Product[];
    addToBasket: (product: Product) => void;
    clearBasket: () => void;  // Add clearBasket here
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: ReactNode }) => {
    const [basket, setBasket] = useState<Product[]>([]);

    const addToBasket = (product: Product) => {
        setBasket(prev => [...prev, product]);
    };

    const clearBasket = () => {
        setBasket([]);  // Clear the basket items
    };

    return (
        <BasketContext.Provider value={{ basket, addToBasket, clearBasket }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => {
    const context = useContext(BasketContext);
    if (!context) throw new Error('useBasket must be used within BasketProvider');
    return context;
};