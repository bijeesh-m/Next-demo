'use client'
import { useRouter } from 'next/navigation'
import { ChangeEvent, SubmitEvent, useState } from 'react'
const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const router = useRouter()
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        if (formData.password && formData.username) {
            router.push("/")
        }
    }

    return (
        <div className=' h-screen flex justify-center'>
            <form onSubmit={handleSubmit} className=' flex flex-col gap-10 w-xl h-fit p-10 rounded-lg border-2 '>
                <h1 className=' text-4xl text-center'>Login</h1>
                <input placeholder='Enter your username' className=' border outline-none px-5 py-3' onChange={handleChange} value={formData.username} type="text" name="username" id="" />
                <input placeholder=' Enter your password' className=' border outline-none px-5 py-3' onChange={handleChange} value={formData.password} type="password" name="password" id="" />
                <button className=' py-3 bg-black text-white'>
                    Login
                </button>
            </form>

        </div>
    )
}

export default Login