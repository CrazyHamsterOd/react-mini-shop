import { useQuery } from '@tanstack/react-query';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const products: Product[] = (await response.json()) as Product[];

  return products;
}

const ProductList = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <h2>Products is loading...</h2>;
  if (isError) return <h2>Loading error: {(error as Error).message}</h2>;

  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {products?.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList;
