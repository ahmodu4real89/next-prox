"use client"
import { Submit } from "@/components/submit"
import { useActionState } from "react"
import { EditProduct, FormState } from "@/actions/products"
import { Product } from "./page"


export default function ProductEditForm({product}:{product:Product}) {
    const initialState: FormState = {
        errors: {},
      }
      const editProductId = EditProduct.bind(null, product.id)
      const [state, formAction] = useActionState(editProductId, initialState)
  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <form action={formAction} className="p-4 space-y-4 max-w-96 w-full bg-white rounded shadow">
            <div>
              <label className="text-black block">
                Title
                <input
                  type="text"
                  className="block w-full p-2 text-black border rounded"
                  name="title"
                  defaultValue={product.title}
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
                  defaultValue={product.price}
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
                  defaultValue={product.description ?? ''}
                />
              </label>
              {state.errors.description && (<p className="text-red-500">{state.errors.description}</p>)}
            </div>
    
            <Submit />
          </form>
        </div>
  )
}

