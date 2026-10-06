
interface PageProps {
    params: Promise<{ productId: string }>
}

interface Product {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    category: string;
}

const fetchProduct = async (id: string): Promise<Product> => {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json();
    console.log(data);
    return data
}

const ProductDetails = async ({ params }: PageProps) => {
    const { productId } = await params
    const product: Product = await fetchProduct(productId)
    return (
        <div>
            <h1 className=' text-4xl font-bold'>
                Product Details
            </h1>
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.category}</p>;
            <p>{product.price}</p>
        </div>
    )
}

export default ProductDetails