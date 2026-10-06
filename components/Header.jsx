import Link from 'next/link'

const Header = () => {
    return (
        <div className=' flex px-20 py-10 justify-between items-center'>
            <h1 className=' text-3xl font-bold'>
                Brand
            </h1>
            <nav>
                <ul className=' flex gap-10 font-bold'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
            <button className=' bg-black text-white px-5 py-2 rounded-full'>
                <Link href="/login">Sign In</Link>
            </button>
        </div>
    )
}

export default Header