import { fetchProductById } from '../../../apis/getProducts';
import ProductDetails from '../../../components/ProductDetails';

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const product = await fetchProductById(params.id);

  return (
    <main className="max-w-2xl mx-auto p-6">
      <ProductDetails product={product} />
    </main>
  );
}