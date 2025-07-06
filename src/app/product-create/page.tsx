"use client"
import { Submit } from "@/components/submit"
import { useActionState } from "react"
import { FormState, createProduct } from "@/actions/products"
import Link from "next/link"


export default function CreateProduct() {
  const initialState: FormState = {
    errors: {},
  }
  const [state, formAction] = useActionState(createProduct, initialState)


  return (

    <div className="bg-gray-100">
       <Link
          href={'/product-db'}
          className="inline-block mb-8 px-8 py-3 m-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition transform hover:scale-105"
        >
          ← Back 
        </Link>
      <div className="min-h-screen flex items-center justify-center ">
        <form action={formAction} className="p-4 space-y-4 max-w-96 w-full bg-white rounded shadow">
          <div>
            <label className="text-black block">
              Title
              <input
                type="text"
                className="block w-full p-2 text-black border rounded"
                name="title"
              />
            </label>
            {state.errors.title && (<p className="text-red-500">{state.errors.title}</p>)}
          </div>

          <div>
            <label className="text-black block">
              Price
              <input
                type="number"
                className="block w-full p-2 text-black border rounded"
                name="price"
              />
            </label>
            {state.errors.price && (<p className="text-red-500">{state.errors.price}</p>)}
          </div>
          <div>
            <label className="text-black block">
              Description
              <textarea
                className="block w-full p-2 text-black border rounded"
                name="description"
              />
            </label>
            {state.errors.description && (<p className="text-red-500">{state.errors.description}</p>)}
          </div>

          <Submit />
        </form>
      </div>
    </div>


  );

}
