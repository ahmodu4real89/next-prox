"use client"
import Link from "next/link";
import Form from "next/form"
import { getProducts } from "../prisma-db";
import { removeProduct } from "@/actions/products";
import { useOptimistic } from "react";


export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null
}

export const ProductDetails = ({products}:{products:Product[]}) => {
    
   const[optimisticProducts, setOptimisticProduct] = useOptimistic(products, (currentProduct, productId) => {
      return  currentProduct.filter((product)=> product.id !== productId)
    });

    const removeProductById = async (productId:number)=>{
        setOptimisticProduct(productId)
        await removeProduct(productId)
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10">
         <Link
          href={'/'}
          className="inline-block mb-8 px-8 py-3 mx-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition transform hover:scale-105"
        >
          ← Back 
        </Link>
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                     <h1 className="text-3xl font-bold text-gray-800">Products</h1>
                    <Link
                        href={"/product-create"}
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        + Create Product
                    </Link>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {optimisticProducts.map((product) => (
                        <li
                            key={product.id}
                            className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
                        >
                            <Link href={`/product-db/${product.id}`}>
                                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{product.title}</h2>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <p className="text-xl font-bold text-green-600">${product.price}</p>
                            </Link>
                            {/* <Form action={removeProductById.bind(null, product.id)}>
                                  <button type="submit" className="px-4 mt-4 text-white bg-red-500 rounded-md hover:bg-red-300">Delete</button>
                            </Form> */}
                          
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}
