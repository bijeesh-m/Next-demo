import Link from "next/link";

interface Product {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    category: string;
}

const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products"); // SSG
    // const res = await fetch("https://dummyjson.com/products", { cache: "no-store" }); // SSR
    // const res = await fetch("https://dummyjson.com/products", { next: { revalidate: 10 } }); // ISR

    console.log("fetching");

    const data = await res.json();
    return data.products;
}

const Products = async () => {
    const products: Product[] = await fetchProducts()

    const date = new Date().toLocaleTimeString()



    return (
        <div>
            <div className=' p-10 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                <h1 className=" text-5xl font-bold">
                    {date}
                </h1>
                {
                    products.map((prod: Product) => {
                        return (
                            <Link href={`/products/${prod.id}`} className='bg-linear-to-br rounded-2xl p-5  from-fuchsia-200 to-fuchsia-700' key={prod.id}>
                                <img src={prod.thumbnail} alt={prod.title} />
                                <h1 className=' text-xl font-bold'>{prod.title}</h1>
                                <h3 className=' text-5xl font-semibold'>{prod.price}</h3>
                                <p className=' italic'>{prod.category}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products