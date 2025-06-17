import axios from 'axios';
import type { Product } from '../types/index';

const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 5000
});

export async function fetchAllProducts(): Promise<Product[]> {
    const response = await api.get<Product[]>('/products');
    return response.data;
}

export async function fetchProductById(id: string): Promise<Product> {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
}
