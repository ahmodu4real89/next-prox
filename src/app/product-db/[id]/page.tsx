import { getProduct } from "@/app/prisma-db"
import { Product } from "../page";
import { notFound } from "next/navigation";
import Link from "next/link";
import Form from "next/form";
import { removeProduct } from "@/actions/products";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product: Product | null = await getProduct(parseInt(id))
  if (!product) {
    notFound()
  }
  return (

    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <ul className="w-full max-w-md space-y-6">
          <li
            key={product.id}
            className="p-6 bg-white shadow-lg rounded-xl transition hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Product Details</h2>
            <div className="space-y-2 text-gray-600">
              <div>
                <span className="font-medium text-gray-800">Title:</span> {product.title}
              </div>
              <div>
                <span className="font-medium text-gray-800">Price:</span> {product.price}
              </div>
              <div>
                <span className="font-medium text-gray-800">Desc:</span> {product.description}
              </div>
            </div>
            <div className="mt-6 flex flex-row space-x-4">
              <Link href="/product-db"
                className="inline-block px-5 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition"
              >
                Back
              </Link>

              <Link
                href={`/product-edit/${product.id}`}
                className="inline-block px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
              >
                Edit
              </Link>

              <Form action={removeProduct.bind(null, product.id)}>
                <button
                  className="inline-block px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </Form>

            </div>
          </li>
        </ul>
      </div>
    </>

  );


}

