import { fetchProductById } from '../../../apis/getProducts';
import ProductDetails from '../../../components/ProductDetails';

type Params = { id: string };

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const product = await fetchProductById(resolvedParams.id);

  return (
    <main className="max-w-2xl mx-auto p-6">
      <ProductDetails product={product} />
    </main>
  );
}