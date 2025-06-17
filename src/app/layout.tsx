import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import { BasketProvider } from '@/context/BasketContext';

export const metadata = {
    title: 'Next Products',
    description: 'Product Listing App'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-gray-900 text-white">
                <BasketProvider>
                    <Navbar />
                    <main className="p-4 max-w-6xl mx-auto">{children}</main>
                </BasketProvider>
            </body>
        </html>
    );
}